


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
}