const db = require('../model')

db.Place.create([{
    name: '444',
    city: 'Malibu',
    state: 'California',
    cuisines: 'Birria Tacos',
    pic: '/images/birria.jpeg',
    founded: 2002
}, {
    name:'Cravez',
    city:'Anaheim',
    state:'California',
    cuisines:'Mexican Snacks',
    pic:'/images/snacks.jpeg',
    founded: 2003
}])
.then(() => {
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})
