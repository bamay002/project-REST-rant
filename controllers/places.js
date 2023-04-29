const router = require('express').Router()

/* router.get('/', (res,req) => {
    res.setEncoding('GET /places')
})  */

//GET /places
router.get('/' , (req,res) => {
    res.render('places/index')
})
module.exports = router