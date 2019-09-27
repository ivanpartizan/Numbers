const year = document.querySelector("#year");
const submit = document.querySelector("#submit");

submit.addEventListener("click", getFact);
year.addEventListener("keypress", keyEnter);

function getFact() {
  const url = `https://numbersapi.com/${year.value}/year`;
  if (year !== "") {
    fetch(url)
      .then(response => response.text())
      .then(data => {
        console.log(data);
        document.querySelector("#output").innerHTML = data;
      })
      .catch(err => console.log(err));
  }

  year.value = "";
}

function keyEnter(event) {
  if (event.keyCode === 13) {
    getFact();
  }
}
