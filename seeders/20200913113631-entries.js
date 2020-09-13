'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('entries', [{
      key: "snowtrust",
      url: "https://snowtrust.fr",
      token: "Il80Qs2WjYlJIBNzNkK6KYqlVMTbZLXgHx2o",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('entries', null, {});
  }
};
