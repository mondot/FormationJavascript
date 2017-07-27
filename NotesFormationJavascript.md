# Formation JS avec la GreenTech Verte

Ecrire une fonction JS : function(){}  

On va utiliser JQuery ([download here](http://jquery.com/download/))  
[Documentation](https://developer.mozilla.org/en-US/docs/Web/API)  
DOM = Document Object Model

Problematique de JS : programmation totalement asynchrone. On sait pas quand est lancée la fonction (par exemple avec $(document).ready(...)).  
$ veut dire qu'on fait référence à JQuery.  
JQuery donne la nouvelle variable $ qui nous permet de manipuler les différents éléments de notre page ([brief look here](http://jquery.com/) and [documention](http://api.jquery.com/)).  

** 1er aspect très important de jQuery : manipuler les objets DOM **

Pour cibler une classe du DOM on utilise .nomDeLaClasse (on peut faire p.nomDeLaClasse pour cibler les éléments p avec la classe nomDeLaClasse. Pour cibler un id on fait #nomDeLaClasse.  

Pour récupérer le n-ième enfant, on utilise la fonction :nth-child.  
On peut enchaîner les fonctions jQuery ($("li:nth-child(3)").html('3eme element').css('color', 'red');)  
"The $ represents the jQuery Function, and is actually a shorthand alias for jQuery".  
Fonction cool : [fadeOut](http://api.jquery.com/fadeout/).  
$(this) pour faire référence à l'élement courant.  

** 2ème aspect très important : les évènements ! **

Pour ajouter un événement sur un élément du DOM : on utilise directment la fonction de l'événement voulu [liste des événements](https://api.jquery.com/category/events/) ou on utilise la [fonction .on()](http://api.jquery.com/on/).  
Pour simuler l'événement, on utlise la [fonction trigger()](http://api.jquery.com/trigger/).  
La fonction trigger est le chemin vers les tests automatiques (unitaires, fonctionnels ...).  

** 3ème aspect important: appel à d'autres sources d'information ([AJAX](http://api.jquery.com/jquery.ajax/)) **

Récupérer des infos de manière asynchrone sur une autre page (API).  
Par exemple :
	$.ajax({
		url: "https://api-adresse.data.gouv.fr/search/",
		data: {
			q: '23 rue Charles Infroit'
		},
		success: function(result){
			console.log(result.features[0].properties.city);
		}
	});  
	
	Récupérer la valeur d'un input : avec la fonction $(element).val().  

** Carte intéreactive - librairie JS - [Leaflet](http://leafletjs.com/) **

Leaflet est un framework pour afficher des adresses (latitude, longitude) sur n'importe quelle type de carte.  
Dans l'exemple on charge la carte depuis openstreetmap.org mais on pourrait aussi la charger depuis Google Maps.  

** Data Visualization **

Avec d3 on peut consommer un fichier csv très facilement. [d3.js](https://d3js.org/)  
Tracer des courbes: [c3.js](http://c3js.org/) librairie basée sur d3.  
Ou [Highcharts](https://www.highcharts.com/).  
J'avais un problème de sécurité sur Chrome qui m'empêchait de faire getJSON sur un fichier local.  
J'ai dû lancer un serveur HTTP (avec Python) pour passer les sécurités.  
Par contre la sécurité est moins importante sur Firefox car je n'ai pas besoin de lancer un serveur HTTP local pour lire mon fichier .json.  