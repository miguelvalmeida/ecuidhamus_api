const express = require('express');
const router = express.Router();
const RefValuesController = require('../controllers/ref_values');
const checkAuth = require('../middleware/check-auth');
const checkAdmin = require('../middleware/check-admin');

//1
router.get('/departments', RefValuesController.departments_all);
router.get('/genders', RefValuesController.genders_all);
router.get('/ages', RefValuesController.ages_all);
router.get('/chart_ages', RefValuesController.chart_ages);
router.get('/academic', RefValuesController.academic_all);
router.get('/marital', RefValuesController.marital_all);

//2
router.get('/smokersv', RefValuesController.smokersV_all);
router.get('/smokersf', RefValuesController.smokersF_all);
router.get('/smokersa', RefValuesController.smokersA_all);
router.get('/health_opinions', RefValuesController.healthO_all);

//3
router.get('/chronic_value', RefValuesController.chronic_diseases_value);
router.get('/meds_value', RefValuesController.takes_meds_value);
router.get('/local_pain', RefValuesController.local_pain_value);
router.get('/pain_value', RefValuesController.pain_value_all);
router.get('/pain_scale', RefValuesController.pain_scale_all);

//4
router.get('/meals', RefValuesController.meals_all);
router.get('/breakfast', RefValuesController.breakfast_all);
router.get('/fruit', RefValuesController.fruits_all);
router.get('/vegetables', RefValuesController.vegetables_all);
router.get('/sodas', RefValuesController.sodas_all);
router.get('/fast_food', RefValuesController.fast_food_all);

//5
router.get('/physical_values', RefValuesController.physical_values);
router.get('/walking_cycling', RefValuesController.walking_cycling_all);
router.get('/physical_hours', RefValuesController.physical_activity_hours_all);

//6
router.get('/spirometry_change', RefValuesController.spirometry_change_values);
router.get('/visual_change', RefValuesController.visual_screen_change_values);
router.get('/auditory_change', RefValuesController.auditory_screen_change_values);
router.get('/ecg_change', RefValuesController.ecg_change_values);
router.get('/eritrogram_change', RefValuesController.eritrogram_change_values);
router.get('/leukogram_change', RefValuesController.leukogram_change_values);

router.get('/dates', RefValuesController.consultation_dates);
router.get('/min_year', RefValuesController.min_year);
router.get('/max_year', RefValuesController.max_year);

module.exports = router;

