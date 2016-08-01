
//-------------- Generic Interface -----------------
interface GenericIdentityFn {
    <T>(arg: T): T;
}

function Do<T>(arg: T): T {
    return arg;
}

let myGenericIdentity: GenericIdentityFn = Do;
//-------------------------------------------------


//---------- Parameter type visible to all member of Interface
interface GenericIdentityFn_1<T> {
    (arg: T): T;
}

let myGenericIdentity_1: GenericIdentityFn_1<number> = Do;