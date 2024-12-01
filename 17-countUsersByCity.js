const { users } = require("./index");

// 17. Contar a quantidade de usuários por cidade;
function countUsersByCity(users) {
  const usersByCity = new Map();

  users.forEach((user) => {
    const { city } = user;

    if (!usersByCity.has(city)) {
      usersByCity.set(city, 1);
      return;
    }

    const usersCount = usersByCity.get(city);
    usersByCity.set(city, usersCount + 1);
  });

  return usersByCity;
}

console.log(countUsersByCity(users));
