// Code your solution in this file.
const lowerCaseDrivers = (arr) => {
  return arr.map( i => {
    return i.toLowerCase();
  });
}

const nameToAttributes = (arr) => {
  return arr.map( i => {
    let names = i.split(" ")
    return {firstName: names[0], lastName: names[1]};
  });
}

const attributesToPhrase = (arr) => {
  return arr.map( i => {
    return `${i.name} is from ${i.hometown}`;
  });
}
