const express = require('express');
const router = express.Router();

const checkAuth = require('../middleware/check-auth');
const ChartsController1 = require('../controllers/charts_data/data_1');
const ChartsController2 = require('../controllers/charts_data/data_2');
const ChartsController3 = require('../controllers/charts_data/data_3');
const ChartsController4 = require('../controllers/charts_data/data_4');
const ChartsController5 = require('../controllers/charts_data/data_5');
const ChartsController6 = require('../controllers/charts_data/data_6');
const ChartsController7 = require('../controllers/charts_data/data_7');

//1
router.get('/gender/0/:year', ChartsController1.average_gender);
router.get('/gender/:department/:year', ChartsController1.dep_average_gender);
router.get('/gender_age/0/:year', ChartsController1.gender_by_age);
router.get('/gender_age/:department/:year', ChartsController1.dep_gender_by_age);

router.get('/departments', ChartsController1.average_department);

router.get('/ages/0/:year', ChartsController1.average_ages);
router.get('/ages/:department/:year', ChartsController1.dep_average_ages);
router.get('/ages_gender/0/:year', ChartsController1.ages_by_gender);
router.get('/ages_gender/:department/:year', ChartsController1.dep_ages_by_gender);

router.get('/academic/0/:year', ChartsController1.average_academic);
router.get('/academic/:department/:year', ChartsController1.dep_average_academic);
router.get('/academic_gender/0/:year', ChartsController1.academic_by_gender);
router.get('/academic_gender/:department/:year', ChartsController1.dep_academic_by_gender);
router.get('/academic_age/0/:year', ChartsController1.academic_by_age);
router.get('/academic_age/:department/:year', ChartsController1.dep_academic_by_age);

router.get('/marital/0/:year', ChartsController1.average_marital);
router.get('/marital/:department/:year', ChartsController1.dep_average_marital);
router.get('/marital_gender/0/:year', ChartsController1.marital_by_gender);
router.get('/marital_gender/:department/:year', ChartsController1.dep_marital_by_gender);
router.get('/marital_age/0/:year', ChartsController1.marital_by_age);
router.get('/marital_age/:department/:year', ChartsController1.dep_marital_by_age);

//2
router.get('/smoker_status/0/:year', ChartsController2.average_smoker_status);
router.get('/smoker_status/:department/:year', ChartsController2.dep_average_smoker_status);
router.get('/smoker_status_gender/0/:year', ChartsController2.smoker_status_by_gender);
router.get('/smoker_status_gender/:department/:year', ChartsController2.dep_smoker_status_by_gender);
router.get('/smoker_status_age/0/:year', ChartsController2.smoker_status_by_age);
router.get('/smoker_status_age/:department/:year', ChartsController2.dep_smoker_status_by_age);

router.get('/smoker_frequencies/0/:year', ChartsController2.average_smoker_frequencie);
router.get('/smoker_frequencies/:department/:year', ChartsController2.dep_average_smoker_frequencie);
router.get('/smoker_frequencies_gender/0/:year', ChartsController2.smoker_frequencie_by_gender);
router.get('/smoker_frequencies_gender/:department/:year', ChartsController2.dep_smoker_frequencies_by_gender);
router.get('/smoker_frequencies_age/0/:year', ChartsController2.smoker_frequencie_by_age);
router.get('/smoker_frequencies_age/:department/:year', ChartsController2.dep_smoker_frequencies_by_age);

router.get('/weekly_number/0/:year', ChartsController2.average_weekly_number);
router.get('/weekly_number/:department/:year', ChartsController2.dep_average_weekly_number);
router.get('/weekly_number_gender/0/:year', ChartsController2.weekly_number_by_gender);
router.get('/weekly_number_gender/:department/:year', ChartsController2.dep_weekly_number_by_gender);
router.get('/weekly_number_age/0/:year', ChartsController2.weekly_number_by_age);
router.get('/weekly_number_age/:department/:year', ChartsController2.dep_weekly_number_by_age);

