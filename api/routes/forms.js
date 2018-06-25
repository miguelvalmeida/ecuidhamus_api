const express = require('express');
const router = express.Router();
const FormsController = require('../controllers/forms');
const checkAuth = require('../middleware/check-auth');
const checkAdmin = require('../middleware/check-admin');

router.get('/insert/:code', checkAuth, FormsController.insert_code);
router.get('/registered_codes', checkAuth, FormsController.registered_codes);
router.get('/registered_code/:code', checkAuth, FormsController.code_results);
router.get('/number', FormsController.get_forms_number);
router.get('/registered_number', FormsController.get_registered_forms_number);
router.get('/nullvalues/:code', FormsController.get_null_values);
router.get('/nullnumbers/:code', FormsController.get_null_numbers);

router.post('/update_code/:code', FormsController.update_forms);
    
router.delete('/delete/:code', checkAuth, FormsController.delete_code);

module.exports = router;