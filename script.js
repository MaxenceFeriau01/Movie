 
 // Inscription page (pageinscription.html)

function inscription() {

    const form = document.querySelector("form");
    if (form) {

    form.addEventListener("submit", (event) => {
        event.preventDefault(); 

        const pseudo = form.pseudo.value.trim();
        const password = form.password.value.trim();
        const confirmPassword = form.confirmPassword.value.trim();

        if (pseudo === "" || password === "" || confirmPassword === "") {
            alert("Remplis Tous les champs escros !");
            return;
        }
        if (password !== confirmPassword) {
            alert("Les mots de passe ne sont pas les mémes !!");
            return;
        } 
        else {
            localStorage.setItem("pseudo", pseudo);
            localStorage.setItem("password", password);
            console.log("Validation réussie");

            alert("Compte créé avec succès ! tu peux aller te log !!!");
            window.location.href = "pagelogin.html"; 
}
        form.reset(); 
    });
} else {
        console.warn("Formulaire pas la");
    }
}; 


// connexion page (pagelogin.html)

function connexion () {
    const form = document.querySelector("form");
    if (form) {

    form.addEventListener("submit", (event) => {
        event.preventDefault(); 

        const pseudo = form.pseudo.value.trim();
        const password = form.password.value.trim();

        const pseudoLocal = localStorage.getItem("pseudo");
        const passwordLocal = localStorage.getItem("password");

        if (pseudo !== pseudoLocal) {
            alert("Le Pseudo n'est pas GOOD ou tu n'est pas enregistré !!");
            return;
        }

        if (password !== passwordLocal) {
            alert("Le mot de passe n'est pas good !");

            return;
        }

            alert("Connexion réussie ! Bienvenue " + pseudo + " !");
            localStorage.setItem("authentification", "trueMonWilly");
            window.location.href = "pageFilm.html"; 

        form.reset(); 
    });
} else {
        console.warn("Formulaire pas la");
    }
}

// supprimeCompte page (pageFilm.html)


function supprimeCompte() {
    const supprimeCompte = document.getElementById("supprimeCompte");

    if(supprimeCompte) {
        supprimeCompte.addEventListener("click", () => {
        localStorage.removeItem("pseudo");
        localStorage.removeItem("password");
        localStorage.removeItem("authentification");
        console.log("Compte supprimé avec succès");
        alert("Compte DEAD !");
        window.location.href = "pageAcceuil.html"; 
    });
    } else {
        console.warn("boutton pas la");
    }
};

// deconnexion page (pageFilm.html)

    function deconnexion(){

    const deconnexion = document.getElementById("deconnexion");
    if(deconnexion) {
        deconnexion.addEventListener("click", () => {
            localStorage.setItem("authentification","falseMonWilly");
            console.log("Déconnexion réussie");
            alert("Déconnexion réussie !");
            window.location.href = "pageAcceuil.html"; 
        });
    } else {
        console.warn("boutton pas la");
    }
}

