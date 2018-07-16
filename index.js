// Code your solution in this file.
function lowerCaseDrivers(arr){
  let newArr = arr.map(function (d) { return d.toLowerCase(); });
  return newArr
};

function nameToAttributes(arr) {
  newArr = arr.map( function (name) {
    let nameArr = name.split(" ")
    return {firstName: nameArr[0], lastName: nameArr[1]}
  });
  return newArr
};

function attributesToPhrase(arr) {
  let result = arr.map(function (driver) {
    return driver.name + " is from " + driver.hometown;
  });
  return result
};
