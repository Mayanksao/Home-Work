let add_btn = document.getElementById("add-btn");
let list_body = document.getElementById("list-body");
let book_name = document.getElementById("book-name");
let author = document.getElementById("author-name");
let isbn = document.getElementById("isbn");

//Button functionality
add_btn.addEventListener("click", function (event) {
  event.preventDefault();
  if (book_name.value === "" || author.value === "" || isbn.value === "") {
    alert("Enter some values!!!");
  } else {
    local_Storage();
    displayRow();
  }
});

//Creating of rows
function displayRow() {
  let tr = document.createElement("tr");
  let delete_btn = document.createElement("button");
  delete_btn.innerText = "Delete";

  tr.innerHTML = `
  <td>${book_name.value}</td>
  <td>${author.value}</td>
  <td>${isbn.value}</td>
  `;

  tr.appendChild(delete_btn);
  list_body.appendChild(tr);
  
  delete_btn.addEventListener("click", function (e) {
    list_body.removeChild(tr);
    // localStorage.removeItem();
  });
  
    book_name.value = "";
    author.value = "";
    isbn.value = "";
}

//Local Storage
function local_Storage() {
  localStorage.setItem(`${book_name.value} by ${author.value}`, isbn.value);
}