router.get('/health_opinion/0/:year', ChartsController2.average_health_opinion);
router.get('/health_opinion/:department/:year', ChartsController2.dep_average_health_opinion);
router.get('/health_opinion_gender/0/:year', ChartsController2.health_opinions_by_gender);
router.get('/health_opinion_gender/:department/:year', ChartsController2.dep_health_opinions_by_gender);
router.get('/health_opinion_age/0/:year', ChartsController2.health_opinions_by_age);
router.get('/health_opinion_age/:department/:year', ChartsController2.dep_health_opinions_by_age);

router.get('/weight/0/:year', ChartsController2.average_weight);
router.get('/weight_sum/:year1/:year2', ChartsController2.weight_sum);
router.get('/weight/:department/:year', ChartsController2.dep_average_weight);
router.get('/weight_sum/:year1/:year2/:department', ChartsController2.dep_weight_sum);
router.get('/personal_weight/:year1/:year2', checkAuth, ChartsController2.personal_weight);
router.get('/weight_gender/0/:year', ChartsController2.weight_by_gender);
router.get('/weight_gender/:department/:year', ChartsController2.dep_weight_by_gender);
router.get('/weight_age/0/:year', ChartsController2.weight_by_age);
router.get('/weight_age/:department/:year', ChartsController2.dep_weight_by_age);

router.get('/height/0/:year', ChartsController2.average_height);
router.get('/height/:department/:year', ChartsController2.dep_average_height);
router.get('/height_gender/0/:year', ChartsController2.height_by_gender);
router.get('/height_gender/:department/:year', ChartsController2.dep_height_by_gender);
router.get('/height_age/0/:year', ChartsController2.height_by_age);
router.get('/height_age/:department/:year', ChartsController2.dep_height_by_age);

//3
router.get('/has_chronic/0/:year', ChartsController3.average_has_chronic);
router.get('/has_chronic/:department/:year', ChartsController3.dep_average_has_chronic);
router.get('/has_chronic_gender/0/:year', ChartsController3.has_chronic_by_gender);
router.get('/has_chronic_gender/:department/:year', ChartsController3.dep_has_chronic_by_gender);
router.get('/has_chronic_age/0/:year', ChartsController3.has_chronic_by_age);
router.get('/has_chronic_age/:department/:year', ChartsController3.dep_has_chronic_by_age);

router.get('/chronic_values/0/:year', ChartsController3.average_chronic_values);
router.get('/chronic_values/:department/:year', ChartsController3.dep_average_chronic_values);
router.get('/chronic_values_gender/0/:year', ChartsController3.chronic_values_by_gender);
router.get('/chronic_values_gender/:department/:year', ChartsController3.dep_chronic_values_by_gender);
router.get('/chronic_values_age/0/:year', ChartsController3.chronic_values_by_age);
router.get('/chronic_values_age/:department/:year', ChartsController3.dep_chronic_values_by_age);

router.get('/takes_meds/0/:year', ChartsController3.average_takes_meds);
router.get('/takes_meds/:department/:year', ChartsController3.dep_average_takes_meds);
router.get('/takes_meds_gender/0/:year', ChartsController3.takes_meds_by_gender);
router.get('/takes_meds_gender/:department/:year', ChartsController3.dep_takes_meds_by_gender);
router.get('/takes_meds_age/0/:year', ChartsController3.takes_meds_by_age);
router.get('/takes_meds_age/:department/:year', ChartsController3.dep_takes_meds_by_age);

router.get('/meds_number/0/:year', ChartsController3.average_meds_number);
router.get('/meds_number/:department/:year', ChartsController3.dep_average_meds_number);
router.get('/meds_number_gender/0/:year', ChartsController3.meds_number_by_gender);
router.get('/meds_number_gender/:department/:year', ChartsController3.dep_meds_number_by_gender);
router.get('/meds_number_age/0/:year', ChartsController3.meds_number_by_age);
router.get('/meds_number_age/:department/:year', ChartsController3.dep_meds_number_by_age);

router.get('/meds_value/0/:year', ChartsController3.average_meds_value);
router.get('/meds_value/:department/:year', ChartsController3.dep_average_meds_value);
router.get('/meds_value_gender/0/:year', ChartsController3.meds_value_by_gender);
router.get('/meds_value_gender/:department/:year', ChartsController3.dep_meds_value_by_gender);
router.get('/meds_value_age/0/:year', ChartsController3.meds_value_by_age);
router.get('/meds_value_age/:department/:year', ChartsController3.dep_meds_value_by_age);

