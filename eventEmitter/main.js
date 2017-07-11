/**
 * node.js中所有產生事件的物件都是events.EventEmitter的實例
 * EventEmitter的功能就是事件的監聽及觸發
 * addListener(event, listener) 為指定事件添加一個監聽器到監聽器陣列的尾部
 * on(event, listener)為指定事件添加一個監聽器
 * removeListener(event, listener)從指定事件裡移除監聽器
 */
var events = require('events');
var eventEmitter = new events.EventEmitter();

// 監聽器 #1
var listener1 = function listener1() {
    console.log('監聽器 listener1 執行。');
}

// 監聽器 #2
var listener2 = function listener2() {
    console.log('監聽器 listener2 執行。');
}

// 監聽器 #3
var listener3 = function listener3() {
    console.log('監聽器 listener3 執行。');
}

// 監聽器 #4
var listener4 = function listener4() {
    console.log('監聽器 listener4 執行。');
}

// !!! addListener 跟 on 沒有區別..只是別名而已 !!!
// 绑定 connection 事件，callback listener1
eventEmitter.addListener('connection', listener1);

// 绑定 connection 事件，callback listener2
eventEmitter.on('connection', listener2);

// 绑定 connection 事件，callback listener3
eventEmitter.addListener('connection', listener3);

// 绑定 connection 事件，callback listener4
eventEmitter.on('connection', listener4);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " 個監聽器連接。");

// 觸發connection
eventEmitter.emit('connection');

// 移除 listener1 的監聽
eventEmitter.removeListener('connection', listener1);
console.log("listener1 不再受監聽。");

// 再觸發onnection
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " 個監聽器連接。");

console.log("程式執行完畢。");

