const { entries } = require('./models')
const { token, key } = require("../utils");
const validUrl = require("valid-url");

const createShortenUrl = async (req, res) => {
  try{
    const {url} = req.body;
    const baseUrl = process.env.BASE_URL;

    if (validUrl.isUri(url)) {

      const key = key.generate();
      const shortUrl = baseUrl + "/" + key;
      const token = token.generate();

      const dbEntry = await entries.create(key, url, token);
      if (dbEntry.dataValues) {
        return res.status(200).message({
          status: 200,
          data: {
            shortUrl,
            token,
            url
          }
        });
      } else {
        return res.status(500).message({
          status: 500,
          message: "We got a problem here. Try again later"
        });
      }
    } else {
      return res.status(406).message({
        status: 406,
        message: "Invalid url."
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).message({
      status: 500,
      message: "We got a problem here. Try again later"
    });
  }
}

exports.createShortenUrl = createShortenUrl;
