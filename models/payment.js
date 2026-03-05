const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payment', {
    payment_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    booking_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Bookings',
        key: 'booking_id'
      }
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    payment_method: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    payment_status: {
      type: DataTypes.ENUM('completed','failed','pending'),
      allowNull: false,
      defaultValue: "pending"
    },
    transaction_id: {
      type: DataTypes.STRING(255),
      allowNull: true
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
    paid_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "2026-03-05 05:23:36"
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "2026-03-05 05:23:36"
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "2026-03-05 05:23:36"
    }
  }, {
    sequelize,
    tableName: 'Payments',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "payment_id" },
        ]
      },
      {
        name: "booking_id",
        using: "BTREE",
        fields: [
          { name: "booking_id" },
        ]
      },
    ]
  });
};
