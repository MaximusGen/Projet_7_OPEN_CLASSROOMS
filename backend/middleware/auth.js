// Import de "jsonwebtoken"
const jwt = require("jsonwebtoken");

// Valider l'userId avec le token
module.exports = (req, res, next) => {
  // Récupération du token dans les paramètres
  const authHeader = req.headers.authorization;

  // Si l'utilisateur possède une autorisation,
  // on déclare le token et on le vérifie, s'il n'y a pas
  // d'erreur, on le next, sinon on renvoie un statut 403
  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, "RANDOM_TOKEN_SECRET", (err, user) => {
      if (err) {
        return res.status(403);
      }
      next();
    });
  }
  // Sinon, on renvoie le statut 401 Unauthorized
  else {
    res.status(401).json("Unauthorized acces !");
  }
};


module.exports.requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, "RANDOM_TOKEN_SECRET" , async (err, decodedToken) => {
      if (err) {
        console.log(err);
        res.send(200).json('no token')
      } else {
        console.log(decodedToken.id);
        next();
      }
    });
  } else {
    console.log('No token');
  }
};

