var faker = require('faker');
var count = 1;

var popRawData = function popRawData() {
  var rawData = [];
  // use
  for(var i = 1; i <= 1000; i++) {
    let obj = {};
    obj['price'] = faker.random.number({
      'min': 100000,
      'max': 5000000
    })
    obj.beds = faker.random.number({
      'min': 1,
      'max': 10
    })
    obj.baths = faker.random.number({
      'min': 0,
      'max': 5
    })
    obj.sqft = faker.random.number({
      'min': 1,
      'max': 5000
    })
    obj.address = faker.address.streetAddress()
    obj.latitude = faker.address.latitude()
    obj.longitude = faker.address.longitude()
    obj.id = count++
    rawData.push(obj)
  }
 return rawData;
}

module.exports = popRawData;
