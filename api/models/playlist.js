'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Playlist extends Model {
    static associate(models) {
      Playlist.belongsTo(models.User, { foreignKey: 'userId' });
      Playlist.hasMany(models.Like, { foreignKey: 'playlistId' });
    }
  }
  Playlist.init({
    idPlaylist: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    data: {
      type: DataTypes.STRING,
      allowNull: false
    },
    keyWord1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    keyWord2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    keyWord3: {
      type: DataTypes.STRING,
      allowNull: true
    },
    likes: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Playlist',
  });
  return Playlist;
};