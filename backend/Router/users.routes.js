const express = require("express");
const router = express.Router();
const { verifyJWT } = require("../Middleware/auth.middleware");
const {
  CreateUsers,
  logoutUsers,
  loginUsers,
  refreshaccessToken,
  checkUser
} = require("../Controllers/Users.controllers");
router
  .post("/register", CreateUsers)
  .post("/login", loginUsers)
  .post("/logout", verifyJWT, logoutUsers)
  .post("/refresh-token", refreshaccessToken)
  .get("/checkuser",verifyJWT, checkUser);

exports.router = router;
