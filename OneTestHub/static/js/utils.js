// JavaScript Document
function getParameterByName(name)
{
	name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
	var regexS = "[\\?&]" + name + "=([^&#]*)";
	var regex = new RegExp(regexS);
	var results = regex.exec(window.location.search);
	if(results == null)
	return "";
	else
	return decodeURIComponent(results[1].replace(/\+/g, " "));
}

function getCookie(name) 
{
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
    // console.log(cookieValue);
}

/*  Helper function to retrieve the correct hostname for the alpasso codebase, based on
 *  the current URL.
 */
function getAlpassoRoot() {
    if(location.host.indexOf('login-local.saastest.appdynamics.com:8181') != -1)
		return location.protocol + "//portal-local.saastest.appdynamics.com:8181";
	else if(location.host.indexOf('login-dev.saastest.appdynamics.com') != -1 )
		return location.protocol + "//portal-dev.saastest.appdynamics.com";
	else if(location.host.indexOf('login-qa.saastest.appdynamics.com') != -1 )
		return location.protocol + "//portal-qa.saastest.appdynamics.com";
	else if(location.host.indexOf('login-staging.saastest.appdynamics.com') != -1 )
		return location.protocol + "//portal-staging.saastest.appdynamics.com";
	else 
		return location.protocol + "//portal.appdynamics.com";
}
function getAlumRoot() {
		if(location.host.indexOf('login-local.saastest.appdynamics.com:8181') != -1)
			return location.protocol + "//login-local.saastest.appdynamics.com:8181";
		else if(location.host.indexOf('login-dev.saastest.appdynamics.com') != -1 )
			return location.protocol + "//login-dev.saastest.appdynamics.com";
		else if(location.host.indexOf('login-qa.saastest.appdynamics.com') != -1 )
			return location.protocol + "//login-qa.saastest.appdynamics.com";
		else if(location.host.indexOf('login-staging.saastest.appdynamics.com') != -1 )
			return location.protocol + "//login-staging.saastest.appdynamics.com";
		else 
			return location.protocol + "//login.appdynamics.com";
	}


