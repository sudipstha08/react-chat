const express = require('express')
const {engine, create} = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')
const hbs = create({ /* config */ });

const app = express()
const db = require('./config/database')

 // Test DB
 db.authenticate()
 .then(() => console.log('Database connected ----------------->'))
 .catch(error => console.log('Error: ', error))

 // HandleBars
app.engine('handlebars', hbs.engine)
app.set('view engine', "handlebars")
app.set('views', './views');

app.get("/", (req, res) => res.render('index', { layout: 'landing' }))

// Set static folders
app.use(express.static(path.join(__dirname, 'public')))

// GIG routes
app.use('/gigs', require('./routes/gigs'))

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server started on port ${PORT}`))