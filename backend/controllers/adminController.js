const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.createUser = async(req, res)=>{
    const {username, password} = req.body;

    const user = await User.findOne({email})
    if(user) return res.status(400).json('email already exist')
    const hash = await bcrypt.hash(password, 12);
    const newUser = new User({
        ...req.body
    })
    password = hash;
    const saved = await newUser.save();
    if(saved) return res.status(201).json('registred successfully')
}