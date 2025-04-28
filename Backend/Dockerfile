# Usa una imagen oficial de PHP
FROM php:8.2-cli

# Copia todo tu código
COPY . /var/www/html/

# Cambia de directorio
WORKDIR /var/www/html/

# Exponer el puerto (aunque en Docker no es obligatorio)
EXPOSE 8000

# Comando que usa la variable de entorno de Render
CMD ["sh", "-c", "php -S 0.0.0.0:$PORT"]
