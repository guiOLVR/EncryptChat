const User = require('../../models/v1').User;
const bcrypt = require('bcrypt');

exports.create = async (req, res, next) => {//in the future will need email validation
    let hasPass = null;//hash will be here

    await bcrypt.hash(req.body.password, 10).then((hash) => {//Convert password to a hash before save into database
        hasPass = hash;
    });

    await User.create({//save user informations into database
        id: 0,
        name: req.body.name,
        hash: hasPass,
        email: req.body.email,
        phone: req.body.phone,//Need phone mask here
        nickname: req.body.nickname,
        cityId: req.body.cityId
    })
    .then(result => {
        res.send({Success: result});
    })
    .catch(error => {
        res.status(400).send(error);
    })
}

exports.read = async (req, res, next) => {
    await User.findOne({
        attributes: ['id', 'name', 'nickname', 'email', 'phone', 'cityId'],
        where: {id : req.params.id}
    })
    .then(result => {
        res.send(result);
    })
    .catch(error => {
        res.status(400).send(error);
    })
};

exports.update = async (req, res, next) => {
    let dynamicObj = {};
    let message = '';

    if(req.body.name){
        dynamicObj.name = req.body.name;
        message = 'Your name has been updated!'
    }
    if(req.body.nickname){
        dynamicObj.nickname = req.body.nickname;
        message = 'Your nickname has been updated!'
    }
    if(req.body.phone){
        dynamicObj.phone = req.body.phone;
        message = 'Your phone has been updated!'
    }
    if(req.body.email){
        dynamicObj.email = req.body.email;
        message = 'Your email has been updated!'
    }
    if(req.body.cityId){
        dynamicObj.cityId = req.body.cityId
        message = 'Your city has been updated!'
    }

    await User.update(dynamicObj, {
        where: {id: req.params.id}
    })
    .then(result => {
        res.send({Success: message});
    })
    .catch(error => {
        res.status(400).send(error);
    })
}

exports.delete = async (req, res, next) => {
    User.destroy({
        where: {id: req.params.id}
    })
    .then(result => {
        res.send({Success: 'User has been deleted!'});
    })
    .catch(error => {
        res.status(400).send(error);
    })
}