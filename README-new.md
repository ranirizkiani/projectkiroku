1a. create file .env  for laravel if using laravel

1b. install react at local for dev environment

1. docker-compose -f docker-compose.yml build --no-cache
2. docker-compose -f docker-compose.yml up -d

create .env in web/

uncomment mysql,php,nginx

php containerに入る

```
docker-compose exec php sh
```

以下のコマンドを実行する

```
php artisan key:generate

php artisan migrate:fresh

php artisan cache:clear

php artisan config:clear
```