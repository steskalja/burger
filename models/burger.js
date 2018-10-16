// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function() {
    return new Promise((resolve,reject) =>{
    orm.all("burgers").then((res) => {
      resolve(res);
    }).catch((rej) => {
      reject(rej);
    });
  });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals) {
    return new Promise((resolve,reject) =>{
    orm.create("burgers", cols, vals).then((res) => {
      resolve(res);
    }).catch((rej) => {
      reject(rej);
    });
  });
  },
  update: function(objColVals, condition) {
    return new Promise((resolve,reject) =>{
    orm.update("burgers", objColVals, condition).then((res) =>  {
      resolve(res);
    }).catch((rej) => {
      reject(rej);
    });
  });
  }
};

//Export Module burger
module.exports = burger;
