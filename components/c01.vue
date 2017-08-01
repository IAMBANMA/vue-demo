<template>
    <div class='container'>
        <h2 class='page-header'>JS在不同浏览器中的差异</h2>
        <h4>JS在不同浏览器中的差异</h4>
        <ul>
            <li>
                <dl>
                    <dt> window.event对象:</dt>
                    <dd> •ff,chrome没有window.event对象,只有event对象.</dd>
                    <dd> •IE里只支持window.event对象,其他主流浏览器两者都支持. </dd>
                </dl>
                <pre>兼容代码是:
function handle(e){
    e=e||event;
}
</pre>
            </li>
            <li>
                <dl>
                    <dt>获取HTML元素:</dt>
                    <dd>•IE支持<code>el.name</code>,<code>el.getAttribute(name)</code>.</dd>
                    <dd>•ff,chrome基本属性支持<code>el.name</code>.</dd>
                    <dd>•其余属性仅支持<code>el.getAttribute(name)</code>.</dd>
                </dl>
            </li>
            <li>
                <dl>
                    <dt>自定义属性问题:</dt>
                    <dd>• IE下,可以使用获取常规属性的方法获取自定义属性,也可以使用getAttribute()获取自定义属性.
                    </dd>
                    <dd>ff下,只能使用getAttribute()获取自定义属性.</dd>
                </dl>
            </li>
            <li>
                <dl>
                    <dt>ajax请求:</dt>
                    <dd>•IE:<code>new ActiveXObject()</code>.</dd>
                    <dd>•ff,chrome:<code>new XMLHttpRequest()</code></dd>
                </dl>
            </li>
            <li>
                <dl>
                    <dt>innerText的使用:</dt>
                    <dd>•ff不支持innerText,他支持textContent来实现innerText,不过textContent没有像innerText一样考虑display方式,所以不完全兼容IE. 如果不用textContent,字符串里面不包含HTML代码也可以考虑使用innerHTML代替</dd>
                </dl>
            </li>
            <li>
                <dl>
                    <dt>获取鼠标指针的位置:</dt>
                    <dd>
                        <pre>IE下:  
 var myCursorPosition = [0, 0];
 myCursorPosition[0] = event.clientX;
 myCursorPosition[1] = event.clientY;

</pre>
                    </dd>
                    <dd>
                        <pre>ff下:
 var myCursorPosition = [0, 0];
 myCursorPosition[0] = event.pageX;
 myCursorPosition[1] = event.pageY;

</pre>
                    </dd>
                </dl>
            </li>
            <li>
                <dl>
                    <dt>获取可见区域,窗口的大小:</dt>
                    <dd>
                        <pre>IE下:
 var browsersize = [0, 0];
 browsersize[0] = document.documentElement.clientWidth;
 borwsersize[1] = document.documentElement.clientHeight;

</pre>
                    </dd>
                    <dd>
                        <pre>ff下:
 var browsersize = [0, 0];
 browsersize[0] = window.innerWidth;
 browsersize[1] = window.innerHeight;
        
        </pre>
                    </dd>
                </dl>
            </li>
            <li>
                <dl>
                    <dt>Alpha透明(解释:这并不是js句法问题,而是源自于css的Alpha透明)</dt>
                    <dd>
                        <pre>IE下:
 css: { filter: alpha(opacith = 50); }
 js: var obj = document.getElementById();
 obj.style.filter = "alpha(opacity=80)";
        
        </pre>
                    </dd>
                    <dd>
                        <pre>ff下:
 css: { opacity: 0.5; }
 js: var obj = document.getElementById();
 obj.style.opacity = "0.8";

</pre>
                    </dd>
                </dl>
            </li>
            <li>
                <dl>
                    <dt>css float值:(正常情况下,访问一个给定css值的基本句法是:object.style.property; 但是,float在js中是保留字,因此不能直接使用object.style.float来访问.怎样做呢?)</dt>
                    <dd><pre>IE下:
 document.getElementById("haha").style.styleFloat = "left";

</pre></dd>
                    <dd><pre>ff下:
 document.getElementById("haha").style.cssFloat = "left";

</pre></dd>
                </dl>
            </li>
            <li>
                <dl>
                    <dt>js访问外部样式表的css:</dt>
                    <dd>
                        <pre>IE下:
 var obj = document.getElementById("haha");
 var style = obj.currentStyle.backgroundColor;

</pre>
                    </dd>
                    <dd>
                        <pre>FF下:
 var obj = document.getElementById("haha");
 var myComputedStyle = document.defaultView.getComputedStyle(obj, null);
 var style = myComputedStyle.backgroundColor;

</pre></dd>
                </dl>
            </li>
            <li>
                <dl>
                    <dt>访问元素的"class",class在js中是一个保留字,所以在两个浏览器中我们通过如下方式访问:</dt>
                    <dd>
                        <pre>IE下:
 var obj = document.getElementById("haha");
 var myclass = obj.getAttribute("className");

</pre></dd>
                    <dd>
                        <pre>FF下:
 var obj = document.getElementById("haha");
 var myclass = obj.getAttribute("class");

</pre></dd>
                </dl>
            </li>
        </ul>
    </div>
</template>
