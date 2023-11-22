//Exo 1

/**
 * Demande à l'utilisateur de saisir son nom et l'affiche sous le format "Bonjour <nom> !"
 * @param {String} nom
 * @returns {String}
 */
function afficheNom(nom) {
    return "Bienvenue " + nom + " !";
}

console.log(afficheNom("test"));


//Exo 2

/**
 * Affiche les nombres de 0 à 100
 */
function zeroACent() {
    for (let i = 0; i <= 100; i++) {
        console.log(i);
    }
}

zeroACent();


//Exo 3

/**
 * Additionne deux nombres
 * @param {Number} num1
 * @param {Number} num2
 * @returns {Number}
 */
function addition(num1, num2) {
    return num1 + num2;
}

console.log(addition(4,5));


//Exo 4

/**
 * Désigne une catégorie selon l'âge
 * @param {Number} age 
 * @returns {String}
 */
function categorisation(age) {
    if (age < 8) {
        return "poussin";
    }
    else if (age < 10) {
        return "pupille";
    }
    else if (age < 12) {
        return "minime";
    }
    else {
        return "cadet";
    }
}

console.log(categorisation(7))


//Exo 5

/**
 * Renvoie un message spécifiant le profit ou la perte en fonction du prix de fabrication et du prix de vente
 * @param {Number} prixFab 
 * @param {Number} prixVen 
 * @returns {String}
 */
function perteOuProfit (prixFab, prixVen) {
    let profit = prixVen - prixFab;
    //Si il y n'y a pas profit, informe du montant de la perte, sinon informe du montant du profit
    return (profit<0)?`Il y a une perte de ${-profit}€`:`Il y a un profit de ${profit}€`;
}

console.log(perteOuProfit(10, 11));


//Exo 6

/**
 * Informe si le nombre est pair ou impair
 * @param {Number} nombre 
 * @returns {String}
 */
function pairOuImpair(nombre) {
    //Si le résultat du modulo 2 du nombre est 1, le nombre est impaire, sinon il est pair
    return (nombre%2)?`Le nombre ${nombre} est impair`:`Le nombre ${nombre} est pair`;
}

console.log(pairOuImpair(8))


//Exo 7

/**
 * Informe si le paramètre est un nombre positif, négatif ou nul
 * @param {Number} nombre 
 * @returns {String}
 */
function valeurAbs(nombre) {
    if (nombre > 0) {
        return ("" + nombre +" est un nombre positif");
    }
    else if (nombre == 0) {
        return ("0 est un nombre nul");
    }
    else {
        return ("" + nombre + " est un nombre négatif");
    }
}

console.log(valeurAbs(-15));


//Exo 8

/**
 * Affiche la table de multiplication jusqu'à 10 du nombre en paramètre
 * @param {Number} nombre 
 */
