/* Author: Greg Opperman

*/
jQuery(document).ready(function($) {
  jsUpdateSize();
});

function jsUpdateSize(){
    // Get the dimensions of the viewport
    var width = window.innerWidth ||
                document.documentElement.clientWidth ||
                document.body.clientWidth;
    var height = window.innerHeight ||
                 document.documentElement.clientHeight ||
                 document.body.clientHeight;

    $('.browserWidth').css("width", width);  // Display the width
    $('.browserHeight').css("height", height);// Display the height
};

window.onresize = jsUpdateSize;

function Snowflakes(_pageContainer,_snowflakesContainer) {
	this.snowID			= 1;
	this.sizes			= new Array('', 'snowflakeSizeSM', 'snowflakeSizeMED', 'snowflakeSizeLRG');
	this.speeds			= new Array('', 'snowflakeSpeedSlow', 'snowflakeSpeedMed', 'snowflakeSpeedFast');
	this.opacities 		= new Array('', 'snowflakeOpacityFaint', 'snowflakeOpacityLight', 'snowflakeOpacityDark');
	this.delays			= new Array('', 'snowflakeDelay1', 'snowflakeDelay2', 'snowflakeDelay3', 'snowflakeDelay4', 'snowflakeDelay5', 'snowflakeDelay6');
	this.pageContainer	= document.getElementById(_pageContainer);
	this.snowflakesContainer = document.getElementById(_snowflakesContainer);
}

Snowflakes.prototype.randomFromTo = function(from,to) {
	return Math.floor(Math.random() * (to - from + 1) + from);
};

Snowflakes.prototype.findKeyframeAnimation = function(a) {
	var ss = document.styleSheets;
    for (var i = ss.length - 1; i >= 0; i--) {
        try {
            var s = ss[i],
                rs = s.cssRules ? s.cssRules : 
                     s.rules ? s.rules : 
                     [];

            for (var j = rs.length - 1; j >= 0; j--) {
                if ((rs[j].type === window.CSSRule.WEBKIT_KEYFRAMES_RULE || rs[j].type === window.CSSRule.MOZ_KEYFRAMES_RULE) && rs[j].name == a){
                    return rs[j];
                }
            }
        }
        catch(e) { }
    }
    return null;
};

Snowflakes.prototype.updateKeyframeHeight = function() {
	if (keyframes = this.findKeyframeAnimation("falling")) {
		var height		= this.pageContainer.offsetHeight;
		if ((window.innerHeight) > height) {
			height 		= window.innerHeight;
		}
		if (keyframes.cssText.match(new RegExp('webkit'))) {
			var newRule = "100% { -webkit-transform: translate3d(0,"+height+"px,0) rotate(360deg); }";
		} else if (keyframes.cssText.match(new RegExp('moz'))) {
			var newRule = "-moz-transform: translate(0,"+height+"px) rotate(360deg);";
		}
		("appendRule" in keyframes) ? keyframes.appendRule(newRule) : keyframes.insertRule(newRule);
	}
}

Snowflakes.prototype.create = Snowflakes.prototype.moreSnow = function(snowflakeCount) {
	var i 				= 0;
	this.updateKeyframeHeight();
	while (i < snowflakeCount) {
		var snowflake	= document.createElement('i');
		var size 		= this.sizes[this.randomFromTo(0, this.sizes.length-1)];
		var speed		= this.speeds[this.randomFromTo(0, this.speeds.length-1)];
		var opacity 	= this.opacities[this.randomFromTo(0, this.opacities.length-1)];
		var delay		= this.delays[this.randomFromTo(0, this.delays.length-1)];
		snowflake.setAttribute('id', 'snowId'+this.snowID);
		snowflake.setAttribute('class', 'snowflake '+size+' '+speed+' '+opacity+' '+delay);
		snowflake.setAttribute('style','left: '+this.randomFromTo(0, 100)+'%;');
		this.snowflakesContainer.appendChild(snowflake);
		i++;
		this.snowID++;
	}
};

Snowflakes.prototype.lessSnow = function(snowflakeCount) {
	if (this.snowflakesContainer.childNodes.length > snowflakeCount) {
		var snowRemoveCount = 0;
		while (snowRemoveCount < snowflakeCount) {
			this.snowflakesContainer.removeChild(this.snowflakesContainer.lastChild);
			snowRemoveCount++;
		}
	}
}

var snowflakes = new Snowflakes('letitsnow','snowflakesContainer');
snowflakes.create(40);

/*
CSS Browser Selector v0.4.0 (Nov 02, 2010)
Rafael Lima (http://rafael.adm.br)
http://rafael.adm.br/css_browser_selector
License: http://creativecommons.org/licenses/by/2.5/
Contributors: http://rafael.adm.br/css_browser_selector#contributors
*/
function css_browser_selector(u){var ua=u.toLowerCase(),is=function(t){return ua.indexOf(t)>-1},g='gecko',w='webkit',s='safari',o='opera',m='mobile',h=document.documentElement,b=[(!(/opera|webtv/i.test(ua))&&/msie\s(\d)/.test(ua))?('ie ie'+RegExp.$1):is('firefox/2')?g+' ff2':is('firefox/3.5')?g+' ff3 ff3_5':is('firefox/3.6')?g+' ff3 ff3_6':is('firefox/3')?g+' ff3':is('gecko/')?g:is('opera')?o+(/version\/(\d+)/.test(ua)?' '+o+RegExp.$1:(/opera(\s|\/)(\d+)/.test(ua)?' '+o+RegExp.$2:'')):is('konqueror')?'konqueror':is('blackberry')?m+' blackberry':is('android')?m+' android':is('chrome')?w+' chrome':is('iron')?w+' iron':is('applewebkit/')?w+' '+s+(/version\/(\d+)/.test(ua)?' '+s+RegExp.$1:''):is('mozilla/')?g:'',is('j2me')?m+' j2me':is('iphone')?m+' iphone':is('ipod')?m+' ipod':is('ipad')?m+' ipad':is('mac')?'mac':is('darwin')?'mac':is('webtv')?'webtv':is('win')?'win'+(is('windows nt 6.0')?' vista':''):is('freebsd')?'freebsd':(is('x11')||is('linux'))?'linux':'','js']; c = b.join(' '); h.className += ' '+c; return c;}; css_browser_selector(navigator.userAgent);
