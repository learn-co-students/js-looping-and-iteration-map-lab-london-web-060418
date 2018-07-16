// Code your solution in this file.
function lowerCaseDrivers(array) {
  return array.map(x => x.toLowerCase())
}

function nameToAttributes(array) {
  return array.map(x => Object.assign(
    {}, {
      firstName: x.split(" ")[0],
      lastName: x.split(" ")[1]
    })
  );
}

function attributesToPhrase(array) {
  return array.map( x => `${x.name} is from ${x.hometown}`);
}