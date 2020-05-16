module.exports = (app) => {
    const controller=require('../controllers/user.controller.js')

app.post('/user/register',function(req, res){
    controller.create(req,res)
})
app.get('/user/allusers',function(req, res){
    controller.findAll(req,res)
})
app.post('/user/login',function(req,res){
    controller.login(req,res)
})
}