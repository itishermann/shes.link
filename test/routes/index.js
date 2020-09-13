const chai = require('chai');
const expect = require('chai').expect;
chai.use(require('chai-http'));

const baseUrl = process.env.BASE_URL

module.exports = () => {
  it('Should create a shorten link', () => {
    return chai.request(baseUrl)
      .put("/api/shorten")
      .send({
        "url": "https://shes.link"
      })
      .then(function (res) {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('data').to.be.an('object');
        const { data } = res.body;
        expect(data).to.have.property('shortUrl').and.include(baseUrl).and.to.be.a('string');
        expect(data).to.have.property('token').and.to.be.a('string');
        expect(data).to.have.property('url').and.to.be.a('string');
      });
  });

  it('Should return already created shorten link without token', () => {
    return chai.request(baseUrl)
      .put("/api/shorten")
      .send({
        url: "https://shes.link"
      })
      .then(function (res) {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('data').to.be.an('object');
        const { data } = res.body;
        expect(data).not.to.have.property('token');
        expect(data).to.have.property('shortUrl').and.include(baseUrl).and.to.be.a('string');
        expect(data).to.have.property('url').and.to.be.a('string');
      })
  });

  it('Should be unrecognized key', () => {
    return chai.request(baseUrl)
      .delete("/api/boooooooooo")
      .send({
        token: "xX8CrWRZDYhL9DS"
      })
      .then(function (res) {
        expect(res).to.have.status(404);
      })
  });

  it('Should be unrecognized token', () => {
    return chai.request(baseUrl)
      .delete("/api/snowtrust")
      .send({
        token: "booooooooooo"
      })
      .then(function (res) {
        expect(res).to.have.status(403);
      })
  });

  it('Should be unrecognized combination', () => {
    return chai.request(baseUrl)
      .delete("/api/snowtrust")
      .send({
        token: "xX8CrWRZDYhL9DS"
      })
      .then(function (res) {
        expect(res).to.have.status(406);
      })
  });

  it('Should delete a shorten link', () => {
    return chai.request(baseUrl)
      .delete("/api/smashpips")
      .send({
        token: "xX8CrWRZDYhL9DS"
      })
      .then(function (res) {
        expect(res).to.have.status(200);
      })
  });

  it('Should redirect to a shorten link', () => {
    return chai.request(baseUrl)
      .get("/snowtrust")
      .then(function (res) {
        expect(res).to.have.status(200);
      })
  });

  it('Should redirect to a 404 page', () => {
    return chai.request(baseUrl)
      .get("/booooooo")
      .then(function (res) {
        expect(res).to.have.status(404);
      })
  });

}
