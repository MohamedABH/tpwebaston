let readlineSync = require("readline-sync");

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

/**
 * renvoie les nombres de 0 à N, et remplaces les multiples de 3 pas FIZZ, les multiples de 5 pas BUZZ, les multiples de 15 par FIZZBUZZ
 * @param {Number} number le nombre maximum
 * @returns {String}
 */
function fizzbuzz(number) {

    //Les règles spécifiées. Chaque message est supplanté par le message d'une règle qui la suit dans la liste
    let regles = [[3,"FIZZ"],[5,"BUZZ"],[15,"FIZZBUZZ"]]

    let res = "";

    //On parcours les nombres
    for (let i = 0; i <= number; i++) {
        //Par défaut, le nombre doit être affiché
        let localRes = i;

        //On vérifie pour chaque règles
        for (rule of regles) {

            //Si le nombre est un multiple du nombre spécifié par la règle, affiché le message équivalent à la place
            if (i%rule[0] === 0) localRes = rule[1];

        }

        //On ajoute la valeur à aficher pour ce nombre à notre liste de résultats
        res += localRes + "\n";

    }
    
    return res;
}

console.log(fizzbuzz(10));


//Exo 2

/**
 * Un jeu où l'utilisateur dois deviné le nombre généré aléatoirement en 3 essaiss
 * @param {Number} number La valeur maximale du nombre aléatoire
 */
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


/**
 * Renvoie l'équivalent binaire d'un nombre
 * @param {Number} nombre 
 * @returns {String}
 */
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


/**
 * Renvoie l'équivalent en base une autre base d'un nombre
 * @param {Number} nombre Le nombre à transformer
 * @param {Number} base La base en laquel le nombre doit être transformé. < 37
 * @returns {String}
 */
function changementBase(nombre, base) {
    let res = "";
    //Liste des chiffres
    let possibleDigits = "0123456789abcdefghijklmnopqrstuvwxyz";
    if (base > possibleDigits.length) throw new Error("La base est trop grande, maximum " + possibleDigits.length);
    //calcul le résultat chiffre par chiffre, en commançant par le plus petit
    for (let i = 0; nombre >= base**i; i++) {
        //Obtient le chiffre à la position i du nombre
        let digit = Math.floor(nombre/base**i)%base;
        //choisit le bon symbole pour le chiffre et l'ajoute au début du nombre
        res = possibleDigits.charAt(digit) + res;
    }
    return res;
}

console.log(changementBase(300,16));


//Exo 4


/**
 * Renvoie l'équivalent en nombre romain d'un nombre
 * @param {Number} nombre > 0, < 4889
 * @returns {String}
 */
function enRomain(nombre) {

    let res = "";

    //Les valeurs de chaque symboles, ainsi que la valeur pouvant leur être soustraite selon la numéaration romaine 
    baseRomaine = [[1000,100],[500,100],[100,10],[50,10],[10,1],[5,1]];

    //Les symboles associés à leurs valeurs
    const symbolesRomains = {
        1000: "M",
        500: "D",
        100: "C",
        50: "L",
        10: "X",
        5: "V",
        1: "I"
        }
    
    //On vérifie qu'il est possible d'écrire le nombre avec la numération romaine
    if(nombre > 4888) throw new Error("Nombre trop grand, il doit être inférieur à 3889");
    if(nombre < 1) throw new Error("Nombre trop petit, il doit être supérieur à 0")

    //On parcours le nombre pour chaque symbole possible
    for (base of baseRomaine) {
        //On ajoute le nombre necessaire de symbole
        res += symbolesRomains[base[0]].repeat(Math.floor(nombre/base[0]))
        //On soustrait les valeurs déjà ajoutés au résultat
        nombre -= (nombre - nombre%base[0])

        //On vérifie si il y a un symbole soustrait à ajouter, auquel cas on l'ajoute au résultat et on soustrait sa valeur au nombre
        if (nombre >= base[0]-base[1]) {
            res += symbolesRomains[base[1]] + symbolesRomains[base[0]];
            nombre -= (base[0]-base[1]);
        }
    }
    
    //Finalement on ajoute les dernier symboles
    res += symbolesRomains[1].repeat(nombre);

    return res;

}

console.log(enRomain(4888));


//Exo Bowling

