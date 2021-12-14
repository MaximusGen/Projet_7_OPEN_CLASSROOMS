// On importe "express"
const express = require("express");
const router = express.Router();
// On importe le controller de comment et le middleware auth
const auth = require("../middleware/auth");
const commentCtrl = require("../controllers/comment.controllers");

router.post("/:id", auth, commentCtrl.createComment);
router.put("/:id", auth, commentCtrl.modifyComment);
router.delete("/:id", auth, commentCtrl.deleteComment);
router.get("/", auth, commentCtrl.getComments);

module.exports = router;
