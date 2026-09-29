let person_1 = document.getElementById("person-1");
let person_2 = document.getElementById("person-2");
let rules_btn = document.getElementById("rules-btn");

let div_1 = document.getElementById("div1");
let div_2 = document.getElementById("div2");
let ul_1 = document.getElementById("ul-1");
let ul_2 = document.getElementById("ul-2");

let sum1 = 0;
let arr1 = [];

let sum2 = 0;
let arr2 = [];

person_1.addEventListener("click", function (e) {
  let ran = Math.floor(Math.random() * 7);
  arr1.push(ran);

  let new_li = document.createElement("li");
  new_li.id = "num-1";
  new_li.appendChild(document.createTextNode(ran));

  for (let i = 0; i < arr1.length; i++) {
    sum1 += arr1[i];
  }

  if (sum1 < 20) {
    ul_1.appendChild(new_li);
  } else if (sum1 > 20) {
    arr1.pop(ran);
    // sum1 -= arr1[arr1.length-1];
  } else if (sum1 === 20) {
    ul_1.appendChild(new_li);
    alert("Player-1 have won the Game!!");
  }

  // console.log(arr1);
  // console.log(sum1);

  sum1 = 0;
});

person_2.addEventListener("click", function (e) {
  let ran = Math.floor(Math.random() * 7);
  arr2.push(ran);

  for (let i = 0; i < arr2.length; i++) {
    sum2 += arr2[i];
  }

  let new_li = document.createElement("li");
  new_li.id = "num-2";
  new_li.appendChild(document.createTextNode(ran));

  if (sum2 < 20) {
    ul_2.appendChild(new_li);
  } else if (sum2 > 20) {
    arr2.pop(ran);
    // sum1 -= arr1[arr1.length-1];
  } else if (sum2 === 20) {
    ul_2.appendChild(new_li);
    alert("Player-2 have won the Game!!");
  }

  // console.log(arr2);
  // console.log(sum2);

  sum2 = 0;
});

rules_btn.addEventListener("focus", function (e) {
  let new_div = document.createElement("div");
  new_div.id = "div";

  let add_btn = document.createElement("button");
  add_btn.className = "div";
  add_btn.innerText = "X";
  new_div.appendChild(add_btn);

  new_div.appendChild(document.createTextNode("Instructions: "));
  new_div.appendChild(document.createTextNode("1.Value 0 to 6 number "));
  new_div.appendChild(document.createTextNode("2.Winner total score = 20"));
  rules_btn.appendChild(new_div);

  add_btn.addEventListener("click", function (ev) {
    rules_btn.removeChild(new_div);
  });
});