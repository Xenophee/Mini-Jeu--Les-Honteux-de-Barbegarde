
/*
================================================================================================================================================================================

Fichier gérant les affichages classiques du jeu, ne nécessitant pas de faire appel à des fonctions spécifiques :

- L'ouverture et la fermeture des règles du jeu
- L'affichage de l'arène en cliquant sur le bouton "démarrer", "continuer", "recommencer"
- L'affichage de la récompense en cliquant sur le bouton "récupérer la récompense"
- L'affichage et la fermeture de la section triche ainsi que l'entrée du mot de passe

================================================================================================================================================================================
*/


const scream = new Audio("./public/assets/audio/bahhhhh.mp3");


// =======================================================================================================================================================
// -------------------------------------------------------------------------------------------------------------------------------------------------------

// OUVERTURE DES RÈGLES DU JEU
openRules.addEventListener('click', () => {
    rules.showModal();
});


// =======================================================================================================================================================
// -------------------------------------------------------------------------------------------------------------------------------------------------------

// FERMETURE DES RÈGLES DU JEU
closeRules.addEventListener('click', () => {
    rules.close();
});


// =======================================================================================================================================================
// -------------------------------------------------------------------------------------------------------------------------------------------------------

// GÈRE L'AFFICHAGE DES STATISTIQUES
yourStat.addEventListener('click', () => {
    userGlobalStat.classList.toggle('hide');
});

yourGameStat.addEventListener('click', () => {
    userGameStat.classList.toggle('hide');
});

iaStat.addEventListener('click', () => {
    iaGlobalStat.classList.toggle('hide');
});

showIaGameStat.addEventListener('click', () => {
    iaGameStat.classList.toggle('hide');
});


// =======================================================================================================================================================
// -------------------------------------------------------------------------------------------------------------------------------------------------------

// AFFICHAGE DE L'ARÈNE POUR DÉMARRER UNE PARTIE
startGame.addEventListener('click', () => {
    noGameStart.classList.add('hide');
    fightZone.classList.remove('hide');
});


// =======================================================================================================================================================
// -------------------------------------------------------------------------------------------------------------------------------------------------------

// RETOUR DE L'AFFICHAGE APRÈS UN ÉVÉNEMENT EN CLIQUANT SUR LE BOUTON "CONTINUER"
following.addEventListener('click', () => {
    eventGameDisplay.classList.add('hide');
    fightZone.classList.remove('hide');
});


// =======================================================================================================================================================
// -------------------------------------------------------------------------------------------------------------------------------------------------------

// AFFICHE LA RÉCOMPENSE EN CAS DE VICTOIRE
takeReward.addEventListener('click', () => {
    takeReward.classList.add('hide');
    resultSentence.classList.add('hide');
    gameResultBloc.classList.add('hide');
    reward.classList.remove('hide');
});


// =======================================================================================================================================================
// -------------------------------------------------------------------------------------------------------------------------------------------------------

// RÉAFFICHAGE DE L'ARÈNE POUR REFAIRE UNE PARTIE
restart.addEventListener('click', () => {
    resultGame.classList.add('hide');
    gameResultBloc.classList.remove('hide');
    fightZone.classList.remove('hide');
});


// =======================================================================================================================================================
// -------------------------------------------------------------------------------------------------------------------------------------------------------

// AFFICHE L'INPUT POUR LE MOT DE PASSE
cheat.addEventListener('click', () => {
    passwordSection.classList.toggle('hide');
});


// =======================================================================================================================================================
// -------------------------------------------------------------------------------------------------------------------------------------------------------

// FERME L'ONGLET DE TRICHE
closeCheat.addEventListener('click', () => {
    choosingCheat.classList.add('hide');
    cheatingEnter.classList.remove('hide');
});


// =======================================================================================================================================================
// -------------------------------------------------------------------------------------------------------------------------------------------------------

// AFFICHE LA SECTION DE TRICHE EN CAS DE BON MOT DE PASSE
password.addEventListener("keydown", function(event) {
    if (event.key === "Enter" && password.value == 'honteux') {
        scream.play();
        cheatingEnter.classList.add('hide');
        passwordSection.classList.add('hide');
        choosingCheat.classList.remove('hide');
    }
});