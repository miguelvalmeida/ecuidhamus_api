const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const jwt = require('jsonwebtoken');
const forms_db = require('../../../db2_connection');
const users_db = require('../../../db_connection');

//spirometry
exports.average_spirometry = (req, res, next) => {
    const years = req.params.year.split(',');
    const spirometry_query = 'CALL averageSpirometry(?,?)';
    forms_db.query(spirometry_query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.dep_average_spirometry = (req, res, next) => {
    const years = req.params.year.split(',');
    const spirometry_query = 'CALL depAverageSpirometry(?,?,?)';
    forms_db.query(spirometry_query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.average_spirometry_change = (req, res, next) => {
    const years = req.params.year.split(',');
    const spirometry_change_query = 'CALL averageSpirometryChange(?,?)';
    forms_db.query(spirometry_change_query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.dep_average_spirometry_change = (req, res, next) => {
    const years = req.params.year.split(',');
    const spirometry_change_query = 'CALL depAverageSpirometryChange(?,?,?)';
    forms_db.query(spirometry_change_query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.spirometry_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL spirometryByGender(?,?)';
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

exports.dep_spirometry_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL spirometryByGenderDep(?,?,?)';
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

exports.spirometry_change_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL spirometryChangeByGender(?,?)';
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

exports.dep_spirometry_change_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL spirometryChangeByGenderDep(?,?,?)';
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

exports.spirometry_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL spirometryByAge(?,?)';
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

exports.dep_spirometry_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL spirometryByAgeDep(?,?,?)';
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

exports.spirometry_change_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL spirometryChangeByAge(?,?)';
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

exports.dep_spirometry_change_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL spirometryChangeByAgeDep(?,?,?)';
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

//visual screening
exports.average_visual_screening = (req, res, next) => {
    const years = req.params.year.split(',');
    const visual_screening_query = 'CALL averageVisualScreening(?,?)';
    forms_db.query(visual_screening_query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.dep_average_visual_screening = (req, res, next) => {
    const years = req.params.year.split(',');
    const visual_screening_query = 'CALL depAverageVisualScreening(?,?,?)';
    forms_db.query(visual_screening_query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.average_visual_screening_change = (req, res, next) => {
    const years = req.params.year.split(',');
    const visual_change_query = 'CALL averageVisualScreeningChange(?,?)';
    forms_db.query(visual_change_query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.dep_average_visual_screening_change = (req, res, next) => {
    const years = req.params.year.split(',');
    const visual_change_query = 'CALL depAverageVisualChange(?,?,?)';
    forms_db.query(visual_change_query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.visual_screening_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL visualScreeningByGender(?,?)';
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

exports.dep_visual_screening_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL visualScreeningByGenderDep(?,?,?)';
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

exports.visual_screening_change_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL visualScreeningChangeByGender(?,?)';
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

exports.dep_visual_screening_change_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL visualScreeningChangeByGenderDep(?,?,?)';
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

exports.visual_screening_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL visualScreeningByAge(?,?)';
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

exports.dep_visual_screening_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL visualScreeningByAgeDep(?,?,?)';
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

exports.visual_screening_change_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL visualScreeningChangeByAge(?,?)';
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

exports.dep_visual_screening_change_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL visualScreeningChangeByAgeDep(?,?,?)';
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

//auditory screening
exports.average_auditory_screening = (req, res, next) => {
    const years = req.params.year.split(',');
    const auditory_query = 'CALL averageAuditoryScreening(?,?)';
    forms_db.query(auditory_query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.dep_average_auditory_screening = (req, res, next) => {
    const years = req.params.year.split(',');
    const auditory_query = 'CALL depAverageAuditoryScreening(?,?,?)';
    forms_db.query(auditory_query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.average_auditory_screening_change = (req, res, next) => {
    const years = req.params.year.split(',');
    const auditory_change_query = 'CALL averageAuditoryScreeningChange(?,?)';
    forms_db.query(auditory_change_query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.dep_average_auditory_screening_change = (req, res, next) => {
    const years = req.params.year.split(',');
    const auditory_change_query = 'CALL depAverageAuditoryChange(?,?,?)';
    forms_db.query(auditory_change_query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.auditory_screening_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL auditoryScreeningByGender(?,?)';
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

exports.dep_auditory_screening_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL auditoryScreeningByGenderDep(?,?,?)';
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

exports.auditory_screening_change_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL auditoryScreeningChangeByGender(?,?)';
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

exports.dep_auditory_screening_change_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL auditoryScreeningChangeByGenderDep(?,?,?)';
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

exports.auditory_screening_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL auditoryScreeningByAge(?,?)';
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

exports.dep_auditory_screening_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL auditoryScreeningByAgeDep(?,?,?)';
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

exports.auditory_screening_change_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL auditoryScreeningChangeByAge(?,?)';
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

exports.dep_auditory_screening_change_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL auditoryScreeningChangeByAgeDep(?,?,?)';
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

//ecg
exports.average_ecg = (req, res, next) => {
    const years = req.params.year.split(',');
    const ecg_query = 'CALL averageEcg(?,?)';
    forms_db.query(ecg_query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.dep_average_ecg = (req, res, next) => {
    const years = req.params.year.split(',');
    const ecg_query = 'CALL depAverageEcg(?,?,?)';
    forms_db.query(ecg_query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.average_ecg_change = (req, res, next) => {
    const years = req.params.year.split(',');
    const ecg_change_query = 'CALL averageEcgChange(?,?)';
    forms_db.query(ecg_change_query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.dep_average_ecg_change = (req, res, next) => {
    const years = req.params.year.split(',');
    const ecg_change_query = 'CALL depAverageEcgChange(?,?,?)';
    forms_db.query(ecg_change_query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.ecg_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL ecgByGender(?,?)';
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

exports.dep_ecg_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL ecgByGenderDep(?,?,?)';
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

exports.ecg_change_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL ecgChangeByGender(?,?)';
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

exports.dep_ecg_change_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL ecgChangeByGenderDep(?,?,?)';
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

exports.ecg_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL ecgByAge(?,?)';
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

exports.dep_ecg_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL ecgByAgeDep(?,?,?)';
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

exports.ecg_change_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL ecgChangeByAge(?,?)';
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

exports.dep_ecg_change_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL ecgChangeByAgeDep(?,?,?)';
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

//eritrogram
exports.average_eritrogram = (req, res, next) => {
    const years = req.params.year.split(',');
    const eritrogram_query = 'CALL averageEritrogram(?,?)';
    forms_db.query(eritrogram_query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.dep_average_eritrogram = (req, res, next) => {
    const years = req.params.year.split(',');
    const eritrogram_query = 'CALL depAverageEritrogram(?,?,?)';
    forms_db.query(eritrogram_query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.average_eritrogram_change = (req, res, next) => {
    const years = req.params.year.split(',');
    const eritrogram_change_query = 'CALL averageEritrogramChange(?,?)';
    forms_db.query(eritrogram_change_query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.dep_average_eritrogram_change = (req, res, next) => {
    const years = req.params.year.split(',');
    const eritrogram_change_query = 'CALL depAverageEritrogramChange(?,?,?)';
    forms_db.query(eritrogram_change_query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.eritrogram_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL eritrogramByGender(?,?)';
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

exports.dep_eritrogram_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL eritrogramByGenderDep(?,?,?)';
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

exports.eritrogram_change_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL eritrogramChangeByGender(?,?)';
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

exports.dep_eritrogram_change_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL eritrogramChangeByGenderDep(?,?,?)';
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

exports.eritrogram_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL eritrogramByAge(?,?)';
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

exports.dep_eritrogram_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL eritrogramByAgeDep(?,?,?)';
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

exports.eritrogram_change_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL eritrogramChangeByAge(?,?)';
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

exports.dep_eritrogram_change_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL eritrogramChangeByAgeDep(?,?,?)';
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

//leukogram
exports.average_leukogram = (req, res, next) => {
    const years = req.params.year.split(',');
    const leukogram_query = 'CALL averageLeukogram(?,?)';
    forms_db.query(leukogram_query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.dep_average_leukogram = (req, res, next) => {
    const years = req.params.year.split(',');
    const leukogram_query = 'CALL depAverageLeukogram(?,?,?)';
    forms_db.query(leukogram_query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.average_leukogram_change = (req, res, next) => {
    const years = req.params.year.split(',');
    const leukogram_change_query = 'CALL averageLeukogramChange(?,?)';
    forms_db.query(leukogram_change_query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.dep_average_leukogram_change = (req, res, next) => {
    const years = req.params.year.split(',');
    const leukogram_change_query = 'CALL depAverageLeukogramChange(?,?,?)';
    forms_db.query(leukogram_change_query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.leukogram_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL leukogramByGender(?,?)';
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

exports.dep_leukogram_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL leukogramByGenderDep(?,?,?)';
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

exports.leukogram_change_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL leukogramChangeByGender(?,?)';
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

exports.dep_leukogram_change_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL leukogramChangeByGenderDep(?,?,?)';
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

exports.leukogram_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL leukogramByAge(?,?)';
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

exports.dep_leukogram_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL leukogramByAgeDep(?,?,?)';
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

exports.leukogram_change_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL leukogramChangeByAge(?,?)';
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

exports.dep_leukogram_change_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL leukogramChangeByAgeDep(?,?,?)';
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