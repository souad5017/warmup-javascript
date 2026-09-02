
const panier = [
 { nom: "Souris", prix: 150, quantite: 2 },
 { nom: "Casque", prix: 400, quantite: 1 },
 { nom: "Tapis", prix: 60, quantite: 3 },
 { nom: "Webcam", prix: 520, quantite: 1 }
];

const noms = panier.map(e => {
    return e.nom
})

console.log(noms)

const total = panier.map(e =>{
    return e.nom +' '+ e.prix*e.quantite
})

console.log(total)

const prix = panier.filter(e =>{
    return e.prix > 100
}).map(e=>{
    return e.nom
})

console.log(prix)


const totalPanier = panier.reduce((a,b)=>{
    return a + b.prix * b.quantite
},0)

console.log(totalPanier)


const nmbr = panier.reduce((a,b)=>{
    return a + b.quantite
},0)

console.log(nmbr)