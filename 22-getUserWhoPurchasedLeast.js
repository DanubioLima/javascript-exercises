const { users, userProducts } = require("./index");

// 22. Encontre o userId que comprou menos produtos, mas
// que comprou sim algum produto;
function getUserWhoPurchasedLeast(products) {
  const usersCount = new Map();

  products.forEach((product) => {
    if (usersCount.has(product.userId)) {
      usersCount.set(product.userId, usersCount.get(product.userId) + 1);
      return;
    }
    usersCount.set(product.userId, 1);
  });

  let purchasedLeast = {
    userId: usersCount.keys().next().value,
    count: usersCount.values().next().value,
  };

  for (const [userId, count] of usersCount) {
    if (count < purchasedLeast.count) {
      purchasedLeast = { userId, count };
    }
  }

  return purchasedLeast.userId;
}

console.log(getUserWhoPurchasedLeast(userProducts));
