/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

const output=document.getElementById('output');
const login=document.createElement('span').innerText=` `;
fetch(ENDPOINT).then((res) => res.json()).then((data) => {
    document.getElementById('btn').addEventListener('click',(event) => {
        event.preventDefault();

        document.getElementById('message').innerText = ' ';
        data.forEach((a) => {
            const user = new NewUser(a);
            createCard(user)
        })
    })
    function createCard(a) {
        const box = document.createElement('div');
        const login = document.createElement('span').innerText = `${a.login}`;
        const pic = document.createElement('img');
        pic.src = a.image;
        console.log(pic);
        output.append(box);
        box.append(login);
        box.append(pic);
    }
})
class NewUser {
    constructor (data) {
        this.login = data.login;
        this.image = data.avatar_url;
    }
}

document.getElementById('btn').addEventListener('click', (event) => {
  event.preventDefault();

  document.getElementById('btn').style.display = 'none';
})