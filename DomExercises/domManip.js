document.getElementById("container");
document.querySelector("#container")
document.getElementsByClassName("second")
document.querySelector("ol .third");
// let foundDiv = document.querySelector("#container");
// foundDiv.innerText = "Hello";
// let footer = document.querySelector(".footer");
// footer.classList.add("main");
let footer = document.querySelector(".footer");
footer.classList.remove("main");
let newLiElement = document.createElement("li");
newLiElement.innerText = "four";
let list = document.querySelector("ul");
list.appendChild(newLiElement);

const greenList = document.querySelectorAll("ol");
for(let greenListItem of greenList){
    greenListItem.style.color = "green";
}

const lookDiv = document.querySelector("div.footer");

lookDiv.remove();







