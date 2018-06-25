const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const forms_db = require('../../../db2_connection');

//has chronic
exports.average_has_chronic = (req, res, next) => {
    const years = req.params.year.split(',');
    const has_chronic_query = 'CALL averageHasChronic(?,?)';
    forms_db.query(has_chronic_query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.dep_average_has_chronic = (req, res, next) => {
    const years = req.params.year.split(',');
    const has_chronic_query = 'CALL depAverageHasChronic(?,?,?)';
    forms_db.query(has_chronic_query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.has_chronic_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL hasChronicByGender(?,?)';
    forms_db.query(query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

exports.dep_has_chronic_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL hasChronicByGenderDep(?,?,?)';
    forms_db.query(query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

exports.has_chronic_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL hasChronicByAge(?,?)';
    forms_db.query(query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

exports.dep_has_chronic_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL hasChronicByAgeDep(?,?,?)';
    forms_db.query(query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

//chronic values
exports.average_chronic_values = (req, res, next) => {
    const years = req.params.year.split(',');
    const chronic_values_query = 'CALL averageChronicValue(?,?)';
    forms_db.query(chronic_values_query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.dep_average_chronic_values = (req, res, next) => {
    const years = req.params.year.split(',');
    const chronic_values_query = 'CALL depAverageChronicValue(?,?,?)';
    forms_db.query(chronic_values_query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.chronic_values_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL chronicDiseasesValueByGender(?,?)';
    forms_db.query(query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

exports.dep_chronic_values_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL chronicDiseasesValueByGenderDep(?,?,?)';
    forms_db.query(query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

exports.chronic_values_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL chronicDiseasesValueByAge(?,?)';
    forms_db.query(query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

exports.dep_chronic_values_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL chronicDiseasesValueByAgeDep(?,?,?)';
    forms_db.query(query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

//takes meds
exports.average_takes_meds = (req, res, next) => {
    const years = req.params.year.split(',');
    const takes_meds_query = 'CALL averageTakesMeds(?,?)';
    forms_db.query(takes_meds_query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.dep_average_takes_meds = (req, res, next) => {
    const years = req.params.year.split(',');
    const takes_meds_query = 'CALL depAverageTakesMeds(?,?,?)';
    forms_db.query(takes_meds_query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.takes_meds_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL takesMedsByGender(?,?)';
    forms_db.query(query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

exports.dep_takes_meds_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL takesMedsByGenderDep(?,?,?)';
    forms_db.query(query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

exports.takes_meds_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL takesMedsByAge(?,?)';
    forms_db.query(query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

exports.dep_takes_meds_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL takesMedsByAgeDep(?,?,?)';
    forms_db.query(query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

//meds number
exports.average_meds_number = (req, res, next) => {
    const years = req.params.year.split(',');
    const meds_number_query = 'CALL averageMedsNumber(?,?)';
    forms_db.query(meds_number_query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.dep_average_meds_number = (req, res, next) => {
    const years = req.params.year.split(',');
    const meds_number_query = 'CALL depAverageMedsNumber(?,?,?)';
    forms_db.query(meds_number_query, [req.params.departmetn, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.meds_number_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL medsNumberByGender(?,?)';
    forms_db.query(query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

exports.dep_meds_number_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL medsNumberByGenderDep(?,?,?)';
    forms_db.query(query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

exports.meds_number_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL medsNumberByAge(?,?)';
    forms_db.query(query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

exports.dep_meds_number_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL medsNumberByAgeDep(?,?,?)';
    forms_db.query(query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

//meds value
exports.average_meds_value = (req, res, next) => {
    const years = req.params.year.split(',');
    const meds_value_query = 'CALL averageMedsValue(?,?)';
    forms_db.query(meds_value_query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.dep_average_meds_value = (req, res, next) => {
    const years = req.params.year.split(',');
    const meds_value_query = 'CALL depAverageMedsValue(?,?,?)';
    forms_db.query(meds_value_query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.meds_value_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL medsValuesByGender(?,?)';
    forms_db.query(query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

exports.dep_meds_value_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL medsValuesByGenderDep(?,?,?)';
    forms_db.query(query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

exports.meds_value_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL medsValuesByAge(?,?)';
    forms_db.query(query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

exports.dep_meds_value_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL medsValuesByAgeDep(?,?,?)';
    forms_db.query(query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

//pain value
exports.average_pain_value = (req, res, next) => {
    const years = req.params.year.split(',');
    const pain_value_query = 'CALL averagePainValue(?,?)';
    forms_db.query(pain_value_query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.dep_average_pain_value = (req, res, next) => {
    const years = req.params.year.split(',');
    const pain_value_query = 'CALL depAveragePainValue(?,?,?)';
    forms_db.query(pain_value_query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.pain_value_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL painValueByGender(?,?)';
    forms_db.query(query, [years[0], years[1]],(err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

exports.dep_pain_value_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL painValueByGenderDep(?,?,?)';
    forms_db.query(query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

exports.pain_value_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL painValueByAge(?,?)';
    forms_db.query(query, [years[0], years[1]],(err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

exports.dep_pain_value_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL painValueByAgeDep(?,?,?)';
    forms_db.query(query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

//local pain
exports.average_local_pain = (req, res, next) => {
    const years = req.params.year.split(',');
    const local_pain_query = 'CALL averageLocalPain(?,?)';
    forms_db.query(local_pain_query, [years[0], years[1]],(err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.dep_average_local_pain = (req, res, next) => {
    const years = req.params.year.split(',');
    const local_pain_query = 'CALL depAverageLocalPain(?,?,?)';
    forms_db.query(local_pain_query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.local_pain_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL localPainByGender(?,?)';
    forms_db.query(query, [years[0], years[1]],(err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

exports.dep_local_pain_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL localPainByGenderDep(?,?,?)';
    forms_db.query(query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

exports.local_pain_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL localPainByAge(?,?)';
    forms_db.query(query, [years[0], years[1]],(err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

exports.dep_local_pain_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL localPainByAgeDep(?,?,?)';
    forms_db.query(query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

//pain scale
exports.average_pain_scale = (req, res, next) => {
    const years = req.params.year.split(',');
    const pain_scale_query = 'CALL averagePainScale(?,?)';
    forms_db.query(pain_scale_query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.dep_average_pain_scale = (req, res, next) => {
    const years = req.params.year.split(',');
    const pain_scale_query = 'CALL depAveragePainScale(?,?,?)';
    forms_db.query(pain_scale_query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.pain_scale_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL painScaleByGender(?,?)';
    forms_db.query(query, [years[0], years[1]],(err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

exports.dep_pain_scale_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL painScaleByGenderDep(?,?,?)';
    forms_db.query(query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

exports.pain_scale_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL painScaleByAge(?,?)';
    forms_db.query(query, [years[0], years[1]],(err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

exports.dep_pain_scale_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL painScaleByAgeDep(?,?,?)';
    forms_db.query(query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};