
/**
 * js中的this指向
 * 在严格模式和非严格模式下也会有区别的
 *  es6中引入了箭头函数，箭头函数不提供this的绑定，this始终指向词法的上下文的值
 * 
 * 在大多数情况下 函数的调用方式 决定了this的指向
 *  全局上下文
 *      无论是否是严格模式，全局上下文中，this都是指向window的
 *    
 *  函数上下文
 *      在函数内部，this的值取决于被调用的方式
 *  
 *  this和对象转换
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
 *  bind() 方法
 *      在es6中加入了一个bind() 方法， f.bind(someObject),这样的话，将会创建一个和f方法有着相同函数体和
 *      作用域的方法，而且永远都不会改变，只会绑定一次。
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
 * 在箭头函数中，this永远指向创建时的封闭作用域中，不管是使用call、apply、还是bind
 * 都不会改变 this的指向。
 * 
 * 对象中的方法，大部分情况下指向的是调用的对象，还有一种情况，就是指向最近的引用，和是哪个成员的方法
 * 没有太大的关系。
 * 
 * 原型链中的this，指向的是调用这个方法的对象，就像该方法在这个对象上一样
 * 
 * 作为构造函数使用时，this被指向正在绑定的新的构造函数上

*/

// 手写new() 方法
//  改变this指向
// 

function new2(obj, ...reset) {
    var object = Object.create(obj.prototype)
    var result = obj.apply(object, reset)
    return typeof result === 'object' ? result : object

}
function C() {
    this.a = '手写new方法'
}
C.prototype.sayName = function () {
    console.log(this.a)
}
var cc = new2(C)
console.log(cc.sayName())

this在类中的表现和在函数中的表现是一致的，因为类本质上也是函数

    在类的构造函数中，this只是一个常规对象，类中的所有非静态方法 都会被添加到this的原型上


原型链上面的方法，this指向被调用方法的对象，就像这个方法在这个对象上一样 
    
作为DOM事件的处理函数，this指向触发事件的元素

作为一个内联事件的处理函数，this指向监听器所在的DOM元素；

getter与setter中的this，都会把this绑定到设置或获取属性时的对象
