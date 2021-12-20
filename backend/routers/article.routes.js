// On importe "express"
const express = require("express");
const router = express.Router();

// On importe les controllers et middleware de article, like, auth et multer
const auth = require("../middleware/auth");
const multer = require("../middleware/multer");
const articleCtrl = require("../controllers/article.controllers");
// const likeCrtrl = require("../controllers/like.controllers");


// Route pour les Articles

router.post("/", auth, multer, articleCtrl.createArticle);
router.get("/", auth, articleCtrl.getArticles);
router.put("/:id", auth, multer, articleCtrl.modifyArticle);
router.delete("/:id", auth, articleCtrl.deleteArticle);



// Routes pour like ou dislike un article 

// router.post("/likes/:id", auth, likeCrtrl.like)
// router.get("/likes/:id", auth, likeCrtrl.countLikeByArticleId)
// router.delete("/likes/:id", auth, likeCrtrl.deleteLike)
// router.post('/likeOrDislike/:id', auth, likeCrtrl.likeOrDislike)

module.exports = router;
