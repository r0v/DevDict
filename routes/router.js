var express = require('express')
var router = express.Router()

// Document root
router.get('/', function (req, res) {
  res.send('Test')
})

module.exports = router