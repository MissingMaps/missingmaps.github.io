![01_MissingMaps logo](https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_mmLogo.png)
 
# Mapeo avanzado con JOSM
 
![02_People mapping togetherJOSM interface showing where preferences are located](https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_mapathon.png)
 
## Configuración previa al mapeo
 
Primero debes descargar JOSM de [https://josm.openstreetmap.de/](https://josm.openstreetmap.de/wiki/Es%3AWikiStart) -- hay algunas opciones de descarga, pero JOSM.jnlp generalmente funciona bien.
 
Inicie JOSM. Es posible que tenga que hacer clic con el botón derecho y elegir "Abrir" la primera vez que lo ejecute. También es posible que tengas que ir a Preferencias->Seguridad para poder abrir el archivo. **Puede que te pida que actualices tu software Java, hazlo sin dudarlo.
 
Cuando JOSM se abra, verás una pantalla gris con algunas noticias y actualizaciones y una serie de botones. Queremos añadir algunos plugins incluyendo el plugin “building_tools” para ayudar a mapear más eficientemente.
 
Para añadir plugins, haz clic en el botón que parece dos deslizadores: esta la ventana de preferencias. También se puede acceder a ella en el menú "Edición" o pulsando `F12`).

<img src="https://raw.githubusercontent.com/MissingMaps/img/main/images/AdvJOSM_ES_03_Preferences.png" width="600"/>
 
En la ventana de Preferencias, el cuarto botón hacia abajo parece una pieza de rompecabezas, ese es el menú Plug-In. Haga clic en él. (En algunos ordenadores estos botones son muy pequeños).
 
