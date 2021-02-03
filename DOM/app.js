document.addEventListener("DOMContentLoaded", function () {
  const btn = document.createElement("button");
  const btnText = document.createTextNode("Click Me!");

  btn.appendChild(btnText);
  document.body.appendChild(btn);

  btn.addEventListener("click", function () {
    alert("Hello There.");
  });

  const submitBtn = document.getElementById("submit");
  const textInput = document.getElementById("textInput");
  submitBtn.addEventListener("click", function () {
    alert(textInput.value);
  });

  const hover = document.getElementById("hover");
  hover.addEventListener("mouseover", function () {
    this.style.backgroundColor = "red";
    this.style.height = "100px";
    this.style.width = "100px";
  });
  hover.addEventListener("mouseout", function () {
    this.style.backgroundColor = "transparent";
    this.style.height = "0px";
    this.style.width = "0px";
  });

  const para = document.getElementById("para");
  para.addEventListener("click", function () {
    let num1 = Math.floor(Math.random() * 255);
    let num2 = Math.floor(Math.random() * 255);
    let num3 = Math.floor(Math.random() * 255);
    para.style.color = `rgb(${num1}, ${num2}, ${num3})`;
  });

  const addSpan = document.getElementById("addSpan");
  const emptyDiv = document.getElementById("empty");
  const myName = document.createTextNode("Max Ryan");

  addSpan.addEventListener("click", function () {
    emptyDiv.appendChild(myName);
  });

  const friendsArray = [
    "tom",
    "jan",
    "tobey",
    "keeth",
    "doople",
    "saxon",
    "tim",
    "tony",
    "jimmy",
    "yulisa",
  ];
  const addBtn = document.getElementById("addFriend");
  const ulFriends = document.getElementById("friends");
  addBtn.addEventListener("click", function () {
    for (i = 0; i < friendsArray.length; i++) {
      let li = document.body.createElement("li");
      let liText = document.createTextNode([i]);
      li.appendChild(liText);
      ulFriends.appendChild(li);
    }
  });
});
