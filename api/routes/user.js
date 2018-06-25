const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user');
const checkAuth = require('../middleware/check-auth');
const checkAdmin = require('../middleware/check-admin');

router.post('/signup', UserController.user_signup);
router.post('/signin', UserController.user_signin);
router.post('/forgotPassword', UserController.forgot_password);
router.post('/forgotPassword/:token', UserController.reset_password);
router.post('/recoverBlockedUser/:token', UserController.recover_password);

router.get('/profile', checkAuth, UserController.user_profile);
router.get('/confirmation/:token', UserController.user_mail_confirmation);
router.get('/recoverBlockedUser/:token', UserController.recover_block_account);
router.get('/forgotPassword/:token', UserController.render_reset_page);
router.get('/number', UserController.users_number);

router.post('/profile/delete', checkAuth, UserController.user_delete_self);

router.post('/profile/changepassword', checkAuth, UserController.user_pw_update);
router.post('/profile/nameUpdate', checkAuth, UserController.name_update);

module.exports = router;