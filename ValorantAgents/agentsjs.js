document.addEventListener('DOMContentLoaded', function() {

    fetch('https://valorant-api.com/v1/agents')
    .then(response => {return response.json()})
    .then (data => {
        //console.log(data);
        const agent = data.data[0];
        const name = agent.displayName;
        document.querySelector('header').innerHTML = name;
    })
    .catch(error => {
        console.log('Error', error);
    })
});