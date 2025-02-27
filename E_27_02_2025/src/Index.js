

const url = 'https://pokeapi.co/api/v2/pokemon';
const form = document.querySelector('#form-pokemon');
const input = document.querySelector('#inputPokemon');
const container = document.querySelector('#container');

form.addEventListener('click', () => {

    
    const pokemon = input.value;
    req(`${url}/${pokemon}`);
}
);

let req = (url) => {
    fetch(url)
    .then(response => {
        return response.json()
    }
    )
    .then(data => {
        container.innerHTML = buildString(data);
    })
    .catch(error => {
        console.log(error)
    });
}

let buildString = (user) => {
    return `
    <h1>${user.name}</h1>
    <p>${user.url}</p>
    `;
}
//
//
//
//



