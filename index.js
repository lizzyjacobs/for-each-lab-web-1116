function iterativeLog(array) {
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  var candies = ["m&m", "skittle", "twix"]
  candies.forEach(callback)
  return candies;
}

function doToArray(array, callback) {
  array.forEach(callback)
}
