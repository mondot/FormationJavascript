# Formation JS avec la GreenTech Verte

## Jour 1

Ecrire une fonction JS : function(){}  
[JSON](JavaScript Object Notation) est un type de base de Javascript.  

On va utiliser JQuery ([download here](http://jquery.com/download/))  
[Documentation](https://developer.mozilla.org/en-US/docs/Web/API)  
DOM = Document Object Model

Problematique de JS : programmation totalement asynchrone. On sait pas quand est lancée la fonction (par exemple avec $(document).ready(...)).  
$ veut dire qu'on fait référence à JQuery.  
JQuery donne la nouvelle variable $ qui nous permet de manipuler les différents éléments de notre page ([brief look here](http://jquery.com/) and [documention](http://api.jquery.com/)).  

**1er aspect très important de jQuery : manipuler les objets DOM**

Pour cibler une classe du DOM on utilise .nomDeLaClasse (on peut faire p.nomDeLaClasse pour cibler les éléments p avec la classe nomDeLaClasse. Pour cibler un id on fait #nomDeLaClasse.  

Pour récupérer le n-ième enfant, on utilise la fonction :nth-child.  
On peut enchaîner les fonctions jQuery ($("li:nth-child(3)").html('3eme element').css('color', 'red');)  
"The $ represents the jQuery Function, and is actually a shorthand alias for jQuery".  
Fonction cool : [fadeOut](http://api.jquery.com/fadeout/).  
$(this) pour faire référence à l'élement courant.  

**2ème aspect très important : les évènements !**

Pour ajouter un événement sur un élément du DOM : on utilise directment la fonction de l'événement voulu [liste des événements](https://api.jquery.com/category/events/) ou on utilise la [fonction .on()](http://api.jquery.com/on/).  
Pour simuler l'événement, on utlise la [fonction trigger()](http://api.jquery.com/trigger/).  
La fonction trigger est le chemin vers les tests automatiques (unitaires, fonctionnels ...).  
Il existe aussi les [touchEvents](https://developer.mozilla.org/en-US/docs/Web/API/Touch_events) (pour les portables tactils). 

**3ème aspect important: appel à d'autres sources d'information ([AJAX](http://api.jquery.com/jquery.ajax/))**

Récupérer des infos de manière ASYNCHRONE sur une autre page (API).  
Par exemple :
```
	$.ajax({
		url: "https://api-adresse.data.gouv.fr/search/",
		data: {
			q: '23 rue Charles Infroit'
		},
		success: function(result){
			console.log(result.features[0].properties.city);
		}
	});  
```
Récupérer la valeur d'un input : avec la fonction $(element).val().  
Fonctions de rappel (callback functions) qui permettent de faire appel à la fonction quand on reçoit une réponse de l'API appelé. Comme ça on continue l'execution du code sans avoir à attendre la réponse du serveur.  

**Carte intéreactive - librairie JS - [Leaflet](http://leafletjs.com/)**

Leaflet est un framework pour afficher des adresses (latitude, longitude) sur n'importe quelle type de carte.  
Dans l'exemple on charge la carte depuis openstreetmap.org mais on pourrait aussi la charger depuis Google Maps.  

**Data Visualization**

Avec d3 on peut consommer un fichier csv très facilement. [d3.js](https://d3js.org/)  
Tracer des courbes: [c3.js](http://c3js.org/) librairie basée sur d3.  
Ou [Highcharts](https://www.highcharts.com/).  
J'avais un problème de sécurité sur Chrome qui m'empêchait de faire getJSON sur un fichier local.  
J'ai dû lancer un serveur HTTP (avec Python) pour passer les sécurités.  
Par contre la sécurité est moins importante sur Firefox car je n'ai pas besoin de lancer un serveur HTTP local pour lire mon fichier .json.  

## Jour 2

**Côté serveur**

Les différents types de données. Moteur d'indexation accepte des fichiers de type json.  
Le [NoSQL](https://www.upwork.com/hiring/data/sql-vs-nosql-databases-whats-the-difference/), on file toutes nos données et il se débrouille pour indexer la données et nous la refiler quand on demande.  
Le moteur Javascript des différents navigateurs a été récupéré pour créer un serveur asynchrone.  
[Node.js](https://nodejs.org/en/) est la partie serveur de JS, basé sur V8, le moteur Javascript de Google (le plus rapide sur le marché).  
En tapant node dans notre console, on lance un serveur node. On peut ensuite écrite du js.  
La commande 'top' dans la console permet de voir tout les processus lancés sur la machine.  
'pwd' (print workind directory), 'cd' (change directory).  

Il faut installer jQuery sur notre node (on utilise pour ça [npm](https://www.npmjs.com/)) avec la commande ```npm install -g nom_du_package``` -g pour global. Ou alors utiliser les fonctions primitives de JS.  
[Travis CI](https://travis-ci.org/) est une bonne façon de checker rapidement que tous les tests sont passés et donne une bonne indication si le code est bien écrit.  
Cependant il faut tout de même aller voir le code source pour vérifier le nombre de tests et vérifier que les tests sont 'correctes'.  
La couverture de code permet d'être sûr que le code est bien testé.  

Pour l'exemple on va coder en natif (on installe pas de package npm).  

Numéro de version : [semantic versionning](http://semver.org/).  
Ca change pas la version dont on s'en sert : patch  
On change version mineure quand on ajoute une fonctionnalité mais ne crée pas d'incompatibilité : minor  
On casse l'interface, le programme : major  



