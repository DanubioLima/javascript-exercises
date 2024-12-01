const { users } = require("./index");

// 18. Obter a média salarial dos usuários por cidade;
function groupUsersByCity(users) {
  const usersByCity = new Map();

  users.forEach((user) => {
    const { city } = user;

    if (!usersByCity.has(city)) {
      usersByCity.set(city, new Set([user]));
    }

    usersByCity.get(city).add(user);
  });

  const averageSalaryByCity = new Map();

  usersByCity.values().forEach((users) => {
    users = [...users.values()];
    let totalSalary = 0;

    users.forEach((user) => {
      totalSalary += user.salary;
    });

    averageSalaryByCity.set(
      users[0].city,
      Number((totalSalary / users.length).toFixed(2))
    );
  });

  return averageSalaryByCity;
}

console.log(groupUsersByCity(users));
