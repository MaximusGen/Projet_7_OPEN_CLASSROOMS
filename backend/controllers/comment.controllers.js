// On importe les fonctions dans le fichier jwtUtils
const utils = require("../utils/jwtUtils");

// On importe les bases de données
const models = require("../models");
const Comment = models.Comment;
const User = models.User;
const Article = models.Article;


// On exporte la logique CreateComment pour créer un commentaire

module.exports.createComment = (req, res, next) => {
  // Params
  let userId = utils.getUserId(req.headers.authorization);

  let text = req.body.text;
  // Verifie la longeur du commentaire
  if (text.length <= 2 || text.length >= 250) {
    return res.status(400).json({ message: "Text must have length 3-250" });
  }


  User.findOne({
    where: { id: userId },
  })
    .then(() => {
      Article.findOne({
        where: { id: req.params.id },
      });

      const newComment = {
        text: text,
        UserId: userId,
        ArticleId: req.params.id,
      };
      console.log(newComment);
      Comment.create(newComment)
        .then(() =>
          res.status(201).json({ message: " Comment created succesfully ! " })
        )
        .catch((err) =>
          res.status(500).json({ err: "Comment not created ! " + err })
        );
    })
    .catch((err) => res.status(500).json({ err: "User not found " + err }));
};


// On exporte la logique modifyComment pour modifier un commentaire

module.exports.modifyComment = (req, res, next) => {
  let userId = utils.getUserId(req.headers.authorization);
  let text = req.body.text;

  User.findOne({
    where: { id: userId },
  })
    .then((user) => {
      if (user && (user.isAdmin == "1" || user.id == userId)) {
        Comment.findOne({
          where: { id: req.params.id },
        })
          .then(() => {
            const editComment = {
              text: text ? text : req.body.text,
            };
            Comment.update(editComment, { where: { id: req.params.id } })
              .then(() => {
                res
                  .status(201)
                  .json({ message: "Comment edited successfully ! " });
              })
              .catch((err) => {
                res.status(401).json({ err: "Comment not edited ! " + err });
              });
          })
          .catch((err) =>
            res.status(500).json({ err: "Comment not found ! " + err })
          );
      } else {
        res.status(403).json("User no authorize for edit comment" + error);
      }
    })
    .catch((err) => res.status(500).json({ err: "User not found ! " + err }));
};


// On exporte la logique deleteComment pour supprimer un commentaire

module.exports.deleteComment = (req, res, next) => {
  let userId = utils.getUserId(req.headers.authorization);

  User.findOne({
    where: { id: userId },
  })
    .then((user) => {
      if (user && (user.isAdmin == "1" || user.id == userId)) {
        Comment.findOne({
          where: { id: req.params.id },
        })
          .then(() => {
            Comment.destroy({ where: { id: req.params.id } })
              .then(() => {
                res
                  .status(201)
                  .json({ message: "Comment deleted successfully ! " });
              })
              .catch((err) => {
                res.status(401).json({ err: "Comment not deleted ! " + err });
              });
          })
          .catch((err) =>
            res.status(500).json({ err: "Comment not found ! " + err })
          );
      } else {
        res.status(403).json("User no authorize for delete comment" + error);
      }
    })
    .catch((err) => res.status(500).json({ err: "User not found ! " + err }));
};

module.exports.getComments = (req, res, next) => {

    Comment.findAll({ order: [['createdAt', 'DESC']], 
    // include: [{model: Article, as: 'Article'}]
  })
      .then((comment) => {
        res.status(200).json(comment);
      })
      .catch((err) => {
        res.status(400).json({ err: "Comment not found ! " + err });
      }); 
};
