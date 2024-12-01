const { users } = require("./index");

// 5. Encontre os usuários de um dado estado ou que são casados;

function findUsersByCityOrMarried(users, city) {
  return users.filter((user) => user.city === city || user.married);
}

console.log(findUsersByCityOrMarried(users, "São Paulo"));
