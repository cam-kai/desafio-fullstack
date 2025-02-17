# Desafío Full Stack con Spring Boot y React

## Descripción del Desafío
Este desafío consiste en desarrollar una aplicación full stack que incluye:

- **Backend**: Una API REST desarrollada en **Spring Boot** con Java, que proporciona los servicios necesarios para la gestión de datos y la lógica de negocio.
- **Frontend**: Una aplicación en **React**, que consume los endpoints de la API y brinda una interfaz interactiva para el usuario.
- **Orquestación con Docker Compose**: Se utilizará **Docker Compose** para gestionar los servicios del backend y frontend, asegurando una ejecución rápida y homogénea en cualquier entorno.

## Objetivos del Desafío
1. **Desplegar una API REST** con Spring Boot que exponga endpoints para gestionar los recursos de la aplicación.
2. **Construir un frontend en React** que consuma los servicios del backend y presente una interfaz amigable.
3. **Configurar Docker Compose** para levantar ambos servicios de manera sencilla, permitiendo su ejecución con un solo comando.

## Estructura del Proyecto
El proyecto está organizado en dos carpetas principales:

```
/fullstack-challenge
│── /backend (Spring Boot API)
│── /frontend (React App)
│── docker-compose.yml
│── INSTRUCTIONS.md
```

### Backend - Spring Boot
Dentro de la carpeta `backend`, se encuentra el código del servidor desarrollado en **Java con Spring Boot**. Este servicio expone endpoints **REST** y maneja la lógica de negocio.
La **API** utiliza H2 para base de datos en memoria y JPA para conectarse a ella.


### Frontend - React
La aplicación en **React** se encuentra en la carpeta `frontend`. Este proyecto se creó utilizando **Vite** y consume la API de Spring Boot.


## Orquestación con Docker Compose
Para simplificar el despliegue del backend y frontend, se usa **Docker Compose**. Este archivo define ambos servicios y gestiona su comunicación.


## Cómo Ejecutar el Proyecto
Para levantar ambos servicios, ejecutar:

```bash
docker-compose up --build
```

Esto creará y ejecutará los contenedores del **backend en Spring Boot** y del **frontend en React**, permitiendo acceder a:

- **API Backend**: `http://localhost:8091`
- **Frontend**: `http://localhost:5120`

para consultar la documentación de la API se debe acceder a:

- **Swager**: `http://localhost:8091/swagger-ui/index.html`

para cancelar la ejecución del docker-compose se presiona "Ctrl+C" dos veces.

## Conclusión
Este desafío full stack implica el desarrollo de un **backend en Spring Boot** y un **frontend en React**, con la ventaja de que todo el ecosistema se ejecuta fácilmente con **Docker Compose**. Esto garantiza un entorno de desarrollo y despliegue uniforme, facilitando la integración y pruebas del sistema.
