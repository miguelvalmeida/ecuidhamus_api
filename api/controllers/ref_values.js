const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const db = require('../../db2_connection');

exports.departments_all = (req, res, next) => {
    let sql = 'SELECT * FROM departments_services_schools';
    db.query(sql, (err, results) => {
        if (err) {
            res.status(400).json({
                error: err
            })
        } else {
            res.status(200).json({
                departments: {
                    results
                }
            })
        }
    })
}

exports.ages_all = (req, res, next) => {
    const language = req.headers.language;
    let sql = null;
    if (language === "pt") {
        sql = 'SELECT id_ages, value FROM ages';
    } else if (language === "en") {
        sql = 'SELECT id_ages, value_en as value FROM ages';
    }

    db.query(sql, (err, results) => {
        if (err) {
            res.status(400).json({
                error: err
            })
        } else {
            res.status(200).json({
                ages: {
                    results
                }
            })
        }
    })
};

exports.chart_ages = (req, res, next) => {
    const sql = 'SELECT id_chart_ages, value FROM chart_ages';
    db.query(sql, (err, results) => {
        if (err) {
            res.status(400).json({
                error: err
            })
        } else {
            res.status(200).json({
                ages: {
                    results
                }
            })
        }
    })
};

exports.genders_all = (req, res, next) => {
    const language = req.headers.language;
    let sql = null;
    if (language === "pt") {
        sql = 'SELECT id_genders, value FROM genders';
    } else if (language === "en") {
        sql = 'SELECT id_genders, value_en as value FROM genders';
    }

    db.query(sql, (err, results) => {
        if (err) {
            res.status(400).json({
                error: err
            })
        } else {
            res.status(200).json({
                genders: {
                    results
                }
            })
        }
    })
};

exports.marital_all = (req, res, next) => {
    const language = req.headers.language;
    let sql = null;
    if (language === "pt") {
        sql = 'SELECT id_marital_status, value FROM marital_status';
    } else if (language === "en") {
        sql = 'SELECT id_marital_status, value_en as value FROM marital_status';
    }

    db.query(sql, (err, results) => {
        if (err) {
            res.status(400).json({
                error: err
            })
        } else {
            res.status(200).json({
                marital: {
                    results
                }
            })
        }
    })
};

exports.academic_all = (req, res, next) => {
    const language = req.headers.language;
    let sql = null;
    if (language === "pt") {
        sql = 'SELECT id_academic_levels, value FROM academic_levels';
    } else if (language === "en") {
        sql = 'SELECT id_academic_levels, value_en as value FROM academic_levels';
    }

    db.query(sql, (err, results) => {
        if (err) {
            res.status(400).json({
                error: err
            })
        } else {
            res.status(200).json({
                academic: {
                    results
                }
            })
        }
    })
};

exports.smokersV_all = (req, res, next) => {
    const language = req.headers.language;
    let sql = null;
    if (language === "pt") {
        sql = 'SELECT id_smokers_value, value FROM smokers_value';
    } else if (language === "en") {
        sql = 'SELECT id_smokers_value, value_en as value FROM smokers_value';
    }

    db.query(sql, (err, results) => {
        if (err) {
            res.status(400).json({
                error: err
            })
        } else {
            res.status(200).json({
                smokersV: {
                    results
                }
            })
        }
    })
};

exports.smokersF_all = (req, res, next) => {
    const language = req.headers.language;
    let sql = null;
    if (language === "pt") {
        sql = 'SELECT id_frequencies, value FROM frequencies';
    } else if (language === "en") {
        sql = 'SELECT id_frequencies, value_en as value FROM frequencies';
    }

    db.query(sql, (err, results) => {
        if (err) {
            res.status(400).json({
                error: err
            })
        } else {
            res.status(200).json({
                smokersF: {
                    results
                }
            })
        }
    })
};

