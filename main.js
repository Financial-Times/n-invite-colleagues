function copyLink () {

	const copyText = document.querySelector('.invite-colleagues__copy-link');
	const copyDiv = document.querySelector('.invite-colleagues__copy-outer');

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

function init () {
	const copyButton = document.querySelector('.invite-colleagues__copy-link-button');

	if (copyButton) {
		copyButton.addEventListener('click', copyLink, false);
	}
}

module.exports = {init};
