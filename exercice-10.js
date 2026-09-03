const ventes = [
    { vendeur: "Amina", produit: "Ordinateur portable", montant: 8500, mois: "janvier" },
    { vendeur: "Youssef", produit: "Smartphone", montant: 4200, mois: "janvier" },
    { vendeur: "Amina", produit: "Casque audio", montant: 900, mois: "fevrier" },
    { vendeur: "Sara", produit: "Tablette", montant: 3100, mois: "fevrier" },
    { vendeur: "Youssef", produit: "Clavier", montant: 450, mois: "mars" },
    { vendeur: "Sara", produit: "Ecran 27 pouces", montant: 2600, mois: "mars" }
];

const total = ventes.reduce((somme, vente) => {
    return somme += vente.montant
}, 0)

// console.log(total + ' DH')
function ventMax(ventes) {
    const maxVent = ventes.reduce((vente, max) => {
        return vente.montant > max.montant ? vente : max;
    })
    return 'Meilleure vente : ' + maxVent.produit + ' (' + maxVent.vendeur + ')' + ' - ' + maxVent.montant + 'DH'
}

// console.log(ventMax(ventes))


function caParVendeur(ventes) {
    const somme = ventes.reduce((somme, montant) => {
        if (somme[montant.vendeur]) {
            somme[montant.vendeur] += montant.montant
        }
        else {
            somme[montant.vendeur] = montant.montant
        }

        return somme
    }, {})

    return somme
};
// console.log(caParVendeur(ventes));

function calculerMoyenne(ca) {
    const montants = Object.values(ca);
    if (montants.length === 0) return 0;
    const somme = montants.reduce((acc, m) => acc + m, 0);
    return somme / montants.length;
}


// console.log(calculerMoyenne(ventes))

function getVendeursAuDessusMoyenne(ca, moyenne) {
    return Object.entries(ca)
        .filter(([, montant]) => montant > moyenne)
        .map(([vendeur]) => vendeur);
}


function genererRapport(ventes) {


    const meilleureVente = ventMax(ventes);
    const ca = caParVendeur(ventes);
    const moyenne = calculerMoyenne(ca);

    const auDessusMoyenne = getVendeursAuDessusMoyenne(ca, moyenne);



    return `
=== RAPPORT MENSUEL ===
Chiffre d'affaires total : ${total} DH

${meilleureVente}

CA par vendeur :
${Object.entries(ca).map(([vendeur, montant]) => `${vendeur} : ${montant} DH `)}

Moyenne par vendeur : ${moyenne} DH

Vendeurs au-dessus de la moyenne : ${auDessusMoyenne}
`

}

console.log(genererRapport(ventes))