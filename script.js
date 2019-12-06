const url = "https://pokeapi.co/api/v2/pokemon/?limit=150"
const genUrl = "https://pokeapi.co/api/v2/version/?limit=30"
const urlBerry = "https://pokeapi.co/api/v2/berry/?limit=64"
const pk = document.querySelector('#pk');
const gm = document.querySelector('#gm');
const br = document.querySelector('#br');
const allPkmn = document.querySelector('#allpkmn');
const allGames = document.querySelector('#allgames');
const allBerries = document.querySelector('#allberries');
// Fetching game names and adding to html

gm.addEventListener('click', function(e) { 
    e.preventDefault();
    fetch(genUrl)
    .then(res => res.json())
    .then(res => {
        let gen = res.results;
        for(let i = 0; i < gen.length; i++) {
            
            let gList = document.createElement('li');
            gList.setAttribute('class', 'names');
            gList.innerText = gen[i].name;
            allGames.appendChild(gList);
        }
    })
    .catch(err => console.log(err))

    if(allGames.className == "newL") {
        allGames.className = "show";
        allBerries.className = "newL";
        allPkmn.className = "newL";
    } else {
        allGames.className = "newL";
    }
})

// Fetching pokemon names and adding to html
pk.addEventListener('click', function(e) {
    e.preventDefault();
    fetch(url)
    .then(res => res.json())
    .then(res => {
        let pkmn = res.results;
        for(let i = 0; i < pkmn.length; i++) {
            
            let pList = document.createElement('li');
            pList.setAttribute('class', 'names');
            pList.innerText = pkmn[i].name;
            allPkmn.appendChild(pList);
        }  
        })
    .catch(err => console.log(err))
    if(allPkmn.className == "newL") {
        allPkmn.className = "show";
        allGames.className = "newL";
        allBerries.className = "newL";
    } else {
        allPkmn.className = "newL";
    }
})

// Fetching berry data and adding to html
br.addEventListener('click', function(e) { 
    e.preventDefault();
    fetch(urlBerry)
    .then(res => res.json())
    .then(res => {

        let berry = res.results;
        for(let i = 0; i < berry.length; i++) {
            
            let bList = document.createElement('li');
            bList.setAttribute('class', 'names');
            bList.innerText = berry[i].name;
            allBerries.appendChild(bList);
        }
    })
    .catch(err => console.log(err))
    if(allBerries.className == "newL") {
        allBerries.className = "show";
        allGames.className = "newL";
        allPkmn.className = "newL";
    } else {
        allBerries.className = "newL";
    }
});
