'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Like extends Model {
    static associate(models) {
      // Un like appartient à un utilisateur
      Like.belongsTo(models.User, { foreignKey: 'userId' });
      // Un like appartient à une playlist
      Like.belongsTo(models.Playlist, { foreignKey: 'playlistId' });
    }
  }

  Like.init({
    idLike: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    playlistId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Like',
    timestamps: true, // Active les timestamps `createdAt` et `updatedAt`
    underscored: true, // Utilise le style de nommage snake_case pour les colonnes et les clés étrangères
    tableName: 'likes' // Nom de la table dans la base de données
  });

  return Like;
};