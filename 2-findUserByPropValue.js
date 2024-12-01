const { users } = require("./index");

// 2. Encontrar um usuário pelo valor de uma propriedade qualquer;

function findUserByPropValue(users, prop, value) {
  for (let i = 0; i < users.length; i++) {

    if (users[i][prop] === value) return users[i];
  }
}

console.log(findUserByPropValue(users, "id", 6))