run:
	docker-compose up -d

restart-nginx:
	docker restart legacy-nginx-api
rn: restart-nginx

init:
	yarn --cwd ./server
	docker-compose build

watch:
	yarn --cwd ./server/static watch
w: watch

build:
	yarn --cwd ./server/static build
b: build

shell:
	docker exec -it legacy-server /bin/sh
s: shell