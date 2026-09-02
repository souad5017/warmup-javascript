const inscription = {
    nom: "",
    email: "aminaexample.com",
    motDePasse: "123",
    age: 17
};



function validerInscription(donnees) {
    var errors = [];
    var valide = true;
    if (donnees.nom.length < 2) {
        errors.push('le nom doit contenir au moins 2 caractères .')
    }
    if (!donnees.email.includes('@') || !donnees.email.includes('.')) {
        errors.push("L'email n'est pas valide")
    }
    if (donnees.motDePasse.length < 8) {
        errors.push('Le mot de passe doit contenir au moins 8 caracteres.')
    }
    if (donnees.age < 18){
        errors.push("Vous devez avoir au moins 18 ans.")
    }
    if(errors){
        valide = false
    }
    return {valide , errors}
}

console.log(validerInscription(inscription))


console.log(inscription.email.includes('@'));