function findNumber(item) {
  let count = {};
  let array = [];
  item.filter((elements) => {
    if (count[elements] === undefined) {
      count[elements] = 1;
    } else {
      count[elements]++;
    }
  });
  for (let key in count) if (count[key] % 2 !== 0) array.push(+key);
  return array;
}

const arr = [4, 8, 15, 16, 23, 42, 4, 15, 42, 42];

console.log(findNumber(arr));
function AddHtml(name) {
  if (name === undefined) {
    this.z = "";
    this.x = "";

  } else {
    this.z = `<${name}>`;
    this.x = `</${name}>`;
  }
  this.html = this.z + this.x;

  this.add = function (tag, str = "") {
    this.z = this.z + `<${tag}>`;
    this.x = `</${tag}>` + this.x;
    this.c = str;
    this.html = this.z + this.c + this.x;
    return this;
  };
  this.render = function () {
    let newHtml = this.html
    this.z = `<${name}>`;
    this.x = `</${name}>`;
    return newHtml;
  };

}
let obj = new AddHtml("body")
  .add("div")
  .add("div", "Priv")
  .render()
document.write(obj)
