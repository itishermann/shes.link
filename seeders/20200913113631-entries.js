'use strict';

module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert('entries', [{
      key: "snowtrust",
      url: "https://snowtrust.fr",
      token: "Il80Qs2WjYlJIBNzNkK6KYqlVMTbZLXgHx2o",
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        key: "smashpips",
        url: "https://smashpips.com",
        token: "xX8CrWRZDYhL9DS",
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete('entries', null, {});
  }
};
