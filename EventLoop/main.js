/**
 * 事件
 * 使用events模塊 實例化 eventEmitter
 * eventEmitter.on 綁定事件。
 * eventEmitter.emit 觸發事件。
 */
// 引入 events 模塊
var events = require('events');

// new eventEmitter
var eventEmitter = new events.EventEmitter();

// 創建事件處理程序
var connectHandler = function connected() {
    console.log('連接成功');

    //觸發 data_received 事件
    eventEmitter.emit('data_received');
}

//bind connection 事件..用connectHandler的callback去處理
eventEmitter.on('connection', connectHandler);

//bind data_received 事件，內容短直接使用callback，不學connection另建function
eventEmitter.on('data_received', function(){
    console.log('數據接收成功。');
});

//觸發 connection 事件..一切都是由這開始的..
eventEmitter.emit('connection');

console.log("程式執行完畢!!");