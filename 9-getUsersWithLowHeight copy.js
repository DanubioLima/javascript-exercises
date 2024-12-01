const { users } = require("./index");

// 9.  Retornar os usuários com altura abaixo da média;

function getUsersWithLowHeight(users) {
  const sumHeight = users.reduce((acc, user) => {
    return acc + user.height;
  }, 0);

  const averageHeight = sumHeight / users.length;

  return users.filter((user) => user.height < averageHeight);
}

console.log(getUsersWithLowHeight(users));
