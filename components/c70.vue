<template>
    <div class="container">
        <h2 class="page-header">ES6章节目录(转自阮一峰老师文章)</h2>
        <a target='_blank' href="http://es6.ruanyifeng.com/#README">前言</a>
        <ol>
            <li :key="'t'+i" v-for="(o,i) of obj">
                <a target="_blank" :href="'http://es6.ruanyifeng.com/#docs/'+o.h">{{o.text}}</a>
                <ol>
                    <li :key="'c'+i" v-for="(co,i) of o.c">
                        <a target="_blank" :href="'http://es6.ruanyifeng.com/#docs/'+o.h+'#'+co.text">{{co.text}}</a>
                    </li>
                </ol>
            </li>
        </ol>
    </div>
</template>
<script>
export default {
    data() {
        return {
            obj: [{
                text: 'ECMAScript 6简介',
                h: 'intro',
                c: [{
                    text: 'ECMAScript-和-JavaScript-的关系'
                }, {
                    text: 'ES6-与-ECMAScript-2015-的关系'
                }, {
                    text: '语法提案的批准流程'
                }, {
                    text: 'ECMAScript-的历史'
                }, {
                    text: '部署进度'
                }, {
                    text: 'Babel-转码器'
                }, {
                    text: 'Traceur-转码器'
                }]
            }, {
                text: 'let 和 const 命令',
                h: 'let',
                c: [{
                    text: 'let-命令'
                }, {
                    text: '块级作用域'
                }, {
                    text: 'const-命令'
                }, {
                    text: '顶层对象的属性'
                }, {
                    text: 'global-对象'
                }]
            }, {
                text: '变量的解构赋值',
                h: 'destructuring',
                c: [{
                    text: '数组的解构赋值'
                }, {
                    text: '对象的解构赋值'
                }, {
                    text: '字符串的解构赋值'
                }, {
                    text: '数值和布尔值的解构赋值'
                }, {
                    text: '函数参数的解构赋值'
                }, {
                    text: '圆括号问题'
                }, {
                    text: '用途'
                }]
            }, {
                text: '字符串的扩展',
                h: 'string',
                c: [{
                    text: '字符的 Unicode 表示法'
                }, {
                    text: 'codePointAt'
                }, {
                    text: 'String.fromCodePoint'
                }, {
                    text: '字符串的遍历器接口'
                }, {
                    text: 'at'
                }, {
                    text: 'normalize'
                }, {
                    text: 'includes, startsWith, endsWith'
                }, {
                    text: 'repeat'
                }, {
                    text: 'padStart，padEnd'
                }, {
                    text: '模板字符串'
                }, {
                    text: '实例：模板编译'
                }, {
                    text: '标签模板'
                }, {
                    text: 'String.raw'
                }, {
                    text: '模板字符串的限制'
                }]
            }, {
                text: '正则的扩展',
                h: 'regex',
                c: [{
                    text: 'RegExp-构造函数'
                }, {
                    text: '字符串的正则方法'
                }, {
                    text: 'u-修饰符'
                }, {
                    text: 'y-修饰符'
                }, {
                    text: 'sticky-属性'
                }, {
                    text: 'flags-属性'
                }, {
                    text: 's-修饰符：dotAll-模式'
                }, {
                    text: '后行断言'
                }, {
                    text: 'Unicode-属性类'
                }, {
                    text: '具名组匹配'
                }]
            }, {
                text: '数值的扩展',
                h: 'number',
                c: [{
                    text: '二进制和八进制表示法'
                }, {
                    text: 'Number-isFinite-Number-isNaN'
                }, {
                    text: 'Number-parseInt-Number-parseFloat'
                }, {
                    text: 'Number-isInteger'
                }, {
                    text: 'Number-EPSILON'
                }, {
                    text: '安全整数和Number-isSafeInteger'
                }, {
                    text: 'Math对象的扩展'
                }, {
                    text: 'Math-signbit'
                }, {
                    text: '指数运算符'
                }, {
                    text: 'Integer-数据类型'
                }]
            }, {
                text: '函数的扩展',
                h: 'function',
                c: [{
                    text: '函数参数的默认值'
                }, {
                    text: 'rest-参数'
                }, {
                    text: '严格模式'
                }, {
                    text: 'name-属性'
                }, {
                    text: '箭头函数'
                }, {
                    text: '绑定-this'
                }, {
                    text: '尾调用优化'
                }, {
                    text: '函数参数的尾逗号'
                }]
            }, {
                text: '数组的扩展',
                h: 'array',
                c: [{
                    text: '扩展运算符'
                }, {
                    text: 'Array-from'
                }, {
                    text: 'Array-of'
                }, {
                    text: '数组实例的-copyWithin'
                }, {
                    text: '数组实例的-find-和-findIndex'
                }, {
                    text: '数组实例的fill'
                }, {
                    text: '数组实例的-entries，keys-和-values'
                }, {
                    text: '数组实例的-includes'
                }, {
                    text: '数组的空位'
                }]
            }, {
                text: '对象的扩展',
                h: 'object',
                c: [{
                    text: '属性的简洁表示法'
                }, {
                    text: '属性名表达式'
                }, {
                    text: '方法的-name-属性'
                }, {
                    text: 'Object-is'
                }, {
                    text: 'Object-assign'
                }, {
                    text: '属性的可枚举性'
                }, {
                    text: '属性的遍历'
                }, {
                    text: '__proto__属性，Object-setPrototypeOf，Object-getPrototypeOf'
                }, {
                    text: 'Object-keys，Object-values，Object-entries'
                }, {
                    text: '对象的扩展运算符'
                }, {
                    text: 'Object-getOwnPropertyDescriptors'
                }, {
                    text: 'Null-传导运算符'
                }]
            }, {
                text: 'Symbol',
                h: 'symbol',
                c: [{
                    text: '概述'
                }, {
                    text: '作为属性名的-Symbol'
                }, {
                    text: '实例：消除魔术字符串'
                }, {
                    text: '属性名的遍历'
                }, {
                    text: 'Symbol-for，Symbol-keyFor'
                }, {
                    text: '实例：模块的-Singleton-模式'
                }, {
                    text: '内置的Symbol值'
                }]
            }, {
                text: 'Set 和Map 数据结构',
                h: 'set-map',
                c: [{
                    text: 'Set'
                }, {
                    text: 'WeakSet'
                }, {
                    text: 'Map'
                }, {
                    text: 'WeakMap'
                }]
            }, {
                text: 'Proxy',
                h: 'proxy',
                c: [{
                    text: '概述'
                }, {
                    text: 'Proxy-实例的方法'
                }, {
                    text: 'Proxy-revocable'
                }, {
                    text: 'this-问题'
                }, {
                    text: '实例：Web-服务的客户端'
                }]
            }, {
                text: 'Reflect',
                h: 'reflect',
                c: [{
                    text: '概述'
                }, {
                    text: '静态方法'
                }, {
                    text: '实例：使用-Proxy-实现观察者模式'
                }]
            }, {
                text: 'Promise 对象',
                h: 'promise',
                c: [{
                    text: 'Promise-的含义'
                }, {
                    text: '基本用法'
                }, {
                    text: 'Promise-prototype-then'
                }, {
                    text: 'Promise-prototype-catch'
                }, {
                    text: 'Promise-all'
                }, {
                    text: 'Promise-race'
                }, {
                    text: 'Promise-resolve'
                }, {
                    text: 'Promise-reject'
                }, {
                    text: '两个有用的附加方法'
                }, {
                    text: '应用'
                }, {
                    text: 'Promise-try'
                }]
            }, {
                text: 'Iterator 和 for...of 循环',
                h: 'iterator',
                c: [{
                    text: 'Iterator（遍历器）的概念'
                }, {
                    text: '默认-Iterator-接口'
                }, {
                    text: '调用-Iterator-接口的场合'
                }, {
                    text: '字符串的-Iterator-接口'
                }, {
                    text: 'Iterator接口与Generator函数'
                }, {
                    text: '遍历器对象的return，throw'
                }, {
                    text: 'for---of循环'
                }]
            }, {
                text: 'Generator 函数的语法',
                h: 'generator',
                c: [{
                    text: '简介'
                }, {
                    text: 'next-方法的参数'
                }, {
                    text: 'for---of-循环'
                }, {
                    text: 'Generator-prototype-throw'
                }, {
                    text: 'Generator-prototype-return'
                }, {
                    text: 'yield--表达式'
                }, {
                    text: '作为对象属性的Generator函数'
                }, {
                    text: 'Generator-函数的this'
                }, {
                    text: '含义'
                }, {
                    text: '应用'
                }]
            }, {
                text: 'Generator 函数的异步应用',
                h: 'generator-async',
                c: [{
                    text: '传统方法'
                }, {
                    text: '基本概念'
                }, {
                    text: 'Generator-函数'
                }, {
                    text: 'Thunk-函数'
                }, {
                    text: 'co-模块'
                }]
            }, {
                text: 'async 函数',
                h: 'async',
                c: [{
                    text: '含义'
                }, {
                    text: '用法'
                }, {
                    text: '语法'
                }, {
                    text: 'async-函数的实现原理'
                }, {
                    text: '与其他异步处理方法的比较'
                }, {
                    text: '实例：按顺序完成异步操作'
                }, {
                    text: '异步遍历器'
                }]
            }, {
                text: 'Class 的基本语法',
                h: 'class',
                c: [{
                    text: '简介'
                }, {
                    text: '严格模式'
                }, {
                    text: 'constructor-方法'
                }, {
                    text: '类的实例对象'
                }, {
                    text: 'Class-表达式'
                }, {
                    text: '不存在变量提升'
                }, {
                    text: '私有方法'
                }, {
                    text: '私有属性'
                }, {
                    text: 'this-的指向'
                }, {
                    text: 'name-属性'
                }, {
                    text: 'Class-的取值函数（getter）和存值函数（setter）'
                }, {
                    text: 'Class-的-Generator-方法'
                }, {
                    text: 'Class-的静态方法'
                }, {
                    text: 'Class-的静态属性和实例属性'
                }, {
                    text: 'new-target属性'
                }]
            }, {
                text: 'Class 的继承',
                h: 'class-extends',
                c: [{
                    text: '简介'
                }, {
                    text: 'Object-getPrototypeOf'
                }, {
                    text: 'super-关键字'
                }, {
                    text: '类的-prototype-属性和__proto__属性'
                }, {
                    text: '原生构造函数的继承'
                }, {
                    text: 'Mixin-模式的实现'
                }]
            }, {
                text: 'Decorator',
                h: 'decorator',
                c: [{
                    text: '类的修饰'
                }, {
                    text: '方法的修饰'
                }, {
                    text: '为什么修饰器不能用于函数？'
                }, {
                    text: 'core-decorators-js'
                }, {
                    text: '使用修饰器实现自动发布事件'
                }, {
                    text: 'Mixin'
                }, {
                    text: 'Trait'
                }, {
                    text: 'Babel转码器的支持'
                }]
            }, {
                text: 'Module 的语法',
                h: 'module',
                c: [{
                    text: '概述'
                }, {
                    text: '严格模式'
                }, {
                    text: 'export-命令'
                }, {
                    text: 'import-命令'
                }, {
                    text: '模块的整体加载'
                }, {
                    text: 'export-default-命令'
                }, {
                    text: 'export-与-import-的复合写法'
                }, {
                    text: '模块的继承'
                }, {
                    text: '跨模块常量'
                }, {
                    text: 'import'
                }]
            }, {
                text: 'Module 的加载实现',
                h: 'module-loader',
                c: [{
                    text: '浏览器加载'
                }, {
                    text: 'ES6-模块与-CommonJS-模块的差异'
                }, {
                    text: 'Node-加载'
                }, {
                    text: '循环加载'
                }, {
                    text: 'ES6模块的转码'
                }]
            }, {
                text: '编程风格',
                h: 'style',
                c: [{
                    text: '块级作用域'
                }, {
                    text: '字符串'
                }, {
                    text: '解构赋值'
                }, {
                    text: '对象'
                }, {
                    text: '数组'
                }, {
                    text: '函数'
                }, {
                    text: 'Map结构'
                }, {
                    text: 'Class'
                }, {
                    text: '模块'
                }, {
                    text: 'ESLint的使用'
                }]
            }, {
                text: '读懂规格',
                h: 'spec',
                c: [{
                    text: '概述'
                }, {
                    text: '相等运算符'
                }, {
                    text: '数组的空位'
                }, {
                    text: '数组的map方法'
                }]
            }, {
                text: 'ArrayBuffer',
                h: 'arraybuffer',
                c: [{
                    text: 'ArrayBuffer-对象'
                }, {
                    text: 'TypedArray视图'
                }, {
                    text: '复合视图'
                }, {
                    text: 'DataView视图'
                }, {
                    text: '二进制数组的应用'
                }, {
                    text: 'SharedArrayBuffer'
                }, {
                    text: 'Atomics-对象'
                }]
            }, {
                text: '参考链接',
                h: 'reference',
                c: [{
                    text: '官方文件'
                }, {
                    text: '综合介绍'
                }, {
                    text: 'let-和-const'
                }, {
                    text: '解构赋值'
                }, {
                    text: '字符串'
                }, {
                    text: '正则'
                }, {
                    text: '数值'
                }, {
                    text: '数组'
                }, {
                    text: '函数'
                }, {
                    text: '对象'
                }, {
                    text: 'Symbol'
                }, {
                    text: 'Set和Map'
                }, {
                    text: 'Proxy-和-Reflect'
                }, {
                    text: 'Promise-对象'
                }, {
                    text: 'Iterator'
                }, {
                    text: 'Generator'
                }, {
                    text: '异步操作和Async函数'
                }, {
                    text: 'Class'
                }, {
                    text: 'Decorator'
                }, {
                    text: 'Module'
                }, {
                    text: '二进制数组'
                }, {
                    text: 'SIMD'
                }, {
                    text: '工具'
                }]
            }]
        }
    }
}
</script>
