const popRawData = require('./createFakeData.js');

const createCsvWriter = require('csv-writer').createObjectCsvWriter;  
const csvWriter = createCsvWriter({  
  path: 'properties.csv',
  header: [
    {id: 'id', title: 'Id'},
    {id: 'price', title: 'Price'},
    {id: 'beds', title: 'Beds'},
    {id: 'baths', title: 'Baths'},
    {id: 'sqft', title: 'sqft'},
    {id: 'address', title: 'Address'},
    {id: 'latitude', title: 'Latitude'},
    {id: 'longitude', title: 'Longitude'},
  ]
});

var count = 0;

var loop = function(popRawData) {
  count++
  if ( count >= 10001 ) {
    return
  } else {
    csvWriter  
      .writeRecords(popRawData())
      .then(()=> { 
        
        loop(popRawData);
      });
  }
}
console.time('creating csv')
loop(popRawData);
console.timeEnd('creating csv')
