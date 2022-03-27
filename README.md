1a. create file .env  for laravel if using laravel

1b. install react at local for dev environment

FOR dev environment (local pc)

2. docker-compose -f docker-compose-dev.yml build --no-cache
3. docker-compose -f docker-compose-dev.yml up -d
change file and check

FOR production environment

2. docker-compose -f docker-compose.yml build --no-cache
3. docker-compose -f docker-compose.yml up -d

create .env 

uncomment mysql,php,nginx

php containerに入る

docker exec -it php sh

以下のコマンドを実行する

php artisan key:generate

php artisan migrate

php artisan migrate:fresh

php artisan cache:clear

php artisan config:clear
