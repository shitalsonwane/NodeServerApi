const User=require('../models/user.model.js')
const validate=require('../models/valiate')
const bcrypt=require('bcrypt')

exports.create = (req,res) => {
    const { error } = validate.validate(req.body)
    if (error) {
        return res.status(400).send({
            message: 'ENTER PROPER DATA'
        })
    }        
    password = bcrypt.hashSync(req.body.password,10)
    let user=new User({
        name: req.body.name,
        email: req.body.email,
        password: password
    })
    User.ragister(user,req,res,result=>{
        if(result){
            res.json({"message": result})
        }
    })
}
exports.findAll=(req,res) => {
    User.findAll(result=>{
        if(result){
            res.json({"message":result})
        }
    })  
}
exports.login=(req,res) =>{
    User.login(req.body.email,req.body.password,result=>{
        if(result){
            res.json(result)
        }
    })
}

  
