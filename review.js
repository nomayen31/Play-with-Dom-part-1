document.querySelector('#submit-btn').addEventListener('click',function(){
    const textAria = document.getElementById('text-area');
    const ariaValue = textAria.value;
    
    const  p = document.createElement('p');
    p.innerText = ariaValue;


    const container = document.querySelector('#review');

    container.appendChild(p);

    textAria.value = ''

    

});

textAria.addEventListener('keyup',function(e){
    if (e.key === 'Enter') {
        console.log('enter key passs');
        const textAria = document.getElementById('text-area');
    const ariaValue = textAria.value;
    
    const  p = document.createElement('p');
    p.innerText = ariaValue;


    const container = document.querySelector('#review');

    container.appendChild(p);

    textAria.value = ''
    }
})