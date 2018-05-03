var chai = require('chai');
var expect = require('chai').expect;
var sanitize = require('../app.js').sanitize;

// import {chai} from 'chai';
// import {expect} from 'chai';


describe('Sanitize', () => {

  it('returns lowercase of a string', () => {
    let word = 'Hello World';

    expect(sanitize(word)).to.equal('hello world');
    expect(sanitize(word)).not.to.equal("words");
    expect(sanitize(word)).to.be.a('string');
    expect(sanitize(word)).not.to.be.a('number');
    expect(sanitize(word)).to.contain('world')
  });


  it('it should remove any hyphen from a string', () => {
    let word = 'Hello-World';
    let result = 'hello world';
    let sanitizeFunc = sanitize(word);


    expect(sanitizeFunc).to.equal(result);
    expect(sanitizeFunc).to.not.equal('Hello-World');
    expect(sanitizeFunc).not.to.contain('-');
  });
});
