<template>
    <div class="container">
        <h2 class='page-header'>babel简要</h2>
        <p>Babel是一个广泛使用的转码器,可以将ES6代码转为ES5代码,从而在现有环境执行.</p>
        <p>这意味着,你现在就用ES6编写程序,而不用担心现有环境是否支持.下面是一个例子.</p>
        <pre>
 //转码前
 input.map(item => item + 1);

 //转码后
 input.map(function (item){
   return item + 1;
 });

		</pre>
        <p>上面的原始代码用了箭头函数,这个特性还没有得到广泛支持,Babel将其转为普通函数,就能在现有的JavaScript环境执行了.</p>
        <h3 class="page-header">一,配置文件.babelrc</h3>
        <p>Babel的配置文件是<code>.babelrc</code>,存放在项目的根目录下.使用Babel的第一步,就是配置这个文件.</p>
        <p>该文件用来设置转码规则和插件,基本格式如下.</p>
        <pre>
 {
 "presets":[],
 "plugins":[]
 }
		</pre>
        <p><code>presets</code>字段设定转码规则,官方提供以下的规则集,你可以根据需要安装.</p>
        <pre>
 #ES2015转码规则
 $ npm install --save-dev babel-preset-es2015

 #react转码规则
 $ npm install --save-dev babel-preset-react

 #ES7不同阶段语法提案的转码的规则(共4个阶段),选装一个
 $ npm install --save-dev babel-preset-stage-0
 $ npm install --save-dev babel-preset-stage-1
 $ npm install --save-dev babel-preset-stage-2
 $ npm install --save-dev babel-preset-stage-3
		</pre>
        <p>然后,将这些规则加入<code>.babelrc</code>.</p>
        <pre>
 {
 "presets":[
   "es2015",
   "react",
   "stage-2"
 ], 
 "plugins":[]
 }
		</pre>
        <p class="text-danger">
            注意,以下所有的Babel工具和模块的使用,都必须先写好<code>.babelrc</code>.
        </p>
        <h3 class="page-header">二,命令行转码babel-cli</h3>
        <p>Babel提供<code>babel-cli</code>工具,用于命令行转码.它的安装命令如下:</p>
        <pre>
 $ npm install --global babel-cli
		</pre>
        <p>基本用法如下.</p>
        <pre>
 #转码结果输出到标准输出
 $ babel example.js

 #转码结果写入一个文件
 #--out-file或-o 参数指定输出的文件
 $ babel example.js --out-file compiled.js
 #或者
 $ babel example.js -o compiled.js

 #整个目录转码
 #--out-dir 或 -d参数指定输出目录
 $ babel src --out-dir lib
 #或者
 $ babel src -d lib

 # -s 参数生成source map文件
 $ babel src -d lib -s
		</pre>
        <h3 class="page-header">三,babel-node</h3>
        <p><code>babel-cli</code>工具自带一个<code>babel-node</code>命令,提供一个支持ES6的REPL环境.它支持Node的REPL环境的所有功能,而且可以直接运行ES6代码.</p>
        <p>它不用单独安装,而是随<code>babel-cli</code>一起安装.然后,执行<code>babel-node</code>就进入REPL环境.</p>
        <pre>
 $ babel-node
 > (x => x*2)(1)
 2
		</pre>
        <p><code>babel-node</code>命令可以直接运行ES6脚本,将上面的代码放入脚本文件<code>es6.js</code>,然后直接运行.</p>
        <pre>
 $ babel-node es6.js
 2
		</pre>
        <h3 class="page-header">四,babel-register</h3>
        <p><code>babel-register</code>模块改写<code>require</code>命令,为它加上一个钩子.此后,每当使用<code>require</code>加载<code>.js</code>,<code>.jsx</code>,<code>.es</code>,<code>.es6</code>后缀名的文件,就会先用Babel进行转码.</p>
        <pre>
 $ npm install --save-dev babel-register
		</pre>
        <p>使用时,必须首先加载<code>babel-register</code>.</p>
        <pre>
 require("babel-register");
 require("./index.js");
		</pre>
        <p>然后,就不需要手动对<code>index.js</code>转码了.</p>
        <strong class="text-danger">
			需要注意的是,<code>babel-register</code>只会对<code>require</code>命令加载的文件转码,而不会对当前文件转码.另外,由于它是实时转码,所以只适合在开发环境使用.
		</strong>
        <h3 class="page-header">五,babel-core</h3>
        <p>如果某些代码需要调用Babel的API进行转码,就要使用<code>babel-core</code>模块.</p>
        <p>安装命令如下.</p>
        <pre>
 $ npm install babel-core --save
		</pre>
        <p>然后,在项目中就可以调用<code>babel-core</code>.</p>
        <pre>
 var babel=require('babel-core');

 //字符串转码
 babel.transform('code();', options);
 // =>{code, map, ast}

 //文件转码(异步)
 babel.transformFile('filename.js', options, function(err, result) {
 result; // => {code, map, ast}
 });

 //文件转码(同步)
 babel.transformFileSync('filename.js', options);
 // => { code, map, ast}

 //babel AST转码
 babel.transformFromAst(ast, code, options);
 // => { code, map, ast}
		</pre>
        <p>配置对象<code>options</code>,可以参看官方文档<a href="http://babeljs.io/docs/usage/options/" target="_blank">http://babeljs.io/docs/usage/options/</a>.</p>
        <p>下面是一个例子</p>
        <pre>
 var es6Code = 'let x = n => n+1';
 var es5Code =require('babel-core');
   .transform(es6Code, {
     presets:['es2015']
   })
   .code;
   //'"use strict";\n\nvar x = function x(n) {\n  return n + 1;\n};'
		</pre>
        <p>上面的代码中,<code>transform</code>方法的第一个参数是一个字符串,表示需要转换的ES6代码,第二个参数是转换配置对象.</p>
        <h3 class="page-header">六,babel-polyfill</h3>
        <p>Babel默认只转换新的JavaScript句法(syntax),而不转换新的API,比如Iterator,Generator,Set,Maps,Proxy,Reflect,Symbol,Promise等全局对象,以及一些定义在全局对象上的方法(比如<code>object.assign</code>)都不会转码.</p>
        <p>举例来说,ES6在<code>Array</code>对象上新增了<code>Array.from</code>方法.Babel就不会转码这个方法.如果想让这个方法运行,必须使用<code>babel-polyfill</code>,为当前环境提供一个垫片.</p>
        <p>安装命令如下.</p>
        <pre>
 $ npm install --save babel-polyfill
		</pre>
        <p>然后,在脚本头部,加入如下一行代码</p>
        <pre>
 import 'babel-polyfill';
 //或者
 require('babel-polyfill');
		</pre>
        <p>Babel默认不转码的API非常多,详细清单可以查看<code>babel-plugin-transform-runtime</code>模块的<a href="https://github.com/babel/babel/blob/master/packages/babel-plugin-transform-runtime/src/definitions.js" target="_blank">definitions.js</a>文件.</p>
        <h3 class="page-header">浏览器环境</h3>
        <p>Babel也可以用于浏览器环境,但是,从Babel 6.0开始,不在直接提供浏览器版本,而是要用构建工具构建出来.如果你没有或者不想使用构建工具,可以通过安装5.x版本的<code>babel-core</code>模块获取</p>
        <strong class="text-danger">本节就不详述了,查看<a href="http://www.ruanyifeng.com/blog/2016/01/babel.html" target="_blank">阮一峰老师博客详解</a></strong>
        <h3 class="page-header">九,与其他工具的配合</h3>
        <p>许多工具需要Babel进行前置转码,这里举两个例子:ESLint和Mocha.</p>
        <a href="http://eslint.org/" target="_blank">ESLint</a>用于静态检查代码的语法和风格,安装命令如下.
        <pre>
 $ npm install --save-dev eslint babel-eslint
		</pre>
        <p>然后,在项目根目录下,新建一个配置文件<code>.eslint</code>,在其中加入<code>parser</code>字段.</p>
        <pre>
 {
   "parser":"babel-eslint",
   "rules":{
	  ...
   }
 }
		</pre>
        <p>再在<code>package.json</code>之中,加入相应的<code>scripts</code>脚本.</p>
        <pre>
 {
   "name":"my-module",
   "scripts":{
     "lint":"eslint my-files.js"
   },
   "devDependencies":{
     "babel-eslint":"...",
     "eslint":"..."
   }
 }
		</pre>
        <p><a href="http://www.ruanyifeng.com/blog/2015/12/a-mocha-tutorial-of-examples.html" target="_blank">Mocha</a>则是一个测试框架,如果需要执行ES6语法的测试脚本,可以修改<code>package.json</code>的<code>scripts.test</code>.</p>
        <pre>
 "scripts":{
   "test":"mocha --ui qunit --compilers js:babel-core/register"
 }
		</pre>
        <p>上面命令中,<code>--compilers</code>参数指定脚本转码器,规定后缀名为<code>js</code>的文件,都需要使用<code>babel-core/register</code>先转码.</p>
    </div>
</template>
