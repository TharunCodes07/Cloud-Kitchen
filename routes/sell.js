const express = require('express')
const router = express.Router()

router.get('/' , (req,res) => {
    res.render('../views/sell/sell', { user: req.session.user })
})

module.exports = router