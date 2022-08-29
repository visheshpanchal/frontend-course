let filter = document.getElementById("filter-tag");
let itemList = document.getElementById("items");

filter.addEventListener("keyup", filterFunc);

function filterFunc(e) {
  var itemName = e.target.value.toLowerCase();

  var items = itemList.getElementsByTagName("li");
  Array.from(items).forEach(function (item) {
    var text = item.textContent;

    if (text.toLowerCase().indexOf(itemName) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
