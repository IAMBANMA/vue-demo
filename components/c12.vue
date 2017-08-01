<template>
    <div class="container">
        <h2 class="page-header">ESLint <small style="font-weight:lighter;">可组装的JavaScript和JSX检查工具</small></h2>
        <h3 class="page-header">1.ESLint简介</h3>
        <p>ESLint最初是由<a href="http://nczonline.net" target="_blank">Nicholas C. Zakas</a>于2013年6月创建的开源项目.它的目标是提供一个插件化的JavaScript代码检测工具.</p>
        <p>ESLint主要有以下特点:</p>
        <ul>
            <li>默认规则包含所有JSLint,JSHint中存在的规则,易迁移;</li>
            <li>规则可配置性高:可设置[警告],[错误]两个error等级,或者直接禁用;</li>
            <li>包含代码风格检测的规则(可以丢掉JSCS了);</li>
            <li>支持插件扩展,自定义规则.</li>
        </ul>
        <strong class="text-danger">更详细简介参考这篇博客<a href="https://csspod.com/getting-started-with-eslint/" target="_blank">ESLint使用入门</a></strong>
        <h3 class="page-header">2.使用ESLint</h3>
        <h4>配置</h4>
        <p>可以通过以下三种方式配置ESLint:</p>
        <ul>
            <li>使用<code>.eslintrc.*</code>文件(支持JSON和YAML两种语法);</li>
            <li>在<code>package.json</code>中添加<code>eslintConfig</code>配置块;</li>
            <li>直接在代码文件中定义.</li>
        </ul>
        <strong><code>.eslintrc.*</code>文件示例:</strong>
        <pre>
 {
   "env":{
     "browser":true
   },
   "parserOptions":{
     "ecmaVersion":6,
     "ecmaFeatures":{
       "jsx":true
     }
   },
   "globals":{
     "angular":true
   },
   "rules":{
     "camelcase":2,
     "curly":2,
     "brace-style":[2,"1tbs"],
     "quotes":[2,"single"],
     "semi":[2,"always"],
     "space-in-brackets":[2,"never"],
     "space-infix-ops":2
   }
 }
		</pre>
        <p><code>.eslintrc.*</code>放在项目根目录,则会应用到整个项目;如果子目录也包含<code>.eslintrc.*</code>文件,则子目录会忽略根目录的配置文件,应用该目录中的配置文件.这样可以方便地对不同环境应用不用的规则.</p>
        <strong><code>package.json</code>示例:</strong>
        <pre>
  {
    "name":"mypackage",
    "version":"0.0.1",
    "eslintConfig":{
      "env":{
        "browser":true,
        "node":true
      }
    }
  }
		</pre>
        <h5>文件内配置</h5>
        <p>代码文件内配置的规则会覆盖配置文件里的规则</p>
        <strong>禁用ESLint</strong>
        <pre>
  /* eslint-disable */
  var obj = { key: "value"};
  /* eslint-enable */
		</pre>
        <strong>禁用一条规则</strong>
        <pre>
  /* eslint-disable no-alert */
  alert('hello eslint!!');
  /* eslint-enable no-alert */
		</pre>
        <strong>调整规则</strong>
        <pre>
  /* eslint no-comma-dangle:1 */
  //make this just a warning,not an error
  var obj = { key: "value" };
		</pre>
        <h4>工作流集成</h4>
        <p>ESLint可以集成到主流的编辑器和构建工具中,以便我们在编写代码的同时进行lint.</p>
        <strong>编辑器集成</strong>
        <p>以WebStorm为例,只要全局安装ESLint或者在项目中依赖中添加ESLint,然后在设置里开启ESLint即可.其他编辑器可以从<a href="http://cn.eslint.org/docs/user-guide/integrations" target="_blank">官方文档</a>中获得具体的信息.</p>
        <strong>构建系统集成</strong>
        <p>在Gulp中使用:</p>
        <pre>
  var gulp = require('gulp');
  var eslint = require('gulp-eslint');

  gulp.task('lint', function(){
    return gulp.src('client/app/**/*.js')
      .pipe(eslint())
      .pipe(eslint.format());
  });
		</pre>
        <span>其他构建工具参看官方文档</span>
        <h4>代码风格检测</h4>
        <p>在团队协作中,统一的代码风格更具可读性,可维护性.ESLint内置了一系列有关代码风格的<a href="http://eslint.org/docs/rules/#stylistic-issues" target="_blank">规则</a>,可以根据团队的编码规范设置.</p>
        <h4>自定义规则</h4>
        <p>显然,ESLint内置的规则不可能包罗所有需求,可以通过插件实现自定义规则,这是ESLint最有卖点的功能.在NPM上以<a href="https://www.npmjs.com/browse/keyword/eslintplugin" target="_blank">eslintplugin</a>为关键词,可以搜索到很多插件,包括eslint-plugin-react.如果有自行开发插件的需求,可以阅读<a href="http://eslint.org/docs/developer-guide/working-with-plugins" target="_blank">ESLint插件开发文档</a>.</p>
        <p>以eslint-plugin-react为例,安装以后,需要在ESLint配置中开启插件,其中<code>eslint-plugin-</code>前缀可以省略:</p>
        <pre>
  {
    "plugins":[
      "react"
    ]
  }
		</pre>
        <p>接下来开启ESLint JSX支持(ESLint内置选项):</p>
        <pre>
  {
    "ecmaFeatures": {
      "jsx": true
    }
  }
		</pre>
        <p>然后就可以配置插件提供的规则了:</p>
        <pre>
  {
    "rules": {
      "react/display-name": 1,
      "react/jsx-boolean-value": 1
    }
  }
		</pre>
        <strong class='text-danger'>自定义规则都是以插件名称为命名空间的.</strong>
    </div>
</template>
