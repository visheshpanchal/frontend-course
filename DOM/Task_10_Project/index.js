let form = document.getElementById("my-form");
let btn = form.lastElementChild;
let link = "https://crudcrud.com/api/9bddd830e8954201967932df2edefbb7/store/";
btn.addEventListener("click", store);

function store(e) {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  let obj = {};
  obj["name"] = name;
  obj["email"] = email;
  console.log(obj);
  storeDataOnCloud(obj, link)
    .then((res) => {
      console.log(res);
    })
    .catch(function (err) {
      console.log(err);
    });

  // When Store Finish It will Reload Window
  location.reload();
}

// Storing Item

let myTable = document.getElementById("my-table");

let getStore = localStorage.getItem("store");

let tHead = document.createElement("thead");
tHead.innerHTML = `          <th>Name</th>
  <th>Email</th>
  <th>Delete</th>
  <th>Edit</th>`;

myTable.appendChild(tHead);

let getData = getDataCloud(link);
let tBody = document.createElement("tbody");

getData.then((res) => {
  let objectStore = res.data;
  console.log(res.data);
  for (let i = 0; i < objectStore.length; i++) {
    let name = objectStore[i].name;
    let email = objectStore[i].email;

    let row = `<tr><td>${name}</td><td>${email}</td>`;
    let deleteBtn = `<td><button onClick="deleteRecord(this)" name="${objectStore[i]._id}"> Delete </button></td>`;
    row += deleteBtn;
    row += `<td><button onclick="editRecord(this)" name="${objectStore[i]._id}"> Edit </button></td>`;
    row += "</tr>";
    tBody.innerHTML += row + "";
  }
});

myTable.appendChild(tBody);

axios.defaults.headers.delete["Accept"] = "*/*";
// Delete Record
function deleteRecord(e) {
  let recordId = e.name;
  let l = link + recordId;
  let d = axios({ method: "delete", url: l });
  d.then(function (res) {
    if (res.status === 200) {
      location.reload();
    }
  }).catch(function (err) {
    console.log(err);
  });
}

// Edit Record

function editRecord(e) {
  let recordId = e.name;

  let l = link + recordId;
  let getData = axios({ method: "get", url: l });

  getData
    .then(function (res) {
      let name = res.data.name;
      let email = res.data.email;

      let d = axios({ method: "delete", url: l });
      d.then(function (res) {
        if (res.status === 200) {
          let _name = document.getElementById("name");
          let _email = document.getElementById("email");

          _name.value = name;
          _email.value = email;
        }
      }).catch(function (err) {
        console.log(err);
      });
    })
    .catch(function (err) {
      console.log(err);
    });
}

function getDataCloud(link) {
  return axios({
    method: "get",
    url: link,
  });
}
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "*/*";
function storeDataOnCloud(_data, link) {
  return axios({ method: "post", url: link, data: _data });
}
