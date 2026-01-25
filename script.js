function afficherDate(){
 d = new Date();

   jour = d.getDate();
   mois = d.getMonth() + 1;
   annee = d.getFullYear();

   heures = d.getHours();
   minutes = d.getMinutes();
   secondes = d.getSeconds();

  document.getElementById("date").innerHTML = jour + "/" + mois + "/" + annee;

  document.getElementById("heure").innerHTML = heures + ":" + minutes + ":" + secondes;
}

setInterval(afficherDate, 1000);


function calculer(){
   n1 = parseFloat(document.getElementById("nombre1").value);
   n2 = parseFloat(document.getElementById("nombre2").value);
   op = document.getElementById("operation").value;
   res = 0;

  if(op == "+") res = n1 + n2;
  else if(op == "-") res = n1 - n2;
  else if(op == "*") res = n1 * n2;
  else if(op == "/") res = n1 / n2;

  document.getElementById("resultat").innerHTML = res;
}


t = ["1.jpeg","2.jpeg","3.jpeg"];

 i = 0;

document.getElementById("images").src = t[i];

function Suivante(){
  i++;
  if(i >= t.length){
    i = 0;
  }
  document.getElementById("images").src = t[i];
}

function Precedente(){
  i--;
  if(i < 0){
    i = t.length - 1;
  }
  document.getElementById("images").src = t[i];
}



function Chiffrer(){
    x = document.getElementById("a").value;
    cle = parseInt(document.getElementById("b").value);
    y = "";
    for(i=0;i<x.length;i++){
    y += String.fromCharCode(((x.charAt(i).charCodeAt(0) - 97 + cle) % 26) + 97);
    }
    document.getElementById("abc").value = y;
    }
    function Dechiffrer(){
    x = document.getElementById("abc").value;
    cle = parseInt(document.getElementById("b").value);
    y = "";
    for(i=0;i<x.length;i++){
    y += String.fromCharCode(((x.charAt(i).charCodeAt(0) - 97 - cle + 26) % 26) + 97);
    }
    document.getElementById("a").value = y;
    }
   
    function formulaire(){
         nom = document.getElementById("nom").value;
         email = document.getElementById("email").value;
         message = document.getElementById("message").value;
        
        if(nom === "" || email === "" || message === ""){
            document.getElementById("formulaire").innerHTML = '<span class="erreur"> Veuillez remplir tous les champs !</span>';
            return;
        }
        
        affichage = '<div class="a">';
        affichage += '<p><strong> Message envoyé avec succès !</strong></p>';
        affichage += '<div class="b">';
        affichage += '<p><span class="c">Nom :</span> <span class="d">' + nom + '</span></p>';
        affichage += '<p><span class="c">Email :</span> <span class="d">' + email + '</span></p>';
        affichage += '<p><span class="c">Message :</span> <span class="d">' + message + '</span></p>';
        affichage += '</div>';
        affichage += '</div>';
        
        document.getElementById("formulaire").innerHTML = affichage;
        document.getElementById("nom").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    }



theme = false;
function changerTheme(){
  if(theme == false){
    document.body.classList.add("dark-mode");
    theme = true;
  }else{
    document.body.classList.remove("dark-mode");
    theme = false;
  }
}
