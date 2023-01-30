"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable("Token", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      authentication: {
        type: Sequelize.INTEGER,
        references: {
          model: "Authentication",
          key: "id",
        },
      },
      token: {
        type: Sequelize.STRING,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable("Token");
  },
};
