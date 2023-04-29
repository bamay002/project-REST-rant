const router = require('express').Router()

/* router.get('/', (res,req) => {
    res.setEncoding('GET /places')
})  */

//GET /places
router.get('/' , (req,res) => {
    let places = [{
        name: '444',
        city: 'Malibu',
        state: 'California',
        cuisines: 'Birria Tacos',
        pic: 'https://iamafoodblog.b-cdn.net/wp-content/uploads/2020/05/homemade-birria-tacos-recipe-3267.jpg'
    }, {
        name:'Beast',
        city:'Manhatten',
        state:'New York',
        cuisines:'Crepes',
        pic:'https://hips.hearstapps.com/hmg-prod/images/delish-basic-crepes-horizontal-1545245797.jpg?crop=1xw:0.8435812837432514xh;center,top&resize=1200:*'
    }]
    res.render('places/index' , {places})
})
module.exports = router