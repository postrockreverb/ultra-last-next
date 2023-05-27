run:
	docker-compose up -d

init:
	yarn --cwd ./server
	docker-compose build

watch:
	yarn --cwd ./server/static watch

build:
	yarn --cwd ./server/static build

shell:
	docker exec -it legacy-server /bin/sh
