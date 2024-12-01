const { userProducts } = require("./index");

// 10. Verificar se um dado produto foi consumido
// mais de uma vez.

function checkProductConsumerFrequency(products, productName) {
  return products.filter((product) => product.name === productName).length > 1;
}

console.log(checkProductConsumerFrequency(userProducts, "Uber"));
