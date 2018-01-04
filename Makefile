node_modules/@financial-times/n-gage/index.mk:
	npm install --no-save --no-package-lock @financial-times/n-gage
	touch $@

-include node_modules/@financial-times/n-gage/index.mk

demo-build: link-templates
	webpack --config demos/webpack.config.js
	@$(DONE)

demo: demo-build
	@node demos/app

a11y: demo-build
	@node .pa11yci.js
	@PA11Y=true node demos/app
	@$(DONE)

unit-test:
	karma start

test: verify unit-test
	make a11y

link-templates:
	echo "Creating symlink to mimic bower_component setup /templates -> public/n-invite-colleagues"
	mkdir -p "$(CURDIR)/public/n-invite-colleagues"
	ln -sf "$(CURDIR)/templates" "$(CURDIR)/public/n-invite-colleagues/"
