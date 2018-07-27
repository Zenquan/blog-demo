## 目的
最近在学CSS3，就这样简单的做个小的demo，来练练手，废话不多说。
## 效果
 （PC）鼠标滑过（手机则是点击）图片，图片摆正，同时放大1.2倍。若是图片之间有重合部分，滑过的图片完整地显示在最上层。
[实现后的效果](http://jomsou.me/demo-blog/transform/index.html)
## 思路
![1](https://user-images.githubusercontent.com/29729724/36069076-9f53ec0a-0f1d-11e8-9784-2c83fa5fab8a.PNG)

```
/*鼠标滑过图片*/
.container>img:hover {
    box-shadow: 15px 15px 20px rgba(50, 50, 50, 0.4);
/*图片摆正，同时放大1.2倍。*/
    transform: rotate(0deg) scale(1.2);
/*考虑到兼容性，chrome--webkit内核*/
    -webkit-transform: rotate(0deg) scale(1.2);
    z-index: 2; /*若是图片之间有重合部分，滑过的图片完整地显示在最上层。*/
}
.container>img {
    padding: 10px 10px 15px;
    border: 1px solid #ddd;
    background: white;
    box-shadow: 2px 2px 3px rgba(50, 50, 50, 0.4);
/*以下考虑到兼容性，webkit内核、moz内核*/
    -webkit-transition: all 0.5s ease-in;
    -moz-transition: all 0.5s ease-in;
    transition: all 0.5s ease-in;
    position: absolute;
    z-index: 1;
}
```
注意：z-index使用时要注意设置父元素position才起作用。


