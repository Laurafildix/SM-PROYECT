                                               ✔👜SM (SABANETA MULTIFACÉTICA)🎨🦺

<div>
  <p style = 'text-align:center;'>
  <img src = "https://i.postimg.cc/R0XwVYFh/SM.png" 
  <p/>
</div>
 __INSIGNIAS__
- Apoyo
- Innovación
- Emprendimiento
- Comunidad
-Compromiso

 __ÍNDICE__

1. Descripción del Proyecto
2. Estado del Proyecto
3. Demostración de Funciones y Aplicaciones
4. Acceso al Proyecto
5. Tecnologías Utilizadas
6. Personas Contribuyentes
7. Personas Desarrolladoras del Proyecto
  

1. __Descripción del Proyecto__

El proyecto Sabaneta Multifacética tiene como objetivo principal simplificar y agilizar la búsqueda y contratación de empleos en el municipio de Sabaneta. Este proyecto contribuirá al fortalecimiento de la economía local y al estímulo del espíritu emprendedor en Sabaneta. Deseamos que cada individuo, desde los emprendedores locales hasta los jóvenes que están por iniciar su trayectoria profesional, encuentren oportunidades laborales de manera más accesible y eficiente.

A través de nuestro proyecto, aspiramos a crear un entorno en el que las personas puedan alcanzar sus metas laborales y contribuir al crecimiento sostenible de Sabaneta. Nuestra visión es ser la principal plataforma para la búsqueda de trabajos y servicios, respaldada por nuestros sólidos valores corporativos. Nuestro enfoque está en la equidad, la transparencia y la responsabilidad. Visualizamos un Sabaneta donde cada residente tenga igualdad de oportunidades en el mundo laboral y emprendedor.
Somos más que un sitio web, somos una comunidad comprometida con la construcción de un municipio más próspero y unido. Nuestra meta es crear un futuro de equidad y oportunidades para todos en Sabaneta.

2. __Estado del Proyecto__

El proyecto se encuentra en desarrollo activo. Estamos trabajando arduamente para implementar todas las funcionalidades necesarias y asegurarnos de que el proyecto cumpla con sus objetivos. A medida que avanzamos, mantenemos registro de novedades y cambios realizados.

3. __Demostración de Funciones y Aplicaciones__

__Muestra de algunas funciones y aplicaciones del proyecto:_

- Búsqueda de Empleo: Los usuarios pueden buscar empleos en Sabaneta de manera rápida y sencilla a través de nuestra plataforma.

- Publicación de Ofertas Laborales: Los trabajadores pueden publicar sus ofertas de empleo, llegando a un público local y calificado.

- Perfil de Usuario: Los usuarios pueden crear perfiles que resalten sus habilidades y experiencia.  Además, que para el contratador será útil tener una vista física por medio de una foto de perfil del trabajador Pueden agregar además sus años de experiencia y lo que cobrarían por su trabajo por un tiempo establecido. 

- Notificaciones Personalizadas: Los usuarios pueden recibir notificaciones de trabajos que se ajusten a sus preferencias.
  
-Validar campos de registro y mostrar alerta:*

Para validar que no se deje ningún campo de registro vacío y mostrar una alerta en caso de que falten datos, puedes modificar la función `agregarEmpleado` en `MISFUNCIONES.js` de la siguiente manera:

javascript
function agregarEmpleado(nombre, correo, contrasena, puesto) {
    if (nombre === '' || correo === '' || contrasena === '' || puesto === '') {
        alert("😒 Es obligatorio diligenciar todos los campos 😒");
        return;
    }

    const objEmpleado = {
        id: Date.now(),
        nombre: nombre,
        correo: correo,
        contrasena: contrasena,
        puesto: puesto
    };
    listaEmpleados.push(objEmpleado);
    localStorage.setItem('empleados', JSON.stringify(listaEmpleados)); // Guarda la lista actualizada en el almacenamiento local
    mostrarEmpleados(); // Muestra los empleados después de agregar uno nuevo
    formulario.reset(); // Limpia el formulario después de agregar un empleado
}


