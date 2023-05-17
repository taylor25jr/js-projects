

const value = document.querySelector('#value');
const incrementBtn = document.querySelector('#btn-increase');
const decrementBtn = document.querySelector('#btn-decrease');
const resetBtn = document.querySelector('#btn-reset');





let count = 0;
incrementBtn.disabled = false;
decrementBtn.disabled = false;

function increment(){

        count += 1;
        value.textContent = count

    if(count === 50){  alert('has llegado al maximo');

    incrementBtn.disabled = true;
    decrementBtn.disabled = false;
    
}
}

function decrease () {
    count -= 1;
    value.textContent = count;
    
    if(count > 0){ decrementBtn.disabled = false;
    incrementBtn.disabled = false }

    if(count === 0 ){ alert('ya no puedes disminuir mas');
     decrementBtn.disabled = true;
     incrementBtn.disabled = false;
}}

function reset () {
    count = 0;
    value.textContent = count;
    
}


incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrease);
resetBtn.addEventListener('click', reset);










   



        
       