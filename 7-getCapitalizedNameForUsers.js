const { users } = require("./index");

// 7. Cria uma função que recebe a lista de usuários e retorna
// a lista dos nomes completos capitalizados;
// OBS: o nome 'joao da silva' capitalizado, seria: Joao Da Silva
// Dica1: Criar uma função auxiliar somente para capitalizar
// uma única palavra.
// Dica2: Criar outra função auxiliar para capitalizar
// um nome completo, com mais de uma palavra.
// Usar: split e join e a função da dica1

function getCapitalizedNameForUsers(users) {
  return users.map((user) => ({
    id: user.id,
    oldName: user.name,
    name: user.name
      .split(" ")
      .map((name) => capitalize(name))
      .join(" "),
  }));
}

function capitalize(name) {
  return `${String(name[0]).toUpperCase()}${name.slice(1)}`;
}

console.log(getCapitalizedNameForUsers(users));
