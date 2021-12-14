 // On importe "express"
const express = require("express");
const router = express.Router();

// on importe les controllers et middleware de auth, multer et user 
const auth = require("../middleware/auth");
const multer = require("../middleware/multer");
const userCtrl = require("../controllers/user.controllers");

// Routes pour Auth

router.post("/register", multer, userCtrl.register);
router.post("/login", userCtrl.login);
// router.put("/upload/:id", auth, multer, userCtrl.uploadPicture)
router.put("/:id", auth, multer, userCtrl.modifyUser);
router.delete("/:id", auth, userCtrl.deleteUser);
router.get("/", userCtrl.GetAllUsers);
router.get("/:id",auth, userCtrl.getUserInfoById)

module.exports = router;
