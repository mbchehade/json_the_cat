

//fetchBreedDescription function should call the callback function with either error if there s an error or null if htere isnt for the first argument. the callback function is the second parameter.


//we access the function in the breedFetcher.js file and we pass it the callback function. if it is an error return the msg if not return the desc.
const fetchBreedDescription  = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});

