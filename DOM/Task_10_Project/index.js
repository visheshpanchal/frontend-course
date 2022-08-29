let form = document.getElementById("my-form");
let btn = form.lastElementChild;

btn.addEventListener("click", store);

function store(e) {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  let arrayStore = localStorage.getItem("store");
  if (arrayStore) {
    let jsonStore = JSON.parse(arrayStore);

    jsonStore["name"].push(name);
    jsonStore["email"].push(email);

    localStorage.clear();
    localStorage.setItem("store", JSON.stringify(jsonStore));
  } else {
    let obj = {};

    obj["name"] = Array(name);
    obj["email"] = Array(email);

    localStorage.clear();
    localStorage.setItem("store", JSON.stringify(obj));
  }
  // When Store Finish It will Reload Window
  location.reload();
}

// Storing Item

let ui = document.querySelector("#users");

store = localStorage.getItem("store");

let jsonStore = JSON.parse(store);

for (let i = 0; i < jsonStore["name"].length; i++) {
  let n = jsonStore["name"][i];
  let e = jsonStore["email"][i];

  let li = document.createElement("li");

  let n1 = document.createElement("div");
  let e1 = document.createElement("div");

  n1.innerText = "Name : " + n;
  e1.innerText = "Email : " + e;

  li.appendChild(n1);
  li.appendChild(e1);

  ui.appendChild(li);
}
