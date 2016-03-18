'use strict';
const chai = require('chai');
const expect = chai.expect;
const supertest = require('supertest-as-promised');
const pokemonAPIServer = require('../server/FakeAPI.js');

chai.should();
chai.use(require('chai-things'));

before(() => {
  pokemonAPIServer.start(3000);
});

after(() => {
  pokemonAPIServer.stop();
});

describe('Feature: Existent pokemons should be retrieved with all the mandatory information', () => {
  var request = supertest('http://localhost:3000/v1/pokemons')
  before(()=>{
    return request.post('/')
      .send({name: 'charmander', type: 'FIRE', level: 1})
      .expect(200)
      .then((res)=>{
        return request.post('/')
        .send({name: 'Bulbasor', type: 'WATER', level: 2})
      });
  });
  context('When the GET pokemons endpoint is invoked', () => {
    it(`Then it should get all the expected pokemons`, (done) => {
      return request.get('/')
        .then((res) => {
          var pokemons = res.body;
          expect(pokemons).to.not.be.undefined;
          pokemons.should.all.have.property('id');
          pokemons.should.all.have.property('name');
          pokemons.should.all.have.property('level');
          pokemons.should.all.have.property('type');
          done();
        });
    });
  });

});