Este código verificará si alguno de los campos está vacío y mostrará una alerta en caso de que falte algún dato al intentar agregar un empleado.

4. __Acceso al Proyecto__

 Se podrá acceder al proyecto en nuestra plataforma en línea (cuando la tengamos ya subida en la nube y con su respectivo dominio) y comenzar a explorar las oportunidades laborales disponibles en Sabaneta y así mismo, presentar tu información para conseguir una contratación.

 5. __Tecnologías Utilizadas y procesos de funcionamiento__

- JavaScript: JavaScript es un lenguaje de programación fundamental para el desarrollo web. Lo utilizamos para crear interacciones dinámicas en la interfaz de usuario, realizar validaciones de formularios y mejorar la experiencia del usuario. Ademas para crear diversas funciones.
 - CSS: utilizamos para dar estilo y diseño a nuestro sitio web. Nos permite definir la presentación visual de la plataforma, incluyendo colores (Naranja, Verde, blanco y negro para titulos y texto), fuentes como __(Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif)__,__(Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif)__ que son armoniosas a la vista del usurario, tamaños y diseños. Gracias a CSS, hemos podido crear un diseño atractivo y fácil de navegar para nuestros usuarios. 
- HTML: Es el lenguaje de marcado que utilizamos para estructurar y organizar el contenido de nuestro sitio web. A través de etiquetas HTMl creamos la estructura de las páginas, desde encabezados y párrafos hasta formularios y enlaces. Asi nos aseguramos de que la información se presente de manera coherente y accesible. Nuestra pagina tiene el diseño tradicional web, con barra deslizante y un menu funcional el cual al presionar alguno de nuestros subtitulos (enlaces), el navegador llevará al usuario directamente a la sección correspondiente de la página sin abrir una ventana nueva.  Todo esto se hizo agregando IDs a los Subtítulos:
Utilizamos el atributo __ID__(id) en los elementos HTML para asignar identificadores únicos a tus subtítulos. Estos identificadores deben ser únicos en la página.
        1) Primero, nos aseguramos de tener un contenedor con un ID específico en usuarios.html donde mostraremos los empleados. Por ejemplo, hemos creado un div con el ID lista-empleados
        2)Luego se crearon enlaces de hipertexto. En el atributo href de estos enlaces, especifica el valor del id del subtítulo que deseabamos vincular. El símbolo # se coloca antes del id en el lado izquierdo.
- Repositorios en GitHub: Utilizamos GitHub como plataforma de control de versiones para gestionar y colaborar en el desarrollo de nuestro proyecto. Los repositorios de GitHub nos permiten dar un seguimiento a los cambios, gestionar problemas, realizar colaboraciones, llevar registros de trabajo personal y asegurarnos de que el código fuente esté bien organizado y documentado. Nos permite conectar partes del proyecto y trabajar remotamente.
- SCRUM TEAM: Un Scrum Team está compuesto por un Product Owner, el equipo de desarrollo y un Scrum Master, lo importante es que un Scrum Team siempre tenga a los tres roles representados, y que, en todo momento, todo el Scrum Team sepa quien está desempeñando qué rol, Los Scrum Teams están diseñados para ser multifuncionales y auto-organizados. Ellos deciden cómo realizar su trabajo, y tienen todas las competencias necesarias para ello dentro del equipo.
  
 6. __Personas Contribuyentes__

Un gran agradecimiento a los profesores del CEOGET que han contribuido a este proyecto con sus ideas, sugerencias y apoyo continuo. Este proyecto no sería posible sin su participación activa y retroalimentaciones.

7. __Personas Desarrolladoras del Proyecto__

-Juan Carlos Cardona https://github.com/JCCA05 (Front)
-Laura Correa Giraldo https://github.com/Laurafildix (Owner, front)
-Santiago Garcés https://github.com/SantiGT69 (Back)
-Mariana Herrera https://github.com/marianah42 (Marketing, redes)
-Jefferson Lozano https://github.com/00Jefri (Back)
-Daniel Agudelo https://github.com/DanielFelipeAgMo

