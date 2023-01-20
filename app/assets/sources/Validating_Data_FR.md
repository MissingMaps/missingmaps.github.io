
![MM Logo](https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_mmLogo.png)
  
# Comment valider les données cartographiques


![Photo of in-person Mapathon](https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_mapathon.png)
  
## Contexte

La validation des données est une partie importante d'OpenStreetMap et de la cartographie humanitaire. OpenStreetMap est construit par des bénévoles de tous niveaux de compétences, provenant de pays et de milieux différents, mais aussi d'expériences variées. Bien que la présence d'une telle variété de cartographes soit un avantage pour le projet, elle peut également entraîner des incohérences dans la cartographie. Les incohérences sont particulièrement fréquentes lorsque des cartographes débutants travaillent sur de petites sections isolées de la carte dans des pays qui leur sont peu familiers - comme c'est souvent le cas sur le [Gestionnaire de tâches HOT](https://tasks.hotosm.org/).

  

Les validateurs sont des bénévoles expérimentés en cartographie qui examinent le travail des cartographes complété avec le Gestionnaire de tâches HOT. Il incombe aux validateurs de :

  

- Vérifier que les **normes d'OSM soient respectées**. Les données doivent être exactes, complètes et cohérentes.

  

- S'assurer que les projets de cartographie sont complétés **comme prévu par le chef de projet**. Cela inclut la préservation et l'amélioration des données locales.

  

- Développer la communauté de cartographes, en apportant du soutien et des **commentaires positifs et constructifs** aux nouveaux cartographes.

  

  Les exigences spécifiques de chaque projet de cartographie sur le Gestionnaire de tâches HOT varient, ainsi que les protocoles de balisage régionaux. Pour cette raison, il est difficile d'élaborer un guide complet pour les validateurs qui couvre tout ce qui doit être vérifié. Tout comme pour la cartographie, les validateurs ont tous leurs propres préférences et processus de travail pour la révision des données. Gardez à l'esprit les responsabilités ci-dessus. Ce document est destiné à être un guide général; un bon point de départ pour apprendre de nouvelles astuces. Discutez avec les chefs de projet et la communauté des validateurs sur [Slack de HOT](https://slack.hotosm.org/) et continuez à apprendre et à améliorer vos compétences.

  

Les validateurs, en comparaison avec les cartographes, constituent un groupe beaucoup plus restreint, mais ils font partie intégrante du processus de cartographie humanitaire. Merci pour vos contributions !

  

### Conditions préalables

  

Avant de valider le travail d'autrui, vous devez être vous-même un cartographe expérimenté. Il est important d'être capable de :

  

- Comprendre les différences entre une cartographie de haute et de basse qualité.

  

- Savoir comment améliorer de manière efficace les données, sans perdre les informations locales.

  

- Reconnaître les architectures variées et les protocoles de balisage de différents pays. Si vous n'êtes pas à l'aise de cartographier dans un certain pays, vous ne devriez pas vous sentir à l'aise de valider dans ce pays.

  

- Utiliser avec confiance les plateformes de cartographie nécessaires, telles que le Gestionnaire de tâches HOT et le [l'Éditeur JOSM](https://josm.openstreetmap.de/).

  


## Processus de travail général

  

### Sélection d'un projet

  

Dans le [Gestionnaire de tâche](http://tasks.hotosm.org), choisissez un projet à valider dans la page "Explorer les projets". La progression de chaque projet est marquée par une barre visible en bas de chaque fiche de projet. La partie rouge indique la portion validée, la partie gris foncé indique la portion cartographiée et la partie gris clair indique la portion restante à cartographier. Lorsque vous cliquez sur le projet, vous pouvez survoler chaque section de la barre de progression pour connaître les pourcentages exacts.
  


![Tasking Manager Contribution Tab](https://arcmaps.s3.amazonaws.com/share/validationPictures/ValidGettingStarted1.png)

Remarquez sur la page principale du projet, sous "Équipes et autorisations", que seuls certains utilisateurs peuvent cartographier et valider un projet. Ces permissions sont définies par le chef de projet. Si vous n'avez pas le niveau d'expérience spécifié ou si vous ne faites pas partie de l'équipe indiquée, vous ne pouvez pas contribuer au projet.

  
![HOT Tasking Manager teams and permissions](https://raw.githubusercontent.com/MissingMaps/img/main/images/ValidationFR_ValidGettingStarted2.PNG)
  

Continuez à cartographier et à développer vos compétences jusqu'à ce que vous répondiez aux exigences. Si vous vous sentez prêt à rejoindre l'équipe de validateurs de HOT, demandez à la rejoindre en remplissant [ce questionnaire](http://bit.ly/HOTValidators). Vous pouvez vérifier votre niveau d'expérience dans l'onglet "Mes contributions" du Gestionnaire de tâches. Cliquez sur "Mes équipes" pour afficher votre appartenance à l'équipe.

  

Avant de commencer à valider, vous devez comprendre l'objectif du projet en lisant ses onglets "Description" et "Instructions". La description se trouve sur la page principale du projet tandis que les instructions sont disponibles après avoir appuyé sur le bouton "Contribuer". Ces instructions vous indiqueront quels éléments doivent être cartographiés, comment les baliser, quelles images satellites utiliser et toute autre considération du chef de projet. Chaque projet est unique et il est important de suivre attentivement les instructions du chef de projet pour s'assurer que la zone est cartographiée de manière cohérente. Voici un exemple de description et d'instructions pour une tâche :

  
![HOT Tasking Manager project description](https://raw.githubusercontent.com/MissingMaps/img/main/images/ValidationFR_UnderstandingYourProject1.PNG)
  

### Ouverture des tâches

  

L'ouverture des tâches à valider suit un processus similaire à celui utilisé pour la cartographie. Pour valider une tâche à l'aide de JOSM, ouvrez l'éditeur JOSM et assurez-vous qu'il est sélectionné comme éditeur dans le menu déroulant du Gestionnaire de tâches HOT. Vous pouvez sélectionner plusieurs tâches à ouvrir en même temps en maintenant la touche `Ctrl` et en cliquant sur plusieurs tâches. Lorsque les tâches sont ouvertes, vous pouvez commencer à valider !

  

### Révision de la cartographie

  

Comme mentionné précédemment, il existe une grande variété de projets de cartographie et de normes OSM. Il est difficile d'énumérer toutes les considérations qu'un validateur doit prendre en compte lors de la révision des données. Cependant, voici un bon point de départ pour les éléments à prendre en considération :

  

- Précision spatiale : Les éléments sont-ils au bon endroit, y a-t-il des bâtiments qui se chevauchent, les bâtiments sont-ils carrés, etc.

  
  

- Précision du balisage : Les attributs des éléments sont-ils appropriés ?

  

- L'exhaustivité : Tous les éléments sont-ils cartographiés comme décrit dans les instructions du projet dans le Gestionnaire de tâches HOT?

  

**Des conseils et astuces spécifiques sur la validation seront abordés dans la section suivante de ce document.**

  

En fonction de vos préférences et de l'urgence du projet de cartographie, vous souhaiterez peut-être corriger une partie ou la totalité des problèmes que vous avez découverts lors de la révision, le cas échéant. Tenez compte de la facilité avec laquelle ces problèmes peuvent être résolus par un cartographe débutant. Si vous voyez une opportunité où les cartographes débutants peuvent aider au nettoyage des données - lorsque de nombreux bâtiments doivent être orthogonalisés, par exemple - vous pouvez laisser ces corrections aux autres et passer plus de temps à valider d'autres tâches.

  

Autrement, si une erreur cartographique peut être résolue par un utilisateur intermédiaire ou avancé de l'éditeur JOSM, il est préférable de le résoudre pendant la validation. Par exemple, disons qu'un cartographe a attribué, par erreur, la balise `name=house` à plusieurs bâtiments. Cette balise peut être rapidement modifiée par un validateur à l'aide de la fonction de recherche dans l'éditeur JOSM, mais il faudrait beaucoup plus de temps à un cartographe débutant pour la corriger dans l'éditeur d'iD.

  

Certains validateurs trouvent utile de prendre des notes pendant qu'ils révisent la cartographie sur les problèmes qu'ils traitent afin de pouvoir fournir des commentaires constructifs à l'utilisateur.

  

Vous devez également vérifier s'il reste du travail à faire sur la tâche du Gestionnaire de tâches HOT. Si la tâche n'est pas tout à fait complète, vous devez déterminer, selon le contexte, s'il est préférable de terminer la cartographie vous-même ou de renvoyer la tâche à l'étape de cartographie. Si les dernières contributions ont été faites il y a plusieurs mois, ou si l'utilisateur dont vous validez le travail n'a pas utilisé OSM depuis de nombreux mois, il serait mieux que le validateur termine ce qui reste à cartographier, pour ensuite valider. Vous pouvez visualiser l'activité du projet sur la page principale du projet. Lorsque vous ouvrez une tâche, vous pouvez voir l'activité liée à cette tâche dans l'onglet "Contributions" de la barre latérale de droite. Les activités des utilisateurs individuels peuvent être trouvées en cliquant sur le nom d'utilisateur dans cet onglet. Vous serez dirigé vers leur profil du Gestionnaire de tâches. Si vous cliquez à nouveau sur son nom d'utilisateur sur cette page où vous voyez le symbole OSM, vous serez dirigé vers son profil OSM.


![validation workflow](https://raw.githubusercontent.com/MissingMaps/img/main/images/ValidationFR_ValidGettingStarted3.png)
  

### Fermer les tâches et envoyer des commentaires

Une fois que vous avez passé en revue la tâche cartographiée d'un utilisateur, vous pouvez marquer la tâche comme étant "bien cartographiée" (validée et terminée) ou comme étant "pas bien cartographiée" (invalidée et nécessitant plus de travail). Que vous validiez ou invalidiez, vous devez remercier les personnes qui ont travaillé sur la tâche jusqu'à présent en tapant la touche @ de votre clavier, puis leur nom d'utilisateur.

  

Vous pouvez voir la liste des personnes qui ont travaillé sur la tâche en dessous de l'onglet historique :

  
![Tasking Manager History](https://raw.githubusercontent.com/MissingMaps/img/main/images/ValidationFR_ValidGettingStarted4.png)


  
Il se peut que de nombreuses personnes aient contribué, alors assurez-vous de les remercier pour leur travail, même s'il y a quelques erreurs ou problèmes. Cela peut les encourager à revenir et à cartographier à nouveau. Si vous avez remarqué des erreurs, comme l'un des éléments que nous avons nommé plus haut, ou d'autres erreurs, comme des bâtiments qui ne sont pas carrés ou des routes manquantes, notez-le également dans le commentaire, poliment. Cela peut aider le cartographe débutant à apprendre, afin qu'il fasse un meilleur travail la prochaine fois.

  
![Tasking Manager task completion status](https://raw.githubusercontent.com/MissingMaps/img/main/images/ValidationFR_ValidGettingStarted5.PNG)

Voici un exemple de message que vous pouvez utiliser :

  

>Quelques bâtiments et routes à ajouter. Merci à @Stanley1260 @Prinzvizzy @GeoAlex104 pour la cartographie ! N'oubliez pas de rendre les coins de vos bâtiments carrés en utilisant la touche `Q`.

  

Une autre règle de base est d'éviter d'envoyer une tonne de messages aux mêmes utilisateurs: si vous reconnaissez un nom d'utilisateur d'une tâche précédente que vous avez validé ou invalidé, vous n'avez pas besoin de lui envoyer un nouveau message. Dans ce cas, vous pouvez omettre l'utilisation dans les message subséquent.

  

Ensuite, après avoir laissé votre commentaire, si tout est complet, sélectionnez "Oui" sous "Cette tâche est-elle bien cartographiée ?" et cliquez sur "Soumettre la tâche". Ou sélectionnez "Non" s'il reste des choses à faire avant de soumettre la tâche. Vous pouvez maintenant passer à une autre tâche.

  

## Validation des données à l'aide de JOSM

  

La section suivante de ce document présente des conseils et astuces détaillés pour réviser et nettoyer les données dans l'éditeur JOSM. Cette révision doit être faite lorsque vous décidez de valider et de corriger les erreurs, plutôt que de marquer la tâche comme étant "Pas bien cartographiée" et de la laisser aux autres cartographes.

  

### Problèmes et erreurs à chercher

  

Comme mentionné précédemment dans ce document, il est difficile de créer une liste exhaustive des éléments à rechercher lors de la validation d'une tâche. Vous devez vous appuyer sur vos propres expériences de cartographie et votre attention aux détails tout en tenant compte des instructions spécifiques du projet que vous validez.

  

Voici quelques exemples de problèmes courants qui doivent être corrigés :

  

- **Bâtiments manquants :** S'il s'agit d'une tâche qui demande d'ajouter les bâtiments et que vous trouvez des bâtiments manquants, ajoutez-les.

  

- **Routes manquantes :** Similaire à ce qui précède, s'il s'agit d'une tâche qui demande d'ajouter les routes et que vous trouvez des routes manquantes, ajoutez-les.

  

- **Géométries mal dessinées :** Les bâtiments et autres structures artificielles sont généralement rectangulaires ou circulaires - ou constitués d'une combinaison de ces formes, par exemple en forme de L. Si vous voyez un élément qui n'est pas bien dessiné pour représenter ce que vous verriez dans la vraie vie, corrigez la géométrie. Le plus souvent, il s'agit d'orthogonaliser les coins des bâtiments. [Pour en savoir plus sur le dessin des bâtiments dans le JOSM, cliquez ici](https://www.youtube.com/watch?v=DcKewl94jR4).

  

- **Alignement sur l'imagerie :** Idéalement, dans OSM, les données et l'imagerie sont alignées sur une trace GPS afin de géoréférencer correctement les informations. Cela n'est pas toujours possible, en particulier au commencement des projets de cartographie à distance. Par conséquent, les chefs de projet sélectionnent l'imagerie sur laquelle les données doivent être alignées. Si les cartographes utilisent d'autres images, leurs éléments devront être sélectionnées et réalignées.

  

- **Chevauchement des éléments :** Certains éléments, comme les bâtiments, ne se chevauchent jamais dans la réalité. Cela devrait également être vrai sur une carte. Si des éléments se chevauchent ou ont des nœuds qui sont collés de manière irrégulière (par exemple un seul coin), cela doit être corrigé.

  

- **Balisage inexact :** Pour ce qui est des attributs, reportez-vous aux exigences listées dans les instructions du projet. Souvent, les chefs de projet demandent que les bâtiments soient étiquetés avec l'attribut générique `building=yes` par opposition à `building=house`. Si les éléments sont dessinés par l'entremise du Gestionnaire de tâches HOT, corriger les attributs erronés. *Attention de ne pas faire de modifications si les informations proviennent d’un cartographe local*. Vous pouvez toujours vérifier les hashtags dans l'historique des objets. 

  

- **Balisage incorrect :** Parfois, les cartographes ajoutent des attributs incorrects, comme `name=house`. Cette erreur est souvent commise par confusion et doit être corrigée. Gardez à l'esprit que, même s'il s'agit d'une situation rare, il peut y avoir des balises inhabituelles mais tout à fait correctes, ajoutées par les cartographes locaux. Ces balises peuvent sembler étranges à ceux qui ne font pas partie de la communauté.

  

### L'outil de validation

  

De nombreux validateurs commencent le processus de révision en exécutant l'outil de validation dans JOSM. Cet outil vérifie automatiquement les données que vous avez ouvertes pour détecter les erreurs suspectes. Il est particulièrement utile pour trouver les erreurs de **géométrie**, mais serait moins utile pour identifier les erreurs d'attributs. En fonction de l'état des données et des préférences individuelles, les validateurs peuvent également choisir d'exécuter l'outil de validation à la fin de leur processus de travail pour voir s'ils ont manqué des éléments à corriger.

  

L'outil de validation est exécuté automatiquement lorsque vous mettez en ligne des données cartographiques. Toutefois, lorsque l’outil est exécuté à ce stade, il n'évalue que les éléments qui ont été modifiés au cours de cette session de cartographie. Il n'évalue pas tous les éléments qui ont été téléchargés. Par exemple, si vous téléchargez un quartier et dessinez un nouveau bâtiment, l'outil de validation qui s'exécute lorsque vous sélectionnez le bouton de mise en ligne des données ne recherchera les erreurs que dans le nouveau bâtiment et non dans l'ensemble du quartier. En exécutant cet outil en dehors de la fenêtre de mise en ligne, il évaluera tous les éléments.

  

Activez l'outil en cliquant sur le bouton de l'outil de validation sur le côté gauche de l'éditeur JOSM. (Cette opération est inutile si le panneau de validation est déjà ouvert).

![validation tool icon](https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_validateIcon.png) 

  
Si vous avez des éléments sélectionnés, l'outil de validation ne vérifiera que ces éléments. Il peut arriver que vous souhaitiez ne vérifier que certains éléments, mais pour l'instant nous allons vérifier l'ensemble du fichier. Pour tout désélectionner, appuyez sur la touche `Esc`.

  

Cliquez sur le bouton "Validation" dans le panneau. Cela permettra de vérifier un certain nombre d'erreurs potentielles.

  
![validation tool button](https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_validateTool.png) 
  

Vous verrez apparaître une liste d'avertissements (votre liste peut varier) :

  
![validation results panel](https://raw.githubusercontent.com/MissingMaps/img/main/images/ValidationFR_validateResults.PNG)



Une nouvelle couche apparaît également dans votre panneau Calques, montrant où se trouvent les erreurs. Vous trouverez peut-être pratique de masquer cette couche en cliquant sur l'icône en forme d'œil à côté de son nom. Il est plus facile de voir vos données lorsque cette couche est désactivée.

  
![Layers panel - FR version](https://raw.githubusercontent.com/MissingMaps/img/main/images/ValidationFR_Layers.PNG)

Examinons quelques-uns des avertissements. La plupart d'entre eux doivent être corrigés, mais nous pouvons ignorer "Unnamed ways" puisque vous ne connaissez probablement pas le nom des routes.

  

Le reste, en revanche, doit être examiné. Pour zoomer sur un problème, cliquez sur la liste déroulante, puis sélectionnez un des problèmes avec le bouton droit de la souris, puis cliquez sur "Zoomer sur le problème"; l'erreur sera mise en évidence et le zoom sera effectué.
  

![Zoom to problem](https://raw.githubusercontent.com/MissingMaps/img/main/images/ValidationFR_zoomToProblem.PNG)

Il s'agit souvent d'erreurs que nous n'aurions jamais détectées sans l'outil de validation.

  

En général, le nom de l'erreur est assez simple et facile à comprendre. Si ce n'est pas le cas, essayez de poser la question sur le canal #mapper-support sur le Slack de HOTOSM, dont l'accès est gratuit : [http://slack.hotosm.org/](http://slack.hotosm.org/)

  

Certains avertissements, tels que "Crossing waterway/highway", ne sont pas nécessairement des erreurs. Cela montre que l'outil de validation est bon pour trouver les erreurs possibles, mais il faut que quelqu'un vérifie si l'avertissement est important ou non.

  

Une fois l'erreur corrigée, relancez l'outil de validation et elle disparaîtra de la liste. Cependant, il arrive qu'une correction puisse causer d'autres problèmes, c'est pourquoi il est important d'exécuter l'outil plusieurs fois.

  

"Untagged ways" est un avertissement que vous rencontrerez couramment avec l'outil de validation dans les tâches HOT. Il s'agit d'une ligne ou d'un polygone qu’un utilisateur a oublié de baliser. La solution est très simple: ajoutez la bonne balise. (REMARQUE: il s'agit de voies ou de zones non balisées, et non de voies non nommées. Nous pouvons ignorer l'avertissement "Unnamed ways").

  

"Buildings overlapping other buildings or roads" est également un avertissement courant. La correction à faire est de déplacer le nœud au bon endroit pour qu'il n'y ait pas de chevauchement.

  

### Trouver d'autres problèmes à corriger

  

Il y aura également d'autres erreurs que l'outil de validation n'aura pas détectées, celles-ci devront être corrigées dans une deuxième étape.

  

Commençons cette deuxième étape en parcourant la tâche à la recherche de problèmes non détectés par l'outil de validation. Ces erreurs pourraient notamment être: des éléments manquants ou mal placés, des routes attachées à des bâtiments, et/ou des éléments qui ne sont pas balisés correctement. Il existe de nombreuses façons de procéder à cette étape. Chaque validateur aura ses propres préférences et utilisera souvent une combinaison des techniques décrites ci-dessous, comme l'utilisation de la fonction de recherche et du plugin Todo List. Trouvez ce qui fonctionne le mieux pour vous!

  

La façon la plus simple de procéder est de commencer dans un coin, de zoomer pour voir les détails de l'imagerie et de parcourir la tâche à la recherche des éléments qui doivent être cartographiés conformément aux instructions.

  

Le plugin markseen est un outil utile pour parcourir la tâche. Ce plugin ouvre le "Markseen Viewer" pour montrer les zones de la carte que vous avez déjà examinées.

  
![Markseen viewer](https://raw.githubusercontent.com/risicle/josm-markseen/master/screen_20170828.png)
  

## Routes

  

Si vous validez une tâche qui demande de cartographier les routes, un certain nombre de problèmes peuvent survenir. Il peut y avoir de nombreuses routes manquantes ou incorrectement balisées. De plus, les routes pourraient être connectées à des éléments auxquels elles ne devraient pas être connectées, comme des bâtiments.

  

Si des routes manquent dans la tâche, ajoutez-les selon les instructions mentionnées dans la tâche. Portez attention aux routes résidentielles ou aux petits chemins, car ceux-ci sont souvent oubliés, même lorsque la tâche spécifie de les ajouter. Parfois, les gens marquent des routes comme étant plus importantes qu'elles ne devraient l'être - marquant une route qui devrait être résidentielle, non classifiée ou même une piste balisée comme une autoroute ou une route principale - ces erreurs doivent être corrigées.
  

Un autre problème courant avec les routes est de leur donner un nom incorrect. Lorsque nous cartographions à distance, nous ne savons généralement pas le nom des routes, car nous ne sommes pas familiers avec les lieux cartographiés. Autrement, il est possible que les utilisateurs nomment les routes avec une description, comme "route", plutôt qu'un nom. Le champ Nom doit représenter les noms de la route, comme "Highway 1" ou "North Avenue". Pour trouver toutes les routes nommées dans les données à valider, cliquez sur `Ctrl+F` et tapez `highway=* name=*`.

  
![search string: highway=* name =*](https://raw.githubusercontent.com/MissingMaps/img/main/images/ValidationFR_searchHighway.PNG)


  
Vous trouverez ainsi toutes les routes auxquelles un nom a été attribué. Cliquez sur chacune d'elles pour voir quel est le nom et si celui-ci semble correct. Si le nom attribué est descriptif comme "route" ou "chemin de terre", c'est peut-être incorrect, le cartographe a peut-être voulu mettre une balise, mais a changé le nom par erreur. Supprimez-le s'il semble incorrect. Mais faites attention, nous ne voulons pas supprimer des données exactes.

  

La classification des routes est également importante. Parfois, les cartographes à distance marquent les routes comme étant beaucoup plus importantes qu'elles ne devraient l'être. Consultez les instructions et la description du projet pour savoir comment les routes doivent être balisées.

  

S'il y a beaucoup d'autoroutes, de routes nationales, de routes primaires, secondaires et tertiaires, en particulier dans une zone rurale, les étiquettes peuvent être incorrectes. Celles-ci apparaîtront dans des couleurs vives comme le bleu, le jaune, l'orange et le rouge. Si vous les voyez sur votre tâche, vérifiez-les. Elles devraient peut-être être attribuées une valeur d’importance moindre, comme tertiaires, résidentielles ou non classées.

  

Les routes ne doivent pas être reliées à des bâtiments, sauf si la route traverse le bâtiment, ce qui est très rare et ne se voit généralement que dans les grandes villes.

  

Voici un exemple. Le bâtiment de droite est rattaché à la route - voir le carré légèrement plus grand où ils sont attachés. Ce carré plus grand indique un nœud joint.

  
![building node joined to highway node](https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_unglue.png)


  
Pour les déconnecter, cliquez sur le nœud joint, puis sur `G` sur votre clavier, qui est le raccourci pour "décoller". Ensuite, cliquez sur un nœud et déplacez-le là où il doit être. Vous devrez peut-être appuyer sur `Q` sur votre clavier pour rendre le bâtiment orthogonal.

  

### Utilisation de la fonction de recherche de JOSM

  

La recherche dans JOSM est un moyen puissant d'examiner les données. Elle vous permet de fournir des termes de recherche, également appelés requêtes, afin de sélectionner uniquement les éléments que vous souhaitez.

  

Pour accéder aux options de recherche, allez dans Édition -> Recherche ou appuyez sur `Ctrl+F` sur votre clavier ou cliquez sur l'icône de la loupe en haut de la fenêtre JOSM.

  
  
![Loop icon](https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_search.png)
  
Il existe un grand nombre de requêtes que vous pouvez rechercher ici, et vous pouvez voir des détails et des exemples dans la boîte de recherche elle-même et en cliquant sur le bouton "Aide". Visitez la [page Wiki de la fonction de recherche JOSM](https://wiki.openstreetmap.org/wiki/JOSM/Search_function) pour plus d'exemples.

  

Remarquez les options dans le coin supérieur gauche pour limiter les résultats de votre recherche en fonction des éléments que vous avez sélectionnées. Vous pouvez effectuer une recherche dans tous les éléments ("select"); "add to selection"; "remove from selection"; ou "find in selection". Cela s'avère pratique lorsque vous exécutez des requêtes consécutives ou lorsque vous examinez des éléments dans une zone particulière.

  

**Rechercher des éléments édités par des utilisateurs spécifiques**

  

Si vous identifiez des cartographes spécifiques qui font la même erreur à plusieurs reprises, vous pouvez rapidement identifier tous les éléments qu'ils ont éditées en utilisant la requête de recherche suivante:

  

>utilisateur: "*nom*"

  

>e.g. utilisateur: "OSMF Redaction Account" (compte de correction OSMF)

  

Cela sélectionnera tous les objets qui ont été modifiés en dernier par cet utilisateur. Ces éléments peuvent ensuite être facilement ajoutés au plugin Todo List (plus d'informations ci-dessous).

  

**Recherche de bâtiments à orthogonaliser**

  

  

Les polygones étiquetés comme bâtiments avec 4 nœuds et plus auront souvent besoin d’être orthogonalisés. Ces éléments peuvent facilement être trouvés en utilisant la fonction de recherche, puis orthogonalisés tous en même temps et mis au carré en masse. Cependant, gardez à l'esprit que les bâtiments circulaires ont plus de 4 nœuds et ne doivent pas être orthonogalisés. Par conséquent, nous voulons lancer une requête de recherche dans une petite section de la carte que nous pouvons vérifier visuellement - comme celle qui est visible. Pour trouver ces éléments, exécutez la requête de recherche suivante:

  

>building inview nodes:4-

  

  

  

Vous trouverez tout ce qui est marqué comme bâtiment dans votre vue actuelle avec 4 nœuds ou plus.

  
  
  
![Search string: building inview nodes:4-](https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_searchQuery.png)


  
  Ils deviendront tous rouges sur votre écran. Cliquez sur la touche `Q` de votre clavier et cela orthogonalisera les formes.

  

  
Cependant, faites attention! S'il y a des bâtiments qui ne devraient pas être carrés, cela les rendra carrés quand même. Pour vous en assurer, appuyez sur `undo` et `redo` pour voir si des bâtiments ronds ou d'autres formes ont été modifiés par erreur. Si c'est le cas, corrigez-les pour qu'ils soient comme ils devraient être.


Si vous souhaitez trier plus facilement les bâtiments un par un, ajoutez les résultats de la recherche ci-dessus au plugin Todo List. Cela vous permettra de trier rapidement les polygones pour vérifier visuellement s'ils doivent être orthogonalisés. Plus d'informations sur ce plugin ci-dessous.  



![Undo and redo icons](https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_undoRedo.png)
  
  
  

#### Utilisation de scripts pour identifier les bâtiments qui devraient être mis au carré

  

  

  

Le script suivant est un autre outil utile pour trouver les bâtiments non carrés.

Naviguez vers [ce répertoire GitHub](https://github.com/MikeTho16/JOSM-Scripts/). Cherchez `SelectNonOrthogonalBuilding.js` dans la liste et téléchargez-le. Enregistrez-le dans un répertoire facile à trouver sur votre ordinateur local. Ouvrez l'onglet script dans JOSM et cliquez sur "run" et sélectionnez le fichier téléchargé. Après l'avoir sélectionné, exécutez le script. Maintenant, tous les bâtiments qui répondent aux paramètres du script seront surlignés en rouge. Vous pouvez d'abord les vérifier dans votre tâche, puis appuyer sur `Q` pour les mettre tous en carré. Exécutez à nouveau le script pour voir s'il reste des bâtiments non orthogonaux. Vérifiez d'abord ceux-ci, car il peut y avoir des cas où les bâtiments sont joints par des nœuds. Détachez ces nœuds en appuyant sur `G` et cliquez à nouveau sur le bouton `Q`.

  

  

### Historique des objets

  

  

Lorsque vous modifiez des éléments dans une zone déjà cartographiée, il est important de préserver les informations locales, en particulier lorsque vous cartographiez dans une région avec laquelle vous n’êtes pas familier. *Vérifiez toujours que les éléments ne contiennent pas d'informations locales ou de balises avant de les supprimer.* Une bonne façon de vérifier est d'ouvrir l'historique des objets. Avec un élément sélectionné, appuyez sur `Ctrl+H`. La fenêtre vous indiquera quand l'objet a été créé, quels utilisateurs l'ont créé ou modifié et les commentaires associés. Comparez les dates, les noms d'utilisateurs et les commentaires de modifications (hashtags) à ceux que vous vous attendez à voir dans l'historique des projets et des tâches du Gestionnaire de tâches. Si les modifications ont eu lieu précédemment au projet du Gestionnaire de tâches, elles ont pu être effectuées par un cartographe local. N'oubliez pas: vous pouvez toujours améliorer les données cartographiques sans supprimer des objets.

  

  

  Exemple d'éditions à partir du projet de cartographie sur le Gestionnaire de tâches:
  
  
  


![History of a feature](https://arcmaps.s3.amazonaws.com/share/validationPictures/ValidHistory1.png)
  

  Exemple de modifications apportées par un cartographe local:

  


![History of a feature after validation](https://arcmaps.s3.amazonaws.com/share/validationPictures/ValidHistory2.png)
  

  
## Plugin “Todo List”

  

  

Un autre plugin utile disponible dans JOSM est le plugin Todo List. Ce plugin vous permet d'ajouter des éléments à une liste "To-Do", d'étudier cet élément, de le marquer comme validé et de zoomer automatiquement sur l’élément suivant de la liste.

  

  

  

Pour utiliser le plugin, vous devez le télécharger depuis le menu des plugins comme vous l'avez fait pour l'outil `buildings_tool`. Après l'avoir ajouté, activez-le en cliquant sur l'icône “Todo List” dans le menu `Todo List`. Vous devriez alors voir le panneau `Liste des tâches` s'ouvrir sur le côté droit de l'écran.
  
  


![todo list icon](https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_todoIcon.png)
  


En utilisant la fonction de recherche JOSM ci-dessus, vous pouvez sélectionner tous les éléments d'un certain type que vous souhaitez examiner. Une fois qu'ils sont sélectionnés, appuyez sur le bouton `Ajouter` dans le panneau `Liste des tâches`. Cela ajoutera tous les éléments à votre liste. Sélectionnez le premier élément de la liste, assurez-vous qu'il est correctement cartographié, puis appuyez sur le bouton "Marquer" ou sur la touche "]", ce qui vous permettra de passer à l’élément suivant.

  

  

Le plugin Todo List est extrêmement utile pour les cartographes débutants qui ne se sentent pas encore à l'aise pour scanner l'image à la recherche d’élément, et permet de s'assurer que chaque élément sur la carte est examiné. Pour plus d'informations, voir la [Page Wiki du plugin Todo List] (https://wiki.openstreetmap.org/wiki/JOSM/Plugins/TODO_list).

  
  


![todo list panel](https://raw.githubusercontent.com/MissingMaps/img/main/images/ValidationFR_todoPanel.PNG)
  
  

#### Utilisation des modèles de rendu cartographique

  


Les modèles de rendu sont des moyens de modifier la visualisation des données. Vous pouvez les utiliser pour mettre en évidence certains éléments qui pourraient être incorrects, et qui n’ont pas été identifiés par l’outil de validation.
  

Pour les tâches de cartographie à distance et de cartographie humanitaire, il est fréquent que le cartographe ne connaisse pas les noms des bâtiments et des routes. Les modèles de rendu JOSM peuvent mettre en évidence les endroits où ces éléments ont été ajoutés par erreur: les bâtiments avec des noms, les bâtiments non étiquetés 'building=yes', les routes avec des noms, et les routes qui ont une valeur d'autoroute dans la clé de nom une valeur d'autoroute (par exemple 'name=residential'). Parfois, les gens ajoutent au nom ce qui devrait être une description, comme "chemin de terre".

  

Comme pour les avertissements de validation, les modèles de rendu n'identifient pas les erreurs, mais il met en évidence ce qui devrait être vérifié.

  

  

  

Il est également important de s'assurer que vous ne supprimez pas les données existantes qui sont exactes. Il est possible qu’un utilisateur ait visité cet endroit et ait ajouté ces noms correctement. Mais il y a de fortes chances qu’un attribut comme "name=dirt road" ou "name=building" ne soit pas correct.

  

  

  

Pour ajouter les modèles de rendu, cliquez sur le menu Windows et cliquez sur Coloriage... ce qui ouvrira un menu sur JOSM:

  
  
  


![Map paint styles](https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_paintStyle.png)

  

Cliquez ensuite sur le bouton des paramètres de la fenêtre Coloriage, en bas à droite.

  

  

Cliquez sur le symbole d’addition, en haut à droite, pour en ajouter un nouveau.

  

  
![Map paint styles - add style](https://raw.githubusercontent.com/MissingMaps/img/main/images/ValidationFR_addStyle.PNG)


  
  

Tapez un nom, tel que Validation Missing Maps, et copier l’URL suivant https://github.com/MissingMaps/josm_styles/archive/master.zip dans le champ URL, puis le modèle de rendu apparaîtra dans votre fenêtre Coloriage.

  
  
![Map paint styles - add style, style name](https://raw.githubusercontent.com/MissingMaps/img/main/images/ValidationFR_styleName.PNG)
  

Ce modèle de rendu inclus quatre couleurs et des triangles, correspondant aux erreurs mentionnées précédemment:

  

  

  

- les bâtiments avec des noms sont **jaunes**

  

  

- les bâtiments qui ne sont pas marqués `building=yes` sont **orangés**.

  

  

- les routes qui sont nommées sont **vertes**.

  

  

- les routes qui sont nommées pour une description (comme `name=residential`) sont **rouges**.

  

  

- les bâtiments reliés à des routes ou à d'autres éléments sont des **triangles rouges**.

  

  

  

- les bâtiments qui sont connectés à d'autres bâtiments sont des **triangles oranges**.

  

  Par exemple, vous pouvez voir quelque chose comme ceci:
  
  
  


![Validation Missing Maps - example 1](https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_styleExample1.png)
  

  

Ou ceci:

  


![Validation Missing Maps - example2](https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_styleExample2.png)
  

Ce modèle de rendu vous permet de trouver rapidement ces problèmes et de voir s'ils doivent être corrigés ou non. Certains d'entre eux peuvent être corrects, mais vous devrez vérifier s'ils sont corrects ou non.

  

S’il y a un élément pour lequel vous êtes incertain, vous pouvez vérifier l'historique en sélectionnant l’élément et en cliquant `Ctrl+H`. Cela vous montrera qui a édité l’objet précédemment et peut donner une explication pour laquelle ils ont ajouté un certain nom ou attribut.

  

En cas de doute, utilisez les données et les balises existantes.

  

Inline Validation est un autre modèle de rendu cartographique utile. Lorsque vous installez et activez Inline Validation, il affiche un certain nombre d'erreurs, si elles sont présentes. Ce modèle de rendu peut être téléchargé à partir de https://github.com/osmlab/appledata/archive/josm_paint_inline_validation.zip.

  

Vous trouverez plus d'informations sur GitHub à l'adresse https://github.com/osmlab/appledata/wiki/Inline-Validation-Paint-Style-Information.

  

Ce style vérifie les éléments suivants:

  

  

* Vérification de la jonction avec un carrefour giratoire

  

  

* Vérification de l'étiquette manquante d'un carrefour giratoire

  
  

  

* Direction suspecte dans un carrefour giratoire

  

  

* Sens unique manquant sur l'autoroute

  

  

* Vérification de couche manquante

  

  

* Vérification de la connexion bâtiment-route

  

  

* Style BuildingSnapped2Building

  

  

* Vérification d'un bâtiment à l'intérieur d'un autre

  

  

* Vérification d'un grand bâtiment

  

  

* Cours d'eau relié à un pont

  

  

* Vérification des routes continues

  

  
## Pour en savoir d’avantage:


  

- Le wiki OpenStreetMap, pour tout ce qui concerne OSM: http://wiki.openstreetmap.org

  

  

  

- La page du wiki OpenStreetMap sur la validation: https://wiki.openstreetmap.org/wiki/OSM_Tasking_Manager/Validating_data

  

  


- La page de validation de LearnOSM: http://learnosm.org/en/coordination/review/

  
- Vidéo de formation de HOT sur la validation: https://www.youtube.com/watch?v=YQ18XfRM6d4
  

  

- Page de Missing Maps “Apprenez à valider”: [https://www.missingmaps.org/validate/](https://www.missingmaps.org/validate/)