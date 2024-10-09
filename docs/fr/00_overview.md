---
layout: doc
aside: false
---
# Qu'est-ce que Quetzal Cloud
Quetzal Cloud est une solution web open source pour la modélisation des transports. Elle fournit un cadre pour configurer et exécuter des modèles Python en ligne.
 * L'architecture cloud vous permet de stocker vos données en toute sécurité et d'exécuter plusieurs modèles en parallèle.
 * L'interface utilisateur propose un ensemble de fonctionnalités pour gérer et exécuter vos modèles.

# Fonctionnalités de l'Interface Utilisateur de Quetzal
## Accédez et gérez vos projets dans le navigateur
Quetzal Cloud fournit une interface graphique pour gérer vos projets stockés dans le cloud.
* Accédez à tous vos projets au même endroit.
* Trouvez facilement vos scénarios avec la barre de recherche.
* Gérez les entrées et les sorties de vos scénarios.
* Le stockage cloud et le téléchargement/upload de fichiers zip sont tous deux pris en charge.

![Alt text](/other/load_project_0.png)

## Microservices
Les microservices offrent un traitement automatisé robuste pour tirer le meilleur parti des données sur le réseau routier et de transport public.
### Importateur OpenStreetMap (OSM importer)
Importez un réseau routier à partir d'Open Street Map, nettoyez-le et convertissez-le au format léger de réseau routier de Quetzal.
* Dessinez un polygone sur la carte.
* Choisissez les types de routes que vous souhaitez importer, soit uniquement les principales, soit le réseau détaillé.
* Incluez les détails des pistes cyclables si nécessaire.

![Alt text](/other/microservices.png)

### Importateur GTFS
Importez des données GTFS soit à partir d'un fichier zip, soit téléchargez-les depuis un dépôt en ligne et convertissez-les au format de transport public de Quetzal.
* Téléchargez un fichier zip avec l'importateur zip ou 
* depuis database.mobilitydata.org.

![Alt text](/other/gtfs_importer.png)

### Matrix Road Caster
Matrix Road Caster est un algorithme d'apprentissage automatique utilisé pour estimer la vitesse moyenne sur les liens routiers à un moment donné de la journée.

Des origines et des destinations aléatoires sont dispersées sur le réseau, et les temps Origine-Destination sont demandés via l'API Here pour l'heure choisie de la journée.
![Alt text](/here/1_HERE_zones_centroids.png)
L'algorithme itératif ajuste la vitesse sur le réseau et calcule le chemin le plus court jusqu'à ce que les temps OD soient cohérents entre le réseau et le pool de requêtes.
![Alt text](/here/2_HERE_iteration_error.png)  
![Alt text](/here/3_HERE_road_calibration.png) 
Pour calibrer les routes à petite échelle avec peu de demandes, les temps OD sont interpolés avant l'algorithme itératif de temps OD à la route.
![Alt text](/here/4_HERE_OD_prediction_1.png) 
La pertinence de l'interpolation est surveillée.
![Alt text](/here/5_HERE_model_calibration.png)

### Cartographie
La plupart des itinéraires de bus utilisent le réseau routier. À chaque segment station-station correspond une liste de routes. Comprendre quelles routes sont utilisées par les bus est crucial pour pouvoir mapper la charge des bus sur la route et appliquer les retards de congestion aux bus. Le microservice de cartographie utilise un algorithme avancé pour fusionner le réseau routier et de transport public.
![Alt text](/other/mapmatching.png)

## Éditeur de Réseau

### Réseau de Transport Public
La carte des transports publics montre tous les itinéraires de transport public.
* Les trajets peuvent être triés, filtrés et édités en groupes via le panneau latéral.
![Alt text](/network_editor/pt_network_map.png)
Les routes de transport public peuvent être appariées au réseau routier à la volée grâce à un algorithme de cartographie simple dans le navigateur.
![Alt text](/network_editor/front_mapmatching.png)
Les données de chaque lien de transport public peuvent être éditées individuellement.
![Alt text](/network_editor/front_mapmatching.png)
* Le module d'horaires gère la conversion des trajets basés sur la fréquence en horaires.
* Les horaires peuvent être facilement édités, les trajets peuvent être dupliqués.
![Alt text](/network_editor/timetable.png)

### Réseau Routier
Le réseau routier peut être facilement édité :
* Ajouter de nouvelles routes.
* Modifier les informations sur les nœuds et les liens.
* Sélection facile de plusieurs liens à la fois pour une édition de groupe.
* Indications de direction pour modifier les liens bidirectionnels.

![Alt text](/network_editor/road.png)
![Alt text](/network_editor/road_edit.png)
![Alt text](/network_editor/road_group_edit.png)

## Paramètres de Scénario et Exécutions de Simulation

Tous les paramètres et contrôles de simulation au même endroit, avec de nombreuses fonctionnalités conçues pour fournir des indications et des retours.

### Paramètres
* Des notes méthodologiques pour le scénario sont affichées dans l'en-tête.
* Les paramètres sont regroupés en catégories.
* De petites notes peuvent être ajoutées à chaque catégorie pour expliquer l'étape globale de modélisation.
* Chaque paramètre est accompagné d'un nom, d'une unité et d'un indice repliable (?).
* Les indices peuvent être modifiés par l'utilisateur pour une meilleure expérience collaborative.

### Exécutions
* Divers types de simulations peuvent être disponibles | détaillées et rapides par exemple. Chaque simulation a une liste d'étapes différentes (et de paramètres pertinents).
* L'interface fournit des mises à jour en temps réel sur les simulations.
* Les journaux complets de chaque étape peuvent être explorés dans l'interface ou téléchargés.

![Alt text](/run/run.png)

## Résultats
### Cartes
Les résultats géographiques peuvent être analysés avec un puissant éditeur de cartes.
* Chaque couche peut être visualisée avec des paramètres de visualisation personnalisés.
* Les présélections peuvent être enregistrées dans la base de données ou gérées avec des fichiers json.
* La fonctionnalité de téléchargement et de partage des présélections facilite le partage entre scénarios et projets.
![Alt text](/results/road_speed_map.png)
* De nombreuses présélections peuvent être affichées simultanément pour composer des cartes éclairantes.
![Alt text](/results/map_composer.png)
### Rapports
* Tous les graphiques et images générés par le modèle sont organisés dans un rapport automatisé. L'interface prend en charge les fichiers Markdown pour composer les rapports et afficher les données.
* Les images peuvent être copiées ou téléchargées en masse avec le rapport sous forme de fichier zip.
![Alt text](/results/pictures.png)
### Tableaux de Données
Les sorties du modèle exportées au format .csv peuvent être parcourues directement dans l'interface.
![Alt text](/results/result_table.png)

# Architecture Cloud
<img src="/api.svg" alt="dessin" width="800"/>