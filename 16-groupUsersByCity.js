const { users } = require("./index");

// 16. Agrupar usuários pela cidade;
function groupUsersByCity(users) {
  const usersByCity = new Map();

  users.forEach((user) => {
    const { city } = user;

    if (!usersByCity.has(city)) {
      usersByCity.set(city, new Set([user]));
    }

    usersByCity.get(city).add(user);
  });

  return usersByCity;
}

console.log(groupUsersByCity(users));
