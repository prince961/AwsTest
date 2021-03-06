const express = require('express');
const router = express.Router();
const User = require('../models/user');

//get a list of ninjas from database

router.get('/ninjas',function(req,res){
    res.send({type: 'GET'});
});
    

router.get('/ninjas/:id',function(req,res){
User.findOne({emailId: req.params.id}).then(function(user){
    res.send(user);
});
});


router.get('/checkExistingUser/:id',function(req,res){
    User.findOne({emailId: req.params.id}).then(function(user){
    
        if(user== null){
            res.send({userAlreadyInDB: false});
        }else{
            res.send({userAlreadyInDB: true});
        }
        console.log(user);
    });
    });

router.post('/ninjas',function(req,res,next){
    User.create(req.body).then(function(user){
        res.send(user);
    }).catch(next);  
});

router.put('/ninjas/:id',function(req,res,next){
    User.findOneAndUpdate({emailId: req.params.id}, req.body).then(function(){
        User.findOne({emailId: req.params.id}).then(function(user){
            res.send(user);
            
        });
    }).catch(next);
});


router.delete('/ninjas/:id', function(req, res, next){
    User.findByIdAndRemove({_id: req.params.id}).then(function(user){
        res.send(user);
    }).catch(next);
});


module.exports = router;
    
