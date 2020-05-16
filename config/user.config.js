const mongoose=require('mongoose')
require('dotenv').config()
const dbConfig=process.env.MONGO_DB_URL

//DATABASE CONNECTIVITY
exports.databaseConnection=()=>{
mongoose.Promise=global.Promise
mongoose.connect(dbConfig, {
    useNewUrlParser: true,
    useCreateIndex: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit()
})
}
