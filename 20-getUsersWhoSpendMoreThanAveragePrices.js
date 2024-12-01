const { users, userProducts } = require("./index");

// 20. Retornar os usuários que gastaram mais que preço
// médio dos produtos vendidos;
function getUsersWhoSpendMoreThanAveragePrices(products, users) {
  const averagePrice =
    products.reduce((acc, product) => acc + product.price, 0) / products.length;

  const usersExpenses = products.reduce((acc, product) => {
    acc[product.userId] = (acc[product.userId] || 0) + product.price;
    return acc;
  }, {});

  return Object.keys(usersExpenses)
    .filter((userId) => usersExpenses[userId] > averagePrice)
    .map((userId) => users.find((user) => user.id === Number(userId)));
}

console.log(getUsersWhoSpendMoreThanAveragePrices(userProducts, users));