router.get('/pain_value/0/:year', ChartsController3.average_pain_value);
router.get('/pain_value/:department/:year', ChartsController3.dep_average_pain_value);
router.get('/pain_value_gender/0/:year', ChartsController3.pain_value_by_gender);
router.get('/pain_value_gender/:department/:year', ChartsController3.dep_pain_value_by_gender);
router.get('/pain_value_age/0/:year', ChartsController3.pain_value_by_age);
router.get('/pain_value_age/:department/:year', ChartsController3.dep_pain_value_by_age);

router.get('/local_pain/0/:year', ChartsController3.average_local_pain);
router.get('/local_pain/:department/:year', ChartsController3.dep_average_local_pain);
router.get('/local_pain_gender/0/:year', ChartsController3.local_pain_by_gender);
router.get('/local_pain_gender/:department/:year', ChartsController3.dep_local_pain_by_gender);
router.get('/local_pain_age/0/:year', ChartsController3.local_pain_by_age);
router.get('/local_pain_age/:department/:year', ChartsController3.dep_local_pain_by_age);

router.get('/pain_scale/0/:year', ChartsController3.average_pain_scale);
router.get('/pain_scale/:department/:year', ChartsController3.dep_average_pain_scale);
router.get('/pain_scale_gender/0/:year', ChartsController3.pain_scale_by_gender);
router.get('/pain_scale_gender/:department/:year', ChartsController3.dep_pain_scale_by_gender);
router.get('/pain_scale_age/0/:year', ChartsController3.pain_scale_by_age);
router.get('/pain_scale_age/:department/:year', ChartsController3.dep_pain_scale_by_age);

//4
router.get('/meals/0/:year', ChartsController4.average_meals);
router.get('/meals/:department/:year', ChartsController4.dep_average_meals);
router.get('/meals_gender/0/:year', ChartsController4.meals_by_gender);
router.get('/meals_gender/:department/:year', ChartsController4.dep_meals_by_gender);
router.get('/meals_age/0/:year', ChartsController4.meals_by_age);
router.get('/meals_age/:department/:year', ChartsController4.dep_meals_by_age);

router.get('/breakfast/0/:year', ChartsController4.average_breakfast);
router.get('/breakfast/:department/:year', ChartsController4.dep_average_breakfast);
router.get('/breakfast_gender/0/:year', ChartsController4.breakfast_by_gender);
router.get('/breakfast_gender/:department/:year', ChartsController4.dep_breakfast_by_gender);
router.get('/breakfast_age/0/:year', ChartsController4.breakfast_by_age);
router.get('/breakfast_age/:department/:year', ChartsController4.dep_breakfast_by_age);

router.get('/fruits/0/:year', ChartsController4.average_fruits);
router.get('/fruits/:department/:year', ChartsController4.dep_average_fruits);
router.get('/fruits_gender/0/:year', ChartsController4.fruits_by_gender);
router.get('/fruits_gender/:department/:year', ChartsController4.dep_fruits_by_gender);
router.get('/fruits_age/0/:year', ChartsController4.fruits_by_age);
router.get('/fruits_age/:department/:year', ChartsController4.dep_fruits_by_age);

router.get('/vegetables/0/:year', ChartsController4.average_vegetables);
router.get('/vegetables/:department/:year', ChartsController4.dep_average_vegetables);
router.get('/vegetables_gender/0/:year', ChartsController4.vegetables_by_gender);
router.get('/vegetables_gender/:department/:year', ChartsController4.dep_vegetables_by_gender);
router.get('/vegetables_age/0/:year', ChartsController4.vegetables_by_age);
router.get('/vegetables_age/:department/:year', ChartsController4.dep_vegetables_by_age);

router.get('/sodas/0/:year', ChartsController4.average_sodas);
router.get('/sodas/:department/:year', ChartsController4.dep_average_sodas);
router.get('/sodas_gender/0/:year', ChartsController4.sodas_by_gender);
router.get('/sodas_gender/:department/:year', ChartsController4.dep_sodas_by_gender);
router.get('/sodas_age/0/:year', ChartsController4.sodas_by_age);
router.get('/sodas_age/:department/:year', ChartsController4.dep_sodas_by_age);

