const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const jwt = require('jsonwebtoken');
const forms_db = require('../../db2_connection');
const users_db = require('../../db_connection');

exports.insert_code = (req, res, next) => {
    const language = req.headers.language;
    let message = null;
    if (language === 'pt') {
        message = {
            maxTry: 'Excedeu o número de tentativas máximas de inserção do código. Para poder voltar a inserir códigos contacte-nos',
            alreadyRegistered: 'Código já foi registado',
            success: 'Código registado com sucesso'
        }
    } else {
        message = {
            maxTry: 'You have exceeded the number of maximum code insertion attempts. In order to re-enter codes please contact us',
            alreadyRegistered: 'Code has already been registered',
            success: 'Code successfully registered'
        }
    }

    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    let canInsertCodes = 'SELECT can_insert_codes FROM users WHERE id_users = ?';
    users_db.query(canInsertCodes, decoded.userId, (err, results) => {
        if (err) {
            console.log(err)
        } else {
            if (results[0].can_insert_codes === 0) {
                res.status(200).json({
                    status: 0,
                    message: message.maxTry
                })
            } else {
                let checkCode = 'SELECT * FROM original_forms WHERE code = ?';
                forms_db.query(checkCode, req.params.code, (err, results) => {
                    if (results.length === 0) {
                        let checkAttempts = 'SELECT code_attempts, can_insert_codes FROM users WHERE id_users = ?';
                        users_db.query(checkAttempts, decoded.userId, (err, results) => {
                            if (err) {
                                console.log(err);
                            } else {
                                let code_attempts = results[0].code_attempts;
                                if (code_attempts === 1) {
                                    let blockAccount = 'UPDATE users SET can_insert_codes = ? WHERE id_users = ?';
                                    users_db.query(blockAccount, ['0', decoded.userId], (err, results) => {
                                        if (err) {
                                            console.log(err)
                                        } else {
                                            res.status(200).json({
                                                status: 0,
                                                message: message.maxTry
                                            })
                                        }
                                    })
                                } else {
                                    let attempts = code_attempts - 1;
                                    let update_attempts = 'UPDATE users SET code_attempts = ? WHERE id_users = ?';
                                    users_db.query(update_attempts, [attempts, decoded.userId], (err, results) => {
                                        if (err) {
                                            console.log(err)
                                        } else {
                                            let check_updated_attempts = 'SELECT code_attempts FROM users WHERE id_users = ?';
                                            users_db.query(check_updated_attempts, decoded.userId, (err, results) => {
                                                if (err) {
                                                    console.log(err)
                                                } else {
                                                    let remaining_attempts = results[0].code_attempts;
                                                    let invalidCode = null;
                                                    if (language === 'pt') {
                                                        invalidCode = 'Código inválido. Tem mais ' + remaining_attempts + ' tentativa(s)'
                                                    } else {
                                                        invalidCode = 'Invalid code. You have more ' + remaining_attempts + ' attempt(s)'
                                                    }
                                                    ;

                                                    res.status(200).json({
                                                        status: 0,
                                                        message: invalidCode
                                                    })
                                                }
                                            })
                                        }
                                    })
                                }
                            }
                        })
                    } else {
                        let checkCodeAttempts = 'SELECT code_attempts FROM users WHERE id_users = ?';
                        users_db.query(checkCodeAttempts, decoded.userId, (err, results) => {
                            if (err) {
                                console.log(err);
                            } else {
                                let code_attemtps = results[0].code_attempts;
                                if (code_attemtps > 0) {
                                    let reset_attempts = 'UPDATE users SET code_attempts = (SELECT global_login_attempts FROM configs) WHERE id_users = ?';
                                    users_db.query(reset_attempts, decoded.userId, (err, results) => {
                                        if (err) {
                                            console.log(err)
                                        }
                                    })
                                    let checkCodeHasUser = 'SELECT * FROM users_forms WHERE code = ?';
                                    users_db.query(checkCodeHasUser, req.params.code, (err, results) => {
                                        if (results.length > 0) {
                                            res.status(200).json({
                                                status: 0,
                                                message: message.alreadyRegistered
                                            })
                                        } else {
                                            let insertCodeAndUser = 'INSERT INTO users_forms (ref_id_users, code) VALUES (?,?)';
                                            users_db.query(insertCodeAndUser, [decoded.userId, req.params.code], (err, results) => {
                                                if (err) {
                                                    res.status(400).json({
                                                        message: err
                                                    })
                                                } else {
                                                    res.status(200).json({
                                                        status: 1,
                                                        message: message.success
                                                    })
                                                }
                                            })
                                        }
                                    })
                                } else {
                                    res.status(200).json({
                                        status: 0,
                                        message: message.maxTry
                                    })
                                }
                            }
                        })
                    }
                })
            }
        }
    })
};

