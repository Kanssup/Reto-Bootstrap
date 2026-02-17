// 1. Los datos: Un solo lugar para toda la información
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

// Carga inicial
renderLista();