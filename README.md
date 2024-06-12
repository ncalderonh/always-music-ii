# Always Music

## Descripción
La escuela de música Always Music es reconocida por graduar a grandes músicos. Este proyecto tiene como objetivo desarrollar una aplicación en Node.js que gestione los estudiantes mediante consultas a una base de datos PostgreSQL. La aplicación permite agregar, consultar, actualizar y eliminar estudiantes.

## Requerimientos
1. **Agregar un nuevo estudiante.**
2. **Consultar los estudiantes registrados.**
3. **Consultar estudiante por RUT.**
4. **Actualizar la información de un estudiante.**
5. **Eliminar el registro de un estudiante.**

## Configuración

### Variables de Entorno
Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```env
DB_USER=tu_usuario
DB_HOST=tu_host
DB_NAME=tu_base_de_datos
DB_PASSWORD=tu_contraseña
DB_PORT=5432
```

### Instalación
Instala las dependencias necesarias:

```bash
npm install
```

### Uso
Para ejecutar la aplicación, usa los siguientes comandos:

- **Agregar un estudiante**:
  ```bash
  node index.js agregar "Nombre" "RUT" "Curso" "Nivel"
  ```

- **Consultar todos los estudiantes**:
  ```bash
  node index.js consultar
  ```

- **Consultar un estudiante por RUT**:
  ```bash
  node index.js consultar "RUT"
  ```

- **Actualizar un estudiante**:
  ```bash
  node index.js actualizar "Nombre" "RUT" "Curso" "Nivel"
  ```

- **Eliminar un estudiante**:
  ```bash
  node index.js eliminar "RUT"
  ```

### Notas
- Asegúrate de que tu base de datos PostgreSQL esté configurada y en funcionamiento.
- Las consultas están parametrizadas para prevenir inyecciones SQL.
- Los errores son capturados y mostrados en la consola para facilitar el diagnóstico de problemas.
```

Este archivo `README.md` proporciona una guía clara sobre cómo configurar y usar la aplicación. Además, explica cómo manejar las variables de entorno necesarias para conectar la base de datos PostgreSQL.
