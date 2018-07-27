>一直以来，在js编程中总会遇到各种各样的错误，今天就在此做个总结。
### 1.Uncaught ReferenceError: xxx is not defined
>尝试访问未定义的变量或当前范围之外的变量时会引发此错误
![error3](https://user-images.githubusercontent.com/29729724/37236540-9e070040-2443-11e8-8961-fb26cb2be13e.PNG)
![error5](https://user-images.githubusercontent.com/29729724/37236600-47cb9190-2444-11e8-94c0-1e74e8bc221c.PNG)

undefined（准确来说不能算是一种错误）
由于无返回值
```
var foo
```
![error1](https://user-images.githubusercontent.com/29729724/37236544-ae13a3f8-2443-11e8-8608-d0e478149aa3.PNG)

### 2.Uncaught TypeError: Cannot read property
当读取一个属性或调用一个未定义对象的方法时，Chrome 中就会报出这样的错误。
![error2](https://user-images.githubusercontent.com/29729724/37236622-67220e16-2444-11e8-9d84-2b54f21e3786.PNG)

### 3.TypeError: ‘undefined’ Is Not an Object (evaluating…)
这是在 Safari 中读取属性或调用未定义对象上的方法时发生的错误，这与 Chrome 的上述错误基本相同，只是 Safari 使用不同的错误消息。
![error6](https://user-images.githubusercontent.com/29729724/37236645-bb78e016-2444-11e8-89de-9457992fcb16.png)
### 4. TypeError: Cannot Read Property ‘length’
这是 Chrome 中发生的错误，因为读取了未定义长度属性的变量。
![error4](https://user-images.githubusercontent.com/29729724/37236676-120a9352-2445-11e8-92d3-597ee62b66e2.PNG)
![error7](https://user-images.githubusercontent.com/29729724/37236721-860ab624-2445-11e8-9ef3-e8a9eba90133.PNG)
,<b>未定义通常是一个尚未分配的变量，而 null 则表示该值为空。</b>
![undefined_null](https://user-images.githubusercontent.com/29729724/37236753-e93fc720-2445-11e8-812c-a9eca12d216d.PNG)

### 5. TypeError: Null Is Not an Object (evaluating…)
这是在 Safari 中读取属性或调用空对象上的方法时发生的错误。
![error8](https://user-images.githubusercontent.com/29729724/37236719-7de6a07a-2445-11e8-922f-7a9666728b89.png)
### 6.Uncaught TypeError: this.isAwesome is not a function
![error9](https://user-images.githubusercontent.com/29729724/37236829-bbf0c6b0-2446-11e8-8cb2-58de8148c45f.PNG)
### 7. TypeError: Object Doesn’t Support Property
![error10](https://user-images.githubusercontent.com/29729724/37237035-2371e0d8-2449-11e8-89f0-63b71de80cb2.PNG)
### 8.Uncaught RangeError: Maximum Call Stack
这是在很多种情况，Chrome 中发生的错误，一种情况是当你调用一个不会终止的递归函数时。
![error11](https://user-images.githubusercontent.com/29729724/37237072-cb66fa12-2449-11e8-8eca-b0bdd4a05564.PNG)
### 9. Uncaught TypeError: Cannot Set Property
当尝试访问未定义的变量时，总会返回 undefined。我们也无法获取或设置 undefined 的任何属性。在这种情况下，应用程序将抛出“Uncaught TypeError cannot set property of undefined”。
![error12](https://user-images.githubusercontent.com/29729724/37237088-2865ae8e-244a-11e8-9332-49c98c4b53dd.PNG)
参考：[
1000多个项目中的十大JavaScript错误以及如何避免](http://web.jobbole.com/94089/)