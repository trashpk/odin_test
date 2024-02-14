const container = document.querySelector('#container');

const para = document.createElement('p');
para.textContent = "Hey I'm red!";
para.style.color = "red";
container.appendChild(para);

const h3 = document.createElement('h3');
h3.textContent = "I'm a blue h3!";
h3.style.color = "blue";
container.appendChild(h3);

const div = document.createElement('div');
div.style.backgroundColor = 'pink';
div.style.border = 'solid 1px black';
const p =  document.createElement('p');
const h1 = document.createElement('h1');
p.innerText = "ME TOO!";
h1.innerText = "I'm in a div";
div.appendChild(h1);
div.appendChild(p);
container.appendChild(div);


const btn = document.querySelector('#btn')

btn.addEventListener('click', function (e) {
    console.log(e);
  });

  btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });
  
  