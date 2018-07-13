'use strict';
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    org_id: DataTypes.INTEGER,
    country_code: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    address1: DataTypes.STRING,
    address2: DataTypes.STRING,
    city: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    disable: DataTypes.BOOLEAN
  }, {});
  user.associate = function (models) {
    // associations can be defined here
    models.user.belongsTo(models.company, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    }),
    models.user.belongsToMany(models.acl_role, {through: 'acl_user_roles', foreignKey: 'userid'})
  };
  return user;
};