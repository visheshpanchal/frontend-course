// Node. js does not provide a browser environment, it's a server-side
// runtime, so we can't use the window variable in Node.

// this keyword

this.table = "Study Table";
// For Global this refer to window object

console.log(this);
// For Browser window.table work

// Object this refer to as current object
const abc = {
  tableName: "Study Table",
  func() {
    console.log("Table Name is : ", this.tableName);
  },
};

abc.func();

// we can use call method for method combine
const a = { tableName: "Study Table" };

function func() {
  console.log("Table Name is : ", this.tableName);
}

func.call(a);
