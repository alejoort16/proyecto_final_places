let express = require('express');
let PlaceController = require('../controllers/PlaceController');
let UserController = require('../controllers/UserController');

let router = express.Router();

//listar todos los lugares
router.get('/places', PlaceController.show);
//listar un lugar por id
router.get('/places/:id', PlaceController.find);
//crear un lugar
router.post('/places', PlaceController.store);
//actualizar un lugar
router.put('/places/:id', PlaceController.update);
//eliminar un lugar
router.delete('/places/:id', PlaceController.destroy);

//listar todos los usuarios
router.get('/users', UserController.show);
//listar un lugar por id
router.get('/users/:id', UserController.find);
//crear un lugar
router.post('/users', UserController.store);

module.exports = router;