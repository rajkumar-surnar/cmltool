var request = require('request');
process.stdin.resume();
process.stdin.setEncoding('utf8');
var util = require('util');
var config = require('./Config/config');

console.log("Welcome to word dictionary");
var apiBaseURL = 'http://api.wordnik.com/v4/';
var apiMap = [{
  keyword: 'def',
  apiURL:'/word.json/{word}/definitions'
}]

function callDictionaryAPI(){
  console.log("Calling API");
  request.get('http://api.wordnik.com:80/v4/account.json/authenticate/rajkumar_surnar?password=wordnik%404RAJ&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5');
  request.get('api.wordnik.com/v4/word.json/goat/definitions', function (error, response, body) {
    if(error){
      console.log(error);
    } else if(response){
      console.log(response);
    }   
  });
}

process.stdin.on('data', function (text) {
  var userInput = util.inspect(text);
  callDictionaryAPI();
  console.log('received data:', userInput);
  if (text === 'quit\n') {
    done();
  }
});

function done() {
  console.log('Now that process.stdin is paused, there is nothing more to do.');
  process.exit();
}

//
//{username} 
//http://developer.wordnik.com/v4/word.json/Hard/definitions