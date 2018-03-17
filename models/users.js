module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      user_name: {
          type: DataTypes.STRING,
          isAlpha: true,
          notNULL: true
      },
      phone: {
          type: DataTypes.STRING,
          isNumeric: true,
          notNULL: true
      },
      email_address: {
          type: DataTypes.STRING,
          isEmail: true,
          notNULL: true
      },
      address: {
          type: DataTypes.STRING,
          notNULL: true
      },
      interests: {
        type: DataTypes.STRING
    }
    });
    return User;
  };