import oTracking from 'o-tracking';

import inviteColleagues from '../../main';

inviteColleagues.initEmbedded();
inviteColleagues.initBanner();

document.body.classList.add('js', 'enhanced');

oTracking.init({
	server: 'https://spoor-api.ft.com/px.gif',
	context: {
		product: 'ft.com'
	},
	user: {
		ft_session: oTracking.utils.getValueFromCookie(/FTSession=([^;]+)/)
	}
});
