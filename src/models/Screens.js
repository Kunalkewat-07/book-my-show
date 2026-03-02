const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Screens', {
    screen_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    theater_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Theaters',
        key: 'theater_id'
      }
    },
    screen_no: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total_seats: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    screen_type: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Screens',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "screen_id" },
        ]
      },
      {
        name: "theater_id",
        using: "BTREE",
        fields: [
          { name: "theater_id" },
        ]
      },
    ]
  });
};