exports.registered_codes = (req, res, next) => {
    const language = req.headers.language;
    let message = null;
    if (language === 'pt') {
        message = {
            noCode: 'Sem códigos registados',
            error: 'Erro'
        }
    } else {
        message = {
            noCode: 'No codes registered',
            error: 'Error'
        }
    }
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    let getCode = 'SELECT code FROM users_forms WHERE ref_id_users = ?';
    users_db.query(getCode, decoded.userId, (err, results) => {
        if (results.length === 0) {
            res.status(200).json({
                status: 0,
                message: message.noCode
            })
        } else {
            const codes = results.map(e => {
                return '"' + e.code + '"';
            }).join(", ");
            const getDate = 'SELECT DATE_FORMAT(consultation_date, "%d-%m-%Y") as consultation_date, code, completed FROM original_forms WHERE code IN (' + codes + ')';
            forms_db.query(getDate, (err, results) => {
                if (err) {
                    res.status(200).json({
                        status: 0,
                        messages: message.error
                    })
                } else {
                    res.status(200).json({
                        status: 1,
                        results
                    })
                }
            })
        }
    })
};

exports.code_results = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    const language = req.headers.language;
    let codeResults = 'SELECT completed, genders.value gender, departments_services_schools.value department, ages.value age, marital_status.value marital_status, academic_levels.value academic_level, smokers_value.value smoker_value, frequencies.value smoke_frequencie, average_daily_smokes.value weekly_smokes, health_opinions.value health_opinion, weight, height, chronic_disease, chronic_diseases_value.value chronic_diseases, takes_meds, takes_meds.number meds_number, takes_meds_value.value meds_value, pain_value.value pain_value, local_pain.value local_pain, pain_scale.value pain_scale, meals.value meals, breakfast.value breakfast, fruits.value fruits, vegetables.value vegetables, sodas.value sodas, fast_food.value fast_food, alcohol, alcohol.beer beers, alcohol.spirit_drinks spirit_drinks, alcohol.wine wine, physical_activity, physical_activity_value.value physical_activity_value, physical_activity_hours.value physical_activity_hours, walking_cycling.value walking_cycling, systolic_blood_pressure, diastolic_blood_pressure, pulse, uric_acid, glucose, total_cholesterol, spirometry, visual_screening, auditory_screening, ecg, eritrogram, leukogram, spirometry_change.value spirometry_change, visual_screening_change.value visual_screening_change, auditory_screening_change.value auditory_screening_change, ecg_change.value ecg_change, eritrogram_change.value eritrogram_change, leukogram_change.value leukogram_change, consultation_date FROM original_forms LEFT JOIN genders ON original_forms.ref_id_genders = genders.id_genders LEFT JOIN departments_services_schools ON original_forms.ref_id_departments_services_schools = departments_services_schools.id_departments_services_schools LEFT JOIN ages ON original_forms.ref_id_ages = ages.id_ages LEFT JOIN marital_status ON original_forms.ref_id_marital_status = marital_status.id_marital_status LEFT JOIN academic_levels ON original_forms.ref_id_academic_levels = academic_levels.id_academic_levels LEFT JOIN smokers ON original_forms.id_original_forms = smokers.ref_id_original_forms LEFT JOIN smokers_value ON smokers_value.id_smokers_value = smokers.ref_id_smokers_value LEFT JOIN frequencies ON frequencies.id_frequencies = smokers.ref_id_frequencies LEFT JOIN average_daily_smokes ON average_daily_smokes.id_average_daily_smokes = smokers.ref_id_average_daily_smokes LEFT JOIN health_opinions ON original_forms.ref_id_health_opinions = health_opinions.id_health_opinions LEFT JOIN chronic_diseases ON original_forms.id_original_forms = chronic_diseases.ref_id_original_forms LEFT JOIN chronic_diseases_value ON chronic_diseases_value.id_chronic_diseases_value = chronic_diseases.ref_id_chronic_diseases_value LEFT JOIN takes_meds ON original_forms.id_original_forms = takes_meds.ref_id_original_forms LEFT JOIN takes_meds_value ON takes_meds_value.id_takes_meds_value = takes_meds.ref_id_takes_meds_value LEFT JOIN pain ON original_forms.id_original_forms = pain.ref_id_original_forms LEFT JOIN pain_value ON pain_value.id_pain_value = pain.ref_id_pain_value LEFT JOIN local_pain ON local_pain.id_local_pain = pain.ref_id_local_pain LEFT JOIN pain_scale ON pain_scale.id_pain_scale = pain.ref_id_pain_scale LEFT JOIN meals ON original_forms.ref_id_meals = meals.id_meals LEFT JOIN breakfast ON original_forms.ref_id_breakfast = breakfast.id_breakfast LEFT JOIN fruits ON original_forms.ref_id_fruits = fruits.id_fruits LEFT JOIN vegetables ON original_forms.ref_id_vegetables = vegetables.id_vegetables LEFT JOIN sodas ON original_forms.ref_id_sodas = sodas.id_sodas LEFT JOIN fast_food ON original_forms.ref_id_fast_food = fast_food.id_fast_food LEFT JOIN alcohol ON original_forms.id_original_forms = alcohol.ref_id_original_forms LEFT JOIN physical_activity ON original_forms.id_original_forms = physical_activity.ref_id_original_forms LEFT JOIN physical_activity_hours ON physical_activity_hours.id_physical_activity_hours = physical_activity.ref_id_physical_activity_hours LEFT JOIN physical_activity_value ON physical_activity_value.id_physical_activity_value = physical_activity.ref_id_physical_activity_value LEFT JOIN walking_cycling ON original_forms.ref_id_walking_cycling = walking_cycling.id_walking_cycling LEFT JOIN spirometry_change ON original_forms.ref_id_spirometry_change = spirometry_change.id_spirometry_change LEFT JOIN visual_screening_change ON original_forms.ref_id_visual_screening_change = visual_screening_change.id_visual_screening_change LEFT JOIN auditory_screening_change ON original_forms.ref_id_auditory_screening_change = auditory_screening_change.id_auditory_screening_change LEFT JOIN ecg_change ON original_forms.ref_id_ecg_change = ecg_change.id_ecg_change LEFT JOIN eritrogram_change ON original_forms.ref_id_eritrogram_change = eritrogram_change.id_eritrogram_change LEFT JOIN leukogram_change ON original_forms.ref_id_leukogram_change = leukogram_change.id_leukogram_change WHERE code = ?';

    if (language === "en") {
        codeResults = 'SELECT completed, genders.value_en gender, departments_services_schools.value_en department, ages.value_en age, marital_status.value_en marital_status, academic_levels.value_en academic_level, smokers_value.value_en smoker_value, frequencies.value_en smoke_frequencie, average_daily_smokes.value_en weekly_smokes, health_opinions.value_en health_opinion, weight, height, chronic_disease, chronic_diseases_value.value_en chronic_diseases, takes_meds, takes_meds.number meds_number, takes_meds_value.value_en meds_value, pain_value.value_en pain_value, local_pain.value_en local_pain, pain_scale.value pain_scale, meals.value_en meals, breakfast.value_en breakfast, fruits.value_en fruits, vegetables.value_en vegetables, sodas.value_en sodas, fast_food.value_en fast_food, alcohol, alcohol.beer beers, alcohol.spirit_drinks spirit_drinks, alcohol.wine wine, physical_activity, physical_activity_value.value_en physical_activity_value, physical_activity_hours.value_en physical_activity_hours, walking_cycling.value_en walking_cycling, systolic_blood_pressure, diastolic_blood_pressure, pulse, uric_acid, glucose, total_cholesterol, spirometry, visual_screening, auditory_screening, ecg, eritrogram, leukogram, spirometry_change.value_en spirometry_change, visual_screening_change.value_en visual_screening_change, auditory_screening_change.value_en auditory_screening_change, ecg_change.value_en ecg_change, eritrogram_change.value_en eritrogram_change, leukogram_change.value_en leukogram_change, consultation_date FROM original_forms LEFT JOIN genders ON original_forms.ref_id_genders = genders.id_genders LEFT JOIN departments_services_schools ON original_forms.ref_id_departments_services_schools = departments_services_schools.id_departments_services_schools LEFT JOIN ages ON original_forms.ref_id_ages = ages.id_ages LEFT JOIN marital_status ON original_forms.ref_id_marital_status = marital_status.id_marital_status LEFT JOIN academic_levels ON original_forms.ref_id_academic_levels = academic_levels.id_academic_levels LEFT JOIN smokers ON original_forms.id_original_forms = smokers.ref_id_original_forms LEFT JOIN smokers_value ON smokers_value.id_smokers_value = smokers.ref_id_smokers_value LEFT JOIN frequencies ON frequencies.id_frequencies = smokers.ref_id_frequencies LEFT JOIN average_daily_smokes ON average_daily_smokes.id_average_daily_smokes = smokers.ref_id_average_daily_smokes LEFT JOIN health_opinions ON original_forms.ref_id_health_opinions = health_opinions.id_health_opinions LEFT JOIN chronic_diseases ON original_forms.id_original_forms = chronic_diseases.ref_id_original_forms LEFT JOIN chronic_diseases_value ON chronic_diseases_value.id_chronic_diseases_value = chronic_diseases.ref_id_chronic_diseases_value LEFT JOIN takes_meds ON original_forms.id_original_forms = takes_meds.ref_id_original_forms LEFT JOIN takes_meds_value ON takes_meds_value.id_takes_meds_value = takes_meds.ref_id_takes_meds_value LEFT JOIN pain ON original_forms.id_original_forms = pain.ref_id_original_forms LEFT JOIN pain_value ON pain_value.id_pain_value = pain.ref_id_pain_value LEFT JOIN local_pain ON local_pain.id_local_pain = pain.ref_id_local_pain LEFT JOIN pain_scale ON pain_scale.id_pain_scale = pain.ref_id_pain_scale LEFT JOIN meals ON original_forms.ref_id_meals = meals.id_meals LEFT JOIN breakfast ON original_forms.ref_id_breakfast = breakfast.id_breakfast LEFT JOIN fruits ON original_forms.ref_id_fruits = fruits.id_fruits LEFT JOIN vegetables ON original_forms.ref_id_vegetables = vegetables.id_vegetables LEFT JOIN sodas ON original_forms.ref_id_sodas = sodas.id_sodas LEFT JOIN fast_food ON original_forms.ref_id_fast_food = fast_food.id_fast_food LEFT JOIN alcohol ON original_forms.id_original_forms = alcohol.ref_id_original_forms LEFT JOIN physical_activity ON original_forms.id_original_forms = physical_activity.ref_id_original_forms LEFT JOIN physical_activity_hours ON physical_activity_hours.id_physical_activity_hours = physical_activity.ref_id_physical_activity_hours LEFT JOIN physical_activity_value ON physical_activity_value.id_physical_activity_value = physical_activity.ref_id_physical_activity_value LEFT JOIN walking_cycling ON original_forms.ref_id_walking_cycling = walking_cycling.id_walking_cycling LEFT JOIN spirometry_change ON original_forms.ref_id_spirometry_change = spirometry_change.id_spirometry_change LEFT JOIN visual_screening_change ON original_forms.ref_id_visual_screening_change = visual_screening_change.id_visual_screening_change LEFT JOIN auditory_screening_change ON original_forms.ref_id_auditory_screening_change = auditory_screening_change.id_auditory_screening_change LEFT JOIN ecg_change ON original_forms.ref_id_ecg_change = ecg_change.id_ecg_change LEFT JOIN eritrogram_change ON original_forms.ref_id_eritrogram_change = eritrogram_change.id_eritrogram_change LEFT JOIN leukogram_change ON original_forms.ref_id_leukogram_change = leukogram_change.id_leukogram_change WHERE code = ?';
    }

    let checkUserAndCode = 'SELECT * FROM users_forms WHERE ref_id_users = ? AND code = ?';
    users_db.query(checkUserAndCode, [decoded.userId, req.params.code], (err, results) => {
        if (results.length === 0) {
            res.status(200).json({
                status: 0,
                message: "Erro"
            })
        } else {
            forms_db.query(codeResults, req.params.code, (err, results) => {
                if (err) {
                    res.status(400).json({
                        message: err
                    })
                } else {
                    res.status(200).json({
                        status: 1,
                        completed: results[0].completed,
                        dados1: {
                            gender: results[0].gender,
                            department: results[0].department,
                            age: results[0].age,
                            marital_status: results[0].marital_status,
                            academic_level: results[0].academic_level
                        },
                        dados2: {
                            smoker: results[0].smoker_value,
                            smoke_frequencie: results[0].smoke_frequencie,
                            weekly_smokes: results[0].weekly_smokes,
                            health_opinion: results[0].health_opinion,
                            weight: results[0].weight,
                            height: results[0].height
                        },
                        dados3: {
                            chronic_disease: results[0].chronic_disease,
                            chronic_diseases: results[0].chronic_diseases,
                            takes_meds: results[0].takes_meds,
                            meds_number: results[0].meds_number,
                            meds_value: results[0].meds_value,
                            pain: results[0].pain_value,
                            local_pain: results[0].local_pain,
                            pain_scale: results[0].pain_scale
                        },
                        dados4: {
                            meals: results[0].meals,
                            breakfast: results[0].breakfast,
                            fruit: results[0].fruits,
                            vegetables: results[0].vegetables,
                            sodas: results[0].sodas,
                            fast_food: results[0].fast_food,
                            alcohol: results[0].alcohol,
                            beers: results[0].beers,
                            spirit_drinks: results[0].spirit_drinks,
                            wine: results[0].wine
                        },
                        dados5: {
                            physical_activity: results[0].physical_activity,
                            physical_activity_name: results[0].physical_activity_value,
                            physical_activity_hours: results[0].physical_activity_hours,
                            walking_cycling: results[0].walking_cycling
                        },
                        dados6: {
                            systolic_blood_pressure: results[0].systolic_blood_pressure,
                            diastolic_blood_pressure: results[0].diastolic_blood_pressure,
                            pulse: results[0].pulse,
                            uric_acid: results[0].uric_acid,
                            glucose: results[0].glucose,
                            total_cholesterol: results[0].total_cholesterol,
                            spirometry: results[0].spirometry,
                            spirometry_change: results[0].spirometry_change,
                            visual_screening: results[0].visual_screening,
                            visual_screening_change: results[0].visual_screening_change,
                            auditory_screening: results[0].auditory_screening,
                            auditory_screening_change: results[0].auditory_screening_change,
                            ecg: results[0].ecg,
                            ecg_change: results[0].ecg_change,
                            eritrogram: results[0].eritrogram,
                            eritrogram_change: results[0].eritrogram_change,
                            leukogram: results[0].leukogram,
                            leukogram_change: results[0].leukogram_change
                        }
                    })
                }
            })
        }
    })
};