exports.smokersA_all = (req, res, next) => {
    const language = req.headers.language;
    let sql = null;
    if (language === "pt") {
        sql = 'SELECT id_average_daily_smokes, value FROM average_daily_smokes';
    } else if (language === "en") {
        sql = 'SELECT id_average_daily_smokes, value_en as value FROM average_daily_smokes';
    }

    db.query(sql, (err, results) => {
        if (err) {
            res.status(400).json({
                error: err
            })
        } else {
            res.status(200).json({
                smokersA: {
                    results
                }
            })
        }
    })
};

exports.healthO_all = (req, res, next) => {
    const language = req.headers.language;
    let sql = null;
    if (language === "pt") {
        sql = 'SELECT id_health_opinions, value FROM health_opinions';
    } else if (language === "en") {
        sql = 'SELECT id_health_opinions, value_en as value FROM health_opinions';
    }

    db.query(sql, (err, results) => {
        if (err) {
            res.status(400).json({
                error: err
            })
        } else {
            res.status(200).json({
                healthO: {
                    results
                }
            })
        }
    })
};

exports.pain_value_all = (req, res, next) => {
    const language = req.headers.language;
    let sql = null;
    if (language === "pt") {
        sql = 'SELECT id_pain_value, value FROM pain_value';
    } else if (language === "en") {
        sql = 'SELECT id_pain_value, value_en as value FROM pain_value';
    }

    db.query(sql, (err, results) => {
        if (err) {
            res.status(400).json({
                error: err
            })
        } else {
            res.status(200).json({
                pain_value: {
                    results
                }
            })
        }
    })
};

exports.pain_scale_all = (req, res, next) => {
    let sql = 'SELECT * FROM pain_scale';
    db.query(sql, (err, results) => {
        if (err) {
            res.status(400).json({
                error: err
            })
        } else {
            res.status(200).json({
                pain_scale: {
                    results
                }
            })
        }
    })
};

exports.meals_all = (req, res, next) => {
    const language = req.headers.language;
    let sql = null;
    if (language === "pt") {
        sql = 'SELECT id_meals, value FROM meals';
    } else if (language === "en") {
        sql = 'SELECT id_meals, value_en as value FROM meals';
    }

    db.query(sql, (err, results) => {
        if (err) {
            res.status(400).json({
                error: err
            })
        } else {
            res.status(200).json({
                meals: {
                    results
                }
            })
        }
    })
};

exports.breakfast_all = (req, res, next) => {
    const language = req.headers.language;
    let sql = null;
    if (language === "pt") {
        sql = 'SELECT id_breakfast, value FROM breakfast';
    } else if (language === "en") {
        sql = 'SELECT id_breakfast, value_en as value FROM breakfast';
    }

    db.query(sql, (err, results) => {
        if (err) {
            res.status(400).json({
                error: err
            })
        } else {
            res.status(200).json({
                breakfast: {
                    results
                }
            })
        }
    })
};

exports.fruits_all = (req, res, next) => {
    const language = req.headers.language;
    let sql = null;
    if (language === "pt") {
        sql = 'SELECT id_fruits, value FROM fruits';
    } else if (language === "en") {
        sql = 'SELECT id_fruits, value_en as value FROM fruits';
    }

    db.query(sql, (err, results) => {
        if (err) {
            res.status(400).json({
                error: err
            })
        } else {
            res.status(200).json({
                fruits: {
                    results
                }
            })
        }
    })
};

exports.vegetables_all = (req, res, next) => {
    const language = req.headers.language;
    let sql = null;
    if (language === "pt") {
        sql = 'SELECT id_vegetables, value FROM vegetables';
    } else if (language === "en") {
        sql = 'SELECT id_vegetables, value_en as value FROM vegetables';
    }

    db.query(sql, (err, results) => {
        if (err) {
            res.status(400).json({
                error: err
            })
        } else {
            res.status(200).json({
                vegetables: {
                    results
                }
            })
        }
    })
};

exports.sodas_all = (req, res, next) => {
    const language = req.headers.language;
    let sql = null;
    if (language === "pt") {
        sql = 'SELECT id_sodas, value FROM sodas';
    } else if (language === "en") {
        sql = 'SELECT id_sodas, value_en as value FROM sodas';
    }

    db.query(sql, (err, results) => {
        if (err) {
            res.status(400).json({
                error: err
            })
        } else {
            res.status(200).json({
                sodas: {
                    results
                }
            })
        }
    })
};

