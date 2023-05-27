run:
	docker-compose up -d

init:
	cd server && yarn && cd ../
	docker-compose build

shell:
	docker exec -it legacy-server /bin/sh
