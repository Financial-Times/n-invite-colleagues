const OShare = require('o-share');
const Banner = require('o-banner');

const copyButtons = document.querySelectorAll('.invite-colleagues__copy-link-button');

function trackEvent ({ action } = {}) {
	document.body.dispatchEvent(new CustomEvent('oTracking.event', {
		detail: {
			category: 'component',
			action,
			messaging: 'invite-colleagues-banner'
		},
		bubbles: true
	}));
}

function copyLink (el, isBanner) {
	const copyDiv = el.parentNode;
	const copyText = copyDiv.querySelector('.invite-colleagues__copy-link');
	// select text
	copyText.focus();
	copyText.select();

	try {
		// copy text
		document.execCommand('copy');
		copyDiv.classList.add('copy-success'); // adds after element with tick icon and confirmation text
		if (isBanner) {
			trackEvent({ action: 'act' });
		}
	} catch (err) {
	}

}

const shareContainer = document.querySelector('.invite-colleagues__share');

const shouldIinitOshare = function () {
	if (shareContainer.querySelector('[data-o-share--js]')) {
		return false;
	} else {
		return true;
	}
};

function initEmbedded () {
	if(shouldIinitOshare) {
		OShare.init(shareContainer);
	}
	if (copyButtons) {
		copyButtons.forEach( button => button.addEventListener('click', () => copyLink(button), false));
	}
}

function initBanner () {
	if (shouldIinitOshare) {
		OShare.init(shareContainer);
	}
	if (document.querySelector('.invite-colleagues-banner__wrapper')) {
		Banner.init();
		trackEvent({ action: 'view' });
	}
	copyButtons.forEach(button => button.addEventListener('click', () => copyLink(button, true), false));
}

module.exports = {initEmbedded, initBanner};
