module.exports = (app) => {
    const controller=require('../controllers/user.controller.js')
//REGISTER NEW USER
app.post('/user/register',function(req, res){
    controller.create(req,res)
})
//FIND ALL REGISTERED USER
app.get('/user/allusers',function(req, res){
    controller.findAll(req,res)
})
//LOGIN THE REGISTERED USER
app.post('/user/login',function(req,res){
    controller.login(req,res)
})
}