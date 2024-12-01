// 25. Encontre os usuários não-comuns a duas listas de usuários.
// ex: lista1=[{id:2}, {id:3}] e lista2=[{id:3},{id:4}]
// usuariosNaoComuns => [{id:2}, {id:4}]
function getDisjointUsers(list1, list2) {
  const uniqueToList1 = list1.filter(
    (user1) => !list2.find((user2) => user2.id === user1.id)
  );

  const uniqueToList2 = list2.filter(
    (user2) => !list1.find((user1) => user1.id === user2.id)
  );

  return [...uniqueToList1, ...uniqueToList2];
}

const list1 = [{ id: 2 }, { id: 3 }];
const list2 = [{ id: 3 }, { id: 4 }];
console.log(getDisjointUsers(list1, list2));
