const Joi=require('joi')
//USER INPUT VALIDATION
function validateUser(user) {
    const schema = {
        name: Joi.string().alphanum().min(3).max(50).required(),
        email: Joi.string().min(5).max(255).required().email().regex(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/),
        password: Joi.string().min(5).max(255).required().regex(/^[a-zA-Z0-9]{3,30}$/)
    }
    return Joi.validate(user, schema)
}
exports.validate=validateUser