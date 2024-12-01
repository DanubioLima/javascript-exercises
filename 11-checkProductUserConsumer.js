const { userProducts } = require("./index");

// 11. Verificar se um dado produto foi consumido
// por mais de um usuário.

function checkProductUserConsumerFrequency(products, productName) {
  const productConsumed = products.filter(
    (product) => product.name === productName
  );

  const uniqueUsers = new Set(productConsumed.map((product) => product.userId));

  return uniqueUsers.size > 1;
}

console.log(checkProductUserConsumerFrequency(userProducts, "Computador"));
