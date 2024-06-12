const { Pool } = require('pg');
const dotenv = require('dotenv');
dotenv.config();

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

const agregarEstudiante = async (nombre, rut, curso, nivel) => {
    try {
        const res = await pool.query({
            text: 'INSERT INTO estudiantes (nombre, rut, curso, nivel) VALUES ($1, $2, $3, $4)',
            values: [nombre, rut, curso, nivel]
        });
        console.log('Estudiante agregado:', res.rowCount);
    } catch (err) {
        console.error('Error agregando estudiante:', err);
    }
};

const consultarEstudiante = async (rut) => {
    try {
        const res = await pool.query({
            text: 'SELECT * FROM estudiantes WHERE rut = $1',
            values: [rut]
        });
        console.log('Estudiante:', res.rows);
    } catch (err) {
        console.error('Error consultando estudiante:', err);
    }
};

const consultarEstudiantes = async () => {
    try {
        const res = await pool.query('SELECT * FROM estudiantes');
        console.log('Estudiantes:', res.rows);
    } catch (err) {
        console.error('Error consultando estudiantes:', err);
    }
};

const actualizarEstudiante = async (nombre, rut, curso, nivel) => {
    try {
        const res = await pool.query({
            text: 'UPDATE estudiantes SET nombre = $1, curso = $2, nivel = $3 WHERE rut = $4',
            values: [nombre, curso, nivel, rut]
        });
        console.log('Estudiante actualizado:', res.rowCount);
    } catch (err) {
        console.error('Error actualizando estudiante:', err);
    }
};

const eliminarEstudiante = async (rut) => {
    try {
        const res = await pool.query({
            text: 'DELETE FROM estudiantes WHERE rut = $1',
            values: [rut]
        });
        console.log('Estudiante eliminado:', res.rowCount);
    } catch (err) {
        console.error('Error eliminando estudiante:', err);
    }
};

const args = process.argv.slice(2);
const comando = args[0];

switch (comando) {
    case 'agregar':
        agregarEstudiante(args[1], args[2], args[3], args[4]);
        break;
    case 'consultar':
        if (args[1]) {
            consultarEstudiante(args[1]);
        } else {
            consultarEstudiantes();
        }
        break;
    case 'actualizar':
        actualizarEstudiante(args[1], args[2], args[3], args[4]);
        break;
    case 'eliminar':
        eliminarEstudiante(args[1]);
        break;
    default:
        console.log('Comando no reconocido');
        break;
}
