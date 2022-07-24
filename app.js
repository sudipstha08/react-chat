const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()
const db = require('./config/database')

 // Test DB
 db.authenticate()
 .then(() => console.log('Database connected ----------------->'))
 .catch(error => console.log('Error: ', error))

app.get("/", (req, res) => res.send('INDEX'))

// GIG routes
app.use('/gigs', require('./routes/gigs'))

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server started on port ${PORT}`))