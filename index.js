

const userName = document.getElementById('titulo')
const photo = document.getElementById('fotografia')
const name = document.getElementById("nombre")
const API = `https://api.github.com/users`
let datos

async function user(user) {
    const usuarios = await fetch(`${API}/${user}`)
    const response = await usuarios.json()
    userName.innerHTML = response.login
    photo.src = response.avatar_url
    name.innerHTML = response.name
    const repositorio = await fetch(`${API}/${user}/repos`)
    const repo = await repositorio.json()
    datos = repo
    repo.forEach(element => {
        console.log(`Nombre: ${element.name}, lenguaje: ${element.language}`);
        let padre = document.getElementById('repo')
        let p = document.createElement('p')
        p.innerHTML = `Proyecto: ${element.name} - Lenguaje: ${element.language}`
        padre.appendChild(p)
    })
}


function traer() {
    const input = document.getElementById('usuario')
    console.log(input.value);
    user(input.value)
}

const mostrar = () => {
    const input = document.getElementById('boton')
    let js = datos.filter((rep) => rep.language === input.value);
    console.log(js)
    js.forEach(element => {
        let padre = document.getElementById('filtro__resultados')
        let p = document.createElement('p')
        p.innerHTML = `Proyecto: ${element.name} - Lenguaje: ${element.language}`
        padre.appendChild(p)
    })
}



