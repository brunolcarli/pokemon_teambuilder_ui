// const url = 'https://poketeambuilder.brunolcarli.repl.co/graphql/';
const url = 'https://c95a9f64-4584-4aa1-9335-7f460ff069d3-00-3c1knpave5haj.spock.replit.dev/';


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