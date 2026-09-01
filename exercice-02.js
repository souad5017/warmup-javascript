const temperatures = [-5, 10, 22, 34];

function celsiusVersFahrenheit(celsius) {
    F = celsius * 9 / 5+32;
    return F;
}

console.log(celsiusVersFahrenheit(22))
console.log(celsiusVersFahrenheit(-5))

function decrireTemperature(celsius){
    if(celsius < 10){
        return 'Froid';
    }
    else if (celsius <= 25){
        return 'Doux';
    }else{
        return 'Chaud';
    }
}


console.log(decrireTemperature(-5))
console.log(decrireTemperature(10))
console.log(decrireTemperature(34))