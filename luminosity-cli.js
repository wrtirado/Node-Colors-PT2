var colorutil = require('./colorutil.js')
  var red   = process.argv[2]
  var green = process.argv[3]
  var blue  = process.argv[4]



var colorTotal = colorutil.luminosity(red, green, blue)

console.log(colorTotal)
