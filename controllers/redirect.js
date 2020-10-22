const { entries } = require('../models')
const { _key } = require("../utils");

const redirect = async (req, res) => {
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
          return res.status(404).sendFile('/../public/404.html', {root: __dirname });
        }
      } else {
        return res.status(404).sendFile('/../public/404.html', {root: __dirname });
      }
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      status: 500,
      message: "We got a problem here. Try again later"
    });
  }
}

exports.redirect = redirect;
