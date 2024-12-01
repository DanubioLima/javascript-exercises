const { users } = require("./index");

// 14. Retornar um objeto que mapeia usuários pelo próprio
// id do usuário.
// ex: {
//   1: {
//     id: 1,
//     city: "São Paulo",
//     name: "josé da silva",
//     age: 21,
//     weight: 70,
//     sex: "m",
//     height: 1.7,
//     salary: 1000,
//     married: false,
//     active: true,
//   },
//   .
//   .
//   .
// }
function getUsersMappedById(users) {
  const usersMap = {};
  users.forEach((user) => {
    usersMap[user.id] = user;
  });

  return usersMap;
}

console.log(getUsersMappedById(users));
