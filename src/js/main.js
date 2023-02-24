const randomUserBtn = document.querySelector(".randomNameBtn");
let userList = ["Hero", "Panter", "bubbel", "DR.EVIL", "Mario", "KING", "Luffy", "Zoro", "Superman"];

randomUserBtn.addEventListener("click", giveUserName);


function giveUserName() {
	document.querySelector(".randomName").innerHTML =
	userList[Math.floor(Math.random() * userList.length)];
   };



