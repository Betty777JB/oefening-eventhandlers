// Part 1 ===========================================================
function doSomething () {
    alert('button clicked');
}

const btnAlert = document.querySelector('.btn-alert');
btnAlert.addEventListener('click', doSomething);



// Part 2 ===========================================================
function changeBG () {
    document.querySelector('body').classList.add('red-background')
}

const btnChangeBG = document.querySelector('.btn-changeBG');
btnChangeBG.addEventListener('click', changeBG);



// Part 3 ===========================================================
function toggleBG () {
    // document.querySelector('body').classList.toggle('red-background')
    // allebei mogelijk
    document.body.classList.toggle('red-background')
}

const btnToggleBG = document.querySelector('.btn-toggleBG');
btnToggleBG.addEventListener('click', toggleBG);
