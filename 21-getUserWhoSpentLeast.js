const { users, userProducts } = require("./index");

// 21. Encontre o userId que menos gastou;
function getUserWhoSpentLeast(products, users) {
  const usersExpenses = products.reduce((acc, product) => {
    acc[product.userId] = (acc[product.userId] || 0) + product.price;
    return acc;
  }, {});

  let minimumSpend = {
    userId: Object.keys(usersExpenses)[0],
    expense: Object.values(usersExpenses)[0],
  };

  for (const [userId, expense] of Object.entries(usersExpenses)) {
    if (expense < minimumSpend.expense) {
      minimumSpend = { userId, expense };
    }
  }

  return minimumSpend.userId;
}

console.log(getUserWhoSpentLeast(userProducts, users));
