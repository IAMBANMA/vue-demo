<template>
    <div class='container'>
        <h2 class='page-header'>伪类或伪元素</h2>
        <h4>伪元素部分</h4>
        <ul>
            <li>::after
                <br> 可以在元素的最后插入内容,默认是内联的,插入内容通过设置content属性实现.
                <br> 通过为元素插入的内容只在页面表现上,并不是插入到DMO中.
                <br> 伪元素插入的内容类型有:图片(图片尺寸应提前设定好,因为通过这种方式插入是不能设置图片尺寸的),字符串,字体图标,或者为空(清除浮动时用到).
                <br> 伪元素可以像真实元素一样应用浮动(float),定位(position)或者动画属性(animate).
                <br> :after与::after的区别:
                <br> 单冒号是CSS2的语法,双冒号是CSS3的语法.为的是区分伪类与伪元素.单冒号支持IE8及以上浏览器,双冒号不支持IE9及以下的浏览器
                <br> !!!注意:IE浏览器不支持伪元素使用z-index属性.</li>
            <li>::before与::after基本相同.</li>
            <li>::first-letter(首字母)
                <br> 它是选择块级元素的首行首字母的伪元素.
                <br> 它不会选中内联元素的首字母,只选中块级元素的首行首字母.比如display是block,inline-block,table-cell,table-caption,list-item.
                <br> 如果在块级元素的前面通过::before伪元素插入了内容,则::first-letter将选中伪元素插入内容的首字母.
                <br> 现在介绍的例子中::first-letter是不会选中任何字符的.p br First level of .... /p因为第一行是空行,所以不会选中任何字符.
                <br> 首字母跟随的标点符号也作为首字母的一部分被选中.
                <br> ::first-letter可以应用的css属性有:font类包括font,font-style,font-variant,font-weight,font-size,line-height,font-family.
                <br> text类:text-decoration,text-transform,letter-spacing,word-spacing,float,vertical-align(only if float is none),and color
                <br> margin类:margin,margin-top,margin-right,margin-bottom,margin-left.
                <br> padding类:padding,padding-top,padding-right,padding-bottom,padding-left.
                <br> border类:border,border-width,border-style,border-color
                <br> background类:background,background-color,background-image,background-position,background-repeat,background-size,background-attachment.
                <br> !!!注意事项:列表的首字符是除去list-style标记的首字符.
                <br> display为inline-block元素的首字符不能作为祖先元素的首字符
                <br> 如果first-line与first-letter同时作用于字符,则::first-letter的设置覆盖::first-line的设置.
                <br> 关于:first-letter与::first-letter的区别:单冒号是CSS2中的语法,双冒号是CSS3中的语法,为了区分伪元素和伪类.双冒号支持IE9及以上的浏览器,单冒号支持IE5.5及以上的浏览器.</li>
            <li>::first-line(首行)
                <br> 它用来选中块级元素的首行.和所有的伪元素一样,它不会匹配任何真实存在的完整的html元素.所以不会匹配内联元素的首行(即内联元素自身)
                <br> 这里的块级元素指的是display为block,inline-block,table-cell,tabel-caption,list-item.
                <br> 应用到::first-line的css样式属性有:
                <br> font类:font,font-style,font-variant,font-weight,font-size,line-height,font-family.
                <br> background类:background,background-color,background-image,background-position,background-repeat,background-size,background-attatchment.
                <br> text类:text-decoration,text-transform,letter-spacing,word-spacing.
                <br> !!!注意事项::first-line选中的首行可以是块级元素内容的首行,也可以是其第一个块级子元素的首行.
                <br> display是inline-block和table-cell的元素的首行不会成为父元素的首行.
                <br> 如果块级元素的第一行是br标签,则它的首行是空的.
                <br> 同其他伪类伪元素一样,::first-line可以同其他伪类伪元素一起链式调用.
                <br> ::first-letter比::first-line的权重高,一般情况下,::first-letter会继承::first-line的样式,但是当两者同时指定一个样式时,::first-letter的样式会覆盖::first-line的样式.
                <br> 通过::first-line应用在首行的样式将覆盖其他任何的样式.即使是通过!important.
                <br> 关于:与::的区别:
                <br> 一个是CSS2的语法,一个是CSS3的语法.为了区分伪类与伪元素.然后就是浏览器的支持情况不同.
                <br> !!!!注意chrome下存在一个老bug,text-transform属性无法应用在::first-line元素上.</li>
            <li>::placeholder
                <br> 它可以选中input元素中占位提示的内容.
                <br> 一般情况下,input元素中占位提示内容的样式默认是浅灰色,通过::placeholder可以设置字体样式和颜色等.
                <br> 所有可以应用在::first-line上的样式属性同样可以应用在::placeholder伪元素上.
                <br> !!!!不同浏览器在实现这个属性时,都有自己的非标准实现:如下>::-webkit-input-placeholder;:-ms-input-placeholder(单冒号);::-moz-placeholder;
                <br> 浏览器的支持情况是chrome4;firefox4;ie10;opera11;safari3.1;手机端基本都支持.</li>
            <li>::selection
                <br> 它选中用户通过鼠标或者其他方式选中的高亮内容.
                <br> 在大部分的浏览器中,选中的文本默认拥有蓝色的背景,通过使用::selection伪元素,你可以设置选中内容的样式以符合整页的主题.
                <br> 当然啦,只有一部分css属性的子集可以用来设置::selection.他们是:color,background-color,text-shadow.
                <br> !!!这个属性出现在在CSS3起草阶段,现在已经从css的标准模块移除,但是还是有很多的浏览器支持,它很可能保留下来.
                <br> 浏览器支持情况:IE9+;Firefox支持加前缀的版本::-moz-selection;text-shadow属性不支持IE浏览器.</li>
        </ul>
        <h4>伪类部分</h4>
        <ul>
            <li>:active
                <br> 它根据元素的状态选择元素,设置的样式只有在状态匹配时才起作用.它选择被用户点击处于激活状态的元素.
                <br> 它不光可以应用在a元素上,还可以应用在其他页面元素上,甚至是根元素html.
                <br> 当:active用来装饰links时,通常和其他三个伪类一起使用:link,:visited,:hover.并且他们书写的顺序是固定的;link,visited,hover,active
                <br> 一个元素可以同时使用的两个伪类是visited,active或者link,active.</li>
            <li>:link
                <br> 它也是根据元素的状态选择元素,这个伪类选择并装饰网页中未被访问的链接元素(a);!!!!并且它只选中有href属性的a元素.如果没有设置href元素,则不会选中.
                <br> 通常它会和其他三个伪类一起使用,并且他们的书写顺序是一定的;link,visited,hover,active.
                <br> 一个元素可以同时使用的两个伪类是visited,active或者link,active.</li>
            <li>:visited
                <br> 它选中并装饰页面中已经被访问过的链接元素(a).
                <br> 它同样只选中包含href属性的链接元素.
                <br> 通常和它一起使用的三个伪类一起使用时的顺序是'绿化'link,visited,hover,active.
                <br> 一个元素可以同时使用的两个伪类是visited,active或者link,active.</li>
            <li>:hover
                <br> 它选择被用户鼠标悬浮在其上的元素,并设置其样式.
                <br> 移动触屏设备不支持.
                <br> 通常和它一起使用的三个伪类他们的顺序是(绿化)link,visited,hover,actice.</li>
            <li>:focus
                <br> 它一般用于选择装饰被用户通过鼠标或者键盘tabbing选中的链接元素和表单元素.
                <br> 一般被聚焦的表单元素都有一个默认的样式就是外边框有特殊表现.它其实是css的outline属性发挥作用.清除样式可以通过设置outline为0即可.
                <br> a:focus{outline:0;}
                <br> 当然,清除默认样式很重要,同时,设定自己的个性样式同样重要!!!</li>
            <li>:checked
                <br> 伪类选中被选中的表单元素.
                <br> 由于都是单选,多选的点选框,没有太多的样式可以设定,一般结合选中其他元素设置样式.</li>
            <li>:disabled
                <br> 伪类选中并装饰用户界面中功能被禁的元素.
                <br> 类似的伪类还有:enabled.</li>
            <li>:empty 伪类选择页面中内容为空的元素.
                <br> 怎样才算是空元素呢?就是既没有子元素也没有文本内容的元素.注释文本不包含在内
                <br> 这个伪类是很有用的.比如可以选择中页面中哪些没有作用却导致一系列怪异表现的空元素,然后将其清除.
                <br> !!!通过::after和::before添加的内容,不算做真正的内容,所以不影响:empty伪类的选择.
                <br> 如果元素内包含空格或者空子元素,都不能算是空元素.
                <br> hr,br,img等自闭合元素被认为是空元素.</li>
            <li>:first-child
                <br> 它选择的目标元素是其父元素的第一个子元素.类似p:first-child(选中属于其父元素的第一个元素且是p元素).
                <br> 另一个伪类和这个伪类相当相似,但是实现的功能却不一样.:first-of-type(这个伪类是根据元素的类型,选择父元素中的第一个符合类型的元素,而不一定是父元素的第一个元素.)</li>
            <li>:last-child
                <br> 它选择的目标元素是其父元素的第一个子元素.类似p:last-child(选中属于其父元素最后一个元素并且这是元素是p元素)
                <br> 类似的还有last-of-type.实现的功能是不同的.它选择符合类型的最后一个子元素,但是这个子元素不一定是父元素的最后一个元素.
                <br> 这些伪类和伪元素都是可以链式使用的.</li>
            <li>:nth-child()
                <br> 这个伪类可以根据你指定的序号选中容器中子元素.
                <br> 这里的参数可以使确定的数字,比如1,代表第一个;n,代表第n个.
                <br> 参数还可以是预先定义的关键字even和odd.分别指定偶数序列和奇数序列.
                <br> 参数还可以是表达式,例如(2n+1),这样选中的就和odd一样.
                <br> 这个伪类和其他伪类选择器一样,可以同其他选择器一起链式调用,比如:hover,::after等.
                <br> 有一个同这个伪类类似的选择器:nth-last-child();两者的区别是一个从前往后数,一个从后往前数.
                <br> 还有一个类似的选择器是:nth-of-type.它是根据子元素的类型来计数的.就像:first-of-type和last-of-type一样
                <br> 浏览器支持情况是IE9+.</li>
            <li>:lang()
                <br> 伪类基于确定下来的语言来匹配一个元素.
                <br> 文档中确定语言类型的设置方法有多种,直接给html标签设置属性lang='en';通过设置meta标签来指定;还有就是通过http头信息来确定.
                <br> 用法是.element:lang(x){/*样式规则*/}给符合了x元素设定的.element类指定的元素应用样式.</li>
            <li>:fullscreen
                <br> 这个伪类选择并装饰处于全屏模式的元素
                <br> 这里被选中的元素必须是使用html5Fullscreen API进入了全屏模式的元素.这里的API属于客户端js的范畴,并且各浏览器都有自己的非标准的实现.需要使用前缀版本的方法
                <br> 伪类在各个浏览器的支持情况chrome,opera,safari中 :-webkit-full-screen Firefox中:-moz-full-screen IE中:-mz-fullscreen</li>
            <li>:target
                <br> 这个伪类选择的是点击链接跳转到页面内的某个位置的和链接有联系的目标元素(这个元素的ID同链接的href值是一样的.也称锚点技术或hash)
                <br> 样式只有在点击链接时才应用到目标元素.</li>
        </ul>
    </div>
</template>
