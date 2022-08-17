 
![)1_MissingMaps logo](https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_mmLogo.png)
 
# Cartographie avancée avec JOSM
 
![02_People mapping togetherJOSM interface showing where preferences are located](https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_mapathon.png)
 
## Configuration
 
Tout d'abord, vous devez télécharger JOSM à partir de [https://josm.openstreetmap.de/](https://josm.openstreetmap.de/wiki/Fr%3AWikiStart) -- il existe plusieurs options de téléchargement, mais JOSM.jnlp fonctionne généralement bien.
 
Lancez JOSM. La première fois que vous le lancez, il se peut que vous deviez faire un clic droit et choisir «Ouvrir». Vous devrez peut-être aussi aller dans Préférences->Sécurité pour pouvoir ouvrir le fichier. **Si vous êtes invité à mettre à jour votre logiciel Java, faites-le.**
 
Lorsque JOSM s'ouvre, vous verrez un écran gris avec quelques nouvelles, des mises à jour et un certain nombre de boutons. C’est le moment d’ajouter quelques greffons (plugins), dont le greffon building_tools, pour aider à cartographier plus efficacement.
 
Pour ajouter des greffons, cliquez sur le bouton qui ressemble à deux curseurs pour accéder à  la fenêtre des préférences. On peut aussi y accéder dans le menu, sous «Édition», ou en appuyant sur `F12`.
 
