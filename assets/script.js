let button = document.querySelector('button');

let randNum = function() {
  let num = Math.floor(Math.random() * 100);
  document.getElementById("number").innerHTML = num;

};

button.addEventListener('click', randNum);