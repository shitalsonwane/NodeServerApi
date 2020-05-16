const User=require('../models/user.model.js')
const validate=require('../models/valiate')
const userService=require('../service/user.service')
const bcrypt=require('bcrypt')
//REGISTER NEW USER
exports.create = (req,res) => {
    const { error } = validate.validate(req.body)
    if (error) {
        return res.status(422).send({
            message:'ENTER PROPER DATA'
        })
    }        
    let password = bcrypt.hashSync(req.body.password,10)
    let user=new User({
        name: req.body.name,
        email: req.body.email,
        password: password
    })
    userService.register(user,(data,err)=>{
        if(data){
            res.status(200).json(data)
        }else{
            res.status(500).json(err)
        }
    })
}
//FIND ALL REGISTERED USER
exports.findAll=(req,res) => {
    userService.findAll((result,err)=>{
        if(result){
            res.status(200).json(result)
        }else{
            res.status(500).json(err)
        }
    })  
}
//LOGIN THE REGISTERED USER
exports.login=(req,res) =>{
    userService.login(req.body.email,req.body.password,(result,err)=>{
        if(result){
            res.status(200).json(result)
        }else{
            res.status(500).json(err)
        }
    })
}

  
