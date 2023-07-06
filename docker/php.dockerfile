FROM php:8.2-fpm-alpine

WORKDIR /var/www/html

# php deps
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
ENV COMPOSER_ALLOW_SUPERUSER=1