//const products = []
const fs = require("fs");
const path = require("path");

//helper function for reuseable
const getProductFromFile = (cb) => {
  const p = path.join(__dirname, "../data/products.json");

  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
      return;
    }

    cb(JSON.parse(fileContent));
  });
};

module.exports = class Product {
  constructor(title, imageUrl, price, description) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }

  save() {
    // saving the content in a file system
    this.id = Math.random().toString();
    const p = path.join(__dirname, "../data/products.json");

    fs.readFile(p, (err, fileContent) => {
      let products = [];

      if (!err) {
        products = JSON.parse(fileContent);
      }

      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  // fetch all using file system
  static fetchAll(cb) {
    getProductFromFile(cb);
  }

  static findById(id, cb) {
    getProductFromFile((products) => {
      const product = products.find((p) => p.id === id);
      cb(product);
    });
  }
};
