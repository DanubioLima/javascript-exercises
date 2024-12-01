const { userProducts } = require("./index");

// 12. Verificar se existe algum produto
// que foi comprado por mais de um usuário

function checkProductBoughtByManyUsers(products) {
  const buyers = new Map();

  for (const userProduct of products) {
    const productBuyers = buyers.get(userProduct.name);
    if (productBuyers) {
      buyers.set(
        userProduct.name,
        new Set([...productBuyers, userProduct.userId])
      );
      continue;
    }

    buyers.set(userProduct.name, new Set([userProduct.userId]));
  }

  return buyers.values().some((item) => item.size > 1);
}

console.log(checkProductBoughtByManyUsers(userProducts));
