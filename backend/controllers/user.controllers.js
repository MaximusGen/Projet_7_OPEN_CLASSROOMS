// On importe bcrypt pour hasher le mot de passe de l'utilisateur
const bcrypt = require("bcrypt");

 // On importe les fonctions du fichier jwtUtils
const utils = require("../utils/jwtUtils");

// On importe fs
const fs = require("fs");

// On importe les base de données
const models = require("../models");
const User = models.User;
const Article = models.Article;
const Comment = models.comments;
const Like = models.LikeDislike;

// On créé une constante pour verifiez si l'email et le password est bien écrit grâce à un Regex
const mailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const passwordRegex = /^(?=.*\d).{4,8}$/;

// Controllers

// On exporte la logique register pour créer un nouvelle utilisateur

exports.register = (req, res, next) => {
  // Params

  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  const bio = req.body.bio;
  const isAdmin = req.body.isAdmin;
  const imageUrl = "https://images.assetsdelivery.com/compings_v2/apoev/apoev1904/apoev190400006.jpg";

  if (email == null || username == null || password == null) {
    return res.status(400).json(" All fields are not filled !");
  }

  // Verify pseudo lenght, mail regex or  password

  if (username.length >= 20 || username.length <= 4) {
    return res
      .status(400)
      .json({ message: "wrong username, your username must be length 4 - 20" });
  }

  if (!passwordRegex.test(password)) {
    return res.status(400).json({
      message: "password invalid (must length 4 - 8 and includes a number",
    });
  }

  if (!mailRegex.test(email)) {
    return res.status(400).json({ message: "email is not valid" });
  }

  // Verify if user is already in database

  User.findOne({
    attributs: ["email"],
    where: { email: email },
  })
    //Create a new user with hash for password

    .then((userFound) => {
      if (!userFound) {
        bcrypt
          .hash(password, 10)
          .then((hash) => {
            const newUser = {
              username: username,
              email: email,
              password: hash,
              bio: bio,
              imageUrl: imageUrl,
              isAdmin: isAdmin,
            };
            User.create(newUser).then(() => {
              return res
                .status(201)
                .json({ message: "User created successfully ! " });
            });
          })
          .catch((err) => {
            return res.status(500).json({ err });
          });
      } else {
        res.status(409).json({ error: "All fields are not filled !" });
      }
    });
};

// On exporte la logique login pour se connecter au site groupomania

exports.login = (req, res, next) => {
  // Params
  const email = req.body.email;
  const password = req.body.password;
  // const token = utils.generateToken(userFound);

  // Verify the field , mail regex & password
  if (email == null || password == null) {
    return res.status(400).json("Tous les champs ne sont pas remplies !");
  }

  if (!mailRegex.test(email)) {
    return res.status(400).json({ message: "email is not valid" });
  }

  User.findOne({ where: { email: email } })
    .then((userFound) => {
      if (!userFound) {
        return res.status(401).json({ error: "User not found !" });
      }
      bcrypt
        .compare(password, userFound.password)
        .then((valid) => {

          const token = utils.generateToken(userFound)
          if (!valid) {
            return res.status(401).json({ error: "Wrong Password !" });
          }
          res.status(200).json({
            userId: userFound.id,
            token: token,
            isAdmin: userFound.isAdmin,
          });
        })
        .catch((err) => res.status(500).json({ err }));
    })
    .catch((err) => res.status(500).json({ err }));
};

// On exporte la logique modifyUser pour modifier (l'image) et la bio de l'utlisateur

exports.modifyUser = (req, res, next) => {
  const bio = req.body.bio;
  let id = utils.getUserId(req.headers.authorization);

  User.findOne({
    where: { id: id},
  })
    .then((userFound) => {
      if (userFound) {
        console.log(userFound);
        const newData = {
          bio: bio ? bio : userFound.bio,
        };
        const filename = userFound.imageUrl?.split("/images/")[1];
        if (req.file) {
          newData["imageUrl"] = `${req.protocol}://${req.get("host")}/images/${
            req.file.filename
          }`;
          fs.unlink(`images/${filename}`, (err) => {
            if (err) {
              console.log(`images/${filename} not found !`);
            } else {
              console.log(`deleted old images/${filename}`);
            }
          });
        }
        User.update(newData, { where: { id: id} })
          .then(() => {
            return res
              .status(201)
              .json({ message: "User modified succesfully !" });
          })
          .catch((err) => {
            return res.status(500).json({ err: "cannot update user" + err });
          });
      } else {
        res.status(404).json({ message: "user not found" + err });
      }
    })
    .catch((err) => {
      return res.status(500).json({ err: "unable to verify user" + err });
    });
};

// TEST CONTROLLER UPLOADPPICTURE
// On exporte la logique uploadPicture pour poster une image dans le profil de l'utilisateur

// exports.uploadPicture = (req, res, next) => {
//      let image = req.file
//   User.findOne({
//     where: {id: req.params.id }  
//   })
//   .then((user) => {
//     const NewData = {
//       imageUrl: image
//     }
//     const filename = user.imageUrl?.split("/images/")[1];
//     if (req.file) {
//       NewData["imageUrl"] = `${req.protocol}://${req.get("host")}/images/${
//         req.file.filename
//       }`;
//       fs.unlink(`images/${filename}`, (err) => {
//         if (err) {
//           console.log(`images/${filename} not found !`);
//         } else {
//           console.log(`deleted old images/${filename}`);
//         }
//       });
//     }
//     User.update(NewData, { where: { id: req.params.id} })
//       .then(() => {
//         return res
//           .status(201)
//           .json({ message: "Image Posted !" });
//       })
//       .catch((err) => {
//         return res.status(500).json({ err: "Image not posted !" + err });
//       });
//     })
//     .catch((err) => res.status(500).json({err: "User not Found ! " + err }))
// }

// On exporte la logique deleteUser pour que l'utilisateur puisse supprimer son compte

exports.deleteUser = (req, res, next) => {
  let id = utils.getUserId(req.headers.authorization);

  User.findOne({
    where: { id: id },
  })
    .then((user) => {
      Like.destroy({ where: { userId: user.id } }).then(() => {
        Comment.destroy({ where: { userId: user.id } }).then(() => {
          Article.destroy({ where: { userId: user.id } })
            .then(() => {
              User.destroy({ where: { id: req.params.id } })
                .then(() =>
                  res
                    .status(201)
                    .json({ message: "User deleted successfully !" })
                )
                .catch((err) =>
                  res.status(500).json({ err: "User not deleted " + err })
                );
            })
            .catch((err) =>
              res.status(500).json({ err: "Article not destroy ! " + err })
            );
        });
      });
    })
    .catch((err) => res.status(500).json({ err: "User not Found ! " + err }));
};


// On exporte la logique getAllUsers pour trouver des informations sur tous les utilisateur 

exports.GetAllUsers = (req, res, next) => {
  User.findAll()
    .then((user) => res.status(201).json(user))
    .catch((err) => res.status(500).json({ err: "Users not found ! " + err }));
};


// On exporte la logique getUserInfoById pour trouver des informations sur un utilisateur

exports.getUserInfoById = (req, res, next) => {

  User.findOne({
    where: { id: req.params.id }
  })
  .then((user) => res.status(200).json(user))
  .catch((err) => res.status(500).json({ err: "User not found ! " + err }))
}