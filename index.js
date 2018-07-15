// Code your solution in this file.

function lowerCaseDrivers(array){
  return array.map( function(name){
   return  name.toLowerCase()
  });
}



function nameToAttributes(array){
    return array.map(function(name){
      const First=name.split( ' ')[0];
      const Last = name.split(' ')[1];
      
      return {firstName: First, lastName: Last}
    })
}

function attributesToPhrase(drivers) {
  return drivers.map(function (driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
}

