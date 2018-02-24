function Foo() {
    getName = function () {
        alert(1);
    };
    return this;
}

Foo.getName = function () {
    alert(2);
};
Foo.prototype.getName = function () {
    alert(3);
};
var getName = function () {
    alert(4);
};

function getName() {
    alert(5);
}

//请写出以下输出结果：
// Foo.getName(); // 2
// getName(); // 5 4
// Foo().getName(); // 3 1
// getName(); // 5 1
// new Foo.getName(); // 2
// new Foo().getName(); // 3
// new new Foo().getName(); //3


(function () {
    console.log("hello world 1 ...");
    return false; // logs false
}());


(function () {
    console.log("hello world 2 ...");
    return false; // Also returns false
})();


function foo(p1, p2) {
    this.val = p1 + p2;
}

var bar = foo.bind(null, "p1"); // null -> this, p1 -> 下层函数
console.log(bar);
var baz = new bar("p2");
console.log(baz.val); //  p1p2

// 被忽略的this
function foo() {
    console.log(this.a)
}

var a = 2;
foo.call(null); // 2

//
function foo(a, b) {
    console.log("a:" + a, "b:" + b);
}

foo.apply(null, [2, 3]);
var bar = foo.bind(null, 2);
bar(3);

// 软绑定
if (!Function.prototype.softBind) {
    Function.prototype.softBind = function (obj) {
        var fn = this,
            curried = [].slice.call(arguments, 1),
            bound = function bound() {
                return fn.apply(
                    (!this ||
                        (typeof window !== "undefined" &&
                            this === window) ||
                        (typeof global !== "undefined" &&
                            this === global)
                    ) ? obj : this,
                    curried.concat.apply(curried, arguments)
                );
            };
        bound.prototype = Object.create(fn.prototype);
        return bound;
    };
}

function foo() {
    console.log("name:" + this.name);
}

var obj = {name: "obj"}, obj2 = {name: "obj2"}, obj3 = {name: "obj3"};
var fooOBJ = foo.softBind(obj);
fooOBJ();// obj
obj2.foo = foo.softBind(obj);
obj2.foo(); // obj2
fooOBJ.call(obj3); // obj3
setTimeout(obj2.foo, 10);// obj


