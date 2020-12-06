var input = document.querySelector("#input");
var transalteBtn = document.querySelector("#transalte-btn");
var output = document.querySelector("#output");

var severURL = "https://api.funtranslations.com/translate/minion.json";
// var severURL = "https://api.funtranslations.com/translate/yoda.json";

transalteBtn.addEventListener("click", translate);

function translate() {
  var translationURL = severURL + "?text=" + input.value;
  // console.log(translationURL);
  fetch(translationURL)
    .then((res) => res.json())
    .then((json) => (output.innerText = json.contents.translated))
    .catch((err) => alert(err));
}