router.get('/fastfood/0/:year', ChartsController4.average_fast_food);
router.get('/fastfood/:department/:year', ChartsController4.dep_average_fast_food);
router.get('/fastfood_gender/0/:year', ChartsController4.fast_food_by_gender);
router.get('/fastfood_gender/:department/:year', ChartsController4.dep_fast_food_by_gender);
router.get('/fastfood_age/0/:year', ChartsController4.fast_food_by_age);
router.get('/fastfood_age/:department/:year', ChartsController4.dep_fast_food_by_age);

router.get('/alcohol/0/:year', ChartsController4.average_alcohol);
router.get('/alcohol/:department/:year', ChartsController4.dep_average_alcohol);
router.get('/alcohol_gender/0/:year', ChartsController4.alcohol_by_gender);
router.get('/alcohol_gender/:department/:year', ChartsController4.dep_alcohol_by_gender);
router.get('/alcohol_age/0/:year', ChartsController4.alcohol_by_age);
router.get('/alcohol_age/:department/:year', ChartsController4.dep_alcohol_by_age);

router.get('/beer/0/:year', ChartsController4.average_beer);
router.get('/beer/:department/:year', ChartsController4.dep_average_beer);
router.get('/beer_gender/0/:year', ChartsController4.beer_by_gender);
router.get('/beer_gender/:department/:year', ChartsController4.dep_beer_by_gender);
router.get('/beer_age/0/:year', ChartsController4.beer_by_age);
router.get('/beer_age/:department/:year', ChartsController4.dep_beer_by_age);

router.get('/wine/0/:year', ChartsController4.average_wine);
router.get('/wine/:department/:year', ChartsController4.dep_average_wine);
router.get('/wine_gender/0/:year', ChartsController4.wine_by_gender);
router.get('/wine_gender/:department/:year', ChartsController4.dep_wine_by_gender);
router.get('/wine_age/0/:year', ChartsController4.wine_by_age);
router.get('/wine_age/:department/:year', ChartsController4.dep_wine_by_age);

router.get('/spirit_drinks/0/:year', ChartsController4.average_spirit_drinks);
router.get('/spirit_drinks/:department/:year', ChartsController4.dep_average_spirit_drinks);
router.get('/spirit_drinks_gender/0/:year', ChartsController4.spirit_drinks_by_gender);
router.get('/spirit_drinks_gender/:department/:year', ChartsController4.dep_spirit_drinks_by_gender);
router.get('/spirit_drinks_age/0/:year', ChartsController4.spirit_drinks_by_age);
router.get('/spirit_drinks_age/:department/:year', ChartsController4.dep_spirit_drinks_by_age);

//5
router.get('/physical_activity/0/:year', ChartsController5.average_physical_activity);
router.get('/physical_activity/:department/:year', ChartsController5.dep_average_physical_activity);
router.get('/physical_activity_gender/0/:year', ChartsController5.physical_activity_by_gender);
router.get('/physical_activity_gender/:department/:year', ChartsController5.dep_physical_activity_by_gender);
router.get('/physical_activity_age/0/:year', ChartsController5.physical_activity_by_age);
router.get('/physical_activity_age/:department/:year', ChartsController5.dep_physical_activity_by_age);

router.get('/physical_values/0/:year', ChartsController5.average_physical_values);
router.get('/physical_values/:department/:year', ChartsController5.dep_average_physical_values);
router.get('/physical_values_gender/0/:year', ChartsController5.physical_values_by_gender);
router.get('/physical_values_gender/:department/:year', ChartsController5.dep_physical_values_by_gender);
router.get('/physical_values_age/0/:year', ChartsController5.physical_values_by_age);
router.get('/physical_values_age/:department/:year', ChartsController5.dep_physical_values_by_age);

router.get('/physical_hours/0/:year', ChartsController5.average_physical_activity_hours);
router.get('/physical_hours/:department/:year', ChartsController5.dep_average_physical_activity_hours);
router.get('/physical_hours_gender/0/:year', ChartsController5.physical_hours_by_gender);
router.get('/physical_hours_gender/:department/:year', ChartsController5.dep_physical_hours_by_gender);
router.get('/physical_hours_age/0/:year', ChartsController5.physical_hours_by_age);
router.get('/physical_hours_age/:department/:year', ChartsController5.dep_physical_hours_by_age);

