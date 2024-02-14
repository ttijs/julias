


async function getProductData(file) {
  const response = await fetch(file);
  const data = await response.json();
  setRadarChart(data);
}


getProductData('./assets/data/productData.php');


function setProduct(data) {
  const names = data.map((object) => object.product);
  const types = data.map((object) => object.type);
  const prices = data.map((object) => object.price);
  const url = data.map((object) => object.Image);
}

var slider = document.getElementById("myRange");
var output = document.getElementById("prijs");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
  adjustProducts();
}

function adjustProducts(){
  var productOne = document.getElementById("product1");
  var productTwo = document.getElementById("product2");
  var productThree = document.getElementById("product3");
  var productFour = document.getElementById("product4");
  var productFive = document.getElementById("product5");
  var productSix = document.getElementById("product6");
  var productSeven = document.getElementById("product7");
  var productEight = document.getElementById("product8");
  var productNine = document.getElementById("product9");
  var productTen = document.getElementById("product10");
  var productEleven = document.getElementById("product11");
  var productTwelve = document.getElementById("product12");

  


}