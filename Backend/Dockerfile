# 1) Usa la imagen oficial de PHP con Apache
FROM php:8.2-apache

# 2) Instala la extensión mysqli
RUN docker-php-ext-install mysqli

# 3) Copia todo tu backend a la carpeta que Apache sirve
COPY . /var/www/html/

# 4) Asegúrate de que Apache escuche en el puerto 80
EXPOSE 80

# 5) El comando por defecto "apache2-foreground" ya está en la imagen
#    por lo que no necesitas CMD explícito.
