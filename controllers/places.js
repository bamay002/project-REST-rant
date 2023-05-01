const router = require('express').Router()

/* router.get('/', (res,req) => {
    res.setEncoding('GET /places')
})  */

router.post('/', (req, res) => {
    console.log(req.body)               //is this correct?
    res.send('POST /places')            // gets me to new page but unsure if its right
  })
  

router.get('/new', (req,res) =>{
    res.render('places/new')
})


//GET /places
router.get('/' , (req,res) => {       
    let places = [{
        name: '444',
        city: 'Malibu',
        state: 'California',
        cuisines: 'Birria Tacos',
        pic: '/images/birria.jpeg'
    }, {
        name:'Cravez',
        city:'Anaheim',
        state:'California',
        cuisines:'Mexican Snacks',
        pic:'/images/snacks.jpeg'
    }]
    res.render('places/index' , {places})
})
module.exports = router

