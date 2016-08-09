var foo = 123;
if (true) {
    var foo = 456;
    console.log(foo); // 456
}
console.log(foo); // 456
//--------------------------------------------
var bee = 123;
if (true) {
    var bee_1 = 456;
    console.log(bee_1); // 456
}
console.log(bee); // 123
//-----------------------------------------------
for (var i = 0; i < 10; i++) {
    setTimeout(function () { console.log(i); }, 100 * i);
}
var _loop_1 = function(i_1) {
    setTimeout(function () { console.log(i_1); }, 100 * i_1);
};
for (var i_1 = 0; i_1 < 10; i_1++) {
    _loop_1(i_1);
}
