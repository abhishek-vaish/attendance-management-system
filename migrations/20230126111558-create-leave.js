"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable("Leave", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
      },
      leave_start_date: {
        type: Sequelize.DATE,
      },
      leave_end_date: {
        type: Sequelize.DATE,
      },
      leave_type: {
        type: Sequelize.ENUM(
          "Standard",
          "Earned",
          "Bereavement",
          "Leave Without Pay",
          "Optional Holiday",
          "Paternity",
          "Sabbatical"
        ),
      },
      leave_reason: {
        type: Sequelize.STRING,
      },
      approvals: {
        type: Sequelize.BOOLEAN,
      },
      approval_date: {
        type: Sequelize.DATE,
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable("Leave");
  },
};
