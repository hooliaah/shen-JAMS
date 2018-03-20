'use scrict';

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    first_name: {
      type: DataTypes.STRING,
      isAlpha: true,
      validate: {
        notNULL: true
      }
    },
    last_name: {
      type: DataTypes.STRING,
      isAlpha: true,
      validate: {
        notNULL: true
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notNULL: true
      }
    },
    phone: {
      type: DataTypes.STRING,
      isNumeric: true,
      validate: {
        notNULL: true
      }
    },
    email_address: {
      type: DataTypes.STRING,
      isEmail: true,
      validate: {
        notNULL: true
      }
    },
    address: {
      type: DataTypes.STRING,
      validate: {
        notNULL: true
      }
    },
    interest_coffee: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    interest_bar: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    interest_restaurant: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    interest_movie: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    interest_hike: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    interest_park: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    interest_gym: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    interest_club: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    interest_churro: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
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
