
interface GenericIdentityFn<T> {
    (arg: T): T;
}


function Do<T>(arg: T): T {
    return arg;
}

let myGenericIdentity: GenericIdentityFn<number> = Do;
//-------------------------------------------------
