// Suerte! :)

var requestURL = 'https://restcountries.com/v3.1/all/';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var carregarPaisos = request.response;
  cards(carregarPaisos);
  
}
