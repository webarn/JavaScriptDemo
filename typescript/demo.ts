interface User {
  name: string;
}

function printLabel(fn: User) {
  console.log(fn.name);
}

let myObj = { size: 10, name: "Size 10 Object" };
printLabel(myObj);