/* eslint no-console:0 */
'use strict';

const chalk = require('chalk');
const errorHighlight = chalk.bold.red;
const highlight = chalk.bold.green;

const express = require('@financial-times/n-internal-tool');

const app = module.exports = express({
	name: 'public',
	systemCode: 'n-desktop-app-banner-demo',
	withFlags: false,
	withHandlebars: true,
	withNavigation: false,
	withAnonMiddleware: false,
	hasHeadCss: false,
	viewsDirectory: '/demos/templates',
	partialsDirectory: process.cwd(),
	directory: process.cwd(),
	demo: true,
	s3o: false
});

app.get('/', (req, res) => {
	res.render('index', { layout: 'wrapper', title: 'Demo', flags: { b2bUpsellBanner: true } });
});

app.post('/email-app-links', (req, res) => {
	res.json({});
});

const PORT = process.env.PORT || 5005;

const listen = app.listen(PORT);

function runPa11yTests () {
	const spawn = require('child_process').spawn;
	const pa11y = spawn('pa11y-ci');

	pa11y.stdout.on('data', (data) => {
		console.log(highlight(`${data}`)); //eslint-disable-line
	});

	pa11y.stderr.on('data', (error) => {
		console.log(errorHighlight(`${error}`)); //eslint-disable-line
	});

	pa11y.on('close', (code) => {
		process.exit(code);
	});
}

listen
	.then(() => console.log(`demo running on port ${PORT}`))
	.catch(error => console.log(error));

if (process.env.PA11Y === 'true') {
	listen.then(runPa11yTests);
}
