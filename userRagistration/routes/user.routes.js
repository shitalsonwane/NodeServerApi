module.exports = (app) => {
    const controller=require('../controllers/user.controller.js')

app.post('/user/ragister',function(req, res){
    controller.create(req,res)
})
app.get('/user/ragister',function(req, res){
    controller.findAll(req,res)
})
app.post('/user/login',function(req,res){
    controller.login(req,res)
})
}