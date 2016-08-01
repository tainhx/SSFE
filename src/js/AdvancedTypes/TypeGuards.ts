interface Bird {
    fly();
    layEgg();
}

interface Fish {
    swim();
    layEgg();
}

function getSmallPet(): Fish | Bird {
    // TODO : return Fish or Bird
}


let pet = getSmallPet();
pet.layEgg();


//----------------------------------------------------------------------------------------

// if (pet.swim) {
//     pet.swim();
// } else if (pet.fly) {
//     pet.fly();
// }

//---------------------------------------------------------------------------------------------
if ((<Fish>pet).swim) {
    (<Fish>pet).swim();
}
else {
    (<Bird>pet).fly();
}

//----------------------------------------------------------------------
function isFish(pet: Fish | Bird): pet is Fish {
    return (<Fish>pet).swim !== undefined;
}

if(isFish(pet)){
    pet.swim();
}
else{
    pet.fly();
}