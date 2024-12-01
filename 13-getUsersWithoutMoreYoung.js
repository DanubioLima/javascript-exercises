const { users } = require("./index");

// 13. Retornar a lista de usuários sem o usuário mais novo da lista.
function getUsersWithoutMoreYoung(users) {
  const moreRecentUser = users.reduce((acc, user) => {
    if (acc === null) return user;

    return user.age < acc.age ? user : acc;
  }, null);

  return users.filter((user) => user.id !== moreRecentUser.id);
}

console.log(getUsersWithoutMoreYoung(users));