router.get('/walking_cycling/0/:year', ChartsController5.average_walking_cycling);
router.get('/walking_cycling/:department/:year', ChartsController5.dep_average_walking_cycling);
router.get('/walking_cycling_gender/0/:year', ChartsController5.walking_cycling_by_gender);
router.get('/walking_cycling_gender/:department/:year', ChartsController5.dep_walking_cycling_by_gender);
router.get('/walking_cycling_age/0/:year', ChartsController5.walking_cycling_by_age);
router.get('/walking_cycling_age/:department/:year', ChartsController5.dep_walking_cycling_by_age);

//6
router.get('/sbp/0/:year', ChartsController6.average_sbp);
router.get('/sbp/:department/:year', ChartsController6.dep_average_sbp);
router.get('/personal_sbp/:year1/:year2', ChartsController6.personal_sbp);
router.get('/sbp_sum/:year1/:year2', ChartsController6.sbp_sum);
router.get('/sbp_sum/:year1/:year2/:department', ChartsController6.dep_sbp_sum);
router.get('/sbp_gender/0/:year', ChartsController6.sbp_by_gender);
router.get('/sbp_gender/:department/:year', ChartsController6.dep_sbp_by_gender);
router.get('/sbp_age/0/:year', ChartsController6.sbp_by_age);
router.get('/sbp_age/:department/:year', ChartsController6.dep_sbp_by_age);

router.get('/dbp/0/:year', ChartsController6.average_dbp);
router.get('/dbp/:department/:year', ChartsController6.dep_average_dbp);
router.get('/personal_dbp/:year1/:year2', ChartsController6.personal_dbp);
router.get('/dbp_sum/:year1/:year2', ChartsController6.dbp_sum);
router.get('/dbp_sum/:year1/:year2/:department', ChartsController6.dep_dbp_sum);
router.get('/dbp_gender/0/:year', ChartsController6.dbp_by_gender);
router.get('/dbp_gender/:department/:year', ChartsController6.dep_dbp_by_gender);
router.get('/dbp_age/0/:year', ChartsController6.dbp_by_age);
router.get('/dbp_age/:department/:year', ChartsController6.dep_dbp_by_age);

router.get('/pulse/0/:year', ChartsController6.average_pulse);
router.get('/pulse/:department/:year', ChartsController6.dep_average_pulse);
router.get('/personal_pulse/:year1/:year2', ChartsController6.personal_pulse);
router.get('/pulse_sum/:year1/:year2', ChartsController6.pulse_sum);
router.get('/pulse_sum/:year1/:year2/:department', ChartsController6.dep_pulse_sum);
router.get('/pulse_gender/0/:year', ChartsController6.pulse_by_gender);
router.get('/pulse_gender/:department/:year', ChartsController6.dep_pulse_by_gender);
router.get('/pulse_age/0/:year', ChartsController6.pulse_by_age);
router.get('/pulse_age/:department/:year', ChartsController6.dep_pulse_by_age);

router.get('/uric_acid/0/:year', ChartsController6.average_uric_acid);
router.get('/uric_acid/:department/:year', ChartsController6.dep_average_uric_acid);
router.get('/personal_uric_acid/:year1/:year2', ChartsController6.personal_uric_acid);
router.get('/uric_acid_sum/:year1/:year2', ChartsController6.uric_acid_sum);
router.get('/uric_acid_sum/:year1/:year2/:department', ChartsController6.dep_uric_acid_sum);
router.get('/uric_acid_gender/0/:year', ChartsController6.uric_acid_by_gender);
router.get('/uric_acid_gender/:department/:year', ChartsController6.dep_uric_acid_by_gender);
router.get('/uric_acid_age/0/:year', ChartsController6.uric_acid_by_age);
router.get('/uric_acid_age/:department/:year', ChartsController6.dep_uric_acid_by_age);

