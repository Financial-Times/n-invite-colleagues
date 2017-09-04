n-desktop-app-banner [![Circle CI](https://circleci.com/gh/Financial-Times/n-desktop-app-banner/tree/master.svg?style=svg)](https://circleci.com/gh/Financial-Times/n-desktop-app-banner/tree/master)
=================

Bower component/Node module for the desktop app banner shown to new users.

----

## Usage

### Template

```
{{> n-invite-colleagues/templates/index shortName=[xxx] longName=[xxx] }}
```

### CSS

```
@import 'n-invite-colleagues/main';
```

### JS

```
import DesktopAppBanner from '@financial-times/n-desktop-app-banner';

new DesktopAppBanner();
```

## Demo

To run the demo, run `make init` followd by `make demo`. You should now be able to access this at <http://local.ft.com:5005>