exports.delete_code = (req, res, next) => {
    const language = req.headers.language;
    let message = null;
    if (language === 'pt') {
        message = {
            noCode: 'Erro! Código não existe ou já foi eliminado',
            success: 'Código eliminado com sucesso'
        }
    } else {
        message = {
            noCode: 'Error! Code does not exist or has already been deleted',
            success: 'Code successfully deleted'
        }
    }
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    let checkCode = 'SELECT * FROM users_forms WHERE ref_id_users = ? AND code = ?';
    users_db.query(checkCode, [decoded.userId, req.params.code], (err, results) => {
        if (results.length === 0) {
            res.status(200).json({
                status: 0,
                message: message.noCode
            })
        } else {
            let deleteCode = 'DELETE FROM users_forms WHERE ref_id_users = ? AND code = ?';
            users_db.query(deleteCode, [decoded.userId, req.params.code], (err, results) => {
                if (err) {
                    res.status(400).json({
                        message: err
                    })
                } else {
                    res.status(200).json({
                        status: 1,
                        message: message.success
                    })
                }
            })
        }
    })
};

exports.get_forms_number = (req, res, next) => {
    const getNumber = 'SELECT id_original_forms FROM original_forms';
    forms_db.query(getNumber, (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results.length
            })
        }
    })
};

