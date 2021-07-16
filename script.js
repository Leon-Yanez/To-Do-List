//Element ansprechen
// Button ansprechen
//in your do dos einfügen..

let all = [];
let allToDos = [];
let done = [];
let open = [];

let yourToDos = document.querySelector("#yourToDos");
let yourAddButton = document.querySelector("#yourAddButton");

let listToPush = document.querySelector("#todo-list");

let newListItem = document.createElement("li");

yourAddButton.addEventListener("click", function () {
  newListItem = document.createElement("li");
  newListItem.classList.add("paragrapf-styling");
  newListItem.innerText = yourToDos.value;
  listToPush.appendChild(newListItem);

  newInput = document.createElement("input");
  newInput.type = "checkbox";
  newListItem.appendChild(newInput);

  yourToDos.value = "";
  all.push(yourToDos);
  console.log(all);
});

function getValue() {
  var all = document.getElementById("all");
  if (all.checked) {
    all.push(all.value);
  }
  var open = document.getElementById("open");
  if (open.checked === false) {
    open.push(open.value);
  }
  var home = document.getElementById("done");
  if (home.checked) {
    ele.push(home.value);
  }
}
