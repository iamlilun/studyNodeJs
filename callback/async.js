/**
 * 異步模式
 */
var fs = require("fs");

/**
 * 執行完了readFile後再將結果交給function去處理，
 * 程式繼續走下去，不然管readFile結果如何，
 * 那已經交拖callback function去處理。
 */
fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("程式執行結束!！");
