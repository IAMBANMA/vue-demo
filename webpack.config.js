var path=require('path');
var webpack=require('webpack');
var HtmlWebpackPlugin=require('html-webpack-plugin');
var CopyWebpackPlugin=require('copy-webpack-plugin');

module.exports={
	entry:'./main.js',
	output:{
		path:path.resolve(__dirname,'dist'),
		filename:'[name].js'
	},
	resolve:{
		extensions:['.js','.vue','.json'],
		alias:{
			'vue$':'vue/dist/vue.common.js'
		}
	},
	module:{
		rules:[
			{
				test:/\.vue$/,
				loader:'vue-loader'
			},
			{
				test:/\.js$/,
				exclude:/(node_modules)/,
				use:[
					{
						loader:'babel-loader',
						options:{
							presets:[['es2015',{modules:false}]],
							plugins:['syntax-dynamic-import']
						}
					}
				]
			},
			{
				test:/\.png$/,
				loader:'url-loader',
				options:{
					limit:1000
				}
			}
		]
	},
	plugins:[
		new HtmlWebpackPlugin({
			
			// 当报警[Vue warn]: Cannot find element: #app时,加上下面一行就可以啦.(正常情况下应该是默认为index.html,这里还必须手动添加,否则渲染不出来)
			template:'index.html'

		}),
		//此处插件用于生产环境编译时将静态资源复制到dist目录.注意to选项的值应当与index.html的引用的目录名对应,否则找不到文件.
		new CopyWebpackPlugin([
			{
				from:path.resolve(__dirname,'./assets'),
				to:'assets',
				ignore:['*.png']
			}
		]),
		new webpack.optimize.UglifyJsPlugin({
			compress:{
				warnings:false
			},
			sourceMap:false
		})
	]
}
