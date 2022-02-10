const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
    document.getElementById('fetch-all').addEventListener('click', function (event) {
        charactersAPI
            .getFullList()
            .then(response => {
                let text = ''
                response.data.forEach(eachCharacter => text += `
                    <div class="character-info">
                    <div class="name">${eachCharacter.name}</div>
                    <div class="occupation">${eachCharacter.occupation}</div>
                    <div class="cartoon">${eachCharacter.cartoon}</div>
                    <div class="weapon">${eachCharacter.weapon}</div>
                    </div>
                `)
                document.querySelector('.character-info').innerHTML = text
            })
            .catch(err => console.log(err))
    });

    document.getElementById('fetch-one').addEventListener('click', function (event) {
        event.preventDefault()

    });

    document.getElementById('delete-one').addEventListener('click', function (event) {

        event.preventDefault()

    });

    document.getElementById('edit-character-form').addEventListener('submit', function (event) {

        event.preventDefault()

    });

    document.getElementById('new-character-form').addEventListener('submit', function (event) {

        event.preventDefault()

        const inputs = document.querySelectorAll('input')

        const characterData = {
            name: inputs[0].value,
            occupation: inputs[1].value,
            cartoon: inputs[2].value,
            weapon: inputs[3].value
        }
    
        charactersAPI
            .getOneRegister(characterData)
            .then(response => {
                document.querySelector('#new-character-form').reset()
                getFullList()
            })
            .catch(err => console.log(err))

    });
});
