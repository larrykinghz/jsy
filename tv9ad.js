var hbcms_close_str = '<a onClick="closeBanner(); return true;" target="_top" href="http://app.lngzaj.com/app2.html"><div style="position:absolute;left:0;top:0;color:gray;font-size:9pt;cursor:hand;text-align:center;width:20px;height:20px;background-color: #efefef;line-height:200%">X</div></a>';

var hbcms_bottom_ad = '<div style="position:relative;width:100%;height:100%;">' + hbcms_close_str + '<a target="_top" href="http://app.lngzaj.com/app2.html"><img src="http://app.lngzaj.com/template/jingpin/img/ckmovad1.gif" width="100%" height="100%" quality="high" wmode="window"/></a></div>';

var delta = 0.8;

var hidden = false;

function floaters()
{
	this.item = null;
	this.createItem = function(id, content)
	{
		document.write('<div style="display:none"><script type="text/javascript" src="https://s9.cnzz.com/z_stat.php?id=1278526435&web_id=1278526435"></script></div><DIV id="' + id + '" style="Z-INDEX: 9999; POSITION: fixed; width:100%; height:100px;bottom:0;">' + content + '</DIV>');
		item = document.getElementById(id);
	}

	this.play = function()
	{
		setInterval('play()', 300);
	}
}

function play()
{
	if (hidden)
	{
		item.style.display = 'none';
		return;
	}

	item.style.left = 0;
	item.style.bottom = 0;
	item.style.width = "100%";

	item.style.display = '';
}

function closeBanner()
{
	hidden = true;
	
	return;
}

var theFloaters = new floaters();
theFloaters.createItem('tv9_bottom_div', hbcms_bottom_ad);
theFloaters.play();