const { users } = require("./index");

// 4. Encontre os usuários de um dado estado e com peso maior
// que um dado peso;

function findUsersByCityAndWeight(users, city, weight) {
  return users.filter((user) => user.city === city && user.weight > weight);
}

console.log(findUsersByCityAndWeight(users, "São Paulo", 50));
