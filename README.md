# Uso de mikro-orm

El siguiente repositorio es un ejemplo de integración y uso de Mikro-orm con NestJS.

- Configuración de Mikro-orm con NestJS
- Uso de migraciones
- Uso de seeders
- Creación de factories para ejecutar seeders con Faker
- Creación de modelos 
- Creación de repositorios, servicios y controladores   

<br>

### Instrucciones
1. Instalar dependencias

    ``` bash
        npm i
    ```
2. Crear la base de datos en postgres y especificar las credenciales en las variables de entorno(.env)

3. Ejecutar en la BD el siguiente query para habilitar el uso UUID como primary key.

    ```bash
        CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
    ```

4. Ejecutar la migración

    ```bash
        npx mikro-orm migration:up
    ```
5. Ejecutar seeds

    ```bash
        npx mikro-orm seeder:run
    ```
6. Levantar servidor local

    ```bash
        npm run start:dev
    ```