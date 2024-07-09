'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    static associate(models) {
      // Un like est associé à une playlist et à un utilisateur
      Like.belongsTo(models.Playlist, {
        foreignKey: 'playlistId',
        as: 'playlist'
      });
      Like.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user'
      });
    }
  }
  Like.init({
    idLike: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users', // Nom du modèle User
        key: 'idUser'
      }
    },
    playlistId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Playlists', // Nom du modèle Playlist
        key: 'idPlaylist'
      }
    }
  }, {
    sequelize,
    modelName: 'Like',
  });
  return Like;
};