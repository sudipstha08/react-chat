const { application } = require('express')
const express = require('express')
const router = express.Router()
const db = require('../config/database')
const Gig = require('../models/Gig')

router.get('/', (req, res) => Gig.findAll()
.then(gigs => {
   console.log(gigs)
   res.sendStatus(200)})
.catch(err => console.log(err)))

// HandleBars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', handlebars)

router.get('/add', (req, res) => {
   const data = {
      title: 'Wordpres',
      techs: "wordpress",
      budget:"$2000",
      description:"fsdfdsfdsddfsdf",
      email:"rest2@gmail.com"
   }

   let {title, techs, email, description, budget} = data

   // Insert into table
   Gig.create({
      title,
      techs,
      description,
      budget,
      email
   }).then(gig => res.redirect('/gigs'))
   .catch(err => console.log(err))
})

module.exports = router