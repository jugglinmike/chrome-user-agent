Chrome User-Agent Modifier Extension
====================================

Allows you to re-set the "User-Agent" string in Chrome's HTTP request headers.

*Note* Chrome 17 ships with support for modifying the User-Agent string.
([Click here for the Chromium
issue](http://code.google.com/p/chromium/issues/detail?id=67063) and [here for
more info on the
feature](http://techdows.com/2011/12/google-chrome-now-has-built-in-user-agent-switcher.html).)
This renders the dedicated user-agent switching extension obsolete, but the
approach outlined here may still be relevant in the context of a larger
extension.

Installation Instructions
-------------------------

**Download the Extension.** You can get the latest version of the [extension
here](https://raw.github.com/jugglinmike/chrome-user-agent/master/chrome-user-agent.crx)
(of course, you'll need [Google Chrome](http://www.google.com/chrome) installed
first).</p>

**Install the Application.** Drag the extension file (it is named
'chrome-ua-modifier.crx' by default) into a Chrome browser window.</p>

How to Run
----------

**Changing Your User-Agent.** The extension options can be accessed either by
selecting "Options" under the extension's entry on <a
href="chrome://extensions">chrome://extensions</a> or clicking on the
extension's logo (<img src="icon16.png" />) next to Chrome's omnibox. Select
any entry from the device list, and all future HTTP requests will be sent with
the user-agent string displayed in the text area. Select "default" to use your
default user-agent string.

**Adding/Modifying "Devices".** Click "Add a Device" to create a new device--be
sure to type a device name in the text area that appears. (You can double-click
any device to change its name.) If you want to change the User-Agent string
associated with any device, select it from the list and modify the text in the
"Current User-Agent" text area. (I have found <a
href="http://www.zytrax.com/tech/web/browser_ids.htm">this page</a> on <a
href="http://www.zytrax.com/">zytrax.com</a> to be a great resource for valid
user-agent strings.)

**Deleting "Devices".** If you no longer need a saved device, simply
double-click on its entry in the list and clear the text area.
