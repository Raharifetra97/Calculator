var result = document.getElementById('resultat');
var supp = document.getElementById('supprimer');
var nine = document.getElementById('9');
var eight = document.getElementById('8');
var seven = document.getElementById('7');
var six = document.getElementById('6');
var five = document.getElementById('5');
var four = document.getElementById('4');
var three = document.getElementById('3');
var two = document.getElementById('2');
var one = document.getElementById('1');
var zero = document.getElementById('0');
var virgule = document.getElementById('virgule');
var equal = document.getElementById('equal');
var div = document.getElementById('division');
var multi = document.getElementById('multipli');
var sub = document.getElementById('subs');
var add = document.getElementById('add');

// Variable pour suivre si un calcul a été effectué
var calculEffectue = false;

// Désactiver les événements de clavier pour que l'utilisateur n'utilise pas du clavier mais juste le bouton du calculatrice
result.addEventListener('keydown', (event) => {
    event.preventDefault();
});

// Une fonction qui vérifie qu'une calcul a déjà fait, si oui quand on va faire une nouveau calcul le champ se réinitialise
function ajouterValeur(valeur) {
    if (calculEffectue) {
        result.value = '';
        calculEffectue = false; //
    }
    result.value += valeur;
}

nine.addEventListener("click", () => ajouterValeur(nine.value));
eight.addEventListener("click", () => ajouterValeur(eight.value));
seven.addEventListener("click", () => ajouterValeur(seven.value));
six.addEventListener("click", () => ajouterValeur(six.value));
five.addEventListener("click", () => ajouterValeur(five.value));
four.addEventListener("click", () => ajouterValeur(four.value));
three.addEventListener("click", () => ajouterValeur(three.value));
two.addEventListener("click", () => ajouterValeur(two.value));
one.addEventListener("click", () => ajouterValeur(one.value));
zero.addEventListener("click", () => ajouterValeur(zero.value));
virgule.addEventListener("click", () => ajouterValeur('.'));
div.addEventListener("click", () => ajouterValeur('/'));
multi.addEventListener("click", () => ajouterValeur('*'));
sub.addEventListener("click", () => ajouterValeur('-'));
add.addEventListener("click", () => ajouterValeur('+'));

equal.addEventListener("click", () => {
    try {
        result.value = eval(result.value);
        calculEffectue = true; // Marque qu'un calcul a été effectué
    } catch (e) {
        result.value = "Erreur";
    }
});

supp.addEventListener('click', () => {
    result.value = result.value.slice(0, -1);
});
