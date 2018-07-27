>今天看到一篇微信[CSS变量让你轻松制作响应式网页](http://mp.weixin.qq.com/s/y-c6OtA0iSZlywitOkcp4A)
而且之前在新版的boostrap中看到css变量有点傻眼，不知道是什么，百度也找不到结果。

在这里简单的写个例子。
css
```
:root {
            --blue: blue;
            --font-size: 30px;
        }
        #div1 {
            color: var(--blue);
            font-size: var(--font-size);
        }
```
html
```
<div id="div1">css变量</div>
```
效果
![1](https://user-images.githubusercontent.com/29729724/37153161-c5a0894c-2316-11e8-9140-8c122ea06be2.PNG)
