start:
	npm run dev

test:
	npm run test

lint:
	npx eslint .

coverage:
	npm run test -- --coverage

build:
	npm run build

type-check:
	npm run type-check

install:
	npm install

clean:
	rm -rf .next node_modules coverage

dev: start

ci: lint type-check test build

.PHONY: start test lint coverage build type-check install clean dev ci 