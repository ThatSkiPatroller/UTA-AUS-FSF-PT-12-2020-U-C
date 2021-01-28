var userContainer = document.getElementById('users');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  var requestUrl = 'https://api.github.com/users?per_page=5';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Use the console to examine the response
      console.log(data);
      // TODO: Loop through the data and generate your HTML
      for (var i = 0; i < data.length; i++) {
        var okay = document.createElement('h3');
        var notokay = document.createElement('p')
        okay.textContent = data[i].login;
        notokay.textContent = data[i].user;
        var userLogin = data[i].login;
        var userURL = data[i].url;
        console.log(userLogin + userURL)
      }
    });
}
fetchButton.addEventListener('click', getApi);
