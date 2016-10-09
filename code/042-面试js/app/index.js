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





