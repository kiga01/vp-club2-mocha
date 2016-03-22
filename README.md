# vp-club2-mocha

## Object 

{   "id": "string",     "name": "string",     "level": 0,     "type": "string" }

## Types

"NORMAL", "FIRE", "FIGHTING", "WATER", "FLYING", "GRASS", "POISON", "ELECTRIC","GROUND", "PSYCHIC", "ROCK", "ICE", "BUG", "DRAGO", "GHOST", "DARK", "STEEL", "FAIRY"

## End Points 

GET /v1/pokemons

  Debe retornar todos los pokemons existentes, con un status 200

POST /v1/pokemons

  Recibe en el cuerpo del mensaje un objeto pokemon para crearlo en la base de datos
  Retorna el objeto creado junto con el atributo ID que se le asigno
  Si el request no tiene una estructura correcta, retornara un error 400

GET /v1/pokemons/<ID>

  Obtiene el pokemon solicitado con el id dado en el parámetro de ruta
  Si no se encuentra retorna 404

PUT /v1/pokemons/<ID>

  Actualiza un pokemon asociado al id de ruta dado
  Si el id no se encuentra en la base de datos, retorna a 404
  Si el objeto enviado en el body no esta bien formado retorna 400

DELETE /v1/pokemons/<ID>

  Si el id no se encuentra en la base de datos, retorna a 404
  Retorna solo status 200 en caso de éxito.

** Urls **

http://www.zsoltnagy.eu/writing-automated-tests-with-mocha-and-chai/

https://www.npmjs.com/package/supertest-as-promised

https://github.com/visionmedia/supertest

https://blog.domenic.me/youre-missing-the-point-of-promises/
