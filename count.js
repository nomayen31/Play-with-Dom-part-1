let count = 0; 

function clickMe() {
    const element = document.getElementById('count');
    count += 1;
    element.innerText = count;

}

const btn = document.getElementById('minus-btn');

btn.addEventListener('click', function(){
    const element = document.getElementById('count');
    count -= 1;
    element.innerText = count;


})