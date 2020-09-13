const { entries } = require('./models')
const { _token, _key } = require("../utils");
const validUrl = require("valid-url");

const removeShortenUrl = async (req, res) => {
  try{
    const { key } = req.params;
    const { token } = req.body;

    if(_token.exists(token)){
      if (_key.exists(key)) {
        const entry = await entries.findOne({
          where: {
            token: token,
            key: _key
          }
        });

        if(entry){
          await entries.delete({
            where: {
              token: token,
              key: _key
            }
          });
          return res.status(200).message({
            status: 200,
            message: "Shorten link deleted successfully."
          });
        } else {
          return res.status(406).message({
            status: 406,
            message: "Token and key combination is invalid."
          });
        }
      } else {
        return res.status(404).message({
          status: 404,
          message: "Unknown key."
        });
      }
    } else {
      return res.status(403).message({
        status: 403,
        message: "Invalid token."
      });
    };
  } catch (error) {
    console.log(error);
    return res.status(500).message({
      status: 500,
      message: "We got a problem here. Try again later"
    });
  }
}

exports.removeShortenUrl = removeShortenUrl;