exports.fast_food_all = (req, res, next) => {
    const language = req.headers.language;
    let sql = null;
    if (language === "pt") {
        sql = 'SELECT id_fast_food, value FROM fast_food';
    } else if (language === "en") {
        sql = 'SELECT id_fast_food, value_en as value FROM fast_food';
    }

    db.query(sql, (err, results) => {
        if (err) {
            res.status(400).json({
                error: err
            })
        } else {
            res.status(200).json({
                fast_food: {
                    results
                }
            })
        }
    })
};

exports.walking_cycling_all = (req, res, next) => {
    const language = req.headers.language;
    let sql = null;
    if (language === "pt") {
        sql = 'SELECT id_walking_cycling, value FROM walking_cycling';
    } else if (language === "en") {
        sql = 'SELECT id_walking_cycling, value_en as value FROM walking_cycling';
    }

    db.query(sql, (err, results) => {
        if (err) {
            res.status(400).json({
                error: err
            })
        } else {
            res.status(200).json({
                walking_cycling: {
                    results
                }
            })
        }
    })
};

exports.physical_activity_hours_all = (req, res, next) => {
    const language = req.headers.language;
    let sql = null;
    if (language === "pt") {
        sql = 'SELECT id_physical_activity_hours, value FROM physical_activity_hours';
    } else if (language === "en") {
        sql = 'SELECT id_physical_activity_hours, value_en as value FROM physical_activity_hours';
    }

    db.query(sql, (err, results) => {
        if (err) {
            res.status(400).json({
                error: err
            })
        } else {
            res.status(200).json({
                physical_hours: {
                    results
                }
            })
        }
    })
};

exports.consultation_dates = (req, res, next) => {
    let sql = 'SELECT DISTINCT YEAR(consultation_date) as year FROM original_forms';
    db.query(sql, (err, results) => {
        if (err) {
            res.status(400).json({
                error: err
            })
        } else {
            res.status(200).json({
                dates: {
                    results
                }
            })
        }
    })
}

