function querySelectorExample() {
    document.querySelector('h1').innerHTML = 'Die.';
}

function functionNotFullyImplemented() {
    alert("Function not fully implemented yet!");
}

function functionNotYetImplemented() {
    alert("Function not yet implemented");
}

let sixShotCounter = 0;
let gridShotCounter = 0;
function aimIncrementCounter(counterName) {
    if (counterName === 1) {
        sixShotCounter++;
        document.getElementById('sixShotCounter').innerHTML = 'Counter: ' + sixShotCounter;
    }
    else if (counterName === 2) {
        gridShotCounter++;
        document.getElementById('gridShotCounter').innerHTML = 'Counter: ' + gridShotCounter;
    }
}

function aimDecrementCounter(counterName) {
    if (counterName === 1) {
        sixShotCounter--;
        document.getElementById('sixShotCounter').innerHTML = 'Counter: ' + sixShotCounter;
    }
}