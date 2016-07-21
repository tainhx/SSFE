import abc from './IStringValidator';
import {IPerson} from './IPerson';

export const numberRegexp = /^[0-9]+$/;

export class ZipCodeValidator implements abc {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }

    Do(obj: IPerson): void {
        console.log(obj.Age)
        console.log(obj.Name);
        console.log(obj['Class']);
    }
}

let zip = new ZipCodeValidator();
let person = { Name: 'a', Age: 12 };
zip.Do(person);