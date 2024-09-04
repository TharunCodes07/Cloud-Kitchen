const express = require('express')
const router = express.Router()

router.get('/' , (req,res) => {
    res.render('../views/menu/starters', { user: req.session.user })
})

router.get('/lunch' , (req,res) => {
    res.render('../views/menu/lunch', { user: req.session.user })
})

router.get('/veg' , (req,res) => {
    res.render('../views/menu/veg', { user: req.session.user })
})

router.get('/main-courses' , (req,res) => {
    res.render('../views/menu/main-courses', { user: req.session.user })
})

router.get('/soups' , (req,res) => {
    res.render('../views/menu/soups', { user: req.session.user })
})

router.get('/dinner' , (req,res) => {
    res.render('../views/menu/dinner', { user: req.session.user })
})


module.exports = router