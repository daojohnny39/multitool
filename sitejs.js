// testing
function querySelectorExample() {
    document.querySelector('header').innerHTML = 'Why\'d you click that?';
}
// -------------------------------

function functionNotFullyImplemented() {
    alert("Function not fully implemented yet!");
}

function functionNotYetImplemented() {
    alert("Function not yet implemented");
}

function workInProgress() {
    alert("This page is a continuous work in progress project!");
}

// ---------------------- COUNTER FUNCTIONS ------------------------
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
    else if (counterName === 2) {
        gridShotCounter--;
        document.getElementById('gridShotCounter').innerHTML = 'Counter: ' + gridShotCounter;
    }
}

function aimResetCounter(counterName) {
    if (counterName === 1) {
        sixShotCounter = 0;
        document.getElementById('sixShotCounter').innerHTML = 'Counter: ' + sixShotCounter;
    }
    else if (counterName === 2) {
        gridShotCounter = 0;
        document.getElementById('gridShotCounter').innerHTML = 'Counter: ' + gridShotCounter;
    }
}
// ----------------------------------------------------------------

