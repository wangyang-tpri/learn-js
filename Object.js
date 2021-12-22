var cobj = Object.create(null);
// Object.freeze(cobj)
cobj.a = 'wang';
cobj.add = () => {
    1 + 2;    
}

Object.assign(cobj, {
    b: 10
})
console.log(cobj)
var arr = [20, 30];
Object.defineProperty(cobj, 'arr2', {
    value: arr,
    writable:false,
    enumerable: true,
    configurable: true
})
console.log(cobj)
console.log(Object.getOwnPropertyNames(cobj))
console.log(Object.keys(cobj))
console.log(Object.getPrototypeOf(cobj))