THREE.js使用的是左手坐标系

Scene() 场景
	var scene = new THREE.Scene()
		scene.add() 在场景中添加物品
		scene.remove() 移除场景中的物品
		scene.children() 获取场景中所有子对象的列表
		scene.getChildByName() 利用name属性 获取场景中的某个物体

BoxGeometry()	用于创建立方体或者不规则的四边形
	var geometry = BoxGeometry(width, height, depth)
	创建完成的图形使用MeshBasicMaterial()进行纹理修饰，可以设置颜色
	var material = new THREE.MeshBasicMaterial('red')

Mesh() 网格
	var mesh = new THREE.Mesh(geometry, material)
	material --- (可选) 可以是一个material 或是一个包含有meterial的数组，默认是一个新的MeshBasicMaterial()
		或者其他类型的材质如MeshPhongMaterial()
	通过Mesh()构造函数便可以将绘制的3D效果图展示出来

	通过 THREE.Color()可以改变指定的网格的颜色(也就是所绘制的物体的颜色)
	mesh.material.color = new THREE.Color()

MeshBasicMaterial()	基础网格材质，一个以简单着色(平面或线框)方式来绘制集合体的材质，这种材质不受光照的影响
	
MeshPhongMaterial() 一种用于具有镜面高光的光泽表面的材质

TextureLoader()	加载texture的一个类，内部使用ImageLoader来加载文件
	初始化一个加载器
		texture 创建一个纹理贴图，将其应用到一个表面，或者作为反射/折射贴图
		var texture = new THREE.TextureLoader()
		texture.load('image路径')
	立即使用纹理进行材质创建
		var material = new THREE.MeshBasicMaterial({
			map: texture
		})

CubeTextureLoader() 创建一个立方体盒子作为天空盒使用，然后把一个环境中上下左右前后六张视图图片作为立方体盒子
	的纹理贴图使用，加载纹理贴图可以使用CubeTextureLoader()趋势
	new THREE.CubeTextureLoader().loader(['放置图片路径的数组'])  // 一般是6张图片

ShaderLib() THREE.js的WebGl着色器库
ShaderMaterial() 是THREE.js中最复杂、最常用的材质之一。通过它可以使用自己定义的顶点着色器，直接在WebGl环境
	中运行。
updateProjectionMatrix() 更新相机投影矩阵，必须在参数发生变化后调用

OrbitControls() 轨道控制器 可以使得相机围绕目标进行轨道运动，如果需要在项目中使用的话，需要在html文件中引入
	OrbitControls.js文件
	
Raycaster() 这个类用于进行光线投射。光线投射用于进行鼠标拾取(在三维空间中计算鼠标移过了什么物体)

VideoTexture() 创建一个使用视频来作为贴图的纹理对象，它和其基类Texture()几乎是相同的，除了总是将
	needsUpdate 设置为true，以便使视频播放时贴图能跟着更新。自动创建mipmaps也会被禁用。

EffectComposer() 创建效果组合器，该着色器主要功能是解决锯齿问题
	var composer = new THREE.EffectComposer()
	composer.addPass('通道对象')
// THREE.js中的常用通道

	RenderPass() 创建场景通道，在指定的场景和相机的基础上渲染出一个新的场景

	OutlinePass() 创建物体边缘发光通道，渲染一根线条轮廓，其他线条均被渲染。

	SharderPass() 创建自定义着色器通道 

	BloomPass() 该通道会使得明亮区域参入较暗的区域。模拟相机照到过多亮光的情形

	FilePass() 通过扫描和失真模拟电视屏幕

	MaskPass() 在当前的图片上面贴一层掩膜，后续通道只会影响被贴的区域

	DotScreenPass() 将一层黑点贴到代表元素图片的屏幕上面

