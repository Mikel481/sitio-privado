async function getData() {
    const response = await fetch('fotos.json')
    const data = await response.json()
    return data
}

async function rellenarFotos(fotos) {
    const main = document.getElementById('main')
    main.innerText = ''

    for (const foto of fotos){
        const img = document.createElement('img')
        img.src = foto.src
        img.alt = foto.alt
        img.title = foto.alt
        main.appendChild(img)
    }
}

async function main() {
    const datos = await getData()
    const categorias = Object.keys(datos)
    const ul = document.getElementById('nav-links')
    ul.innerText = ''

    for(const categoria of categorias) {
        const li = document.createElement('li')
        li.id = categoria
        li.innerText = categoria
        li.addEventListener('click', () => rellenarFotos(datos[categoria]))
        ul.appendChild(li)
    }

}

main()