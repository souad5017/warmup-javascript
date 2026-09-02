const titre = " Mon Premier Projet MERN ";
const phrase = "Le JavaScript est la base du stack MERN";
const nomComplet = "amina el idrissi";


function genererSlug(titre){
   return titre.trim().toLowerCase().split(" ").filter(map => map !== '').join("-")
}

console.log(genererSlug(titre))


function compterMots(phrase) {
    return phrase.trim().split(' ').length
}
console.log(compterMots(phrase))

function initiales(nomComplet){
    return nomComplet.split(" ").map(e => e[0].toUpperCase()).join(".")
}
console.log(initiales(nomComplet))


console.log(genererSlug(" Sprint   1  "))