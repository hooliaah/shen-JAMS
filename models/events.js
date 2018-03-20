'use scrict';

module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define("Event", {
    event_name: {
      type: DataTypes.STRING,
      isAlpha: true,
      allowNull: false
    },
    event_time: {
      type: DataTypes.STRING,
      allowNull: false
    },
    event_location: {
      type: DataTypes.STRING,
      allowFalse: false
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
