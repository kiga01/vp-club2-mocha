# vp-club2-mocha

## Object

{   "id": "string",     "name": "string",     "level": 0,     "type": "string" }

## Types

"NORMAL", "FIRE", "FIGHTING", "WATER", "FLYING", "GRASS", "POISON", "ELECTRIC","GROUND", "PSYCHIC", "ROCK", "ICE", "BUG", "DRAGO", "GHOST", "DARK", "STEEL", "FAIRY"

## End Points 

GET /v1/pokemons

  Must reurn the list of pokemons and HTTP status 200

POST /v1/pokemons

  If the object that we are sending is right return HTTP 200 if not it returns HTTP 400

GET /v1/pokemons/<ID>

  We should send the id of the pokemon it returns HTTP 200, if the id doesn't exist it return HTTP 404

PUT /v1/pokemons/<ID>

  This endpoint update the pokemon with the matching id and the result would be HTTP 200, if the id doesnt exist it
  returns HTTP 404, and if the structure sended its wrong it returns HTTP 400

DELETE /v1/pokemons/<ID>

  This endpoint erase a pokemon with the matching id and the result would be HTTP 200, if the id doesnt exist it
  returns HTTP 404

** Urls **

http://www.zsoltnagy.eu/writing-automated-tests-with-mocha-and-chai/

https://www.npmjs.com/package/supertest-as-promised

https://github.com/visionmedia/supertest

https://blog.domenic.me/youre-missing-the-point-of-promises/
