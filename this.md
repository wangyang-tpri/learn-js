
/**
 * js�е�thisָ��
 * ���ϸ�ģʽ�ͷ��ϸ�ģʽ��Ҳ���������
 *  es6�������˼�ͷ��������ͷ�������ṩthis�İ󶨣�thisʼ��ָ��ʷ��������ĵ�ֵ
 * 
 * �ڴ��������� �����ĵ��÷�ʽ ������this��ָ��
 *  ȫ��������
 *      �����Ƿ����ϸ�ģʽ��ȫ���������У�this����ָ��window��
 *    
 *  ����������
 *      �ں����ڲ���this��ֵȡ���ڱ����õķ�ʽ
 *  
 *  this�Ͷ���ת��
 *  function add (a, b) {
        return a + b + this.a + this.b;
    }
    var o = {
        a: 10,
        b: 3
    }
    add.call(o, 5, 7)  // 25

    add.apply(o, [5, 7]) // 25     
 *      
 *
 *  bind() ����
 *      ��es6�м�����һ��bind() ������ f.bind(someObject),�����Ļ������ᴴ��һ����f����������ͬ�������
 *      ������ķ�����������Զ������ı䣬ֻ���һ�Ρ�
 * functon f (){
 *          return this.a 
 *      }   
 * var o = {a: 'bind'}
 * var g = f.bind (o)
 * console.log(g())  // bind
 * var b = {a: 'string'}
 * var c = f.bind(b)
 * console.log(c()) // bind
 * 
 * �ڼ�ͷ�����У�this��Զָ�򴴽�ʱ�ķ���������У�������ʹ��call��apply������bind
 * ������ı� this��ָ��
 * 
 * �����еķ������󲿷������ָ����ǵ��õĶ��󣬻���һ�����������ָ����������ã������ĸ���Ա�ķ���
 * û��̫��Ĺ�ϵ��
 * 
 * ԭ�����е�this��ָ����ǵ�����������Ķ��󣬾���÷��������������һ��
 * 
 * ��Ϊ���캯��ʹ��ʱ��this��ָ�����ڰ󶨵��µĹ��캯����

*/

// ��дnew() ����
//  �ı�thisָ��
// 

function new2(obj, ...reset) {
    var object = Object.create(obj.prototype)
    var result = obj.apply(object, reset)
    return typeof result === 'object' ? result : object

}
function C() {
    this.a = '��дnew����'
}
C.prototype.sayName = function () {
    console.log(this.a)
}
var cc = new2(C)
console.log(cc.sayName())

this�����еı��ֺ��ں����еı�����һ�µģ���Ϊ�౾����Ҳ�Ǻ���

    ����Ĺ��캯���У�thisֻ��һ������������е����зǾ�̬���� ���ᱻ��ӵ�this��ԭ����


ԭ��������ķ�����thisָ�򱻵��÷����Ķ��󣬾���������������������һ�� 
    
��ΪDOM�¼��Ĵ�������thisָ�򴥷��¼���Ԫ��

��Ϊһ�������¼��Ĵ�������thisָ����������ڵ�DOMԪ�أ�

getter��setter�е�this�������this�󶨵����û��ȡ����ʱ�Ķ���
