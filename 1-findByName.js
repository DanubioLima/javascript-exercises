const { users } = require("./index");

// 1. Encontrar um usuário pelo nome;

function findByName(users, name) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].name === name) return users[i];
  }
}

console.log(findByName(users, "antonieta francesa rainha"))