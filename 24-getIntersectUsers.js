// 24. Encontre os usuários comuns a duas listas de usuários.
// Dois usuários são idênticos, se tiverem o mesmo id;
// ex: lista1=[{id:2}, {id:3}] e lista2=[{id:3},{id:4}]
// usuariosComuns => [{id:3}]
function getIntersectUsers() {
  const firstList = [{ id: 1 }, { id: 2 }, { id: 3 }];
  const secondList = [{ id: 3 }, { id: 4 }];

  const intersection = new Map();

  firstList.concat(secondList).forEach((user) => {
    if (
      firstList.some((u) => u.id === user.id) &&
      secondList.some((u) => u.id === user.id)
    ) {
      intersection.set(user.id, user);
    }
  });

  return [...intersection.values()];

  // outra forma de resolver:

  // const ids = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
  // const firstList = new Set([...ids.slice(0, 3)]);
  // const secondList = new Set([...ids.slice(2)]);
  // return firstList.intersection(secondList);
}

console.log(getIntersectUsers());
