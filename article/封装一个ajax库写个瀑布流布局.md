## 何为瀑布流布局？
（此处假装有个表情包）呐，你要的瀑布流布局
![1](https://user-images.githubusercontent.com/29729724/36061678-a4f8a356-0e98-11e8-9f40-0f60af7d17a8.PNG)
![2](https://user-images.githubusercontent.com/29729724/36061679-a52ccf3c-0e98-11e8-907a-898dbb1fe225.PNG)

（出自百度）瀑布流布局：瀑布流，又称瀑布流式布局。是比较流行的一种网站页面布局，视觉表现为参差不齐的多栏布局，随着页面滚动条向下滚动，这种布局还会不断加载数据块并附加至当前尾部。最早采用此布局的网站是Pinterest，逐渐在国内流行开来。国内大多数清新站基本为这类风格。
优点：
1、简单：最大限度利用了浏览器的流体特性进行布局，省去了很多计算的麻烦；新人更易懂和上手
2、更好的性能：这个体现在多处，如浏览器宽度改变，瀑布流刷新时候的效率等
3、无需知晓尺寸：如果是要绝对定位实现瀑布流，必须知道每个小模块的高度以及宽度（否则无法定位），而基于列表的布局则无需知道高宽
缺点：
用户向下滚动鼠标，会导致图片加载不止，根本停不下来！针对这样的问题，可以采取像淘宝的方案，适当设置分页。

## 瀑布流的原理

![3](https://user-images.githubusercontent.com/29729724/36068182-1d51b448-0f0a-11e8-846b-3adff6af924a.png)

原理： 
1、通过getShort（）函数判断那一列的高度最短；
2、通过getTop（）函数判断获取对象到最顶的距离；
3、getList通过ajax从后端接口处获取数据，用getshort（）获取高度最短的一列，然后创建oDiv和oImg元素将图片加载到最短的一列，
4、用window.onscroll，通过getTop判断条件，实现滚动块到达底部时翻页。

## 怎么实现?
封装一个Ajax库：
```
function ajax(method, url, data, success)
{
    //创建服务
    var xhr = null;
    //为了兼容性
    try {
        xhr = new XMLHttpRequest();
    } catch (error) {
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    //判断提交方法
    if (method=='get'&&data) {
        url+='?'+data;
    }
    //打开服务
    xhr.open(method, url, true);
    
    if (method=='get') {
        //get方法，发送
        xhr.send();
    }else {
        //post方法，先设置请求头部，然后发送
        xhr.setRequestHeader('content-type', 'appliction/x-www-form-urlencoded');
        xhr.send(data);
    }
    //等待响应
    xhr.onreadystatechange = function(){
        if (xhr.readyState==4) {
            if (xhr.status==200) {
                success && success(xhr.responseText);
            }else{
                alert(xhr.status);
            }
        }
    }
}
```
js代码：
```
        window.onload = function (){
            var oUl = document.getElementById('ul1');
            var aLi = oUl.getElementsByTagName('li');
            var iLen = aLi.length;
            var iPage = 1;
            //用来控制getList的开关
            var b = true;
            //初始化数据
            getList();

            function getList(){
                //用ajax从后端接口加载数据
                ajax('get', 'getPics.php', 'cpage'+iPage, function(data){
                    var data = JSON.parse(data);
                    //数据加载完成
                    if (!data.length) {
                        return;
                    }
                    for(var i=0;i<data.length;i++){

                        var _index = getShort();
                        //创建元素
                        var oDiv = document.createElement('div');
                        var oImg = document.createElement('img');
                        //利用数据，处理数据
                        oImg.src = data[i].preview;
                        //根据布局设置图片的宽度
                        oImg.style.width = '225px';
                        //为了使图片不失真、变形,根据比例设置高度
                        oImg.style.height = data[i].height*(225/data[i].width)+'px';
                        //添加元素
                        oDiv.appendChild(oImg);
                        var oP = document.createElement('p');
                        oP.innerHTML = data[i].title;
                        oDiv.appendChild(oP);
                        //将整个oDiv加到HTML的最短li中
                        aLi[_index].appendChild(oDiv);
                    }

                    b = true;
                })
            }
            window.onscroll = function(){
                var _index = getShort();
                var oLi = aLi[_index];
                var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
                if (getTop(oLi)+oLi.offsetHeight<document.documentElement.clientHeight+scrollTop) {
                    if (b) {
                        b = false;
                        iPage++;
                        getList();
                    }
                }
            }
            //获取最短的一列
            function getShort(){
                var index = 0;
                var ih = aLi[index].offsetHeight;
                for(var i=1;i<iLen;i++){
                    if (aLi[i].offsetHeight<ih) {
                        index = i;
                        ih = aLi[i].offsetHeight;
                    }
                }

                return index;
            }
            //获取最短列距顶部
            function getTop(obj){
                var iTop = 0;
                while (obj) {
                    iTop+=obj.offsetTop;
                    obj = obj.offsetParent;
                }

                return iTop;
            }
        }
```
后端接口：
```
<?php

header('Content-Type: text/html; charset="utf-8');

$cpage = isset($_GET['cpage']) ? $_GET['cpage'] : 1;
$url = 'http://www.wookmark.com/api/json/popular?page='.$cpage;

$content = file_get_contents($url);
$content = iconv('gbk', 'utf-8', $content);

echo $content;
```
## 后续
本来下午想写一次面向对象的实现，但是无奈，水平还不够，用bug还没解决；容我静静后再改bug.