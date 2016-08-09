/**
 * 1. inherits the members of the class but not their implementations
 * 2. inherits even the private and protected members of a base class
 * 3. that interface type can only be implemented by that class or a subclass of it
 */

class Control {
    public state: any;
    print(s: string): void {
        this.state = s;
        console.log(this.state);
    }
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() {

    }
}

class TextBox extends Control {
    select() { };
}

class ImageControl extends Control {
}

class LocationControl implements SelectableControl {
    state: any;
    print(s: string): void {

    }
    select(){
        
    }
}

let selectableControl = new TextBox();
selectableControl.print("hello");


