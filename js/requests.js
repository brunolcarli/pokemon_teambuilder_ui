const url = 'https://poketeambuilder.brunolcarli.repl.co/graphql/';


function status(response) {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response)
    } else {
        return Promise.reject(new Error(response.statusText))
    }
};

function json(response) {
    return response.json()
};

function get_request_options(payload) {
    return {
        method: 'POST',
        headers: {
            cookie: 'csrftoken=pgrjljBkHdbd9hySxmJaFUlewPM1IdYJ09nZstz9N6bCf8pfuctT4ftl2girhj6t',
            'Content-Type': 'application/json'
        },
        body: payload
    };
};



function generate_vgc_team_mutation(seed) {
    let payload = `{"query": "mutation{ generateVgcTeam(input: {seed: [\\\"${seed}\\\"] }){ team{members{name holdItem moveset}} } }"}`;
    let options = get_request_options(payload);
    return fetch(url, options)
        .then(json)
        .then(response => {
            return response['data']['generateVgcTeam']['team'];
        })
        .catch(err => {
            console.error(err);
        });
};