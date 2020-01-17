const request = require('request');
// console.log('request', request);
// request is a library that someboy publsihed it in npm. it has a bunch of functions in, and also request is the function that i am calling here. and this is the standard request functio syntax on npm. so to find it google npm request syntax;



// using request:
const fetchBreedDescription = (breedName, callback) =>{
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, response, body) => {
    if (body === "[]") {
      let error ='Requested breed not found';
      callback(error, null)
       // print the error if one occurred
    } else if (error) {
      callback(error, null);
    } else {
    // console.log('statusCode:', response && response.statusCode);//print tge response status code if a response was received
    // console.log('body:', body);// print the HTML for the Google homepage.
    // console.log(typeof body);
      const data = JSON.parse(body);
      // console.log('data is', data);
      // console.log(typeof data);
      callback(null, data[0]['description']);
    }

  });
};


// so we put the whole require function isde fetchBreedDescription and export it to index. so we can use it again.
module.exports = fetchBreedDescription;

//if request is called the string would search for siberian data.
// so if i pass sib to the query which is this"q=" at the end of url, the body which is an empty array (you check it after you run your file on node after activating request), body will then show me all the api for siberian.
// typeof function checks the type of body which is a string.
// in order to scan this data like a javascript object, we need to convert the string version of it into an object first.
// this process of converstion is call deserialiation and it is made by using the method JSON.PARSE.
//if you run the code it will show you that it is a an object now!!
// the data variable now is what is the result of converti the string body into a object.
// data now is the object which is the body.

//accessing the first entry of the data array and print out the description of the user. we access it by accessing the array and the object which is the first element in the array so data[0], then we want to access description key inside the object so we put ['description].

// Allow the user to specify the breed name using command-line arguments. we allow the user to do that by declaring the args variable which is process.argv and slice(2) to gget rid of the first 2 elements. then we delete sib from the end of the query which was asking aboout sib in the url q=sib becomes q= so then we + it to args so the user can give any value he wants to command line.


//request function takes 2 parameters, a url and a call back function which are the error response and body.
// request allows us to requesting json data. and isinde of the request, it gives us infor back like error body and response.











