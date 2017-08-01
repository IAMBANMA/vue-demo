<template>
    <div class='container'>
        <h2 class='page-header'>HTML规范</h2>
        <h4>•••黄金定律:</h4>
        <p> 永远遵循同一套编码规范--不管有多少人共同参与同一个项目,一定要确保每一行代码都像是同一个人编写的.</p>
        <h4>••语法</h4>
        <ul>
            <li> 用两个空格来代替制表符(tab)--这是唯一能保证在所有环境下获得一致的展现方法.
            </li>
            <li> 嵌套元素应当缩进一次(即两个空格).
            </li>
            <li> 对于属性的定义,确保全部使用双引号,绝不要使用单引号.
            </li>
            <li> 不要在自闭合元素的尾部添加斜线--HTML5规范中明确说明这是可选的.
            </li>
            <li> 不要省略可选的结束标签.
            </li>
        </ul>
        <h4>••HTML5 doctype</h4>
        <p>为每个HTML页面的第一行添加标准模式的声明,这样能够确保在每个浏览器中拥有一致的展现.</p>
        <h4>••语言属性</h4>
        <p>根据HTML5规范:---强烈建议为html根元素指定<strong>lang</strong>属性,从而为文档这只正确的语言.这将有助于语音合成工具确定其所应该采用的发音,有助于翻译工具确定其翻译时所应遵守的规则等等. 中文
            <code>lang="zh-CN"</code></p>
        <h4>••IE兼容模式</h4>
        <p>IE支持通过特定的meta标签来确定绘制当前页面所应该采用的IE版本.除非有强烈的特殊需求,否则最好是设置为edge mode,从而通知IE采用其所支持的最新的模式.
            <code> http-equiv="X-UA-Compatible" content="IE=Edge"</code></p>
        <pre>这里是所有支持的模式:
        "IE=edge" 
        "IE=11"
        "IE=EmulateIE11"
        "IE=10"
        "IE=EmulateIE10"
        "IE=9"
        "IE=EmulateIE9
        "IE=8"
        "IE=EmulateIE8"
        "IE=7"
        "IE=EmulateIE7"
        "IE=5" 
         </pre>
        <h4>••字符编码</h4>
        <p> 通过明确声明字符编码,能够确保浏览器快速并容易的判断页面内容的渲染方式.这样做的好处是,可以避免在HTML中使用字符实体标记(?),从而全部与文档编码一致(一般采用UTF-8编码).</p>
        <h4>••引入CSS和JavaScript文件</h4>
        <p>根据HTML5规范,在引入CSS和JavaScript文件时一般不需要指定type属性,因为<code>text/css</code>和<code>text/javascript</code>分别是他们的默认值.</p>
        <h4>••实用为王</h4>
        <p>尽量遵循HTML标准和语义,但是不要以牺牲实用性为代价.任何时候都要尽量使用最少的标签并保持最小的复杂度.</p>
        <h4>••属性顺序</h4>
        <p>HTML属性应当按照以下给出的顺序依次排序,确保代码的易读性. <code>class</code>--<code>id</code>,<code>name</code>--<code>data-*</code>--<code>src</code>,<code>for</code>,<code>type</code>,<code>href</code>--<code>title</code>,<code>alt</code>--<code>aria-*</code>,<code>role</code>. <code>class</code>用于标识高度可复用组件,因此应该排在首位.id用于标识具体组件,应当谨慎使用,因此排在第二位.
        </p>
        <h4>••布尔型属性</h4>
        <p>布尔型属性可以在声明时不赋值.XTHML规范要求为其赋值,但是HTML5规范不需要. 比如<code>disabled</code>,<code>checked</code>,<code>selected</code>.
        </p>
        <h4>••减少标签的数量</h4>
        <p>编写HTML代码时,尽量避免多余的父元素.很多时候,这需要迭代和重构来实现.</p>
        <h4>••JavaScript生成的标签</h4>
        <p>通过JavaScript生成的标签让内容变得不易查找,编辑,并且降低性能.能避免时尽量避免.</p>
    </div>
</template>
