REGISTRY ?= registry.ybcsystems.com/ybcteam
SERVICE = nbns-ui

GIT_BRANCH ?= $(shell git rev-parse --abbrev-ref HEAD)
GIT_SUMMARY := $(shell git describe --tags --dirty --always)

run:
	npm run server & npm start

docker-run: docker-build
	docker run -p 8080:80 $(REGISTRY)/nbns-ui

docker-build:
	docker build -t $(REGISTRY)/$(SERVICE):$(GIT_BRANCH)-$(GIT_SUMMARY)  .

docker-push:
	docker push $(REGISTRY)/$(SERVICE):$(GIT_BRANCH)-$(GIT_SUMMARY)

docker-tag-latest:
	docker tag $(REGISTRY)/$(SERVICE):$(GIT_BRANCH)-$(GIT_SUMMARY) $(REGISTRY)/$(SERVICE):latest

docker-push-latest:
	docker push $(REGISTRY)/$(SERVICE):latest