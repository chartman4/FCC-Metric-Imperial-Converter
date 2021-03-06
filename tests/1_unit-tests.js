/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

var chai = require('chai');
var assert = chai.assert;
var ConvertHandler = require('../controllers/convertHandler.js');

var convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  
  suite('Function convertHandler.getNum(input)', function() {
    
    test('Whole number input', function(done) {
      console.log("unit test called!!!");
       var input = '32L';
        console.log(input);
        console.log(convertHandler.getNum(input));

      assert.equal(convertHandler.getNum(input),32,'getNum Whole number input should pass');
      done();
    });
    
    test('Decimal Input', function(done) {
       var input = '3.2L';
      assert.equal(convertHandler.getNum(input),3.2,'getNum Decimal number input should pass');
      done();
    });
    
    test('Fractional Input', function(done) {
       var input = '1/2L';
      assert.equal(convertHandler.getNum(input),.5,'getNum Decimal number input should pass');
      done();
    });
    
    test('Fractional Input w/ Decimal', function(done) {
       var input = '4/0.5L';
      assert.equal(convertHandler.getNum(input),8,'getNum Fractional number input should pass');
      done();
    });
    
    test('Invalid Input (double fraction)', function(done) {
       var input = '3/2/1L';
      assert.equal(convertHandler.getNum(input),'invalid number','getNum Invalid number input should return invalid number');
      done();
    });
    
    test('No Numerical Input', function(done) {
       var input = 'L';
      assert.equal(convertHandler.getNum(input),1,'getNum No Numerical number input should should return invalid number');
      done();
    }); 
    
  });
  
  suite('Function convertHandler.getUnit(input)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      input.forEach(function(ele) {
        //assert
        assert.equal(convertHandler.getUnit(ele).toLowerCase(),ele.toLowerCase(),'getUnit should should return correct unit');

      });
      done();
    });
    
    test('Unknown Unit Input', function(done) {
      var ele = 'x';
      assert.equal(convertHandler.getUnit(ele),'invalid unit','getUnit should should return invalid unit');

      done();
    });  
    
  });
  
  suite('Function convertHandler.getReturnUnit(initUnit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['L','gal','km','mi','kg','lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      
      done();
    });
    
  });  
  
  suite('Function convertHandler.spellOutUnit(unit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      //see above example for hint
       var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['gallons','liters','miles','kilometers','pounds','kilograms'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.spellOutUnit(ele), expect[i]);
      });
      done();
    });
    
  });
  
  suite('Function convertHandler.convert(num, unit)', function() {
    
    test('Gal to L', function(done) {
      var input = [5, 'gal'];
      var expected = 18.9271;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('L to Gal', function(done) {
      // 1 gal to 3.78541 L
      var input = [1, 'L'];
      var expected = 0.26417;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('Mi to Km', function(done) {
       var input = [1, 'Mi'];
      var expected = 1.60934;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('Km to Mi', function(done) {
       var input = [1, 'Km'];
      var expected = 0.62137;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('Lbs to Kg', function(done) {
   var input = [1, 'Lbs'];
      var expected = 0.453592;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('Kg to Lbs', function(done) {
      var input = [1, 'Kg'];
      var expected = 2.20462;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
  });

});