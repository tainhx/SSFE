var foo = 123;

if (true) {
    var foo = 456;
    console.log(foo); // 456
}

console.log(foo); // 456

//--------------------------------------------

let bee = 123;

if (true) {
    let bee = 456;
    console.log(bee); // 456
}

console.log(bee); // 123

//-----------------------------------------------
for (var i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log(i); 
    }, 100 * i);
}

for (let i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log(i); 
    }, 100 * i);
}


