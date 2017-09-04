import oTracking from 'o-tracking';

import DesktopAppBanner from '../../main.js';

document.documentElement.classList.add('js', 'enhanced');

new DesktopAppBanner();

oTracking.init({
    server: 'https://spoor-api.ft.com/px.gif',
    context: {
        product: 'ft.com'
    },
    user: {
        ft_session: oTracking.utils.getValueFromCookie(/FTSession=([^;]+)/)
    }
});
