document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario');
    const nombreInput = document.getElementById('nombre');
    const correoInput = document.getElementById('correo');
    const contrasenaInput = document.getElementById('contrasena');
    const puestoInput = document.getElementById('puesto');
    const divEmpleados = document.querySelector('.div-empleados');
    let listaEmpleados = [];

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();
        const nombre = nombreInput.value.trim();
        const correo = correoInput.value.trim();
        const contrasena = contrasenaInput.value;
        const puesto = puestoInput.value;

        if (nombre === '' || correo === '' || contrasena === '' || puesto === '') {
            alert("😒 Es obligatorio diligenciar todos los campos 😒");
            return;
        }

        agregarEmpleado(nombre, correo, puesto);
        formulario.reset();
    });

    function agregarEmpleado(nombre, correo, puesto) {
        const objEmpleado = {
            id: Date.now(),
            nombre: nombre,
            correo: correo,
            puesto: puesto
        };
        listaEmpleados.push(objEmpleado);
        mostrarEmpleados();
    }

    function eliminarEmpleado(id) {
        listaEmpleados = listaEmpleados.filter(empleado => empleado.id !== id);
        mostrarEmpleados();
    }

    function mostrarEmpleados() {
        limpiarHTML();
        listaEmpleados.forEach(empleado => {
            const { id, nombre, correo, puesto } = empleado;
            const parrafo = document.createElement('p');
            parrafo.textContent = `${id} - ${nombre} - ${correo} - ${puesto}`;

            const eliminarBoton = document.createElement('button');
            eliminarBoton.textContent = 'Eliminar';
            eliminarBoton.classList.add('btn', 'btn-eliminar');
            eliminarBoton.addEventListener('click', () => eliminarEmpleado(id));
            parrafo.appendChild(eliminarBoton);

            const hr = document.createElement('hr');
            divEmpleados.appendChild(parrafo);
            divEmpleados.appendChild(hr);
        });
    }

    function limpiarHTML() {
        while (divEmpleados.firstChild) {
            divEmpleados.removeChild(divEmpleados.firstChild);
        }
    }
});
