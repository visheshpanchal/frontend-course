let getForm = document.getElementById("my-form");
let urlLink =
  "https://crudcrud.com/api/9e8eb103d5314767aff7051b1205c7f8/store/";
let btn = getForm.lastElementChild;

btn.addEventListener("click", store);

// Store Item
function store(e) {
  e.preventDefault();

  let amount = document.getElementById("amount").value;
  let description = document.getElementById("description").value;
  let category = document.getElementById("category");

  let catValue = category.selectedIndex;

  if (amount !== "0" && description !== "") {
    let attr = btn.getAttribute("name");
    if (attr !== "add" && attr !== undefined) {
      let link = urlLink + attr;
      let obj = {};
      obj["amount"] = amount;
      obj["description"] = description;
      obj["category"] = catValue;
      putDataOnCloud(link, obj)
        .then(function (res) {
          console.log(res);
          if (res.status === 200 || res.status === 204) {
            location.reload();
          }
        })
        .catch(function (err) {
          console.log(err);
        });
    } else {
      let obj = {};
      obj["amount"] = amount;
      obj["description"] = description;
      obj["category"] = catValue;
      postDataOnCloud(urlLink, obj)
        .then(function (res) {
          if (res.status === 201) {
            location.reload();
          }
        })
        .catch(function (err) {
          console.log(err);
        });
    }
  }
}

// Displaying Stored Item
let table = document.getElementById("my-table");

function getDataFromCloud(urlLink) {
  return axios({
    method: "get",
    url: urlLink,
  });
}
// This is same we need to change only data
let storage = getDataFromCloud(urlLink);

storage
  .then(function (res) {
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
  })
  .catch(function (err) {
    console.log(err);
  });

// Delete Item By Click
function deleteData(ele) {
  let number = ele.name;
  let _urlLink = urlLink + number;
  axios({ method: "delete", url: _urlLink })
    .then(function (res) {
      if (res.status === 200) {
        location.reload();
      }
    })
    .catch(function (err) {
      console.log(err);
    });
}

// Post Method
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "*/*";
function postDataOnCloud(urlLink, dataItems) {
  return axios({
    method: "post",
    url: urlLink,
    data: dataItems,
  });
}

// Put Method

function editData(ele) {
  let number = ele.name;
  let amount = document.getElementById("amount");
  let description = document.getElementById("description");
  let category = document.getElementById("category");

  let _urlLink = urlLink;
  let getData = axios({ method: "get", url: _urlLink + number });

  getData.then(function (res) {
    let data = res.data;

    amount.value = data["amount"];
    description.value = data["description"];
    category.selectedIndex = data["category"];

    btn.setAttribute("name", number);
    btn.textContent = "Update";
  });
}

function putDataOnCloud(urlLink, _data) {
  return axios({ method: "put", url: urlLink, data: _data });
}
