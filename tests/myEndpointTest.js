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
    var pokemons

    before(()=> {
        return request.post('/')
            .send({name: 'charmander', type: 'FIRE', level: 1})
            .expect(200)
            .then((res)=> {
                return request.post('/')
                    .send({name: 'Bulbasor', type: 'WATER', level: 2})
            });

    });

    context('When the GET pokemons endpoint is invoked', () => {
        it(`Then it should get all the expected pokemons`, (done) => {
            return request.get('/')
                .then((res) => {
                    pokemons = res.body;
                    expect(pokemons).to.not.be.undefined;
                    pokemons.should.all.have.property('id');
                    pokemons.should.all.have.property('name');
                    pokemons.should.all.have.property('level');
                    pokemons.should.all.have.property('type');
                    done();
                });
        });
    });

    describe('When the PUT pokemon endpoint is invoked', () => {
        it(`Then it should update the expected pokemon`, (done) => {
            expect(pokemons).to.not.be.undefined;
            return request.put('/' + pokemons[1].id)
                .send({name: 'charmeleon', type: 'FIRE', level: 20})
                .expect(200)
                .end((err, res) => {
                    expect(res.body.name).to.equal("charmeleon");
                    expect(res.body.type).to.equal("FIRE");
                    expect(res.body.level).to.equal(20);
                    done();
                });
        });
    });

    describe('When the DELETE pokemon endpoint is invoked', () => {
        it(`Then it should delete the expected pokemon`, (done) => {
            expect(pokemons).to.not.be.undefined;
            return request.delete('/' + pokemons[1].id)
                .expect(200)
                .end((err, res) => {
                    done();
                });
        });
    });
});

