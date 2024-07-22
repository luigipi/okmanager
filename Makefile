setup:
	@make build
	@make up
build:
	docker compose build --no-cache --force-rm
stop:
	docker compose stop
start:
	@make up 
	docker exec -it app sh -c 'cd /var/www/html && npm run serve'
up:
	docker compose up -d
