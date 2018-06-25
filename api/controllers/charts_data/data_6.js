const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const jwt = require('jsonwebtoken');
const forms_db = require('../../../db2_connection');
const users_db = require('../../../db_connection');

//sbp
exports.average_sbp = (req, res, next) => {
    const years = req.params.year.split(',');
    const sbp_query = 'CALL averageSbp(?,?)';
    forms_db.query(sbp_query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.dep_average_sbp = (req, res, next) => {
    const years = req.params.year.split(',');
    const sbp_query = 'CALL depAverageSbp(?,?,?)';
    forms_db.query(sbp_query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.personal_sbp = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    const getCodes = 'SELECT code FROM users_forms WHERE ref_id_users = ?';
    users_db.query(getCodes, decoded.userId, (err, results) => {
        const codes = results.map(e => {
            return '"' + e.code + '"';
        }).join(", ");
        if (err) {
            res.status(400).json({
                message: err
            })
        } else {
            const getSbp = 'CALL personalSbp(?,?,?)';
            forms_db.query(getSbp, [req.params.year1, req.params.year2, codes], (err, results) => {
                if (err) {
                    res.status(400).json({
                        message: err
                    })
                } else {
                    res.status(200).json({
                        message: results
                    })
                }
            })
        }
    })
};

exports.sbp_sum = (req, res, next) => {
    const sbp_sum_query = 'CALL sbpSum(?,?)';
    forms_db.query(sbp_sum_query, [req.params.year1, req.params.year2], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

exports.dep_sbp_sum = (req, res, next) => {
    const sbp_sum_query = 'CALL depSbpSum(?,?,?)';
    forms_db.query(sbp_sum_query, [req.params.year1, req.params.year2, req.params.department], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

exports.sbp_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL sbpByGender(?,?)';
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

exports.dep_sbp_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL sbpByGenderDep(?,?,?)';
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

exports.sbp_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL sbpByAge(?,?)';
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

exports.dep_sbp_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL sbpByAgeDep(?,?,?)';
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

//dbp
exports.average_dbp = (req, res, next) => {
    const years = req.params.year.split(',');
    const dbp_query = 'CALL averageDbp(?,?)';
    forms_db.query(dbp_query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.dep_average_dbp = (req, res, next) => {
    const years = req.params.year.split(',');
    const dbp_query = 'CALL depAverageDbp(?,?,?)';
    forms_db.query(dbp_query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.personal_dbp = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    const getCodes = 'SELECT code FROM users_forms WHERE ref_id_users = ?';
    users_db.query(getCodes, decoded.userId, (err, results) => {
        const codes = results.map(e => {
            return '"' + e.code + '"';
        }).join(", ");
        if (err) {
            res.status(400).json({
                message: err
            })
        } else {
            const getDbp = 'CALL personalDbp(?,?,?)';
            forms_db.query(getDbp, [req.params.year1, req.params.year2, codes], (err, results) => {
                if (err) {
                    res.status(400).json({
                        message: err
                    })
                } else {
                    res.status(200).json({
                        message: results
                    })
                }
            })
        }
    })
};

exports.dbp_sum = (req, res, next) => {
    const dbp_sum_query = 'CALL dbpSum(?,?)';
    forms_db.query(dbp_sum_query, [req.params.year1, req.params.year2], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

exports.dep_dbp_sum = (req, res, next) => {
    const dbp_sum_query = 'CALL depDbpSum(?,?,?)';
    forms_db.query(dbp_sum_query, [req.params.year1, req.params.year2, req.params.department], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

exports.dbp_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL dbpByGender(?,?)';
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

exports.dep_dbp_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL dbpByGenderDep(?,?,?)';
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

exports.dbp_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL dbpByAge(?,?)';
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

exports.dep_dbp_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL dbpByAgeDep(?,?,?)';
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

//pulse
exports.average_pulse = (req, res, next) => {
    const years = req.params.year.split(',');
    const pulse_query = 'CALL averagePulse(?,?)';
    forms_db.query(pulse_query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.dep_average_pulse = (req, res, next) => {
    const years = req.params.year.split(',');
    const pulse_query = 'CALL depAveragePulse(?,?,?)';
    forms_db.query(pulse_query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.personal_pulse = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    const getCodes = 'SELECT code FROM users_forms WHERE ref_id_users = ?';
    users_db.query(getCodes, decoded.userId, (err, results) => {
        const codes = results.map(e => {
            return '"' + e.code + '"';
        }).join(", ");
        if (err) {
            res.status(400).json({
                message: err
            })
        } else {
            const getPulse = 'CALL personalPulse(?,?,?)';
            forms_db.query(getPulse, [req.params.year1, req.params.year2, codes], (err, results) => {
                if (err) {
                    res.status(400).json({
                        message: err
                    })
                } else {
                    res.status(200).json({
                        message: results
                    })
                }
            })
        }
    })
};

exports.pulse_sum = (req, res, next) => {
    const pulse_sum_query = 'CALL pulseSum(?,?)';
    forms_db.query(pulse_sum_query, [req.params.year1, req.params.year2], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

exports.dep_pulse_sum = (req, res, next) => {
    const pulse_sum_query = 'CALL depPulseSum(?,?,?)';
    forms_db.query(pulse_sum_query, [req.params.year1, req.params.year2, req.params.department], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

exports.pulse_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL pulseByGender(?,?)';
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

exports.dep_pulse_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL pulseByGenderDep(?,?,?)';
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

exports.pulse_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL pulseByAge(?,?)';
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

exports.dep_pulse_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL pulseByAgeDep(?,?,?)';
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

//uric acid
exports.average_uric_acid = (req, res, next) => {
    const years = req.params.year.split(',');
    const uric_acid_query = 'CALL averageUricAcid(?,?)';
    forms_db.query(uric_acid_query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.dep_average_uric_acid = (req, res, next) => {
    const years = req.params.year.split(',');
    const uric_acid_query = 'CALL depAverageUricAcid(?,?,?)';
    forms_db.query(uric_acid_query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.personal_uric_acid = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    const getCodes = 'SELECT code FROM users_forms WHERE ref_id_users = ?';
    users_db.query(getCodes, decoded.userId, (err, results) => {
        const codes = results.map(e => {
            return '"' + e.code + '"';
        }).join(", ");
        if (err) {
            res.status(400).json({
                message: err
            })
        } else {
            const getUricAcid = 'CALL personalUricAcid(?,?,?)';
            forms_db.query(getUricAcid, [req.params.year1, req.params.year2, codes], (err, results) => {
                if (err) {
                    res.status(400).json({
                        message: err
                    })
                } else {
                    res.status(200).json({
                        message: results
                    })
                }
            })
        }
    })
};

exports.uric_acid_sum = (req, res, next) => {
    const uric_acid_sum_query = 'CALL uricAcidSum(?,?)';
    forms_db.query(uric_acid_sum_query, [req.params.year1, req.params.year2], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

exports.dep_uric_acid_sum = (req, res, next) => {
    const uric_acid_sum_query = 'CALL depUricAcidSum(?,?,?)';
    forms_db.query(uric_acid_sum_query, [req.params.year1, req.params.year2, req.params.department], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

exports.uric_acid_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL uricAcidByGender(?,?)';
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

exports.dep_uric_acid_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL uricAcidByGenderDep(?,?,?)';
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

exports.uric_acid_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL uricAcidByAge(?,?)';
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

exports.dep_uric_acid_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL uricAcidByAgeDep(?,?,?)';
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

//glucose
exports.average_glucose = (req, res, next) => {
    const years = req.params.year.split(',');
    const glucose_query = 'CALL averageGlucose(?,?)';
    forms_db.query(glucose_query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.dep_average_glucose = (req, res, next) => {
    const years = req.params.year.split(',');
    const glucose_query = 'CALL depAverageGlucose(?,?,?)';
    forms_db.query(glucose_query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.personal_glucose = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    const getCodes = 'SELECT code FROM users_forms WHERE ref_id_users = ?';
    users_db.query(getCodes, decoded.userId, (err, results) => {
        const codes = results.map(e => {
            return '"' + e.code + '"';
        }).join(", ");
        if (err) {
            res.status(400).json({
                message: err
            })
        } else {
            const getGlucose = 'CALL personalGlucose(?,?,?)';
            forms_db.query(getGlucose, [req.params.year1, req.params.year2, codes], (err, results) => {
                if (err) {
                    res.status(400).json({
                        message: err
                    })
                } else {
                    res.status(200).json({
                        message: results
                    })
                }
            })
        }
    })
};

exports.glucose_sum = (req, res, next) => {
    const glucose_sum_query = 'CALL glucoseSum(?,?)';
    forms_db.query(glucose_sum_query, [req.params.year1, req.params.year2], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

exports.dep_glucose_sum = (req, res, next) => {
    const glucose_sum_query = 'CALL depGlucoseSum(?,?,?)';
    forms_db.query(glucose_sum_query, [req.params.year1, req.params.year2, req.params.department], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

exports.glucose_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL glucoseByGender(?,?)';
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

exports.dep_glucose_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL glucoseByGenderDep(?,?,?)';
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

exports.glucose_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL glucoseByAge(?,?)';
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

exports.dep_glucose_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL glucoseByAgeDep(?,?,?)';
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

//cholesterol
exports.average_cholesterol = (req, res, next) => {
    const years = req.params.year.split(',');
    const cholesterol_query = 'CALL averageCholesterol(?,?)';
    forms_db.query(cholesterol_query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.dep_average_cholesterol = (req, res, next) => {
    const years = req.params.year.split(',');
    const cholesterol_query = 'CALL depAverageCholesterol(?,?,?)';
    forms_db.query(cholesterol_query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.personal_cholesterol = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    const getCodes = 'SELECT code FROM users_forms WHERE ref_id_users = ?';
    users_db.query(getCodes, decoded.userId, (err, results) => {
        const codes = results.map(e => {
            return '"' + e.code + '"';
        }).join(", ");
        if (err) {
            res.status(400).json({
                message: err
            })
        } else {
            const getCholesterol = 'CALL personalCholesterol(?,?,?)';
            forms_db.query(getCholesterol, [req.params.year1, req.params.year2, codes], (err, results) => {
                if (err) {
                    res.status(400).json({
                        message: err
                    })
                } else {
                    res.status(200).json({
                        message: results
                    })
                }
            })
        }
    })
};

exports.cholesterol_sum = (req, res, next) => {
    const cholesterol_sum_query = 'CALL cholesterolSum(?,?)';
    forms_db.query(cholesterol_sum_query, [req.params.year1, req.params.year2], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

exports.dep_cholesterol_sum = (req, res, next) => {
    const cholesterol_sum_query = 'CALL depCholesterolSum(?,?,?)';
    forms_db.query(cholesterol_sum_query, [req.params.year1, req.params.year2, req.params.department], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

exports.cholesterol_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL cholesterolByGender(?,?)';
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

exports.dep_cholesterol_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL cholesterolByGenderDep(?,?,?)';
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

exports.cholesterol_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL cholesterolByAge(?,?)';
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

exports.dep_cholesterol_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL cholesterolByAgeDep(?,?,?)';
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