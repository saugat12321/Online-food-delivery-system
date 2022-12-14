const User = require('../models/User');

const returnSignupPage = (req, res) => {
    res.render('signup')
}

const returnLoginPage = (req, res) => {
    res.render('login')
}

const createUser = async (req, res) => {
    console.log(req.body);
    try{
        const user = await User.create(req.body)
        res.json({user:user._id})
    }catch(err){
        console.log(err)
        res.json({errors:"Error occurred"})
    }
}

const loginUser = (req, res) => {
    //Code
}

const logoutUser = (req, res) => {
    
}

module.exports = {
    returnSignupPage,
    returnLoginPage,
    createUser,
    loginUser,
    logoutUser
}