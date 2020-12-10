var express = require('express');
var router = express.Router();
const playerCtrl = require('../controllers/api/fifas')


router.get('/players', playerCtrl.index)
router.get('/players/:id', playerCtrl.show)
router.post('/players', playerCtrl.create)
router.put('/players/:id', playerCtrl.update)
router.delete('/players/:id', playerCtrl.delete)

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
