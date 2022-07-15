let scroll = document.querySelector("button.scroll")


window.addEventListener("scroll" , e => {
    if(window.scrollY > 300 & window.scrollY < 2000){
       scroll.classList.add("show")
    } else {
     scroll.classList.remove("show")
    }
})

scroll.addEventListener("click" , e => {
    if(scroll.classList.contains("show")){ 
    window.scrollTo({top: 0 , behavior:"smooth"})
     }
})


let scroll2 = document.querySelector("button.scroll2")


window.addEventListener("scroll" , e => {
    if(window.scrollY > 2000){
       scroll2.classList.add("show")
    } else {
     scroll2.classList.remove("show")
    }
})

scroll2.addEventListener("click" , e => {
    if(scroll.classList.contains("show")){ 
   document.querySelector("#articels").scrollIntoView({top: 0 , behavior:"smooth"})
     }
})



////

function Auto(marke, modell, leistung){
    // Eine Funktion, die mit "new" aufgerufen wird, legt im "this" ein leeres Objekt an ...
    console.log(this);

    this.marke = marke;
    this.modell = modell;
    this.leistungKW = leistung;
    this.keyNo = Math.random() * 1e17;

    this.leistungPS = function(){
        return Math.round(this.leistungKW / .73)
    }

    // ... und gibt das "this" automatisch als return zurück
}

let myAuto = new Auto('VW', 'ID', 128);
let yourAuto = new Auto('BMW', '320i', 147);
let ourAuto = new Auto('Toyota', 'Yaris', 52);

console.log(myAuto);
console.log(yourAuto);
console.log(ourAuto);
console.log(ourAuto.leistungPS());

////

class Auto {
    constructor(marke, modell, leistung) {
        this.marke = marke;
        this.modell = modell;
        this.leistungKW = leistung;
        this.keyNo = Math.random() * 1e17;
    }

    get leistungPS() {
        return Math.round(this.leistungKW / .73)
    }
}

// Eine erweiterte Variante der "Auto"-Klasse soll und "Bus" gespeichert werden
class Bus extends Auto {
    constructor(marke, modell, leistung, sitze) {
        // Super-Klasse ("Eltern") aufrufen
        super(marke, modell, leistung);
        this.sitze = sitze;
    }
}

class Reisebus extends Bus {
    constructor(marke, modell, leistung, sitze, toilette, etagen) {
        super(marke, modell, leistung, sitze);
        this.etagen = etagen;
        this.toilette = toilette;
    }
}

class Nightliner extends Reisebus {
    constructor(marke, modell, leistung, sitze, toilette, etagen, betten) {
        super(marke, modell, leistung, sitze, toilette, etagen);
        this.betten = betten;
    }
}

let myAuto = new Auto('VW', 'ID', 128);
let myBus = new Bus('Setra', 'Explorer', 217, 32);
let myNighty = new Nightliner('DB', '1234', 430, 4, 1, 2, 4);

console.log(myAuto);
console.log(myBus);
console.log(myNighty);


////


class Auto {
    constructor(marke, modell, leistung) {
        this.marke = marke;
        this.modell = modell;
        this.leistungKW = leistung;
        this.keyNo = Math.random() * 1e17;
    }

    get leistungPS() {
        return Math.round(this.leistungKW / .73)
    }
}

// Eine erweiterte Variante der "Auto"-Klasse soll und "Bus" gespeichert werden
class Bus extends Auto {
    constructor(marke, modell, leistung, sitze){
        // Super-Klasse ("Eltern") aufrufen
        super(marke, modell, leistung);
        this.sitze = sitze;
    }
}


let myAuto = new Auto('VW', 'ID', 128);
let myBus = new Bus('Setra', 'Explorer', 217, 32);

console.log(myAuto);
console.log(myBus);


/////


class Auto {
    // keyNo ist ein Feld. Dieses kann beim Anlegen noch nicht mit einem Parameter gefüllt werden
    #keyNo = Math.random() * 1e17;

    constructor(marke, modell, leistung) {
        this.marke = marke;
        this.modell = modell;
        this.leistungKW = leistung;
    }

    get leistungPS() {
        return Math.round(this.leistungKW / .73)
    }

    getKeyNo(){
        return this.#keyNo;
    }
    
}

let myAuto = new Auto('VW', 'ID', 128);

console.log(myAuto.getKeyNo());
