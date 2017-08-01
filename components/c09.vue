<template>
    <div class='container'>
        <h2 class='page-header'>IE条件注释及css&nbsp;hacks</h2>
        <p class="lead">IE条件注释是一种特殊的HTML注释,这种注释只有IE5.0及以上版本才能够理解.</p>
        <pre>
 普通HTML注释格式 &lt;!-- ........ --&gt;

 IE注释格式: &lt;!--[if IE]&gt; ........&lt;![endif]--&gt;

 </pre>
        <p class="small"><strong>IE注释总结: 1,IE条件注释的基本结构和HTML的注释是一样的.因此IE以外的浏览器会把他们看做普通的注释而忽略他们. 2,IE会根据if条件判断是否解析条件注释里的内容. 3,IE条件注释使用的是HTML结构,因此只能使用在HTML文件里,不能使用在css文件里. 4,IE条件注释的 比较操作符 可以更灵活的对IE版本进行控制,以下是具体内容: *ite :就是less than or to 的简写,也就是小于等于的意思. *it :就是less than的简写,小于的意思. *gte :就是greater than or equal to 的简写,意思是大于等于. *gt :就是greater than 的简写,意思是大于. *! :就是不等于.</strong></p>
        <pre>示例:
 &lt;!--[if gt IE5.5]&gt;...&lt;![endif]--&gt;/如果IE版本大于5.5/
                
 &lt;!--[if ite IE6]&gt; ...&lt;![endif]--&gt;/如果IE版本小于等于IE6/
                
 &lt;!--[if !IE]&gt; .....&lt;![endif]--&gt;/如果浏览器不是IE/
             </pre>
        <dl>
            <dt>IE注释和css hacks的一些区别:</dt>
            <dd>
                <ol>
                    <li>hacks是基于浏览器的bug,而这种bug最终可能修复.</li>
                    <li>条件注释是基于IE的特定代码,这种识别机制任何时候都不会被移除</li>
                    <li>每一个浏览器都能看见你的hacks,或许下一个版本或者一个新的浏览器会在你的hacks代码上出错</li>
                    <li>只有IE才能看到条件注释,通过额外的"IE文件"来影响页面,其他浏览器根本就不会下载它</li>
                    <li>hacks用的越多,代码越混乱.</li>
                    <li>条件注释利用版本匹配,使得作者可以容易地对特定的版本写代码.</li>
                </ol>
            </dd>
        </dl>
    </div>
</template>
