//Access
let easy_mode = document.getElementById("easy-mode-btn");
let med_mode = document.getElementById("med-mode-btn");
let hard_mode = document.getElementById("hard-mode-btn");

let ran_word = document.getElementById("random-word");
let input_word = document.getElementById("input-txt");

let score_txt = document.getElementById("score");
let time_txt = document.getElementById("timer");
let try_again_btn = document.getElementById("try-again");

let score = 0;
let time = 12;

//Words Array
const easyWords = [
  "apple",
  "house",
  "water",
  "table",
  "chair",
  "school",
  "book",
  "phone",
  "car",
  "dog",
  "cat",
  "tree",
  "sun",
  "moon",
  "star",
  "fish",
  "bird",
  "milk",
  "bread",
  "door",
  "window",
  "road",
  "shoe",
  "shirt",
  "hand",
  "head",
  "face",
  "eye",
  "nose",
  "ear",
  "food",
  "cake",
  "ball",
  "game",
  "music",
  "friend",
  "family",
  "home",
  "park",
  "river",
  "cloud",
  "rain",
  "snow",
  "fire",
  "light",
  "chair",
  "clock",
  "paper",
  "pencil",
];

const mediumWords = [
  "adventure",
  "beautiful",
  "calendar",
  "computer",
  "elephant",
  "football",
  "hospital",
  "journey",
  "language",
  "mountain",
  "notebook",
  "picture",
  "question",
  "rainbow",
  "sandwich",
  "teacher",
  "umbrella",
  "vacation",
  "weather",
  "airplane",
  "building",
  "camera",
  "diamond",
  "exercise",
  "festival",
  "garden",
  "history",
  "island",
  "kitchen",
  "library",
  "message",
  "nature",
  "ocean",
  "planet",
  "popular",
  "restaurant",
  "science",
  "station",
  "student",
  "telephone",
  "travel",
  "village",
  "website",
  "window",
  "airport",
  "bicycle",
  "country",
  "dangerous",
  "education",
  "important",
];

const hardWords = [
  "abbreviation",
  "accommodation",
  "acknowledgment",
  "ambiguous",
  "architecture",
  "bureaucracy",
  "catastrophe",
  "circumference",
  "conscientious",
  "controversial",
  "cryptocurrency",
  "entrepreneur",
  "exaggeration",
  "extraordinary",
  "fluorescent",
  "hypothesis",
  "idiosyncratic",
  "infrastructure",
  "interpretation",
  "jurisdiction",
  "magnificent",
  "metamorphosis",
  "miscellaneous",
  "nevertheless",
  "onomatopoeia",
  "philosophical",
  "photosynthesis",
  "preliminary",
  "pronunciation",
  "questionnaire",
  "reconciliation",
  "sophisticated",
  "spontaneous",
  "substantial",
  "surveillance",
  "unpredictable",
  "vulnerability",
  "entrepreneurship",
  "characterization",
  "communication",
  "congratulations",
  "determination",
  "discrimination",
  "environmental",
  "experimentation",
  "governmental",
  "identification",
  "responsibility",
  "transformation",
  "unfortunately",
];

//Random function(Easy)
function random_word() {
  let word_index = Math.floor(Math.random() * easyWords.length);
  ran_word.innerText = easyWords[word_index];
}

// Easy function
function easy_func() {
  input_word.value = "";
  random_word();
  timer_func();

  input_word.addEventListener("input", function (e) {
    if (input_word.value === ran_word.innerText) {
      score++;
      score_txt.innerText = score;
      input_word.value = "";
      random_word();
    }
  });
}

//Timer function(Easy)
function timer_func() {
  time = time - 6;

  setInterval(() => {
    if (time > 0) {
      time--;
      time_txt.innerText = time;
    } else {
      try_again_btn.innerText = "Try Again!";
      input_word.disabled = true;
      try_again_btn.addEventListener("click", function (e) {
        location.reload();
      });
    }
  }, 1000);
}

//Random function(Medium)
function random_word_med() {
  let word_index = Math.floor(Math.random() * mediumWords.length);
  ran_word.innerText = mediumWords[word_index];
}

//Timer function(Medium)
function timer_func_med() {
  time = time - 2;

  setInterval(() => {
    if (time > 0) {
      time--;
      time_txt.innerText = time;
    } else {
      try_again_btn.innerText = "Try Again!";
      input_word.disabled = true;
      try_again_btn.addEventListener("click", function (e) {
        location.reload();
      });
    }
  }, 1000);
}

//Medium function
function med_func() {
  input_word.value = "";
  random_word_med();
  timer_func_med();

  input_word.addEventListener("input", function (e) {
    if (input_word.value === ran_word.innerText) {
      score++;
      score_txt.innerText = score;
      input_word.value = "";
      random_word_med();
    }
  });
}

//Random function(Hard)
function random_word_hard() {
  let word_index = Math.floor(Math.random() * hardWords.length);
  ran_word.innerText = hardWords[word_index];
}

//Timer function(Hard)
function timer_func_hard() {
  setInterval(() => {
    if (time > 0) {
      time--;
      time_txt.innerText = time;
    } else {
      try_again_btn.innerText = "Try Again!";
      input_word.disabled = true;
      try_again_btn.addEventListener("click", function (e) {
        location.reload();
      });
    }
  }, 1000);
}

//Hard function
function hard_func() {
  input_word.value = "";
  random_word_hard();
  timer_func_hard();

  input_word.addEventListener("input", function (e) {
    if (input_word.value === ran_word.innerText) {
      score++;
      score_txt.innerText = score;
      input_word.value = "";
      random_word_hard();
    }
  });
}

//Easy mode
easy_mode.addEventListener("click", easy_func);

//Medium mode
med_mode.addEventListener("click", med_func);

//Hard mode
hard_mode.addEventListener("click", hard_func);