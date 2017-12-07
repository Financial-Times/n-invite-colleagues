import oTracking from 'o-tracking';

import inviteColleagues from '../../main';

inviteColleagues.initEmbedded();
inviteColleagues.initBanner({ flags: { b2bUpsell: true } });

document.documentElement.classList.add('js', 'enhanced');

oTracking.init({
	server: 'https://spoor-api.ft.com/px.gif',
	context: {
		product: 'ft.com'
	},
	user: {
		ft_session: oTracking.utils.getValueFromCookie(/FTSession=([^;]+)/)
	}
});
