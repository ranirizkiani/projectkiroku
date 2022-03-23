FROM php:7.3-fpm-alpine

RUN apk add libzip-dev mysql
RUN docker-php-ext-configure zip --with-libzip
RUN docker-php-ext-install pdo pdo_mysql zip mysqli
RUN curl -sS https://getcomposer.org/installer | php && mv composer.phar /usr/local/bin/composer

COPY ./web/php.ini /usr/local/etc/php/
COPY ./web/entrypoint-prod.sh /var/www/laravel/web/entrypoint-prod.sh
RUN chmod +x /var/www/laravel/web/entrypoint-prod.sh

COPY ./web/ /var/www/laravel
WORKDIR /var/www/laravel
RUN chmod -R 775 storage
ENV COMPOSER_ALLOW_SUPERUSER 1
ENV COMPOSER_NO_INTERACTION 1
RUN composer install --no-interaction --no-scripts --no-autoloader -d /var/www/laravel && composer dump-autoload --optimize


RUN php artisan key:generate
WORKDIR /var/www/
RUN chown -R www-data:www-data laravel
