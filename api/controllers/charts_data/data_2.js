const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const jwt = require('jsonwebtoken');
const forms_db = require('../../../db2_connection');
const users_db = require('../../../db_connection');

//smoker status
exports.average_smoker_status = (req, res, next) => {
    const years = req.params.year.split(',');
    const smoker_query = 'CALL averageSmokerStatus(?,?)';
    forms_db.query(smoker_query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.dep_average_smoker_status = (req, res, next) => {
    const years = req.params.year.split(',');
    const smoker_query = 'CALL depAverageSmokerStatus(?,?,?)';
    forms_db.query(smoker_query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.smoker_status_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL smokerValueByGender(?,?)';
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

exports.dep_smoker_status_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL smokerValueByGenderDep(?,?,?)';
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

exports.smoker_status_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL smokerValueByAge(?,?)';
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

exports.dep_smoker_status_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL smokerValueByAgeDep(?,?,?)';
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

//smoker frequencie
exports.average_smoker_frequencie = (req, res, next) => {
    const years = req.params.year.split(',');
    const frequencies_query = 'CALL averageSmokerFrequencie(?,?)';
    forms_db.query(frequencies_query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.dep_average_smoker_frequencie = (req, res, next) => {
    const years = req.params.year.split(',');
    const frequencies_query = 'CALL depAverageSmokeFrequencies(?,?,?)';
    forms_db.query(frequencies_query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.smoker_frequencie_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL smokerFrequenciesByGender(?,?)';
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

exports.dep_smoker_frequencies_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL smokerFrequenciesByGenderDep(?,?,?)';
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

exports.smoker_frequencie_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL smokerFrequenciesByAge(?,?)';
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

exports.dep_smoker_frequencies_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL smokerFrequenciesByAgeDep(?,?,?)';
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

//weekly number
exports.average_weekly_number = (req, res, next) => {
    const years = req.params.year.split(',');
    const weekly_query = 'CALL averageWeeklySmokes(?,?)';
    forms_db.query(weekly_query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.dep_average_weekly_number = (req, res, next) => {
    const years = req.params.year.split(',');
    const weekly_query = 'CALL depAverageWeeklySmokes(?,?,?)';
    forms_db.query(weekly_query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.weekly_number_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL smokerNumberByGender(?,?)';
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

exports.dep_weekly_number_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL smokerNumberByGenderDep(?,?,?)';
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

exports.weekly_number_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL smokerNumberByAge(?,?)';
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

exports.dep_weekly_number_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL smokerNumberByAgeDep(?,?,?)';
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

//health opinions
exports.average_health_opinion = (req, res, next) => {
    const years = req.params.year.split(',');
    const health_query = 'CALL averageHealthOpinions(?,?)';
    forms_db.query(health_query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.dep_average_health_opinion = (req, res, next) => {
    const years = req.params.year.split(',');
    const health_query = 'CALL depAverageHealthOpinions(?,?,?)';
    forms_db.query(health_query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.health_opinions_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL healthOpinionsByGender(?,?)';
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

exports.dep_health_opinions_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL healthOpinionsByGenderDep(?,?,?)';
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

exports.health_opinions_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL healthOpinionsByAge(?,?)';
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

exports.dep_health_opinions_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL healthOpinionsByAgeDep(?,?,?)';
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

//weight
exports.average_weight = (req, res, next) => {
    const years = req.params.year.split(',');
    const weight_query = 'CALL averageWeight(?,?)';
    forms_db.query(weight_query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.weight_sum = (req, res, next) => {
    const weight_query = 'CALL weightSum(?,?)';
    forms_db.query(weight_query, [req.params.year1, req.params.year2], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

exports.dep_average_weight = (req, res, next) => {
    const years = req.params.year.split(',');
    const weight_query = 'CALL depAverageWeight(?,?,?)';
    forms_db.query(weight_query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.dep_weight_sum = (req, res, next) => {
    const weight_query = 'CALL depSumWeight(?,?,?)';
    forms_db.query(weight_query, [req.params.year1, req.params.year2, req.params.department], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

exports.personal_weight = (req, res, next) => {
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
            const getWeight = 'CALL personalWeight(?,?,?)';
            forms_db.query(getWeight, [req.params.year1, req.params.year2, codes], (err, results) => {
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

exports.weight_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL weightByGender(?,?)';
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

exports.dep_weight_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL weightByGenderDep(?,?,?)';
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

exports.weight_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL weightByAge(?,?)';
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

exports.dep_weight_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL weightByAgeDep(?,?,?)';
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

//height
exports.average_height = (req, res, next) => {
    const years = req.params.year.split(',');
    const height_query = 'CALL averageHeight(?,?)';
    forms_db.query(height_query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.dep_average_height = (req, res, next) => {
    const years = req.params.year.split(',');
    const height_query = 'CALL depAverageHeight(?,?,?)';
    forms_db.query(height_query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.height_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL heightByGender(?,?)';
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

exports.dep_height_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL heightByGenderDep(?,?,?)';
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

exports.height_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL heightByAge(?,?)';
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

exports.dep_height_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL heightByAgeDep(?,?,?)';
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