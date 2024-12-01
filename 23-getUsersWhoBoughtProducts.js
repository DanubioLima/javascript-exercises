const { users, userProducts } = require("./index");

// 23. Encontre os usuários (objetos completos)
// que compraram algum produto;
function getUsersWhoBoughtProducts(products, users) {
  const usersMap = new Map();
  users.forEach((user) => {
    usersMap.set(user.id, user);
  });

  const usersWhoBoughtProducts = new Set();
  products.forEach((product) => {
    usersWhoBoughtProducts.add(usersMap.get(product.userId));
  });

  return Array.from(usersWhoBoughtProducts);
}

console.log(getUsersWhoBoughtProducts(userProducts, users));
