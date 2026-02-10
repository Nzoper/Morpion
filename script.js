let h2 = document.querySelector(".tour");
let joueurAct = "X";
let cases = document.querySelectorAll(".cases");
let tabJeu = ["", "", "", "", "", "", "", "", ""];
let reset = false;
let btnRes = document.querySelector("#btn_reset")
const conditionsVictoire = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6]             
];

clickCase();

function clickCase() {
    cases.forEach(element => {
        element.addEventListener("click", tour);
    });
}

h2.innerHTML = "C'est au tour de : " + joueurAct;
function tour(evenement) {
    if (reset === true) {
        return;
    }
    let case_cliquee = evenement.target;
    if (case_cliquee.innerText !== "") {
        return;
    }
    case_cliquee.innerText = joueurAct;
    case_cliquee.style.color = "white";
    let index = case_cliquee.getAttribute("data-index");
    tabJeu[index] = joueurAct;
    setTimeout(findePartie, 10);
    if (joueurAct === "X") {
        joueurAct = "O";
    } else {
        joueurAct = "X";
    }
    h2.innerHTML = "C'est au tour de : " + joueurAct;
}

function findePartie() {
    conditionsVictoire.forEach(combinaison => {
        let val1 = tabJeu[combinaison[0]];
        let val2 = tabJeu[combinaison[1]];
        let val3 = tabJeu[combinaison[2]];
        if (val1 !== "" && val1 === val2 && val2 === val3) {
            alert("Félicitations, le joueur " + val1 + " a gagné !");
            reset = true; 
        }
    });
    if (reset === false) {
        if (!tabJeu.includes("")) {
            alert("Égalité ! Vous avez tous les deux perdu.");
            reset = true;
        }
    }
}

btnRes.addEventListener("click", recommencer);
function recommencer(){
    joueurAct = "X";
    reset = false;
    tabJeu = ["", "", "", "", "", "", "", "", ""];
    h2.innerHTML = "C'est au tour de : "+joueurAct;
    cases.forEach(elementLst => {
        elementLst.innerText = "";
        elementLst.style.color = "";
    });
}
