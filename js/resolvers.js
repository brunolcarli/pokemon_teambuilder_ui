function get_card_html(name, item, moveset){
    let query = name.toLowerCase().replace(' ', '-');
    if (query.startsWith('urshifu')){
        query = 'urshifu';
    }
    else if (query.startsWith('ogerpon')){
        query = 'ogerpon';
    }
    else if (query.startsWith('ursaluna')){
        query = 'ursaluna';
    }
    let card = `<div class="col">
                <section class="card" style="width: 15rem;">
                <img src="https://img.pokemondb.net/sprites/scarlet-violet/normal/${query}.png" alt="${name}" width="120" align="center">
                <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">${item}</p>
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">${moveset[0]}</li>
                <li class="list-group-item">${moveset[1]}</li>
                <li class="list-group-item">${moveset[2]}</li>
                <li class="list-group-item">${moveset[3]}</li>
                </ul>
            </section></div>`
    return card

}



function generate_team(){

    let seed = document.getElementById('SeedPokemon').value;
    if (!seed){
        alert("First Pokemon is required, please insert a Pokemon name");
        return
    }
    generate_vgc_team_mutation(seed).then(team => {
        let div = document.getElementById('TeamResult');
        div.innerHTML = '';

        for (mon in team['members']){
            div.innerHTML += get_card_html(
                team['members'][mon]['name'],
                team['members'][mon]['holdItem'],
                team['members'][mon]['moveset']
            )
        }


    })

}