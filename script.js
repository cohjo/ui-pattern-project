const url = "https://pokeapi.co/api/v2/pokemon/?limit=150"
const genUrl = "https://pokeapi.co/api/v2/version/?limit=30"
const urlBerry = "https://pokeapi.co/api/v2/berry/?limit=64"
const ul = document.querySelector('ul')
const h1 = document.querySelector('h1')

// Fetching game names and adding to html
fetch(genUrl)
    .then(res => res.json())
    .then(res => {
        console.log(res.results)
        let gen = res.results;
        let ul1 = document.querySelector('.content')
        let a1 = document.createElement('li');
        a1.setAttribute('class', 'games');
        a1.innerText = "Games";
        ul1.appendChild(a1);
        let allGames = document.createElement('ul');
        allGames.setAttribute('class', 'gamelist');
        a1.appendChild(allGames);
        for(let i = 0; i < gen.length; i++) {
            console.log(gen[i].name);
            let gList = document.createElement('li');
            gList.setAttribute('class', 'gnames');
            gList.innerText = gen[i].name;
            allGames.appendChild(gList);
        }
    })
    .catch(err => console.log(err))


// Fetching pokemon names and adding to html
fetch(url)
.then(res => res.json())
.then(res => {
    console.log(res.results)
    let pkmn = res.results;
    let ul1 = document.querySelector('.content')
    let a1 = document.createElement('li');
    a1.setAttribute('class', 'pokemon');
    a1.innerText = "Pokemon";
    ul1.appendChild(a1);
    let allPkmn = document.createElement('ul');
    allPkmn.setAttribute('class', 'pkmnlist');
    a1.appendChild(allPkmn);
    for(let i = 0; i < pkmn.length; i++) {
        console.log(pkmn[i].name);
        let pList = document.createElement('li');
        pList.setAttribute('class', 'pnames');
        pList.innerText = pkmn[i].name;
        allPkmn.appendChild(pList);
    }
})
.catch(err => console.log(err))


// Fetching berry data and adding to html
fetch(urlBerry)
.then(res => res.json())
.then(res => {
    console.log(res.results)
    let berry = res.results;
    let ul1 = document.querySelector('.content')
    let a1 = document.createElement('li');
    a1.setAttribute('class', 'berries');
    a1.innerText = "Berries";
    ul1.appendChild(a1);
    let allBerries = document.createElement('ul');
    allBerries.setAttribute('class', 'brylist');
    a1.appendChild(allBerries);
    for(let i = 0; i < berry.length; i++) {
        console.log(berry[i].name);
        let bList = document.createElement('li');
        bList.setAttribute('class', 'bnames');
        bList.innerText = berry[i].name;
        allBerries.appendChild(bList);
    }
})
.catch(err => console.log(err))