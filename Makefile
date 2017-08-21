.PHONY: lint test

lint:
	./node_modules/.bin/jshint *.js lib/*.js

test: lint
	npm test
