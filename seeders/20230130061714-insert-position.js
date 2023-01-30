"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Positions",
      [
        {
          name: "Trainee",
          is_active: true,
        },
        {
          name: "Associate Software Engineer",
          is_active: true,
        },
        {
          name: "Software Engineer",
          is_active: true,
        },
        {
          name: "Senior Software Engineer",
          is_active: true,
        },
        {
          name: "Principle Software Engineer",
          is_active: true,
        },
        {
          name: "Senior Principle Software Engineer",
          is_active: true,
        },
        {
          name: "Team Lead",
          is_active: true,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Positions", null, {});
  },
};
