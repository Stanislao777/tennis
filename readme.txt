FizzBuzz con cambios en codigo para empezar a
desarrollar las pruebas. Y Primeras pruebas
de ejemplo (ES6)
--------------------------------------------
-El codigo de FizzBuzz en este directorio (fizzbuzz.js)
-El codigo de las pruebas en /test/fizzbuzz_test.js

Para instalar las dependencias:
$> npm install
Para ejecutar las pruebas:
$> npm test
Para ver la covertura de pruebas:
$> npm run coverage

---------------------------------
NOTAS ADICIONALES:
Para configurar lo necesario en package.jamesknelson
se siguieron los siguientes pasos:
-----------------------------------
 npm --init   (crea el package.json con dependencias)
desde: https://mochajs.org/#installation
 npm install --global mocha  //global
 npm install --save-dev mocha  //o como dependencia del proyecto
 npm install mocha
 mkdir test
desde: http://jamesknelson.com/testing-in-es6-with-mocha-and-babel-6/
para usar babel como transpiler de JS6 a JS5 con mocha
especialmente para que funcionen las clases import y export
  npm install babel-core --save-dev
  npm install --save-dev babel-core babel-preset-env

  # For ES6/ES2015 support
  npm install babel-preset-es2015 --save-dev

  # If you want to use JSX
  npm install babel-preset-react --save-dev

  # If you *must* use experimental ES7 features
  npm install babel-preset-stage-0 --save-dev

  We’ll need to configure Babel with a .babelrc file in the project’s root directory:
  crear archivo: .babelrc
  {
    "presets": ["es2015"]
  }

  Para ejecutar las pruebas
  mocha --compilers js:babel-core/register

  Para que 'npm test' reconozca y use babel,
  anadir esto en package.json:
  "scripts": {
    "test": "npm run && mocha --compilers js:babel-core/register"
  },

  es decir, eso reemplaza el por defecto:
  "scripts": {
    "test": "mocha"
  },

  Instalar babel-cli
  npm install --save-dev babel-cli

Para que JSHInt no indique el warning de sintaxis solo
reconocida por JS6 en Atom
Crear el archivo .jshintrc con:
{
  "esversion": 6
}

Para instalar chai expect
En el test:
var expect = require('chai').expect;
var should = require('chai').should();
En linea de comandos:
npm install chai

Para ejecutar el archivo fizzbuzz por consola con node:
  Instalar babel-cli
 $> npm install --save-dev babel-cli
 Ejecutar con:
 $> npx babel-node fizzbuzz.js


Para instalar istanbul con ES6
https://github.com/istanbuljs/nyc
$> npm install --save-dev nyc   // instalar istanbul

https://github.com/istanbuljs/babel-plugin-istanbul
- npm install --save-dev babel-plugin-istanbul  //instalar soporte para ES6
- Add it to .babelrc in test mode:
{
  "env": {
    "test": {
      "plugins": [ "istanbul" ]
    }
  }
}

- En packag.json añadir el 'nyc' en test
 "scripts": {
    "test": "nyc npm run && mocha --compilers js:babel-core/register"
  },


- Para que tests funcionen con babel anadir en
.babelrc
{
  "presets": ["es2015"] //para npm test con mocha
}
