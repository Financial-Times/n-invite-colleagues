import oTracking from 'o-tracking';

import '../../main';

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
