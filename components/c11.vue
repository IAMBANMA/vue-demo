<template>
    <div class='container'>
        <h2 class='page-header'>CSS规范</h2>
        <h4>••语法</h4>
        <ul>
            <li>用两个空格来代替制表符
                <kbd>tab</kbd>,这是唯一能保证在所有环境下获得一致展现的方法.</li>
            <li>为选择器分组时,将单独的选择器单独放在一行.</li>
            <li>为了代码的易读性,在每个声明块的左花括号前添加一个空格.声明块的右花括号应当单独成行. <code>.selector</code>, <code>.selector-secondary[空格]{ }</code></li>
            <li> 每条声明语句的 <code>:</code>后应该插入一个空格.eg-- <code>padding:[空格]15px;</code></li>
            <li>为了获得更准确的错误报告,每条声明都应该独占一行.</li>
            <li>所有的声明语句都应当以分号结尾.最后一条声明语句后面的分号是可选的,但是,如果省略这个分号,你的代码可能更容易出错.</li>
            <li>对于以逗号分割的属性值,每个逗号后面都应给插入一个空格,比如(<code>box-shadow:[空格]0 1px 2px #ccc,[空格]inset 0 1px 0 #fff;</code>) </li>
            <li>不要在 <code>rgb()</code>,<code>rgba()</code>,<code>hsl()</code>,<code>hsla()</code>,<code>rect()</code>值的内部的逗号后面插入空格.这样利于从多个属性值中区分多个颜色值.</li>
            <li>对于属性值或颜色参数,省略小于 <strong>1</strong>的小数前面的 <strong>0</strong>,比如 <code>.5</code>代替 <code>0.5</code>;<code>-.5px</code>代替 <code>-0.5px</code>. </li>
            <li>十六进制值应给全部小写,比如 <code>#fff</code>.在扫描文档时,小写字符易于分辨,因为他们的形式更易于区分.</li>
            <li>尽量使用简写形式的十六进制值,例如,使用 <code>#fff</code>代替 <code>#ffffff</code>.</li>
            <li>为选择器中的属性添加双引号,例如,<code>input[type="text"]</code>.只有在某些情况下是可选的,但是为了代码的一致性,建议都加上双引号.</li>
            <li> 避免为 <strong>0</strong>值指定单位,例如,用 <code>margin:[空格]0</code>;代替 <code>margin:[空格]0px;</code></li>
        </ul>
        <h4> ••声明顺序</h4>
        <p>相关的属性声明应当归为一组,并按照下面的顺序排列:</p>
        <ol>
            <li>positioning</li>
            <li>box model</li>
            <li>typographic</li>
            <li>visual</li>
        </ol>
        <p>由于定位(positioning)可以从正常的文档流中移除元素,并且还能覆盖盒模型(box model)相关的样式,因此排在首位.盒模型排在第二位,因为它决定了组件的尺寸和位置. 其他属性只是影响组件的内部(inside)或者是不影响前两组属性,因此排在后面.
        </p>
        <pre>
.element {
     /*positioning*/
     position: absolute;
     top: 0;
     right: 0;
     bottom: 0;
     left: 0;
     z-index: 100;
    
     /*box-model*/
     display: block;
     float: right;
     width: 100px;
     height: 100px;
    
     /*typography*/
     font: normal 13px "Helvetica Neue", sans-serif;
     line-height: 1.5;
     color: #333;
     text-align: center;
    
     /*visual*/
     background-color: #f5f5f5;
     border: 1px solid #e5e5e5;
     border-radius: 3px;
    
     /*misc*/
     opacity: 1;
        }

     </pre>
        <h4>••不要使用<code>@import</code></h4>
        <p>与<code>link</code>标签相比,<code>@import</code>指令要慢很多,不光增加了额外的请求次数,还会导致不可预料的问题.替代办法有:</p>
        <ol>
            <li>使用多个<code>link</code>元素.</li>
            <li>通过sass或less类似的css预处理器将多个css文件编译成一个文件.</li>
            <li>通过Rails,Jekyll或其他系统中提供的css文件合并功能.</li>
        </ol>
        <h4> ••媒体查询(media query)的位置</h4>
        <p>将媒体查询放在尽可能相关规则的附近.不要将它们打包放在一个单一样式文件中或者文档底部.如果你把它们分开了,将来会被大家遗忘.</p>
        <h4>••带前缀的属性</h4>
        <p>当使用特定厂商的带有前缀的属性时,通过缩进的方式,让每个属性的值在垂直方向对齐,这样便于多行编辑.</p>
        <h4>••单行规则声明</h4>
        <p> 对于只包含一条声明的样式,为了易读性和便于快速编辑,建议将语句放在同一行.对于带有多条声明的样式,还是应当将声明分为多行. 这样做的关键因素是为了错误检测--例如,css校验器指出在某行有语法错误.如果是单行单条声明,你就不会忽略这个错误;如果是单行多条声明,你就要仔细分析避免漏掉错误了. <code>.span { width: 60px; }</code></p>
        <h4>••简写形式的属性声明</h4>
        <p>在需要显示地设置所有值的情况下,应当尽量限制使用简写形式的属性声明.常见的滥用简写属性声明的情况如下: <code>padding</code>,<code>margin</code>,<code>font</code>,<code>background</code>,<code>border</code>,<code>border-radius</code>. 大部分情况下,我们不需要为简写形式的属性声明指定所有值.例如,HTML的heading元素只需要设置上下边距的值,因此,在必要的时候,只需要覆盖这两个值就可以.过度使用简写形式的属性声明会导致代码混乱,并且会对属性值带来不必要的覆盖从而引起意外的副作用.
        </p>
        <h4>••Less和Sass中的嵌套</h4>
        <p>避免非必要的嵌套.这是因为虽然你可以使用嵌套,但是并不意味着应该使用嵌套.只有在必须将样式限制在父元素内(也就是后代选择器),并且存在多个需要嵌套的元素时才使用嵌套.</p>
        <h4>••注释</h4>
        <p>代码是由人编写并维护的.请确保你的代码能够自描述,注释良好并且易于他人理解.好的代码注释能够传达上下文关系和代码目的.不要简单地重申组件或<code>class</code>名称. 对于较长的注释,务必书写完整的句子;对于一般性注释,可以书写简介的短语.
        </p>
        <h4> ••<code>class</code>命名</h4>
        <ul>
            <li> <code>class</code>名称中只能出现小写字符和破折号(不是下划线,也不是驼峰命名法).破折号应当用于相关<code>class</code>的命名.比如<code>.btn</code>和<code>.btn-danger</code>.</li>
            <li> 避免过度任意简写.比如<code>.btn</code>代表<code>&lt;button&gt;</code>,但是.s不能表达任何意思.
            </li>
            <li> <code>class</code>名称应当尽可能短,并且意义明确.
            </li>
            <li> 基于最近的父<code>class</code>或基本<code>class</code>作为新<code>class</code>的前缀
            </li>
            <li> 使用<code>.js-*class</code>来标识行为(与样式相对),并且不要将这些<code>class</code>包含到css文件中.
            </li>
        </ul>
        <h4>••选择器</h4>
        <ul>
            <li> 对于通用元素使用<code>class</code>,这样利于渲染性能的优化.
            </li>
            <li> 对于经常出现的组件,避免使用属性选择器.浏览器的性能会受到这些因素的影响.
            </li>
            <li> 选择器要尽可能短,并且尽量限制组成选择器元素的个数,建议不超过3个.
            </li>
            <li> 只有在必要时才将<code>class</code>限制在最近的父元素内.
            </li>
        </ul>
        <h4>         ••代码组织
</h4>
        <ul>
            <li> 以组件为单位组织代码段.
            </li>
            <li> 制定一致的注释规范.
            </li>
            <li> 使用一致的空白符将代码分隔成块,这样利于扫描较大的文档.
            </li>
            <li> 如果使用了多个css文件,将其按照组件而非页面的形式分拆,因为页面会被重组,而组件只会被移动.
            </li>
        </ul>
        <h4>         ••编辑器配置
</h4>
        <ul>
            <li> 用两个空格代替制表符.
            </li>
            <li> 保存文件时,删除尾部的空白符.
            </li>
            <li> 设置文件编码为<code>utf-8</code>.
            </li>
            <li> 在文件结尾添加一个空白行.
            </li>
        </ul>
    </div>
</template>
