const expect = require('chai').expect;
const { _key, _token } = require('../../utils');

module.exports = () => {
  it('Should return true if key exists', async () => {
    const result = await _key.exists('snowtrust');
    return expect(result).to.be.true;
  });

  it('Should return false if key does not exists',async () => {
    const result = await _key.exists('booooooo');
    return expect(result).to.be.false;
  });

  it('Should return a new key',async () => {
    const result = await _key.generate();
    return expect(result).to.be.a('string');
  });

  it('Should return true if token exists', async () => {
    const result = await _token.exists('Il80Qs2WjYlJIBNzNkK6KYqlVMTbZLXgHx2o')
    return expect(result).to.be.true;
  });

  it('Should return false if token does not exists', async () => {
    const result = await _token.exists('booooooo')
    return expect(result).to.be.false;
  });

  it('Should return a new token', async () => {
    const result = await _token.generate();
    return expect(result).to.be.a('string');
  });

}
