window.onload = function(){
 
var OSName="Unknown OS";
if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";
if (navigator.userAgent.indexOf("Mozilla/5.0 (Mobile; rv")!=-1) OSName="Firefox OS";
if (navigator.userAgent.indexOf("Mozilla/5.0 (Mobile; rv:48.0")!=-1) OSName="KaiOS";
//console.log('Your OS: '+OSName);
///alert('Your OS: '+OSName);

if(OSName == 'Firefox OS'){
        console.log("Environment detected: Firefox OS.");
        var environmenttext = document.getElementById('environment');
        var text = document.createTextNode("Firefox OS");
        environmenttext.appendChild(text);
}

if(OSName == 'KaiOS'){
        console.log("Environment detected: KaiOS.");
        var environmenttext = document.getElementById('environment');
        var text = document.createTextNode("KaiOS");
        environmenttext.appendChild(text);
}

//if ((OSName !== 'Firefox OS') || (OSName !== 'KaiOS')){
//        console.log("Environment detected: Not Firefox OS and not KaiOS.");
//        var environmenttext = document.getElementById('environment');
//        var text = document.createTextNode("Not Firefox OS and not KaiOS.");
//        environmenttext.appendChild(text);
//}

if (OSName !== 'Firefox OS'){
        if (OSName !== 'KaiOS'){
                console.log("Environment detected: Not Firefox OS and not KaiOS.");
                var environmenttext = document.getElementById('environment');
                var text = document.createTextNode("Not Firefox OS and not KaiOS.");
                environmenttext.appendChild(text);
}
}

if("file:" == document.location.protocol)
	{
                console.log("Environment detected: File protocol; Local page");
                //document.querySelector("#environment").innerHTML = `File protocol; Local page`;
	}

if("localhost:" == document.location.protocol)
	{
                console.log("Environment detected: Localhost");
                //document.querySelector("#environment").innerHTML = `Localhost`;
	}

if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) 
    {
        alert('Opera');
    }
    else if(navigator.userAgent.indexOf("Chrome") != -1 )
    {
        alert('Chrome');
        /* document.querySelector("#environment").innerHTML = `Chrome`; */
    }
    else if(navigator.userAgent.indexOf("Safari") != -1)
    {
        alert('Safari');
    }
    else if(navigator.userAgent.indexOf("Firefox") != -1 ) 
    {
         //alert('Firefox');
    }
    else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) //IF IE > 10
    {
      alert('IE'); 
    }  
    else 
    {
       alert('unknown');
    }

//function setInnerHTML(element, content) {
//    element.innerHTML = content;
//    return element;
//} 

}
