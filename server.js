const express =require('express')
const bodyparser=require('body-parser')
require('./config/user.config').databaseConnection()
const port=process.env.PORT

const app=express()

app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
//CONNECT TO THE SERVER
app.get('/',(req,res) => {
    res.json({"message":"Welcome to user Ragistration Form"})
})
require('./src/routes/user.routes')(app)
app.listen(port,()=>{
    console.log("Server is listening on port "+port)
})
module.exports = app