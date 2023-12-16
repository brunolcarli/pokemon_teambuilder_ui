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
                <section class="card" style="width: 10rem;">
                <img src="https://img.pokemondb.net/sprites/scarlet-violet/normal/${query}.png" alt="${name}" width="100" align="center">
                <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">${item}</p>
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item"><small>${moveset[0]}</small></li>
                <li class="list-group-item"><small>${moveset[1]}</small></li>
                <li class="list-group-item"><small>${moveset[2]}</small></li>
                <li class="list-group-item"><small>${moveset[3]}</small></li>
                </ul>
            </section></div><br />`
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