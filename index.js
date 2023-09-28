// id selector 

// const h2 = document.getElementById('parent-one');
// h2.style.color = 'green'
// h2.style.fontSize = '48px';
// h2.innerText = 'change text';


// class name selector 

// const allTags = document.getElementsByClassName('item');
// // console.log(allTags);
// for (const item of allTags) {
//     // console.log(item);
//     item.style.color = 'white';
//     item.style.backgroundColor = 'black';
// }

// tagName selector 

// const tagsName = document.getElementsByTagName('li');
// for (let i = 0; i < tagsName.length; i++) {
//     let element = tagsName[i];
//     console.log(element);
//     element.style.color = 'blue';
//     element.style.fontSize = '35px';
// }



// query Selector 

//  single selector

// const parentOne = document.querySelector('#parent-one');
// console.log(parentOne);

//  ALL selector

// const parentOne = document.querySelectorAll('.item');
// // console.log(parentOne);
// for (const item of parentOne) {
//     // console.log(item);
//     item.style.color = 'red'; 
// }

// const item = document.getElementsByClassName('grandparent');
// console.log(item[0]);
// const parent  = document.querySelector('.grandparent');
// const children = parent.children;
// console.log(children);


// const gf = document.querySelector('.grandparent')

// const children = gf.querySelectorAll('.item');
// console.log(children);

// const children = document.querySelector('.item')
// const parent = children.parentElement.parentElement.parentElement;

// console.log(parent);

// ch to gp 

// const children = document.querySelector('.item') ;

// const gp = children.closest('.grandparent')
// console.log(gp);

// baba and chacha 

// const parent1 = document.getElementById('parent-one');
// const chacha = parent1.nextElementSibling;
// console.log(chacha);

// const chacha = document.getElementById('parent-two').previousElementSibling;

// console.log(chacha);


// const h3 = document.createElement("h3");
// h3.innerText = 'made by js';

const container = document.querySelector('.grandparent');
const div = document.createElement("div")
div.innerHTML = `
        <h1>hello</h1>
        <h3>hello</h3>
        <h1>hello</h1>
`
div.className = 'common-class';
let h1 = document.getElementById('parent-one')
// console.log(h3);
// container.appendChild(div)
container.insertBefore(div,h1);



