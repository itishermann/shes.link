const { entries } = require("../models");
const shortid = require("shortid");

const exists = async (key) => {
  const dbKey = await entries.findOne({
    where:{
      key: key
    }
  });
  if (dbKey){
    return true;
  } else {
    return false;
  }
}

const generate = () => {
  return shortid.generate();
}

module.exports._key = {
  exists,
  generate
}
