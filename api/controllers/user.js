const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const db = require('../../db_connection');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const moment = require('moment');
const useragent = require('useragent');
const ip = require('ip');

exports.user_signup = (req, res, next) => {
    const language = req.headers.language;
    let message = null;
    if (language === 'pt') {
        message = {
            insert: 'Insira um email e uma password',
            invalid_email: 'Email inválido',
            email_registered: 'Este email já está registado',
            register_success: 'Registo efetuado com sucesso. Vai receber um email de confirmação',
        }
    } else {
        message = {
            insert: 'Enter an email and password',
            invalid_email: 'Invalid email',
            email_registered: 'This email is already registered',
            register_success: 'Registration successful. You will receive a confirmation email',
        }
    }
    ;

    if (!req.body.password || !req.body.email) {
        res.status(200).json({
            status: 0,
            message: message.insert
        })
    } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
            if (err) {
                return res.status(500).json({
                    error: err
                })
            } else {
                let user = {
                    email: req.body.email,
                    password: hash,
                    creation_date: moment().format('DD-MM-YYYY, H:mm:ss')
                };
                const re = /^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(ua)\.pt$/
                if (!re.test(user.email)) {
                    res.status(200).json({
                        status: 0,
                        message: message.invalid_email
                    })
                } else {
                    let checkEmail = 'SELECT email, id_users FROM users WHERE email = ?';
                    db.query(checkEmail, user.email, (err, results) => {
                        if (results.length > 0) {
                            res.status(200).json({
                                status: 0,
                                message: message.email_registered
                            })
                        } else {
                            let sql = 'INSERT INTO users SET email = ?, password = ?, creation_date = ?, login_attempts = (SELECT global_login_attempts FROM configs), code_attempts = (SELECT global_code_attempts FROM configs)';
                            db.query(sql, [user.email, user.password, user.creation_date], (err, results) => {
                                if (err) {
                                    res.status(400).json({
                                        error: err
                                    })
                                } else {
                                    let transporter = nodemailer.createTransport({
                                        service: process.env.SERVICE,
                                        auth: {
                                            user: process.env.EMAIL,
                                            pass: process.env.EMAIL_PW
                                        }
                                    });
                                    jwt.sign({ user: results.insertId }, process.env.JWT_KEY, { expiresIn: '1000d' }, (err, emailToken) => {
                                        const url = `${process.env.DOMAIN}/user/confirmation/${emailToken}`;
                                        let mailOptions = {
                                            to: req.body.email,
                                            subject: 'Confirmação de email',
                                            html: 'Clica neste link para confirmares a tua conta:\n\n' +
                                                `<a href="${url}">${url}</a>`
                                        }
                                        transporter.sendMail(mailOptions, (error, info) => {
                                            if (error) {
                                                console.log(error)
                                            } else {
                                                console.log(info)
                                            }
                                        })
                                    })
                                    res.status(200).json({
                                        status: 1,
                                        message: message.register_success
                                    })
                                }
                            })
                            let getId = 'SELECT id_users FROM users WHERE email = ?'
                            db.query(getId, req.body.email, (err, results) => {
                                if (err) {
                                    res.status(400).json({
                                        error: err
                                    })
                                } else {
                                    let profile = {
                                        ref_id_profile: 1,
                                        ref_id_users: results[0].id_users
                                    }
                                    let insertProfile = 'INSERT INTO profile_has_users SET ?';
                                    db.query(insertProfile, profile, (err, results) => {
                                        if (err) {
                                            res.status(400).json({
                                                error: err
                                            })
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            }
        })
    }
}

exports.user_signin = (req, res, next) => {
    const language = req.headers.language;
    let message = null;
    if (language === 'pt') {
        message = {
            insert: 'Insira um email e uma password',
            login_success: 'Login efetuado com sucesso',
            invalid_email: 'Email inválido',
            maxTry: 'Número de tentativas máximas de login excedidas. Consulte o seu email para mais informações',
            inactive: 'Conta inativa. Consulte o seu email para mais informações',
            no_active: 'Conta não está ativa. Verifica o teu email para ativar',
            email_registered: 'Este email já está registado',
        }
    } else {
        message = {
            insert: 'Enter an email and password',
            login_success: 'Login done successfully',
            invalid_email: 'Invalid email',
            maxTry: 'Number of maximum login attempts exceeded. See your email for more information',
            inactive: 'Account inactive. See your email for more information',
            no_active: 'Account is not active. Verify your email to activate',
            email_registered: 'This email is already registered'
        }
    }
    let email = req.body.email;
    let password = req.body.password;
    if (!email || !password) {
        res.status(200).json({
            status: 0,
            message: message.insert
        })
    } else {
        let sql = 'SELECT * from users LEFT JOIN profile_has_users ON profile_has_users.ref_id_users = users.id_users left join directors on directors.ref_id_users = users.id_users where email = ?';
        db.query(sql, email, (err, results) => {
            if (err) {
                res.status(400).json({
                    error: err
                })
            } else {
                if (results.length > 0) {
                    const token_info = {
                        email: results[0].email,
                        userId: results[0].id_users,
                        profile: results[0].ref_id_profile
                    };
                    let login_attempts = results[0].login_attempts;
                    bcrypt.compare(password, results[0].password, (err, doesMatch) => {
                        if (doesMatch) {
                            if (results[0].confirmed === 1) {
                                if (results[0].active === 1) {
                                    if (results[0].can_login === 1) {
                                        let reset_attempts = 'UPDATE users SET login_attempts = (SELECT global_login_attempts FROM configs) WHERE email= ?';
                                        db.query(reset_attempts, req.body.email, (err, results) => {
                                            if (err) {
                                                console.log(err)
                                            }
                                        })
                                        const token = jwt.sign({
                                            email: token_info.email,
                                            userId: token_info.userId,
                                            profile: token_info.profile
                                        }, process.env.JWT_KEY, { expiresIn: "1h" })

                                        res.status(200).json({
                                            status: 1,
                                            message: message.login_success,
                                            token: token,
                                            expiresIn: 3600,
                                            department: results[0].ref_id_departments
                                        })
                                    } else {
                                        res.status(200).json({
                                            status: 0,
                                            message: message.maxTry
                                        })
                                    }
                                } else {
                                    res.status(200).json({
                                        status: 0,
                                        message: message.inactive
                                    })
                                }
                            } else {
                                res.status(200).json({
                                    status: 0,
                                    message: message.no_active
                                })
                            }
                        } else {
                            let check_attempts = 'SELECT login_attempts, id_users FROM users WHERE email = ?';
                            db.query(check_attempts, email, (err, results) => {
                                if (err) {
                                    console.log(err)
                                } else {
                                    let user_id = results[0].id_users
                                    let login_attempts = results[0].login_attempts;
                                    if (login_attempts === 1) {
                                        let blockAccount = 'UPDATE users SET can_login = ? WHERE email = ?';
                                        db.query(blockAccount, ["0", email], (err, results) => {
                                            if (err) {
                                                console.log(err);
                                            }
                                        })
                                        let transporter = nodemailer.createTransport({
                                            service: process.env.SERVICE,
                                            auth: {
                                                user: process.env.EMAIL,
                                                pass: process.env.EMAIL_PW
                                            }
                                        });

                                        jwt.sign({ user: user_id }, process.env.JWT_KEY, { expiresIn: '1d' }, (err, recoverAccountEmailToken) => {
                                            const url = `${process.env.DOMAIN}/user/recoverBlockedUser/${recoverAccountEmailToken}`;
                                            let mailOptions = {
                                                to: process.env.EMAIL_TO,
                                                subject: 'Recuperar conta',
                                                html: 'Foi excedido o número máximo de tentativas de login na sua conta.\n\n' +
                                                    'Mude a password no seguinte link para voltar a ter acesso a sua conta.\n\n' +
                                                    `<a href="${url}">${url}</a>` +
                                                    'Após 1 dia este link deixará de funcionar'
                                            }
                                            transporter.sendMail(mailOptions, (error, info) => {
                                                if (error) {
                                                    console.log(error)
                                                } else {
                                                    console.log(info)
                                                }
                                            })
                                        })

                                        res.status(200).json({
                                            status: 0,
                                            message: message.maxTry
                                        })
                                    } else {
                                        let attempts = login_attempts - 1
                                        let update_attempts = 'UPDATE users SET login_attempts = ? WHERE email = ?';
                                        db.query(update_attempts, [attempts, email], (err, results) => {
                                            if (err) {
                                                console.log(err);
                                            } else {
                                                let check_updated_attempts = 'SELECT login_attempts FROM users WHERE email = ?';
                                                db.query(check_updated_attempts, email, (err, results) => {
                                                    if (err) {
                                                        console.log(err)
                                                    } else {
                                                        let remaining_attempts = results[0].login_attempts;
                                                        let invalidPass = null;
                                                        if (language === 'pt') {
                                                            invalidPass = 'Password incorreta. Tem mais ' + remaining_attempts + ' tentativa(s)'
                                                        } else {
                                                            invalidPass = 'Incorrect password. You have more ' + remaining_attempts + ' attempt(s)'
                                                        }
                                                        res.status(200).json({
                                                            status: 0,
                                                            message: invalidPass
                                                        })
                                                    }
                                                })
                                            }
                                        })
                                    }
                                }
                            })
                            let log_content = {
                                date: moment().format('DD-MM-YYYY, H:mm:ss'),
                                ip: ip.address(),
                                browser: req.headers['user-agent'],
                                so: process.platform,
                                ref_id_users: results[0].id_users,
                            }
                            let log_query = 'INSERT INTO login_logs SET ?';
                            db.query(log_query, log_content, (err, results) => {
                                if (err) {
                                    console.log(err);
                                }
                            });
                        }
                    })
                } else {
                    res.status(200).json({
                        status: 0,
                        message: message.invalid_email
                    })
                }
            }
        })
    }
}

exports.recover_block_account = (req, res, next) => {
    const decoded = jwt.verify(req.params.token, process.env.JWT_KEY, (err, decoded) => {
        if (err) {
            res.render('alert', {
                msg: 'Token inválido'
            });
        } else {
            res.render('recover_pw', {
                action: `/user/recoverBlockedUser/${req.params.token}`
            })
        }
    });
}

exports.recover_password = (req, res, next) => {
    const decoded = jwt.verify(req.params.token, process.env.JWT_KEY, (err, decoded) => {
        if (err) {
            res.status(400).json({
                message: "Token inválido"
            })
        } else {
            if (!req.body.password || !req.body.confirm) {
                req.flash('error', 'Insira uma password');
                return res.redirect('back')
            } else {
                if (req.body.password === req.body.confirm) {
                    if (req.body.password.length < 6) {
                        req.flash('error', 'Password deve ter 6 ou mais carateres')
                        return res.redirect('back');
                    } else {
                        bcrypt.hash(req.body.password, 10, (err, hash) => {
                            if (err) {
                                res.status(500).json({
                                    error: err
                                })
                            } else {
                                let sql = 'UPDATE users SET password = ?, login_attempts = (SELECT global_login_attempts FROM configs), can_login = ? WHERE id_users = ?';
                                db.query(sql, [hash, '1', decoded.user], (err, results) => {
                                    if (err) {
                                        req.flash('error', err);
                                        return res.redirect('back');
                                    } else {
                                        res.render('success', {
                                            msg: 'Password alterada com sucesso!'
                                        })
                                    }
                                })
                            }
                        })
                    }
                } else {
                    req.flash('error', 'Passwords não são iguais');
                    return res.redirect('back');
                }
            }
        }
    })
}

exports.user_mail_confirmation = (req, res, next) => {
    const decoded = jwt.verify(req.params.token, process.env.JWT_KEY);
    let checkConfirmed = 'SELECT confirmed, active FROM users WHERE id_users = ?';
    let sql = 'UPDATE users SET confirmed = ?, active = ? WHERE id_users = ?';
    db.query(checkConfirmed, decoded.user, (err, results) => {
        if (err) {
            res.status(400).json({
                error: err
            })
        } else {
            if (results[0].confirmed === 1) {
                res.render('info', {
                    msg: 'Conta já está confirmada'
                })
            } else {
                db.query(sql, ['1', '1', decoded.user], (err, results) => {
                    if (err) {
                        res.status(400).json({
                            error: err
                        })
                    } else {
                        res.render('success', {
                            msg: 'Conta confirmada com sucesso!'
                        })
                    }
                })
            }
        }
    })
}

exports.user_delete_self = (req, res, next) => {
    const language = req.headers.language;
    let message = null;
    if (language === 'pt') {
        message = {
            error: "Erro. Tente novamente",
            success: "Conta eliminada com sucesso",
            wrongpw: "Password errada"
        }
    } else {
        message = {
            error: "Error. Try again",
            success: "Account deleted successfully",
            wrongpw: "Wrong password"
        }
    }
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    let checkIfDeleted = 'SELECT id_users, password FROM users WHERE email = ?';
    db.query(checkIfDeleted, decoded.email, (err, results) => {
        console.log(results);
        if (results.length === 0) {
            res.status(200).json({
                status: 0,
                message: message.error
            })
        } else {
            bcrypt.compare(req.body.password, results[0].password, (err, doesMatch) => {
                if (doesMatch) {
                    let sql = 'DELETE FROM users WHERE email = ?';
                    db.query(sql, decoded.email, (err, results) => {
                        if (err) {
                            res.status(404).json({
                                message: err
                            })
                        } else {
                            res.status(200).json({
                                status: 1,
                                message: message.success
                            })

                            let transporter = nodemailer.createTransport({
                                service: process.env.SERVICE,
                                auth: {
                                    user: process.env.EMAIL,
                                    pass: process.env.EMAIL_PW
                                }
                            });

                            let mailOptions = {
                                to: decoded.email,
                                subject: 'Conta eliminada',
                                html: 'Este email serve para informar que a sua conta foi eliminada com sucesso e todos os dados associados à mesma foram eliminados.'
                            }
                            transporter.sendMail(mailOptions, (error, info) => {
                                if (error) {
                                    console.log(error)
                                } else {
                                    console.log(info)
                                }
                            })
                        }
                    })
                } else {
                    res.status(200).json({
                        status: 0,
                        message: message.wrongpw
                    })
                }
            })

        }
    })
}

exports.user_profile = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    let sql = 'SELECT * FROM users WHERE email = ?';
    db.query(sql, decoded.email, (err, results) => {
        if (err) {
            res.status(400).json({
                message: err
            })
        } else {
            res.status(200).json({
                user: {
                    first_name: results[0].first_name,
                    last_name: results[0].last_name,
                }
            })
        }
    })
}

exports.name_update = (req, res, next) => {
    const language = req.headers.language;
    let message = null;
    if (language === 'pt') {
        message = {
            error: "Erro. Tente novamente",
            success: "Perfil atualizado com sucesso!"
        }
    } else {
        message = {
            error: "Error. Try again",
            success: "Profile updated successfully"
        }
    }
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    if (req.body.firstname === "") {
        req.body.firstname = null
    }
    if (req.body.lastname === "") {
        req.body.lastname = null
    }
    let profile = {
        first_name: req.body.firstname,
        last_name: req.body.lastname,
        id_user: decoded.userId,
    };
    let sql = 'UPDATE users SET first_name = ?, last_name = ? WHERE id_users = ?';
    db.query(sql, [profile.first_name, profile.last_name, profile.id_user], (err, results) => {
        if (err) {
            res.status(200).json({
                status: 0,
                message: message.error
            })
        } else {
            res.status(200).json({
                status: 1,
                message: message.success
            })
        }
    })
}

exports.user_pw_update = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    const language = req.headers.language;
    let message = null;
    if (language === 'pt') {
        message = {
            insert: "Insira uma password",
            error: "Password antiga errada",
            success: "Password alterada com sucesso"
        }
    } else {
        message = {
            insert: "Enter a password",
            error: "Old password wrong",
            success: "Password changed successfully"
        }
    }

    if (!req.body.newpassword) {
        res.status(200).json({
            status: 0,
            message: message.insert
        })
    } else {
        let checkold = 'SELECT password FROM users WHERE email = ?';
        db.query(checkold, decoded.email, (err, results) => {
            if (err) {
                console.log(err)
            } else {
                bcrypt.compare(req.body.oldpassword, results[0].password, (err, doesMatch) => {
                    if (doesMatch) {
                        bcrypt.hash(req.body.newpassword, 10, (err, hash) => {
                            if (err) {
                                res.status(500).json({
                                    error: err
                                })
                            } else {
                                let sql = 'UPDATE users SET password = ? WHERE email = ?';
                                db.query(sql, [hash, decoded.email], (err, results) => {
                                    if (err) {
                                        res.status(200).json({
                                            status: 0,
                                            message: err
                                        })
                                    } else {
                                        res.status(200).json({
                                            status: 1,
                                            message: message.success
                                        })
                                    }
                                })
                            }
                        })
                    } else {
                        res.status(200).json({
                            status: 0,
                            message: message.error
                        })
                    }
                })
            }
        })
    }
};

exports.forgot_password = (req, res, next) => {
    const language = req.params.language;
    let message = null;
    if (language === 'pt') {
        message = {
            no_email: "Não existe uma conta com esse email",
            success: "Email enviado. Siga as instruções para completar o processo"
        }
    } else {
        message = {
            no_email: "There is no account with this email",
            success: "Email sent. Follow the instructions to complete the process"
        }
    }

    const email = req.body.email;
    let checkIfEmailExists = 'SELECT email FROM users WHERE email = ?';
    db.query(checkIfEmailExists, email, (err, results) => {
        if (results.length === 0) {
            res.status(200).json({
                status: 0,
                message: message.no_email
            })
        } else {
            let transporter = nodemailer.createTransport({
                service: process.env.SERVICE,
                auth: {
                    user: process.env.EMAIL,
                    pass: process.env.EMAIL_PW
                }
            });
            jwt.sign({ userEmail: email }, process.env.JWT_KEY, { expiresIn: '1d' }, (err, pwResetEmailToken) => {
                const url = `${process.env.DOMAIN}/user/forgotPassword/${pwResetEmailToken}`;
                let mailOptions = {
                    to: process.env.EMAIL_TO,
                    subject: 'Recuperar password',
                    html: 'Está a receber este email porque você (ou outra pessoa) pediu para recuperar a password da sua conta.\n\n' +
                        'Por favor clique no link abaixo para completar o processo:\n\n' +
                        `<a href="${url}">${url}</a>` +
                        'Após 1 dia este link deixará de funcionar' +
                        'Se não foi você que pediu para recuperar a password ignore este email e a sua password continuará a mesma.'
                }
                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        console.log(error)
                    } else {
                        console.log(info)
                    }
                })
            })
            res.status(200).json({
                status: 1,
                message: message.success
            })
        }
    })
}

exports.render_reset_page = (req, res, next) => {
    const decoded = jwt.verify(req.params.token, process.env.JWT_KEY, (err, decoded) => {
        if (err) {
            res.render('alert', {
                msg: 'Token inválido'
            });
        } else {
            res.render('recover_pw', {
                action: `/user/forgotPassword/${req.params.token}`
            })
        }
    });
}

exports.reset_password = (req, res, next) => {
    const decoded = jwt.verify(req.params.token, process.env.JWT_KEY, (err, decoded) => {
        if (err) {
            res.status(400).json({
                message: "Token inválido"
            })
        } else {
            if (!req.body.password || !req.body.confirm) {
                req.flash('error', 'Insira uma password');
                return res.redirect('back')
            } else {
                if (req.body.password === req.body.confirm) {
                    if (req.body.password.length < 6) {
                        req.flash('error', 'Password deve ter 6 ou mais carateres')
                        return res.redirect('back');
                    } else {
                        bcrypt.hash(req.body.password, 10, (err, hash) => {
                            if (err) {
                                res.status(500).json({
                                    error: err
                                })
                            } else {
                                let sql = 'UPDATE users SET password = ?, login_attempts = (SELECT global_login_attempts FROM configs) WHERE email = ?';
                                db.query(sql, [hash, decoded.userEmail], (err, results) => {
                                    if (err) {
                                        req.flash('error', err);
                                        return res.redirect('back');
                                    } else {
                                        res.render('success', {
                                            msg: 'Password alterada com sucesso!'
                                        })
                                    }
                                })
                            }
                        })
                    }
                } else {
                    req.flash('error', 'Passwords não são iguais');
                    return res.redirect('back');
                }
            }
        }
    })
}

exports.users_number = (req, res, next) => {
    const get_number = 'SELECT id_users FROM users';
    db.query(get_number, (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results.length
            })
        }
    })
}