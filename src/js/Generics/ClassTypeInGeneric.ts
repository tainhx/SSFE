/**\
 * function create<T>(c: {new(): T; }): T {
    return new c();
}
 */

class BeeKeeper {
    hasMask: boolean;
}

class ZooKeeper {
    nametag: string;
}

class Animals {
    numLegs: number;
}

class Bee extends Animals {
    keeper: BeeKeeper;
}

class Lion extends Animals {
    keeper: ZooKeeper;
}

function findKeeper<A extends Animals,K>(
    a: { new (): A; prototype: { keeper: K } }
): K{

    return a.prototype.keeper;
}

console.log(findKeeper(Lion).nametag);  // typechecks!
