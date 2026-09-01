
let compteARebours = "";
for (let i = 10; i >= 1; i--) {
    compteARebours += i + ' ';
}


console.log(compteARebours);
console.log("Decollage !");


let somme = 0;

for (let i = 1; i <= 100; i++) {
    somme += i;
}
console.log("Somme de 1 a 100 :" , somme);


let nombresPairs = "";

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        nombresPairs += i + " ";
    }
}
console.log("Nombres pairs : " , nombresPairs);

let compteur = 10;
let compteAReboursWhile = "";

while (compteur >= 1) {
    compteAReboursWhile += compteur + " ";
    compteur--;
}

console.log(compteAReboursWhile);
console.log("Decollage !");