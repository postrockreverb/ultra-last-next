init:
	docker-compose up -d --build --remove-orphans
	docker exec ultra-last-next-php composer install
	yarn --cwd ./server/static
	make build

w: watch
watch:
	yarn --cwd ./server/static watch

b: build
build: build-translations build-static

bt: build-translations
build-translations:
	cd ./server && php ./Translations/build.php

build-static:
	yarn --cwd ./server/static build

rn: restart-nginx
restart-nginx:
	docker restart ultra-last-next-nginx

s: shell
shell:
	docker exec -it ultra-last-next-php /bin/sh
