//------------- DEFINE TYPE ALIAS------------
type Name = string;

function TestName(n: Name) {
    console.log(n);
}
TestName('Tai');


TestName(1);


//---------------- Act  sort of interface -----------------
type demoType = {
    name: string;
    age: number;
}

interface demoInteface {
    name: string;
    age: number;
}

function Do(t: demoInteface) {
    console.log(`${t.name} - ${t.age}`);
}

let demoType1: demoType;
let demoInterface1: demoInteface;
Do(demoType1);
Do(demoInterface1);

//----------------- CAN BE GENERIC --------------------------------
type Container<T> = { value: T };

type Tree<T> = {
    value: T;
    left: Tree<T>;
    right: Tree<T>;
}