router.get('/glucose/0/:year', ChartsController6.average_glucose);
router.get('/glucose/:department/:year', ChartsController6.dep_average_glucose);
router.get('/personal_glucose/:year1/:year2', ChartsController6.personal_glucose);
router.get('/glucose_sum/:year1/:year2', ChartsController6.glucose_sum);
router.get('/glucose_sum/:year1/:year2/:department', ChartsController6.dep_glucose_sum);
router.get('/glucose_gender/0/:year', ChartsController6.glucose_by_gender);
router.get('/glucose_gender/:department/:year', ChartsController6.dep_glucose_by_gender);
router.get('/glucose_age/0/:year', ChartsController6.glucose_by_age);
router.get('/glucose_age/:department/:year', ChartsController6.dep_glucose_by_age);

router.get('/cholesterol/0/:year', ChartsController6.average_cholesterol);
router.get('/cholesterol/:department/:year', ChartsController6.dep_average_cholesterol);
router.get('/personal_cholesterol/:year1/:year2', ChartsController6.personal_cholesterol);
router.get('/cholesterol_sum/:year1/:year2', ChartsController6.cholesterol_sum);
router.get('/cholesterol_sum/:year1/:year2/:department', ChartsController6.dep_cholesterol_sum);
router.get('/cholesterol_gender/0/:year', ChartsController6.cholesterol_by_gender);
router.get('/cholesterol_gender/:department/:year', ChartsController6.dep_cholesterol_by_gender);
router.get('/cholesterol_age/0/:year', ChartsController6.cholesterol_by_age);
router.get('/cholesterol_age/:department/:year', ChartsController6.dep_cholesterol_by_age);

//7
router.get('/spirometry/0/:year', ChartsController7.average_spirometry);
router.get('/spirometry/:department/:year', ChartsController7.dep_average_spirometry);
router.get('/spirometry_gender/0/:year', ChartsController7.spirometry_by_gender);
router.get('/spirometry_gender/:department/:year', ChartsController7.dep_spirometry_by_gender);
router.get('/spirometry_age/0/:year', ChartsController7.spirometry_by_age);
router.get('/spirometry_age/:department/:year', ChartsController7.dep_spirometry_by_age);
router.get('/spirometry_change_gender/0/:year', ChartsController7.spirometry_change_by_gender);
router.get('/spirometry_change_gender/:department/:year', ChartsController7.dep_spirometry_change_by_gender);
router.get('/spirometry_change_age/0/:year', ChartsController7.spirometry_change_by_age);
router.get('/spirometry_change_age/:department/:year', ChartsController7.dep_spirometry_change_by_age);
router.get('/spirometry_change/0/:year', ChartsController7.average_spirometry_change);
router.get('/spirometry_change/:department/:year', ChartsController7.dep_average_spirometry_change);

router.get('/visual_screening/0/:year', ChartsController7.average_visual_screening);
router.get('/visual_screening/:department/:year', ChartsController7.dep_average_visual_screening);
router.get('/visual_screening_gender/0/:year', ChartsController7.visual_screening_by_gender);
router.get('/visual_screening_gender/:department/:year', ChartsController7.dep_visual_screening_by_gender);
router.get('/visual_screening_age/0/:year', ChartsController7.visual_screening_by_age);
router.get('/visual_screening_age/:department/:year', ChartsController7.dep_visual_screening_by_age);
router.get('/visual_screening_change_gender/0/:year', ChartsController7.visual_screening_change_by_gender);
router.get('/visual_screening_change_gender/:department/:year', ChartsController7.dep_visual_screening_change_by_gender);
router.get('/visual_screening_change_age/0/:year', ChartsController7.visual_screening_change_by_age);
router.get('/visual_screening_change_age/:department/:year', ChartsController7.dep_visual_screening_change_by_age);
router.get('/visual_change/0/:year', ChartsController7.average_visual_screening_change);
router.get('/visual_change/:department/:year', ChartsController7.dep_average_visual_screening_change);

