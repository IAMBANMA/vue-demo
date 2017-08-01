<template>
    <div class='container'>
        <h2 class='page-header'>z-index属性详解</h2>
        <h4>z-index属性详解</h4>
        <ul>
            <li>
                <dl>
                    <dt>z-index基础</dt>
                    <dd>----了解z-index的语法,支持的属性值等</dd>
                    <dd>
                        <ol>
                            <li>含义:z-index属性指定了元素及其子元素的[z顺序],而[z顺序]可以决定当元素发生覆盖的时候,哪个元素在上面.通常一个较大的z-index值得元素会覆盖较低的那一个.</li>
                            <li>属性值:auto/数值/inherit(继承)</li>
                            <li>基本特性:老师总结了三点*支持负值*支持css3 animation动画;(可能不常用)*在css 2.1时代,需要和定位元素配合使用;</li>
                        </ol>
                    </dd>
                </dl>
            </li>
            <li>
                <dl>
                    <dt>z-index与css定位属性</dt>
                    <dd>--理解嵌套表现以及z-index计算规则 *如果定位元素z-index没有发生嵌套,怎样布局?</dd>
                    <dd>
                        <ol>
                            <li>后来居上的准则;</li>
                            <li>谁的z-index大,谁在上面;</li>
                        </ol>
                    </dd>
                </dl>
            </li>
            <li>
                <dl>
                    <dt>如果定位元素z-index发生嵌套,怎样布局? </dt>
                    <dd>祖先优先原则;(注释:前提条件是祖先的z-index是数值,非auto!因为当祖先的z-index为auto的时候,就不会创建新的层叠上下文,也就不会对其内的子元素有任何影响了!)</dd>
                </dl>
            </li>
            <li>
                <dl>
                    <dt>理解css中的层叠上下文和层叠水平</dt>
                    <dd>--元素层叠表现基础且重要的概念 *层叠上下文是html元素中的一个三维概念,表示元素在z轴上有了"可以高人一等". 哪些元素具有层叠上下文呢? </dd>
                    <dd>
                        <ol>
                            <li>页面的根元素天生就具有层叠上下文,称之为"根层叠上下文"</li>
                            <li>z-index值为数值的定位元素也具有层叠上下文</li>
                            <li>其他属性......</li>
                        </ol>
                    </dd>
                    <dd>*层叠水平:层叠上下文中的每个元素都有一个层叠水平,决定了同一层叠上下文中元素在z轴上的显示顺序.遵循,后来居上和谁大谁上的层叠准则. </dd>
                    <dd class='text-muted'>注释:层叠水平和z-index不是一个东西.普通元素也有层叠水平.</dd>
                </dl>
            </li>
            <li>
                <dl>
                    <dt>理解元素的层叠顺序 </dt>
                    <dd>层叠顺序:元素发生层叠时候有着特定垂直显示顺序.</dd>
                    <dd class='text-primary'>***著名的7阶层叠水平: 正z-index>z-index:auto或者看做z-index为0>inline/inline-block水平盒子>float浮动盒子>block块状水平盒子>负z-index>层叠上下文/background/border; </dd>
                    <dd>提出了两个问题:</dd>
                    <dd>
                        <ol>
                            <li>为甚么需要这个层叠顺序?当然需要,用来规范元素重叠时候的呈现规则</li>
                            <li>为什么是这样的顺序呢?更符合页面加载的功能和视觉呈现!解释是:层叠顺序最低的是background/border等装饰性的部分,层叠顺序中间的部分是布局的,inline/inline-block一般是显示内容的所以比float层叠优先级高.</li>
                        </ol>
                    </dd>
                </dl>
            </li>
            <li>
                <dl>
                    <dt>z-index与层叠上下文</dt>
                    <dd>---解释z-index的实际行为表现</dd>
                    <dd>要点:
                        <ol>
                            <li>定位元素默认z-index:auto可以看成是 <code>z-index:0;</code></li>
                            <li>z-index不为auto的定位元素会创建层叠上下文; </li>
                            <li>z-index层叠顺序的比较止步于父级层叠上下文;</li>
                        </ol>
                    </dd>
                    <dd>
                        <p class="text-muted">注释 :<code>z-index:auto</code>和 <code>z-index:auto</code>的区别:从层叠顺序上讲,两者是等同的;但是从创建层叠上下文上讲,就有了本质的区别. <code>z-index:auto</code>;是数字值,所以会创建层叠上下 <code>z-index:auto</code>则不会创建层叠上下文.//此规则在IE6/7下不成立,在IE6/7下,即使值是auto,也会创建层叠上下文</p>
                    </dd>
                </dl>
            </li>
            <li>
                <dl>
                    <dt>其他css属性与层叠上下文 有哪些呢?</dt>
                    <dd>张老师一共列举了9项:</dd>
                    <dd>
                        <ol>
                            <li>z-index值不为auto的flex项(父元素<code>display:flex|inline-flex</code>).</li>
                            <li>元素的opacity值不是1.</li>
                            <li>元素的transform值不是none.</li>
                            <li>元素的mix-blend-mode值不是normal.</li>
                            <li>元素的filter值不是none(这里指的是css3的属性,而不是IE下的滤镜).</li>
                            <li>元素的isolation值是isolate.</li>
                            <li>position:fixed的声明. </li>
                            <li>will-change指定的属性值为上面任意一个.</li>
                            <li>元素的-webkit-overflow-scrolling为touch. </li>
                        </ol>
                    </dd>
                    <dd>以上属性创建的层叠上下文的层叠顺序相当于z-index为auto的情况. 以上是不依赖z-index的,现在,依赖z-index的层叠上下文元素的层叠顺序是怎样的呢?取决于z-index的值.</dd>
                </dl>
            </li>
            <li>
                <dl>
                    <dt>z-index相关实践分享</dt>
                    <dd>
                        <dl>
                            <dt>1,最小化影响原则(relative课程部分的最小化影响)</dt>
                            <dd>目的:避免z-index嵌套层叠关系混乱 </dd>
                            <dd>原因:</dd>
                            <dd>
                                <ol>
                                    <li>元素的层叠水平主要由所在的层叠上下文决定</li>
                                    <li>IE7下 <code>z-index:auto</code>也会新建层叠上下文 </li>
                                </ol>
                            </dd>
                            <dd>
                                做法:</dd>
                            <dd>
                                <ol>
                                    <li>尽量少使用定位属性</li>
                                    <li>如果使用定位属性,最好将定位属性从容器平级分离为私有小容器;(此部分和relative的最小化影响是一致的) </li>
                                </ol>
                            </dd>
                            <dt>2,不犯二准则</dt>
                            <dd>原因:多人协作以及后期维护;</dd>
                            <dd>做法:对于非弹窗类元素,尽量不设置z-index值,或者z-index值没有任何道理需要超过2.(张老师经验分享,多年从业经历是单纯页面从来没有过需要设置z-index值大于2的)</dd>
                            <dt>3,组件层级计数器 </dt>
                            <dd>总是会遇到意想不到的高层级元素(可能覆盖我们的弹窗),还有组件的覆盖规则具有动态性.</dd>
                            <dd> 做法是:提前查看好组件设置的层级值是多少,做到心里有数,然后在此基础上设置新的z-index值.(通过js获得body下子元素的最高z-index值) </dd>
                            <dt> 4,可访问性隐藏</dt>
                        </dl>
                    </dd>
                </dl>
            </li>
        </ul>
    </div>
</template>
