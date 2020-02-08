// Code your solution here
const findMatching = function(array_of_drivers, driver_name) {
  return array_of_drivers.filter(driver => { return driver.toUpperCase() === driver_name.toUpperCase(); })
}

