const express = require('express')
const router = express.Router()

router.get('/' , (req,res) => {
    res.render('../views/index', { user: req.session.user })
})

module.exports = router