function tabledeMult(nombre) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${nombre} x ${i} = ${nombre*i}`)
    }
}

tabledeMult(5);


//Exo 9

/**
 * Renvoie la somme de tous les éléments du tableau mis en paramètre
 * @param {Array} tableau 
 * @returns 
 */
function somme(tableau) {
    let res = 0;
    for (nombre of tableau) {
        //Additionne le nombre à la somme des nombre précédents
        res += nombre;
    }
    return res;
}

console.log(somme([1,2,3,4,5]));


//__________________________________
//Part 2


//Exo 1

/**
 * Renvoie une String informant du plus grand nombre parmis les paramètres
 * @param {Number} num1 
 * @param {Number} num2 
 * @param {Number} num3 
 * @returns {String}
 */
function plusGrandNombre(num1, num2, num3) {
    res = num1;
    if (num2 > res) res = num2;
    if (num3 > res) res = num3;
    return res;
}

console.log(plusGrandNombre(1,2,3));


//Exo 2

/**
 * Renvoie un commentaire selon la note mise en paramètre
 * @param {Number} number un nombre entier compris entre 0 et 20
 * @returns {String}
 * @throws {Error} Le nombre doir être un compris entre 0 et 20
 */
function note(number) {
    if (number < 0 || number > 20) throw new Error("Le nombre doir être un compris entre 0 et 20")
    else if (number < 5) return "Catastrophique, il faut tout revoir";
    else if (number < 11) return "Insuffisant";
    else if (number < 15) return "Peut mieux faire";
    else if (number < 18) return "Bien";
    else return "Excelent, bon travail";
}

console.log(note(15));


//Exo 3

/**
 * Renvoie la somme de tous les nombres entre 1 et le nombre en paramètre
 * @param {Number} number 
 * @returns {Number}
 */
function niemeSomme(number) {
    let res = 0;
    for (; number > 0; number --) {
        //Aditionne le nombre à la somme des nombres précendents
        res += number;
    }
    return res;
}

console.log(niemeSomme(10));


//Exo 4
console.log("Exo 4 _____________________");

/**
 * Affiche un escalier avec un nombre de marche égale au nombre en paramètre
 * @param {Number} number 
 */
function escalier(number) {
    for(let i = 0; i < number; i++) {
        //Crée une marche plus large après chaque itération
        console.log("*".repeat(i+1));
    }
}

escalier(5);


//Exo 5
console.log("Exo 5 _____________________");

/**
 * Renvoie un escalier montant suivi d'un escalier descendant comprenant chacun un nombre de marche égal au paramètre
 * @param {Number} number 
 * @returns {String}
 */
function pyramide(number) {
    let res = ""
    //L'indice de l'élement n de la chaîne res où la longueur de la chaîne est 2n
    let moitieLongueur = 0
    for(let i = 0; i < number; i++) {
        //Coupe la String au milieu, et ajoute une chaine d'une longueur de i+1 et pleine de *
        res = res.slice(0,moitieLongueur) + ("*".repeat(i+1) + "\n").repeat(2) + res.slice(moitieLongueur);
        //ajoute la moitié du nombre de charactères ajoutés à la chaîne
        moitieLongueur += i+2;
    }
    return res;
}

//C'était une très mauvaise idée
console.log(pyramide(10));


//Exo 6
console.log("Exo 6 _____________________");

/**
 * Renvoie une pyramide dans le bon sens d'une hauteur égale au nombre en paramètre
 * @param {Number} number 
 * @returns {String}
 */
function vraiePyramide(number) {
    let res = "";
    for (let i = 0; i < number; i++) {
        //Ajoute un étage à la pyramide où sa largeur est inversement proportionnel à sa hauteur
        res += (" ".repeat(number-i-1) + "*".repeat(i*2+1) + " ".repeat(number-i-1) + "\n");
    }
    return res;
}

console.log(vraiePyramide(10));


//__________________________________
//Part 3


//Exo 1

function fizzbuzz(number) {
    let res = "";
    for (let i = 0; i <= number; i++) {
        //Si est un multiple de 3 alors FIZZ
        if (i%3 === 0) {
            res += "FIZZ";
        }
        //Si est un multiple de 5 alors BUZZ
        if (i%5 === 0) {
            res += "BUZZ";
        }
        //Comme n'est pas un multiple de 5, vérifie si est un multiple de 3, sinon i
        else if(i%3 !== 0) res += i;
        res += "\n";
    }
    return res;
}

console.log(fizzbuzz(10));


//Exo 2


function justePrix(number) {

    //Génère un nombre aléatoire entre 0 et number
    let reponse = Math.floor(Math.random()*number+1);
    let life = 3;

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.setPrompt(`Essayer de deviner ce nombre entre 0 et ${number} : `);

    readline.prompt();
        
    readline.on("line", function(input) {

        input = Number(input);

        if(input === reponse) {
            console.log("Bonne réponse ! Vous avez gagné.");
            readline.close();
        }
        else if (life === 1) {
            console.log("Vous n'avez plus de vie. Défaite.");
            console.log(`La réponse était ${reponse}`)
            readline.close();
        }
        else {
            life -= 1;
            console.log("Mauvaise réponse !")
            console.log(`Il vous reste ${life} vies`);
            readline.prompt();
        }
    })
}

// justePrix(5);


//Exo 3

function enBinaire(nombre) {
    let res = "";
    //calcul le résultat chiffre par chiffre, en commançant par le plus petit
    for (let i = 0; nombre >= 2**i; i++) {
        //Obtient le chiffre à la position i du nombre
        let digit = Math.floor(nombre/2**i)%2;
        //ajoute le chiffre au début du nombre
        res = digit + res;
    }
    return res;
}

console.log(enBinaire(1024));


function changementBase(nombre, base) {
    let res = "";
    let possibleDigits = "123456789abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; nombre >= base**i; i++) {
        let digit = Math.floor(nombre/base**i)%base;
        res = possibleDigits.charAt(digit) + res;
    }
    return res;
}

console.log(changementBase(300,16));