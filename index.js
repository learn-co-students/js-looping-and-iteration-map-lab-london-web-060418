function lowerCaseDrivers(collection) {
  return collection.map(function (element) { return element.toLowerCase() })
}

function nameToAttributes(collection) {
  return collection.map(function (element) {
    names = element.split(" ");
    return { firstName: names[0], lastName: names[1] };
  })
}

function attributesToPhrase(collection) {
  return collection.map(function (element) { return `${element.name} is from ${element.hometown}` })
}
