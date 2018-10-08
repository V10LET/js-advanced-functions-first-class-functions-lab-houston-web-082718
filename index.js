const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(drivers.length - 2, drivers.length)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(multiplyValue) {
  return function(num) {
      return multiplyValue * num
  }
}

const fareDoubler = function (num) {
  return num * 2
}

const fareTripler = function (num) {
  return num * 3
}

const fetchSpecifiedDrivers = function(drivers, func) {
  return func(drivers)
}
