const chai=require('chai')
const chaiHttp=require('chai-http')
const server=require('../server')
let should = chai.should()

chai.use(chaiHttp)

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
