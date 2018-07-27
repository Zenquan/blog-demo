## 我们是谁?
（百度）
Cookie 是服务器保存在浏览器的一小段文本信息，每个 Cookie 的大小一般不能超过4KB。浏览器每次向服务器发出请求，就会自动附上这段信息。
Session:在计算机中，尤其是在网络应用中，称为“会话控制”。Session 对象存储特定用户会话所需的属性及配置信息。这样，当用户在应用程序的 Web 页之间跳转时，存储在 Session 对象中的变量将不会丢失，而是在整个用户会话中一直存在下去。当用户请求来自应用程序的 Web 页时，如果该用户还没有会话，则 Web 服务器将自动创建一个 Session 对象。当会话过期或被放弃后，服务器将终止该会话。Session 对象最常见的一个用法就是存储用户的首选项。例如，如果用户指明不喜欢查看图形，就可以将该信息存储在 Session 对象中。有关使用 Session 对象的详细信息，请参阅“ASP 应用程序”部分的“管理会话”。注意 会话状态仅在支持 cookie 的浏览器中保留。
## 为何存在？
由于HTTP协议是无状态的协议，所以服务端需要记录用户的状态时，就需要用某种机制来识具体的用户，这个机制就是Session.典型的场景比如购物车，当你点击下单按钮时，由于HTTP协议无状态，所以并不知道是哪个用户操作的，所以服务端要为特定的用户创建了特定的Session，用用于标识这个用户，并且跟踪用户，这样才知道购物车里面有几本书。

每次HTTP请求的时候，客户端都会发送相应的Cookie信息到服务端。实际上大多数的应用都是用 Cookie 来实现Session跟踪的，第一次创建Session的时候，服务端会在HTTP协议中告诉客户端，需要在 Cookie 里面记录一个Session ID，以后每次请求把这个会话ID发送到服务器，我就知道你是谁了。有人问，如果客户端的浏览器禁用了 Cookie 怎么办？一般这种情况下，会使用一种叫做URL重写的技术来进行会话跟踪，即每次HTTP交互，URL后面都会被附加上一个诸如 sid=xxxxx 这样的参数，服务端据此来识别用户。

## 我们不一样

cookie：服务器返回给储存在浏览器的小段文本信息，是客户端保存用户信息的一种机制，用来记录用户的一些信息，也是实现Session的一种方式。
session：服务器端存储特定用户会话所需的属性及配置信息，在服务端保存的一个数据结构，用来跟踪用户的状态，这个数据可以保存在集群、数据库、文件中；

## 实战cookie和session
### 客户端cookie
设置cookie
```
        function setCookie(name, value, iDay) {
            var oDate = new Date();
            oDate.setDate(oDate.getDate() + iDay);

            document.cookie = name + '=' + value + ';expires=' + oDate;
        }
````
获取cookie
````
        function getCookie(name) {
            var arr = document.cookie.split('; ');

            for (var i = 0; i < arr.length; i++) {
                var arr2 = arr[i].split('=');

                if (arr2[0] == name) {
                    return arr2[1];
                }
            }

            return '';
        }


 删除cookie
```
        function removeCookie(name) {
            setCookie(name, 1, -1);
        }
```

使用函数
```
        setCookie('userName', 'dancingblue', 365);
        setCookie('password', '123456', 14);

        console.log(document.cookie);
        alert(getCookie('sex'));
        removeCookie('password');
        alert(document.cookie); 
```