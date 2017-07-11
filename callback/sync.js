/**
 * 同步(阻塞) 模式
 * 像script一樣步一步走
 */
var fs = require("fs");

var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("程式執行結束!!");
