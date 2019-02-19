var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

import fizzbuzz1 from '../fizzbuzz.js';
//import Province from '../province.js';

describe('FizzBuzz', function() {
   //let asia;
   //beforeEach(function() {
   //  asia = new Province(sampleProvinceData());
   //});

   it('deberia retornar el mismo numero', function() {
     expect(fizzbuzz1(4)).equal("4");
   });
});
