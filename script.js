const url = "https://pokeapi.co/api/v2/pokemon/?limit=150"
const genUrl = "https://pokeapi.co/api/v2/version/?limit=30"
const urlBerry = "https://pokeapi.co/api/v2/berry/?limit=64"
const ul = document.querySelector('ul')
const h1 = document.querySelector('h1')

const pk = document.querySelector('#pk');
const gm = document.querySelector('#gm');
const br = document.querySelector('#br');

const allPkmn = document.querySelector('#allpkmn');
const allGames = document.querySelector('#allgames');
const allBerries = document.querySelector('#allberries');
// Fetching game names and adding to html

gm.addEventListener('click', function(e) { 
fetch(genUrl)
    .then(res => res.json())
    .then(res => {
        let gen = res.results;
        let ul1 = document.querySelector('.content')
        let a1 = document.createElement('li');

        // a1.setAttribute('class', 'listEl');
        // a1.innerText = "Games";
        // ul1.appendChild(a1);

        // let allGames = document.createElement('ul');
        // allGames.setAttribute('class', 'newL');
        // gm.appendChild(allGames);

        for(let i = 0; i < gen.length; i++) {
            
            let gList = document.createElement('li');
            gList.setAttribute('class', 'names');
            gList.innerText = gen[i].name;
            allGames.appendChild(gList);
        }
        
        // gm.addEventListener('click', function(e) {
        //     e.preventDefault();
        //     console.log("click it")
        
        
        
        // });
    })
    .catch(err => console.log(err))

        if(allGames.className == "newL") {
                allGames.className = "show";
            } else {
                allGames.className = "newL";
            }
})




// Fetching pokemon names and adding to html
fetch(url)
.then(res => res.json())
.then(res => {
    let pkmn = res.results;
    let ul1 = document.querySelector('.content')
    let a1 = document.createElement('li');

    // a1.setAttribute('class', 'listEl');
    // a1.innerText = "Pokemon";
    // ul1.appendChild(a1);

    // let allPkmn = document.createElement('ul');
    // allPkmn.setAttribute('class', 'newL');
    // pk.appendChild(allPkmn);

    for(let i = 0; i < pkmn.length; i++) {
        
        let pList = document.createElement('li');
        pList.setAttribute('class', 'names');
        pList.innerText = pkmn[i].name;
        allPkmn.appendChild(pList);
    }

    pk.addEventListener('click', function(e) {
        e.preventDefault();
        console.log("click it")
    
    
        if(allPkmn.className == "newL") {
            allPkmn.className = "show";
        } else {
            allPkmn.className = "newL";
        }
    });
})
.catch(err => console.log(err))


// Fetching berry data and adding to html
fetch(urlBerry)
.then(res => res.json())
.then(res => {

    let berry = res.results;
    let ul1 = document.querySelector('.content')
    let a1 = document.createElement('li');

    a1.setAttribute('class', 'listEl');
    a1.innerText = "Berries";
    ul1.appendChild(a1);

    let allBerries = document.createElement('ul');
    allBerries.setAttribute('class', 'newL');
    a1.appendChild(allBerries);

    for(let i = 0; i < berry.length; i++) {
        
        let bList = document.createElement('li');
        bList.setAttribute('class', 'names');
        bList.innerText = berry[i].name;
        allBerries.appendChild(bList);
    }

    a1.addEventListener('click', function(e) {
        e.preventDefault();
        console.log("click it")
    
    
        if(allBerries.className == "newL") {
            allBerries.className = "show";
        } else {
            allBerries.className = "newL";
        }
    });
})
.catch(err => console.log(err))