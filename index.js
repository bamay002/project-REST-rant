require('dotenv').config()

const express = require('express')
const app = express()

// ROUTE FOR VIEWS FOLDER / EXPRESS SETTINGS

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

app.use(express.urlencoded({extended: true}))

//CONTOLLERS 
app.use('/places', require('./controllers/places'))     //imports router from places.js
app.get('/', (req,res) => {
    res.render('home')      // res.send('words') - the words inside ' ' will appear
                        // res.render('file name') renders what is inside file and exports that onto page
})

// ROUTE FOR PAGE THAT ISNT SET UP YET 404  ; important to have last otherwise it'll override other pages
app.get('*', (req,res) => {
    res.render('error404')
})

app.listen(process.env.PORT)