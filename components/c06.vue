<template>
    <div class='container'>
        <h2 class='page-header'>relative相对定位</h2>
        <h4>relative相对定位</h4>
        <ul>
            <li>
                <dl>
                    <dt>relative和absolute的相煎关系 relative对absolute的限制作用:</dt>
                    <dd>
                        <ol>
                            <li>限制left/top/right/bottom定位;</li>
                            <li>限制z-index层级;</li>
                            <li>限制在overflow下的嚣张气焰;</li>
                            <li></li>
                        </ol>
                    </dd>
                    <dd>解释下第二点的限制z-index层级:当absolute元素的父级设置了relative,并且设置了z-index为数值,非auto时,absolute元素的z-index将失效,它的层级由限制它的父级元素的z-index决定. relative对fixed的限制作用:只有一条,就是z-index的层级. </dd>
                    <dd class='small'><strong>总结:以上是讲relative具有限制同源属性的功能.relative/absolute/fixed具有同源性,都是position的属性嘛!</strong></dd>
                </dl>
            </li>
            <li>
                <dl>
                    <dt>relative和z-index层级</dt>
                    <dd>
                        <ol>
                            <li>提高层叠上下文(而且是鬼畜级别的!相当厉害)</li>
                            <li>新建层叠上下文与层级控制:relative元素的z-index属性值是具体的数值时,会新建层叠上下文,如果这时候他的内部还有absolute的子元素,那么子元素的z-index会失效,子元素会继承父元素的层级. 但是,当z-index是auto时,则不再具有限制层级的能力. (注释:IE6/7下,即使relative的z-index属性值是auto,还是会新建层叠上下文,限制内部子元素层级,因此IE6/7下,非常容易出现层级覆盖的bug)</li>
                        </ol>
                    </dd>
                </dl>
            </li>
            <li>
                <dl>
                    <dt>relative的最小化影响原则</dt>
                    <dd>---本节老师干货分享 所谓relative的最小化影响原则,指的是尽量降低relative属性对其他元素后布局的潜在影响!</dd>
                    <dd>
                        <ol>
                            <li>原则1,尽量避免使用relative; </li>
                            <li> 原则2,relative最小化; </li>
                        </ol>
                    </dd>
                    <dd class='small'><strong>总结:主要讲的是absolute不要依赖relative.使用过多会带来比较麻烦的层叠问题.relative最小化是指,如果必须使用relative的时候,单独创建一个新的空容器,将需要的元素包含进来.这样就实现了最小化.而且兼容性ok,可以放心使用.</strong></dd>
                </dl>
            </li>
        </ul>
    </div>
</template>
