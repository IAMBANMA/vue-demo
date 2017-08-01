<template>
    <div class='container'>
        <h2 class='page-header'>AJAX基础知识点</h2>
        <p class="lead"> 总结一下JavaScript的ajax. 定义:
            <mark>AJAX=asynchronous javascript and XML</mark>(异步的javascript和XML) AJAX不是新的编程语言,而是一种使用现有标准的新方法.实现:在不重新加载整个页面的情况下,与服务器交换数据并更新局部网页.</p>
        <h4>••工作原理:</h4>
        <div class="row">
            <div class='col-md-3 col-md-offset-1' style='background-color:#009966;color:#fff;'>
                <h5>浏览器</h5>
                <ol>
                    <li>发生某个事件...</li>
                    <li>常见XMLHttpRequest对象;</li>
                    <li>发送HttpRequest;</li>
                </ol>
            </div>
            <div class='col-md-1'>
                <span class='glyphicon glyphicon-arrow-right' style='line-height:105px;'></span>
                <span class='glyphicon glyphicon-arrow-right' style='line-height:105px;'></span>
                <span class='glyphicon glyphicon-arrow-right' style='line-height:105px;'></span>
            </div>
            <div class='col-md-3' style='background-color:#8e7cc3;'>
                <h5>服务器</h5>
                <ol>
                    <li>处理HttpRequest</li>
                    <li>创建响应并将数据返回浏览器</li>
                </ol>
            </div>
            <div class='col-md-1'>
                <span class='glyphicon glyphicon-arrow-right' style='line-height:105px;'></span>
                <span class='glyphicon glyphicon-arrow-right' style='line-height:105px;'></span>
                <span class='glyphicon glyphicon-arrow-right' style='line-height:105px;'></span>
            </div>
            <div class='col-md-3' style='background-color:#009966;color:#fff;'>
                <h5>浏览器</h5>
                <ol>
                    <li>使用js处理被返回的数据;</li>
                    <li>更新页面内容;</li>
                </ol>
            </div>
        </div>
        <h4>••创建XMLHttpRequest对象</h4>
        <p>兼容现代浏览器及老式IE的做法是: </p>
        <pre>var xmlhttp;
if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest(); //支持现代浏览器 
} else {
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); //支持IE5/6 
}
        </pre>
        <h4>••发送请求</h4>
        <p>我们需要用到XMLHttpRequest对象的open()和send()方法:</p>
        <dl>
            <dt>用法:</dt>
            <dd><code>xmlhttp.open(method,url,async)</code>;</dd>
            <dt>解释:</dt>
            <dd>method是指请求类型GET或POST;</dd>
            <dt>url:</dt>
            <dd>文件在服务器上的位置;</dd>
            <dt>async:</dt>
            <dd>true(异步)或false(同步)</dd>
        </dl>
        <p>send<code>xmlhttp.send(string)</code>:</p>
        <dl>
            <dt>解释:</dt>
            <dd>string:仅用于POST请求.</dd>
        </dl>
        <p class='text-danger small'>**使用GET请求的注意点:1,为了避免得到的是缓存结果,需要向URL添加一个唯一的ID,比如:<code>xmlhttp.open("GET",".....?="+Math.random(),true) </code> 2,可以通过向URL添加信息发送出去;比如 <code>xmlhttp.open("GET","....?q=lala&Q=haha",true) </code></p>
        <p class="text-danger small">
            **使用POST方法的注意点:1,如果想POST数据,需要使用<code>setRequestHeader()</code>来添加HTTP头,然后在send()方法中添加希望发送的数据. 2,setRequestHeader(header,value)的使用:header:规定头名称,如 <code>Content-type</code>;value:规定头值,比如: <code>application/x-www-form-urlencoded</code>; 3,怎样在send()中添加数据?比如 <code>xmlhttp.send("fname=majun&lname=manni");</code>
        </p>
        <h4>••async取值不同的区别</h4>
        <ul>
            <li>**async是true时;异步AJAX请求,可以在等待服务器响应的时候执行其他脚本,当响应就绪后再对响应进行处理,处理函数是onreadystatechange事件.
                <pre>例如:
xmlhttp.onreadystatechange = function {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        document.getElementById("mydiv").innerHTML = xmlhttp.responseText;
    }
}
xmlhttp.open(.....);
xmlhttp.send();
            </pre>
            </li>
            <li>**一般不推荐使用false,当使用false时,就不需要编写onreadystatechange事件函数,只需要将处理代码写在send()语句后即可;
                <pre>例如:
xmlhttp.open(.....);
xmlhttp.send();
document.getElementById("mydiv").innerHTML = xmlhttp.responseText;
            </pre>
            </li>
        </ul>
        <h4>••如需获得来时服务器的响应</h4>
        <p>请使用XMLHttpRequest对象的responseText或responseXML属性.</p>
        <h4>••AJAX的onreadystatechange事件</h4>
        <p><strong>readystate属性:</strong>储存着XMLHttpRequest的状态,它的值有5个,是从0到4;0:代表请求未初始化;1:代表服务器连接已将建立; 2:代表请求已经接受; 3:代表请求处理中; 4:代表处理完成,且响应已经就绪. </p>
        <p><strong>status属性:</strong>取值200 ok;取值404,未找到页面 onreadystatechange事件会基于readystate值的改变触发,所以在readystate从0到4变化时,onreadystatechange事件被触发了5次.</p>
        <h4>••当页面有多个XHR的时候,代码量会增大,需要适当优化,相同的代码重复使用,考虑使用带参数的回调函数方法解决.</h4>
    </div>
</template>
<style>
/*只在这个组件中设置了h2的css,style不这只scoped属性,然后其他组件中的h2也应用了同样的样式.*/

h2 {
    font-weight: lighter;
    color: #009966;
}

p {
    word-wrap: break-word;
}
.container{
    padding-left: 20px;
    padding-right: 20px;
}
</style>
