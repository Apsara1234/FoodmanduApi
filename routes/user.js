const express = require('express');
const User = require('../model/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../routes/auth');
const router = express.Router();


router.post('/signup',(req, res, next)=>{

    User.findOne({username:req.body.username})
    .then((user) =>{
    
        if (user != null){
            let err = new Error('Username already exits');
            err.status = 401;
            return next(err);
    
        }
                bcrypt.hash(req.body.password, 10, function(err,hash){
            if(err){
                throw new Error('Could not encrypt password ');
            }
            User.create({ 
                image:req.body.image,
                firstName:req.body.firstname,
                lastName:req.body.lastname,
                phonenumber: req.body.PhoneNumber, 
                username: req.body.username,
                password: hash
            }).then((user) =>{
                let token = jwt.sign({userId: user._id}, process.env.SECRET);
                res.json({status: "Signup Success!", token: token});
            })
        }).catch(next);
    })
    });


    router.get('/me', auth.verifyUser, (req, res, next)=>{
        res.json({firstname: req.user.firstname, lastname: req.user.lastname,PhoneNumber: req.user.phonenumber, UserName: req.user.username })
        })
    
    module.exports = router;