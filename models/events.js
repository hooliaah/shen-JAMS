'use scrict';

module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define("Event", {
    event_name: {
      type: DataTypes.STRING,
      isAlpha: true,
      notNULL: true
    },
    event_time: {
      type: DataTypes.STRING,
      notNULL: true
    },
    event_location: {
      type: DataTypes.STRING,
      notNULL: true
    }
  });
  Event.associate = function(models) {
    Event.belongsToMany(models.User, {
      as: 'Events',
      through: 'user_event',
      foreignKey: 'EventId'
    });
  };
  return Event;
};
