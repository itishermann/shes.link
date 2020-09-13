const { entries } = require("../models");
const shortid = require("shortid");

const exists = async (key) => {
  const dbKey = await entries.findOne({
    where:{
      key: key
    }
  });

  return !!dbKey;
}

const generate = () => {
  let key = shortid.generate();
  while (exists(key) === true){
    generate();
  }
  return key;
}

module.exports = {
  exists,
  generate
}
