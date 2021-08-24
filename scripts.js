/* Place your JavaScript in this file */
function sorteoSeisPaises() {
  //  numeroCarta=Math.floor(Math.random() * 6) + 1;

  var client = new XMLHttpRequest();
  client.open("GET", "/ejemploCartaPais.html");
  idHTML = "cartaPais1";
  client.onreadystatechange = function () {
    document.getElementById(idHTML).innerHTML = client.responseText;
  };
  //client2 = new XMLHttpRequest();
  client.open("GET", "/ejemploCartaPais.html");
  idHTML = "cartaPais2";
  client.onreadystatechange = function () {
    document.getElementById(idHTML).innerHTML = client.responseText;
  };
  client.send();
}

function muestrapais() {
  var client = new XMLHttpRequest();
  client.open("GET", "/olivarossi1.html");
  idHTML = "cartaPais1";
  client.onreadystatechange = function () {
    document.getElementById(idHTML).innerHTML = client.responseText;
  };
  client.send();
}

function muestrapais2() {
  var client = new XMLHttpRequest();
  client.open("GET", "/olivarossi2.html");
  idHTML = "cartaPais2";
  client.onreadystatechange = function () {
    document.getElementById(idHTML).innerHTML = client.responseText;
  };
  client.send();
}
function muestrapais3() {
  var client = new XMLHttpRequest();
  client.open("GET", "/olivarossi3.html");
  idHTML = "cartaPais3";
  client.onreadystatechange = function () {
    document.getElementById(idHTML).innerHTML = client.responseText;
  };
  client.send();
}
function muestrapais4() {
  var client = new XMLHttpRequest();
  client.open("GET", "/olivarossi4.html");
  idHTML = "cartaPais3";
  client.onreadystatechange = function () {
    document.getElementById(idHTML).innerHTML = client.responseText;
  };
  client.send();
}
