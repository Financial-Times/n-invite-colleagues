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

function initEmbedded () {
	if (copyButtons) {
		copyButtons.forEach( button => button.addEventListener('click', () => copyLink(button), false));
	}
}

function initBanner () {
	// Note: banner is constructed by o-banner via the markup so no need to construct again here
	copyButtons.forEach(button => button.addEventListener('click', () => copyLink(button, true), false));
	if (document.querySelector('.invite-colleagues-banner__wrapper')) {
		trackEvent({ action: 'view' });
	}
}

module.exports = {initEmbedded, initBanner};
