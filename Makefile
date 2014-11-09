PATH := ./node_modules/.bin:${PATH}

.PHONY : build clean test prepublish

build:
	coffee -o lib/ -c src/

clean:
	rm -rf lib/

test:
	echo "TODO: populate this with the test harness of your choice."

prepublish: build
