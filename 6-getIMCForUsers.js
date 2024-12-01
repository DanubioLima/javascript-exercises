const { users } = require("./index");

// 6. Cria uma função que recebe a lista de usuários e retorna
// uma lista com o IMC dos respectivos usuários;
// OBS: imc = peso/(altura x altura)

function getIMCForUsers(users) {
  return users.map((user) => ({
    id: user.id,
    name: user.name,
    imc: (user.weight / (user.height * user.height)).toFixed(2),
  }));
}

console.log(getIMCForUsers(users));
