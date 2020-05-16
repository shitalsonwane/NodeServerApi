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
//SAVE USER DATA
User.register=function(user,callback){
    user.save()
    .then(data => {
        callback(data)
    }).catch(err =>{
        callback(err)
    })
}
//FIND ALL USER
User.findAll=function(callback){
    User.find()
    .then(users =>{
        callback(users)
    }).catch(err =>{
        callback(err)
    })
}
//USER LOGIN WITH AUTHENTICATION
User.login=function(email,password,callback){
    User.findOne({email:email},(err,user)=>{
        if(user==undefined){
            let err={message:"UNDFINED USER"}
            callback(err)
        }else{
            bcrypt.compare(password,user.password,(err,isMatch)=>{
            if(isMatch){
                var tocken=jwt.sign(
                    {email:user.email,
                    password:user.name},'secrete', {expiresIn:"2h"})
                    let result={meaasge:"LOGIN SUCCESSFULL",tocken:tocken}
                    callback(result)
            }else{
                let err={message:"INCURRECT PASSWORD"}
                callback(err)
            }
        })
        }
    }).catch(err=>{
        callback(err)
    })
}
module.exports=User

