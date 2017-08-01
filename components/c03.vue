<template>
    <div class="container">
        <h2 class='page-header'>float浮动知识点总结</h2>
        <div class="panel panel-default">
            <div class="panel-heading">
                <h4 class="panel-title">•float的包裹与破坏:</h4>
            </div>
            <div class="panel-body">
                <dl>
                    <dt>包裹:</dt>
                    <dd>1收缩 2坚挺 3 隔绝(也就是BFC的效果)</dd>
                </dl>
                <p class="text-muted">
                    注释:具有包裹性的其他小伙伴 display:inline-block/table-cell/.... position:absolute(float近亲)/fixed/sticky overflow:hidden/scroll</p>
                <dl>
                    <dt>破坏:</dt>
                    <dd>父容器的高度塌陷</dd>
                </dl>
                <p class="text-muted">
                    注释:其他具有破坏性的小伙伴 display:none position:absolute/fixed/sticky
                </p>
                <p class="text-primary">浮动是魔鬼,更是情非得已(特性使然)</p>
            </div>
        </div>
        <div class="panel panel-default">
            <div class="panel-heading">
                <h4 class="panel-title">•清除浮动带来的影响 </h4>
            </div>
            <div class="panel-body">
                <p> 1,元素底部插入具有clear:both声明的元素 2,让父元素BFC或者haslayout(IE6,7私有的方法)</p>
                <dl>
                    <dt>clear通常应用形式:</dt>
                    <dd>1,html层面,在塌陷父容器的底部插入具有clear:both声明的元素</dd>
                    <dd>2,css层面,使用after在父元素底部生成一个具有clear:both声明的伪元素</dd>
                </dl>
                <p><strong> 以上两种方法的不足 html方式需要添加一个空元素 css方式IE6/7不兼容</strong></p>
                <dl>
                    <dt>BFC/haslayout通常声明:</dt>
                    <dd>float:left/right</dd>
                    <dd> position:absolute/fixed</dd>
                    <dd>overflow:hidden/scroll(IE7+)</dd>
                    <dd>display:inline-block/table-cell(IE8+)</dd>
                    <dd> width/height/zoom:1(IE下的神器)/...(IE6/7)</dd>
                </dl>
                <p><strong>  以上也有不足,一是不能"一方通行",二是兼容性问题</strong></p>
                <pre>权衡后的策略:
/* (IE8+)  */
.clearfix:after {
    content: '';
    display: block;
    height: 0;
    overflow: hidden;
    clear: both;
}

/* (IE6/7)  */
.clearfix {
    *zoom: 1;
}

</pre>
                <pre>更好的方法 :
.clearfix:after {
    content: '';
    display: table;
    clear: both;
}

.clearfix {
    *zoom: 1;
}
优势很明显,写的很少,功能也实现了,而且兼容也很好 .clearfix应用在包含浮动子元素的父级元素上,不要滥用.

</pre>
                <p class="text-muted"> 注释:浮动也会触发haslayout,所以,浮动在IE67下更显魔性! float能使元素block化,还能使元素紧密排列(去空格化)</p>
                <dl>
                    <dt> 浮动与流体布局: 让IE7飙泪的浮动问题 </dt>
                    <dd>1,含clear的浮动元素包裹不正确的问题 </dd>
                    <dd>2,浮动元素倒数2个莫名垂直间距问题</dd>
                    <dd>3,浮动元素最后一个字符重复问题</dd>
                    <dd> 4,浮动元素楼梯排列问题 </dd>
                    <dd>5,浮动元素和文本不在同一行的问题</dd>
                </dl>
            </div>
        </div>
    </div>
</template>
