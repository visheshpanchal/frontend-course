let cc = document.querySelector('header .container');
let cc1 = document.querySelector('header h1');
let element = document.createElement('h3');

element.innerHTML = 'HEllo';

cc.insertBefore(element,cc1);

let ul = document.getElementById('items');



let ele = document.createElement('h3');
ele.innerHTML = 'HEllo';
ul.insertBefore(ele,ul.children[0]);

// How to use insertBefore
// First take upper area and below area
// ul is upper area 