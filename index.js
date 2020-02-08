// Code your solution here
const findMatch = function(array_of_drivers, driver_name) {
  array_of_drivers.filter(driver => { return driver === driver_name; })
}