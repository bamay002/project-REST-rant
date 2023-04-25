require('./.gitignore/node_modules/dotenv/lib/main').config()

const express = require('express')
const app = express()

app.use('/places', require('./controllers/places'))     //imports router from places.js
app.get('/', (req,res) => {
    res.send('Hello World')
})

// ROUTE FOR PAGE THAT ISNT SET UP YET 404  ; important to have last otherwise it'll override other pages
app.get('*', (req,res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

app.listen(process.env.PORT)