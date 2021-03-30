全局安装 node 
	在node的官网按照官网的相关指导，进行对应的下载，然后在本地安装.exe应用程序即可。
	npm(Node Package Manager)是跟着node一起安装的包管理和分发工具，它很方便的让javascript开发者下载、管理、发布以及上传已经安装的包。只要安装了node，同时也就安装了npm。
	为了简化开发的复杂度，更好的管理好node中的包(package)，npm这个工具诞生了。
    	为了更好的管理好前端项目中的资源，webpack诞生了。
    	node ---> npm ---> webpack

	npm由三部分组成
		1.网站 (用户可以在npm官网上面www.npmjs.com根据包名快速详细的查找到关于这个包的所有信息)
		2.注册表 (是一个巨大的数据库，里面保存了每个包 package 的信息)
		3.cli (通过命令或终端来运行，开发者通过cli建立和npm之间的联系)
		npm自己升级自己
			npm install --global npm 
		npm升级其他的依赖
    	
全局安装webpack
	webpack是一个npm中的一个模块，可以使用npm进行安装，在打包的过程中需要依赖node环境。
	webpack是一个前端的静态资源打包/发布的工具。它可以根据模块的依赖关系进行静态分析，然后按照指定的规则，将这些模块生成指定的静态资源。
	
	创建项目初始的package.json文件：npm init -y

	安装模块：npm install
	
		npm install webpack -g (默认会安装最新的版本)	
		npm install webpack@4.2.1 -g (会安装指定的版本)
		-S，--save 安装包信息将会安装到dependencies(生产环境中)
		-D, --save-dev 安装包信息将会安装到devDependencies(开发环境中)
		
	卸载模块：npm uninstall
	
		npm uninstall webpack -g 
		npm uninstall webpack -g -D (卸载开发环境中的webpack)
		
	更新模块：npm update
		
		npm update <name> -g (全局更新)
		npm update <name> -D (更新开发环境)
	
	检查模块是否已经过时：npm outdated 
	管理项目中的配置情况：npm config 
	管理模块的缓存：npm cache
	查看模块的注册信息：npm view 
	查看模块的依赖： npm view webpack dependencies
	添加用户：npm adduser
	发布模块：npm publish(发布模块的话，需要用户登录的)
	添加访问级别：npm access
	将自己的模块发布的node_modules中：npm link 