let start_func = document.getElementById("div-1");
let end_func = document.getElementById("div-2");
let id;

// start

start_func.addEventListener("click", function (e) {
  id = setInterval(() => {
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
  }, 1000);
});

//End

end_func.addEventListener("click", function (e) {
  clearInterval(id);
  // document.body.style.backgroundColor = "#212121";
});