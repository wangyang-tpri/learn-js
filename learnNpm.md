ȫ�ְ�װ node 
	��node�Ĺ������չ��������ָ�������ж�Ӧ�����أ�Ȼ���ڱ��ذ�װ.exeӦ�ó��򼴿ɡ�
	npm(Node Package Manager)�Ǹ���nodeһ��װ�İ�����ͷַ����ߣ����ܷ������javascript���������ء����������Լ��ϴ��Ѿ���װ�İ���ֻҪ��װ��node��ͬʱҲ�Ͱ�װ��npm��
	Ϊ�˼򻯿����ĸ��Ӷȣ����õĹ����node�еİ�(package)��npm������ߵ����ˡ�
    	Ϊ�˸��õĹ����ǰ����Ŀ�е���Դ��webpack�����ˡ�
    	node ---> npm ---> webpack

	npm�����������
		1.��վ (�û�������npm��������www.npmjs.com���ݰ���������ϸ�Ĳ��ҵ������������������Ϣ)
		2.ע��� (��һ���޴�����ݿ⣬���汣����ÿ���� package ����Ϣ)
		3.cli (ͨ��������ն������У�������ͨ��cli������npm֮�����ϵ)
		npm�Լ������Լ�
			npm install --global npm 
		npm��������������
    	
ȫ�ְ�װwebpack
	webpack��һ��npm�е�һ��ģ�飬����ʹ��npm���а�װ���ڴ���Ĺ�������Ҫ����node������
	webpack��һ��ǰ�˵ľ�̬��Դ���/�����Ĺ��ߡ������Ը���ģ���������ϵ���о�̬������Ȼ����ָ���Ĺ��򣬽���Щģ������ָ���ľ�̬��Դ��
	
	������Ŀ��ʼ��package.json�ļ���npm init -y

	��װģ�飺npm install
	
		npm install webpack -g (Ĭ�ϻᰲװ���µİ汾)	
		npm install webpack@4.2.1 -g (�ᰲװָ���İ汾)
		-S��--save ��װ����Ϣ���ᰲװ��dependencies(����������)
		-D, --save-dev ��װ����Ϣ���ᰲװ��devDependencies(����������)
		
	ж��ģ�飺npm uninstall
	
		npm uninstall webpack -g 
		npm uninstall webpack -g -D (ж�ؿ��������е�webpack)
		
	����ģ�飺npm update
		
		npm update <name> -g (ȫ�ָ���)
		npm update <name> -D (���¿�������)
	
	���ģ���Ƿ��Ѿ���ʱ��npm outdated 
	������Ŀ�е����������npm config 
	����ģ��Ļ��棺npm cache
	�鿴ģ���ע����Ϣ��npm view 
	�鿴ģ��������� npm view webpack dependencies
	����û���npm adduser
	����ģ�飺npm publish(����ģ��Ļ�����Ҫ�û���¼��)
	��ӷ��ʼ���npm access
	���Լ���ģ�鷢����node_modules�У�npm link 