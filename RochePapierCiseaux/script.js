/* Fichier : triangleFractale.py
 Auteur : Mario Sekpona
 Date : 2022-04-13


 Ce code se charge de la partie décissionnelle du jeu pierre papier ciseaux, 
 ainsi que son fonctionnement, ses règles.

*/


function decision(choixJoueur, choixOrdi){
    //il y atrois grtandes catégories de choix

    // le duo ciseaux-roche avec ses combinaisons possibles
    if ((choixJoueur=="roche" || choixJoueur=="ciseaux") && (choixOrdi=="rock" || choixOrdi=="scissors"))
    {
        
       
        if (choixJoueur=="roche" && choixOrdi=="scissors")
         {
            
            
            document.getElementById("resultPhoto").setAttribute("src","assets/winner.png") ;
            document.getElementById("result").innerHTML="Rock beat scissors, you win!";
          
        }
        else if(choixJoueur=="ciseaux" && choixOrdi=="rock")
        {
           

            document.getElementById("resultPhoto").setAttribute("src","assets/loser.png");
            document.getElementById("result").innerHTML= "Rock beat scissors, computer win!";
                         
        }
        else 
        {
           
            document.getElementById("resultPhoto").setAttribute("src","assets/tie.png");
            document.getElementById("result").innerHTML="The result is a tie, try again!";
        }
     }   
        

    // le duo papier-roche avec ses combinaisons possibles
    else if ((choixJoueur=="papier" || choixJoueur=="roche") && (choixOrdi=="rock" || choixOrdi=="paper"))
    {
        
        
        if (choixJoueur=="papier" && choixOrdi=="rock")
         {
            
            document.getElementById("resultPhoto").setAttribute("src","assets/winner.png") ;
            document.getElementById("result").innerHTML="Paper beat rock, you win!";
          
        }
        else if(choixJoueur=="roche" && choixOrdi=="paper")
        {
           

            document.getElementById("resultPhoto").setAttribute("src","assets/loser.png");
            document.getElementById("result").innerHTML= "Paper beat rock, computer win!";
                         
        }
        else 
        {
           
            document.getElementById("resultPhoto").setAttribute("src","assets/tie.png");
            document.getElementById("result").innerHTML="The result is a tie, try again!";
        }
     } 


    // le duo papier-ciseaux avec ses combinaisons possibles
    else if ((choixJoueur=="papier" || choixJoueur=="ciseaux") && (choixOrdi=="paper" || choixOrdi=="scissors"))
    {
        
        
        if (choixJoueur=="ciseaux" && choixOrdi=="paper")
         {
            
            document.getElementById("resultPhoto").setAttribute("src","assets/winner.png") ;
            document.getElementById("result").innerHTML="Scissors beat paper, you win!";
          
        }
        else if(choixJoueur=="papier" && choixOrdi=="scissors")
        {
           
           
            document.getElementById("resultPhoto").setAttribute("src","assets/loser.png");
            document.getElementById("result").innerHTML= "Scissors beat paper, computer win!";
                         
        }
        else 
        {
           
            document.getElementById("resultPhoto").setAttribute("src","assets/tie.png");
            document.getElementById("result").innerHTML="The result is a tie, try again!";
        }
     }        



}

function jouer(choixJoueur) {

    // on met les messages des objets choisis par l'ordi et le joueur dans chacune une variable
    
    var textJoueur = "you have chosen ";  

    var textComputer = "Computer has chosen ";

    //Dépendemment de l'objet on complète le message en conséquence
    
    if (choixJoueur == "papier") { textJoueur +="paper!";  }
        
    
    else if (choixJoueur == "ciseaux") { textJoueur +="scissors!";  }
    
    else { textJoueur +="rock!";}
    
    //On met le message du joueur dans la balise adéquate.

    document.getElementById("choixPersonne").innerHTML=textJoueur;

    // Tableau des noms des images.

    var tabNomImg = ["paper1.png","rock1.png","scissors1.png"];

    //On choisi aléatoirement un élement du tableau.

	var ind=Math.floor(Math.random()*tabNomImg.length);

    var choixAlea = tabNomImg[ind];    

    //le message est mis dans la balise approprié.
    
    document.getElementById("choixOrdi").innerHTML = textComputer + choixAlea.slice(0,-5) +'!';

    //on utilise le nom de l'image pour fconstruire le lien de l'image qu'on insert dans le html

    var divParent = document.getElementById("attenteDeChoixOrdinateur");

    var lienImg = "assets/" + choixAlea ;

    divParent.setAttribute("src", lienImg); 
    
    //la fonction decision est appelée avec les choix du jouer et de l'ordi
    decision(choixJoueur, choixAlea.slice(0,-5)) ;  

   
   
    
  
}
