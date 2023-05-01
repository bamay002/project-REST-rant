const router = require('express').Router()
const places = require('../model/places.js')

/* router.get('/', (res,req) => {
    res.setEncoding('GET /places')
})  */

router.post('/', (req, res) => {
    console.log(req.body)               //is this correct? gets me to new page but unsure if its right

    if (!req.body.pic){
        // if default image is not provided then
        req.body.pic = '/images/teddy.jpeg'
    }
    if (!req.body.city){
        req.body.city = 'Any Town'
    }

    if (!req.body.state){
        req.body.state = 'USA'
    }

    places.push(req.body)
  //  res.send('POST /places')            
    res.redirect('/places')
  })
 
  
//GET /NEW
router.get('/new', (req,res) => {
    res.render('places/new')
})

//GET /places
router.get('/' , (req,res) => {       
    res.render('places/index' , {places})
})

//GET /SHOW
router.get('/:id', (req,res) => {
    let id = Number(req.params.id)
    if(isNaN(id)){
        res.render('error404')
    }
    else if (!places[id]){
        res.render('error404')
    }
    else{
    res.render('places/show' , { place: places[id] })
    }
})

module.exports = router

