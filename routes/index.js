const express = require("express");

const router = express.Router();

const userSignUpController = require("../controller/User/userSignUp");
const userSignInController = require("../controller/User/userSignin");
const userDetailsController = require("../controller/User/userDetails");
const authToken = require("../middleware/authToken");
const userLogout = require("../controller/User/userLogout");
const allUsers = require("../controller/User/AllUsers");
const updateUser = require("../controller/User/updateUser");
const UploadProductController = require("../controller/Product/UploadProduct");
const getProductController = require("../controller/Product/getProduct");
const updateProductController = require("../controller/Product/UpdateProduct");
const getCategoryProduct = require("../controller/Product/getCategoryProductOne");
const getCategoryWiseProduct = require("../controller/Product/getCategoryWiseProduct");
const getProductDetails = require("../controller/Product/getProductDetails");
const addToCartController = require("../controller/User/addToCartController");
const countAddToCartProduct = require("../controller/User/countAddToCartProduct");
const addToCartViewProduct = require("../controller/User/addToCartViewProduct");
const updateAddToCartProduct = require("../controller/User/updateAddToCartProduct");
const deleteAddToCartProduct = require("../controller/User/deleteAddToCartProduct");
const searchProduct = require("../controller/Product/searchProduct");
const filterProductController = require("../controller/Product/filterProduct");
const paymentController = require("../controller/Order/paymentController");
const webhooks = require("../controller/Order/webhook");
const orderController = require("../controller/Order/Order.Controller");

router.post("/signup", userSignUpController);
router.post("/signin", userSignInController);
router.get("/user-details", authToken, userDetailsController);
router.get("/userLogout", userLogout);

//admin panel!
router.get("/all-users", authToken, allUsers);
router.post("/update-user", authToken, updateUser);

//product
router.post("/upload-product", authToken, UploadProductController);
router.get("/get-product", getProductController);
router.post("/update-product", authToken, updateProductController);
router.get("/get-categoryProduct", getCategoryProduct);
router.post("/category-product", getCategoryWiseProduct);
router.post("/product-details", getProductDetails);
router.get("/search", searchProduct);
router.post("/filter-product", filterProductController);

//user add to cart
router.post("/addtocart", authToken, addToCartController);
router.get("/countAddToCartProduct", authToken, countAddToCartProduct);
router.get("/view-cart-product", authToken, addToCartViewProduct);
router.post("/update-cart-product", authToken, updateAddToCartProduct);
router.post("/delete-cart-product", authToken, deleteAddToCartProduct);

//payment and order
router.post("/checkout", authToken, paymentController);
router.post("/webhook", webhooks); // /api/webhooks
router.get("/order-list", authToken, orderController);

module.exports = router;
