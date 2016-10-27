CSS_FILES = client/**/*.css

lint-css:
	node_modules/stylelint/dist/cli.js $(CSS_FILES)
