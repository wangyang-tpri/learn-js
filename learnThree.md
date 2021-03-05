
	THREE.js的github地址(https://github.com/mrdoob/three.js/)
	1.three.js简介：在现在的这样一个互联网时代,人与人之间的联系,Web页面的的产品主要都是二维产品,不能给用户提供更直接、真实、形象的产品交互,随着WebGl技术在浏览器中的应用,将应用做成3D展示成为可能.由于WebGl的底层过于复杂,学习成本很大,所以就诞生了许多基于WebGl封装的三方件,three.js无疑是最成功和使用最广泛的一个.Three.js是一个基于原生WebGl封装运行的三维引擎，是国内使用最广泛，中文参考文档最多的三维引擎。
	2.three.js主要可以应用到以下几个方面：物联网3D可视化、产品720在线预览、数据可视化、H5/微信小程序(微信小游戏跳一跳就是使用three.js开发的)、科教领域、机械领域、WebVR、室内设计相关、游戏开发等等。
	3.three.js的主要API，可以参考(http://www.webgl3d.cn/threejs/docs/),本文主要就是记录自己在项目开发中使用到的一些常用API，以及遇到的一些问题。
	4.three.js的开发工作。
		1.three.js主要由4部分组成：scene(场景)、camera(相机)、light(光线)、render(渲染器)。
		1.1 scene(场景)是three.js中的核心，three.js中的场景就如我们平时开发的一个容器一样，后续开发中的camera|light|都是要添加scene中的。
		var scene = new THREE.Scene();
		初始化一个场景
		1.2 light(光源) 就是一个从一个点向各个方向发射的光源。
		var light = new THREE.PointLight( 0xff0000, 1, 100);
	    light.position.set( 50, 50, 50) // x, y, z的位置设置
	    scene.add(light); // 将设置好位置和颜色的光源添加的场景中
	    1.3 camera(相机) 相机主要分为OrthographicCamera() 正交摄像机， PerspectiveCamera() 透视摄像机。
	    	
	    正交摄像机就是物体物体不管是从镜头的远/近看起来的大小都是一样的
	    var camera = new THREE.OrthographicCamera(left, right, top, bottom, near, far)
	    参数说明：
	    	left: 摄像机视锥体左侧面
	    	right：摄像机视锥体右侧面
	    	top： 摄像机视锥体上侧面
	    	bottom：摄像机视锥体下侧面
	    	near： 摄像机视锥体进端面
	    	far: 摄像机视锥体远端面
	    camera.position.set(200, 300, 400)
	    // 设置相机方向(指向场景方向)
	    camera.lookAt(scene.position)


![](C:\Users\lenovo\Pictures\正交相机.png)

		透视摄像机就是有一个基本点，从这个点看过去，远处的物体要比近处的物体大，就是远大近小。



![](C:\Users\lenovo\Pictures\透视投影.png)

	1.4 webGLRender(渲染器) 通过WebGL渲染出你精心准备的场景
		var renderer = new THREE WebGLRender() // 创建渲染器
		renderer.setSzie(width, height) // 设置渲染器的大小
		renderer.setColor() // 设置渲染器的颜色
		// 将渲染好的场景添加到页面中
		document.body.appendChild(renderer.domElement)
		// 通过render方法可以将创建好的场景展示出来
		renderer.render(scene, camera)
		

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>学习three.js</title>
    <style>
        body {
            margin: 0;
            overflow: hidden;
        }
    </style>
</head>
<body>

    <script src="./ThreeJs/js/three.js"></script>
    <script>

        //  常见 ---> 相机 ---> 渲染器
        //  Scene    Camera   Renderer
        // 创建一个场景
        var scene = new THREE.Scene()
        // 创建一个网络模型 
        var geometry = new THREE.BoxGeometry(100, 100, 100)
        // var geometry = new THREE.SphereGeometry(60, 40, 40)
        var meterial = new THREE.MeshLambertMaterial({
            color: 0x0000ff
        })
        // 材质对象meterial
        var mesh = new THREE.Mesh(geometry, meterial)
        // 网络模型添加到场景中
        scene.add(mesh)

        /**
         * 光源设置  点光源
        */
        var point = new THREE.PointLight(0x0000ff)
        point.position.set(400, 200, 300)
        // 点光源添加到场景中
        scene.add(point)

        // 环境光
        var ambient = new THREE.AmbientLight(0x444444)
        scene.add(ambient)

        var width = window.innerWidth;
        var height = window.innerHeight;
        var k = width / height;

        // 三维场景显示范围控制系数， 系数越大，显示的范围越大
        var s = 300;
        var camera = new THREE.OrthographicCamera( -s*k, s*k, s, -s, 1, 1000 )
        // camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 10000);
        camera.position.set( 200, 300, 400)
        // 设置相机方向 (指向的场景对象)

        camera.lookAt(scene.position)

        /**
         * 创建渲染器对象
        */
        var renderer = new THREE.WebGLRenderer()
        renderer.setSize(width, height)
        renderer.setClearColor(0xcccccc, 1)
        document.body.appendChild(renderer.domElement)
        // 单独调用render() 方法的话 所绘制的图形是静态的
        // renderer.render(scene, camera)
            
        function animateRender() {
            renderer.render(scene, camera)
            mesh.rotateY(0.01)
            // 通过在requestAnimationFrame() 方法可以让绘制出来的立方体绕Y轴不停的旋转
            requestAnimationFrame(animateRender)
        }
        animateRender()
    </script>
</body>
</html>
```