![03_JOSM interface showing where preferences are located](https://raw.githubusercontent.com/MissingMaps/img/6e2b668b5be0bc1f239c856fbb783191ed453326/images/AdvJOSM_FR_03_Preferences.png)
 
Dans la fenêtre de Préférences, cliquez sur le quatrième bouton, celui qui ressemble à une pièce de puzzle. Il s’agit du menu des greffons. (Sur certains ordinateurs, ces boutons sont très petits).
 
![04_Plugin button](https://arcmaps.s3.amazonaws.com/share/validationPictures/PreMappingplug.png)
 
Maintenant, cherchez `buildings_tools`. Pour le télécharger, cochez la case puis cliquez sur `OK` en bas de l'écran. Vous devrez redémarrer JOSM lors de l’installation.
 
![05_JOSM plugins - buildings_tools](https://raw.githubusercontent.com/MissingMaps/img/6e2b668b5be0bc1f239c856fbb783191ed453326/images/AdvJOSM_FR_05_BuildingTools.PNG)
 
Nous vous suggérons de télécharger également les greffons ci-dessous. Ils vous aideront dans votre travail de cartographie et d’édition. Il existe de nombreux greffons que vous pouvez explorer [ici](https://josm.openstreetmap.de/wiki/Fr%3APlugins).
 
 - **auto_tools** Outils automatiques d'aide pour les problèmes courants  
 
 - **building_tools** Outils pour le dessin simple de bâtiments rectangulaires ou circulaires  
 - **FastDraw** Dessiner rapidement des chemins à la souris
 - **imagery_offset_db** Base de données de décalages d’imagerie: partager et acquérir des décalages d’imagerie avec un seul bouton
 - **mapwithai** Permet l'utilisation de données MapWithAI
 - **markseen** Affiche les zones de la carte qui ont été vues (utile pour valider sans manquer une zone).
 - **opendata** Permet à JOSM de lire des formats de données ouvertes (csv, xls, ods, kml, kmz, kmz, shp, mif) dans un calque de données .osm. Supporte la compression zip et 7z de ces types de fichiers.     
 - **scripting** Pour automatiser les petites tâches pour lesquelles aucun greffon spécifique n'est disponible
 - **terracer** Créer des maisons mitoyennes depuis des blocs entiers
 - **utilsplugin2** Plusieurs outils pour rendre votre vie plus facile
 
Il y a d’autres paramètres que nous devons aussi changer.
 
Cliquez à nouveau sur le bouton «Préférences». Le deuxième bouton ressemble à deux ordinateurs. Il s'agit des paramètres de connexion.
 
![06_Connexion icon](https://arcmaps.s3.amazonaws.com/share/validationPictures/PreMappingComputers.png)
 
Assurez-vous d'être connecté avec votre nom d'utilisateur et votre mot de passe OpenStreetMap.
 
Ensuite, vers le bas de l'écran, il y a un bouton qui ressemble à une télécommande. Cliquez dessus et assurez-vous que la case «Activer le contrôle à distance» est cochée. Cela permettra au Gestionnaire de tâches HOT d'utiliser JOSM pour télécharger votre projet.
 
![07_Remote control icon](https://arcmaps.s3.amazonaws.com/share/validationPictures/PreMappingRemote.png)
 
![08_Remote control details](https://raw.githubusercontent.com/MissingMaps/img/6e2b668b5be0bc1f239c856fbb783191ed453326/images/AdvJOSM_FR_08_RemoteControl.PNG)
 
## Démarrage
 
**Comprendre votre projet**
 
Dans le [Gestionnaire de tâches HOT](http://tasks.hotosm.org), choisissez un projet à cartographier. Avant de commencer à cartographier, vous devez comprendre l'objectif du projet en lisant les onglets «Description» et «Instructions». La description se trouve sur la page principale du projet, tandis que les instructions apparaissent après avoir appuyé sur le bouton `Contribuer`. Ces instructions vous indiqueront les éléments à cartographier, les attributs à utiliser, l’imagerie à utiliser et toute autre considération du gestionnaire de projet. Chaque projet est unique et il est important de suivre attentivement les instructions du gestionnaire de projet pour s'assurer que la zone soit cartographiée de manière cohérente. Voici un exemple de description et d'instructions pour un projet:
 
![09_Example of HOT task description](https://raw.githubusercontent.com/MissingMaps/img/6e2b668b5be0bc1f239c856fbb783191ed453326/images/AdvJOSM_FR_09_HOT_taskDescription.PNG)  
  
  
**Ouvrir un projet dans JOSM**
 
S'il n'est pas déjà ouvert, ouvrez JOSM. Sur la page de présentation du projet, assurez-vous que vous avez sélectionné «JOSM» dans le menu déroulant de l'éditeur avant de sélectionner une tâche à cartographier. Vous pouvez modifier votre éditeur par défaut dans les paramètres du compte.
 
![10_Change editor](https://raw.githubusercontent.com/MissingMaps/img/6e2b668b5be0bc1f239c856fbb783191ed453326/images/AdvJOSM_FR_10_ChooseEditor.PNG)
 
Si l'imagerie se charge automatiquement, vous êtes prêt à cartographier. Autrement, JOSM affichera un fond noir. Vérifiez les instructions du projet et activez la bonne couche d'imagerie dans le menu déroulant «Imagerie», situé dans la barre de menu supérieur.
 
Vous remarquerez que la limite de la tâche est maintenant indiquée par une boîte grise entourée d'une zone hachurée. Cela a remplacé la bordure rose de l'éditeur iD. Évitez de cartographier dans les zones hachurées, sauf si un élément cartographique s'étend sur plusieurs tâches. Vous pouvez toujours verrouiller et cartographier la tâche adjacente après avoir terminé votre carré.
 
![11_Limit of task in JOSM](https://arcmaps.s3.amazonaws.com/share/validationPictures/OpenMappingTask2.png)
 
## Les bases JOSM
 
**Naviguer JOSM**
 
Autre que la barre de menu supérieure, il y a quatre zones principales dans l'éditeur JOSM : deux rangées d'icônes à gauche et en haut de la fenêtre avec les outils et raccourcis fréquemment utilisés; une zone centrale pour cartographier; et une barre latérale sur le côté droit de la fenêtre. Si vous ne voyez pas la carte ou les panneaux latéraux, vous devez d'abord télécharger les données cartographiques en utilisant «Télécharger les données...» dans le menu «Fichier» ou en appuyant sur `Ctrl+Shift+Down`. Vous pouvez ensuite charger l'imagerie en ouvrant le menu déroulant «Imagerie» en haut de la fenêtre et en sélectionnant l'imagerie que vous souhaitez utiliser.
 
![12_Sections of JOSM Editor](https://raw.githubusercontent.com/MissingMaps/img/6e2b668b5be0bc1f239c856fbb783191ed453326/images/AdvJOSM_FR_12_EditorSections.png)
 
Les icônes situées en haut de l'éditeur constituent une sélection configurable d'outils à accès rapide, également disponibles dans les menus déroulants situés au-dessus. Les icônes situées sur le côté gauche de la fenêtre sont divisées en deux groupes. Les icônes du haut sont toutes liées à la sélection des différents modes d'édition, et celles du bas permettent de basculer la visibilité des fenêtres de la barre latérale de droite. Au minimum, assurez-vous que les fenêtres «Calques» et «Attributs/Appartenance» sont visibles sur le côté droit.
 
La zone centrale de l'éditeur permet de visualiser et de modifier la géométrie des informations spatiales. Si vous avez déjà chargé des données dans JOSM, vous pouvez y naviguer en zoomant avec la molette de votre souris et faire un panoramique sur la carte en cliquant avec le bouton droit de la souris et en la faisant glisser.
 
La fenêtre «Calques» vous montre la couche de données OSM, la limite de la tâche et l'imagerie. Vous pouvez modifier l’ordre des couches en les glissant, ou vous pouvez modifier leur visibilité en sélectionnant l’icône en forme d'œil devant le nom de la couche. Vous remarquerez également un crochet vert à côté de la couche de données OSM, ce qui signifie que cette couche est active et modifiable - elle peut être basculée, ce qui est utile lorsque vous travaillez avec plusieurs couches de données.
 
La fenêtre «Attributs/Appartenance» vous montre les attributs d'un objet une fois qu'il est sélectionné. C'est ici que vous pouvez modifier les attributs d'un objet.
 
Pour plus d'informations sur les fonctions et opérations de base de JOSM, veuillez vous référer au guide [JOSM - Detailed Editing](learnosm.org/fr/josm) créé et maintenu par learnOSM.
 
**Guide général de cartographie**
 
Pour **tracer un nouvel élément** dans JOSM, activez l'outil «Tracer» en sélectionnant `A`. Contrairement à l'éditeur iD, vous n'avez pas à distinguer les outils point, ligne et polygone - cet outil les dessine tous. Pour dessiner un point, double-cliquez. Pour ajouter une ligne, cliquez une fois jusqu'à la fin de l'élément et double-cliquez sur le dernier point. Pour dessiner un polygone, tracez l'élément en cliquant une fois et double-cliquez sur le premier point pour fermer la forme.
 
Pour **ajouter des attributs** à votre élément nouvellement dessiné, assurez-vous qu'il est sélectionné - entrez en mode «Sélectionner» en appuyant sur `S` et cliquez sur l'élément. Lorsqu'il est sélectionné, appuyez sur le bouton «Ajouter» dans le menu «Attributs/Appartenance» à droite de l'écran. Contrairement à l'éditeur iD, vous devrez sélectionner deux parties pour chaque étiquette : la «clé» et la «valeur». Vous verrez ces cases dans la fenêtre «Ajouter une étiquette». Toutes les étiquettes ont une clé et une valeur, mais cela n'est peut-être pas aussi évident dans l'éditeur iD. Par exemple, l’attribut générique «building» s'écrit `building=yes` où «building» est la clé et «yes» la valeur. Pour s’assurer d’utiliser les attributs appropriés, consultez le [OpenStreetMap Wiki](https://wiki.openstreetmap.org/wiki/Main_Page) et recherchez votre élément. Le menu «Attributs/Appartenance» peut également être utilisé pour modifier les attributs existants. 
Il est assez fréquent de rencontrer des éléments déjà cartographiés qui nécessitent un petit ajustement. JOSM dispose de plusieurs outils puissants qui rendent cette opération très efficace. L'outil d'extrusion, activé avec `X` peut être utilisé pour raccourcir ou allonger les bords des bâtiments existants, il suffit d’activer l’outil, puis de  faire glisser un bord de l'élément. Si vous voyez des bâtiments non orthogonaux, vous pouvez les corriger en les sélectionnant et en appuyant sur `Q`. Les bâtiments sélectionnés peuvent également être tournés en maintenant les touches `Shift+Ctrl`, et redimensionnés en maintenant les touches `Ctrl+Alt`. Les bâtiments peuvent être déconnectés d'autres éléments en appuyant sur 'G' avec le bâtiment sélectionné (cela «décolle» les nœuds connectés, ce qui est très utile ailleurs aussi !).
 
Il peut être utile de **régler la visibilité** de vos couches d'imagerie dans JOSM. Sélectionnez une couche d'imagerie dans la fenêtre Calques et cliquez sur l'icône à la base de la fenêtre indiquée ci-dessous :
 
![13_Visibility](https://raw.githubusercontent.com/MissingMaps/img/6e2b668b5be0bc1f239c856fbb783191ed453326/images/AdvJOSM_FR_13_Visibility.png)
 
La visibilité de la couche peut ensuite être ajustée à l'aide d'une série de curseurs. L'augmentation du gamma tend à faire ressortir les éléments du paysage.
 
Lorsque vous cartographiez un projet du Gestionnaire de tâche HOT, tenez-vous-en à la couche d'imagerie que vous avez été invité à utiliser dans les instructions du projet. Toutefois, il est bon de la comparer à d'autres sources d'imagerie lorsque vous effectuez la cartographie. Ceci est particulièrement facile dans JOSM. Des couches supplémentaires peuvent être ajoutées en les sélectionnant dans le menu «Imagerie» et leur visibilité peut être activée/désactivée à l'aide des icônes des yeux dans la fenêtre des Calques.
 
**Raccourcis JOSM**
 
De base :
- `S` = Sélectionner des objets
- `Esc` = tout désélectionner
- `Shift+U` = désélectionner les noeuds
- `Delete` = supprimer le ou les objets sélectionnés
- `A` = tracer
- `M` = Fusionner les noeuds
- `G` = Séparer les chemins
- `C` = Fusionner les chemins
- `P` = Couper les chemins en deux, au niveau du noeud sélectionné
- `Shift+Ctrl` = faire pivoter l'objet
- `Ctrl+Alt` = redimensionner l'objet
 
Pratique pour dessiner des bâtiments :
- `B` = Dessiner des bâtiments
- `Alt+R` = définir la forme du bâtiment comme étant rectangulaire
- `Alt+Z` = définir la forme du bâtiment comme étant circulaire
- `Q` = Orthogonaliser une forme
- `X` = outil d'extrusion
- `Shift+J` = Joindre les zones superposées
 
Techniques intermédiaires :
- `Ctrl+B` = Créer un Multipolygone
- `Shift+I` = ajouter des noeuds aux intersections
- `Ctrl+Shift+G` = remplacer la géométrie
- `Shift+R` = coller les attributs de la sélection précédente
 
FastDraw :
- `Shift+F` = activer le greffon FastDraw
- `Space` = dessine un seul noeud, maintenez et déplacez la souris pour continuer à dessiner des noeuds (en utilisant FastDraw)
- `Backspace` = supprimer le dernier noeud (en utilisant FastDraw)
- `Q` = ouvrir les paramètres de FastDraw (en utilisant FastDraw)
 
Certains de ces raccourcis ne fonctionnent que si les greffons nécessaires sont installés (par exemple utilsplugin2). Vous trouverez d'autres raccourcis ici : https://josm.openstreetmap.de/wiki/Fr%3AShortcuts.
 
**Sauvegarder vos modifications**
 
Comme pour l'édition dans l'iD Editor, vous devez vous assurer que vous sauvegardez fréquemment vos modifications. Sélectionnez l'icône de disque dur avec une flèche verte vers le haut (ou `Ctrl + Shift + Up`) pour afficher la popup Upload. Ici, vous pouvez modifier les commentaires du groupe de modifications et exécuter le téléchargement en sélectionnant «Envoyer» ou en appuyant sur `Enter` sur votre clavier.
 
## Cartographier des bâtiments 
 
**Greffon de construction de bâtiment**
 
Pour cartographier un **bâtiment rectangulaire**, appuyez sur `B` sur votre clavier. Cela active le greffon `buildings_tool` que vous avez téléchargé et installé dans les préférences précédemment. Cliquez sur le coin d'un bâtiment et maintenez le bouton de la souris enfoncé. Déplacez votre pointeur le long du bord le plus long du bâtiment et relâchez à un autre coin. Vous êtes alors libre de définir la profondeur du bâtiment, de l'ajuster jusqu'à ce qu'il s'adapte et de cliquer pour terminer la forme. L'outil de construction rend la forme orthogonal et ajoute l’attribut `building=yes` automatiquement - remarquez combien cela a été plus rapide que dans l'éditeur iD?
 
Ce greffon permet de dessiner des rectangles parallèles à tout autre élément de la carte que vous avez sélectionné. Ceci est très utile si vous dessinez de nombreux bâtiments qui sont construits dans l'alignement d'une route. Tout ce que vous avez à faire est de sélectionner la route avant d’appuyer sur `B` et de dessiner.
 
Vous avez peut-être trouvé un **bâtiment circulaire**. Assurez-vous d'abord que vous êtes en mode construction, sinon appuyez sur `B`. Maintenant, passez votre outil de construction en mode cercle en sélectionnant `Alt+Z` sur votre clavier. Tracez le diamètre du bâtiment circulaire et il créera automatiquement un bâtiment circulaire parfaitement étiqueté. Revenez au mode de construction rectangle en sélectionnant `Alt+R` sur votre clavier.
 
Vous pouvez modifier l'étiquette qui est appliquée aux formes avec cet outil en ouvrant ses paramètres avancés. Dans la barre d'outils supérieure, allez dans «Données» puis «Définir taille et forme des bâtiments» et sélectionnez «Avancé...» Dans cette fenêtre, vous pouvez modifier l’attribut ou ajouter des attributs supplémentaires, si nécessaire. S’il s’agit d’une tâche via le Gestionnaire de tâches HOT, gardez toujours à l'esprit les instructions d'étiquetage décrites par le gestionnaire de projet. 
**Formes complexes**
 
Vous pouvez avoir un bâtiment qui a une **forme inhabituelle** comme un L, un T ou un U plutôt qu'un simple rectangle. Voici deux façons de dessiner ces caractéristiques : utiliser l'outil d'extrusion et combiner des formes superposées. La meilleure façon de dessiner pour vous dépendra de la complexité du bâtiment et de vos préférences.
 
Pour cartographier avec l'outil Extruder, dessinez d'abord un rectangle, en utilisant le greffon `buildings_tool` (appuyez sur "B"), en commençant par le côté le plus long du bâtiment. Ensuite, appuyer sur `X` sur votre clavier, cela active un outil puissant dans l'éditeur, appelé l'outil Extruder. Double-cliquez pour ajouter un point au bord de votre rectangle où le bâtiment s'étend. Ensuite, faites glisser le côté que vous souhaitez allonger, jusqu'à ce qu'il s'adapte à l'empreinte.
 
![14_Drawing L shape building](https://arcmaps.s3.amazonaws.com/share/validationPictures/ComplexShapes1.png)
 
Une autre façon de cartographier des bâtiments complexes est de combiner plusieurs formes simples. Ceci est particulièrement utile pour un bâtiment qui a une section circulaire, ou qui est trop complexe pour que la forme soit correctement rendue orthogonale avec le raccourci `Q`. Dessinez autant de formes que nécessaire pour compléter le bâtiment. Assurez-vous que les formes individuelles soient rendues orthogonales/circulaires et qu'elles se chevauchent toutes avec au moins une autre forme. L'utilisation du greffon `buildings_tool` est très utile pour cette étape: lorsque la première forme est sélectionnée, les formes suivantes seront dessinées en alignement. Lorsque toutes les formes sont dessinées, sélectionnez-les toutes et utilisez l'outil «joindre les zones qui se chevauchent» avec le raccourci `Shift+J`. Il se peut que vous deviez faire du nettoyage après la jointure pour supprimer les nœuds indésirables. Pour ce faire, vous pouvez supprimer manuellement les nœuds superflus ou utiliser l'outil «Simplifier». Celui-ci est s’ouvre avec le raccourcis `Shift+Y`
 
![15_Drawing complex building](https://arcmaps.s3.amazonaws.com/share/validationPictures/ComplexShapes2.png)
 
Une autre astuce pour dessiner des bâtiments complexes consiste à tracer d'abord le long du toit du bâtiment, où la forme est plus visible, comme dans l'exemple ci-dessus. Une fois que vous êtes satisfait de la forme, déplacez-la en la faisant glisser et alignez-la correctement avec la base du bâtiment.
 
Pour les **bâtiments avec cour**, vous devrez créer un multipolygone. Il y a deux façons simples de le faire. Vous pouvez dessiner des segments de bâtiments qui se chevauchent en laissant un espace au milieu pour la cour et les combiner avec `Shift+J` pour fusionner les bâtiments qui se chevauchent en un seul. La couleur des bâtiments deviendra violette, ce qui indique que vous avez réussi à créer un multipolygone.  
 
![16_Drawing building with court method 1](https://arcmaps.s3.amazonaws.com/share/validationPictures/ComplexShapes3.png)
 
L'autre façon de procéder consiste à cartographier l'extérieur et l'intérieur comme deux éléments distincts. Une fois que vous êtes satisfait de leurs formes, sélectionnez les deux et créez un multipolygone. Dans la barre d'outils supérieure, sélectionnez «Outils» puis «Créer un multipolygone» ou utilisez le raccourci `Ctrl+B`. La couleur du bâtiment va passer au violet, ce qui indique que vous avez réussi à créer un multipolygone. La forme intérieure ne doit pas être ombrée et doit ressembler à un trou dans le bâtiment.
 
![17_Drawing building with court method 2](https://arcmaps.s3.amazonaws.com/share/validationPictures/ComplexShapes4.png)
 
## Autres greffons utiles
### utilsplugin2
En ajoutant utilsplugin2 à JOSM, vous activez un certain nombre de fonctionnalités pratiques. Voici quelques-unes de nos préférées :
 
**Ajouter des noeuds aux intersections** `Shift+I` : cette fonction vous permet d'ajouter des nœuds là où les lignes sélectionnées se croisent. C'est très utile si vous rencontrez des données provenant de nouveaux cartographes qui ont oublié de connecter des éléments qui se chevauchent, comme des sentiers. Plutôt que d'ajouter et de coller manuellement des nœuds supplémentaires sur deux lignes qui se chevauchent, utilisez cet outil pour le faire automatiquement.
 
**Remplacer la géométrie** `Ctrl+Shift+G` : cette fonction vous permet de redessiner un élément qui a été mal dessiné ou dont la forme réelle a été mise à jour, en conservant les étiquettes et l'historique de l'élément original. Cette fonction est utile dans les cas où il est plus rapide de redessiner un élément que de le modifier. Il est important de conserver l'historique d'un élément lorsque possible, afin de préserver les utilisateurs initiaux et les commentaires des modifications. En utilisant cette fonction, vous pouvez être certain de ne pas perdre des informations importantes et des attributs locaux lorsque vous améliorez la géométrie d'un élément.
 
**Coller les attributs de la sélection précédente** `Shift+R` : cette fonction vous permet de coller les attributs sur un objet sélectionné à partir de l'objet que vous aviez sélectionné précédemment. Cette fonction est très utile si vous voulez rapidement appliquer plusieurs étiquettes d'un objet à un autre. Il suffit de sélectionner l'objet avec les tags que vous voulez transférer, puis de sélectionner l'objet sur lequel vous voulez coller les tags et d'appuyer sur `Shift+R`.
 
**Désélectionner les nœuds** `Shift+U` : cette fonction vous permet de désélectionner rapidement les nœuds de votre sélection actuelle. Ceci est très utile si vous souhaitez modifier les attributs de plusieurs polygones que vous avez sélectionnés avec l'outil de sélection (`s`). Sans désélectionner les nœuds de votre sélection, si vous ajoutez une nouvelle étiquette, elle sera appliquée à tous les éléments, y compris les nœuds, plutôt qu'aux seuls polygones.
 
Vous trouverez les autres fonctions de ce greffon sur sa page dans le [JOSM Wiki](https://josm.openstreetmap.de/wiki/Help/Plugin/UtilsPlugin2) ou le [OSM Wiki](https://wiki.openstreetmap.org/wiki/JOSM/Plugins/utilsplugin2).
 
### FastDraw
Ce greffon facilite grandement le processus de numérisation des grandes formes complexes telles que les lacs et les forêts. En utilisant FastDraw, vous pouvez tracer une forme et déposer des nœuds sans avoir à cliquer sur le bouton de votre souris. Les nœuds seront dessinés en fonction d'une distance définie.
 
Pour commencer à utiliser le greffon, appuyez sur `Shift+F`. Bien qu'il existe de nombreuses façons d'utiliser l'outil, comme indiqué dans le [Wiki](https://wiki.openstreetmap.org/wiki/JOSM/Plugins/FastDraw), une façon simple de commencer est de déplacer votre curseur à l'endroit où vous voulez commencer à dessiner, de maintenir la barre d'espacement enfoncée et de faire glisser votre curseur autour de la forme. Si vous voulez arrêter de déposer des nœuds, relâchez la barre d'espacement jusqu'à ce que vous soyez prêt à tracer à nouveau. Vous pouvez appuyer une fois sur la barre d'espacement pour déposer un seul point en cours de route. Appuyez sur `Backspace` pour supprimer le dernier nœud dessiné. Lorsque vous avez terminé de dessiner une forme, appuyez sur `Enter`.
 
![18_FastDraw 01](https://arcmaps.s3.amazonaws.com/share/validationPictures/FastDraw1.png)
 
La voie sera simplifiée (nœuds superflus supprimés) et deviendra orange. Si la forme a été trop simplifiée, utilisez la flèche vers le haut `↑` pour ajouter des nœuds. Si la forme a trop de nœuds, utilisez la flèche vers le bas `↓` pour supprimer des nœuds. À savoir qu’il est important de réduire le nombre de nœuds d'un élément dans OpenStreetMap pour limiter la mémoire nécessaire au stockage des données. Lorsque vous êtes satisfait de votre forme, appuyez sur `Enter` une 2ème fois et votre forme sera créée. Pour dessiner une autre forme avec le greffon, appuyez sur `Shift+F`de nouveau.
 
![19_FastDraw 02](https://arcmaps.s3.amazonaws.com/share/validationPictures/FastDraw2.png)
 
Pour accéder au menu de configuration FastDraw, appuyez sur `Q` lorsque le greffon est actif (c'est-à-dire après avoir appuyé sur `Shift+F`). Dans ce menu, vous pouvez modifier le nombre de points dessinés lorsque vous faites glisser votre souris le long de la carte. De plus, vous pouvez ajouter les attributs que vous souhaitez appliquer à votre élément sous «Ajout automatique d’attribut» si vous dessinez plusieurs éléments de suite qui nécessitent les mêmes attributs. Il y a également l’option de sélectionner «Dessiner les polygones fermés seulement» pour accélérer la numérisation, lorsque vous dessinez des polygones au lieu de lignes.
 
![20_FastDraw configuration](https://raw.githubusercontent.com/MissingMaps/img/6e2b668b5be0bc1f239c856fbb783191ed453326/images/AdvJOSM_FR_20_FastDrawConfiguration.PNG)
 
Pour plus d'informations sur le greffon FastDraw, consultez sa page dans le [Wiki](https://wiki.openstreetmap.org/wiki/JOSM/Plugins/FastDraw).
 
### Terracer
Le greffon Terracer permet aux utilisateurs de créer rapidement des maisons mitoyennes, aussi appelé maison en rangée ou maison de ville. Il fonctionne en séparant un grand polygone, délimitant l'ensemble de la structure, en unités individuelles délimitant des maisons individuelles au sein du grand bâtiment. Les [bâtiments mitoyens](https://fr.wikipedia.org/wiki/Maison_de_ville) sont constitués de plusieurs logements attachés qui partagent des murs mitoyens. Ils ont souvent des entrées et des adresses ou des numéros d'unités distincts. Il y a au moins 2 façons de cartographier ces structures dans OSM : comme un grand bâtiment étiqueté comme `building=terrace` avec des noeuds individuels pour chaque unité étiquetée avec son adresse ; ou comme plusieurs polygones attachés partageant au moins deux noeuds étiquetés comme `building=house` avec d'autres étiquettes pour décrire les unités individuelles (adresse etc.).
 
La deuxième méthode pour tracer ces bâtiments est préférable, car elle illustre de manière plus détaillée l'emplacement des unités individuelles. La façon la plus simple de cartographier des maisons en terrasse avec cette méthode est d'utiliser le greffon Terracer, décrit ci-dessous. Cependant, gardez à l'esprit que même si c'est la méthode préférable pour cartographier ces structures, elle ne doit être utilisée que lorsque le cartographe peut délimiter en toute confiance les unités individuelles, et lorsqu'elles sont de taille égale. Si le cartographe ne peut pas le confirmer à partir des connaissances locales ou de l'imagerie des rues, il est préférable de cartographier en utilisant la première méthode et d'indiquer les unités individuelles avec des nœuds marquant l'entrée et l'adresse.
 
Pour utiliser le greffon Terracer, tracez d'abord le contour extérieur de la terrasse entière (l'étendue de toutes les unités). Ceci peut être fait facilement avec le greffon building_tools installé et en appuyant sur `B`. Assurez-vous que votre forme est un quadrilatère (4 côtés) et qu'elle est correctement alignée avec l'imagerie. Faites pivoter `Shift+Ctrl`, redimensionnez `Ctrl+Alt` et déplacez la forme si nécessaire jusqu'à ce que vous soyez satisfait.
 
![21_Drawing building](https://arcmaps.s3.amazonaws.com/share/validationPictures/Terracer1.png)
 
Ensuite, vous êtes prêt à utiliser le greffon Terracer et à découper le polygone en unités individuelles mitoyennes. Avec le polygone sélectionné, appuyez sur `Shift+T` pour activer le greffon et lancer la boîte de dialogue "Diviser une maison". Dans cette boîte de dialogue, indiquez le nombre d'unités que vous souhaitez créer dans la ligne «Segments». Cet exemple montre comment les adresses peuvent être ajoutées aux unités en indiquant le numéro d'unité le plus bas (1) et le plus haut (7).
 
![22_Terracer settings](https://raw.githubusercontent.com/MissingMaps/img/6e2b668b5be0bc1f239c856fbb783191ed453326/images/AdvJOSM_FR_22_Terracer.PNG)
 
En fonction de la méthode d'interpolation choisie dans la boîte de dialogue, le greffon remplira l'attribut d'adresse pour chaque maison, en fonction de ces numéros et du nombre de segments/unités. La méthode d'interpolation «Even/Odd» sautera un numéro d'adresse sur deux alors que la méthode «All»" utilisera tous les numéros. Appuyez sur `OK` et le greffon effectuera ses actions.
 
![23_Terracer result](https://arcmaps.s3.amazonaws.com/share/validationPictures/Terracer3.png)
 
Si vous n'aimez pas les résultats, appuyez sur `Ctrl+Z` pour annuler et réessayer. Assurez-vous que les nouveaux polygones sont marqués de manière appropriée (par exemple, `address=house`).
 
## Autres ressources
- [JOSM Résolution des conflits](https://learnosm.org/en/josm/josm-conflict-resolution/)
- [Relations JOSM](https://learnosm.org/en/josm/josm-relations/)
 
