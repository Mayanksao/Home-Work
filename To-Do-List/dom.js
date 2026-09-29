//Getting access

let ul_list_2 = document.getElementById("ul-list-2");
let add_btn = document.getElementById("add-btn");
let list_items = document.getElementById("ul-list");
let search_btn = document.getElementById("search-btn");

//Events
//Add event

add_btn.addEventListener("click", function (event) {
  event.preventDefault();
  let value = document.getElementById("task-btn").value;
  if (value === "") {
    alert("Give some name!!");
    return;
  }
  //console.log(value);

  // Add new list
  let new_list = document.createElement("li");
  new_list.className = "items border-2";
  new_list.appendChild(document.createTextNode(value + " "));
  list_items.appendChild(new_list);
  // console.log(new_list);

  //Add button in list
  let add_btn = document.createElement("button");
  add_btn.className = "border-2 bg-red-600 delete";
  add_btn.innerText = "X";
  new_list.appendChild(add_btn);

  document.getElementById("task-btn").value = "";
});

//Delete Event

list_items.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      list_items.removeChild(e.target.parentElement);
    }
  }
});

// Search event

search_btn.addEventListener("click", function (ev) {
  let text = list_items.innerText;
  let spl = text.split("\n");

  // console.log(spl);

  for (let i = 0; i <= spl.length; i++) {
    if (spl[i] == search_btn.value) {
      list_items.remove(list_items.removeChild);
      // console.log(list_items);

      let new_ul_list = document.createElement("li");
      new_ul_list.className = "items border-2";
      new_ul_list.appendChild(document.createTextNode(search_btn.value));
      ul_list_2.appendChild(new_ul_list);

      let add_btn = document.createElement("button");
      add_btn.className = "border-2 bg-red-600 delete";
      add_btn.innerText = "X";
      new_ul_list.appendChild(add_btn);
    }
  }
});

ul_list_2.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      ul_list_2.removeChild(e.target.parentElement);
    }
  }
});