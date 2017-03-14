
var list = document.querySelector("ul");
var showButton = document.querySelector("button");
function removeItem(ev) {
    var itemClick = ev.target;
    list.removeChild(itemClick);
}
function addList() {
	"use strict"
    var addItem = prompt("Please enter a new item!");
    if (addItem !== "") {
        var item = document.createElement("li");
        item.appendChild(document.createTextNode(addItem));
        list.appendChild(item);
    }
}


list.addEventListener("click", removeItem, false);
showButton.addEventListener("click", addList, false);