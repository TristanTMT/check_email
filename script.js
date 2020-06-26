function validation()
{
    var formulaire = document.getElementById("formulaire");
    var email = document.getElementById("email").value;
    var texte = document.getElementById("texte");

    var regex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(email.match(regex))
    {
        formulaire.classList.add("valid");
        formulaire.classList.remove("invalid");
        texte.innerHTML = "Votre adresse mail est confirmé.";
        texte.style.color = "#00ff00";
    }
    else
    {
        formulaire.classList.remove("valid");
        formulaire.classList.add("invalid");
        texte.innerHTML = "Votre adresse mail n'est pas valide...";
        texte.style.color = "#ff0000";
    }

    if(email = "")
    {
        formulaire.classList.remove("Validé");
        formulaire.classList.remove("Non validé");
        texte.innerHTML = "";
        texte.style.color = "#00ff00";
    }
}