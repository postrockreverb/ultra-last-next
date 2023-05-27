FROM php:8.2-fpm-alpine

WORKDIR /var/www/html

# php deps
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
ENV COMPOSER_ALLOW_SUPERUSER=1

COPY composer.json  ./
COPY composer.lock ./
RUN composer install

# node deps
RUN apk update && apk add nodejs npm
RUN npm install --global yarn
COPY static/package.json ./static/
COPY static/yarn.lock ./static/
RUN yarn --cwd static
