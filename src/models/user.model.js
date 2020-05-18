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
            let result={message:"UNDFINED USER"}
            callback(result)
        }else{
            bcrypt.compare(password,user.password,(err,isMatch)=>{
            if(isMatch){
                var tocken=jwt.sign(
                    {email:user.email,
                    name:user.name},'secrete', {expiresIn:"2h"})
                    let result={message:"LOGIN SUCCESSFULL",tocken:tocken}
                    callback(result)
            }else{
                let result={message:"INCURRECT PASSWORD"}
                callback(result)
            }
        })
        }
    }).catch(err=>{
        callback(err)
    })
}
module.exports=User

