// interface IMath {
//     x: number;
//     y: number;

//     Do();
// }

//---------------Optional Properties --------------
interface IMath {
    x: number;
    y: number;
    z?: number;

    Do?(): number;
}

class Calculator implements IMath {
    x: number;
    y: number;
}



