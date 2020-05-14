const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema=mongoose.Schema({
    name: {
        type:String
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    }
},{
    timestamps:true
})
var User= mongoose.model('User', userSchema)
User.register=function(user,req,res,callback){
    user.save()
    .then(data => {
        res.send(data)
    }).catch(err =>{
        res.status(500).send({
            message:'Some Error is occured while creating user.'
        })
        callback(err)
    })
}
User.findAll=function(callback){
    User.find()
    .then(users =>{
        callback(users)
    }).catch(err =>{
        callback("some eror occurred while retriving user")
    })
}
User.login=function(email,password,callback){
    User.findOne({email:email},(err,user)=>{
        if(user==undefined){
            callback({"message":"UNDFINED USER"})
        }else{
            bcrypt.compare(password,user.password,(err,isMatch)=>{
            if(isMatch){
                var tocken=jwt.sign(
                    {email:user.email,
                    password:user.name},'secrete', {expiresIn:"2h"})
                    callback({meaasge:"LOGIN SUCCESSFULL",tocken:tocken})
            }else{
                callback({"message":"INCURRECT PASSWORD"})
            }
        })
        }
    }).catch(err=>{
            callback({"message":"SERVER ERROR"})
    })
}
module.exports=User

