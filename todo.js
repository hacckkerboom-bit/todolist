let task = document.querySelector('#task');
let addBtn = document.querySelector('.add-Btn');
let outecontainer = document.querySelector('.items-maincontainer');

let lists = [];

function add() {
  let values = task.value.trim();

  if (values === '') return;

  lists.push(values);
  task.value = '';
  render();
}

function render() {
  outecontainer.innerHTML = "";

  lists.forEach(function (item, index) {
    let divElem = document.createElement('div');
    divElem.classList.add('item');

    divElem.innerHTML = `
      <h2>${item}</h2>
      <button class="delete-Btn">❌</button>
    `;

    let btn = divElem.querySelector('.delete-Btn');

    btn.addEventListener('click', function () {
      del(index);
    });

    outecontainer.appendChild(divElem);
  });
}

function del(index) {
  lists.splice(index, 1);   // remove from array
  render();                // redraw UI
}

// event triggers
addBtn.addEventListener('click', add);

task.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    add();
  }
});

render();
