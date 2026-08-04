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

prod:
	docker build -t kianarhnm/backend:1.0.0 -f bckend/Dockerfile.prod ./bckend
devb:
	docker build -t kianarhnm/frontend:1.0.0 -f front/Dockerfile.prod ./front
