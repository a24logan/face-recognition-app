const fs = require("fs");

fs.readFile("./hello.txt", (err, data) => {
  if (err) {
    console.log("error");
  }
  console.log(data.toString("utf8"));
});

const file = fs.readFileSync("./hello.txt");
console.log(file.toString());
fs.appendFile("./hello.txt", "this is so cool", (err) => {
  if (err) {
    console.log(err);
  }
});
