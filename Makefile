login:
	docker login -u quickybooster
	dckr_pat_Hy0iI6blEcQUaITLE76wHqMG1Kg
up:
	docker compose up -d

push:
	docker push quickybooster/pm2-demo
all: up push