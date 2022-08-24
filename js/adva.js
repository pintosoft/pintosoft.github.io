window.onerror=function(){return true;}
document.oncontextmenu=function(){return false;}
document.onselectstart=function(){return false;}
document.ondragstart=function(){return false;}

var adva = {
	call: function (width, height, html) {
		document.write('<div id="ad" style="overflow:hidden;margin:auto;text-align:center;width:' + width + 'px;height:' + height + 'px">' +
		html + '</div>');
	},
	call518: function () {
		adva.call(518, 200, '<iframe src="https://ads-partners.coupang.com/widgets.html?id=556083&template=carousel&trackingCode=AF4463963&subId=&width=518&height=200" width="518" height="200" frameborder="0" scrolling="no" referrerpolicy="unsafe-url"></iframe>');
	},
	call728: function () {
		adva.call(728, 90, '<iframe scrolling="no" src="https://minishop.linkprice.com/productbox_realhotdeal.php?affiliate_id=A100513530&category=MD%E2%80%99S%20PICK%7C%ED%8C%A8%EC%85%98%C2%B7%EB%B7%B0%ED%8B%B0%7C%EA%B0%80%EC%A0%84%C2%B7%EB%94%94%EC%A7%80%ED%84%B8%7C%EC%8B%9D%ED%92%88%C2%B7%EC%83%9D%ED%99%9C%C2%B7%EC%9C%A0%EC%95%84%EB%8F%99%7C%EC%97%AC%ED%96%89%C2%B7%ED%8B%B0%EC%BC%93&width=728&height=90" width="728" height="90" border="0" marginwidth="0" marginheight="0" leftmargin="0" topmargin="0" frameborder="0"></iframe>');
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
	},
	getcookie: function (name) {
		var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
		return value ? value[2] : null;
	},
	run: function () {
		switch (Math.floor(Math.random() * 2))
		{
			case 0:
				adva.call518();
				break;
			default:
				adva.call728();
				break;
		}
	},
}
