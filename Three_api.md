THREE.jsʹ�õ�����������ϵ

Scene() ����
	var scene = new THREE.Scene()
		scene.add() �ڳ����������Ʒ
		scene.remove() �Ƴ������е���Ʒ
		scene.children() ��ȡ�����������Ӷ�����б�
		scene.getChildByName() ����name���� ��ȡ�����е�ĳ������


BoxGeometry()	���ڴ�����������߲�������ı���
	var geometry = BoxGeometry(width, height, depth)
	������ɵ�ͼ��ʹ��MeshBasicMaterial()�����������Σ�����������ɫ
	var material = new THREE.MeshBasicMaterial('red')

Mesh() ����
	var mesh = new THREE.Mesh(geometry, material)
	material --- (��ѡ) ������һ��material ����һ��������meterial�����飬Ĭ����һ���µ�MeshBasicMaterial()
		�����������͵Ĳ�����MeshPhongMaterial()
	ͨ��Mesh()���캯������Խ����Ƶ�3DЧ��ͼչʾ����

	ͨ�� THREE.Color()���Ըı�ָ�����������ɫ(Ҳ���������Ƶ��������ɫ)
	mesh.material.color = new THREE.Color()

MeshBasicMaterial()	����������ʣ�һ���Լ���ɫ(ƽ����߿�)��ʽ�����Ƽ�����Ĳ��ʣ����ֲ��ʲ��ܹ��յ�Ӱ��
	
MeshPhongMaterial() һ�����ھ��о���߹�Ĺ������Ĳ���

TextureLoader()	����texture��һ���࣬�ڲ�ʹ��ImageLoader�������ļ�
	��ʼ��һ��������
		texture ����һ��������ͼ������Ӧ�õ�һ�����棬������Ϊ����/������ͼ
		var texture = new THREE.TextureLoader()
		texture.load('image·��')
	����ʹ��������в��ʴ���
		var material = new THREE.MeshBasicMaterial({
			map: texture
		})



CubeTextureLoader() ����һ�������������Ϊ��պ�ʹ�ã�Ȼ���һ����������������ǰ��������ͼͼƬ��Ϊ���������
	��������ͼʹ�ã�����������ͼ����ʹ��CubeTextureLoader()����
	new THREE.CubeTextureLoader().loader(['����ͼƬ·��������'])  // һ����6��ͼƬ

ShaderLib() THREE.js��WebGl��ɫ����
ShaderMaterial() ��THREE.js����ӡ���õĲ���֮һ��ͨ��������ʹ���Լ�����Ķ�����ɫ����ֱ����WebGl����
	�����С�
updateProjectionMatrix() �������ͶӰ���󣬱����ڲ��������仯�����

