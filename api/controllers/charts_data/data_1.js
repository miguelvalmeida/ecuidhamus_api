const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const forms_db = require('../../../db2_connection');


//gender
exports.average_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const gender_query = 'CALL averageGender(?,?)';
    forms_db.query(gender_query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.dep_average_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const gender_query = 'CALL depAverageGender(?,?,?)';
    forms_db.query(gender_query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.gender_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL genderByAge(?,?)';
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

exports.dep_gender_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL genderByAgeDep(?,?,?)';
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

//department
exports.average_department = (req, res, next) => {
    const department_query = 'CALL averageDepartment(?)';
    forms_db.query(department_query, 1, (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

//ages
exports.average_ages = (req, res, next) => {
    const years = req.params.year.split(',');
    const ages_query = 'CALL averageAges(?,?)';
    forms_db.query(ages_query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.dep_average_ages = (req, res, next) => {
    const years = req.params.year.split(',');
    const ages_query = 'CALL depAverageAges(?,?,?)';
    forms_db.query(ages_query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.ages_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL agesByGender(?,?)';
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

exports.dep_ages_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL agesByGenderDep(?,?,?)';
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

//academic
exports.average_academic = (req, res, next) => {
    const years = req.params.year.split(',');
    const academic_query = 'CALL averageAcademic(?,?)';
    forms_db.query(academic_query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.dep_average_academic = (req, res, next) => {
    const years = req.params.year.split(',');
    const academic_query = 'CALL depAverageAcademic(?,?,?)';
    forms_db.query(academic_query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.academic_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL academicLevelsByGender(?,?)';
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

exports.dep_academic_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL academicLevelsByGenderDep(?,?,?)';
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

exports.academic_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL academicLevelsByAge(?,?)';
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

exports.dep_academic_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL academicLevelsByAgeDep(?,?,?)';
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


//marital
exports.average_marital = (req, res, next) => {
    const years = req.params.year.split(',');
    const marital_query = 'CALL averageMarital(?,?)';
    forms_db.query(marital_query, [years[0], years[1]] , (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.dep_average_marital = (req, res, next) => {
    const years = req.params.year.split(',');
    const marital_query = 'CALL depAverageMarital(?,?,?)';
    forms_db.query(marital_query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.marital_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL maritalByGender(?,?)';
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

exports.dep_marital_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL maritalByGenderDep(?,?,?)';
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

exports.marital_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL maritalByAge(?,?)';
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

exports.dep_marital_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL maritalByAgeDep(?,?,?)';
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