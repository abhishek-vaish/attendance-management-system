"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Departments",
      [
        {
          name: "ITS",
          is_active: true,
        },
        {
          name: "WPS",
          is_active: true,
        },
        {
          name: "HR",
          is_active: true,
        },
        {
          name: "Operation",
          is_active: true,
        },
        {
          name: "Quality Assurance",
          is_active: true,
        },
        {
          name: "Consultant Onboarding",
          is_active: true,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Departments", null, {});
  },
};
