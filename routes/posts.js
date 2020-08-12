const router = require('express').Router()
const verify = require('./veridyToken')
// const User = require('../model/User')

router.get('/', verify,(req, res) => {
    res.send(req.user)
})






module.exports = router