exports.min_year = (req, res, next) => {
    let sql = 'SELECT MIN(YEAR(consultation_date)) as min_year from original_forms';
    db.query(sql, (err, results) => {
        if (err) {
            res.status(400).json({
                error: err
            })
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.max_year = (req, res, next) => {
    let sql = 'SELECT MAX(YEAR(consultation_date)) as max_year from original_forms';
    db.query(sql, (err, results) => {
        if (err) {
            res.status(400).json({
                error: err
            })
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.chronic_diseases_value = (req, res, next) => {
    const language = req.headers.language;
    let sql = null;
    if (language === "pt") {
        sql = 'SELECT id_chronic_diseases_value, value FROM chronic_diseases_value';
    } else if (language === "en") {
        sql = 'SELECT id_chronic_diseases_value, value_en as value FROM chronic_diseases_value';
    }

    db.query(sql, (err, results) => {
        if (err) {
            res.status(400).json({
                error: err
            })
        } else {
            res.status(200).json({
                chronic_diseases: {
                    results
                }
            })
        }
    })
}

exports.takes_meds_value = (req, res, next) => {
    const language = req.headers.language;
    let sql = null;
    if (language === "pt") {
        sql = 'SELECT id_takes_meds_value, value FROM takes_meds_value';
    } else if (language === "en") {
        sql = 'SELECT id_takes_meds_value, value_en as value FROM takes_meds_value';
    }

    db.query(sql, (err, results) => {
        if (err) {
            res.status(400).json({
                error: err
            })
        } else {
            res.status(200).json({
                takes_meds_value: {
                    results
                }
            })
        }
    })
}

exports.local_pain_value = (req, res, next) => {
    const language = req.headers.language;
    let sql = null;
    if (language === "pt") {
        sql = 'SELECT id_local_pain, value FROM local_pain';
    } else if (language === "en") {
        sql = 'SELECT id_local_pain, value_en as value FROM local_pain';
    }

    db.query(sql, (err, results) => {
        if (err) {
            res.status(400).json({
                error: err
            })
        } else {
            res.status(200).json({
                local_pain: {
                    results
                }
            })
        }
    })
}

exports.physical_values = (req, res, next) => {
    const language = req.headers.language;
    let sql = null;
    if (language === "pt") {
        sql = 'SELECT id_physical_activity_value, value FROM physical_activity_value';
    } else if (language === "en") {
        sql = 'SELECT id_physical_activity_value, value_en as value FROM physical_activity_value';
    }

    db.query(sql, (err, results) => {
        if (err) {
            res.status(400).json({
                error: err
            })
        } else {
            res.status(200).json({
                physical_value: {
                    results
                }
            })
        }
    })
}

exports.spirometry_change_values = (req, res, next) => {
    const language = req.headers.language;
    let sql = null;
    if (language === "pt") {
        sql = 'SELECT id_spirometry_change, value FROM spirometry_change';
    } else if (language === "en") {
        sql = 'SELECT id_spirometry_change, value_en as value FROM spirometry_change';
    }

    db.query(sql, (err, results) => {
        if (err) {
            res.status(400).json({
                error: err
            })
        } else {
            res.status(200).json({
                spirometry_change: {
                    results
                }
            })
        }
    })
}

exports.visual_screen_change_values = (req, res, next) => {
    const language = req.headers.language;
    let sql = null;
    if (language === "pt") {
        sql = 'SELECT id_visual_screening_change, value FROM visual_screening_change';
    } else if (language === "en") {
        sql = 'SELECT id_visual_screening_change, value_en as value FROM visual_screening_change';
    }

    db.query(sql, (err, results) => {
        if (err) {
            res.status(400).json({
                error: err
            })
        } else {
            res.status(200).json({
                visual_change: {
                    results
                }
            })
        }
    })
}

exports.auditory_screen_change_values = (req, res, next) => {
    const language = req.headers.language;
    let sql = null;
    if (language === "pt") {
        sql = 'SELECT id_auditory_screening_change, value FROM auditory_screening_change';
    } else if (language === "en") {
        sql = 'SELECT id_auditory_screening_change, value_en as value FROM auditory_screening_change';
    }

    db.query(sql, (err, results) => {
        if (err) {
            res.status(400).json({
                error: err
            })
        } else {
            res.status(200).json({
                auditory_change: {
                    results
                }
            })
        }
    })
}

exports.ecg_change_values = (req, res, next) => {
    const language = req.headers.language;
    let sql = null;
    if (language === "pt") {
        sql = 'SELECT id_ecg_change, value FROM ecg_change';
    } else if (language === "en") {
        sql = 'SELECT id_ecg_change, value_en as value FROM ecg_change';
    }

    db.query(sql, (err, results) => {
        if (err) {
            res.status(400).json({
                error: err
            })
        } else {
            res.status(200).json({
                ecg_change: {
                    results
                }
            })
        }
    })
}

exports.eritrogram_change_values = (req, res, next) => {
    const language = req.headers.language;
    let sql = null;
    if (language === "pt") {
        sql = 'SELECT id_eritrogram_change, value FROM eritrogram_change';
    } else if (language === "en") {
        sql = 'SELECT id_eritrogram_change, value_en as value FROM eritrogram_change';
    }

    db.query(sql, (err, results) => {
        if (err) {
            res.status(400).json({
                error: err
            })
        } else {
            res.status(200).json({
                eritrogram_change: {
                    results
                }
            })
        }
    })
}

exports.leukogram_change_values = (req, res, next) => {
    const language = req.headers.language;
    let sql = null;
    if (language === "pt") {
        sql = 'SELECT id_leukogram_change, value FROM leukogram_change';
    } else if (language === "en") {
        sql = 'SELECT id_leukogram_change, value_en as value FROM leukogram_change';
    }

    db.query(sql, (err, results) => {
        if (err) {
            res.status(400).json({
                error: err
            })
        } else {
            res.status(200).json({
                leukogram_change: {
                    results
                }
            })
        }
    })
}