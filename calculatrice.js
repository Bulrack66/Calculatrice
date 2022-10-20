// DOM
const touches = [...document.querySelectorAll('.touche')];
const listKeycode = touches.map(touche => touche.dataset.key);
const ecran = document.querySelector('.ecran');

document.addEventListener('keydown', (e) => {
    const valeur = e.keyCode.toString();
    calculer(valeur)

})

document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;
    calculer(valeur)

})

const calculer = (valeur) => {
    if (listKeycode.includes(valeur)) {
        switch(valeur) {
            case '8':
                ecran.textContent = '';
                break;
            case '13':
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;
            default:
                const indexKeycode = listKeycode.indexOf(valeur);
                const touche = touches[indexKeycode];
                ecran.textContent += touche.innerHTML;
        }
    }
}

// function addition (nombreUn,nombreDeux) {
//     return nombreUn + nombreDeux;
// }
// function multiplication(nombreUn,nombreDeux) {
//     return nombreUn * nombreDeux;
// }
// function soustraction(nombreUn,nombreDeux) {
//     return nombreUn - nombreDeux;
// }
// function division(nombreUn,nombreDeux) {
//     if (nombreDeux == 0) {
//         throw new Error("Impossible de diviser par 0");
//     }
//     return nombreUn / nombreDeux;
// }
// let restart = false;

// do{

// do {
//     var choix = Number(prompt('Que souhaitez-vous faire?\n\n 1 - Addition\n 2 - Multiplication\n 3 - Soustraction\n 4 - Division\n'));
    
// } while (choix != 4 && choix != 1);

// do {
//     var nombreUn = Number (prompt("Donnez votre premier nombre"));
//     var nombreDeux = Number (prompt("Donner votre deuxieme nombre"));
// } while(isNaN(nombreUn) || isNaN(nombreDeux));

// try {
//     switch (choix) {
//         case 1:
//             var resultat = addition(nombreUn, nombreDeux);
//             break;

//         case 2: 
//             var resultat = multiplication(nombreUn, nombreDeux);
//             break;

//         case 3: 
//             var resultat = soustraction(nombreUn, nombreDeux);
//             break;

//         case 4: 
//             var resultat = division(nombreUn, nombreDeux);
//             break;

//         default: 
//         throw new Error('Choisissez un nombre pas une lettre...');  
//     }   
//     alert("Le resultat est "+ resultat)
// }
// catch(error){
//     alert(error);
// }
//     restart = confirm('Souhaitez- vous recomencer un calcul ?');

// } while(restart)