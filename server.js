const express =require('express')
const bodyparser=require('body-parser')
const dbConfig=require('./userRagistration/config/database.config')
const mongoose=require('mongoose')

const app=express()
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.get('/',(req,res) => {
    res.json({"message":"Welcome to user Ragistration Form"})
})
require('./userRagistration/routes/user.routes')(app)
app.listen(3000,()=>{
    console.log("Server is listening on port 3000");
})
mongoose.Promise=global.Promise
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit()
})
