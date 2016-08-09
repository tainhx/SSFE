/// <reference path="TestMerginInterface.ts" />

interface Box {
    height: number;
    width: number;
}


let box: Box = {
    height: 5,
    width: 6,
    scale: 10
}

//-----------------------------------------

interface Cloner {
    clone ()
}