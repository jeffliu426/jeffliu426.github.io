var myButton = document.querySelector('.change-user');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Welcome to my website, ' + myName + "!";
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Welcome to my website, ' + storedName + "!";
}

myButton.onclick = function() {
  setUserName();
}

var aboutMe = document.querySelector('.about-me');
var index = 0;

function changeText() {
	if (index == 0) {
		aboutMe.innerHTML = 'Coder';
		index += 1;
	}
	else if (index == 1) {
		aboutMe.innerHTML = 'Hacker';
		index += 1;
	}
	else {
		aboutMe.innerHTML = "About Me";
		index = 0;
	}

}

aboutMe.onclick = function() {
	changeText();
}



