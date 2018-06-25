const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const forms_db = require('../../../db2_connection');

//physical activity
exports.average_physical_activity = (req, res, next) => {
    const years = req.params.year.split(',');
    const physical_activity_query = 'CALL averagePhysicalActivity(?,?)';
    forms_db.query(physical_activity_query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.dep_average_physical_activity = (req, res, next) => {
    const years = req.params.year.split(',');
    const physical_activity_query = 'CALL depAveragePhysicalActivity(?,?,?)';
    forms_db.query(physical_activity_query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.physical_activity_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL physicalActivityByGender(?,?)';
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

exports.dep_physical_activity_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL physicalActivityByGenderDep(?,?,?)';
    forms_db.query(query, [req.params.department,years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

exports.physical_activity_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL physicalActivityByAge(?,?)';
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

exports.dep_physical_activity_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL physicalActivityByAgeDep(?,?,?)';
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

//physical values
exports.average_physical_values = (req, res, next) => {
    const years = req.params.year.split(',');
    const physical_values_query = 'CALL averagePhysicalValue(?,?)';
    forms_db.query(physical_values_query, [years[0], years[1]],(err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.dep_average_physical_values = (req, res, next) => {
    const years = req.params.year.split(',');
    const physical_values_query = 'CALL depAveragePhysicalValue(?,?,?)';
    forms_db.query(physical_values_query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.physical_values_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL physicalValuesByGender(?,?)';
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

exports.dep_physical_values_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL physicalValuesByGenderDep(?,?,?)';
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

exports.physical_values_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL physicalValuesByAge(?,?)';
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

exports.dep_physical_values_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL physicalValuesByAgeDep(?,?,?)';
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

//physical hours
exports.average_physical_activity_hours = (req, res, next) => {
    const years = req.params.year.split(',');
    const physical_hours_query = 'CALL averagePhysicalHours(?,?)';
    forms_db.query(physical_hours_query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.dep_average_physical_activity_hours = (req, res, next) => {
    const years = req.params.year.split(',');
    const physical_hours_query = 'CALL depAveragePhysicalHours(?,?,?)';
    forms_db.query(physical_hours_query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    }) 
};

exports.physical_hours_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL physicalHoursByGender(?,?)';
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

exports.dep_physical_hours_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL physicalHoursByGenderDep(?,?,?)';
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

exports.physical_hours_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL physicalHoursByAge(?,?)';
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

exports.dep_physical_hours_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL physicalHoursByAgeDep(?,?,?)';
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

//walking cycling
exports.average_walking_cycling = (req, res, next) => {
    const years = req.params.year.split(',');
    const walking_cycling_query = 'CALL averageWalkingCycling(?,?)';
    forms_db.query(walking_cycling_query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    }) 
};

exports.dep_average_walking_cycling = (req, res, next) => {
    const years = req.params.year.split(',');
    const walking_cycling_query = 'CALL depAverageWalkingCycling(?,?,?)';
    forms_db.query(walking_cycling_query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    }) 
};

exports.walking_cycling_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL walkingCyclingByGender(?,?)';
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

exports.dep_walking_cycling_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL walkingCyclingByGenderDep(?,?,?)';
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

exports.walking_cycling_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL walkingCyclingByAge(?,?)';
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

exports.dep_walking_cycling_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL walkingCyclingByAgeDep(?,?,?)';
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