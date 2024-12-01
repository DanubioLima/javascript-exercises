const { users } = require("./index");

// 3. Encontrar a usuária do sexo feminino com o salário maior.

function findWomanUserWithHigherSalary(users) {
  const womanUsers = users.filter((user) => (user.sex === "f"));

  let womanHighSalary = womanUsers[0];

  for (let i = 0; i < womanUsers.length; i++) {
    if (womanUsers[i].salary > womanHighSalary.salary) {
      womanHighSalary = womanUsers[i];
    }
  }

  return womanHighSalary;
}

console.log(findWomanUserWithHigherSalary(users, "id", 6));
