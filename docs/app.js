if (document.readyState === 'complete') {
    console.log('document is already ready, just execute code here');
    dynamicallyLoadScript();
} else {
    document.addEventListener('DOMContentLoaded', function() {
        console.log('document was not ready, place code here');
        dynamicallyLoadScript();
    });
}

/*if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )){ //IE11 adjustment for CSS3 properties
	  document.getElementById("next").style.top = "15%";
} */

function dynamicallyLoadScript() {
    var body = document.getElementsByTagName("body")[0];
    var script1 = document.createElement("script");
    var script2 = document.createElement("script");
    var script3 = document.createElement("script");
    var script4 = document.createElement("script");
	var script5 = document.createElement("script");
    script1.type = 'text/javascript';
    script1.src = "js/ip.js";
    script2.type = 'text/javascript';
    script2.src = "js/comments.js";
    script3.type = 'text/javascript';
    script3.src = "js/stopwatch.js";
    script4.type = 'text/javascript';
    script4.src = "js/localstorage.js";
	script5.type = 'text/javascript';
    script5.src = "js/exporttoexcel.js";
    body.appendChild(script1);
    body.appendChild(script2);
    body.appendChild(script3);
    body.appendChild(script4);
	body.appendChild(script5);
}


 
