const commandes = [
    { montant: 150, statut: "standard" },
    { montant: 620, statut: "standard" },
    { montant: 1200, statut: "premium" }
];


function calculerCommande(montant, statut) {
    var pourcentageRemise;
    var remise;
    var totalApresRemise;
    var livraison = 0;
    var totalAPayer;
    if (montant < 200) {
        pourcentageRemise = 0;
        remise = 0;
        totalApresRemise = montant;
    } else if (montant >= 200 && montant <= 499) {
        pourcentageRemise = 5;
        remise = (montant * 5) / 100 
        totalApresRemise = montant - remise;
    } else if (montant >= 500 && montant <= 999) {
        pourcentageRemise = 10;
        remise = (montant * 10) / 100
        totalApresRemise = montant - remise
    } else {
        pourcentageRemise = 15;
        remise = (montant * 15) / 100
        totalApresRemise = montant - remise
    }

    if (statut === 'premium') {
        
        (pourcentageRemise += 5 ) <= 20 ? pourcentageRemise : pourcentageRemise = 20 ;
        remise = (montant * pourcentageRemise) / 100
        totalApresRemise = montant - remise
    }
    if(totalApresRemise < 300){
        livraison = 30;
    }

    totalAPayer = totalApresRemise + livraison;
    return {
        pourcentageRemise : pourcentageRemise,
        remise : remise ,
        totalApresRemise : totalApresRemise,
        livraison : livraison,
        totalAPayer : totalAPayer,
    }
}

console.log(calculerCommande(620, "standard"))