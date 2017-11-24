const Banner = require ('o-banner');

function copyLink (el) {
	const copyDiv = el.parentNode;
	const copyText = copyDiv.querySelector('.invite-colleagues__copy-link');
	// select text
	copyText.focus();
	copyText.select();

	try {
		// copy text
		document.execCommand('copy');
		copyDiv.classList.add('copy-success'); // adds after element with tick icon and confirmation text
	} catch (err) {
	}

}

function constructBanner () {
	if (document.querySelector('invite-colleagues-banner')) {
		Banner.init();
		document.removeEventListener('o.DOMContentLoaded', constructBanner);
	}
}

function init () {
	const copyButtons = document.querySelectorAll('.invite-colleagues__copy-link-button');

	if (copyButtons) {
		copyButtons.forEach( button => button.addEventListener('click', () => copyLink(button), false));
	}

	document.addEventListener('o.DOMContentLoaded', constructBanner);
}


module.exports = {init};
