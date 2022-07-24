const Sequelize = require('sequelize')
const db = require('../config/database')

const Gig = db.define('gig', {
   title: {
      type: Sequelize.STRING
   },
   techs: {
      type: Sequelize.STRING
   },
   description: {
      type: Sequelize.STRING
   },
   budget: {
      type: Sequelize.STRING
   },
   email: {
      type: Sequelize.STRING
   }
})

module.export = Gig