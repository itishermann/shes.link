const path = require('path');
const { entries } = require('../models')
const { _key } = require("../utils");

const redirect = async (req, res, next) => {
  try{
    const { key } = req.params;
    const exists = await _key.exists(key);
      if (exists === true) {
        const entry = await entries.findOne({
          where: {
            key: key
          }
        });
        if(entry.url){
          return res.redirect(entry.url)
        } else {
          return res.status(404).sendFile('404.html', {root: path.join(__dirname, '../public')});
        }
      } else {
        return res.status(404).sendFile('404.html', {root: path.join(__dirname, '../public') });
      }
  } catch (error) {
    return next(error);
  }
}

exports.redirect = redirect;
