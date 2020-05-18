const chai=require('chai')
const chaiHttp=require('chai-http')
const server=require('../server')
let should = chai.should()

chai.use(chaiHttp)
//TEST CASES FOR POST OR REGISTER USER
describe('test case for post users', () => {
    //TEST CASE FOR WRONG USER NAME
    it('it should return exception when user name is not proper', () => {
    let userInfo={name:'di',email:'diksha@gmail.com',password:'diksha123'}
    chai.request(server)
        .post("/user/register")
        .send(userInfo)
        .end((err,res) => {
            res.should.have.status(422)
            chai.expect(res.body.message).to.equal('ENTER PROPER DATA')
        })
    })
    //TEST CASE FOR WRONG USER EMAIL
    it('it should return exception when user email is not proper', () => {
        let userInfo={name:'ravi',email:'ravi@gmail',password:'ravi123'}
        chai.request(server)
        .post("/user/register")
        .send(userInfo)
        .end((err,res) => {
            res.should.have.status(422)
            chai.expect(res.body.message).to.equal('ENTER PROPER DATA')
        })
    })
    //TEST CASE FOR WRONG USER PASSWORD
    it('it should return exception when user password is not proper', () => {
        let userInfo={name:'rashi',email:'rashi@gmail.com',password:'rash'}
        chai.request(server)
        .post("/user/register")
        .send(userInfo)
        .end((err,res) => {
            res.should.have.status(422)
            chai.expect(res.body.message).to.equal('ENTER PROPER DATA')
        })
    })
    //TEST CASE FOR PROPER USER DATA
    it('it should return object when the user data is proper', () => {
        let userInfo={name: 'deepa',email: 'deepa@gmail.com',password: 'deepa123'}
        chai.request(server)   
        .post("/user/register")
        .send(userInfo)
        .end((err,res) => {
            res.should.have.status(200)
            res.body.should.be.a('object')
        })
    })
})
//TEST CASE FOR LOGIN USER
describe('test cases for login users', () => {
    //TEST CASE FOR WRONG USER EMAIL
    it('it should return exception when user email for login is invalid', () => {
        let userInfo={email:'mail',password:'deepa123'}
        chai.request(server)
        .post("/user/login")
        .send(userInfo)
        .end((err,res) => {
            res.should.have.status(200)
            chai.expect(res.body.message).to.equal("UNDFINED USER")
        })
    })
    //TEST CASE FOR WRONG PASSWORD
    it('it should return exception when user password for login is invalid', () => {
        let userInfo={email:'deepa@gmail.com',password:'deepa'}
        chai.request(server)
        .post("/user/login")
        .send(userInfo)
        .end((err,res) => {
            res.should.have.status(200)
            chai.expect(res.body.message).to.equal("INCURRECT PASSWORD")
        })
    })
    //TEST CASE FOR LOGIN WHEN DATA IS VALID
    it('it should return login when user data for login is valid', () => {
        let userInfo={email:'rani@gmail.com',password:'rani123'}
        chai.request(server)
        .post("/user/login")
        .send(userInfo)
        .end((err,res) => {
            res.should.have.status(200)
            chai.expect(res.body.message).to.equal("LOGIN SUCCESSFULL")
        })
    })
})
//TEST CASE FOR GET ALL USER
describe('test cases for get all users', () => {
    //TEST CASE FOR GET ALL USERS
    it('it should return array when request to server for get all users', () => {
        chai.request(server)
        .get("/user/allusers")
        .end((err,res) => {
            res.should.have.status(200)
            res.body.should.be.a('array')
        })
    })
})

