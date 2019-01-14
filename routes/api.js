/*
*
*
*       Complete the API routing below
*
*
*/
//  tests used https://glitch.com/edit/#!/legacy-fcc-test-suite?path=public/tests.js:899:32
// https://legacy-fcc-test-suite.glitch.me/
'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
      var initNum = convertHandler.getNum(input);
    console.log(initNum);
      var initUnit = convertHandler.getUnit(input);
    console.log(initUnit);
    var results;
    if ((initNum === "invalid number") && (initUnit === "invalid unit")) results = "invalid number and unit";
    else if (initNum === "invalid number") results = "invalid number";
    else if (initUnit === "invalid unit") results = "invalid unit";
    else {
      var returnNum = convertHandler.convert(initNum, initUnit);
    console.log(returnNum);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
        console.log(returnUnit);

      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
//     '{initNum: 5, initUnit: gal, returnNum: 18.92705, returnUnit: l, string: 5 gallons converts to 18.92705 liters }' 
//     
      // var results= `{initNum: ${initNum}, initUnit: ${initUnit}, returnNum: ${returnNum}, returnUnit: ${returnUnit}, string: ${toString}}`;
    results= {initNum: initNum, initUnit: initUnit, returnNum: returnNum, returnUnit: returnUnit, string: toString};
    }
    res.json(results);
    
    });
    
};
