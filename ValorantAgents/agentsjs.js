document.addEventListener('DOMContentLoaded', function() {

    fetch('https://valorant-api.com/v1/agents')
    .then(response => {return response.json()})
    .then (data => {
        //console.log(data);
        const agent = data.data[4];
        const name = agent.displayName;
        const desc = agent.description;
        document.querySelector('header').innerHTML = name;
        document.querySelector('h1').innerHTML = desc;
    })
    .catch(error => {
        console.log('Error', error);
    })

    
});