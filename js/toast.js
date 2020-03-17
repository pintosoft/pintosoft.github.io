var toast = {
	opacity: 30,
	fadeoutVar: undefined,
	timeoutVar: undefined,
	keepaliveVar: undefined,
	
	close: function() {
		if (window.external && ('close' in window.external))
		{
			window.external.close();
		}
	},
	keepalive: function(duration) {
		if (window.external && ('keepalive' in window.external))
		{
			window.external.keepalive(duration);
		}
	},
	setOpacity: function(opacity) {
		if (window.external && ('opacity' in window.external))
		{
			window.external.opacity = opacity;
		}
	},
	hide: function() {
		var elem = document.createElement('div');
		elem.id = "sc_hide";
		document.body.appendChild(elem);
		toast.close();
	},
	fadeout: function() {
		this.keepalive(10000);
		this.opacity--;
		if (this.opacity > 0)
			this.setOpacity(this.opacity / 30);
		else
			this.close();
	},
	startFadeout: function() {
		this.keepalive(10000);
		this.timeoutVar = undefined;
		this.opacity = 30;
		this.fadeoutVar = setInterval(function(){toast.fadeout();}, 100);
	},
	resetTimeout: function() {
		this.keepalive(30000);
		if (this.fadeoutVar != undefined)
		{
			clearInterval(this.fadeoutVar);
			this.fadeoutVar = undefined;
			this.setOpacity(1);
		}
		else if (this.timeoutVar != undefined)
		{
			clearTimeout(this.timeoutVar);
			this.timeoutVar = undefined;
		}
		this.keepaliveVar = setInterval(function(){toast.keepalive(30000);}, 10000);
	},
	startTimeout: function() {
		this.keepalive(30000);
		if (this.timeoutVar == undefined)
			this.timeoutVar = setTimeout(function(){toast.startFadeout();}, 20000);
		if (this.keepaliveVar != undefined)
		{
			clearInterval(this.keepaliveVar);
			this.keepaliveVar = undefined;
		}
	},
	openInfo: function() {
		window.open("http://cdn.ad-zip.com/oax/adzip_adinfo.html");
	}
}

window.onerror=function(){return true;};

document.body.onmouseenter=function(){toast.resetTimeout();return false;}
document.body.onmouseleave=function(){toast.startTimeout();return false;}
document.oncontextmenu=function(){return false;}
document.onselectstart=function(){return false;}
document.ondragstart=function(){return false;}
window.onload=function(){
	
	var e = document.getElementById("ainfo");
	e.onmouseover = function() {
		document.getElementById("aitext").style.display = 'block';
		document.getElementById("aiimg").style.display = 'none';
	}
	e.onmouseout = function() {
		document.getElementById("aitext").style.display = 'none';
		document.getElementById("aiimg").style.display = 'block';
	}

	if (window.external && ('setcolorkey' in window.external))
	{
		document.getElementById('sc_as').style.height = '268px';
		document.getElementById('asbin').style.display = 'none';
		document.getElementById('tbar').style.display = 'block';
		window.external.setcolorkey(255, 0, 255);
	}
	
	toast.startTimeout();
}

document.write('<div id="sc_as" style="position:relative;overflow:hidden;text-align:center;width:300px;height:250px">' +
'<div id="tbar">' +
'<div class="asbt" style="position:absolute;right:2px;bottom:2px;" onclick="toast.close(); return false;"><div class="asbimg"></div></div>' +
'</div>' + 
'<iframe src="/ads/adzip.html?v=2019071101" width="300" height="250" marginwidth="0" marginheight="0" frameborder="0" scrolling="no"></iframe>' + 
'<div class="asb" id="asbin" style="position:absolute;right:2px;top:18px;" onclick="toast.close(); return false;"><div class="asbimg"></div></div>' +
'<div class="asb" id="ainfo" style="position:absolute;right:2px;bottom:2px;height:10px;" onclick="toast.openInfo(); return false"><div id="aitext">Ad by StarCodec</div><div id="aiimg"></div></div>' +
'</div>');
