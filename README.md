# Examen 3: Servicio Telemático de Wordle en Contenedores 🚀

Este proyecto consiste en el despliegue de una aplicación web interactiva (Juego Wordle) utilizando una arquitectura de microservicios basada en contenedores Docker, desplegada sobre infraestructura de AWS.

## 📋 Requisitos del Proyecto
- **Servicio:** Servidor Web (Nginx).
- **Contenedores:** Docker con Dockerfile optimizado.
- **Infraestructura:** AWS EC2 (Ubuntu Server).
- **Repositorio:** GitHub para control de versiones y trazabilidad.

## 🛠️ Estructura del Proyecto
- `index.html`: Estructura de la aplicación.
- `style.css`: Estilos visuales del juego.
- `script.js`: Lógica funcional y validaciones.
- `Dockerfile`: Instrucciones de construcción de la imagen de producción.

## 🚀 Guía de Despliegue en Producción

### Paso 1: Clonar el Repositorio
En la terminal de su instancia de AWS, ejecute:
```bash
git clone [https://github.com/MateoChavarria/examen-wordle.git]
cd [examen-wordle]