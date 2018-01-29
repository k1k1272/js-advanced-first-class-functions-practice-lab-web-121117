// Code your solution in this file!
function logDriverNames(drivers) {
  return drivers.map(function(person) {console.log(person.name)})
}

function logDriversByHometown(drivers, location) {
  const matches = drivers.filter(function(person) {return person.hometown === location})
  return logDriverNames(matches)
}

function driversByRevenue(drivers) {
  newDrivers = drivers.slice(0)
  return newDrivers.sort(function(a,b) {return a.revenue - b.revenue})
}

function driversByName(drivers) {
  newDrivers = drivers.slice(0)
  return newDrivers.sort(function(a,b) {return a.name.localeCompare(b.name)})
}

function totalRevenue(drivers) {
  const revenues = drivers.map(function(person) {return person.revenue})
  return revenues.reduce(function(total, num) {return total + num})
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length
}
