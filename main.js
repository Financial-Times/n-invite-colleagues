const copyButton = document.querySelector('.invite-colleagues__copy-link-button');

function copyLink (event) {

	const copyText = document.querySelector('.invite-colleagues__copy-link-text');

	// select text
	copyText.focus();
	copyText.select();

	try {
		// copy text
		document.execCommand('copy');
	} catch (err) {}

}

copyButton.addEventListener('click', copyLink, false);

module.exports = copyLink;
