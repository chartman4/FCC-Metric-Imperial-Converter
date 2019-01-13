/*
*
*
*       Complete the API routing below
*
*
*/

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

      var returnNum = convertHandler.convert(initNum, initUnit);
    console.log(returnNum);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
        console.log(returnUnit);

      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      var results= `{initNum: ${initNum}, initUnit: ${initUnit}, returnNum: ${returnNum}, returnUnit: ${returnUnit}, string: ${toString}}`;
      res.json(results);
    });
    
};
