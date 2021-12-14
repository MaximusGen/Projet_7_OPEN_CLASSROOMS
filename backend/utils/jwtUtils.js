let jwt = require("jsonwebtoken");


// On exporte les logiques pour céer un token et chercher l'userId dans le token pour l'autorisation 
module.exports = {
  tokenSign: "RANDOM_TOKEN_SECRET",
  generateToken: function (user) {
    return jwt.sign(
      {
        userId: user.id,
        isAdmin: user.isAdmin,
      },
      this.tokenSign,
      {
        expiresIn: "3h",
      }
    );
  },
  getUserId: function (data) {
    if (data.length > 1) {
      let token = data.split(" ")[1];
      try {
        let decodedToken = jwt.verify(token, this.tokenSign);
        userId = decodedToken.userId;
        return userId;
      } catch (err) {
        return err;
      }
    }
  },
};
