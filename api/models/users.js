'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // Un utilisateur a plusieurs playlists
      User.hasMany(models.Playlist, {
        foreignKey: 'userId',
        as: 'playlists'
      });

      // Un utilisateur a pu liker plusieurs playlists
      User.hasMany(models.Like, {
        foreignKey: 'userId',
        as: 'likes'
      });
    }
  }
  User.init({
    idUser: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      autoIncrement: true
    },
    pseudo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: { msg: "Invalid email" },
        notNull: { msg: "You must write your email address"} 
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};