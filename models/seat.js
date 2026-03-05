const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('seat', {
    seat_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    screen_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Screens',
        key: 'screen_id'
      }
    },
    seat_number: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "2026-03-05 05:23:35"
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "2026-03-05 05:23:35"
    },
    seat_type: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Seats',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "seat_id" },
        ]
      },
      {
        name: "screen_id",
        using: "BTREE",
        fields: [
          { name: "screen_id" },
        ]
      },
    ]
  });
};