router.get('/auditory_screening/0/:year', ChartsController7.average_auditory_screening);
router.get('/auditory_screening/:department/:year', ChartsController7.dep_average_auditory_screening);
router.get('/auditory_screening_gender/0/:year', ChartsController7.auditory_screening_by_gender);
router.get('/auditory_screening_gender/:department/:year', ChartsController7.dep_auditory_screening_by_gender);
router.get('/auditory_screening_age/0/:year', ChartsController7.auditory_screening_by_age);
router.get('/auditory_screening_age/:department/:year', ChartsController7.dep_auditory_screening_by_age);
router.get('/auditory_screening_change_gender/0/:year', ChartsController7.auditory_screening_change_by_gender);
router.get('/auditory_screening_change_gender/:department/:year', ChartsController7.dep_auditory_screening_change_by_gender);
router.get('/auditory_screening_change_age/0/:year', ChartsController7.auditory_screening_change_by_age);
router.get('/auditory_screening_change_age/:department/:year', ChartsController7.dep_auditory_screening_change_by_age);
router.get('/auditory_change/0/:year', ChartsController7.average_auditory_screening_change);
router.get('/auditory_change/:department/:year', ChartsController7.dep_average_auditory_screening_change);

router.get('/ecg/0/:year', ChartsController7.average_ecg);
router.get('/ecg/:department/:year', ChartsController7.dep_average_ecg);
router.get('/ecg_gender/0/:year', ChartsController7.ecg_by_gender);
router.get('/ecg_gender/:department/:year', ChartsController7.dep_ecg_by_gender);
router.get('/ecg_age/0/:year', ChartsController7.ecg_by_age);
router.get('/ecg_age/:department/:year', ChartsController7.dep_ecg_by_age);
router.get('/ecg_change_gender/0/:year', ChartsController7.ecg_change_by_gender);
router.get('/ecg_change_gender/:department/:year', ChartsController7.dep_ecg_change_by_gender);
router.get('/ecg_change_age/0/:year', ChartsController7.ecg_change_by_age);
router.get('/ecg_change_age/:department/:year', ChartsController7.dep_ecg_change_by_age);
router.get('/ecg_change/0/:year', ChartsController7.average_ecg_change);
router.get('/ecg_change/:department/:year', ChartsController7.dep_average_ecg_change);

router.get('/eritrogram/0/:year', ChartsController7.average_eritrogram);
router.get('/eritrogram/:department/:year', ChartsController7.dep_average_eritrogram);
router.get('/eritrogram_gender/0/:year', ChartsController7.eritrogram_by_gender);
router.get('/eritrogram_gender/:department/:year', ChartsController7.dep_eritrogram_by_gender);
router.get('/eritrogram_age/0/:year', ChartsController7.eritrogram_by_age);
router.get('/eritrogram_age/:department/:year', ChartsController7.dep_eritrogram_by_age);
router.get('/eritrogram_change_gender/0/:year', ChartsController7.eritrogram_change_by_gender);
router.get('/eritrogram_change_gender/:department/:year', ChartsController7.dep_eritrogram_change_by_gender);
router.get('/eritrogram_change_age/0/:year', ChartsController7.eritrogram_change_by_age);
router.get('/eritrogram_change_age/:department/:year', ChartsController7.dep_eritrogram_change_by_age);
router.get('/eritrogram_change/0/:year', ChartsController7.average_eritrogram_change);
router.get('/eritrogram_change/:department/:year', ChartsController7.dep_average_eritrogram_change);

router.get('/leukogram/0/:year', ChartsController7.average_leukogram);
router.get('/leukogram/:department/:year', ChartsController7.dep_average_leukogram);
router.get('/leukogram_gender/0/:year', ChartsController7.leukogram_by_gender);
router.get('/leukogram_gender/:department/:year', ChartsController7.dep_leukogram_by_gender);
router.get('/leukogram_age/0/:year', ChartsController7.leukogram_by_age);
router.get('/leukogram_age/:department/:year', ChartsController7.dep_leukogram_by_age);
router.get('/leukogram_change_gender/0/:year', ChartsController7.leukogram_change_by_gender);
router.get('/leukogram_change_gender/:department/:year', ChartsController7.dep_leukogram_change_by_gender);
router.get('/leukogram_change_age/0/:year', ChartsController7.leukogram_change_by_age);
router.get('/leukogram_change_age/:department/:year', ChartsController7.dep_leukogram_change_by_age);
router.get('/leukogram_change/0/:year', ChartsController7.average_leukogram_change);
router.get('/leukogram_change/:department/:year', ChartsController7.dep_average_leukogram_change);

module.exports = router;