/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    console.log("getnum");
    console.log(input);
    var temp = input.split(/([0-9.\/]*)([a-z]*)/gi).filter(s=> s.length>0);
    var result;
    var ck = temp[0].split("/");
    if (ck.length > 1) {
      result = parseFloat(ck[0]) / parseFloat(ck[1]);
    } else {
      result=parseFloat(ck[0]);
    };
    if (isNaN(result) && ck.length === 1) result=1;

    if (isNaN(result) || ck.length > 2) result="invalid number";

console.log("getNum result:");
    console.log(result);
    return result;
  };
  
  this.getUnit = function(input) {
    var temp = input.split(/([0-9.\/]*)([a-z]*)/gi).filter(s=> s.length>0);
    var tempUnit;
    var result
    if (temp.length > 1)
      tempUnit = temp[1].toLowerCase();
    else tempUnit=temp[0].toLowerCase();
    switch(tempUnit) {
      case "l": result ="L";break;
      case "gal": result ="gal" ;break;
      case "mi": result="mi";break;
      case "km": result="km";break;
      case "lbs": result="lbs";break;
      case "kg": result="kg";break;
      default: result='invalid unit';
    }
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    console.log(initUnit);
    switch(initUnit.toLowerCase()) {
      case "l": result ="gal";break;
      case "gal": result ="L" ;break;
      case "mi": result="km";break;
      case "km": result="mi";break;
      case "lbs": result="kg";break;
      case "kg": result="lbs";break;
      default: result='invalid unit';
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    var temp = unit.toLowerCase();
    switch (temp) {
      case "gal" : result="gallons";break;
      case "l": result="liters";break;
      case "mi": result="miles";break;
      case "km": result="kilometers";break;
      case "kg": result="kilograms";break;
      case "lbs": result="pounds";break;
      default: result='invalid unit';
    }
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    var temp = initUnit.toLowerCase();
    switch (temp) {
      case 'gal': result= initNum*galToL;break;
      case 'l': result = initNum * 1/galToL; break;
      case 'lbs': result = initNum*lbsToKg;break;
      case 'kg': result = initNum * 1/lbsToKg;break;
      case 'mi': result = initNum *miToKm;break;
      case 'km': result = initNum * 1/miToKm;break;
      default: result='invalid unit';
    }
    console.log(result);
    return Number(Math.round(result+'e5')+'e-5');
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
    return result;
  };
  
}

module.exports = ConvertHandler;
