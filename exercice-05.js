const produit = {
    nom: "Clavier mecanique",
    prix: 450,
    stock: 12,
    categorie: "Informatique"
};

console.log(`${produit.nom} - ${produit.prix} DH - ${produit.stock} en stock (${produit.categorie})`);
produit.prix = produit.prix * 1.10;

console.log("Nouveau prix : " + produit.prix);

produit.enPromotion = false;

for (let cle in produit) {
    console.log(`${cle} : ${produit[cle]}`);
}

function estDisponible(produit) {
    if (produit.stock > 0) {
        return true;
    } else {
        return false;
    }
}

console.log("estDisponible(produit) -> " + estDisponible(produit));