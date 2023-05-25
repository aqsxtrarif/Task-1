const  express  = require("express");
const  createProduct  = require("../controllers/userController");

const router = express.Router();

router.post('/',  createProduct );




module.exports = router;