exports.get_registered_forms_number = (req, res, next) => {
    const getNumber = 'SELECT id_users_forms FROM users_forms';
    users_db.query(getNumber, (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results.length
            })
        }
    })
};

exports.get_null_values = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    let checkUserAndCode = 'SELECT * FROM users_forms WHERE ref_id_users = ? AND code = ?';
    users_db.query(checkUserAndCode, [decoded.userId, req.params.code], (err, results) => {
        if (results.length === 0) {
            res.status(200).json({
                status: 0,
                message: "Erro"
            })
        } else {
            const getNumber = 'CALL getNullValues(?)';
            forms_db.query(getNumber, req.params.code, (err, results) => {
                if (err) {
                    console.log(err)
                } else {
                    res.status(200).json({
                        status: 1,
                        message: results[0]
                    })
                }
            })
        }
    })
};

exports.get_null_numbers = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    let checkUserAndCode = 'SELECT * FROM users_forms WHERE ref_id_users = ? AND code = ?';
    users_db.query(checkUserAndCode, [decoded.userId, req.params.code], (err, results) => {
        if (results.length === 0) {
            res.status(200).json({
                status: 0,
                message: "Erro"
            })
        } else {
            const getNumber = 'CALL getNullNumbers(?)';
            forms_db.query(getNumber, req.params.code, (err, results) => {
                if (err) {
                    console.log(err)
                } else {
                    res.status(200).json({
                        message: results[0]
                    })
                }
            })
        }
    })
};

