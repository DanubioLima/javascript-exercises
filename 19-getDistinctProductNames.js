const { userProducts } = require("./index");

// 19. Obter os nomes distintos de produtos;
function getDistinctProductNames(products) {
  const productNames = new Set();

  products.forEach((product) => productNames.add(product.name));

  return productNames;

  // Outra forma de resolver o problema:
  // const productNames = new Map();
  // products.forEach((product) => productNames.set(product.name, product.id));
  // return [...productNames.keys()];
}

console.log(getDistinctProductNames(userProducts));
