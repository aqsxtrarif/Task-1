const  express  = require("express");
const verifyUser = require("../middlewares/verifyUser");
const { createProduct, getProducts, deleteProduct } = require("../controllers/productController");

const router = express.Router();



router.post('/', verifyUser , createProduct);

router.get('/:userId', verifyUser , getProducts );


router.delete('/:product_id/delete', verifyUser , deleteProduct );




module.exports = router;