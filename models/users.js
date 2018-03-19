'use scrict';

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    first_name: {
      type: DataTypes.STRING,
      isAlpha: true,
      notNULL: true
    },
    last_name: {
      type: DataTypes.STRING,
      isAlpha: true,
      notNULL: true
    },
    password: {
      type: DataTypes.STRING,
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
    interest_coffee: {
      type: DataTypes.BOOLEAN,
      default: true
    },
    interest_bar: {
      type: DataTypes.BOOLEAN,
      default: true
    },
    interest_restaurant: {
      type: DataTypes.BOOLEAN,
      default: true
    },
    interest_movie: {
      type: DataTypes.BOOLEAN,
      default: true
    },
    interest_hike: {
      type: DataTypes.BOOLEAN,
      default: true
    },
    interest_park: {
      type: DataTypes.BOOLEAN,
      default: true
    },
    interest_gym: {
      type: DataTypes.BOOLEAN,
      default: true
    },
    interest_club: {
      type: DataTypes.BOOLEAN,
      default: true
    },
    interest_churro: {
      type: DataTypes.BOOLEAN,
      default: true
    }
  });

  User.associate = function(models) {
    User.belongsToMany(models.Event, {
      as: 'Events',
      through: 'user_event',
      foreignKey: 'UserId'
    });

    User.belongsToMany(models.User, {
      as: 'friends',
      through: 'user_friends',
      foreignKey: 'UserId'
    })
  };
  return User;
};
