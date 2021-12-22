// 全局上下文
function fn(){
    return this;
}
console.log(fn())
function fn2(){
    'use strict'
    return this;
}
console.log(fn2())

class Example{
    constructor(){
       const proto = Object.getPrototypeOf(this)
       console.log(Object.getOwnPropertyNames(proto)) 
    }
    first(){}
    second(){}
    static third(){}
}
new Example()

class Base{}
class Dog extends Base {}
class Cart extends Base {
    constructor(){
        return {a: 1}
    }
}
class Animal extends Base {
    constructor(){
        super()
        // 添加super之后 就可以正确了
    }
    // 这个会抛出一个错误
}
new Dog()
new Cart()
new Animal()
// 作为对象的方法
var o = {
    prop: 45
}
function oo(){
    return this.prop;
}
o.f = oo;
console.log(o.f())


// 在原型链中
var pro = {
    add: function(){
        return this.a + this.b;
    }
}
var cc = Object.create(pro);
cc.a = 10;
cc.b = 20;
console.log(cc.add())
// 在geter和setter中
function add (){
    return this.a + this.b;

}

var g = {
    a: 2,
    b: 6,
    get average(){
        return (this.a + this.b) / 2;
    }
}

Object.defineProperty(g, 'add', {
    get: add,
    enumerable: true, // 可枚举的
    configurable: true // 可配置的
})
console.log(g)
console.log(g.average, g.add)

// 构造函数中的this 

// 箭头函数中的this

var bar = {
    foo:function (){
        var x = (() => this);
        return x;
    }
}
console.log(bar.foo())