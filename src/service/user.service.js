const User=require('../models/user.model')
//FOR REGISTER USER
exports.register=(data,callback)=>{
    User.register(data,(data,err)=>{
        if(data){
            callback(data)
        }else{
            callback(err)
        }
    })
}
//FOR LOGIN USER
exports.login=(email,password,callback)=>{
    User.login(email,password,(result,err)=>{
        if(result){
            callback(result)
        }else{
            callback(err)
        }
    })
}
//FOR FIND USERS
exports.findAll=(callback)=>{
    User.findAll((result,err)=>{
        if(result){
            callback(result)
        }else{
            callback(err)
        }
    })
}