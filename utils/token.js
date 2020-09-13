const { entries } = require("../models");
const crypto = require('crypto');

const exists = async (token) => {
  const dbToken = await entries.findOne({
    where:{
      token: token
    }
  });
  return !!dbToken;
}

const generate = () => {
  let size = 15
  let token = crypto
    .randomBytes(size)
    .toString('base64')
    .slice(0, size);
  while ( exists(token) === true) {
    generate();
  }
  return token;
};

module.exports = {
  generate,
  exists
};
