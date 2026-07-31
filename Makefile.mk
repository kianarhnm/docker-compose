.PHONY: up down build logs restart test
up: 
	docker compose up
down:
	docker compose down
build:
	docker compose build
logs: 
	docker compose logs -f
restart:
	docker compose restart
test:
	docker compose exec backend pytest

prodb:
	docker compose -f compose.yml -f compose.prod.yml build
devb:
	docker compose -f compose.yml -f compose.dev.yml build
