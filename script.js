//Element ansprechen
// Button ansprechen
//in your do dos einfügen..
let arr = [];

let yourToDos = document.querySelector("#yourToDos");
let yourAddButton = document.querySelector("#yourAddButton");

let listToPush = document.querySelector("#todo-list");

let newListItem = document.createElement("li");

yourAddButton.addEventListener("click", function () {
  newListItem = document.createElement("li");
  newListItem.classList.add("paragrapf-styling");
  newListItem.innerText = yourToDos.value;
  listToPush.appendChild(newListItem);

  yourToDos.value = "";
  arr.push(yourToDos);
  console.log(arr);
});

newListItem.addEventListener("click", function () {
  newListItem.style.textDecoration = "line-through";
  console.log();
});
