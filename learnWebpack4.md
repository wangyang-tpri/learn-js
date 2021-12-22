webpack是什么？
	是一个前端的静态资源的打包/发布的工具，根据模块间的依赖关系进行静态分析，然后根据配置文件(webapck.config.js)
	指定的配置规则，将对应的文件生成指定的静态资源。只认识js和json格式的文件。
	webpack做的事情，仅仅是分析出各模块之间的依赖关系，然后形成资源列表，最终打包生成到指定的文件中。
webpack的作用：
	1。根据代码中各个模块的依赖关系，将所有的文件打包成一个.js文件。
	2。通过对应的loader，也可以将其他的格式的文件打包成对应的格式文件。
	3。通过对应的plugin，可以对文件进行其他的打包优化。
	4。适用于模块化，大型化，复杂化的项目管理。
	5。当webpack遇到不认识的模块时，webpack会在配置中查找该文件的解析规则。

loader
	loader是webpack构建工具中必不可少的一部分，通过loader可以将其他格式的文件也一并使用webpack进行打包。
	loader一般是在module对象中的rules的数组对象中进行配置。
		module: {
			rules: [
				{
					
				},
				{
				
				}
			]
		}
	常用的loader有：
		css-loader      将css代码打包成js字符串。允许css文件通过require方式引入，并返回css代码
		style-loader	就是将css-loader打包好的代码，以style标签的形式插入到html文件中。
		babel-loader	将es6代码转换成浏览器可以识别的es5代码。
		url-loader		指定图片的路径。
		postcss-loader	对css文件进行进一步的处理，比如添加浏览器的前缀，压缩css等。
		source-map-loader 进行更细粒度的配置，不同的值会明显的影响构建(build)和重新构建(rebuild)的速度。
		file-loader 分发文件到output目录并返回相对路径
		html-mimify-loader 压缩html
		less-loader 处理less
		sass-loader 处理sass

						
plugin
	plugin是对打包后的文件进行优化，比如，压缩/丑化/css文件的单独抽取等功能。主要是为了解决loader无法实现的其他事。他们运行在webpack的不同阶段（钩子/声明周期），贯穿了webpack的整个编译周期。
	plugin一般都是在plugins数组中进行配置
	
	plugins: [
		
	]
	常用的plugin有
		html-webpack-plugin     对指定的html文件进行压缩打包,通过配置，可以让html直接引用打包好的js文件。
		mini-css-extract-plugin 提取css到单独的文件
		uglifyjs-webpack-plugin 对js文件进行压缩丑化
		CommonsChunkPlugin      为每个页面间的应用程序共享代码创建bundle，可以实现多页面能够复用入口起点之家的
								大量代码/模块
		clean-webpack-plugin	删除文件夹下面的文件
		source-map-devTool-plugin 对source map进行更细粒度的控制

		DefinePlugin 允许创建一个在编译时可以配置的全局变量，这对于开发模式和发布模式的构建允许不同的行为
				非常有用。
		DllPlugin 为了极大的减少构建时间，可以分离打包。
		IgnorePlugin 从bundle中排除某些模块
		I18nWebpackPlugin 为bundle增加国际化支持
		
output 即使有多个入口文件，但是只指定一个输出配置

DataUrl 最早出现在html文件中对图片img的引用，DataUrl提供了一种将图片"嵌入"到html文件中的方法。
	跟传统的img的src属性指向服务器中某张图片的路径的地址不同的是，DataUrl是将图片装换成base64编码的字符串形式，
	并存储在url中，冠以mine-type
	使用场景
		1.访问外部资源受限。
		2.图片的体积小，浪费一个http请求资源
		3.如果图片的体积过大的话，不建议使用DataUrl，因为会生成一个很长的base64编码的字符串，这样便会影响浏览器
		的解析性能。

webpack的优势：
	1.一切都是模块
	2.丰富的生态，完善的文档和应用场景。
	3.开箱即用
	4.插件系统
	5.快速运行
	6.智能解析