// on importe les fonctions du fichier jwtUtils
const jwtUtils = require("../utils/jwtUtils");

// On  importe les base de données
const models = require("../models/");
const LikeDislike = models.LikeDislike;
const Article = models.Article;


// On exporte la logique like pour créer un like sur un article

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
    LikeDislike.findOne({
      where: {
        UserId: userId,
        ArticleId: articleId,
        operationtype: "LIKE",
      },
    })
    .then((userLiked) => {
      // console.log(userLiked);
      if (!userLiked) {
        LikeDislike.create({
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


// On exporte la logique dislike pour créer un dislike sur un article

exports.dislike = (req, res, next) => {

  let userId = jwtUtils.getUserId(req.headers.authorization);
  let articleId = req.params.id;

  if (articleId <= 0) {
    res.status(400).json("Invalid paramaters");
  }

  Article.findOne({
    where: {id: articleId}
  })
  .then(() => {
    LikeDislike.findOne({
      where: {
        UserId: userId,
        ArticleId: articleId,
      },
    })
    .then((userLiked) => {
      console.log(userLiked);
      if (!userLiked) {
        LikeDislike.create({
          UserId: userId,
          ArticleId: articleId,
          operationtype: "DISLIKE",
        })
          .then(() => res.status(201).json({ message:" Success !"}))
          .catch((err) =>
            res.status(500).json({ err: "Dislike not created" + err })
          );
      } else {
        res.status(409).json({ err: "Article already disliked or liked ! " });
      }
    })
    .catch((err) =>
    res.status(500).json({
      err: "unable to verify is user already disliked ! " + err,
    })
    );
  })
  .catch((err) => res.status(500).json({ err: "Article not Found ! " + err}))
};


// On exporte la logique countLikeByArticleId pour trouver et compter les likes sur un article

exports.countLikeByArticleId = (req, res, next) => {
  let userId = jwtUtils.getUserId(req.headers.authorization);
  let articleId = req.params.id;


  Article.findOne({ where : {id: articleId}})
  .then(() => {
     LikeDislike.findAndCountAll({
      where : {
        ArticleId: articleId,
        UserId: userId,
        operationtype: "LIKE",
      },   
     })
     .then((count) => {
         res.status(201).json(count)
     })
     .catch((err) => res.status(500).json({ err: "Like not Found ! " + err}))
  })
  .catch((err) => res.status(500).json({err: "Article not Found ! " + err}))
}

// On exporte la logique countDislikeByArticleId pour  trouver et  compter les likes sur un article

exports.countDislikeByArticleId = (req, res, next) => {
  let userId = jwtUtils.getUserId(req.headers.authorization);
  let articleId = req.params.id;


  Article.findOne({ where : {id: articleId}})
  .then(() => {
     LikeDislike.findAndCountAll({
      where : {
        ArticleId: articleId,
        UserId: userId,
        operationtype: "DISLIKE",
      },   
     })
     .then((count) => {
         res.status(201).json(count)
     })
     .catch((err) => res.status(500).json({ err: "Like not Found ! " + err}))
  })
  .catch((err) => res.status(500).json({err: "Article not Found ! " + err}))
}



exports.likeOrDislike =(req, res, next) => {
  let userId = jwtUtils.getUserId(req.headers.authorization);
  let articleId = req.params.id;
  
  Article.findOne({
    where: { id: articleId}
  })
  .then(() => {
    LikeDislike.findOne({
      where :{
        UserId: userId,
        ArticleId: articleId,
      },
    })
    .then((likeDislikeTab) => {
        // Si l'utilisateur aime le post 
        console.log(LikeDislike);
        if(req.body.likes === +1){
          // On s'assure que l'utilisateur n'a pas déjà effectuer un like 
          console.log(likeDislikeTab);
          if(!likeDislikeTab) {
            // On ajoute like avec operationtype
            LikeDislike.create({ 
                UserId: userId,
                ArticleId: articleId,
                operationtype: "LIKE",
            })
            .then((res) => {
              console.log(res);
              res.status(200).json({message: "Like created ! "})
            })
            .catch((err) => res.status(500).json({ err: "Like not created" + err}))
          } else {
            throw "Can't Like, User Already Like or Disliked";
          }
          // Si l'utilisateur n'aime pas le post 
        } else if(req.body.like === -1 ){
          // On s'assure que l'utilisateur n'a pas déjà effectuer un dislike 
          if(!likeDislikeTab) {
            LikeDislike.create({
              where: {
                UserId: userId,
                ArticleId: articleId,
                operationtype: "DISLIKE",
              },
            })
            .then((res) => {
              res.status(200).json({message:"Dislike created ! "})
            })
            .catch((err) => res.status(500).json({ err: "Dislike not created ! " + err}))
          } else {
            throw "Can't Like, User Already Like or Disliked";
          }
        } else {
           throw "Aucun like et dislike n'a été trouvé ! "
        }
    })
    .catch((err) => res.status(500).json(err))
  })
  .catch((err) => res.status(500).json({ err:"Article not Found ! " + err}))
}