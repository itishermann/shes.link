const { entries } = require("../models");

const rand = () => {
  return Math.random().toString(36).substr(2); // remove `0.`
};

const generate = () => {
  return rand() + rand(); // to make it longer
};

const exists = async (token) => {

}

module.exports.token = {
  generate,
  exists
};
