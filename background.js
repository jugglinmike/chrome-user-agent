var requestFilter = {
	urls: [
		"<all_urls>"
	]
};

chrome.webRequest.onBeforeSendHeaders.addListener(function(details) {
	var headers = details.requestHeaders;
	if( !localStorage['user-agent'] ) {
		return;
	}
	for(var i = 0, l = headers.length; i < l; ++i) {
		if( headers[i].name == 'User-Agent' ) {
			break;
		}
	}
	if(i < headers.length) {
		headers[i].value = localStorage['user-agent'];
	}
	return {requestHeaders: headers};
}, requestFilter, ['requestHeaders','blocking']);