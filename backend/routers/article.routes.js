// On importe "express"
const express = require("express");
const router = express.Router();

// On importe les controllers et middleware de article, like, auth et multer
const auth = require("../middleware/auth");
const multer = require("../middleware/multer");
const articleCtrl = require("../controllers/article.controllers");
const likeCrtrl = require("../controllers/like.controllers");
// const commentCtrl = require("../controllers/comment.controllers");


// Route pour les Articles

router.post("/", auth, multer, articleCtrl.createArticle);
router.get("/", auth, articleCtrl.getArticles);
router.put("/:id", auth, multer, articleCtrl.modifyArticle);
router.delete("/:id", auth, articleCtrl.deleteArticle);


// ROUTE FOR COMMENT AN ARTICLE 

// router.post("/comment/create", auth, multer, commentCtrl.createComment);
// router.get("/comment/all", auth, commentCtrl.getComments)
// router.put("/comment/:id", auth, commentCtrl.modifyArticle)
// router.delete("/comment/:id", auth, commentCtrl.delete)

// Routes pour like ou dislike un article 

router.post("/likes/:id", auth, likeCrtrl.like)
router.get("/likes/:id", auth, likeCrtrl.countLikeByArticleId)
// router.post('/likeOrDislike/:id', auth, likeCrtrl.likeOrDislike)

module.exports = router;
