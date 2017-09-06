function copyLink () {
	const copyText = document.querySelector('.invite-colleagues__copy-link');
	const copyDiv = document.querySelector('.invite-colleagues__copy-input');

	// select text
	copyText.focus();
	copyText.select();

	try {
		// copy text
		document.execCommand('copy');
		copyDiv.classList.add('invite-colleagues__copy-input--success'); // adds after element with tick icon and confirmation text
		copyText.classList.add('invite-colleagues__copy-input--success'); // adds green border
	} catch (err) {
		copyDiv.classList.add('invite-colleagues__copy-input--fail'); // adds after element with cross icon and failure text
		copyText.classList.add('invite-colleagues__copy-input--fail'); // adds red border
	}

}

const copyButton = document.querySelector('.invite-colleagues__copy-link-button');
copyButton.addEventListener('click', copyLink, false);
