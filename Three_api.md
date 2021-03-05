

BoxGeometry()	用于创建立方体或者不规则的四边形
	var geometry = BoxGeometry(width, height, depth)
	创建完成的图形使用MeshBasicMaterial()进行纹理修饰，可以设置颜色
	var material = new THREE.MeshBasicMaterial('red')

Mesh() 网格
	var mesh = new THREE.Mesh(geometry, material)
	material --- (可选) 可以是一个material 或是一个包含有meterial的数组，默认是一个新的MeshBasicMaterial()
		或者其他类型的材质如MeshPhongMaterial()
	通过Mesh()构造函数便可以将绘制的3D效果图展示出来

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

