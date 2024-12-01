const { users } = require("./index");

// 15. Contar a quantidade de usuários de uma dada cidade;
function countUsersByCity(users, city) {
  let count = 0;

  users.forEach((user) => {
    if (user.city === city) {
      count++;
    }
  });

  return count;
}

console.log(countUsersByCity(users, "Rio de Janeiro"));
