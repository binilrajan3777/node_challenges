var express = require("express");
const usercontroller = require("../controller/UserController");
const middleware = require("../helper/middleware");
var router = express.Router();

router.post("/login", usercontroller.login);
router.post("/searchstocks/:name", middleware.AuthenticateToken, usercontroller.searchStock);
router.post("/suggestion", middleware.AuthenticateToken, usercontroller.suggestion);
router.post("/getdetails/:id", middleware.AuthenticateToken, usercontroller.getdetails);
module.exports = router;