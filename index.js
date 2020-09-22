

let datos

function user(user) {
    const userName = document.getElementById('titulo')
    const photo = document.getElementById('fotografia')
    const name = document.getElementById("nombre")

    const ruta = 'https://api.github.com'
    fetch(`${ruta}/users/${user}`)
        .then(response => response.json())
        .then(json => {
            userName.innerHTML = json.login,
            photo.src = json.avatar_url,
            name.innerHTML = json.name
        })
    fetch(`${ruta}/users/${user}/repos`)
        .then(response => response.json())
        .then(data => {
            datos = data
            // let js = data.filter((rep) => rep.language === "JavaScript");
            // console.log(js);
            data.forEach(element => {
                console.log(`Nombre: ${element.name}, lenguaje: ${element.language}`);
                let padre = document.getElementById('repo')
                let p = document.createElement('p')
                p.innerHTML = `Proyecto: ${element.name} - Lenguaje: ${element.language}`
                padre.appendChild(p)
            });
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
    //   console.log(`Nombre: ${element.name}, lenguaje: ${element.language}`)
        let padre = document.getElementById('filtro__resultados')
        let p = document.createElement('p')
        p.innerHTML = `Proyecto: ${element.name} - Lenguaje: ${element.language}`
        padre.appendChild(p)
    })
}
