# Promise

### promiseES6
```
var Promise = require('../src/promiseES6.js');

Promise.all([
    $.ajax({url: './data/1.txt', dataType: 'json'}),
    $.ajax({url: './data/2.txt', dataType: 'json'})
]).then((result) => {
    let [p1, p2] = result;
    console.log(p1, p2);
}).catch((err) => {
    console.log(err);
});

``` 

### promise

```
var Promise = new Promise((resolve, reject)=>{
    setTimeout(resolve, 100, 'foo');
});
Promise.all([
    $.ajax({url: './data/1.txt', dataType: 'json'}),
    $.ajax({url: './data/2.txt', dataType: 'json'})
]).then((result) => {
    let [p1, p2] = result;
    console.log(p1, p2);
}).catch((err) => {
    console.log(err);
});
```
### 测试Promise

#### 测试代码

```
// 目前是通过他测试 他会测试一个对象
// 语法糖
Promise.defer = Promise.deferred = function () {
  let dfd = {}
  dfd.promise = new Promise((resolve, reject) => {
    dfd.resolve = resolve;
    dfd.reject = reject;
  });
  return dfd;
}
module.exports = Promise;
```
#### 测试
```
git clone xxx
cd promise
npm install
promises-aplus-tests promiseES6.js
```