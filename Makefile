ESLINT    = node_modules/eslint/bin/eslint.js
STYLELINT = node_modules/stylelint/dist/cli.js

CSS_FILES = $(shell find client -type f -name '*.css')
JS_FILES  = $(shell find client -type f -name '*.js')

lint-css:
	$(STYLELINT) $(CSS_FILES)

lint-js:
	$(ESLINT) $(JS_FILES)

fix-js:
	$(ESLINT) $(JS_FILES) --fix