/**
 * Gère la saisie de l'utilisateur pour obtenir le nombre de quilles tombées
 * @param {Number} nbLancer le numéro du lancer
 * @param {Number} quilles le nombre de quilles restantes
 * @param {Number} score le score avant le lancer
 * @returns {Number} le nombre de quilles tombées lors de ce lancer
 */
function lancer(nbLancer, quilles, score) {

    //Par défaut, considérer que l'utilisateur va rentrer une mauvaise saisie
    let bonInput = false;
    //Déclaration de la variable avant la saisie utilisateur
    let nbTombees = 0;

    //Tant que l'utilisateur ne rentre pas une saisie correct, continuer de lui demander
    while (!bonInput) {
        //L'utilisateur saisit le nombre de quilles qui ssont tombées lors de ce tour
        nbTombees = readlineSync.question("Combien de quilles sont tombées ? ");
        //Si le nombre de quilles tombées est supérieur au nombre de quilles restante, ou que le nombre de quilles tombées est négatif, alors la saisie est incorrect
        if (quilles < nbTombees || nbTombees < 0) {
            console.log("Impossible que ce nombre de quilles soit tombées, rentrez un nombre de quilles valide");
        }
        //Sinon, la saisie est bonne, nous pouvons sortir de la boucle
        else bonInput = true;
    }

    return nbTombees;

}


/**
 * Envoie un message correspondant au coup effectué et renvoie le bonus pour les tours suivants
 * @param {Array} bonus Le bonus au moment au lancer
 * @param {Number} nbLancer Le numéro du lancer
 * @returns {Array} Le bonus après le lancer
 */
function bonusSuivant(bonus, nbLancer) {

    //Si il s'agit du 1er lancer, c'est un strike, on l'affiche et on modifie les bonus avant de sortir du tour
    if (nbLancer === 0) {
        console.log("Strike !!!");
        bonus = [bonus[0]+1,bonus[1]+1];
    }
    //Sinon c'est un spare, on modifie le bonus en conséquence
    else {
        console.log("Spare !");
        bonus = [bonus[0]+1,bonus[1]]
    }

    return bonus;
}


/**
 * Réalise un tour de bowling
 * @param {Array} bonus Le bonus au début du tour
 * @param {Number} score Le score au début du tour
 * @param {Boolean} tourbonus S'agit-il du tour bonus
 * @returns {Object} Un object comprenant le score et le bonus à la fin du tour
 */
function tourBowling(bonus, score, tourbonus) {

    //Par défaut, un tour comporte 2 lancers
    let maxLancer = 2;
    let quilles = 10;

    for (let nbLancer = 0; nbLancer < maxLancer; nbLancer++) {

        console.log(`Score actuel : ${score}`);
        console.log(`${nbLancer+1}e lancer !`);

        //on lance la fonction qui demande le nombre de quilles tombées
        nbTombees = lancer(nbLancer, quilles, score);

        //On supprime les quilles tombées
        quilles -= nbTombees;

        //On ajoute le score multiplié par le bonus actuel
        score += nbTombees*bonus[0];

        //On prépare les bonus pour les lancer suivants
        bonus = [bonus[1],1];

        //Si il n'y a plus de quilles, alors le joueur a marqué un strike ou un spare
        if(quilles === 0) {
            //Si il ne s'agit pas du tour bonus, alors le joueur obtient un bonus et le tour se termine
            if (!tourbonus) {
                bonus = bonusSuivant(bonus,nbLancer);
                nbLancer = maxLancer;
            }
            //Sinon, le joueur a le droit à un lancer bonus, et les quilles sont replacées
            else {
                if (maxLancer === 2) maxLancer = 3;
                if (nbTombees === "10") console.log("Strike !!!");
                else console.log("Spare !");
                quilles = 10;
            }
        }

    }

    return {
        score,
        bonus,
    }
}

function bowling() {

    let score = 0;

    //Le bonus lors des 2 prochains lancers
    let bonus = [1,1]

    //10 tours sont effectués
    for (let tour = 0; tour < 10; tour++) {

        console.log("_____________________________")
        console.log(`${tour+1}e tour !`);

        //Le 10e tour est un tour bonus
        let tourRes = tourBowling(bonus,score,tour===9);

        bonus = tourRes.bonus;
        score = tourRes.score;

    }

    console.log(`Score final : ${score}`);

}

bowling();


//Exo tennis

