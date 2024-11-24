// /data/migrations/migration-scripts/create-users-table.js

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../data/database'); // Import the Sequelize instance

const up = async () => {
  await sequelize.getQueryInterface().createTable('users', {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.ENUM('US', 'CO', 'TN'),
      defaultValue: 'US',
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW,
      allowNull: false,
    },
  });

  console.log('Users table created successfully.');
};

const down = async () => {
  await sequelize.getQueryInterface().dropTable('users');
  console.log('Users table dropped successfully.');
};

// Export the migration functions
module.exports = { up, down };

