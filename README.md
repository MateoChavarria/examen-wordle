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

## 1. Clonar el repositorio

```bash
git clone https://github.com/MateoChavarria/examen-wordle
```

---

## 2. Entrar al proyecto

```bash
cd examen-wordle
```

---

## 3. Instalar Docker (si no está instalado)

```bash
sudo apt update
sudo apt install docker-compose -y
```

---

## 4. Construir la imagen Docker

```bash
sudo docker build -t wordle-app .
```

---

## 5. Ejecutar el contenedor

```bash
sudo docker run -d -p 80:5000 wordle-app
```

---

# 🌐 Acceso al Servicio

Abrir en el navegador:

```text
http://IP_PUBLICA
```

---

# 🔐 Configuración AWS EC2 si estas en aws

Abrir el puerto 80 en el Security Group:

| Tipo | Puerto |
|---|---|
| HTTP | 80 |

---

# 👨‍💻 Autor

Mateo Chavarría Cano
