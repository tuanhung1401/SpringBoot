// Thêm 3 thẻ li mới
let newItem1 = document.createElement("li");
newItem1.appendChild(document.createTextNode("Item 8"));
list.appendChild(newItem1);

let newItem2 = document.createElement("li");
newItem2.appendChild(document.createTextNode("Item 9"));
list.appendChild(newItem2);

let newItem3 = document.createElement("li");
newItem3.appendChild(document.createTextNode("Item 10"));
list.appendChild(newItem3);

// Sửa màu chữ cho thẻ li 1
list.childNodes[1].style.color = "red";

// Sửa background cho thẻ li 3
list.childNodes[5].style.backgroundColor = "blue";

// Xóa thẻ li 4
list.childNodes[7].remove();

// Thêm thẻ li mới
let newItem4 = document.createElement("li");
newItem4.appendChild(document.createTextNode("Item 11"));
list.insertBefore(newItem4, list.childNodes[7]);

// Thêm nút add
let input = document.createElement("input");
input.type = "text";
document.body.appendChild(input);
let buttonAdd = document.createElement("button");
buttonAdd.textContent = "Add";
buttonAdd.addEventListener("click", function() {
  let li = document.createElement("li");
  li.textContent = input.value;
  document.getElementById("list").appendChild(li);
});
document.body.appendChild(buttonAdd);

//Thêm nút remove
let buttonRemove = document.createElement("button");
buttonRemove.textContent = "Remove";
buttonRemove.addEventListener("click", function() {
  let liToRemove = document.getElementById("list").lastChild;
  liToRemove.parentNode.removeChild(liToRemove);
});
document.body.appendChild(buttonRemove);

//Thêm nút hide
let buttonHide = document.createElement("button");
buttonHide.textContent = "Hide";
buttonHide.addEventListener("click", function() {
  let ul = document.getElementById("list");
  if (ul.style.display !== "none") {
    ul.style.display = "none";
    buttonHide.textContent = "Show";
  } else {
    ul.style.display = "block";
    buttonHide.textContent = "Hide";
  }
});
document.body.insertBefore(buttonHide, document.getElementById("list"));



