
//Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.
// CIA YRA DVIMACIAI

console.log(" DVIMACIAI MASYVAI 1 uzduotis");

masyvas = [];
for (let i = 0; i < 3; i++) {
    masyvas[i] = [];
    for (let a = 0; a < 5; a++) {
        masyvas[i][a] = 5 + Math.round(Math.random() * 20);
    }
}

console.log(masyvas);

//Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;
console.log("2 uzduotis");

console.log("A");

let sum = 0;
for (let i = 0; i < masyvas.length; i++) {
    for (let a = 0; a < masyvas[i].length; a++) {
        if (masyvas[i][a] > 10) {
            sum += masyvas[i][a];
        }
    }
}

console.log(sum);

//Raskite didžiausio elemento reikšmę;
console.log("B");

let didziausia = 0;

for (let i = 0; i < masyvas.length; i++) {
    for (let a = 0; a < masyvas[i].length; a++) {

        if (masyvas[i][a] > didziausia) {
            didziausia = masyvas[i][a];
        }
    }

}
console.log("didziausia: ", didziausia);

//Suskaičiuokite kiekvieno antro lygio masyvų su vienodais indeksais sumas (t.y. suma reikšmių turinčių indeksą 0, 1 ir t.t.)



console.log("-----2c----");
resultArray = [];
for (let a = 0; a < masyvas[0].length; a++) {
    resultArray[a] = 0;
}

for (let i = 0; i < masyvas.length; i++) {
    for (let a = 0; a < masyvas[i].length; a++) {
        resultArray[a] += masyvas[i][a];

    }

}
console.log(resultArray);

//min + Math.round(Math.random() * (max - min));

//Visus masyvus “pailginkite” iki 7 elementų
console.log("D");


for (let i = 0; i < masyvas.length; i++) {
    for (let x = 5; x < 7; x++) {
        masyvas[i][x] = 5 + Math.round(Math.random() * 20);

    }

}
console.log(masyvas);



//Suskaičiuokite kiekvieno iš antro lygio masyvų elementų sumą atskirai ir sumas 
//panaudokite kaip reikšmes sukuriant naują masyvą. T.y. pirma naujo masyvo reikšmė turi būti lygi 
//mažesnio masyvo, turinčio indeksą 0 dideliame masyve, visų elementų sumai 
console.log("E");


let naujasMasyvas = [];
let sum4 = [];
for (let i = 0; i < masyvas.length; i++) {
    sum4.push(masyvas[i].reduce((a, b) => a + b, 0));
}
console.log("SUMA: ");
console.log(sum);

let naujasMasyvas2 = [];
let sum2 = [];
for (let i = 0; i < masyvas.length; i++) {
    skaicius = 0;
    for (let j = 0; j < masyvas[i].length; j++) {
        skaicius = skaicius + masyvas[i][j];
    }
    sum2.push(skaicius);
    skaicius = 0;
}
console.log("NAUJAS masyvas: ");
console.log(sum2);


console.log("3 užduotis -----------------------------------------");
//Sukurkite masyvą iš 10 elementų. Kiekvienas masyvo elementas turi būti masyvas su 
//atsitiktiniu kiekiu nuo 2 iki 20 elementų. Elementų reikšmės atsitiktinai parinktos raidės iš 
//intervalo A-Z. Išrūšiuokite antro lygio masyvus pagal abėcėlę (t.y. tuos kur su raidėm).



let charArray = [];
let charArrayLength = 10;
let max2 = 20;
let min2 = 2;
var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var charactersLength = characters.length;
for (let i = 0; i < charArrayLength; i++) {
    charArray[i] = [];
    let newElementLength = Math.round(Math.random() * (max2 - min2) + min2);
    for (let a = 0; a < newElementLength; a++) {
        charArray[i][a] = characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    charArray[i].sort();
}

console.log(charArray);

console.log("4 užduotis -----------------------------------------\n");

//Išrūšiuokite trečio uždavinio pirmo lygio masyvą taip, kad elementai kurių masyvai trumpiausi
//eitų pradžioje. Masyvai kurie turi bent vieną “K” raidę, visada būtų didžiojo masyvo visai pradžioje.

charArray.sort(function (a, b) {
    // ASC  -> a.length - b.length
    // DESC -> b.length - a.length
    return a.length - b.length;
});

console.log(charArray);

let newID = 0;
let hasK = false;
for (let i = 0; i < charArray.length; i++) {
    for (let a = 0; a <= charArray[i].length; a++) {
        if (charArray[i][a] == "K") {
            hasK = true;
        }
    }
    if (hasK && i != newID) {
        let new5 = charArray[newID];
        charArray[newID] = charArray[i];
        charArray[i] = new5;
        hasK = false;
        newID++;
    } else {
        hasK = false;
    }
}

console.log(charArray);


console.log("5 užduotis -----------------------------------------\n");

//Sukurkite masyvą iš 30 elementų. Kiekvienas masyvo elementas yra masyvas [user_id => xxx, place_in_row => xxx]
//user_id atsitiktinis unikalus skaičius nuo 1 iki 1000000, place_in_row atsitiktinis skaičius nuo 0 iki 100. 



let userID = "user_id";
let placeInRow = "place_in_row";
let userArray = [];

let usrArrChildLength = 2;
minID = 1;
maxID = 1000000;
minPlace = 1;
maxPlace = 100;

for (let i = 0; i < 30; i++) {
    userArray[i] = [];
    let ID = Math.round(Math.random() * (maxID - minID) + minID);
    let Num = Math.round(Math.random() * (99) + 1);
    userArray[i] = {
        userID: ID,
        placeInRow: Num
    };
}
console.log(userArray);


console.log("6 užduotis -----------------------------------------\n");
//Išrūšiuokite 5 uždavinio masyvą pagal user_id didėjančia tvarka. Ir paskui išrūšiuokite pagal place_in_row mažėjančia tvarka.


function compareUserID(a, b) {

    return a.userID - b.userID;
}

function comparePlaceInRow(a, b) {

    return a.placeInRow - b.placeInRow;
}

console.log(userArray.sort(compareUserID));
console.log(userArray.sort(comparePlaceInRow));


console.log("8 užduotis -----------------------------------------\n");

//Sukurkite masyvą iš 10 elementų. Masyvo reikšmes užpildykite pagal taisyklę: generuokite skaičių nuo 0 iki 5. Ir sukurkite tokio ilgio masyvą.
//Jeigu reikšmė yra 0 masyvo nekurkite. Antro lygio masyvo reikšmes užpildykite atsitiktiniais skaičiais nuo 0 iki 10.
//Ten kur masyvo nekūrėte reikšmę nuo 0 iki 10 įrašykite tiesiogiai.

let array = [];

for (let i = 0; i < 10; i++) {
    let randomID = Math.round(Math.random() * 5);
    if (randomID == 0) {
        array[i] = Math.round(Math.random() * 10);
    } else {
        array[i] = [];
        for (let a = 0; a < randomID; a++) {
            array[i][a] = Math.round(Math.random() * 10);
        }
    }
}

console.log(array);