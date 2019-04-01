// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function(driver) {
    return driver.toLowerCase();
  });
}

function nameToAttributes(drivers) {
  return drivers.map(function(driver) {
      let person = {};
      person["firstName"] = driver.split(" ")[0];
      person["lastName"] = driver.split(" ")[1];
      return person;
  });
}

function attributesToPhrase(drivers) {
  return drivers.map(function(driver) {
    return `${driver["name"]} is from ${driver["hometown"]}`
  });
}