exports.update_forms = (req, res, next) => {
    const language = req.headers.language;
    let message = null;
    if (language === 'pt') {
        message = {
            error: 'Erro',
            success: 'Formulário atualizado com successo!'
        }
    } else {
        message = {
            error: 'Error',
            success: 'Form updated successfully'
        }
    }
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    const checkUserAndCode = 'SELECT * FROM users_forms WHERE ref_id_users = ? AND code = ?';
    users_db.query(checkUserAndCode, [decoded.userId, req.params.code], (err, results) => {
        if (results.length === 0) {
            res.status(200).json({
                status: 0,
                message: message.error
            })
        } else {
            const update_original_forms = 'UPDATE original_forms SET weight = ?, height = ?, chronic_disease = ?, takes_meds = ?, alcohol = ?, physical_activity = ?, ref_id_ages = ?, ref_id_genders = ?, ref_id_marital_status = ?, ref_id_academic_levels = ?, ref_id_health_opinions = ?, ref_id_vegetables = ?, ref_id_fruits = ?, ref_id_breakfast = ?, ref_id_meals = ?, ref_id_fast_food = ?, ref_id_sodas = ?, ref_id_walking_cycling = ?, ref_id_departments_services_schools = ?, completed = ? WHERE code = ?';
            forms_db.query(update_original_forms, [req.body.weight, req.body.height, req.body.hasChronic, req.body.takesMeds, req.body.alcohol, req.body.physicalActivity, req.body.ages, req.body.genders, req.body.marital, req.body.academic, req.body.healthOpinions, req.body.vegetables, req.body.fruits, req.body.breakfast, req.body.meals, req.body.fastFood, req.body.sodas, req.body.walkingCycling, req.body.department, req.body.completed, req.params.code], (err, results) => {
                if (err) {
                    console.log(err)
                } else {
                    const update_alcohol = 'UPDATE alcohol SET beer = ?, wine = ?, spirit_drinks = ? WHERE ref_id_original_forms = (SELECT id_original_forms FROM original_forms WHERE code = ?)';
                    forms_db.query(update_alcohol, [req.body.beer, req.body.wine, req.body.spiritDrinks, req.params.code], (err, results) => {
                        if (err) {
                            console.log(err)
                        } else {
                            const update_chronic = 'UPDATE chronic_diseases SET ref_id_chronic_diseases_value = ? WHERE ref_id_original_forms = (SELECT id_original_forms FROM original_forms WHERE code = ?)';
                            forms_db.query(update_chronic, [req.body.chronicValues, req.params.code], (err, results) => {
                                if (err) {
                                    console.log(err)
                                } else {
                                    const update_pain = 'UPDATE pain SET ref_id_local_pain = ?, ref_id_pain_scale = ?, ref_id_pain_value = ? WHERE ref_id_original_forms = (SELECT id_original_forms FROM original_forms WHERE code = ?)';
                                    forms_db.query(update_pain, [req.body.localPain, req.body.painScale, req.body.painValue, req.params.code], (err, results) => {
                                        if (err) {
                                            console.log(err)
                                        } else {
                                            const update_physical_activity = 'UPDATE physical_activity SET ref_id_physical_activity_hours = ?, ref_id_physical_activity_value = ? WHERE ref_id_original_forms = (SELECT id_original_forms FROM original_forms WHERE code = ?)';
                                            forms_db.query(update_physical_activity, [req.body.physicalHours, req.body.physicalValues, req.params.code], (err, results) => {
                                                if (err) {
                                                    console.log(err)
                                                } else {
                                                    const update_smokers = 'UPDATE smokers SET ref_id_frequencies = ?, ref_id_average_daily_smokes = ?, ref_id_smokers_value = ? WHERE ref_id_original_forms = (SELECT id_original_forms FROM original_forms WHERE code = ?)';
                                                    forms_db.query(update_smokers, [req.body.smokeFrequencies, req.body.dailySmokes, req.body.smokerValue, req.params.code], (err, results) => {
                                                        if (err) {
                                                            console.log(err)
                                                        } else {
                                                            const update_meds = 'UPDATE takes_meds SET number = ?, ref_id_takes_meds_value = ? WHERE ref_id_original_forms = (SELECT id_original_forms FROM original_forms WHERE code = ?)';
                                                            forms_db.query(update_meds, [req.body.medsNumber, req.body.medsValues, req.params.code], (err, results) => {
                                                                if (err) {
                                                                    console.log(err)
                                                                } else {
                                                                    res.status(200).json({
                                                                        status: 1,
                                                                        message: message.success,
                                                                    });

                                                                    const original_forms_updates = 'INSERT INTO original_forms_updates (id_original_forms, code, consultation_date, insertion_date, weight, height, chronic_disease, takes_meds, alcohol, physical_activity, systolic_blood_pressure, diastolic_blood_pressure, pulse, uric_acid, glucose, total_cholesterol, spirometry, visual_screening, auditory_screening, ecg, eritrogram, leukogram, ref_id_ages, ref_id_genders, ref_id_marital_status, ref_id_academic_levels, ref_id_health_opinions, ref_id_vegetables, ref_id_fruits, ref_id_breakfast, ref_id_meals, ref_id_fast_food, ref_id_sodas, ref_id_walking_cycling, ref_id_ecg_change, ref_id_eritrogram_change, ref_id_leukogram_change, ref_id_spirometry_change, ref_id_visual_screening_change, ref_id_auditory_screening_change, ref_id_departments_services_schools, ref_id_chart_ages, completed) SELECT * FROM original_forms WHERE code = ?';
                                                                    forms_db.query(original_forms_updates, [req.params.code], (err) => {
                                                                        if (err) {
                                                                            console.log(err)
                                                                        } else {
                                                                            const alcohol_updates = 'INSERT INTO alcohol_updates (beer, spirit_drinks, wine, ref_id_original_forms) SELECT beer, spirit_drinks, wine, ref_id_original_forms FROM alcohol WHERE ref_id_original_forms = (SELECT id_original_forms FROM original_forms WHERE code = ?)';
                                                                            forms_db.query(alcohol_updates, [req.params.code], (err) => {
                                                                                if (err) {
                                                                                    console.log(err)
                                                                                } else {
                                                                                    const chronic_updates = 'INSERT INTO chronic_diseases_updates (ref_id_chronic_diseases_value, ref_id_original_forms) SELECT ref_id_chronic_diseases_value, ref_id_original_forms FROM chronic_diseases WHERE ref_id_original_forms = (SELECT id_original_forms FROM original_forms WHERE code = ?)';
                                                                                    forms_db.query(chronic_updates, [req.params.code], (err) => {
                                                                                        if (err) {
                                                                                            console.log(err)
                                                                                        } else {
                                                                                            const pain_updates = 'INSERT INTO pain_updates (ref_id_local_pain, ref_id_pain_scale, ref_id_original_forms, ref_id_pain_value) SELECT ref_id_local_pain, ref_id_pain_scale, ref_id_original_forms, ref_id_pain_value FROM pain WHERE ref_id_original_forms = (SELECT id_original_forms FROM original_forms WHERE code = ?)';
                                                                                            forms_db.query(pain_updates, [req.params.code], (err) => {
                                                                                                if (err) {
                                                                                                    console.log(err)
                                                                                                } else {
                                                                                                    const physical_activity_updates = 'INSERT INTO physical_activity_updates (ref_id_physical_activity_hours, ref_id_original_forms, ref_id_physical_activity_value) SELECT ref_id_physical_activity_hours, ref_id_original_forms, ref_id_physical_activity_value FROM physical_activity WHERE ref_id_original_forms = (SELECT id_original_forms FROM original_forms WHERE code = ?)';
                                                                                                    forms_db.query(physical_activity_updates, [req.params.code], (err) => {
                                                                                                        if (err) {
                                                                                                            console.log(err)
                                                                                                        } else {
                                                                                                            const smokers_updates = 'INSERT INTO smokers_updates (ref_id_frequencies, ref_id_average_daily_smokes, ref_id_original_forms, ref_id_smokers_value) SELECT ref_id_frequencies, ref_id_average_daily_smokes, ref_id_original_forms, ref_id_smokers_value FROM smokers WHERE ref_id_original_forms = (SELECT id_original_forms FROM original_forms WHERE code = ?)';
                                                                                                            forms_db.query(smokers_updates, [req.params.code], (err) => {
                                                                                                                if (err) {
                                                                                                                    console.log(err)
                                                                                                                } else {
                                                                                                                    const meds_updates = 'INSERT INTO takes_meds_updates (number, ref_id_original_forms, ref_id_takes_meds_value) SELECT number, ref_id_original_forms, ref_id_takes_meds_value FROM takes_meds WHERE ref_id_original_forms = (SELECT id_original_forms FROM original_forms WHERE code = ?)';
                                                                                                                    forms_db.query(meds_updates, [req.params.code], (err) => {
                                                                                                                        if (err) {
                                                                                                                            console.log(err)
                                                                                                                        }
                                                                                                                    })
                                                                                                                }
                                                                                                            })
                                                                                                        }
                                                                                                    })
                                                                                                }
                                                                                            })
                                                                                        }
                                                                                    })
                                                                                }
                                                                            })
                                                                        }
                                                                    })
                                                                }
                                                            })
                                                        }
                                                    })
                                                }
                                            })
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
    })
}