![04_Plugin button](https://arcmaps.s3.amazonaws.com/share/validationPictures/PreMappingplug.png)
 
Ahora busca `buildings`. Verás una entidad llamada `buildings_tools`. Marca su casilla y haz clic en `Aceptar` en la parte inferior de la pantalla. Se descargará y tendrás que reiniciar JOSM.
 
![05_JOSM plugins - buildings_tools](https://raw.githubusercontent.com/MissingMaps/img/main/images/AdvJOSM_ES_05_BuildingTools.PNG)
 
Le sugerimos que descargue también los siguientes plugins. Te ayudarán con tu mapeo/edición. Hay muchos más plugins que puedes explorar [aquí](https://josm.openstreetmap.de/wiki/Plugins).
 
 - **auto_tools** Herramientas automáticas para ayudar en problemas comunes
 - **herramientas_de_construcción** Herramientas para el dibujo sencillo de edificios rectangulares o redondos/circulares
 - **FastDraw** Formas rápidas de dibujar con el ratón
 - **imagery_offset_db** Base de datos de imágenes disponibles: compartir y adquirir tipos de imágenes con un solo botón
 - **mapwithai** Permite el uso de los datos de MapWithAI
 - **marcado** Muestra las áreas del mapa que han sido vistas (útil cuando se valida o revisa un área sin perder un punto)
 - **opendata** Facilita el análisis de los datos geográficos de varios portales de datos abiertos
 - **scripting** Para automatizar las pequeñas tareas para las que no se dispone de un plugin dedicado
 - **terracer** Ayuda a crear edificios adosados (casas adosadas, casas de pueblo)
 - **utilsplugin2** Varias utilidades que te facilitan la vida
 
Hay algunos otros ajustes que tenemos que cambiar también.
 
Vuelva a hacer clic en el botón "Preferencias". El segundo botón parece dos ordenadores. Esa es la configuración de la conexión.
 
![06_Connexion icon](https://arcmaps.s3.amazonaws.com/share/validationPictures/PreMappingComputers.png)
 
Asegúrate de haber iniciado sesión con tu nombre de usuario y contraseña de OpenStreetMap.
 
Luego, hacia la parte inferior de la pantalla, hay un botón que parece un mando a distancia. Haz clic en él y asegúrate de que la opción "Habilitar control remoto" está marcada. Esto permitirá que el Gestor de Tareas del Equipo Humanitario de OpenStreetMap (HOTOMS) utilice JOSM para descargar tu tarea.
 
![07_Remote control icon](https://arcmaps.s3.amazonaws.com/share/validationPictures/PreMappingRemote.png)
 
![08_Remote control details](https://raw.githubusercontent.com/MissingMaps/img/main/images/AdvJOSM_ES_08_RemoteControl.PNG)
 
## Cómo empezar
 
**Comprender su proyecto**
 
Desde el [HOT Tasking Manager](http://tasks.hotosm.org), elija un proyecto para mapear. Antes de empezar a mapear, debe entender el objetivo del proyecto leyendo sus pestañas "Descripción" e "Instrucciones". La descripción estará en la página principal del proyecto, mientras que las instrucciones se pueden leer después de pulsar el botón `Contribuir`. Esto le dirá qué características debe mapear, cómo etiquetarlas, qué imágenes utilizar y cualquier otra consideración del Director del Proyecto. Cada proyecto es único y es importante seguir cuidadosamente las instrucciones del director del proyecto para asegurarse de que la zona se cartografía de forma coherente. Este es un ejemplo de la descripción y las instrucciones para una tarea:
 
![09_Example of HOT task description](https://raw.githubusercontent.com/MissingMaps/img/main/images/AdvJOSM_ES_09_HOT_taskDescription.PNG)
 
**Tarea de apertura en JOSM**
 
Si aún no está abierto, abra JOSM. En la página de resumen del proyecto, asegúrese de que tiene seleccionado "JOSM" en el menú desplegable del editor antes de seleccionar una tarea para asignar. Puede cambiar el editor por defecto en la página de configuración del Gestor de Tareas.
 
![10_Change editor](https://raw.githubusercontent.com/MissingMaps/img/main/images/AdvJOSM_ES_10_ChooseEditor.PNG)
 
Si las imágenes se cargan automáticamente, está listo para mapear. Si no, JOSM mostrará un fondo negro. Compruebe las instrucciones del proyecto y active la capa de imágenes correcta en el menú desplegable "Imágenes", que se encuentra en la parte superior del editor de JOSM.
 
Observará que el límite de la tarea se indica ahora con un cuadro gris rodeado de un área sombreada. Esto ha reemplazado el borde rosa que puede ser familiar para el “Editor iD”. Evite mapear en las áreas sombreadas a menos que una característica se extienda en múltiples tareas. Siempre puede bloquear y mapear la tarea adyacente después de haber completado su cuadrado.
 
![11_Limit of task in JOSM](https://arcmaps.s3.amazonaws.com/share/validationPictures/OpenMappingTask2.png)
 
## JOSM Fondamentos
 
**Navegando por JOSM**
 
Aparte de la barra de menú superior, el editor JOSM tiene cuatro áreas principales: dos filas de iconos a lo largo de la izquierda y la parte superior de la ventana con las herramientas y los accesos directos de uso frecuente; un área central para la elaboración de mapas; y una barra lateral en el lado derecho de la ventana. Si no puede ver el mapa o los paneles laterales, primero debe descargar los datos del mapa utilizando "Descargar datos..." en el menú "Archivo" o pulsando `Ctrl+Shift+Abajo`. A continuación, puede cargar las imágenes abriendo el menú "Imágenes" en la parte superior de la ventana y seleccionando las imágenes que desea utilizar.
 
![12_Sections of JOSM Editor](https://raw.githubusercontent.com/MissingMaps/img/main/images/AdvJOSM_ES_12_EditorSections.png)
 
Los iconos de la parte superior del editor son una selección configurable de herramientas de acceso rápido que también están disponibles en los menús desplegables situados encima. Los iconos de la parte izquierda de la ventana están divididos en dos grupos. Los iconos superiores están relacionados con la selección de los diferentes modos de edición y los inferiores conmutan la visibilidad de las ventanas de la barra lateral de la derecha. Como mínimo, asegúrese de que las ventanas "Capas" y "Etiquetas/Membresías" estén visibles en el lado derecho.
 
La zona central del editor es donde se puede ver y editar la geometría de la información espacial. Si ya tienes datos cargados en JOSM, puedes navegar por ellos haciendo zoom con la rueda del ratón y desplazarte por el mapa haciendo clic con el botón derecho del ratón y arrastrando.
 
La ventana "Capas" muestra los datos OSM, los límites y las capas de imágenes. Puedes mover una capa en la pila arrastrándola o puedes cambiar la visibilidad seleccionando el pequeño icono del ojo que precede al nombre de la capa. También notarás una marca verde al lado de la capa de datos OSM, esto significa que la capa está activa y es editable - esto puede ser alternado, lo cual es útil cuando se trabaja con múltiples capas de datos.
 
La ventana "Etiquetas/Membresías" le mostrará las etiquetas de un objeto una vez seleccionado. Aquí es donde puede cambiar la etiqueta de un objeto.
 
Para más información sobre las funciones y operaciones básicas de JOSM, consulte la guía [JOSM - Edición detallada](https://learnosm.org/es/josm/) creada y mantenida por learnOSM.
 
**Orientación cartográfica general**
 
Para **trazar una nueva característica** en JOSM, active la herramienta "dibujar nodos" seleccionando `A`. A diferencia de lo que ocurre con el Editor iD, no es necesario distinguir entre las herramientas de punto, línea y polígono: esta herramienta los dibujará todos. Para dibujar un punto, haga doble clic. Para añadir una línea, haga clic una vez hasta llegar al final de la característica y haga doble clic en el último punto. Para dibujar un polígono, trace la característica haciendo un solo clic y haga doble clic en el primer punto para cerrar la forma.
 
Para **añadir etiquetas** a su característica recién dibujada, asegúrese de que está seleccionada - entre en el modo "Seleccionar" pulsando `S` y haga clic en la característica. Cuando esté seleccionada, pulse el botón "Añadir" en el menú "Etiquetas/Membresías" de la derecha de la pantalla. A diferencia del Editor de iD, tendrá que seleccionar dos partes para cada etiqueta: la "clave" y el "valor". Verá estas casillas en la ventana "Añadir etiqueta". Todas las etiquetas tienen una clave y un valor, pero puede que no sea tan obvio en el Editor iD. Por ejemplo, la etiqueta genérica "edificio" se escribe como `construcción=sí` donde "edificio" es la clave y "sí" es el valor. Para determinar cómo etiquetar correctamente una característica, consulte la [Wiki de OpenStreetMap](https://wiki.openstreetmap.org/wiki/ES:P%C3%A1gina_principal) y busque su característica. El menú "Etiquetas/Membresías" también puede utilizarse para editar las etiquetas existentes en las características.
 
Es bastante común encontrarse con características previamente mapeadas que necesitan un poco de ajuste. JOSM dispone de varias herramientas potentes que hacen que esto sea muy eficaz. La herramienta de extrusión, activada con `X` puede utilizarse para acortar o alargar los bordes de los edificios existentes, simplemente arrastrando un borde con la herramienta activa. Si ves algún edificio sin cuadrar, puedes arreglarlo seleccionándolo y pulsando `Q`. Los edificios seleccionados también pueden girarse manteniendo pulsadas las teclas `Shifts+Ctrl`, y cambiar su tamaño manteniendo pulsadas las teclas `Ctrl+Alt`. Los edificios pueden ser desconectados de otras características pulsando `G` con el edificio seleccionado (esto "despega" los nodos conectados, lo que es muy útil en otros lugares también).
 
Puede ser útil **ajustar la visibilidad** de su(s) capa(s) de imágenes en JOSM. Seleccione una capa de imágenes en la ventana de capas y haga clic en el icono de la base de la ventana que se indica a continuación:
 
<!--- 13_Visibility -->
<img src="https://raw.githubusercontent.com/MissingMaps/img/main/images/AdvJOSM_ES_13_Visibility.png" width="350"/>
 
La visibilidad de la capa se puede ajustar con una serie de controles deslizantes. Aumentar el Gamma tiende a hacer que las características destaquen del paisaje.
 
Cuando se mapea un proyecto de HOT Tasking Manager, hay que ceñirse a la capa de imágenes que se indica en las instrucciones del proyecto. Sin embargo, es una buena práctica comparar esto con otras fuentes de imágenes cuando se está mapeando. Esto es especialmente fácil en JOSM. Se pueden añadir capas adicionales seleccionándolas en el menú "Imágenes" y su visibilidad puede activarse o desactivarse mediante los iconos de los ojos en la ventana de capas.
 
**Atajos de la JSM**
 
Básico:
- `S` = herramienta de selección
- `Esc` = deseleccionar todo
- `Shift+U` = deseleccionar nodos
- `Delete` = eliminar los objetos seleccionados
- `A` = herramienta para añadir nodos
- `M` = nodos de fusión
- `G` = Desencolado de nodos
- `C` = combinar dos tramos de vía en uno solo
- `P` = divide una sección de una vía
- `Shift+Ctrl` = rotar el objeto
- `Ctrl+Alt` = cambiar el tamaño del objeto
 
Práctico para dibujar edificios:
- `B` = activar el plugin building_tools
- `Alt+R` = establecer la herramienta de construcción como rectángulo
- `Alt+Z` = poner la herramienta de construcción en círculo
- `Q` = polígono cuadrado seleccionado
- `X` = herramienta de extrusión
- `Shift+J` = fusión de polígonos superpuestos
 
Técnicas intermedias:
- `Ctrl+B` = crear Multipolígono
- `Shift+I` = añadir nodos en las intersecciones de los caminos
- `Ctrl+Shift+G` = reemplazar la geometría
- `Shift+R` = pegar etiquetas de la selección anterior
 
FastDraw:
- `Shift+F` = activar el plugin FastDraw
- `Space` = dibuja un solo nodo, mantenga y mueva el ratón para seguir dibujando nodos (mientras usa FastDraw)
- `Backspace` = borrar el último nodo (mientras se usa FastDraw)
- `Q` = abrir la configuración de FastDraw (mientras se utiliza FastDraw)
 
Algunos de estos accesos directos sólo funcionarán cuando los plugins necesarios estén instalados (por ejemplo, utilsplugin2) Se pueden encontrar más accesos directos aquí: https://josm.openstreetmap.de/wiki/Es%3AShortcuts
 
**Guardar sus ediciones**
 
Al igual que la edición en el Editor de iD, debes asegurarte de guardar con frecuencia tus ediciones. Seleccione el icono una flecha verde hacia arriba (o `Ctrl + Shift + Up`) para mostrar la ventana emergente de carga. Aquí puedes modificar los comentarios del conjunto de cambios y ejecutar la carga seleccionando `Cargar cambios` o pulsando `Enter` en tu teclado.
 
## Mapeo de Edificios
 
**Plugin de la herramienta de construcción**
 
Para mapear un **edificio rectangular**, pulse `B` en su teclado. Esto activa el plugin `buildings_tool` que descargaste e instalaste en las preferencias anteriormente. Haz clic con el botón izquierdo en la esquina de un edificio y mantén el botón del ratón pulsado. Mueve el puntero a lo largo del borde más largo del edificio y suéltalo en otra esquina. A continuación, puedes establecer la profundidad del edificio, ajustar la profundidad hasta que encaje y hacer clic con el botón izquierdo para terminar la forma. La herramienta de construcción cuadra y etiqueta automáticamente tus edificios - ¿te das cuenta de que es mucho más rápido que usar el Editor iD?
 
Este plugin dibujará rectángulos paralelos a cualquier otra característica del mapa que haya seleccionado. Esto es muy útil si usted está dibujando muchos edificios que se construyen en la alineación con una carretera. Todo lo que tiene que hacer es seleccionar la característica de la carretera, pulse `B` y dibujar.
 
Puede que hayas encontrado un **edificio circular**. Primero asegúrate de que estás en modo construcción, si no es así pulsa `B`. Ahora cambia tu herramienta de construcción al modo circular seleccionando `Alt+Z` en tu teclado. Traza el diámetro del edificio circular y automáticamente se creará un edificio circular perfectamente etiquetado. Vuelve a cambiar al modo de construcción rectangular seleccionando `Alt+R` en tu teclado.
 
Puede cambiar la etiqueta que se aplica a las formas con esta herramienta abriendo su configuración avanzada. En la barra de herramientas superior, vaya a `Datos`, luego a `Establecer tamaño de los edificios` y seleccione `Avanzado...` En esta ventana, puede cambiar la etiqueta o añadir etiquetas adicionales para que se apliquen. Tenga siempre en cuenta las instrucciones de etiquetado indicadas por el gestor de proyectos si la asignación se realiza a través del gestor de tareas HOT.
 
**Formas complejas**
 
Es posible que un edificio tenga una **forma inusual**, como una L, una T o una U, en lugar de un simple rectángulo. Hay dos maneras de dibujar estas características: utilizando la herramienta de extrusión y combinando formas superpuestas. La mejor forma de trazar dependerá de la complejidad del edificio y de tus preferencias.
 
Para mapear con la herramienta Extruir", primero dibuje un rectángulo usando el plugin `buildings_tool` (pulse "b") a lo largo del borde más largo del edificio. Luego presione `X` en su teclado, esto activa una poderosa herramienta en el editor llamada la herramienta de Extrusión. Haz doble clic para añadir un punto en el borde de tu rectángulo donde se extiende el edificio. Ahora arrastra el borde que quieres extender hasta que se ajuste a la huella.
 
![14_Drawing L shape building](https://arcmaps.s3.amazonaws.com/share/validationPictures/ComplexShapes1.png)
 
Otra forma de mapear edificios complejos es combinando múltiples formas simples. Esto es particularmente útil si un edificio tiene una característica redonda o es demasiado complejo para ser adecuadamente ortogonalizado con el atajo `Q`. Dibuje tantas formas como sea necesario para completar el edificio. Asegúrese de que las formas individuales están ortogonalizadas o son circulares y que todas se solapan con al menos otra forma. El uso del plugin `buildings_tool` es muy útil para este paso, especialmente cuando se tiene la primera forma seleccionada para que las formas siguientes se dibujen alineadas. Cuando todas las formas estén dibujadas, selecciónalas todas y utiliza la herramienta "unir áreas superpuestas" con el atajo `Shift+J`. Es posible que tenga que hacer un poco de limpieza después de la unión para eliminar los nodos no deseados. Para hacer esto, puede remover los nodos innecesarios manualmente o usar la herramienta “Simplificar” usando el acceso directo `Shift+Y`.
![15_Drawing complex building](https://arcmaps.s3.amazonaws.com/share/validationPictures/ComplexShapes2.png)
 
Otro consejo para dibujar edificios complejos es trazar primero a lo largo del tejado del edificio, donde la forma es más visible, como se ve en el ejemplo anterior. Cuando estés satisfecho con la forma, muévela arrastrándola y alinéala correctamente con la huella del edificio.
 
Para **edificios con patios**, tendrá que crear un multipolígono. Hay dos formas sencillas de hacerlo. Puede dibujar segmentos de edificios superpuestos dejando un espacio en el medio para el patio y combinándolos con `Shift+J` para fusionar los edificios superpuestos en uno solo. El color del edificio cambiará a púrpura, lo que indica que ha creado con éxito un multipolígono.  
 
![16_Drawing building with court method 1](https://arcmaps.s3.amazonaws.com/share/validationPictures/ComplexShapes3.png)
 
La otra forma de hacerlo es mapeando el exterior y el interior como dos características separadas. Una vez que esté satisfecho con sus formas, seleccione ambos y cree un multipolígono. En la barra de herramientas superior, seleccione "Herramientas" y luego "Crear multipolígono" o utilice el atajo de teclado `Ctrl+B`. El color del edificio cambiará a púrpura, lo que indica que ha creado con éxito un multipolígono. La forma interior no debería estar sombreada y debería parecer un agujero en el edificio.
 
![17_Drawing building with court method 2](https://arcmaps.s3.amazonaws.com/share/validationPictures/ComplexShapes4.png)
 
## Otros plugins útiles
### utilsplugin2
Al añadir utilsplugin2 a JOSM, se activan varias funciones útiles. Estas son algunas de nuestras favoritas:
 
**Añadir nodos en las intersecciones** `Shift+I`: esta función permite añadir nodos donde se cruzan las líneas seleccionadas. Resulta muy útil si te encuentras con datos de nuevos cartógrafos que se olvidaron de conectar rasgos superpuestos, como los senderos. En lugar de añadir y pegar manualmente nodos adicionales en dos líneas superpuestas, utilice esta herramienta para hacerlo automáticamente.
 
**Reemplazar geometría** `Ctrl+Shift+G`: esta función permite volver a dibujar un elemento que se ha dibujado mal o cuya forma real se ha actualizado, manteniendo las etiquetas y el historial del elemento original. Esto es útil cuando te encuentras con casos en los que sería más rápido volver a dibujar una característica que editarla. Es importante mantener el historial de una característica siempre que sea posible, de modo que se puedan conservar los usuarios originales y los comentarios del conjunto de cambios. Utilizando esta función, puede estar seguro de no perder información local y etiquetas importantes cuando intente mejorar la geometría de una característica.
 
**Pegar etiquetas desde la selección anterior** `Shift+R`: esta función permite pegar las etiquetas en una característica seleccionada desde la característica que había seleccionado anteriormente. Esta función es muy útil si quiere aplicar rápidamente varias etiquetas de un objeto a otro. Simplemente seleccione la característica con las etiquetas que desea transferir, luego seleccione la característica a la que desea pegar las etiquetas y pulse `Shift+R`.
 
**Deseleccionar nodos** `Shift+U`: esta función le permite deseleccionar rápidamente los nodos de su selección actual. Esto es muy útil si desea editar las etiquetas en múltiples polígonos que ha seleccionado con la herramienta de selección (“s”). Si no deselecciona los nodos de su selección, si añade una nueva etiqueta, ésta se aplicará a todos los elementos, incluyendo los nodos, en lugar de sólo a los polígonos.
 
Se pueden encontrar más funciones de este plugin en su página en el [Wiki de JOSM](https://josm.openstreetmap.de/wiki/Es%3AHelp/Plugin/UtilsPlugin2) o en el [Wiki de OSM](https://wiki.openstreetmap.org/wiki/ES:JOSM/Complementos/utilsplugin2).
 
### FastDraw
Este plugin facilita enormemente el proceso de digitalización de formas grandes y complejas, como lagos y bosques. Al utilizar FastDraw, puede trazar una forma y soltar nodos sin tener que hacer clic en el botón del ratón. Los nodos se dibujarán según una distancia establecida.
 
Para empezar a utilizar el plugin, pulsa `Shift+F`. Aunque hay muchas formas de utilizar la herramienta, tal y como se indica en la [Wiki](https://wiki.openstreetmap.org/wiki/ES:JOSM/Complementos/FastDraw), una forma fácil de empezar es mover el cursor hasta el lugar donde quieras empezar a dibujar, mantener pulsada la barra espaciadora y arrastrar el cursor alrededor de la forma. Si quieres dejar de soltar nodos, suelta la barra espaciadora hasta que estés listo para volver a trazar. Puedes pulsar la barra espaciadora una vez para soltar un solo punto a lo largo del trazado. Pulsa `Retroceso` para borrar el último nodo dibujado. Cuando hayas terminado de dibujar una forma, pulsa `Enter`.
 
![18_FastDraw 01](https://arcmaps.s3.amazonaws.com/share/validationPictures/FastDraw1.png)
 
La forma se simplificará (se eliminarán los nodos extraños) y se volverá naranja. Si la forma se ha simplificado demasiado, utilice la flecha hacia arriba `↑` para añadir más nodos. Si la forma tiene demasiados nodos, utilice la flecha hacia abajo `↓` para eliminar nodos. Es importante reducir el número de nodos que tiene una característica en OpenStreetMap para limitar la memoria necesaria para almacenar los datos. Cuando esté satisfecho con su forma, pulse `Enter` por segunda vez y su forma será creada. Para dibujar otra forma con el plugin, presione `Shift+F`.
 
![19_FastDraw 02](https://arcmaps.s3.amazonaws.com/share/validationPictures/FastDraw2.png)
 
Para acceder al menú de configuración de FastDraw, pulsa `Q` cuando el plugin esté activo (es decir, después de pulsar `Shift+F`). Dentro de este menú, puedes modificar el número de puntos dibujados mientras arrastras el ratón por el mapa. Además, puedes añadir las etiquetas que quieras que se apliquen a tu característica en "Añadir etiquetas automáticas" si estás dibujando varias características seguidas. También puede seleccionar "Dibujar sólo polígonos cerrados" si está dibujando polígonos en lugar de líneas para que la digitalización sea más rápida.
 
![20_FastDraw configuration](https://raw.githubusercontent.com/MissingMaps/img/main/images/AdvJOSM_ES_20_FastDrawConfiguration.PNG)
 
Para más información sobre el plugin FastDraw, consulte su página en la [Wiki](https://wiki.openstreetmap.org/wiki/ES:JOSM/Complementos/FastDraw).
 
### Terracer
El plugin Terracer permite a los usuarios crear rápidamente un edificio adosado (casa adosada, casa de pueblo). Funciona separando un polígono grande que delinea toda la estructura en unidades individuales que delinean viviendas individuales dentro del edificio más grande. Los [edificios adosados](https://es.wikipedia.org/wiki/Casa_adosada) están formados por varias viviendas adosadas que comparten paredes laterales. Suelen tener entradas y direcciones o números de unidad separados. Hay al menos 2 formas de mapear estas estructuras en OSM: como un gran edificio etiquetado como `building=terrace` con nodos individuales para cada unidad etiquetados con su dirección; o como varios polígonos adjuntos que comparten al menos dos nodos etiquetados como `building=house` con otras etiquetas para describir las unidades individuales (dirección, etc.).
 
Se prefiere el segundo método para dibujar estos edificios, ya que ilustra con más detalle la ubicación de las unidades individuales. La forma más fácil de mapear las casas adosadas con este método es utilizar el plugin Terracer y se describe a continuación. Sin embargo, hay que tener en cuenta que, aunque este es el método preferido para cartografiar estas estructuras, sólo debe hacerse cuando el cartógrafo pueda delimitar con seguridad las unidades individuales, sabiendo que son de igual tamaño. Si el cartografiador no puede confirmarlo a partir de sus conocimientos locales o de las imágenes de las calles, puede ser mejor cartografiar utilizando el primer método e indicar las unidades individuales con nodos que marquen la entrada y la información de la dirección.
 
Para utilizar el plugin Terracer, primero hay que trazar el contorno exterior de toda la terraza (la extensión de todas las unidades). Esto puede hacerse fácilmente con el plugin building_tools instalado y pulsando `B`. Asegúrese de que su forma es un cuadrilátero (4 lados) y que está alineado correctamente con las imágenes. Gire `Shift+Ctrl`, cambie el tamaño `Ctrl+Alt` y mueva la forma como sea necesario hasta que esté satisfecho.
 
![21_Drawing building](https://arcmaps.s3.amazonaws.com/share/validationPictures/Terracer1.png)
 
A continuación, está listo para utilizar el plugin Terracer y dividir la forma en unidades individuales adjuntas. Con el polígono seleccionado, pulse `Shift+T` para activar el plugin y lanzar el cuadro de diálogo "Terrace a house". En este cuadro de diálogo, indique cuántas unidades desea que se creen en la línea "Segmentos". Este ejemplo muestra cómo se pueden añadir direcciones a las unidades indicando el número de unidad más bajo (1) y el más alto (7).
 
![22_Terracer settings](https://raw.githubusercontent.com/MissingMaps/img/main/images/AdvJOSM_ES_22_Terracer.PNG)
 
Según el método de interpolación elegido en el cuadro de diálogo, el plugin rellenará la etiqueta de dirección de las unidades según esos números y el número de segmentos/unidades. El método de interpolación "Par/Impar" omitirá uno de cada dos números de dirección mientras que el método "Todo" utilizará todos los números. Pulse `Aceptar` y el plugin realizará sus acciones.
 
![23_Terracer result](https://arcmaps.s3.amazonaws.com/share/validationPictures/Terracer3.png)
 
Si no le gustan los resultados, pulse `Ctrl+Z` para deshacer e intente el plugin de nuevo. Asegúrese de que los nuevos polígonos están etiquetados adecuadamente (por ejemplo, `dirección=casa`).
 
## Otros recursos
- [Resolución de conflictos JOSM](https://learnosm.org/en/josm/josm-conflict-resolution/)
- [Relaciones JOSM](https://learnosm.org/es/josm/josm-relations/)





Last update verification: 10/13/2022 by Jasson Mora Mussio