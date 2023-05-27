run:
	docker-compose up -d

init:
	yarn --cwd ./server
	docker-compose build

watch:
	yarn --cwd ./server watch

build:
	yarn --cwd ./server build

shell:
	docker exec -it legacy-server /bin/sh
