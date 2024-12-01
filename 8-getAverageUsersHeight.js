const { users } = require("./index");

// 8. Calcular a média de altura de todos os usuários;

function getAverageUsersHeight(users) {
  const sumHeight = users.reduce((acc, user) => {
    return acc + user.height;
  }, 0);

  return (sumHeight / users.length).toFixed(2);
}

console.log(getAverageUsersHeight(users));
