service	:= french-press-calculator
tag	?= $(shell git describe)

.PHONY: docker_build
docker_build:
	docker build -t $(service):$(tag) .

.PHONY: docker_run
docker_run:
	docker run --rm $(service):$(tag)

.PHONY: start
start:
	npm start

.PHONY: test
test:
	npm test


