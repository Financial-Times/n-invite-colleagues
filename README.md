n-invite-colleagues [![Circle CI](https://circleci.com/gh/Financial-Times/n-desktop-app-banner/tree/master.svg?style=svg)](https://circleci.com/gh/Financial-Times/n-desktop-app-banner/tree/master)
=================

Bower component/Node module for the 'share with colleages' strip used on some B2B pages.

----

## Usage

### Template

```
{{> n-invite-colleagues/templates/index shortName=[xxx] longName=[xxx] }}
```
where `shortName` is the acquisition context company name to use in the copy link

and `longName` is the full name of the company for use in copy (e.g. in email title when sharing the link)

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
