<template>
    <div class='container'>
        <h2 class='page-header'>absolute绝对定位</h2>
        <dl>
            <dt>•绝对定位于浮动鲜为人知的兄弟关系:</dt>
            <dd>相同的特性表现:包裹性和破坏性. 有的时候,它们两个可以相互替换,而效果相同. 不要总和position:relative绑在一起,position:absolute越独立越强大!</dd>
            <dt>•独立的absolute可以摆脱overflow的限制,无论是滚动还是隐藏.</dt>
            <dt>•无依赖的绝对定位:</dt>
            <dd>无依赖是指:不受relative限制的absolute定位,行为表现上不使用top/right/bottom/left任何一个属性或使用auto为值得! 很强大! 定位的行为表现:1,脱离文档流2,折翼的天使</dd>
            <dt>•折翼天使的特性表现:</dt>
            <dd>1,去浮动(绝对定位与float兄弟关系不能同时使用,因为同时使用时只有一个起作用,所以绝对定位可以去浮动)</dd>
            <dd>2,位置跟随.(配合margin精确定位,支持负值定位,可兼容IE6,超赞的!!) </dd>
            <dd>注释:IE7下任何元素绝对定位后会inline-block化,即使元素原本是block也会inline-block化.(解决办法:在绝对定位元素的外面嵌套div父元素)</dd>
            <dt>•无依赖的absolute相对定位实例篇:</dt>
            <dd>1,图片图标来覆盖,无依赖,真不赖(html标签的位置顺序很重要)</dd>
            <dd> 2,如何定位下拉框,最佳实践来分享</dd>
            <dd>3,对齐居中或边缘,定位实现有脸面</dd>
            <dd>4,星号时有时没有,破坏队形不用愁</dd>
            <dd>5,图文对齐兼容差,绝对定位来开挂</dd>
            <dd>6,文字溢出不够放,不值一提就小样!</dd>
            <dd>
                <p class='text-info small'>tips:动画应该作用在绝对定位元素上</p>
            </dd>
            <dt>•多个绝对定位元素在垂直方向上的位置,遵循后来居上原则.</dt>
            <dt>•z-index无依赖:</dt>
            <dd> 1,如果只有一个绝对定位元素,自然不需要z-index,自动覆盖在普通元素上 </dd>
            <dd>2,如果两个绝对定位元素,控制DOM流的前后顺序达到需要的覆盖效果,依然无需z-index</dd>
            <dd>3,如果多个绝对定位交错,非常非常少见,z-index:1控制</dd>
            <dd> 4,如果非弹框类的绝对定位元素z-index>2,必定z-index冗余,请优化!</dd>
            <dt>•主动定位技能:</dt>
            <dd>top/left/right/bottom 一般情况下,两两组合使用top,left/top,right/left,bottom/right,bottom</dd>
            <dt>•left/top/right/bottom与width/height 异曲同工与特殊表现 :</dt>
            <dd><pre>举个栗子:
html,
body {
    height: 100%;
}

</pre></dd>
            <dd>现在实现一个全屏自适应黑色半透明的遮罩层 <pre>通常实现是:
     .overlay {
     position: absolute;
     width: 100%;
     height: 100%;
     left: 0;
     top: 0;
     . .
 }

</pre></dd>
            <dd><pre>可能有些人不知道,还可以这样实现:
.overlay {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    . . .
}
没有宽度,没有高度,依然可以实现满屏的效果.

</pre></dd>
            <dd>
                <p class='text-info small'>tips:绝对定位方向是对立(如:left vs right,top vs bottom)的时候,结果不是瞬间位移,而是身体的爆裂拉伸. 也就是说,很多情况下,absolute的主动技能设置和width/height是可以相互替代的. position:absolute;left:0;top:0;width:50%; 等同于: position:absolute;left:0;top:0;right:50%; 注意:这种特性需要IE7+支持. 那么,这两种方法的差别在哪里呢?absolute拉伸更强大: 比如:实现一个距离右侧200px的全屏自适应的容器层,怎样实现? 使用拉伸:position:absolute;left:0,right:200px; ok 兼容IE7+ 但是,width只能使用css3 calc计算: position:absolute;left:0;width:calc(100%-200px);而且这种实现,只兼容现代浏览器. 其次,相互支持性: 1,容器无需固定width/height值,内部元素亦可以拉伸 2,容器拉伸,内部元素支持百分比width/height值 最后,相互合作性 如果拉伸和width/height尺寸同时存在,会怎样? width/height设置的尺寸 优先于left/top/right/bottom拉伸的尺寸. 栗子:position:absolute;top:0;left:0;right:0;width:50%;的实际宽度是50%而不是拉伸的100%. 怎样体现合作性?margin:auto;当尺寸限制,拉伸以及margin:auto同时出现的时候,就会有绝对定位元素的绝对居中效果!(注:支持IE8+)</p>
            </dd>
            <dt>•absolute网页整体布局,适合移动web的布局策略 absolute与整体布局:</dt>
            <dd>1,body降级,子元素升级,也就是让子元素替代body作为页面的整体容器:
                <pre>position:absolute;
left:0;
right:0;
top:0;
bottom:0;

并且
body {
    height: 100%;
}
</pre></dd>
            <dd> 2,各模块头尾,侧边栏(pc端)各居其位 完整例子看demo,absolute整体布局</dd>
        </dl>
    </div>
</template>
