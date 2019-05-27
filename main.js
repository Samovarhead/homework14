var requestURL = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3&fbclid=IwAR1208FuOXIZu35v9SPj5ZqDXENLT3J5VHKqcO3lgCB3hDdpkNYBjBeJli0';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  var pubinfo = request.response;
  console.log(pubinfo);
}
