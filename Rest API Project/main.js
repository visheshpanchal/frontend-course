let getForm = document.getElementById("my-form");
let urlLink =
  "https://crudcrud.com/api/ca0f2a6faa724eaba0fec5a1f3dad46f/store/";
let btn = getForm.lastElementChild;

getForm.addEventListener("submit", store);

// Store Item
function store(e) {
  e.preventDefault();

  let amount = document.getElementById("amount").value;
  let description = document.getElementById("description").value;
  let category = document.getElementById("category");

  let catValue = category.selectedIndex;

  let attr = btn.getAttribute("name");
  console.log(attr);
  if (attr !== "add" && attr !== undefined) {
    let link = urlLink + attr;
    let obj = {};
    obj["amount"] = amount;
    obj["description"] = description;
    obj["category"] = catValue;
    putDataOnCloud(link, obj);
  } else {
    let obj = {};
    obj["amount"] = amount;
    obj["description"] = description;
    obj["category"] = catValue;
    postDataOnCloud(urlLink, obj);
  }
}

// Displaying Stored Item
let table = document.getElementById("my-table");

async function storage(urlLink) {
  try {
    let res = await axios({
      method: "get",
      url: urlLink,
    });

    let jsonData = res.data;
    if (jsonData.length > 0) {
      let tableHead = document.createElement("thead");
      tableHead.innerHTML = ` <th>Amount</th> <th>Description</th> <th>Category</th> <th> Delete </th> <th> Edit </th>`;
      table.appendChild(tableHead);

      let tableBody = document.createElement("tbody");

      let category = document.getElementById("category");
      let rows = "";
      for (let i = 0; i < jsonData.length; i++) {
        let oneRow = `<tr><td>${jsonData[i]["amount"]}</td>
        <td>${jsonData[i]["description"]}</td>
        <td>${category.options[jsonData[i]["category"]].value}</td>`;
        oneRow += `<td><button id="deleteItem" onclick="deleteData(this)" name="${jsonData[i]["_id"]}">Delete</button></td>`;

        oneRow += `<td><button id="editItem" onclick="editData(this)" name="${jsonData[i]["_id"]}">Edit</button></td></tr>`;
        rows += oneRow;
      }

      tableBody.innerHTML = "<tbody>" + rows + "</tbody>";
      table.appendChild(tableBody);
    } else {
      table.style.display = "none";
    }
  } catch (e) {
    console.log(e);
  }
}
// After DOM Loaded we fetch data from crud crud
window.addEventListener("DOMContentLoaded", (event) => {
  storage(urlLink);
});

// Delete Item By Click
async function deleteData(ele) {
  let number = ele.name;
  let _urlLink = urlLink + number;

  try {
    let res = await axios({ method: "delete", url: _urlLink });
    if (res.status === 200) {
      location.reload();
    }
  } catch (err) {
    console.log(err);
  }
}

// Post Method
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "*/*";
async function postDataOnCloud(urlLink, dataItems) {
  try {
    let res = await axios({
      method: "post",
      url: urlLink,
      data: dataItems,
    });
    if (res.status === 201) {
      location.reload();
    }
  } catch (err) {
    console.log(err);
  }
}

// Put Method

async function editData(ele) {
  let number = ele.name;
  let amount = document.getElementById("amount");
  let description = document.getElementById("description");
  let category = document.getElementById("category");

  let _urlLink = urlLink;
  try {
    let getData = await axios({ method: "get", url: _urlLink + number });

    let data = getData.data;
    amount.value = data["amount"];
    description.value = data["description"];
    category.selectedIndex = data["category"];

    btn.setAttribute("name", number);
    btn.textContent = "Update";
  } catch (err) {
    console.log(err);
  }
}

async function putDataOnCloud(urlLink, _data) {
  try {
    let res = await axios({ method: "put", url: urlLink, data: _data });
    if (res.status === 200 || res.status === 204) {
      location.reload();
    }
  } catch (err) {
    console.log(err);
  }
}
