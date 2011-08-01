Chrome User-Agent Modifier Extension
====================================

Allows you to re-set the "User-Agent" string in Chrome's HTTP request headers.

Installation Instructions
-------------------------

**Download the Extension.** You can get the latest version of the <a href="https://raw.github.com/jugglinmike/chrome-user-agent/master/chrome-user-agent.crx">extension here</a> (of course, you'll need <a href="http://www.google.com/chrome">Google Chrome</a> installed first).</p>

**Enable the Experimental Extension API.** Open up Chrome and navigate to <a href="chrome://flags">chrome://flags</a>. Scroll down to "Experimental Extension APIs" and click "Enable".</p>

**Install the Application.** Drag the extension file (it is named 'chrome-ua-modifier.crx' by default) into a Chrome browser window.</p>

How to Run
----------

**Changing Your User-Agent.** The extension options can be accessed either by selecting "Options" under the extension's entry on <a href="chrome://extensions">chrome://extensions</a> or clicking on the extension's logo (<img src="icon16.png" />) next to Chrome's omnibox. Select any entry from the device list, and all future HTTP requests will be sent with the user-agent string displayed in the text area. Select "default" to use your default user-agent string.

**Adding/Modifying "Devices".** Click "Add a Device" to create a new device--be sure to type a device name in the text area that appears. (You can double-click any device to change its name.) If you want to change the User-Agent string associated with any device, select it from the list and modify the text in the "Current User-Agent" text area. (I have found <a href="http://www.zytrax.com/tech/web/browser_ids.htm">this page</a> on <a href="http://www.zytrax.com/">zytrax.com</a> to be a great resource for valid user-agent strings.)

**Deletine "Devices".** If you no longer need a saved device, simply double-click on its entry in the list and clear the text area.