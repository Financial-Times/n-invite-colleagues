const copyButton = document.querySelector('.invite-colleagues__copy-link-button');

function copyLink () {

	const copyText = document.querySelector('.invite-colleagues__copy-link-text');

	// select text
	copyText.focus();
	copyText.select();

	try {
		// copy text
		document.execCommand('copy');
	} catch (err) {}

}
