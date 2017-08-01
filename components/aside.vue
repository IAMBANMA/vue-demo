<template>
    <div id='aside' class='aside' :class='{open:trans}'>
        <dl>
            <template v-for='(x,i) of obj'>
                <dt @click='open(i)'>{{x.lp}}</dt>
                <dd v-show='show===i?true:false'>
                    <ul>
                        <li v-for='(txt,index) of x.ll' @click="$emit('toggleList')">
                            <router-link :to='"c"+i+index' class='astyle'>{{txt}}</router-link>
                        </li>
                    </ul>
                </dd>
            </template>
        </dl>
    </div>
</template>
<style scoped>
#aside {
    position: fixed;
    padding-top: 50px;
    width: 200px;
    background-color: #f6f6f6;
    border-right: 1px solid #ddd;
    z-index: 1;
}

dl {
    margin: 0;
}

dt {
    background-color: #eee;
    font-size: 15px;
    line-height: 35px;
    font-weight: lighter;
    padding-left: 31px;
    border-bottom: 1px solid #ddd;
}

dt:hover {
    background-color: #fff;
    color: #009966;
    cursor: pointer;
}

.astyle {
    display: inline-block;
    width: 199px;
    text-indent: 41px;
    line-height: 25px;
    color: #333;
    text-decoration: underline;
}

.astyle:hover {
    color: #009966;
}

dd {
    margin: 0;
    background-color: #f6f6f6;
    border-bottom: 1px solid #ddd;
}

ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

li {
    font-weight: lighter;
    font-size: 13px;
}

@media screen and (max-width: 900px) {
    .aside {
        transform: translate(-200px, 0);
    }
    .open {
        transform: translate(0, 0);
        transition: all 0.4s cubic-bezier(0.4, 0, 0, 1);
    }
}
</style>
<script>
export default {
    data() {
            return {
                obj: [{
                    lp: '基础总结',
                    ll: ['AJAX基础知识点', 'JS在不同浏览器中的差异', 'absolute绝对定位', 'float浮动知识点总结', 'line-height属性详解', 'overflow属性详解', 'relative相对定位', 'vertical-align属性详解', 'z-index属性详解', 'IE条件注释及css hacks']
                }, {
                    lp: '编码规范',
                    ll: ['HTML规范', 'CSS规范','ESLint']
                }, {
                    lp: 'sass学习笔记',
                    ll: ['基础教程']
                }, {
                    lp: 'CSS笔记',
                    ll: ['伪类或伪元素', '属性', '函数', '数据类型', '概念', '@规则']
                }, {
                    lp: 'HTML基本模板',
                    ll: ['HTML5基本模板', 'HTML TAG一览表']
                }, {
                    lp: 'git简要',
                    ll: ['git简要']
                },{
                    lp:'babel简要',
                    ll:['babel简要']
                },{
                    lp:'ES6目录',
                    ll:['ES6目录']
                }],
                tip: null
            }
        },
        props: {
            trans: {
                type: Boolean,
                required: true
            }
        },
        computed: {
            show: function() {
                return this.tip;
            }
        },
        methods: {
            open: function(i) {
                this.tip = i;
            }
        }
}
</script>
