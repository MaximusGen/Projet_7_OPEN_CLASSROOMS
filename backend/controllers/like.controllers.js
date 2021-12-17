// on importe les fonctions du fichier jwtUtils
const jwtUtils = require("../utils/jwtUtils");

// On  importe les base de données
const models = require("../models/");
const Likes = models.Like;
const Article = models.Article;


exports.like = (req, res, next) => {
  let userId = jwtUtils.getUserId(req.headers.authorization);
  let articleId = req.params.id;

  if (articleId <= 0) {
    res.status(400).json("Invalid paramaters");
  }

  Article.findOne({
    where: {id: articleId}
  })
  .then(() => {
    Likes.findOne({
      where: {
        UserId: userId,
        ArticleId: articleId,
      },
    })
    .then((userLiked) => {
      if (!userLiked) {
        Likes.create({
          UserId: userId,
          ArticleId: articleId,
        })
          .then(() => res.status(201).json("Success ! "))
          .catch((err) =>
            res.status(500).json({ err: "Like not created" + err })
          );
      } else {
        res.status(409).json({ err: "Article already liked or disliked  ! " });
      }
    })
    .catch((err) =>
    res.status(500).json({
      err: "unable to verify is user already liked ! " + err,
    })
    );
  })
  .catch((err) => res.status(500).json({ err: "Article not Found ! " + err}))
}


exports.countLikeByArticleId = (req, res, next) => {
  let userId = jwtUtils.getUserId(req.headers.authorization);
  // let articleId = req.params.id;


  // Article.findOne({ where : {id: articleId}})
  // .then(() => {
     Likes.findAndCountAll({
      where : {
        // ArticleId: articleId,
        UserId: userId,
      },   
     })
     .then((count) => {
         res.status(201).json(count)
     })
     .catch((err) => res.status(500).json({ err: "Like not Found ! " + err}))
  // })
  // .catch((err) => res.status(500).json({err: "Article not Found ! " + err}))
}


exports.deleteLike = (req, res, next) => {
  let userId = jwtUtils.getUserId(req.headers.authorization);
  let likeId = req.params.id;

  Likes.findOne({
    where: { id: likeId }
  })
  .then(() => {
    Likes.destroy({
      where: {
        UserId: userId,
        ArticleId: likeId,
      },
    })
    .then(() => res.status(200).json({message: " Like deleted ! "}))
    .catch((err) => res.status(500).json({ err: "Like not deleted ! " + err}))
  })
  .catch((err) => res.status(500).json({ err: "Article not Found ! " + err}))
}