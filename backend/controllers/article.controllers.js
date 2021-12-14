const fs = require("fs");
const utils = require("../utils/jwtUtils");
const { error } = require("console");

// On importe les models pour les bases de données
const models = require("../models");
const Article = models.Article;
const User = models.User;
const Comment = models.comments;
const Like = models.LikeDislike;


// On exporte la logique CreateArticle pour crée un article

module.exports.createArticle = (req, res, next) => {
  let text = req.body.text;
  let userId = utils.getUserId(req.headers.authorization);
  if (text.length <= 2) {
    return res.status(400).json({ message: "Text must have length 3-250" });
  }

  let image;

  User.findOne({
    where: { id: userId },
  })
    .then((user) => {
      if (user !== null) {
        let text = req.body.text;

        if (req.file != undefined) {
          image = `${req.protocol}://${req.get("host")}/images/${
            req.file.filename
          }`;
        } else {
          image == null;
        }
        if (text == "null" && imageUrl == null) {
          res.status(400).json({ error });
        } else {
          Article.create({
            text: text,
            imageUrl: image,
            UserId: userId,
          })
            .then(() => {
              res
                .status(201)
                .json({ message: "Article created successfully ! " });
            })
            .catch((err) => {
              res.status(500).json({ err: "Article not created " + err });
            });
        }
      } else {
        res.status(400).json(error);
      }
    })
    .catch((err) => res.status(501).json({ err: "User not found !" + err }));
};

// On exporte la logique getArticles pour allez chercher tous les articles créés

module.exports.getArticles = (req, res, next) => {
  Article.findAll()
    .then((Articles) => {
      res.status(200).json(Articles);
    })
    .catch((err) => {
      res.status(400).json({ err: "Article not found ! " + err });
    });
};

// On exporte la logique modifyArticle pour modifier un article

module.exports.modifyArticle = (req, res, next) => {
  let userId = utils.getUserId(req.headers.authorization);
  let text = req.body.text;

  User.findOne({
    where: { id: userId },
  })
    .then((user) => {
      if (user && (user.isAdmin == "1" || user.id == userId)) {
        Article.findOne({
          where: { id: req.params.id },
        }).then((article) => {
          let articleObject = {
            text: text ? text : article.text,
          };
          Article.update(articleObject, { where: { id: req.params.id } })
            .then(() => {
              res
                .status(200)
                .json({ message: "Article changed succesfully !" });
            })
            .catch((err) =>
              res.status(500).json({ err: "Article changed!" + err })
            );
        });
      } else {
        console.log(req.body);
        res.status(403).json("User no authorize for edit post ! " + error);
      }
    })
    .catch((err) => res.status(401).json({ err: "User not found !" + err }));
};

// On exporte la logique deleteArticle pour supprimer un article

module.exports.deleteArticle = (req, res, next) => {
  let userId = utils.getUserId(req.headers.authorization);

  User.findOne({ where: { id: userId } })
    .then((user) => {
      if (user && (user.isAdmin == "1" || user.id == userId)) {
        Article.findOne({
          where: { id: req.params.id },
        })
          .then((article) => {

            // Si on a une image dans l'article alors on supprime l'image avec 

            if (article.imageUrl) {
              const filename = article.imageUrl.split("/images/")[1];
              fs.unlink(`images/${filename}`, () => {

                // On supprime d'abord les likes et dislikes , suivie des commentaire pour supprimer l'article 

                Like.destroy({
                  where: { articleId: req.params.id },
                }).then(() => {
                  Comment.destroy({
                    where: { articleId: req.params.id },
                  })
                    .then(() => {
                      Article.destroy({
                        where: { id: req.params.id },
                      })
                        .then(() =>
                          res.status(201).json({
                            message: "Article deleted successfully ! ",
                          })
                        )
                        .catch((err) =>
                          res.status(500).json({
                            err: "Article not deleted " + err,
                          })
                        );
                    })
                    .catch((err) => res.status(500).json(err));
                });
              });
            } else {

              // Si on a pas d'image alors on supprime les likes, commentaires et l'articles

              Like.destroy({ where: { articleId: req.params.id } }).then(() => {
                Comment.destroy({ where: { articleId: req.params.id } })
                  .then(() => {
                    Article.destroy({
                      where: { id: req.params.id },
                    })
                      .then(() =>
                        res.status(201).json("Article deleted successfully !")
                      )
                      .catch((err) =>
                        res
                          .status(500)
                          .json({ err: "Article not deleted " + err })
                      );
                  })
                  .catch((err) => res.status(500).json(err));
              });
            }
          })
          .catch((err) =>
            res.status(500).json({ err: "Article not found ! " + err })
          );
      } else {
        res.status(403).json("User no authorize for delete post ");
      }
    })
    .catch((err) => res.status(500).json({ err: "User not Found ! " + err }));
};
