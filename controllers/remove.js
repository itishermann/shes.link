const { entries } = require('../models')
const { _token, _key } = require("../utils");

const removeShortenUrl = async (req, res) => {
  try{
    const { key } = req.params;
    const { token } = req.body;
    const tokenExists = await _token.exists(token);
    const keyExists = await _key.exists(key);
    if(tokenExists === true){
      if (keyExists === true) {
        const entry = await entries.findOne({
          where: {
            token: token,
            key: key
          }
        });

        if(entry){
          await entries.destroy({
            where: {
              token: token,
              key: key
            }
          });
          return res.status(200).send({
            status: 200,
            message: "Shorten link deleted successfully."
          });
        } else {
          return res.status(406).send({
            status: 406,
            message: "Token and key combination is invalid."
          });
        }
      } else {
        return res.status(404).send({
          status: 404,
          message: "Unknown key."
        });
      }
    } else {
      return res.status(403).send({
        status: 403,
        message: "Invalid token."
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      status: 500,
      message: "We got a problem here. Try again later"
    });
  }
}

exports.removeShortenUrl = removeShortenUrl;
