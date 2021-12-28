const router = require('express').Router();

const { create, GetAllData, GetById, HomePage, UpdateById, DeleteById } = require("../controller/userController")

// Home
router.get('/home', HomePage);
// signup
router.post('/signup', create);
// getall
router.get('/getAll', GetAllData);
// getonebyone
router.get('/getbyid/:employee_id', GetById);
// updatebyid
router.put('/update/:employee_id', UpdateById);
// deletebyid
router.delete('/delete/:employee_id', DeleteById);


// Export router
module.exports = router;