let getForm = document.getElementById("my-form");

let btn = getForm.lastElementChild;

btn.addEventListener("click", store);

function store(e) {
  e.preventDefault();

  let amount = document.getElementById("amount").value;
  let description = document.getElementById("description").value;
  let category = document.getElementById("category");

  let catValue = category.selectedIndex;
  console.log(amount, description, category);
  if (amount !== "0" && description !== "") {
    // Convert Items into object
    let arrayStorage = localStorage.getItem("store");

    if (arrayStorage) {
      let jsonStore = JSON.parse(arrayStorage);
      let obj = {};
      obj["amount"] = amount;
      obj["description"] = description;
      obj["category"] = catValue;

      jsonStore.push(obj);

      localStorage.clear();
      localStorage.setItem("store", JSON.stringify(jsonStore));
    } else {
      let obj = {};
      let arrS = Array();
      obj["amount"] = amount;
      obj["description"] = description;
      obj["category"] = catValue;

      arrS.push(obj);
      localStorage.clear();
      localStorage.setItem("store", JSON.stringify(arrS));
    }
  }

  // Let's refresh Window for data reload from storage
  location.reload();
}

// Displaying Stored Item
let table = document.getElementById("my-table");
let storage = localStorage.getItem("store");
// This is same we need to change only data
if (storage) {
  let tableHead = document.createElement("thead");
  tableHead.innerHTML = ` <th>Amount</th> <th>Description</th> <th>Category</th> <th> Delete </th> <th> Edit </th>`;
  table.appendChild(tableHead);
}

let tableBody = document.createElement("tbody");

// Get Data from Local Storage
if (storage) {
  let jsonData = JSON.parse(storage);
  let category = document.getElementById("category");
  let rows = "";
  for (let i = 0; i < jsonData.length; i++) {
    let oneRow = `<tr><td>${jsonData[i]["amount"]}</td>
    <td>${jsonData[i]["description"]}</td>
    <td>${category.options[jsonData[i]["category"]].value}</td>`;
    oneRow += `<td><button id="deleteItem" onclick="deleteData(this)" name="${i}">Delete</button></td>`;

    oneRow += `<td><button id="editItem" onclick="editData(this)" name="${i}">Edit</button></td></tr>`;
    rows += oneRow;
  }

  tableBody.innerHTML = "<tbody>" + rows + "</tbody>";
}

table.appendChild(tableBody);

// Delete Item By Click
function deleteData(ele) {
  let number = Number(ele.name);

  let data = localStorage.getItem("store");

  data = JSON.parse(data);

  data.splice(number, 1);

  localStorage.clear();
  if (data.length !== 0) {
    localStorage.setItem("store", JSON.stringify(data));
  }

  location.reload();
}

// edit data
function editData(ele) {
  let number = Number(ele.name);
  let data = localStorage.getItem("store");

  data = JSON.parse(data);

  let dt = data[number];

  document.getElementById("amount").value = dt["amount"];
  document.getElementById("description").value = dt["description"];
  let category = document.getElementById("category");
  category.selectedIndex = dt["category"];

  data.splice(number, 1);
  localStorage.clear();
  localStorage.setItem("store", JSON.stringify(data));
}
