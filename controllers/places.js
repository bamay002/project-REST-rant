const router = require('express').Router()
const db = require('../model')
//const places = require('../model/places.js')


/*

 // router.get('/', (res,req) => {
 //   res.setEncoding('GET /places')
//})  

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
    res.redirect('/places')
  })
 
  
//GET /NEW
router.get('/new', (req,res) => {
    res.render('places/new')
})

//GET /SHOW
router.get('/:id', (req,res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]){
        res.render('error404')
    }
    else {
        res.render('places/show' , { place: places[id], id })
    }
})

//GET /places
router.get('/' , (req,res) => {       
    res.render('places/index' , {places})
}) 

//EDIT

router.get('/:id/edit', (req,res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        res.render('places/edit' , { place: places[id] , id})
    }
})

router.put('/:id', (req,res) => {
    let id = Number(req.params.id)

    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
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

        // Save the new data into places[id]
        places[id] = req.body
        res.redirect(`/places/${id}`)
    }
})


//DELETE
router.delete('/:id' , (req,res) => {
    let id= Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]){
        res.render('error404')
    }
    else{
        places.splice(id , 1)
        res.redirect('/places')
    }
})

*/

router.get('/', (req, res) => {
  db.Place.find()
  .then((places) => {
    res.render('places/index', { places })
  })
  .catch(err => {
    console.log(err)
    res.render('error404')
  })
})

router.post('/', (req, res) => {
    db.Place.create(req.body)
    .then(() => {
        res.redirect('/places')
    })
    .catch(err => {
        if (err && err.name == 'ValidationError') {
            let message = 'Validation Error:'
            for (var field in err.errors) {
                message += ` ${field} was ${err.errors[field].value}. `
                message += `${err.errors[field].message}`
            }
            console.log('Validation error message', message)
            res.render('places/new', { message })
        }
        res.render('error404')
    })
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .populate('comments')
  .then(place => {
    console.log(place.comments)
    res.render('places/show', { place })
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
})

router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
})

router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
})

router.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub')
})

router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

router.post('/:id/comment', (req, res) => {
    console.log(req.body)
    db.Place.findById(req.params.id)
    .then(place => {
        db.Comment.create(req.body)
        .then(comment => {
            place.comments.push(comment.id)
            place.save()
            .then(() => {
                res.redirect(`/places/${req.params.id}`)
            })
        })
        .catch(err => {
            res.render('error404')
        })
    })
    .catch(err => {
        res.render('error404')
    })
})


router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router


