(function() {
	var elem_ids = ['device_desktop_button'],
		elems = {},
		defaults = {
			device: 'desktop'
		},
		deviceList = [],
		deviceListStr,
		devices = {
			iphone3g: {
				name: 'Apple iPhone 3G',
				ua: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 2_0 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5A347 Safari/525.20',
				resolution: [480, 320]
			},
			iphone4: {
				name: 'Apple iPhone 4',
				ua: 'Mozilla/5.0 (iPod; U; CPU iPhone OS 4_0 like Mac OS X; en-us) AppleWebKit/532.9 (KHTML, like Gecko) Version/4.0.5 Mobile/8A293 Safari/6531.22.7',
				resolution: [960, 640]
			},
			ipad: {
				name: 'Apple iPad',
				ua: 'Mozilla/5.0 (iPad; U; CPU OS 3_2_1 like Mac OS X; es-es) AppleWebKit/531.21.10 (KHTML, like Gecko) Mobile/7B405',
				resolution: [1024,768]
			},
			incredible: {
				name: 'HTC Droid Incredible',
				ua: 'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; ADR6300 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17',
				resolution: [800, 480]
			},
			palmpre: {
				name: 'Palm Pre',
				ua: 'Mozilla/5.0 (webOS/1.0; U; en-US) AppleWebKit/525.27.1 (KHTML, like Gecko) Version/1.0 Safari/525.27.1 Pre/1.0',
				resolution: [480, 320]
			}
		},
		deviceListener = function(event) {
			var regexp = new RegExp('(' +deviceListStr+ '|desktop)', 'i'),
				device = event.target.id.match(regexp);
			if( !device ) {
				return;
			}
			device = device[0];
			localStorage['device'] = device;
			// Careful setting the localStorage value to prevent setting it with the string 'undefined'
			if( devices[device] ) {
				localStorage['user-agent'] = devices[device].ua;
			} else {
				delete localStorage['user-agent'];
			}
		},
		initForm = function() {
			if( localStorage['device'] ) {
				elems['device_' + localStorage['device'] + '_button'].setAttribute('checked', true);
			}
		};

	document.addEventListener("DOMContentLoaded", function() {
		var deviceListElement = document.getElementById('device_list');
		for( var device in devices ) {
			if( devices.hasOwnProperty(device) ) {
				deviceList.push(device);
				var listItem = document.createElement('li'),
					radioButton = document.createElement('input'),
					label = document.createElement('label');
				
				radioButton.setAttribute('type', 'radio');
				radioButton.setAttribute('name', 'device');
				radioButton.setAttribute('id', 'device_' +device+ '_button');
				radioButton.setAttribute('value', device);
				radioButton.addEventListener('click', deviceListener);
				
				label.setAttribute('for', 'device_' +device+ '_button');
				label.setAttribute('class', 'inline');
				label.innerHTML = devices[device].name;
				
				listItem.appendChild(radioButton);
				listItem.appendChild(label);
				deviceListElement.appendChild(listItem);
				deviceListElement.appendChild(document.createTextNode(' '));
				elems['device_' +device+ '_button'] = radioButton;
			}
		}
		deviceListStr = deviceList.join('|');
		// Grab the DOM elements that need event handlers attached
		elem_ids.forEach(function( element_id ) {
			elems[element_id] = document.getElementById(element_id);
		});
		
		// Make sure all local storage values are set
		for( var param in defaults ) {
			if( defaults.hasOwnProperty(param) ) {
				localStorage[param] = localStorage[param] || defaults[param];
			}
		}
		
		initForm();
		elems.device_desktop_button.addEventListener('click', deviceListener);
	});
})();