const { entries } = require('../models')
const { _token, _key } = require("../utils");
const validUrl = require("valid-url");

const returnShortenIfExists = async (url) => {
  const data = await entries.findOne({
    where: {
      url: url
    }
  });
  if(data){
    return data;
  } else {
    return false;
  }
}

const createShortenUrl = async (req, res) => {
  try{
    const { url } = req.body;
    const baseUrl = process.env.BASE_URL;

    if (validUrl.isUri(url)) {
      const alreadyShortened = await returnShortenIfExists(url)
      if(alreadyShortened !== false){
        const { key, url } = alreadyShortened;
        const shortUrl = baseUrl + "/" + key;
        return res.status(200).send({
          status: 200,
          message: "Link already shortened",
          data: {
            shortUrl,
            url,
          }
        });
      }

      const key = _key.generate();
      const shortUrl = baseUrl + "/" + key;
      const token = _token.generate();

      const dbEntry = await entries.create({key, url, token});
      if (dbEntry.dataValues.id) {
        return res.status(200).send({
          status: 200,
          message: "Link shortened successfully. The token is used to delete the link, please save it somewhere.",
          data: {
            shortUrl,
            token,
            url
          }
        });
      } else {
        return res.status(500).send({
          status: 500,
          message: "We got a problem here. Try again later"
        });
      }
    } else {
      return res.status(406).send({
        status: 406,
        message: "Invalid url."
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

exports.createShortenUrl = createShortenUrl;
