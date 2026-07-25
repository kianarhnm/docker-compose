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
