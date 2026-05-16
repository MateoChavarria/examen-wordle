# Usamos Nginx Alpine por ser liviano y seguro para producción
FROM nginx:alpine

# Copiamos los archivos del juego al directorio donde Nginx sirve contenido
COPY . /usr/share/nginx/html/

# Exponemos el puerto 80 para tráfico web
EXPOSE 80