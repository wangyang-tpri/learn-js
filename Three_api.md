

BoxGeometry()	���ڴ�����������߲�������ı���
	var geometry = BoxGeometry(width, height, depth)
	������ɵ�ͼ��ʹ��MeshBasicMaterial()�����������Σ�����������ɫ
	var material = new THREE.MeshBasicMaterial('red')

Mesh() ����
	var mesh = new THREE.Mesh(geometry, material)
	material --- (��ѡ) ������һ��material ����һ��������meterial�����飬Ĭ����һ���µ�MeshBasicMaterial()
		�����������͵Ĳ�����MeshPhongMaterial()
	ͨ��Mesh()���캯������Խ����Ƶ�3DЧ��ͼչʾ����

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

