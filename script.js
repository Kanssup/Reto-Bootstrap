
const horarios = [
    { cod: "0413", nombre: "Programación Web", gpo: "Gpo1", dia: "Martes", hora: 10, aula: "E201", color: "danger" },
    { cod: "0413", nombre: "Programación Web", gpo: "Gpo1", dia: "Jueves", hora: 15, aula: "E201", color: "danger" },
    { cod: "0402", nombre: "Introducción a Ingeniería", gpo: "Gpo3", dia: "Lunes", hora: 8, aula: "D104", color: "info" },
    { cod: "0402", nombre: "Introducción a Ingeniería", gpo: "Gpo3", dia: "Miércoles", hora: 8, aula: "D104", color: "info" },
    { cod: "0402", nombre: "Introducción a Ingeniería", gpo: "Gpo4", dia: "Lunes", hora: 10, aula: "E201", color: "success" },
    { cod: "0402", nombre: "Introducción a Ingeniería", gpo: "Gpo5", dia: "Jueves", hora: 8, aula: "E201", color: "success" },
    { cod: "0402", nombre: "Introducción a Ingeniería", gpo: "Gpo5", dia: "Lunes", hora: 15, aula: "D104", color: "primary" },
    { cod: "0402", nombre: "Introducción a Ingeniería", gpo: "Gpo5", dia: "Jueves", hora: 13, aula: "D104", color: "primary" },
    { cod: "0402", nombre: "Introducción a Ingeniería", gpo: "Gpo6", dia: "Martes", hora: 15, aula: "D104", color: "secondary" },
    { cod: "0402", nombre: "Introducción a Ingeniería", gpo: "Gpo6", dia: "Miércoles", hora: 13, aula: "D104", color: "secondary" }
];

const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
let vistaActual = 'lista'; // Estado inicial

const btnToggle = document.querySelector('.btn-outline-dark');
const contenedor = document.querySelector('section');

function renderLista() {
    let html = `
        <h5 class="text-secondary mb-3">Reporte Oficial de Horarios</h5>
        <div class="table-responsive shadow-lg rounded-3">
            <table class="table table-striped table-hover align-middle border">
                <thead class="table-dark">
                    <tr>
                        <th>Código</th><th>Asignatura</th><th>Grupo</th><th>Día</th><th>Horario</th><th>Aula</th>
                    </tr>
                </thead>
                <tbody>
                    ${horarios.map(h => `
                        <tr>
                            <td>${h.cod}</td>
                            <td class="fw-bold">${h.nombre}</td>
                            <td><span class="badge text-bg-${h.color}">${h.gpo}</span></td>
                            <td>${h.dia}</td>
                            <td>${h.hora}:00 - ${h.hora + 1}:40</td>
                            <td><span class="badge text-bg-dark">${h.aula}</span></td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>`;
    contenedor.innerHTML = html;
}

function renderCalendario() {
    let html = `
        <h5 class="text-secondary mb-3">Calendario de Clases</h5>
        <div class="table-responsive shadow-lg rounded-3">
            <table class="table table-bordered text-center align-middle bg-white">
                <thead class="table-dark">
                    <tr>
                        <th style="width: 100px;">Hora</th>
                        ${dias.map(d => `<th>${d}</th>`).join('')}
                    </tr>
                </thead>
                <tbody>`;

    // Eje Y: Bucle de horas (8 a 20)
    for (let h = 8; h <= 20; h++) {
        html += `<tr><td class="fw-bold bg-light">${h}:00</td>`;
        
        dias.forEach(dia => {
            const clase = horarios.find(item => item.dia === dia && item.hora === h);
            if (clase) {
                html += `
                    <td class="table-${clase.color} p-2 shadow-sm">
                        <div class="small fw-bold text-uppercase">${clase.nombre}</div>
                        <div class="badge text-bg-dark">${clase.aula}</div>
                    </td>`;
            } else {
                // Celda Vacía
                html += `<td class="text-muted small" style="opacity: 0.3;">-</td>`;
            }
        });
        html += `</tr>`;
    }
    html += `</tbody></table></div>`;
    contenedor.innerHTML = html;
}


btnToggle.addEventListener('click', (e) => {
    e.preventDefault();
    if (vistaActual === 'lista') {
        renderCalendario();
        vistaActual = 'calendario';
        btnToggle.textContent = "Ver Lista";
    } else {
        renderLista();
        vistaActual = 'lista';
        btnToggle.textContent = "Vista Lista | Calendario";
    }
});

renderLista();