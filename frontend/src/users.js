import { API } from "./services/api.js";

renderUsersData();

async function renderUsersData() {
  const tbodyElement = document.querySelector("tbody");

  const data = await API.getUsersData();

  console.log(data);

  for (const c in data) {
    const nome = data[c]["nome"];
    const setor = data[c]["setor"];
    const genero = data[c]["genero"];
    const email = data[c]["email"];

    tbodyElement.innerHTML += `<tr> <td>${nome}</td> <td id=email_${c}> ${email}</td> <td>${genero}</td> <td>${setor}</td> <td><div id="row-buttons-group"><button class="edit" id=edit_${c}>Editar <i class="fa-solid fa-edit"></i></button><button class="delete" id=del_${c}>Deletar <i class="fa-solid fa-trash"></i></button></div></td></tr>`;
  }
}

// document.querySelector('tbody').addEventListener('click', function(event){
//     const target = event.target;
//     const idBtn = target.id;
//     console.log('asdfasdfs')
//     if(idBtn.substring(0, 4) == 'del_'){
//         API.delUser(document.querySelector(`email_${idBtn.split('_')[1]}`))
//     }
// });
