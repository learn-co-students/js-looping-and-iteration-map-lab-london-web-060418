// returns all names lowercased, does not modify the original array:

function lowerCaseDrivers(driversList){
  return driversList.map(function (driver){
    return driver.toLowerCase();
  });
}

// returns list of objects with appropriate first and last names:

function nameToAttributes(driversArray) {
  return driversArray.map(function (driverName){

    let driverFirstName = driverName.split(" ")[0];
    let driverLastName = driverName.split(" ")[1];

    return { firstName: driverFirstName, lastName: driverLastName };
  });
}

// "<NAME OF DRIVER> is from <HOMETOWN>" :

function attributesToPhrase(driversArray) {
  return driversArray.map(function (driver){
    return `${driver.name} is from ${driver.hometown}`;
  })
}
