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
    idplaylist: {
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
    likes: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Playlist',
    timestamps: true,
    underscored: true,
  });
  return Playlist;
};