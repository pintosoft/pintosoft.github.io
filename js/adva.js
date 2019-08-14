window.onerror=function(){return true;}
document.oncontextmenu=function(){return false;}
document.onselectstart=function(){return false;}
document.ondragstart=function(){return false;}

var adva = {
	call: function (width, height, src) {
		document.write('<div id="ad" style="overflow:hidden;margin:auto;text-align:center;width:' + width + 'px;height:' + height + 'px">' +
		'<script type="text/javascript" src="' + src + '"></script></div>');
	},
	call300: function () {
		adva.call(300, 250, "//rsc.adpies.com/js/adpie-min.js?mediaId=5a8e5aae8aec492a9ab1b748&slotId=5a9511978aec4929e2730f30&adType=banner&width=300&height=250");
	},
	call728: function () {
		adva.call(728, 90, "//rsc.adpies.com/js/adpie-min.js?mediaId=5a8e5aae8aec492a9ab1b748&slotId=5ab2a94c8aec492a9ab1ba42&adType=banner&width=728&height=90");
	},
	call970: function () {
		adva.call(970, 90, "//rsc.adpies.com/js/adpie-min.js?mediaId=5a8e5aae8aec492a9ab1b748&slotId=5ab2aa338aec4929e27311bf&adType=banner&width=970&height=90");
	},
	recall: function (width, height, src) {
		document.getElementById("ad").outerHTML = '<div id="ad" style="overflow:hidden;margin:auto;width:' + width + 'px;height:' + height + 'px" align="center"><\/div>';
		var script = document.createElement("script");
		script.src = src;
		document.getElementById("ad").appendChild(script);
	},
	hide: function () {
		var elem = document.createElement('div');
		elem.id = "autooff_hide_ad";
		document.body.appendChild(elem);
	}
}
