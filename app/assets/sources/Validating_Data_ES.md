![](https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_mmLogo.png)



# Cómo validar el mapeo


![](https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_mapathon.png)



## Antecedentes

La validación de datos es una parte importante de OpenStreetMap y el mapeo humanitario. OpenStreetMap está construido por voluntarios de todos los niveles de habilidad; procedentes de diferentes países, antecedentes y experiencias. Si bien tener tal variedad de mapeadores es un beneficio para el proyecto, también puede resultar en un mapeo inconsistente. Las inconsistencias son particularmente frecuentes cuando los mapeadores principiantes trabajan en secciones pequeñas y aisladas del mapa en países desconocidos, tal es a menudo el caso en el Equipo Humanitario de OpenStreetMap (HOT) [Tasking Manager](https://tasks.hotosm.org/).

Los validadores son voluntarios de mapeo experimentados que revisan el trabajo de otros en el Hot Tasking Manager. Depende de los validadores:

* Compruebe que **se cumplen los estándares OSM**. Los datos deben ser precisos, completos y consistentes.
* Asegúrese de que los proyectos de mapeo se completen **según lo previsto por el Gestor de Proyecto**. Esto incluye preservar y mejorar los datos locales.
* Hacer crecer la comunidad de mapeo proporcionando apoyo y **comentarios positivos y constructivos** a los nuevos mapeadores.

Los requisitos específicos de cada proyecto de mapeo en el Administrador de tareas varían, así como los protocolos regionales de etiquetado OSM. Debido a esto, es difícil armar una guía completa para validadores que cubra todo lo que necesita ser verificado. Al igual que con la asignación, todos los validadores tienen sus propias preferencias y flujos de trabajo para revisar los datos. Tenga en cuenta las responsabilidades anteriores. Este documento pretende ser una guía general; un lugar para comenzar y aprender nuevos consejos. Interactúe con los gestores de proyecto, la comunidad de validación en [HOT Slack](https://slack.hotosm.org/) y continúe aprendiendo y mejorando sus habilidades.

En comparación con los mapeadores, los validadores son un grupo mucho más pequeño, pero desempeñan una parte integral del proceso de mapeo humanitario. ¡Gracias por sus contribuciones!


### Requisitos previos

Antes de validar el trabajo de los demás, usted mismo debe ser un mapeador experimentado. Es importante poder:

* Comprender las diferencias entre el mapeo de alta y baja calidad.
* Saber cómo mejorar los datos de manera eficiente sin perder información local.
* Reconocer las diferentes arquitecturas y protocolos de etiquetado de varios países. Hasta que se sienta cómodo mapeando en un determinado país, no debería sentirse cómodo validando en ese país.
* Siéntase seguro al usar las plataformas de mapeo necesarias, como Tasking Manager y [Java OSM Editor (JOSM)](https://josm.openstreetmap.de/).


## Flujo de trabajo general


### Selección de un proyecto

En el [HOT Tasking Manager](http://tasks.hotosm.org), elija un proyecto para validar desde la página "Explorar proyectos". El progreso de cada proyecto está marcado por una barra visible en la parte inferior de cada tarjeta de proyecto. La porción roja indica la cantidad validada, la porción gris oscuro indica la cantidad mapeada y la porción gris claro indica la cantidad que queda por mapear. Al hacer clic en el proyecto, puede pasar el cursor sobre cada sección de la barra de progreso para obtener porcentajes exactos.


![](https://raw.githubusercontent.com/MissingMaps/img/main/images/ValidGettingStarted1_ES.png)



Observe en la página principal del proyecto en "Equipos y permisos" que solo ciertos usuarios pueden mapear y validar un proyecto. Estos permisos son configurados por el Administrador de proyectos. Si no cumple con el nivel de experiencia especificado o no forma parte del equipo enumerado, no puede contribuir al proyecto.

![](https://raw.githubusercontent.com/MissingMaps/img/main/images/ValidGettingStarted2_ES.png)



Continúe mapeando y construyendo sus habilidades hasta que cumpla con los requisitos. Si se siente listo para unirse al Equipo de Validadores de HOT, solicite unirse a él completando [esta encuesta](http://bit.ly/HOTValidators). Puede comprobar su nivel de experiencia de usuario en la pestaña "Mis contribuciones" del Administrador de tareas. Haga clic en "Mis equipos" para ver su afiliación en el equipo.

Antes de comenzar a validar, debe comprender el objetivo del proyecto leyendo sus pestañas "Descripción" e "Instrucciones". La descripción estará en la página principal del proyecto, mientras que las instrucciones se pueden leer después de presionar el botón 'Contribuir'. Esto le dirá qué entidades debe asignar, cómo etiquetarlas, qué imágenes usar y cualquier otra consideración del Gestor de proyecto. Cada proyecto es único y es importante seguir cuidadosamente las instrucciones del Gestor de Proyecto para asegurarse de que el área se mapea de manera consistente. Aquí hay un ejemplo de la descripción y las instrucciones para una tarea:


![](https://raw.githubusercontent.com/MissingMaps/img/main/images/UnderstandingYourProject1_ES.png)


### Tareas de apertura

Abrir tareas para validarlas sigue un proceso similar al utilizado para mapear. Si desea validar una tarea utilizando JOSM, si el programa aún no está abierto, ábralo y asegúrese de que esté seleccionado como editor en el menú desplegable. Se pueden seleccionar varias tareas para abrir a la vez manteniendo presionada la tecla 'Ctrl' y haciendo clic en varias tareas. Cuando se abren las tareas, ¡puede comenzar a validar!


### Revisión de mapeo

Como se mencionó anteriormente, existe una amplia variedad de proyectos de mapeo y estándares OSM. Es difícil enumerar todas las consideraciones que un validador debe hacer al revisar los datos. Sin embargo, este sería un buen punto de partida para comenzar con aspectos que deben considerarse:

* Precisión espacial: ¿Están los elementos en el lugar correcto, hay edificios superpuestos, son los edificios cuadrados, etc.?
* Precisión de etiquetado: ¿Los elementos se etiquetan adecuadamente?
* Integridad: ¿Se asignan todas las entidades como se describe en las instrucciones del proyecto del Administrador de tareas?

**Los consejos específicos y sugerencias sobre validación se tratarán en la siguiente sección de este documento.**

Dependiendo de sus preferencias y la urgencia del proyecto de mapeo, es posible que desee solucionar algunos o todos los problemas de mapeo que haya encontrado al revisar, si los hay. Considere la facilidad con la que un mapeador principiante puede solucionar los problemas.

Si hay un problema de mapeo que un usuario intermedio o avanzado de JOSM puede solucionar fácilmente, es mejor resolverlo durante la validación. Por ejemplo, supongamos que un mapeador dio por error a varios edificios la etiqueta 'nombre= casa'. Esa etiqueta puede ser modificada rápidamente por un validador utilizando la función de búsqueda de JOSM, pero un mapeador principiante tardaría mucho más en arreglarla en el Editor de ID. Si ve una oportunidad en la que los mapeadores principiantes pueden apoyar en la limpieza de datos, donde muchos edificios deben cuadrarse, por ejemplo, es posible que desee dejar esas correcciones en funciones y dedicar más tiempo a validar otras tareas. A algunos validadores les resulta útil tomar notas mientras revisan el mapeo sobre los problemas que abordan para que puedan proporcionar comentarios más constructivos al usuario.

También debe verificar si el proyecto aún se está trabajando. Si la última persona en editar el proyecto lo hizo hace varios meses, es mejor que termine lo que queda y valide. Lo mismo ocurre si el usuario cuyo trabajo está validando no ha utilizado OSM en muchos meses. Puede ver la actividad del proyecto en la página principal del proyecto. Una vez que abra una tarea, puede ver su actividad dentro de la pestaña "Historial" de la barra lateral a la derecha. Las actividades individuales del usuario se pueden encontrar haciendo clic en el nombre de usuario del usuario en esta pestaña. Se le llevará a su perfil de Tasking Manager. Si vuelve a hacer clic en su nombre de usuario en esta página donde ve el símbolo de OSM, se le llevará a su perfil de OSM.


![](https://raw.githubusercontent.com/MissingMaps/img/main/images/ValidGettingStarted3_ES.png)



### Cerrar tareas y proporcionar comentarios

Una vez que haya revisado la tarea asignada de un usuario, puede marcar la tarea como "bien mapeada" (validada y terminada) o como "no bien mapeada" (invalidada y que necesita más trabajo). Ya sea que valide o invalide, debe agradecer a aquellos que han trabajado en el cuadrado hasta ahora escribiendo la tecla @ en su teclado y luego su nombre de usuario.

Puede ver la lista de personas que han trabajado en la tarea debajo de la pestaña historial:


![](https://raw.githubusercontent.com/MissingMaps/img/main/images/ValidGettingStarted4_ES.png)


Es posible que haya habido muchas personas que contribuyeron, así que asegúrese de agradecerles por su trabajo, incluso si hay algunos errores o problemas. Esto puede animarlos a volver y mapear de nuevo. Si notó errores, como cualquiera de las advertencias de validación que vimos anteriormente u otras cosas como edificios que no estaban cuadrados o carreteras que faltaban, tenga en cuenta eso en el comentario también, cortésmente. Esto puede ayudar al mapeador a aprender para que la próxima vez haga un mejor trabajo.


![](https://raw.githubusercontent.com/MissingMaps/img/main/images/ValidGettingStarted5_ES.png)



Aquí hay un mensaje de ejemplo que puede usar:

>Añadidos algunos edificios y carreteras restantes. ¡Gracias @Stanley1260 @Prinzvizzy @GeoAlex104 por el mapeo! No olvides escuadrar tus edificios usando la tecla 'Q'

Otra regla general es que si reconoce un nombre de usuario de un cuadrado anterior que validó o invalidó, no necesita enviarles un mensaje nuevamente, no queremos enviar una tonelada de mensajes a las mismas personas. Entonces, si reconoce un nombre de usuario de la validación anterior, puede omitirlos en el mensaje.

Luego, después de haber dejado su comentario, si todo está completo, seleccione "Sí" en "¿Está bien mapeada esta tarea?" y haga clic en "Enviar tarea". O seleccione "No" si aún quedan cosas antes de enviar. Ahora puedes pasar a otro cuadrado.


## Validación de datos mediante JOSM

La siguiente sección de este documento repasa consejos detallados y consejos para revisar y limpiar datos en JOSM. Esto se debe hacer cuando haya decidido que va a validar y solucionar cualquier problema en los datos en lugar de marcar la tarea como "No bien mapeado" y dejarla en función de otros mapeadores.


### Problemas y errores a tener en cuenta

Como se mencionó anteriormente en este documento, es difícil crear una lista completa de cosas que se debe buscar al validar una tarea. Debe recurrir a sus propias experiencias de mapeo y atención al detalle mientras considera las instrucciones específicas del proyecto que está validando.

Estos son algunos ejemplos de problemas comunes que requieren corrección:

* **Edificios que faltan**: Si se trata de una tarea de construcción y encuentra edificios que faltan, agréguelos.
* **Carreteras faltantes** Similar a la anterior, si se trata de una tarea de construcción y encuentra carreteras que faltan, agréguelas.
* **Geometrías mal dibujadas** Los edificios y otras estructuras artificiales generalmente serán rectangulares o circulares, o estarán hechos de una combinación de esas formas, por ejemplo, en forma de L. Si ve un elemento que no está bien dibujado para representar cómo esperaría ver ese elemento en la vida real, corrija la geometría. La mayoría de las veces, esto incluye cuadrar las esquinas de los edificios rectangulares. [Puede obtener más información sobre cómo dibujar edificios en JOSM aquí.](https://www.youtube.com/watch?v=DcKewl94jR4)
* **Desalineados con las imágenes** Idealmente, en OSM, los datos y las imágenes están alineados con una pista GPS para georreferenciar correctamente la información. Esto no siempre es posible, especialmente al comienzo de los proyectos de mapeo remoto. Por lo tanto, los gestores de proyecto seleccionarán las imágenes con las que se deben alinear los datos. Si los mapeadores utilizan otras imágenes, es posible que sus entidades deban seleccionarse y realinearse.
* **Elementos superpuestos** Algunos elementos, como los edificios, nunca se superponen en la realidad. Esto también debería ser cierto en un mapa. Si los elementos se superponen o tienen nodos que están pegados irregularmente (por ejemplo, una sola esquina), esto debe arreglarse.
* **Etiquetado incorrecto** Consulte las instrucciones del proyecto de mapeo para conocer los requisitos de etiquetado adecuados. A menudo, los gestores de proyecto solicitan que los edificios se etiqueten con el genérico 'edificio = sí' en lugar de 'edificio = casa'. Corrija esto si las entidades se dibujan a través del Administrador de tareas (verifique el historial de objetos para hashtags) pero * no corrija si la información proviene del mapeador local *.
* **Etiquetado incorrecto** Ocasionalmente, los mapeadores agregarán etiquetas incorrectas a entidades como 'name=house'. Esto a menudo se hace por confusión y debe corregirse. Tenga en cuenta que, aunque, poco común, puede haber etiquetas inusuales pero completamente correctas de mapeadores locales que parecen extrañas para aquellos de fuera de la comunidad.


### La herramienta de validación

Muchos validadores comienzan el proceso de revisión ejecutando la herramienta de validación en JOSM, que verificará automáticamente los datos que tiene abiertos en busca de errores sospechosos. Esta herramienta es especialmente útil para encontrar errores **geográficos**, pero puede no ser tan útil para encontrar etiquetas incorrectas. Dependiendo del estado de los datos y las preferencias de los individuos, los validadores pueden decidir ejecutar esta herramienta al final de su flujo de trabajo para ver si se perdieron algo.

Esta herramienta se ejecuta automáticamente al cargar elementos en OSM. Sin embargo, cuando se ejecuta en esa etapa, solo evalúa las entidades que se han editado en esa sesión. No evaluará todas las que se han descargado. Por ejemplo, si descarga un vecindario y dibuja un nuevo edificio, la herramienta de validación que se ejecuta al seleccionar el botón de carga, solo buscará errores en el nuevo edificio, no en todo el vecindario. Al ejecutar esta herramienta fuera de la ventana de carga, evaluará todas los elementos.

Active la herramienta haciendo clic en el botón Herramienta de validación en el lado izquierdo de JOSM. (Esto es innecesario si el panel Validación ya está abierto)


![](https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_validateIcon.png)


Si tiene elementos seleccionados, la herramienta Validación solo verificará esas entidades. A veces es posible que desee verificar solo ciertos elementoss, pero por ahora verificaremos todo el archivo. Para anular la selección de todas las funciones, presione la tecla 'Esc'.

Haga clic en el botón "Validación" en el panel. Eso ejecutará una comprobación de una serie de errores potenciales.


![](https://raw.githubusercontent.com/MissingMaps/img/main/images/JOSM01_Validacion.png)



Verá aparecer una lista de advertencias (su lista puede variar):



![](https://raw.githubusercontent.com/MissingMaps/img/main/images/JOSM02_Resultados%20validacion.png)



También aparece una nueva capa en el panel Capas, que muestra dónde están los errores. Es posible que le resulte conveniente ocultar esta capa por ahora haciendo clic en el icono del ojo junto al nombre. Es un poco más fácil ver sus datos con esa capa desactivada.


![](https://raw.githubusercontent.com/MissingMaps/img/main/images/JOSM03_Layers.png)


Veamos algunas de las advertencias. La mayoría de estos necesitamos arreglarlos, pero podemos ignorar "caminos sin nombre" ya que no sabremos estos nombres de carreteras.

El resto, sin embargo, debemos mirarlo. Para ampliar un problema, haga clic en el menú desplegable, luego haga clic derecho en uno de ellos y haga clic en "Acercar al problema" y se resaltará y ampliará el error.


![](https://raw.githubusercontent.com/MissingMaps/img/main/images/JOSM04_zoom%20to%20problem.png)


Muchas veces se trata de errores que nunca hubiéramos detectado sin la herramienta de Validación.

Por lo general, el nombre del error es bastante sencillo y fácil de entender. De lo contrario, intente preguntar en el canal de soporte del mapeador en HOT Slack, que es de acceso libre: [http://slack.hotosm.org/](http://slack.hotosm.org/)

Algunas advertencias, como "Cruzar la vía fluvial / carretera", no son necesariamente errores. Esto demuestra que la herramienta de validación es buena para encontrar posibles errores, pero requiere que alguien vaya y revise manualmente si la advertencia es importante o no.

Una vez que corrija un error, ejecute la herramienta de validación nuevamente y desaparecerá de la lista. Sin embargo, a veces una solución puede causar otros problemas, por lo que es importante ejecutar muchas veces.

Algunos problemas comunes que verá con la herramienta validación en tareas HOT son elementos sin etiquetar (una línea o polígono que alguien olvidó etiquetar) y edificios que se superponen a otros edificios o carreteras.

Para muchos de los problemas, las soluciones son bastante fáciles: para edificios o carreteras superpuestos, mueva el elemento a la ubicación correcta para que no se superponga; para las formas sin etiquetar, agregue la etiqueta correcta. (NOTA: se trata de formas o áreas sin etiquetar, no de formas sin nombre. Podemos ignorar formas sin nombre).


### Encontrar otros problemas para corregir

También hay otros problemas que la herramienta de validación no detectará, por lo que tendremos que solucionarlos a continuación.

Después de corregir todos los errores de la herramienta de validación, debemos comenzar a navegar por nuestro cuadrado para encontrar los otros errores que la herramienta no detectará, pero que también son importantes. Algunos de estos incluyen (pero no se limitan a) cosas que faltan o están en el lugar equivocado, carreteras que están unidas a edificios y cosas que no están etiquetadas correctamente. Hay muchas maneras de llevar a este paso. Los validadores individuales tendrán sus propias preferencias y, a menudo, utilizarán una combinación de técnicas que se describen a continuación, como el uso de la función de búsqueda y el complemento Todo List. ¡Descubra qué funciona mejor para usted!

La forma más sencilla de hacerlo es comenzar en una esquina, acercarse para que pueda ver los detalles de las imágenes y comenzar a desplazarse por su cuadrado y buscar cosas que deben asignarse de acuerdo con las instrucciones de la tarea.

Una herramienta útil para desplazarse a través de la tarea es el complemento markseen. Este plugin abrirá el
"Markseen Viewer" para mostrar áreas del mapa que ya has revisado.


![](https://raw.githubusercontent.com/MissingMaps/img/main/images/screen_20170828.png)


## Carreteras

Si está validando una tarea de carreteras, hay una serie de problemas que pueden surgir. Puede haber muchas carreteras que faltan o están etiquetadas incorrectamente. Además, las carreteras pueden estar conectadas a cosas que no deberían ser, como edificios.

Si faltan carreteras en el cuadrado de tareas, agréguelas utilizando el esquema mencionado en las instrucciones de la tarea. Si la tarea requiere mapear carreteras residenciales o pistas pequeñas, estos se pierden comúnmente. A veces, las personas mapean las carreteras como mucho más grandes de lo que deberían ser, marcando algo que debería ser residencial, no clasificado o incluso una pista como algo así como una autopista o primaria, debe arreglarlas.

Otro problema común con las carreteras es nombrarlas de forma incorrecta. Para el mapeo remoto, generalmente no sabremos cuál es el nombre, ya que no estamos familiarizados con estas áreas. Pero a veces las personas nombran erróneamente a las carreteras "carretera" o agregan algo más que es una descripción, no un nombre. El campo Nombre debe ser un nombre propio como "Autopista 1" o "Avenida Norte". Para encontrar todas las carreteras con nombre, haga clic en 'Ctrl + F' y luego escriba 'highway=* name=*'


![](https://raw.githubusercontent.com/MissingMaps/img/main/images/JOSM06_buscar.png)


Así encontrarán todos los caminos que tienen nombre. Haga clic en cada uno para ver cuál es el nombre y si parece correcto. Si es algo descriptivo como "carretera" o "camino de tierra", puede ser incorrecto, el mapeador podría haber tenido la intención de etiquetarlo, pero cambió el nombre por error. Retírelo si le parece mal. Pero tenga cuidado, no queremos eliminar datos precisos.

La clasificación de las carreteras también es importante. A veces, los mapeadores remotos etiquetarán las carreteras como mucho más importantes de lo que deberían ser. Consulte las instrucciones del proyecto y la descripción de cómo se deben etiquetar las carreteras.

Si hay muchas carreteras de autopista, troncales, primarias, secundarias y terciarias, especialmente en una zona rural, las etiquetas pueden ser incorrectas. Estos aparecerán colores brillantes como azul, amarillo, naranja y rojo. Si los ve en su tarea, vuelva a verificarlos. Tal vez deberían ser de un nivel inferior como terciarios, residenciales o no clasificados.

Las carreteras no deben conectarse con edificios, a menos que la carretera pase por el edificio, lo cual es muy raro y generalmente solo se ve en las grandes ciudades.

Aquí hay un ejemplo. El edificio de la derecha está unido a la carretera, vea la plaza un poco más grande donde están unidos. Ese cuadrado más grande indica un nodo unido.


![](https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_unglue.png)



Para desconectarlos, haga clic en el cuadrado, luego haga clic en g en su teclado, que significa "despega". Luego haga clic en un nodo y muévalo a donde debería estar. Es posible que deba presionar 'Q' en su teclado para escuadrar el edificio nuevamente.


### Usando la función de búsqueda de JOSM

La búsqueda en JOSM es una forma poderosa de revisar los datos. Le permite proporcionar términos de búsqueda, también conocidos como consultas, para seleccionar solo los elementos que desee.

Para acceder a la búsqueda, vaya a Editar -> Buscar o presione 'Ctrl + F' en su teclado o haga clic en el icono de la lupa en la parte superior de la ventana josm.


![](https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_search.png)


Hay muchos tipos de consultas que puede buscar aquí, y puede ver detalles y ejemplos en el cuadro de búsqueda y haciendo clic en el botón 'Ayuda'. Visite la [Página Wiki de la función de búsqueda JOSM](https://wiki.openstreetmap.org/wiki/JOSM/Search_function) para obtener más ejemplos.

Observe las opciones en la esquina superior izquierda para limitar los resultados de búsqueda en función de las entidades que haya seleccionado. Puede buscar desde todas las funciones ("seleccionar"); "añadir a la selección"; "eliminar de la selección"; o "buscar en la selección". Esto es útil cuando se ejecutan consultas consecutivas o cuando se examinan las entidades dentro de un área deseada solamente.

**Búsqueda de ediciones realizadas por usuarios específicos**

Si identifica mapeadores específicos que cometen el mismo error repetidamente, puede identificar rápidamente todas las entidades que han editado mediante la siguiente consulta de búsqueda:

>usuario:"*nombre*"

>ej., usuario:"Cuenta de redacción de OSMF"

Esto seleccionará todos los objetos que fueron modificados por última vez por ese usuario. Estos elementos se pueden agregar fácilmente al complemento Todo List (más información a continuación) para examinar y rastrear individualmente.

**Búsqueda de edificios a escuadrar**

Los polígonos etiquetados como edificios con más de 4 nodos a menudo deben hacerse cuadrados. Estos elementos se pueden encontrar fácilmente utilizando la función de búsqueda y al cuadrado en masa. Sin embargo, tenga en cuenta que los edificios circulares tendrán más de 4 nodos y no deben estar cuadrados. Por lo tanto, queremos ejecutar una consulta de búsqueda en una pequeña sección del mapa que podamos verificar visualmente, como la que está a la vista. Para encontrar estos elementos, ejecute la siguiente consulta de búsqueda:

>crear nodos inview:4-

De esta forma encontrará todo lo que está etiquetado como un edificio en su vista actual con 4 o más nodos.


![](https://raw.githubusercontent.com/MissingMaps/img/main/images/JOSM07_building4.png)



Todos se volverán rojos en su pantalla. Haga clic en la tecla 'Q' en su teclado y eso escuadrará todas sus esquinas.

Sin embargo, ¡tenga cuidado! Si hay edificios que no deben ser escuadrados, esto los hará cuadrados de todos modos. Para asegurarse, presione deshacer y rehacer para ver si algún edificio que es redondo u otros elementos se cambiaron por error. Si es así, vaya a arreglarlos como deberían ser.

Si desea ordenar más fácilmente los edificios uno por uno, agregue los resultados de la consulta de búsqueda anterior al complemento Todo List. Esto le permitirá ordenar rápidamente los polígonos para verificar visualmente si deben estar escuadrados. Más sobre este plugin a continuación.


![](https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_undoRedo.png)


### Uso de secuencias de comandos para identificar edificios que deben estar escuadrados

Otra herramienta útil para encontrar edificios no escuadrados es el siguiente guión.

Navege a [este repositorio de GitHub](https://github.com/MikeTho16/JOSM-Scripts/). Busque 'SelectNonOrthogonalBuilding.js' en la lista y descárguelo. Guárdelo en un directorio fácil de encontrar en su computadora local. Abra la pestaña de scripting en JOSM y haga clic en 'ejecutar' y seleccione el archivo descargado. Después de seleccionar esto, ejecute el script. Ahora todos los edificios que cumplan con los parámetros del script se resaltarán en rojo. Puede verificarlos en su tarea primero, luego presione 'Q' para escuadrarlos todos. Ejecute el script de nuevo para ver si quedan edificios no escuadrados. Compruébelos primero, porque puede haber casos en los que los edificios se unan en nodos. Despega estos nodos presionando 'G' y haga clic nuevamente en el botón 'Q'.


### Historial de objetos

Al editar entidades en un área ya asignada, es importante preservar la información local, especialmente cuando se está mapeando en un área con la que no está familiarizado de primera mano. *Compruebe siempre los objetos en busca de información local o etiquetas antes de eliminarlas.* Una buena manera de comprobarlo es abrir el historial de objetos. Con un elemento seleccionado, presione 'Ctrl + H'. Esta ventana le indicará cuándo se creó el elemento por primera vez, qué usuarios la han creado o editado y los comentarios del conjunto de cambios asociados. Compare el tiempo, los nombres de usuario y los comentarios del conjunto de cambios (hashtags) con los que esperaría ver en el historial de tareas y proyectos de mapeo de Tasking Manager. Si las ediciones se produjeron fuera del proyecto de mapeo, la información podría haber sido realizada por un mapeador local. Recuerde: siempre puede mejorar los datos del mapa sin eliminar entidades.

Ejemplo de ediciones de mapeo de Tasking Manager:


![](https://raw.githubusercontent.com/MissingMaps/img/main/images/JOSM08_historial.png)


Ejemplo de ediciones de un mapeador local:


![](https://arcmaps.s3.amazonaws.com/share/validationPictures/ValidHistory2.png)


## Todo List Plugin

Otro plugin útil disponible en JOSM es el plugin Todo List. Este complemento le permite agregar elementos a una lista de "Tareas pendientes", investigar ese elemento, marcarla como hecha y acercar automáticamente al siguiente elemento de la lista.

Para usar el complemento, debe descargarlo desde el menú de complementos como lo hizo para el buildings_tool. Después de agregarlo, actívelo presionando el ícono Lista de todo en el menú de herramientas. A continuación, debería ver el panel Todo List abierto en el lado derecho de la pantalla.


![](https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_todoIcon.png)


Usando la función de búsqueda JOSM anterior, puede seleccionar todos los elementos de un cierto tipo que le gustaría ver. Una vez seleccionados, presione el botón 'Agregar' en el panel Todo List. Esto agregará todos sus elementos a su lista. Seleccione el primer elemento de la lista, asegúrese de que esté correctamente mapeado y luego presione 'Marcar' o la tecla ']', que lo moverá al siguiente elemento.

El complemento Todo List es extremadamente útil para los mapeadores principiantes que aún no se sienten cómodos al escanear la imagen en busca de elementos, y ayuda a asegurarse de que se mire cada elemento individual. Para obtener más información, consulte la [Página wiki del complemento Todo List](https://wiki.openstreetmap.org/wiki/JOSM/Plugins/TODO_list).


![](https://raw.githubusercontent.com/MissingMaps/img/main/images/JOSM09_todo%20list.png)


### Uso de estilos de pintura

Los estilos de pintura son formas de cambiar la forma en que se ven los datos en JOSM. Puede usarlos para resaltar ciertas cosas que pueden ser incorrectas, cosas que podrían no aparecer en las comprobaciones de validación.

Para tareas de mapeo remoto y humanitario, a menudo no sabrá los nombres de elementos como edificios y carreteras. Los estilos de JOSM Paint pueden resaltar dónde se pueden haber agregado por error: edificios con nombres, edificios no etiquetados como 'building=yes', carreteras con nombres y carreteras que tienen un valor de autopista en la clave de nombre (por ejemplo, 'name=residential'). A veces la gente agrega lo que debería ser una descripción como el nombre, como "camino de tierra".

Al igual que las advertencias de validación, el estilo de pintura no necesariamente muestra lo que está mal, pero muestra lo que deberá mirar para ver si está mal.

También es importante asegurarse de no eliminar los datos precisos existentes. Tal vez alguien visitó ese lugar y agregó esos nombres correctamente. Pero lo mas probable es que algo así como "nombre = camino de tierra" o "nombre = edificio" no sea correcto.

Para agregar el estilo de pintura, haga clic en el menú de Windows y vaya a Asignar estilos de pintura ... que abrirá un menú en JOSM:


![](https://raw.githubusercontent.com/MissingMaps/img/main/images/JOSM10_estilos.png)


Luego haga clic en el botón de configuración de estilo de pintura en la parte inferior derecha.

Haga clic en el signo más en la parte superior derecha para agregar uno nuevo.


![](https://raw.githubusercontent.com/MissingMaps/img/main/images/JOSM11_config%20estilos.png)


Escriba un nombre como Validación de mapas pendientes o lo que desee, y coloque [https://github.com/MissingMaps/josm_styles/archive/master.zip](https://github.com/MissingMaps/josm_styles/archive/master.zip) en el campo URL, y el estilo de pintura aparecerá en la ventana Estilos de pintura de mapa.


![](https://raw.githubusercontent.com/MissingMaps/img/main/images/JOSM12_MMaps%20validation.png)


Hay cuatro colores que puede ver, más algunos triángulos, correspondientes a los errores mencionados anteriormente:

* los edificios con nombres son **amarillos**
* los edificios no etiquetados como 'building=yes' son **naranja**
* las carreteras que se nombran son **verdes**
* las carreteras que llevan el nombre de una descripción (como 'nombre=residencial') son **rojas**
* los edificios que están conectados a carreteras u otras entidades son **triángulos rojos**
* los edificios que están conectados a otros edificios son **triángulos naranjas**

Por ejemplo, puede ver algo como esto:


![](https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_styleExample1.png)


O esto:


![](https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_styleExample2.png)


Este estilo de pintura le permite revisar y encontrar estos problemas rápidamente y ver si deben solucionarse o no. Algunos de estos pueden estar bien, pero deberá verificar si son correctos o no.

Puede verificar el Historial de ese objeto si no está seguro de si es correcto o no, haciendo clic en él y luego 'Ctrl + H' que le mostrará quién editó la función antes y podría dar una razón por la que agregaron un cierto nombre o etiqueta.

En caso de duda, hay que recurrir a los datos y etiquetas existentes.

La validación en línea es otro estilo de pintura de mapas útil. Cuando instale y active la validación en línea, mostrará una serie de errores, si están presentes. Este estilo de pintura de mapa se puede descargar desde [https://github.com/osmlab/appledata/archive/josm_paint_inline_validation.zip](https://github.com/MissingMaps/josm_styles/archive/master.zip)

Se puede encontrar más información en GitHub en [https://github.com/osmlab/appledata/wiki/Inline-Validation-Paint-Style-Information](https://github.com/osmlab/appledata/wiki/Inline-Validation-Paint-Style-Information)

El estilo comprueba lo siguiente:

* Verificación de rotonda-enlace
* Falta la comprobación de la etiqueta de la rotonda
* Dirección de rotonda sospechosa
* Falta un solo sentido en la autopista
* Comprobación de capa faltante
* Comprobación de la conexión edificio-carretera
* BuildingSnapped2 Estilo de edificio
* Verificación del edificio dentro del edificio
* Chequeo de edificio grande
* Vía fluvial conectada al puente
* Comprobación continua de carreteras


## Para más lecturas:

* El wiki de OpenStreetMap, la fuente de todo lo relacionado con OSM: [http://wiki.openstreetmap.org](http://wiki.openstreetmap.org)
* La página wiki de OpenStreetMap sobre validación [https://wiki.openstreetmap.org/wiki/OSM_Tasking_Manager/Validating_data](https://wiki.openstreetmap.org/wiki/OSM_Tasking_Manager/Validating_data)
* Página de validación de LearnOSM [http://learnosm.org/en/coordination/review/](http://learnosm.org/en/coordination/review/)
* Video de capacitación de validación de HOT: [https://www.youtube.com/watch?v=YQ18XfRM6d4](https://www.youtube.com/watch?v=YQ18XfRM6d4)
* Página Aprende a validar mapas que faltan: [https://www.missingmaps.org/validate/](https://www.missingmaps.org/validate/)
