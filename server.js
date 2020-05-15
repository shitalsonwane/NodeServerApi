const express =require('express')
const bodyparser=require('body-parser')
const mongoose=require('mongoose')
require('dotenv').config()
const dbConfig=process.env.MONGO_DB_URL
const port=process.env.PORT

const app=express()

app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())

app.get('/',(req,res) => {
    res.json({"message":"Welcome to user Ragistration Form"})
})
require('./userRagistration/routes/user.routes')(app)
app.listen(port,()=>{
    console.log("Server is listening on port "+port)
})

mongoose.Promise=global.Promise
mongoose.connect(dbConfig, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit()
})
