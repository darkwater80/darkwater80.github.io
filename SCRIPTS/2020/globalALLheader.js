function setTheme(e) {
	localStorage.setItem("theme_" + year + "_" + league_id, e),
	document.documentElement.className = e
}
function endsWith(e, a) {
	return -1 !== e.indexOf(a, e.length - a.length)
}
function footerAlign() {
	jQuery("footer").css("display", "block"),
	jQuery("footer").css("height", "auto");
	var e = $("footer").outerHeight();
	jQuery("body").css("padding-bottom", e),
	jQuery("footer").css("height", e)
}
if (jQuery.get("//nitrografixx.com/SVGICONS/images/sprites.svg?version=2", function(e) {
	var a = document.createElement("div");
	a.innerHTML = (new XMLSerializer).serializeToString(e.documentElement),
	document.body.insertBefore(a, document.body.childNodes[0])
}), jQuery(".pageheader,.myfantasyleague_menu li a:empty").remove(), jQuery("div.myfantasyleague_menu ul li:empty").remove(), localStorage.hasOwnProperty("theme_" + year + "_" + league_id) && setTheme(localStorage.getItem("theme_" + year + "_" + league_id)), $("#logo_svg_inserticon").addClass("nfl-icon-onload"), jQuery(".MFLSkinSelectionbtn").on("click", function() {
	$("#myMFLSkinSelection,.ThemeSwith_overlay").css("display", "block")
}), jQuery("#myMFLSkinSelection a").on("click", function() {
	$("#myMFLSkinSelection,.ThemeSwith_overlay").css("display", "none")
}), jQuery(".ThemeSwith_overlay").on("click", function() {
	$("#myMFLSkinSelection,.ThemeSwith_overlay").css("display", "none")
}), jQuery("ul li.mm-forcommissioners ul").prepend('<li><a class="no-sub" href="' + baseURLDynamic + "/" + year + "/home/" + league_id + "?MODULE=MESSAGE" + SetHPMability + '">Custom Abilities</a></li>'), jQuery('.myfantasyleague_menu ul li:contains("Franchise") a:contains("Rosters")').attr("href", baseURLDynamic + "/" + year + "/home/" + league_id + "?MODULE=MESSAGE" + SetHPMroster), jQuery(document).ready(function() {
	jQuery('#hsubmenu li a:contains("Rosters")').attr("href", baseURLDynamic + "/" + year + "/home/" + league_id + "?MODULE=MESSAGE" + SetHPMroster)
}), jQuery(".myfantasyleague_menu ul,.MFLSkinSelection").css("visibility", "visible"), jQuery(".myfantasyleague_menu > ul").append('<li class="has-sub sub-default" id="slide-menu-login"><a>Login</a><b aria-haspopup="true" aria-controls="p50"></b><input id="sub50" type="checkbox"><label for="sub50"><span></span></label><ul id="p50"><li class="user-login"><a class="no-sub" href="' + baseURLDynamic + "/" + year + "/login?L=" + league_id + '">Login to league</a></li></ul></li>'), jQuery(document).ready(function() {
	var e = baseURLDynamic + "/" + year + "/home/" + league_id + "?MODULE=WELCOME";
	jQuery.ajax({
		url: e,
		success: function(e) {
			jQuery(e).find("#welcome td a").each(function() {
				jQuery("#slide-menu-login ul .user-login").remove(),
				jQuery("#slide-menu-login ul").append('<li><a class="no-sub" href="' + jQuery(this).attr("href") + '">' + $(this).text() + "</a></li>")
			})
		},
		async: !0
	})
}), jQuery(document).ready(function() {
	if ("undefined" != typeof franchise_id && (endsWith(document.URL, "O=01") || endsWith(document.URL, "O=07") || document.URL.indexOf("O=07&DISPLAY") > -1)) {
		var e = jQuery("table.report:not(#welcome,#player_search,.toggle_module_login table.report,.toggle_module_search table.report,.mm-module .report)");
		for (i = 0; i < e.length; i++)
			if (e.eq(i).html().indexOf("FID=" + franchise_id) > -1 || e.eq(i).html().indexOf("franchise_" + franchise_id) > -1) {
				var a = '<table align="center" cellspacing="1" class="report">' + e.eq(i).html() + "</table>",
					t = '<table align="center" cellspacing="1" class="report">' + e.eq(0).html() + "</table>";
				e.eq(0).html(a),
				e.eq(i).html(t);
				break
			}
	}
}), jQuery(document).ready(function() {
	footerAlign()
}), jQuery(window).on("resize", function() {
	footerAlign()
}), jQuery(document).ready(function() {
	jQuery("#body_adp #container-wrap .report,#body_aav #container-wrap .report").wrap('<div class="mobile-wrap"></div>'),
	jQuery("#body_adp #container-wrap form,#body_aav #container-wrap form").addClass("reportform"),
	jQuery("#body_adp #container-wrap h3,#body_aav #container-wrap h3,#body_adp #container-wrap h2,#body_aav #container-wrap h2").addClass("h3-menu"),
	jQuery('#body_adp #container-wrap .reportnavigation:contains("Hint:")').removeClass().addClass("alert alert-info-body"),
	jQuery('#body_aav #container-wrap .reportnavigation:contains("Hint:")').removeClass().addClass("alert alert-info-body"),
	jQuery('#body_aav #container-wrap blockquote:contains("Hint:")').removeClass().addClass("alert alert-info-body")
}), jQuery(document).ready(function() {
	jQuery("#body_api_info #container-wrap .pagebody").wrapInner('<div class="mobile-wrap">')
}), /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	var style = document.createElement("style");
	document.head.appendChild(style),
	style.sheet.insertRule("::-webkit-scrollbar{display:none}")
}
if (document.getElementById("body_ajax_ls")) {
	var ls_liveScoringWeekCheck = parseInt(location.href.substr(location.href.indexOf("W2=") + 3, 2));
	ls_liveScoringWeekCheck > 0 && ls_liveScoringWeekCheck < liveScoringWeek && (liveScoringWeek = parseInt(location.href.substr(location.href.indexOf("W2=") + 3, 2)))
}
if (null == menuPositionY)
	var menuPositionY = 10;
if (null == menuPositionIsLeft)
	var menuPositionIsLeft = !0;
if (null == showMenuIcons)
	var showMenuIcons = !0;
if (jQuery("body").append('<div id="menu-trigger" style="display:none"><div class="hamburger hamburger--spin js-hamburger"><div class="hamburger-box"><div class="hamburger-inner"></div></div></div></div><div id="menu-overlay" class="menu-overlayclass" style="display:none"></div><div id="click-blocker" style="display: none;"></div>'), jQuery(".myfantasyleague_menu").before('<div class="myfantasyleague_menuMobile"></div>'), jQuery("head").append("<style>.myfantasyleague_menuMobile{display:none;position:fixed;z-index:99999;width:250px;overflow-y:auto;-webkit-overflow-scrolling:touch;height:100%}#menu-trigger{position:fixed;top:" + menuPositionY + 'px;padding:5px;z-index:99999;cursor:pointer;font-size:36px;line-height:40px;height:48px;width:42px;text-align:center}.myfantasyleague_menuMobile #icon-wrapper-mobile{position:absolute;left:auto;display:block;z-index:1;font-size:24px;top:0;right:7px}.myfantasyleague_menuMobile #icon-wrapper-mobile i{line-height:38px}.myfantasyleague_menuMobile #skinSelectorContainer{margin:0;position:fixed;top:40px;}.myfantasyleague_menuMobile li.notification-icon-search,.myfantasyleague_menuMobile .toggle_module_search{display:none!important}.myfantasyleague_menuMobile #icon-wrapper-mobile img{margin:0!important}.myfantasyleague_menuMobile li{list-style:none;cursor:pointer}.myfantasyleague_menuMobile li,.myfantasyleague_menuMobile ul{margin:0;padding:0}.myfantasyleague_menuMobile a{word-wrap:break-word;text-decoration:none;padding-right:10px;display:block;-webkit-transition: background-color 300ms linear;-ms-transition: background-color 300ms linear;transition: background-color 300ms linear;}#menu-overlay{height:100%;width:100%;position:fixed;left:0;top:0;background:rgba(0,0,0,.6);z-index:99998}.myfantasyleague_menuMobile > ul > li > a,.myfantasyleague_menuMobile > ul > li > a:active,.myfantasyleague_menuMobile > ul > li > a:visited,.myfantasyleague_menuMobile > ul > li > a:hover{text-indent:5px;font-size:20px;line-height:40px}.myfantasyleague_menuMobile > ul > li > ul > li > a,.myfantasyleague_menuMobile > ul > li > ul > li > a:active,.myfantasyleague_menuMobile > ul > li > ul > li > a:visited,.myfantasyleague_menuMobile > ul > li > ul > li > a:hover{font-size:16px;line-height:34px;padding-left:10px}.myfantasyleague_menuMobile > ul > li > ul > li > ul > li > a,.myfantasyleague_menuMobile > ul > li > ul > li > ul > li > a:active,.myfantasyleague_menuMobile > ul > li > ul > li > ul > li > a:visited,.myfantasyleague_menuMobile > ul > li > ul > li > ul > li > a:hover{padding-left:15px;font-size:14px;line-height:28px}.myfantasyleague_menuMobile > ul > li.has-sub > a{position:relative}.myfantasyleague_menuMobile #icon-wrapper-mobile span{display:inline-block}.myfantasyleague_menuMobile #skinSelectorOptions span,.myfantasyleague_menuMobile #skinSelectorContainer input{vertial-align:top}.myfantasyleague_menuMobile .mfl-icon,.myfantasyleague_menuMobile span,.myfantasyleague_menuMobile input[type="checkbox"],.myfantasyleague_menuMobile label{display:none}.mobile-menu-open {position:fixed;overflow:hidden;height:100%;width:100%}#click-blocker{position:fixed;top:0;bottom:0;left:0;right:0;z-index:100000}@media only screen and (min-width: 48.1em){#menu-overlay{display:none!important}}.hamburger-inner,.hamburger-inner::before,.hamburger-inner::after{background:var(--accent,#B82601)}.hamburger.is-active .hamburger-inner,.hamburger.is-active .hamburger-inner::before,.hamburger.is-active .hamburger-inner::after{background:var(--accent,#B82601)}.hamburger{cursor:pointer;transition-property:opacity,filter;transition-duration:.15s;transition-timing-function:linear;font:inherit;color:inherit;text-transform:none;background-color:transparent;border:0;margin:0;overflow:visible}.hamburger-box{width:40px;height:24px}.hamburger-inner{top:0;bottom:0;left:0;right:0;margin:auto}.hamburger-inner,.hamburger-inner::before,.hamburger-inner::after{width:25px;height:4px;border-radius:0;position:absolute;transition-property:transform;transition-duration:.15s;transition-timing-function:ease}.hamburger-inner::before,.hamburger-inner::after{content:"";display:block}.hamburger-inner::before{top:-10px}.hamburger-inner::after{bottom:-10px}.hamburger--3dx .hamburger-box{perspective:80px}.hamburger--3dx .hamburger-inner{transition:transform .15s cubic-bezier(0.645,0.045,0.355,1),background-color 0 .1s cubic-bezier(0.645,0.045,0.355,1)}.hamburger--3dx .hamburger-inner::before,.hamburger--3dx .hamburger-inner::after{transition:transform 0 .1s cubic-bezier(0.645,0.045,0.355,1)}.hamburger--3dx.is-active .hamburger-inner{background-color:transparent!important;transform:rotateY(180deg)}.hamburger--3dx.is-active .hamburger-inner::before{transform:translate3d(0,10px,0) rotate(45deg)}.hamburger--3dx.is-active .hamburger-inner::after{transform:translate3d(0,-10px,0) rotate(-45deg)}.hamburger--3dx-r .hamburger-box{perspective:80px}.hamburger--3dx-r .hamburger-inner{transition:transform .15s cubic-bezier(0.645,0.045,0.355,1),background-color 0 .1s cubic-bezier(0.645,0.045,0.355,1)}.hamburger--3dx-r .hamburger-inner::before,.hamburger--3dx-r .hamburger-inner::after{transition:transform 0 .1s cubic-bezier(0.645,0.045,0.355,1)}.hamburger--3dx-r.is-active .hamburger-inner{background-color:transparent!important;transform:rotateY(-180deg)}.hamburger--3dx-r.is-active .hamburger-inner::before{transform:translate3d(0,10px,0) rotate(45deg)}.hamburger--3dx-r.is-active .hamburger-inner::after{transform:translate3d(0,-10px,0) rotate(-45deg)}.hamburger--3dy .hamburger-box{perspective:80px}.hamburger--3dy .hamburger-inner{transition:transform .15s cubic-bezier(0.645,0.045,0.355,1),background-color 0 .1s cubic-bezier(0.645,0.045,0.355,1)}.hamburger--3dy .hamburger-inner::before,.hamburger--3dy .hamburger-inner::after{transition:transform 0 .1s cubic-bezier(0.645,0.045,0.355,1)}.hamburger--3dy.is-active .hamburger-inner{background-color:transparent!important;transform:rotateX(-180deg)}.hamburger--3dy.is-active .hamburger-inner::before{transform:translate3d(0,10px,0) rotate(45deg)}.hamburger--3dy.is-active .hamburger-inner::after{transform:translate3d(0,-10px,0) rotate(-45deg)}.hamburger--3dy-r .hamburger-box{perspective:80px}.hamburger--3dy-r .hamburger-inner{transition:transform .15s cubic-bezier(0.645,0.045,0.355,1),background-color 0 .1s cubic-bezier(0.645,0.045,0.355,1)}.hamburger--3dy-r .hamburger-inner::before,.hamburger--3dy-r .hamburger-inner::after{transition:transform 0 .1s cubic-bezier(0.645,0.045,0.355,1)}.hamburger--3dy-r.is-active .hamburger-inner{background-color:transparent!important;transform:rotateX(180deg)}.hamburger--3dy-r.is-active .hamburger-inner::before{transform:translate3d(0,10px,0) rotate(45deg)}.hamburger--3dy-r.is-active .hamburger-inner::after{transform:translate3d(0,-10px,0) rotate(-45deg)}.hamburger--3dxy .hamburger-box{perspective:80px}.hamburger--3dxy .hamburger-inner{transition:transform .15s cubic-bezier(0.645,0.045,0.355,1),background-color 0 .1s cubic-bezier(0.645,0.045,0.355,1)}.hamburger--3dxy .hamburger-inner::before,.hamburger--3dxy .hamburger-inner::after{transition:transform 0 .1s cubic-bezier(0.645,0.045,0.355,1)}.hamburger--3dxy.is-active .hamburger-inner{background-color:transparent!important;transform:rotateX(180deg) rotateY(180deg)}.hamburger--3dxy.is-active .hamburger-inner::before{transform:translate3d(0,10px,0) rotate(45deg)}.hamburger--3dxy.is-active .hamburger-inner::after{transform:translate3d(0,-10px,0) rotate(-45deg)}.hamburger--3dxy-r .hamburger-box{perspective:80px}.hamburger--3dxy-r .hamburger-inner{transition:transform .15s cubic-bezier(0.645,0.045,0.355,1),background-color 0 .1s cubic-bezier(0.645,0.045,0.355,1)}.hamburger--3dxy-r .hamburger-inner::before,.hamburger--3dxy-r .hamburger-inner::after{transition:transform 0 .1s cubic-bezier(0.645,0.045,0.355,1)}.hamburger--3dxy-r.is-active .hamburger-inner{background-color:transparent!important;transform:rotateX(180deg) rotateY(180deg) rotateZ(-180deg)}.hamburger--3dxy-r.is-active .hamburger-inner::before{transform:translate3d(0,10px,0) rotate(45deg)}.hamburger--3dxy-r.is-active .hamburger-inner::after{transform:translate3d(0,-10px,0) rotate(-45deg)}.hamburger--arrow.is-active .hamburger-inner::before{transform:translate3d(-8px,0,0) rotate(-45deg) scale(0.7,1)}.hamburger--arrow.is-active .hamburger-inner::after{transform:translate3d(-8px,0,0) rotate(45deg) scale(0.7,1)}.hamburger--arrow-r.is-active .hamburger-inner::before{transform:translate3d(8px,0,0) rotate(45deg) scale(0.7,1)}.hamburger--arrow-r.is-active .hamburger-inner::after{transform:translate3d(8px,0,0) rotate(-45deg) scale(0.7,1)}.hamburger--arrowalt .hamburger-inner::before{transition:top .1s .1s ease,transform .1s cubic-bezier(0.165,0.84,0.44,1)}.hamburger--arrowalt .hamburger-inner::after{transition:bottom .1s .1s ease,transform .1s cubic-bezier(0.165,0.84,0.44,1)}.hamburger--arrowalt.is-active .hamburger-inner::before{top:0;transform:translate3d(-8px,-10px,0) rotate(-45deg) scale(0.7,1);transition:top .1s ease,transform .1s .1s cubic-bezier(0.895,0.03,0.685,0.22)}.hamburger--arrowalt.is-active .hamburger-inner::after{bottom:0;transform:translate3d(-8px,10px,0) rotate(45deg) scale(0.7,1);transition:bottom .1s ease,transform .1s .1s cubic-bezier(0.895,0.03,0.685,0.22)}.hamburger--arrowalt-r .hamburger-inner::before{transition:top .1s .1s ease,transform .1s cubic-bezier(0.165,0.84,0.44,1)}.hamburger--arrowalt-r .hamburger-inner::after{transition:bottom .1s .1s ease,transform .1s cubic-bezier(0.165,0.84,0.44,1)}.hamburger--arrowalt-r.is-active .hamburger-inner::before{top:0;transform:translate3d(8px,-10px,0) rotate(45deg) scale(0.7,1);transition:top .1s ease,transform .1s .1s cubic-bezier(0.895,0.03,0.685,0.22)}.hamburger--arrowalt-r.is-active .hamburger-inner::after{bottom:0;transform:translate3d(8px,10px,0) rotate(-45deg) scale(0.7,1);transition:bottom .1s ease,transform .1s .1s cubic-bezier(0.895,0.03,0.685,0.22)}.hamburger--arrowturn.is-active .hamburger-inner{transform:rotate(-180deg)}.hamburger--arrowturn.is-active .hamburger-inner::before{transform:translate3d(8px,0,0) rotate(45deg) scale(0.7,1)}.hamburger--arrowturn.is-active .hamburger-inner::after{transform:translate3d(8px,0,0) rotate(-45deg) scale(0.7,1)}.hamburger--arrowturn-r.is-active .hamburger-inner{transform:rotate(-180deg)}.hamburger--arrowturn-r.is-active .hamburger-inner::before{transform:translate3d(-8px,0,0) rotate(-45deg) scale(0.7,1)}.hamburger--arrowturn-r.is-active .hamburger-inner::after{transform:translate3d(-8px,0,0) rotate(45deg) scale(0.7,1)}.hamburger--boring .hamburger-inner,.hamburger--boring .hamburger-inner::before,.hamburger--boring .hamburger-inner::after{transition-property:none}.hamburger--boring.is-active .hamburger-inner{transform:rotate(45deg)}.hamburger--boring.is-active .hamburger-inner::before{top:0;opacity:0}.hamburger--boring.is-active .hamburger-inner::after{bottom:0;transform:rotate(-90deg)}.hamburger--collapse .hamburger-inner{top:auto;bottom:0;transition-duration:.13s;transition-delay:.13s;transition-timing-function:cubic-bezier(0.55,0.055,0.675,0.19)}.hamburger--collapse .hamburger-inner::after{top:-20px;transition:top .2s .2s cubic-bezier(0.33333,0.66667,0.66667,1),opacity .1s linear}.hamburger--collapse .hamburger-inner::before{transition:top .12s .2s cubic-bezier(0.33333,0.66667,0.66667,1),transform .13s cubic-bezier(0.55,0.055,0.675,0.19)}.hamburger--collapse.is-active .hamburger-inner{transform:translate3d(0,-10px,0) rotate(-45deg);transition-delay:.22s;transition-timing-function:cubic-bezier(0.215,0.61,0.355,1)}.hamburger--collapse.is-active .hamburger-inner::after{top:0;opacity:0;transition:top .2s cubic-bezier(0.33333,0,0.66667,0.33333),opacity .1s .22s linear}.hamburger--collapse.is-active .hamburger-inner::before{top:0;transform:rotate(-90deg);transition:top .1s .16s cubic-bezier(0.33333,0,0.66667,0.33333),transform .13s .25s cubic-bezier(0.215,0.61,0.355,1)}.hamburger--collapse-r .hamburger-inner{top:auto;bottom:0;transition-duration:.13s;transition-delay:.13s;transition-timing-function:cubic-bezier(0.55,0.055,0.675,0.19)}.hamburger--collapse-r .hamburger-inner::after{top:-20px;transition:top .2s .2s cubic-bezier(0.33333,0.66667,0.66667,1),opacity .1s linear}.hamburger--collapse-r .hamburger-inner::before{transition:top .12s .2s cubic-bezier(0.33333,0.66667,0.66667,1),transform .13s cubic-bezier(0.55,0.055,0.675,0.19)}.hamburger--collapse-r.is-active .hamburger-inner{transform:translate3d(0,-10px,0) rotate(45deg);transition-delay:.22s;transition-timing-function:cubic-bezier(0.215,0.61,0.355,1)}.hamburger--collapse-r.is-active .hamburger-inner::after{top:0;opacity:0;transition:top .2s cubic-bezier(0.33333,0,0.66667,0.33333),opacity .1s .22s linear}.hamburger--collapse-r.is-active .hamburger-inner::before{top:0;transform:rotate(90deg);transition:top .1s .16s cubic-bezier(0.33333,0,0.66667,0.33333),transform .13s .25s cubic-bezier(0.215,0.61,0.355,1)}.hamburger--elastic .hamburger-inner{top:2px;transition-duration:.275s;transition-timing-function:cubic-bezier(0.68,-0.55,0.265,1.55)}.hamburger--elastic .hamburger-inner::before{top:10px;transition:opacity .125s .275s ease}.hamburger--elastic .hamburger-inner::after{top:20px;transition:transform .275s cubic-bezier(0.68,-0.55,0.265,1.55)}.hamburger--elastic.is-active .hamburger-inner{transform:translate3d(0,10px,0) rotate(135deg);transition-delay:.075s}.hamburger--elastic.is-active .hamburger-inner::before{transition-delay:0;opacity:0}.hamburger--elastic.is-active .hamburger-inner::after{transform:translate3d(0,-20px,0) rotate(-270deg);transition-delay:.075s}.hamburger--elastic-r .hamburger-inner{top:2px;transition-duration:.275s;transition-timing-function:cubic-bezier(0.68,-0.55,0.265,1.55)}.hamburger--elastic-r .hamburger-inner::before{top:10px;transition:opacity .125s .275s ease}.hamburger--elastic-r .hamburger-inner::after{top:20px;transition:transform .275s cubic-bezier(0.68,-0.55,0.265,1.55)}.hamburger--elastic-r.is-active .hamburger-inner{transform:translate3d(0,10px,0) rotate(-135deg);transition-delay:.075s}.hamburger--elastic-r.is-active .hamburger-inner::before{transition-delay:0;opacity:0}.hamburger--elastic-r.is-active .hamburger-inner::after{transform:translate3d(0,-20px,0) rotate(270deg);transition-delay:.075s}.hamburger--emphatic{overflow:hidden}.hamburger--emphatic .hamburger-inner{transition:background-color .125s .175s ease-in}.hamburger--emphatic .hamburger-inner::before{left:0;transition:transform .125s cubic-bezier(0.6,0.04,0.98,0.335),top .05s .125s linear,left .125s .175s ease-in}.hamburger--emphatic .hamburger-inner::after{top:10px;right:0;transition:transform .125s cubic-bezier(0.6,0.04,0.98,0.335),top .05s .125s linear,right .125s .175s ease-in}.hamburger--emphatic.is-active .hamburger-inner{transition-delay:0;transition-timing-function:ease-out;background-color:transparent!important}.hamburger--emphatic.is-active .hamburger-inner::before{left:-80px;top:-80px;transform:translate3d(80px,80px,0) rotate(45deg);transition:left .125s ease-out,top .05s .125s linear,transform .125s .175s cubic-bezier(0.075,0.82,0.165,1)}.hamburger--emphatic.is-active .hamburger-inner::after{right:-80px;top:-80px;transform:translate3d(-80px,80px,0) rotate(-45deg);transition:right .125s ease-out,top .05s .125s linear,transform .125s .175s cubic-bezier(0.075,0.82,0.165,1)}.hamburger--emphatic-r{overflow:hidden}.hamburger--emphatic-r .hamburger-inner{transition:background-color .125s .175s ease-in}.hamburger--emphatic-r .hamburger-inner::before{left:0;transition:transform .125s cubic-bezier(0.6,0.04,0.98,0.335),top .05s .125s linear,left .125s .175s ease-in}.hamburger--emphatic-r .hamburger-inner::after{top:10px;right:0;transition:transform .125s cubic-bezier(0.6,0.04,0.98,0.335),top .05s .125s linear,right .125s .175s ease-in}.hamburger--emphatic-r.is-active .hamburger-inner{transition-delay:0;transition-timing-function:ease-out;background-color:transparent!important}.hamburger--emphatic-r.is-active .hamburger-inner::before{left:-80px;top:80px;transform:translate3d(80px,-80px,0) rotate(-45deg);transition:left .125s ease-out,top .05s .125s linear,transform .125s .175s cubic-bezier(0.075,0.82,0.165,1)}.hamburger--emphatic-r.is-active .hamburger-inner::after{right:-80px;top:80px;transform:translate3d(-80px,-80px,0) rotate(45deg);transition:right .125s ease-out,top .05s .125s linear,transform .125s .175s cubic-bezier(0.075,0.82,0.165,1)}.hamburger--minus .hamburger-inner::before,.hamburger--minus .hamburger-inner::after{transition:bottom .08s 0 ease-out,top .08s 0 ease-out,opacity 0 linear}.hamburger--minus.is-active .hamburger-inner::before,.hamburger--minus.is-active .hamburger-inner::after{opacity:0;transition:bottom .08s ease-out,top .08s ease-out,opacity 0 .08s linear}.hamburger--minus.is-active .hamburger-inner::before{top:0}.hamburger--minus.is-active .hamburger-inner::after{bottom:0}.hamburger--slider .hamburger-inner{top:2px}.hamburger--slider .hamburger-inner::before{top:10px;transition-property:transform,opacity;transition-timing-function:ease;transition-duration:.15s}.hamburger--slider .hamburger-inner::after{top:20px}.hamburger--slider.is-active .hamburger-inner{transform:translate3d(0,10px,0) rotate(45deg)}.hamburger--slider.is-active .hamburger-inner::before{transform:rotate(-45deg) translate3d(-5.71429px,-6px,0);opacity:0}.hamburger--slider.is-active .hamburger-inner::after{transform:translate3d(0,-20px,0) rotate(-90deg)}.hamburger--slider-r .hamburger-inner{top:2px}.hamburger--slider-r .hamburger-inner::before{top:10px;transition-property:transform,opacity;transition-timing-function:ease;transition-duration:.15s}.hamburger--slider-r .hamburger-inner::after{top:20px}.hamburger--slider-r.is-active .hamburger-inner{transform:translate3d(0,10px,0) rotate(-45deg)}.hamburger--slider-r.is-active .hamburger-inner::before{transform:rotate(45deg) translate3d(5.71429px,-6px,0);opacity:0}.hamburger--slider-r.is-active .hamburger-inner::after{transform:translate3d(0,-20px,0) rotate(90deg)}.hamburger--spin .hamburger-inner{transition-duration:.22s;transition-timing-function:cubic-bezier(0.55,0.055,0.675,0.19)}.hamburger--spin .hamburger-inner::before{transition:top .1s .25s ease-in,opacity .1s ease-in}.hamburger--spin .hamburger-inner::after{transition:bottom .1s .25s ease-in,transform .22s cubic-bezier(0.55,0.055,0.675,0.19)}.hamburger--spin.is-active .hamburger-inner{transform:rotate(225deg);transition-delay:.12s;transition-timing-function:cubic-bezier(0.215,0.61,0.355,1)}.hamburger--spin.is-active .hamburger-inner::before{top:0;opacity:0;transition:top .1s ease-out,opacity .1s .12s ease-out}.hamburger--spin.is-active .hamburger-inner::after{bottom:0;transform:rotate(-90deg);transition:bottom .1s ease-out,transform .22s .12s cubic-bezier(0.215,0.61,0.355,1)}.hamburger--spin-r .hamburger-inner{transition-duration:.22s;transition-timing-function:cubic-bezier(0.55,0.055,0.675,0.19)}.hamburger--spin-r .hamburger-inner::before{transition:top .1s .25s ease-in,opacity .1s ease-in}.hamburger--spin-r .hamburger-inner::after{transition:bottom .1s .25s ease-in,transform .22s cubic-bezier(0.55,0.055,0.675,0.19)}.hamburger--spin-r.is-active .hamburger-inner{transform:rotate(-225deg);transition-delay:.12s;transition-timing-function:cubic-bezier(0.215,0.61,0.355,1)}.hamburger--spin-r.is-active .hamburger-inner::before{top:0;opacity:0;transition:top .1s ease-out,opacity .1s .12s ease-out}.hamburger--spin-r.is-active .hamburger-inner::after{bottom:0;transform:rotate(90deg);transition:bottom .1s ease-out,transform .22s .12s cubic-bezier(0.215,0.61,0.355,1)}.hamburger--spring .hamburger-inner{top:2px;transition:background-color 0 .13s linear}.hamburger--spring .hamburger-inner::before{top:10px;transition:top .1s .2s cubic-bezier(0.33333,0.66667,0.66667,1),transform .13s cubic-bezier(0.55,0.055,0.675,0.19)}.hamburger--spring .hamburger-inner::after{top:20px;transition:top .2s .2s cubic-bezier(0.33333,0.66667,0.66667,1),transform .13s cubic-bezier(0.55,0.055,0.675,0.19)}.hamburger--spring.is-active .hamburger-inner{transition-delay:.22s;background-color:transparent!important}.hamburger--spring.is-active .hamburger-inner::before{top:0;transition:top .1s .15s cubic-bezier(0.33333,0,0.66667,0.33333),transform .13s .22s cubic-bezier(0.215,0.61,0.355,1);transform:translate3d(0,10px,0) rotate(45deg)}.hamburger--spring.is-active .hamburger-inner::after{top:0;transition:top .2s cubic-bezier(0.33333,0,0.66667,0.33333),transform .13s .22s cubic-bezier(0.215,0.61,0.355,1);transform:translate3d(0,10px,0) rotate(-45deg)}.hamburger--spring-r .hamburger-inner{top:auto;bottom:0;transition-duration:.13s;transition-delay:0;transition-timing-function:cubic-bezier(0.55,0.055,0.675,0.19)}.hamburger--spring-r .hamburger-inner::after{top:-20px;transition:top .2s .2s cubic-bezier(0.33333,0.66667,0.66667,1),opacity 0 linear}.hamburger--spring-r .hamburger-inner::before{transition:top .1s .2s cubic-bezier(0.33333,0.66667,0.66667,1),transform .13s cubic-bezier(0.55,0.055,0.675,0.19)}.hamburger--spring-r.is-active .hamburger-inner{transform:translate3d(0,-10px,0) rotate(-45deg);transition-delay:.22s;transition-timing-function:cubic-bezier(0.215,0.61,0.355,1)}.hamburger--spring-r.is-active .hamburger-inner::after{top:0;opacity:0;transition:top .2s cubic-bezier(0.33333,0,0.66667,0.33333),opacity 0 .22s linear}.hamburger--spring-r.is-active .hamburger-inner::before{top:0;transform:rotate(90deg);transition:top .1s .15s cubic-bezier(0.33333,0,0.66667,0.33333),transform .13s .22s cubic-bezier(0.215,0.61,0.355,1)}.hamburger--stand .hamburger-inner{transition:transform .075s .15s cubic-bezier(0.55,0.055,0.675,0.19),background-color 0 .075s linear}.hamburger--stand .hamburger-inner::before{transition:top .075s .075s ease-in,transform .075s 0 cubic-bezier(0.55,0.055,0.675,0.19)}.hamburger--stand .hamburger-inner::after{transition:bottom .075s .075s ease-in,transform .075s 0 cubic-bezier(0.55,0.055,0.675,0.19)}.hamburger--stand.is-active .hamburger-inner{transform:rotate(90deg);background-color:transparent!important;transition:transform .075s 0 cubic-bezier(0.215,0.61,0.355,1),background-color 0 .15s linear}.hamburger--stand.is-active .hamburger-inner::before{top:0;transform:rotate(-45deg);transition:top .075s .1s ease-out,transform .075s .15s cubic-bezier(0.215,0.61,0.355,1)}.hamburger--stand.is-active .hamburger-inner::after{bottom:0;transform:rotate(45deg);transition:bottom .075s .1s ease-out,transform .075s .15s cubic-bezier(0.215,0.61,0.355,1)}.hamburger--stand-r .hamburger-inner{transition:transform .075s .15s cubic-bezier(0.55,0.055,0.675,0.19),background-color 0 .075s linear}.hamburger--stand-r .hamburger-inner::before{transition:top .075s .075s ease-in,transform .075s 0 cubic-bezier(0.55,0.055,0.675,0.19)}.hamburger--stand-r .hamburger-inner::after{transition:bottom .075s .075s ease-in,transform .075s 0 cubic-bezier(0.55,0.055,0.675,0.19)}.hamburger--stand-r.is-active .hamburger-inner{transform:rotate(-90deg);background-color:transparent!important;transition:transform .075s 0 cubic-bezier(0.215,0.61,0.355,1),background-color 0 .15s linear}.hamburger--stand-r.is-active .hamburger-inner::before{top:0;transform:rotate(-45deg);transition:top .075s .1s ease-out,transform .075s .15s cubic-bezier(0.215,0.61,0.355,1)}.hamburger--stand-r.is-active .hamburger-inner::after{bottom:0;transform:rotate(45deg);transition:bottom .075s .1s ease-out,transform .075s .15s cubic-bezier(0.215,0.61,0.355,1)}.hamburger--squeeze .hamburger-inner{transition-duration:.075s;transition-timing-function:cubic-bezier(0.55,0.055,0.675,0.19)}.hamburger--squeeze .hamburger-inner::before{transition:top .075s .12s ease,opacity .075s ease}.hamburger--squeeze .hamburger-inner::after{transition:bottom .075s .12s ease,transform .075s cubic-bezier(0.55,0.055,0.675,0.19)}</style>'), jQuery(".myfantasyleague_menuMobile").html(jQuery(".myfantasyleague_menu").html()), jQuery(".myfantasyleague_menuMobile .has-sub.sub-default>a").append('<span class="menu_arrow"></span>'), jQuery(".myfantasyleague_menuMobile > ul").append('<li class="has-sub sub-default" style="visibility:hidden"><a>Blank</a><ul></ul></li><li class="has-sub sub-default" style="visibility:hidden"><a>Blank</a><ul></ul></li>'), jQuery(".myfantasyleague_menuMobile .has-sub.sub-default ul").hide(), jQuery('.myfantasyleague_menuMobile ul li:contains("Communications") a:contains("Chat")').replaceWith('<a href="' + baseURLDynamic + "/" + year + "/home/" + league_id + '?MODULE=LEAGUE_CHAT" onclick="openChatWindow(this); return false;" target="_blank">League Chat</a>'), jQuery('.myfantasyleague_menuMobile ul li:contains("My Leagues") a:contains("$75,000")').parent().remove(), jQuery(".myfantasyleague_menuMobile > ul > li a.no-sub:eq(1)").parent().addClass("mm-home"), jQuery(".myfantasyleague_menuMobile > ul > li.has-sub.sub-default > a").each(function(e) {
	$(this).on("click", function() {
		var e = $(".myfantasyleague_menuMobile > ul > li.has-sub.sub-default > ul"),
			a = $(".myfantasyleague_menuMobile > ul > li.has-sub.sub-default > ul > li > ul"),
			t = $(this).parent("li").children("ul");
		e.each(function() {
			$(this).slideUp()
		}),
		a.each(function() {
			$(this).slideUp()
		}),
		t.hasClass("thisExpanded") ? t.slideUp().removeClass("thisExpanded") : t.slideDown().addClass("thisExpanded"),
		e.removeClass("lastClicked"),
		a.removeClass("lastClicked"),
		t.addClass("lastClicked"),
		e.each(function() {
			$(this).hasClass("lastClicked") || $(this).removeClass("thisExpanded")
		}),
		a.each(function() {
			$(this).removeClass("thisExpanded")
		}),
		$("ul").parent("li").removeClass("arrow-down"),
		$("ul.thisExpanded").parent("li").addClass("arrow-down"),
		$("li").removeClass("sub-arrow-down")
	})
}), jQuery(".myfantasyleague_menuMobile > ul > li.has-sub.sub-default > ul > li > a").each(function(e) {
	$(this).on("click", function() {
		var e = $(".myfantasyleague_menuMobile > ul > li.has-sub.sub-default > ul > li > ul"),
			a = $(this).parent("li").children("ul");
		e.each(function() {
			$(this).slideUp()
		}),
		a.hasClass("thisExpanded") ? a.slideUp().removeClass("thisExpanded") : a.slideDown().addClass("thisExpanded"),
		e.removeClass("lastClicked"),
		a.addClass("lastClicked"),
		e.each(function() {
			$(this).hasClass("lastClicked") || $(this).removeClass("thisExpanded")
		}),
		$("ul").parent("li").removeClass("sub-arrow-down"),
		$("ul.thisExpanded").parent("li").addClass("sub-arrow-down")
	})
}), menuPositionIsLeft ? jQuery("head").append("<style>.myfantasyleague_menuMobile{border:0;border-right-width:2px;border-style:solid;left:0;margin-left:-250px}#menu-trigger{left:0;border-left:0;-webkit-border-top-right-radius:3px;-webkit-border-bottom-right-radius:3px;-moz-border-radius-topright:3px;-moz-border-radius-bottomright:3px;border-top-right-radius:3px;border-bottom-right-radius:3px}.myfantasyleague_menuMobile #skinSelectorContainer{left:15px}</style>") : jQuery("head").append("<style>.myfantasyleague_menuMobile{border:0;border-left-width:2px;border-style:solid;right:0;margin-right:-250px}#menu-trigger{right:0;border-right:0;-webkit-border-top-left-radius:3px;-webkit-border-bottom-left-radius:3px;-moz-border-radius-topleft:3px;-moz-border-radius-bottomleft:3px;border-top-left-radius:3px;border-bottom-left-radius:3px}.myfantasyleague_menuMobile #skinSelectorContainer{right:30px}</style>"), jQuery("#menu-trigger").on("click", function() {
	"250px" == $(this).css("margin-left") || "250px" == $(this).css("margin-right") ? (menuPositionIsLeft ? $(".myfantasyleague_menuMobile,#menu-trigger").animate({
		"margin-left": "-=250"
	}) : $(".myfantasyleague_menuMobile,#menu-trigger").animate({
		"margin-right": "-=250"
	}), $("html,body").removeClass("mobile-menu-open")) : (menuPositionIsLeft ? $(".myfantasyleague_menuMobile,#menu-trigger").animate({
		"margin-left": "+=250"
	}) : $(".myfantasyleague_menuMobile,#menu-trigger").animate({
		"margin-right": "+=250"
	}), $("html,body").addClass("mobile-menu-open")),
	$(".skinSelectorContainer").hide(),
	$("#menu-overlay").fadeToggle(),
	$(".myfantasyleague_menuMobile ul li").removeClass("arrow-down sub-arrow-down"),
	$(".myfantasyleague_menuMobile ul li.has-sub.sub-default ul").removeClass("thisExpanded").slideUp(),
	$(".hamburger").toggleClass("is-active")
}), jQuery("#menu-overlay").on("click", function() {
	$("#click-blocker").show(),
	menuPositionIsLeft ? $(".myfantasyleague_menuMobile,#menu-trigger").animate({
		"margin-left": "-=250"
	}) : $(".myfantasyleague_menuMobile,#menu-trigger").animate({
		"margin-right": "-=250"
	}),
	$("#menu-overlay").fadeToggle(),
	$(".myfantasyleague_menuMobile ul li").removeClass("arrow-down sub-arrow-down"),
	$(".myfantasyleague_menuMobile ul li.has-sub.sub-default ul").removeClass("thisExpanded").slideUp(),
	$("html,body").removeClass("mobile-menu-open"),
	$(".skinSelectorContainer").hide(),
	setTimeout("$('#click-blocker').hide()", 500),
	$(".hamburger").removeClass("is-active")
}), showMenuIcons && jQuery("head").append('<style>.myfantasyleague_menuMobile > ul > li > a:before{font-family:FontAwesome;width:22px;display:inline-block;text-indent:0;text-align:center;margin-right:10px}.myfantasyleague_menuMobile > ul > li.mm-home > a:before{content:"\\f015"}.myfantasyleague_menuMobile > ul > li.mm-myleagues > a:before{content:"\\f0cb"}.myfantasyleague_menuMobile > ul > li.mm-reports > a:before{content:"\\f080"}.myfantasyleague_menuMobile > ul > li.mm-forowners > a:before{content:"\\f0c0"}.myfantasyleague_menuMobile > ul > li.mm-forcommissioners > a:before{content:"\\f085"}.myfantasyleague_menuMobile > ul > li.mm-communications > a:before {content:"\\f0e6"}.myfantasyleague_menuMobile > ul > li.mm-links > a:before{content:"\\f0c1"}.myfantasyleague_menuMobile > ul > li.mm-help > a:before{content:"\\f29c"}.myfantasyleague_menuMobile > ul > li#slide-menu-login > a:before{content:"\\f023"}.myfantasyleague_menuMobile > ul > li.mm-login > a:before{content:"\\f023"}.myfantasyleague_menuMobile > ul > li.mm-thispage > a:before{content:"\\f0f6"}</style>'), window.location.href.indexOf("MODULE=LEAGUE_CHAT") > -1 && (jQuery("body").addClass("chat_popup"), jQuery("head").append("<style>body.chat_popup {visibility:hidden;background:#fff}body.chat_popup .mobile-wrap{position:absolute;top:5px;width:98%;left:0;right:0;margin:0 auto}body.chat_popup .mobile-wrap .report caption span a{display:none}body.chat_popup .pagebody,body.chat_popup {height:0;min-height:0}#MFLChatPopupOverlay,#MFLChatPopupContainer{visibility:visible}body.chat_popup .homepagemessage{display:none}</style>"), jQuery("body.chat_popup .pagefooter,body.chat_popup .homepagemessage,body.chat_popup .myfantasyleague_menu,body.chat_popup .pageheader").remove()), null == chatAddonInsertImage)
	var chatAddonInsertImage = !0;
if (null == chatAddonInsertLink)
	var chatAddonInsertLink = !0;
if (null == chatAddonCustomEmoji)
	var chatAddonCustomEmoji = !0;
if (null == chatHideVideoLink)
	var chatHideVideoLink = !0;
if (null == chatBottomUp)
	var chatBottomUp = !0;
if (null == chatShowLapsedTime)
	var chatShowLapsedTime = !0;
if (null == chatShowMore)
	var chatShowMore = !0;
if (null == chatDefaultDisplayMessages)
	var chatDefaultDisplayMessages = 8;
if (null == chatUseFranchiseIcons)
	var chatUseFranchiseIcons = !0;
if (null == chatFranchiseIconHeight)
	var chatFranchiseIconHeight = 20;
if (null == chatImageMaxHeight)
	var chatImageMaxHeight = 50;
if (null == chatImageMaxWidth)
	var chatImageMaxWidth = 200;
if (null == chatElapsedTimeColor)
	var chatElapsedTimeColor = "#888";
if (null == chatPopupWidth)
	var chatPopupWidth = 425;
if (null == chatPopupHeight)
	var chatPopupHeight = 450;
if (null == chatImagePath)
	var chatImagePath = "//nitrografixx.com/MFL-Chat/";
if (null == chatEmojiPath)
	var chatEmojiPath = "//nitrografixx.com/MFL-Chat/";
if (null == chatEmojiList)
	var chatEmojiList = {
		bowtie: "bowtie.png",
		smile: "smile.png",
		laughing: "laughing.png",
		blush: "blush.png",
		smiley: "smiley.png",
		relaxed: "relaxed.png",
		smirk: "smirk.png",
		heart_eyes: "heart_eyes.png",
		kissing_heart: "kissing_heart.png",
		kissing_closed_eyes: "kissing_closed_eyes.png",
		flushed: "flushed.png",
		relieved: "relieved.png",
		satisfied: "satisfied.png",
		grin: "grin.png",
		wink: "wink.png",
		stuck_out_tongue_winking_eye: "stuck_out_tongue_winking_eye.png",
		stuck_out_tongue_closed_eyes: "stuck_out_tongue_closed_eyes.png",
		grinning: "grinning.png",
		kissing: "kissing.png",
		kissing_smiling_eyes: "kissing_smiling_eyes.png",
		stuck_out_tongue: "stuck_out_tongue.png",
		sleeping: "sleeping.png",
		worried: "worried.png",
		frowning: "frowning.png",
		anguished: "anguished.png",
		_open_mouth: "open_mouth.png",
		grimacing: "grimacing.png",
		confused: "confused.png",
		hushed: "hushed.png",
		expressionless: "expressionless.png",
		unamused: "unamused.png",
		sweat_smile: "sweat_smile.png",
		sweat: "sweat.png",
		weary: "weary.png",
		_pensive: "pensive.png",
		disappointed: "disappointed.png",
		confounded: "confounded.png",
		fearful: "fearful.png",
		cold_sweat: "cold_sweat.png",
		_persevere: "persevere.png",
		joy: "joy.png",
		astonished: "astonished.png",
		scream: "scream.png",
		neckbeard: "neckbeard.png",
		tired_face: "tired_face.png",
		angry: "angry.png",
		rage: "rage.png",
		triumph: "triumph.png",
		sleepy: "sleepy.png",
		yum: "yum.png",
		mask: "mask.png",
		sunglasses: "sunglasses.png",
		dizzy_face: "dizzy_face.png",
		imp: "imp.png",
		smiling_imp: "smiling_imp.png",
		neutral_face: "neutral_face.png",
		no_mouth: "no_mouth.png",
		innocent: "innocent.png",
		alien: "alien.png",
		ari: "ari.png",
		atl: "atl.png",
		bal: "bal.png",
		buf: "buf.png",
		car: "car.png",
		chi: "chi.png",
		cin: "cin.png",
		cle: "cle.png",
		dal: "dal.png",
		den: "den.png",
		det: "det.png",
		gbp: "gbp.png",
		hou: "hou.png",
		ind: "ind.png",
		jac: "jac.png",
		kcc: "kcc.png",
		lac: "lac.png",
		mia: "mia.png",
		min: "min.png",
		nep: "nep.png",
		nos: "nos.png",
		nyg: "nyg.png",
		nyj: "nyj.png",
		_oak: "oak.png",
		_phi: "phi.png",
		_pit: "pit.png",
		lar: "lar.png",
		sea: "sea.png",
		sfo: "sfo.png",
		tbb: "tbb.png",
		ten: "ten.png",
		was: "was.png",
		broken_heart: "broken_heart.png",
		boom: "boom.png",
		exclamation: "exclamation.png",
		question: "question.png",
		zzz: "zzz.png",
		fire: "fire.png",
		shit: "shit.png",
		thumbsup: "thumbsup.png",
		thumbsdown: "thumbsdown.png",
		_ok_hand: "ok_hand.png",
		facepunch: "facepunch.png",
		fist: "fist.png",
		v: "v.png",
		_pray: "pray.png",
		eyes: "eyes.png",
		speech_balloon: "speech_balloon.png",
		thought_balloon: "thought_balloon.png",
		sunny: "sunny.png",
		umbrella: "umbrella.png",
		cloud: "cloud.png",
		snowflake: "snowflake.png",
		snowman: "snowman.png",
		zap: "zap.png",
		four_leaf_clover: "four_leaf_clover.png",
		maple_leaf: "maple_leaf.png",
		jack_o_lantern: "jack_o_lantern.png",
		ghost: "ghost.png",
		santa: "santa.png",
		christmas_tree: "christmas_tree.png",
		bell: "bell.png",
		loudspeaker: "loudspeaker.png",
		hourglass: "hourglass.png",
		toilet: "toilet.png",
		hammer: "hammer.png",
		moneybag: "moneybag.png",
		football: "football.png",
		basketball: "basketball.png",
		soccer: "soccer.png",
		baseball: "baseball.png",
		tennis: "tennis.png",
		"8ball": "8ball.png",
		rugby_football: "rugby_football.png",
		bowling: "bowling.png",
		golf: "golf.png",
		trophy: "trophy.png"
	};
var chatServerTime = currentServerTime,
	chatRowAdjustment = 1,
	chatAddMoreRows = !1,
	chatRowsToAdd = !1,
	chatReversingDirection = !1;
function openChatWindow(e) {
	var a = screen.width / 2 - chatPopupWidth / 2,
		t = screen.height / 2 - chatPopupHeight / 2;
	window.open(e.href, "popchaturl", "height=" + chatPopupHeight + ",width=" + chatPopupWidth + ",left=" + a + ",top=" + t)
}
function parseChatXML(e) {
	var a = e.getElementsByTagName("message");
	if (chatRowsToAdd = !1, chatAddMoreRows || chatReversingDirection) {
		for (var t = document.getElementById("league_chat"), r = t.getElementsByTagName("TR"), o = r.length - 1; o >= 0; o--)
			parseInt(r[o].getAttribute("id")) > 0 && t.deleteRow(o);
		chatAddMoreRows = !1,
		chatReversingDirection = !1
	}
	try {
		var i = parseInt(a[0].getAttribute("id"))
	} catch (e) {
		i = chatServerTime
	}
	if ((chatServerTime += checkEverySeconds) < i && (chatServerTime = i), chatBottomUp) {
		var s = 0,
			n = new Array;
		for (o = 0; o < a.length; o++) {
			if (s > displayMessages) {
				chatRowsToAdd = !0;
				break
			}
			var l = a[o].getAttribute("id");
			if (!document.getElementById(l)) {
				var p = a[o].getAttribute("franchise_id");
				if (null != (g = a[o].getAttribute("to"))) {
					if ("undefined" == typeof franchise_id)
						continue;
					if (g != franchise_id && p != franchise_id)
						continue
				}
			}
			n.unshift(a[o]),
			s++
		}
		a = n
	}
	var u,
		d = document.getElementById("league_chat");
	u = d ? d.getElementsByTagName("TBODY") : document.getElementsByTagName("TBODY");
	var c = !1,
		m = e.getElementsByTagName("messages")[0].getAttribute("action");
	m && "clear" == m && (c = !0);
	var f = u[0].getElementsByTagName("TR"),
		h = f[1],
		y = 0;
	if (c)
		for (; f.length > 2;)
			u[0].deleteRow(1),
			f = u[0].getElementsByTagName("TR");
	else {
		for (s = 0, o = 0; o < a.length; o++) {
			if (s > displayMessages) {
				chatRowsToAdd = !0;
				break
			}
			l = a[o].getAttribute("id");
			if (!document.getElementById(l)) {
				var g;
				p = a[o].getAttribute("franchise_id");
				if ("undefined" != typeof franchise_id && p == franchise_id && (chatServerTime -= checkEverySeconds), null != (g = a[o].getAttribute("to"))) {
					if ("undefined" == typeof franchise_id)
						continue;
					if (g != franchise_id && p != franchise_id)
						continue
				}
				for (var b = a[o].getAttribute("message"), x = b.replace("::", ": :"), P = 0; -1 != x.indexOf(":") && P < 100;) {
					var _ = (x = x.substring(x.indexOf(":") + 1, x.length)).substring(0, x.indexOf(":"));
					null != chatEmojiList[_] && (b = b.replace(":" + _ + ":", "<img src='" + chatEmojiPath + chatEmojiList[_] + "' title='~:~" + _ + "~:~' class='chatEmoji' />")),
					P++
				}
				b = b.replace(/~:~/g, ":");
				var L = a[o].getAttribute("posted"),
					B = document.createElement("TR");
				B.setAttribute("id", l),
				B.setAttribute("title", "Posted: " + L);
				var F = !1;
				null != g && (F = !0);
				var v = document.createElement("TD");
				if (chatUseFranchiseIcons) {
					var M = "<img src='" + franchiseDatabase["fid_" + p].icon + "' alt='" + franchiseDatabase["fid_" + p].name + "' title='" + franchiseDatabase["fid_" + p].name + "' class='chatTeamIcon' />";
					if (F)
						var S = "<img src='" + franchiseDatabase["fid_" + g].icon + "' alt='to " + franchiseDatabase["fid_" + g].name + "' title='to " + franchiseDatabase["fid_" + g].name + "' class='chatTeamIcon' />";
					else
						S = "";
					v.innerHTML = M + S
				} else
					v.innerHTML = (F ? "<b>" : "") + franchiseDatabase["fid_" + p].name + (F ? "</b>" : "");
				B.appendChild(v);
				var w = document.createElement("TD");
				if (w.innerHTML = (F ? "<b>" : "") + b + (F ? "</b>" : ""), chatShowLapsedTime && (w.innerHTML += "<br/><span class='chatLapsedTime' id='chatid_" + l + "'></span>"), B.appendChild(w), chatBottomUp) {
					var j = f[o + (f.length - o) - chatRowAdjustment];
					u[0].insertBefore(B, j)
				} else
					u[0].insertBefore(B, h);
				"undefined" != typeof franchise_id && p != franchise_id && y++
			}
			chatShowLapsedTime && updateChatPostTime(l),
			s++
		}
		for (o = (f = u[0].getElementsByTagName("TR")).length; o > displayMessages + 1; o--)
			f[o] && f[o].getAttribute("id") && (chatBottomUp ? u[0].deleteRow(1) : u[0].deleteRow(o));
		f = u[0].getElementsByTagName("TR");
		for (o = 1; o < f.length; o++)
			f[o] && f[o].getAttribute("id") && "loadingchatdata" == f[o].getAttribute("id") && u[0].deleteRow(o)
	}
	f = u[0].getElementsByTagName("TR");
	for (o = 1; o < f.length; o++) {
		var k = "eventablerow";
		o % 2 == 1 && (k = "oddtablerow"),
		f[o].setAttribute("className", k),
		f[o].setAttribute("class", k)
	}
	a = null,
	1 == y && (play_audio_clip("ohoh", "chat_audio_clip"), document.getElementById("body_home") || setTimeout("document.chat.chat.focus()", 100)),
	document.getElementById("chatMore").style.display = chatRowsToAdd && chatShowMore ? "inline" : "none"
}
function addMoreBottomUpToChat() {
	var e = document.getElementById("league_chat").getElementsByTagName("TH");
	e[1].innerHTML = "Message <span id='chatMore' style='display:none'>(<span style='cursor:pointer' onclick='addMoreChat()'>more</span>)</span>",
	e[1].innerHTML += chatBottomUp ? " <span id='bottom-up-chat'><img src='" + chatImagePath + "bottom-up-chat.png' style='cursor:pointer; vertical-align:bottom' alt='Click for Top-Down Chat!' title='Click for Top-Down Chat!' onclick='doBottomUpChat(false)' /></span>" : " <span id='bottom-up-chat'><img src='" + chatImagePath + "top-down-chat.png' style='cursor:pointer; vertical-align:bottom' alt='Click for Bottom-Up Chat!' title='Click for Bottom Chat!' onclick='doBottomUpChat(true)' /></span>"
}
function doBottomUpChat(e) {
	chatBottomUp = e,
	chatReversingDirection = !0,
	document.getElementById("bottom-up-chat").innerHTML = e ? "<img src='" + chatImagePath + "bottom-up-chat.png' style='cursor:pointer; vertical-align:bottom' alt='Click for Top-Down Chat!' title='Click for Top-Down Chat!' onclick='doBottomUpChat(false)' />" : "<img src='" + chatImagePath + "top-down-chat.png' style='cursor:pointer; vertical-align:bottom' alt='Click for Bottom-Up Chat!' title='Click for Bottom-up Chat!' onclick='doBottomUpChat(true)' />";
	var a,
		t = document.getElementById("league_chat"),
		r = (a = t ? t.getElementsByTagName("TBODY") : document.getElementsByTagName("TBODY"))[0].getElementsByTagName("TR")[1],
		o = document.createElement("TR");
	o.setAttribute("id", 1);
	var i = document.createElement("TD");
	i.setAttribute("colspan", 2),
	i.setAttribute("class", "chatNotification"),
	i.innerHTML = "<b>reversing chat direction . . . </b>",
	o.appendChild(i),
	a[0].insertBefore(o, r),
	e ? localStorage.setItem("emojiChat_bottomUp_" + year + "_" + league_id, "yes") : localStorage.setItem("emojiChat_bottomUp_" + year + "_" + league_id, "no")
}
function addMoreChat() {
	displayMessages += 5,
	chatAddMoreRows = !0;
	var e,
		a = document.getElementById("league_chat"),
		t = (e = a ? a.getElementsByTagName("TBODY") : document.getElementsByTagName("TBODY"))[0].getElementsByTagName("TR")[1],
		r = document.createElement("TR");
	r.setAttribute("id", 1);
	var o = document.createElement("TD");
	o.setAttribute("colspan", 2),
	o.setAttribute("class", "chatNotification"),
	o.innerHTML = "<b>adding more rows . . . </b>",
	r.appendChild(o),
	e[0].insertBefore(r, t)
}
function addEmoji(e) {
	MFLChatPopupClose(),
	jQuery("#chat_text_field").val(jQuery("#chat_text_field").val() + " :" + e + ":"),
	document.getElementById("chat_text_field").focus()
}
function updateChatPostTime(e) {
	var a = 1e3 * parseInt(e),
		t = 1e3 * chatServerTime,
		r = parseInt((t - a) / 1e3);
	r < 0 && (r = 0);
	var o = new Date(parseInt(a)),
		i = new Array(12);
	i[0] = "January",
	i[1] = "February",
	i[2] = "March",
	i[3] = "April",
	i[4] = "May",
	i[5] = "June",
	i[6] = "July",
	i[7] = "August",
	i[8] = "September",
	i[9] = "October",
	i[10] = "November",
	i[11] = "December";
	var s = i[o.getMonth()] + " " + o.getDate(),
		n = (o = new Date(parseInt(a)), new Array(7));
	n[0] = "Sunday",
	n[1] = "Monday",
	n[2] = "Tuesday",
	n[3] = "Wednesday",
	n[4] = "Thursday",
	n[5] = "Friday",
	n[6] = "Saturday";
	var l = n[o.getDay()];
	if ((o = new Date(parseInt(a))).getHours() < 12)
		var p = "am";
	else
		p = "pm";
	var u = o.getHours();
	0 == u && (u = 12),
	u > 12 && (u -= 12);
	var d = o.getMinutes();
	d < 10 && (d = "0" + d);
	t = u + ":" + d + " " + p;
	if (1 == r)
		var c = r + " second ago";
	else if (60 == r)
		c = "1 minute ago";
	else if (3600 == r)
		c = "1 hour ago";
	else if (86400 == r)
		c = "Yesterday";
	else if (r < 60)
		c = r + " seconds ago";
	else if (r < 120)
		c = "1 minute ago";
	else if (r < 3600)
		c = parseInt(r / 60) + " minutes ago";
	else if (r < 7200)
		c = "1 hour ago";
	else if (r < 86400)
		c = parseInt(r / 3600) + " hours ago";
	else if (r < 604800)
		c = l + " " + t;
	else
		c = s + " " + t;
	document.getElementById("chatid_" + e).innerHTML = c
}
function MFLChatPopupClose() {
	jQuery("#MFLChatPopupOverlay").hide(),
	jQuery("#MFLChatPopupContainer").hide()
}
function chatPopupImage() {
	jQuery("#MFLChatPopupOverlay").show(),
	jQuery("#MFLChatPopupContainer").show(),
	jQuery("#MFLChatPopupCaption").html("Add Image to Chat"),
	jQuery("#MFLChatPopupHeader").html('<table class="report popreport"><tbody><tr class="oddtablerow"><td style="text-align:center"><br />Image URL: <input type="text" id="chat_imagetext_field" size="23" maxlength="150" /><input type="button" value="Insert" class="imageinsert" style="margin-left:5px"/><br /></td></tr></tbody></table>'),
	jQuery("#MFLChatPopupContainer .imageinsert").on("click", function() {
		var e = jQuery("#chat_imagetext_field").val();
		if ("" != e) {
			-1 != e.indexOf("http://") && (e = e.substring(e.indexOf("http://") + 7, e.length)),
			-1 != e.indexOf("https://") && (e = e.substring(e.indexOf("https://") + 8, e.length)),
			-1 != e.indexOf("//") && (e = e.substring(e.indexOf("//") + 2, e.length));
			var a = jQuery("#chat_text_field").val(),
				t = '<img src="//' + e + '" />';
			jQuery("#chat_text_field").val(a + " " + t)
		}
		MFLChatPopupClose()
	})
}
function chatPopupLink() {
	jQuery("#MFLChatPopupOverlay").show(),
	jQuery("#MFLChatPopupContainer").show(),
	jQuery("#MFLChatPopupCaption").html("Add Link to Chat"),
	jQuery("#MFLChatPopupHeader").html('<table class="report popreport"><tbody><tr class="oddtablerow"><td style="text-align:center">Link URL: <input type="text" id="chat_link_field" size="27" maxlength="150" /><br/><br/>Link Text: <input type="text" id="chat_linktext_field" size="23" maxlength="150" /><input type="button" value="Insert" class="linkinsert" style="margin-left:5px"/></td></tr></tbody></table>'),
	jQuery("#MFLChatPopupContainer .linkinsert").on("click", function() {
		var e = jQuery("#chat_link_field").val();
		if ("" != e) {
			-1 != e.indexOf("http://") && (e = e.substring(e.indexOf("http://") + 7, e.length)),
			-1 != e.indexOf("https://") && (e = e.substring(e.indexOf("https://") + 8, e.length)),
			-1 != e.indexOf("//") && (e = e.substring(e.indexOf("//") + 2, e.length));
			var a = jQuery("#chat_linktext_field").val();
			"" == a && (a = e);
			var t = jQuery("#chat_text_field").val(),
				r = '<a href="//' + e + '" target="_blank">' + a + "</a>";
			jQuery("#chat_text_field").val(t + " " + r)
		}
		MFLChatPopupClose()
	})
}
function chatPopupEmoji() {
	var e = "";
	for (var a in e += '<table class="report popreport"><tbody><tr class="oddtablerow"><td style="text-align:center"><div style="overflow-y:scroll;-webkit-overflow-scrolling: touch;height:160px">', chatEmojiList)
		chatEmojiList.hasOwnProperty(a) && (e += "<img src='" + chatEmojiPath + chatEmojiList[a] + "' title=':" + a + ":' class='chatTableEmoji' onclick='addEmoji(\"" + a + "\")' />");
	e += "</div></td></tr></tbody></table>",
	jQuery("#MFLChatPopupOverlay").show(),
	jQuery("#MFLChatPopupContainer").show(),
	jQuery("#MFLChatPopupCaption").html("Add Emoji to Chat"),
	jQuery("#MFLChatPopupHeader").html(e),
	jQuery("#MFLChatPopupContainer .linkinsert").on("click", function() {
		var e = jQuery("#chat_link_field").val();
		if ("" != e) {
			-1 != e.indexOf("http://") && (e = e.substring(e.indexOf("http://") + 7, e.length)),
			-1 != e.indexOf("https://") && (e = e.substring(e.indexOf("https://") + 8, e.length)),
			-1 != e.indexOf("//") && (e = e.substring(e.indexOf("//") + 2, e.length));
			var a = jQuery("#chat_linktext_field").val();
			"" == a && (a = e);
			var t = jQuery("#chat_text_field").val(),
				r = '<a href="//' + e + '" target="_blank">' + a + "</a>";
			jQuery("#chat_text_field").val(t + " " + r)
		}
		MFLChatPopupClose()
	})
}
parseInt(chatDefaultDisplayMessages) < 2 && (chatDefaultDisplayMessages = 8),
"no" == localStorage.getItem("emojiChat_bottomUp_" + year + "_" + league_id) && (chatBottomUp = !1),
"yes" == localStorage.getItem("emojiChat_bottomUp_" + year + "_" + league_id) && (chatBottomUp = !0),
"undefined" == typeof franchise_id && (chatRowAdjustment = 0),
jQuery(document).ready(function(e) {
	if (jQuery('.myfantasyleague_menu ul li:contains("Communications") a:contains("Chat")').replaceWith('<a href="' + baseURLDynamic + "/" + year + "/home/" + league_id + '?MODULE=LEAGUE_CHAT" onclick="openChatWindow(this); return false;" target="_blank">League Chat</a>'), document.getElementById("league_chat")) {
		if (chatDefaultDisplayMessages > 1 && (displayMessages = chatDefaultDisplayMessages - 1), e("#league_chat caption span a").replaceWith('<a href="' + baseURLDynamic + "/" + year + "/home/" + league_id + '?MODULE=LEAGUE_CHAT" onclick="openChatWindow(this); return false;" target="_blank"><img src="//www03.myfantasyleague.com/window-16x16.png" title="New Window" alt="New Window" width="16" border="0" height="16"></a>'), "undefined" != typeof franchise_id && document.getElementById("chat_text_field")) {
			var a = 280;
			"0000" == franchise_id && (a -= 20),
			chatHideVideoLink && (a += 18),
			chatAddonCustomEmoji && (a -= 18),
			chatAddonInsertLink && (a -= 18),
			chatAddonInsertImage && (a -= 18),
			document.getElementById("chat_text_field").style.width = a + "px"
		}
		addMoreBottomUpToChat(),
		e("head").append("<style>#league_chat td:nth-child(2) img.chatEmoji{max-height:24px;width:auto}.chatTableEmoji{max-height:24px;width:auto;cursor:pointer;margin:4px}.chatTeamIcon{height:" + chatFranchiseIconHeight + "px;width:auto;display:block}.chatLapsedTime{font-style:italic;font-size:9px;color:" + chatElapsedTimeColor + "}.chatNotification{text-align:center;font-style:italic}#league_chat input,#league_chat a,#league_chat img{vertical-align:middle}#chat_text_field{margin:3px 0}#league_chat td:nth-child(2) img{max-height:" + chatImageMaxHeight + "px;max-width:" + chatImageMaxWidth + "px;width:auto}#league_chat td:nth-child(1){width: 1px;}</style>"),
		e("head").append("<style>@media only screen and (max-height: 35.5em) and (orientation: landscape){#MFLChatPopupContainer{max-height:235px;max-height:14.688rem;}}#MFLChatPopupContainer{overflow:hidden;position:fixed;z-index:99999;width:100%;max-width:400px;height:max-content;margin:auto;left:0;right:0;top:0;bottom:0}#MFLChatPopupContainer .report{height:auto;padding:0;border-width:2px;border-width:0.125rem;overflow:hidden}#MFLChatPopupContainer caption{width:100%;border-left:0;border-right:0;border-top:0;display:inline-block;border-radius:0;}#MFLChatPopupContainer .popreport{width:100%;height:auto;border-spacing:0;border:0px;margin-bottom:5px}#MFLChatPopupContainer .popreport td{padding: 10px 5px 10px 5px}#MFLChatPopupHeader{text-align:center;width:100%}#MFLChatPopupOverlay{height: 100%;left:0;opacity:0.7;position:fixed;top:0;width:100%;z-index:99999;background-color:#000;}</style>"),
		e(".pagebody").append('<div id="MFLChatPopupOverlay" style="display: none"></div>'),
		e("#MFLChatPopupOverlay").off().on("click", function() {
			MFLChatPopupClose()
		}),
		e(".pagebody").append('<div id="MFLChatPopupContainer" style="display:none"><div class="report"></div>'),
		e("#MFLChatPopupContainer .report").append('<caption><span id="MFLChatPopupCaption"></span></caption>'),
		e("#MFLChatPopupContainer .report").append('<span id="MFLPlayerPopupClose" onclick="MFLChatPopupClose()">X</span>'),
		e("#MFLChatPopupContainer .report").append('<div id="MFLChatPopupHeader"></div>'),
		chatAddonCustomEmoji && e('#league_chat input[value="Post"]').after('<img src="' + chatEmojiPath + 'smile.png" style="height:16px;width:16px;cursor:pointer;margin-left:2px" onclick="chatPopupEmoji()" alt="Show Emojis" title="Show Emojis" />'),
		chatAddonInsertLink && e('#league_chat input[value="Post"]').after('<img src="' + chatImagePath + 'link.png" height="16" width="16" style="cursor:pointer;vertical-align:middle;margin-left:2px" alt="Insert Link" title="Insert Link" onclick="chatPopupLink()" />'),
		chatAddonInsertImage && e('#league_chat input[value="Post"]').after('<img src="' + chatImagePath + 'insert_image.png" height="16" width="16" style="cursor:pointer;vertical-align:middle;margin-left:2px" alt="Insert Image" title="Insert Image" onclick="chatPopupImage()" />'),
		chatHideVideoLink && e("#league_chat a[href*='O=222']").remove()
	}
	jQuery("head").append("<style>body.chat_popup .mobile-wrap{visibility:visible}</style>")
}),
"undefined" == typeof playerDatabase && jQuery("head").append('<script type="text/javascript" src="' + baseURLDynamic + "/fflnet" + year + '/mfl_player_database.js"><\/script>');
var MFLPlayerPopupCurrentPID,
	MFLPlayerPopupVersion = "09-25-2018",
	MFLPlayerPopupTracker = new Array,
	MFLPlayerPopupTeamNames = new Array,
	MFLPlayerPopupIdIgnore = new Array,
	MFLPlayerPopupOnloadContent = new Array,
	MFLPlayerPopupStart = (new Date).getTime(),
	MFLPlayerPopupValidNFLAbbrev = new Array("FA", "ARI", "ATL", "BAL", "BUF", "CAR", "CHI", "CIN", "CLE", "DAL", "DEN", "DET", "GBP", "HOU", "IND", "JAC", "KCC", "LAC", "LAR", "MIA", "MIN", "NEP", "NOS", "NYG", "NYJ", "OAK", "PHI", "PIT", "SEA", "SFO", "TBB", "TEN", "WAS", "RAM", "LVR", "STL", "SDC"),
	MFLPlayerPopupValidPosition = new Array("Coach", "QB", "TMQB", "RB", "TMRB", "FB", "WR", "TMWR", "TE", "TMTE", "KR", "PK", "TMPK", "PN", "TMPN", "DE", "DT", "TMDL", "LB", "TMLB", "CB", "S", "TMDB", "Off", "Def", "ST"),
	MFLPlayerPopupExtraTitles = {
		salary: "Salary",
		contractyear: "Contract Year",
		contractstatus: "Contract Status",
		contractinfo: "Contract Information",
		drafted: "Drafted"
	};
if (void 0 === MFLPopupEnablePlayerNews)
	var MFLPopupEnablePlayerNews = !0;
if (void 0 === MFLPopupEnableQuickIcon)
	var MFLPopupEnableQuickIcon = !1;
if (void 0 === MFLPopupEnableArticle)
	var MFLPopupEnableArticle = !0;
if (void 0 === MFLPopupOmitLinks)
	var MFLPopupOmitLinks = !1;
if (void 0 === MFLPopupOmitStatus)
	var MFLPopupOmitStatus = !1;
if (void 0 === MFLPopupEnableAutoNotification)
	var MFLPopupEnableAutoNotification = !1;
if (void 0 === MFLPopupEnableTrade)
	var MFLPopupEnableTrade = !0;
if (void 0 === MFLPopupEnableTradePoll)
	var MFLPopupEnableTradePoll = !0;
if (void 0 === MFLPopupEnableReminders)
	var MFLPopupEnableReminders = !0;
if (void 0 === MFLPopupEnableMessages)
	var MFLPopupEnableMessages = !0;
if (void 0 === MFLPopupEnableCommishMessage)
	var MFLPopupEnableCommishMessage = !1;
if (void 0 === MFLPopupCommishMessage)
	var MFLPopupCommishMessage = "";
if (void 0 === MFLPlayerPopupIncludeNFLLogo)
	var MFLPlayerPopupIncludeNFLLogo = !0;
if (void 0 === MFLPlayerPopupLinkPopup)
	var MFLPlayerPopupLinkPopup = !1;
if (void 0 === ShowMFLsearch)
	var ShowMFLsearch = !1;
if (void 0 === SearchMobileCSS)
	var SearchMobileCSS = !1;
if (void 0 === MFLPopupUseTaxiSquadRules)
	var MFLPopupUseTaxiSquadRules = !1;
if (void 0 === MFLPopupAddDraftToStatus)
	var MFLPopupAddDraftToStatus = !1;
if (void 0 === MFLPopupUseNewsFontAwesome)
	var MFLPopupUseNewsFontAwesome = !1;
if (void 0 === MFLPopupWelcomeFontAwesome)
	var MFLPopupWelcomeFontAwesome = '<i class="fa fa-lock MFLPopupFontAwesome MFLPopupFontAwesomeMenu MFLPopupWelcome" aria-hidden="true"></i>';
if (void 0 === MFLPopupSearchFontAwesome)
	var MFLPopupSearchFontAwesome = '<i class="fa fa-search-plus MFLPopupFontAwesome MFLPopupFontAwesomeMenu MFLPopupSearch" aria-hidden="true"></i>';
if (void 0 === MFLPopupNotifyFontAwesome)
	var MFLPopupNotifyFontAwesome = '<i class="fa fa-exclamation-circle MFLPopupFontAwesome MFLPopupFontAwesomeMenu MFLPopupNotify" aria-hidden="true"></i>';
if (void 0 === MFLPopupNotify2FontAwesome)
	var MFLPopupNotify2FontAwesome = '<i class="fa fa-exclamation-circle MFLPopupFontAwesome MFLPopupFontAwesomeCaption MFLPopupNotify2" aria-hidden="true"></i>';
if (void 0 === MFLPopupNewNewsFontAwesome)
	var MFLPopupNewNewsFontAwesome = '<i class="fa fa-file-text MFLPopupFontAwesome MFLPopupFontAwesomeNews MFLPopupNewNews" aria-hidden="true"></i>';
if (void 0 === MFLPopupOldNewsFontAwesome)
	var MFLPopupOldNewsFontAwesome = '<i class="fa fa-file-text MFLPopupFontAwesome MFLPopupFontAwesomeNews MFLPopupOldNews" aria-hidden="true"></i>';
if (void 0 === MFLPopupNoNewsFontAwesome)
	var MFLPopupNoNewsFontAwesome = '<i class="fa fa-file MFLPopupFontAwesome MFLPopupFontAwesomeNews MFLPopupNoNews" aria-hidden="true"></i>';
if (void 0 === MFLPopupArticleFontAwesome)
	var MFLPopupArticleFontAwesome = '<i class="fa fa-newspaper-o MFLPopupFontAwesome MFLPopupFontAwesomeArticle MFLPopupArticle" aria-hidden="true"></i>';
if (void 0 === MFLPlayerPopupNewsNone)
	var MFLPlayerPopupNewsNone = "//www.nitrografixx.com/MFL-Popups/newsNone.gif";
if (void 0 === MFLPlayerPopupNewsOld)
	var MFLPlayerPopupNewsOld = "//www.nitrografixx.com/MFL-Popups/newsOld.gif";
if (void 0 === MFLPlayerPopupNewsNew)
	var MFLPlayerPopupNewsNew = "//www.nitrografixx.com/MFL-Popups/newsNew.gif";
if (void 0 === MFLPlayerPopupIncludeProjections)
	var MFLPlayerPopupIncludeProjections = !0;
MFLPopupUseNewsFontAwesome && (jQuery("head").append('<script src="//use.fontawesome.com/6ccd97559b.js"><\/script>'), jQuery("head").append("<style>.fa.MFLPopupFontAwesomeMenu {font-size: 24px;float: right;padding-left: 8px;padding-top: 6px;}.fa.MFLPopupNotify2{float:initial;font-size:20px}.fa.MFLPopupFontAwesomeCaption {font-size: 18px;}.MFLPopupNewsWrapper, .MFLPopupArticleWrapper{position:relative;cursor:pointer;}.fa.MFLPopupFontAwesomeNews,.fa.MFLPopupFontAwesomeArticle {font-size:10px;padding-left:4px;position:absolute;bottom:6px;}.fa.MFLPopupNewNews{color:orangered}.fa.MFLPopupOldNews{color:goldenrod}.fa.MFLPopupNoNews{color:#fff800}.fa.MFLPopupArticle{color:#fff800}</style>")),
MFLPlayerPopupIncludeProjections && jQuery("head").append("<style>#MFLPlayerPopupProjections{position:relative;height:280px;height:17.5rem;overflow:auto;-webkit-overflow-scrolling:touch}</style>");
try {
	CameraTag.jQueryPreInstalled = !0
} catch (e) {}
if (void 0 === mfl_rosters)
	var mfl_rosters = new Array;
if (void 0 === mfl_injuries)
	var mfl_injuries = new Array;
function doMFL_rosters_player(e, a, t) {
	mfl_rosters["fid_" + e].player["pid_" + a] = {
		id: a,
		status: t.status
	},
	void 0 === playerDatabase && (playerDatabase = new Array),
	void 0 === playerDatabase["pid_" + a] && (playerDatabase["pid_" + a] = new Array, customPlayerString += a + ","),
	void 0 === playerDatabase["pid_" + a].fid ? playerDatabase["pid_" + a].fid = e + "," : playerDatabase["pid_" + a].fid += e + ",",
	void 0 === playerDatabase["pid_" + a].rosterStatus ? playerDatabase["pid_" + a].rosterStatus = t.status + "," : playerDatabase["pid_" + a].rosterStatus += t.status + ",",
	void 0 === t.contractStatus ? (mfl_rosters["fid_" + e].player["pid_" + a].contractStatus = "", playerDatabase["pid_" + a].contractStatus = "") : (mfl_rosters["fid_" + e].player["pid_" + a].contractStatus = t.contractStatus, playerDatabase["pid_" + a].contractStatus = t.contractStatus),
	void 0 === t.contractYear ? (mfl_rosters["fid_" + e].player["pid_" + a].contractYear = "", playerDatabase["pid_" + a].contractYear = "") : (mfl_rosters["fid_" + e].player["pid_" + a].contractYear = t.contractYear, playerDatabase["pid_" + a].contractYear = t.contractYear),
	void 0 === t.contractInfo ? (mfl_rosters["fid_" + e].player["pid_" + a].contractInfo = "", playerDatabase["pid_" + a].contractInfo = "") : (mfl_rosters["fid_" + e].player["pid_" + a].contractInfo = t.contractInfo, playerDatabase["pid_" + a].contractInfo = t.contractInfo),
	void 0 === t.drafted ? (mfl_rosters["fid_" + e].player["pid_" + a].drafted = "", playerDatabase["pid_" + a].drafted = "") : (mfl_rosters["fid_" + e].player["pid_" + a].drafted = t.drafted, playerDatabase["pid_" + a].drafted = t.drafted),
	void 0 === t.salary ? (mfl_rosters["fid_" + e].player["pid_" + a].salary = "", playerDatabase["pid_" + a].salary = "") : (mfl_rosters["fid_" + e].player["pid_" + a].salary = t.salary, playerDatabase["pid_" + a].salary = t.salary)
}
function doMFL_rosters(e, a) {
	if (0 === Object.keys(mfl_rosters).length) {
		console.log(a + ": Global 'mfl_rosters' & updating 'playerDatabase'!"),
		customPlayerString = "";
		var t = baseURLDynamic + "/" + year + "/export?TYPE=rosters&L=" + league_id + "&JSON=1";
		jQuery.ajax({
			url: t,
			success: function(a) {
				for (var t = 0; t < a.rosters.franchise.length; t++) {
					var r = a.rosters.franchise[t].id;
					mfl_rosters["fid_" + r] = {
						id: r,
						player: new Array
					};
					try {
						if (void 0 !== a.rosters.franchise[t].player.length)
							for (var o = 0; o < a.rosters.franchise[t].player.length; o++) {
								doMFL_rosters_player(r, n = (i = a.rosters.franchise[t].player[o]).id, i)
							}
						else
							doMFL_rosters_player(r, n = (i = a.rosters.franchise[t].player).id, i)
					} catch (e) {
						try {
							var i;
							doMFL_rosters_player(r, n = (i = a.rosters.franchise[t].player).id, i)
						} catch (e) {}
					}
				}
				if ("" !== customPlayerString) {
					var s = customPlayerString.split(",");
					for (t = 0; t < s.length - 1; t++) {
						var n = s[t];
						playerDatabase["pid_" + n].name = "Invalid Player",
						playerDatabase["pid_" + n].position = "na",
						playerDatabase["pid_" + n].team = "FA",
						playerDatabase["pid_" + n].status = "na"
					}
					var l = baseURLDynamic + "/" + year + "/export?TYPE=players&PLAYERS=" + customPlayerString + "&L=" + league_id + "&JSON=1";
					jQuery.ajax({
						url: l,
						success: function(e) {
							try {
								for (var a = 0; a < e.players.player.length; a++) {
									var t = e.players.player[a],
										r = t.id;
									playerDatabase["pid_" + r].name = t.name,
									playerDatabase["pid_" + r].position = t.position,
									playerDatabase["pid_" + r].team = t.team,
									void 0 === t.status ? playerDatabase["pid_" + r].status = "" : playerDatabase["pid_" + r].status = t.status
								}
							} catch (e) {}
						},
						async: e
					})
				}
			},
			async: e
		})
	}
}
function doMFL_injuries(e, a) {
	if (0 === Object.keys(mfl_injuries).length) {
		console.log(a + ": Global 'mfl_injuries'!");
		var t = baseURLDynamic + "/" + year + "/export?TYPE=injuries&JSON=1";
		jQuery.ajax({
			url: t,
			success: function(e) {
				mfl_injuries = {
					week: e.injuries.week,
					timestamp: e.injuries.timestamp,
					player: new Array
				};
				for (var a = 0; a < e.injuries.injury.length; a++) {
					var t = e.injuries.injury[a],
						r = t.id,
						o = t.status.substr(0, 1);
					mfl_injuries.player["pid_" + r] = {
						id: r,
						status: t.status,
						details: t.details,
						code: o
					}
				}
			},
			async: e
		})
	}
}
function setCookie(e, a, t) {
	var r = new Date;
	r.setTime(r.getTime() + 24 * t * 60 * 60 * 1e3);
	var o = "expires=" + r.toUTCString();
	document.cookie = e + "=" + a + ";" + o + ";path=/"
}
function getCookie(e) {
	for (var a = e + "=", t = document.cookie.split(";"), r = 0; r < t.length; r++) {
		for (var o = t[r]; " " === o.charAt(0);)
			o = o.substring(1);
		if (0 === o.indexOf(a))
			return o.substring(a.length, o.length)
	}
	return ""
}
function MFLPlayerPopupCreateContainer() {
	jQuery("body").append("<div id='isMediaContainer' style='display:none'>"),
	jQuery("#isMediaContainer").append("<div class='isMedia'>"),
	jQuery("body").append("<div id='MFLPlayerPopupOverlay'>"),
	jQuery("body").append("<div id='MFLPlayerPopupContainer' style='left:0!important;right:0!important;top:0!important;bottom:0!important;margin:auto'>"),
	jQuery("#MFLPlayerPopupContainer").append("<caption class='MFLPlayerPopupHeaderCaption'><span id='MFLPlayerPopupName'></span></caption>"),
	jQuery("#MFLPlayerPopupContainer").append("<span id='MFLPlayerPopupClose' onclick='MFLPlayerPopupClose()'>X</span>"),
	jQuery("#MFLPlayerPopupContainer").append("<div id='MFLPlayerPopupLoading'><center>Loading Content . . .<br><br><div class='MFLPlayerPopupLoader'></div></center></div>"),
	jQuery("#MFLPlayerPopupContainer").append("<div id='MFLPlayerPopupArticleLoaded'>"),
	jQuery("#MFLPlayerPopupContainer").append("<div id='MFLPlayerPopupLoaded'>"),
	jQuery("#MFLPlayerPopupLoaded").append("<div id='MFLPlayerPopupHeader'></div>"),
	jQuery("#MFLPlayerPopupLoaded").append("<div class='MFLPopTabWrap'><ul class='MFLPlayerPopupTab'></ul></div><div id='MFLPlayerPopupLinks'></div>"),
	jQuery(".MFLPlayerPopupTab").append("<li class='MFLPlayerPopupPlayerTabs'><a href='javascript:void(0)'  class='MFLPlayerPopupTabLinks' onclick=\"MFLPlayerPopupOpenTab(event, 'MFLPlayerPopupNews')\" id='MFLPlayerPopupTabLinksNews'><span class='pt-hide'>Player</span> News</a></li>"),
	jQuery(".MFLPlayerPopupTab").append("<li class='MFLPlayerPopupPlayerTabs' id='MFLPlayerPopupBioTab'><a href='javascript:void(0)' class='MFLPlayerPopupTabLinks' onclick=\"MFLPlayerPopupOpenTab(event, 'MFLPlayerPopupBio')\">Bio</a></li>"),
	jQuery(".MFLPlayerPopupTab").append("<li class='MFLPlayerPopupPlayerTabs'><a href='javascript:void(0)'  class='MFLPlayerPopupTabLinks' onclick=\"MFLPlayerPopupOpenTab(event, 'MFLPlayerPopupStats')\"><span class='pt-hide'>" + year + "</span> Stats</a></li>"),
	MFLPlayerPopupIncludeProjections && jQuery(".MFLPlayerPopupTab").append("<li class='MFLPlayerPopupPlayerTabs'><a href='javascript:void(0)'  class='MFLPlayerPopupTabLinks' onclick=\"MFLPlayerPopupOpenTab(event, 'MFLPlayerPopupProjections')\">Proj.</a></li>"),
	jQuery(".MFLPlayerPopupTab").append("<li class='MFLPlayerPopupPlayerTabs'><a href='javascript:void(0)'  class='MFLPlayerPopupTabLinks' onclick=\"MFLPlayerPopupOpenTab(event, 'MFLPlayerPopupStatsHistory')\">Career <span class='pt-hide'>Stats</span></a></li>"),
	(MFLPopupEnableTrade || MFLPopupEnableTradePoll) && jQuery(".MFLPlayerPopupTab").append("<li class='MFLPlayerPopupNotificationTabs'><a href='javascript:void(0)'  class='MFLPlayerPopupTabLinks' onclick=\"MFLPlayerPopupOpenTab(event, 'MFLPlayerPopupTrades')\" id='MFLPlayerPopupTabLinksTrades'>Trades</a></li>"),
	MFLPopupEnableCommishMessage && "" !== MFLPopupCommishMessage && jQuery(".MFLPlayerPopupTab").append("<li class='MFLPlayerPopupNotificationTabs'><a href='javascript:void(0)'  class='MFLPlayerPopupTabLinks' onclick=\"MFLPlayerPopupOpenTab(event, 'MFLPlayerPopupCommishMessage')\" id='MFLPlayerPopupTabLinksCommishMessage'>Commish Msg</a></li>"),
	MFLPopupEnableReminders && jQuery(".MFLPlayerPopupTab").append("<li class='MFLPlayerPopupNotificationTabs'><a href='javascript:void(0)'  class='MFLPlayerPopupTabLinks' onclick=\"MFLPlayerPopupOpenTab(event, 'MFLPlayerPopupReminders')\" id='MFLPlayerPopupTabLinksReminders'>Reminders</a></li>"),
	MFLPopupEnableMessages && jQuery(".MFLPlayerPopupTab").append("<li class='MFLPlayerPopupNotificationTabs'><a href='javascript:void(0)'  class='MFLPlayerPopupTabLinks' onclick=\"MFLPlayerPopupOpenTab(event, 'MFLPlayerPopupMessages')\" id='MFLPlayerPopupTabLinksMessages'>Messages</a></li>"),
	jQuery("#MFLPlayerPopupLoaded").append("<div id='MFLPlayerPopupNews' class='MFLPlayerPopupTabContent'></div>"),
	jQuery("#MFLPlayerPopupLoaded").append("<div id='MFLPlayerPopupBio' class='MFLPlayerPopupTabContent'>Bio Table</div>"),
	jQuery("#MFLPlayerPopupLoaded").append("<div id='MFLPlayerPopupStatsHistory' class='MFLPlayerPopupTabContent'>Stats History Table</div>"),
	jQuery("#MFLPlayerPopupLoaded").append("<div id='MFLPlayerPopupStats' class='MFLPlayerPopupTabContent'>Stats Table</div>"),
	MFLPlayerPopupIncludeProjections && jQuery("#MFLPlayerPopupLoaded").append("<div id='MFLPlayerPopupProjections' class='MFLPlayerPopupTabContent'><div id='MFLPlayerPopupLoading'><center>Loading Content . . .<br><br><div class='MFLPlayerPopupLoader'></div></center></div></div>"),
	jQuery("#MFLPlayerPopupLoaded").append("<div id='MFLPlayerPopupTrades' class='MFLPlayerPopupTabContent'>No Data</div>"),
	jQuery("#MFLPlayerPopupLoaded").append("<div id='MFLPlayerPopupCommishMessage' class='MFLPlayerPopupTabContent'>No Data</div>"),
	jQuery("#MFLPlayerPopupLoaded").append("<div id='MFLPlayerPopupReminders' class='MFLPlayerPopupTabContent'>No Data</div>"),
	jQuery("#MFLPlayerPopupLoaded").append("<div id='MFLPlayerPopupMessages' class='MFLPlayerPopupTabContent'>No Data</div>"),
	jQuery("#MFLPlayerPopupContainer").wrapInner("<div class='report'></div>"),
	jQuery("#MFLPlayerPopupOverlay").off().on("click", function() {
		MFLPlayerPopupClose()
	})
}
function MFLPlayerPopupClose() {
	jQuery("#MFLPlayerPopupOverlay").hide(),
	jQuery("#MFLPlayerPopupContainer").hide(),
	jQuery(".MFLPlayerPopupTabContent").hide(),
	jQuery("#MFLPlayerPopupContainer").removeClass("MFLPlayerPopupArticleContainer"),
	jQuery("#MFLPlayerPopupContainer").removeClass("MFLPlayerPopupNotificationContainer")
}
function MFLPlayerPopupOpenTab(e, a) {
	var t,
		r,
		o;
	for (r = document.getElementsByClassName("MFLPlayerPopupTabContent"), t = 0; t < r.length; t++)
		r[t].style.display = "none";
	for (o = document.getElementsByClassName("MFLPlayerPopupTabLinks"), t = 0; t < o.length; t++)
		o[t].className = o[t].className.replace(" active", "");
	document.getElementById(a).style.display = "block",
	e.currentTarget.className += " active",
	"MFLPlayerPopupProjections" === a && setTimeout("MFLPlayerPopupPopulateProjections()", 5)
}
function includes(e, a) {
	var t = !1;
	return e.indexOf(a) >= 0 && (t = !0), t
}
function MFLPlayerPopupSetupTeamNames() {
	for (var e in franchiseDatabase)
		"fid_0000" !== e && franchiseDatabase.hasOwnProperty(e) && (MFLPlayerPopupTeamNames[franchiseDatabase[e].name] = {
			id: franchiseDatabase[e].id,
			abbrev: franchiseDatabase[e].abbrev
		})
}
function MFLPlayerPopupMoreNews(e, a) {
	var t = baseURLDynamic + "/" + year + "/" + e;
	jQuery.ajax({
		type: "GET",
		url: t,
		async: !1
	}).done(function(e) {
		var t = 0,
			r = "";
		jQuery(e).find(".report tr").each(function() {
			1 === t && (jQuery(this).find("td a").contents().unwrap(), (r = jQuery(this).find("td:eq(0)").html()).indexOf("Article Link") > 0 && (r = r.substring(0, r.indexOf("Article Link") - 2)), r.indexOf("Roto Pass from") > 0 && (r = r.substring(0, r.indexOf("Roto Pass from") - 3))),
			t++
		}),
		"" !== r && jQuery("#" + a).html(r)
	})
}
function MFLPlayerPopupSetup(e, a) {
	var t = a.split(" "),
		r = t[t.length - 1],
		o = t[t.length - 2],
		i = "",
		s = "";
	MFLPlayerPopupCurrentPID = e;
	for (var n = 1; n < t.length - 2; n++)
		s += t[n] + " ";
	var l = t[0].substring(0, t[0].length - 1) + ", " + s + " " + o + " " + r;
	for (n = 1; n < t.length - 2; n++)
		i += t[n] + " ";
	if (i += t[0].substring(0, t[0].length - 1), !includes(MFLPlayerPopupValidPosition, r) || !includes(MFLPlayerPopupValidNFLAbbrev, o)) {
		var p = baseURLDynamic + "/" + year + "/export?TYPE=players&PLAYERS=" + e + "&JSON=1";
		jQuery.ajax({
			type: "GET",
			url: p,
			async: !1
		}).done(function(a) {
			try {
				i = a.players.player.name,
				o = a.players.player.team,
				r = a.players.player.position,
				l = i + " " + o + " " + r
			} catch (a) {
				console.log("FAILED PLAYER ID: " + e)
			}
		})
	}
	jQuery("#MFLPlayerPopupOverlay").show(),
	jQuery("#MFLPlayerPopupLoading").show(),
	jQuery(".MFLPlayerPopupPlayerTabs").css("display", "table-cell"),
	jQuery("#MFLPlayerPopupBioTab").css("display", "none"),
	jQuery("#MFLPlayerPopupBioTab").removeAttr("style"),
	jQuery(".MFLPlayerPopupNotificationTabs").css("display", "none"),
	MFLPopupOmitLinks ? jQuery("#MFLPlayerPopupLinks").css("display", "none") : jQuery("#MFLPlayerPopupLinks").css("display", "block"),
	jQuery("#MFLPlayerPopupLoaded").hide(),
	jQuery("#MFLPlayerPopupArticleLoaded").hide(),
	jQuery("#MFLPlayerPopupName").html(l),
	jQuery("#MFLPlayerPopupContainer").show(),
	setTimeout("MFLPlayerPopupPopulate('" + e + "','" + i.replace(/[\\"']/g, "\\jQuery&").replace(/\u0000/g, "\\0") + "','" + o + "','" + r + "')", 200)
}
function MFLPlayerPopupArticleSetup(e, a, t) {
	jQuery("#MFLPlayerPopupContainer").addClass("MFLPlayerPopupArticleContainer"),
	jQuery("#MFLPlayerPopupOverlay").show(),
	jQuery("#MFLPlayerPopupLoading").show(),
	jQuery("#MFLPlayerPopupLoaded").hide(),
	jQuery("#MFLPlayerPopupArticleLoaded").hide(),
	jQuery("#MFLPlayerPopupName").html("Article Posted " + a + " Ago"),
	jQuery("#MFLPlayerPopupContainer").show(),
	setTimeout("MFLPlayerPopupArticlePopulate('" + e.replace(/[\\"']/g, "\\jQuery&").replace(/\u0000/g, "\\0") + "','" + a + "','" + t + "')", 200)
}
function MFLPlayerPopupNotificationPreSetup() {
	jQuery("#MFLPlayerPopupContainer").addClass("MFLPlayerPopupNotificationContainer"),
	jQuery("#MFLPlayerPopupOverlay").show(),
	jQuery("#MFLPlayerPopupLoading").show(),
	jQuery(".MFLPlayerPopupPlayerTabs").css("display", "none"),
	jQuery("#MFLPlayerPopupBioTab").attr("style", "display:none!important"),
	jQuery(".MFLPlayerPopupNotificationTabs").css("display", "table-cell"),
	jQuery("#MFLPlayerPopupLinks").css("display", "none"),
	jQuery("#MFLPlayerPopupLoaded").hide(),
	jQuery("#MFLPlayerPopupArticleLoaded").hide(),
	jQuery("#MFLPlayerPopupName").html("League Notifications<span style='padding-left:10px'>" + MFLPopupNotify2FontAwesome + "</span>"),
	jQuery("#MFLPlayerPopupContainer").show()
}
function MFLPlayerPopupNotificationSetup(e) {
	1 === MFLPlayerPopupTracker[0] && 1 === MFLPlayerPopupTracker[1] && 1 === MFLPlayerPopupTracker[2] && 1 === MFLPlayerPopupTracker[3] && 1 === MFLPlayerPopupTracker[4] && (e || "" !== MFLPlayerPopupOnloadContent[0] || "" !== MFLPlayerPopupOnloadContent[1] || "" !== MFLPlayerPopupOnloadContent[2] || "" !== MFLPlayerPopupOnloadContent[3] || "" !== MFLPlayerPopupOnloadContent[4]) && (e || MFLPlayerPopupNotificationPreSetup(), "" === MFLPlayerPopupOnloadContent[0] && "" === MFLPlayerPopupOnloadContent[1] && "" === MFLPlayerPopupOnloadContent[2] && "" === MFLPlayerPopupOnloadContent[3] && "" === MFLPlayerPopupOnloadContent[4] ? jQuery("#MFLPlayerPopupHeader").html("<table class='popreport'><tbody><tr><th>You Have No Notifications!</th></tr><tr class='oddtablerow'><td>There are currently no active notifications.</td></tr></tbody></table>").parent().addClass("noHide") : MFLPopupEnableAutoNotification ? jQuery("#MFLPlayerPopupHeader").html("<table class='popreport'><tbody><tr><th>You Have Notifications!</th></tr><tr class='oddtablerow'><td>There are one or more active notifications that have been set to automatically display once per browser session.<br><br>After closing this popup you can re-open notifications by either closing and re-opening the browser or clicking on the notification icon in the menu.</td></tr></tbody></table>") : jQuery("#MFLPlayerPopupHeader").html("<table class='popreport'><tbody><tr><th>You Have Notifications!</th></tr><tr class='oddtablerow'><td>There are one or more active notifications. Check the tabs below to view them.</td></tr></tbody></table>"), "" === MFLPlayerPopupOnloadContent[0] && "" === MFLPlayerPopupOnloadContent[1] ? jQuery("#MFLPlayerPopupTrades").html("<br /><center><i>No Current Trade Notifications</i></center>") : jQuery("#MFLPlayerPopupTrades").html(MFLPlayerPopupOnloadContent[0].replace(/report/g, "popreport").replace("<caption><span>Pending Trades</span></caption>", "") + MFLPlayerPopupOnloadContent[1].replace(/report/g, "popreport").replace("<caption><span></span></caption>", "")), "" === MFLPlayerPopupOnloadContent[2] ? jQuery("#MFLPlayerPopupReminders").html("<br /><center><i>No Active League Reminders<br/><br/>OR<br/><br/>League Reminders are Disabled in <a href='" + baseURLDynamic + "/" + year + "/options?L=" + league_id + "&O=197&F=" + franchise_id + "'>Franchise Customization</a> Settings</i></center>") : jQuery("#MFLPlayerPopupReminders").html(MFLPlayerPopupOnloadContent[2].replace(/report/g, "popreport")), "" === MFLPlayerPopupOnloadContent[3] ? jQuery("#MFLPlayerPopupMessages").html("<br /><center><i>No Active Messages from MyFantasyLeague</i></center>") : jQuery("#MFLPlayerPopupMessages").html(MFLPlayerPopupOnloadContent[3].replace(/report/g, "popreport")), "" === MFLPlayerPopupOnloadContent[4] ? jQuery("#MFLPlayerPopupCommishMessage").html("<br /><center><i>No Active Messages from Commissioner</i></center>") : jQuery("#MFLPlayerPopupCommishMessage").html(MFLPlayerPopupOnloadContent[4].replace(/report/g, "popreport")), setTimeout("MFLPlayerPopupInitiate(2)", 200))
}
function MFLPlayerPopupPopulateProjections() {
	setTimeout(function() {
		if ("Loading Content . . ." === jQuery("#MFLPlayerPopupProjections").text()) {
			var e = baseURLDynamic + "/" + year + "/player?L=" + league_id + "&P=" + MFLPlayerPopupCurrentPID + "&YEAR=" + year + "&DISPLAY_TYPE=projections";
			jQuery.ajax({
				type: "GET",
				url: e,
				async: !1
			}).done(function(e) {
				var a = 0,
					t = "<table class='popreport'><tbody>";
				jQuery(e).find("#player_stats_table tr").each(function() {
					jQuery(this).find("form").length > 0 || (jQuery(this).find("th").length > 0 ? (4 === parseInt(jQuery(this).find("th:eq(0)").attr("colspan")) ? jQuery(this).find("th:eq(0)").attr("colspan", 3) : jQuery(this).find("th:eq(3)").remove(), t += "<tr>" + jQuery(this).html() + "</tr>") : jQuery(this).find("td").length > 1 && (jQuery(this).find("td:eq(3)").remove(), t += a % 2 ? "<tr class='eventablerow'>" + jQuery(this).html() + "</tr>" : "<tr class='oddtablerow'>" + jQuery(this).html() + "</tr>", a++))
				}),
				t += "</tbody></table>",
				jQuery("#MFLPlayerPopupProjections").html(t)
			})
		}
	}, 1500)
}
function MFLPlayerPopupPopulate(e, a, t, r) {
	MFLPlayerPopupTracker = new Array;
	var o = "";
	jQuery("#MFLPlayerPopupLoading").show(),
	jQuery("#MFLPlayerPopupLoaded").hide(),
	jQuery("#MFLPlayerPopupArticleLoaded").hide();
	var i = baseURLDynamic + "/" + year + "/export?TYPE=playerStatus&L=" + league_id + "&P=" + e + "&JSON=1";
	jQuery.ajax({
		type: "GET",
		url: i,
		async: !1
	}).done(function(i) {
		try {
			o = MFLPopupCustomRule("pStatus", null, null, e, a, t, r, i, null, null)
		} catch (e) {
			try {
				o = i.playerStatus.status
			} catch (e) {}
		}
		var s = baseURLDynamic + "/" + year + "/player?L=" + league_id + "&P=" + e;
		jQuery.ajax({
			type: "GET",
			url: s,
			async: !1
		}).done(function(s) {
			var n = {
					ht: "--",
					wt: "--",
					dob: "--",
					age: "--",
					college: "---",
					draftYear: "n/a",
					draftTeam: "",
					round: "",
					pick: "",
					jersey: "--",
					experience: "",
					acquired: "",
					photo: jQuery(s).find(".player_photo").html()
				},
				l = !0;
			if (void 0 === n.photo)
				n.photo = "<img src='//www.nitrografixx.com/MFL-Popups/NFL-custom-logos-tall/" + t + ".png' alt='" + t + "' title='" + t + "' align='middle' />",
				l = !1;
			else {
				var p = n.photo.substring(n.photo.indexOf("this.src=") + 10, n.photo.indexOf("no_photo_available.jpg") + 22);
				n.photo = n.photo.replace(p, "//www.nitrografixx.com/MFL-Popups/silhouette.png")
			}
			if (n.photo = n.photo.replace("img", "img class='articlepicture'"), !MFLPopupOmitLinks) {
				var u = "<table class='popreport'><tbody>";
				u += "<tr class='oddtablerow'>",
				u += "<td style='text-align:center; text-indent:0;'><a href='" + baseURLDynamic + "/" + year + "/player?L=" + league_id + "&P=" + e + "'>Full Profile</a></td>";
				var d = "";
				if (jQuery(s).find("h3 a").each(function() {
					if ("FantasySharks Profile" === jQuery(this).text())
						return d = "<a href='" + jQuery(this).attr("href") + "' title='Fantasy Sharks Profile' target='_blank'>Fantasy Sharks</a>", !1
				}), "" !== d && (u += "<td class='screen-hide' style='text-align:center; text-indent:0;'>" + d + "</td>"), "undefined" != typeof franchise_id && "0000" !== franchise_id) {
					var c = "<a href='" + baseURLDynamic + "/" + year + "/add_drop?L=" + league_id + "&P=" + e + "'>Add Player</a>";
					try {
						void 0 !== playerDatabase["pid_" + e].fid && (c = -1 === playerDatabase["pid_" + e].fid.indexOf(franchise_id) ? "<a href='" + baseURLDynamic + "/" + year + "/options?L=" + league_id + "&O=05&FRANCHISE=" + franchise_id + "," + playerDatabase["pid_" + e].fid.substring(0, 4) + "&P=" + e + "'>Propose Trade</a>" : "<a href='" + baseURLDynamic + "/" + year + "/add_drop?L=" + league_id + "'>Drop Player</a>")
					} catch (e) {}
					u += "<td style='text-align:center; text-indent:0;'>" + c + "</td>";
					var m = "<a href='" + baseURLDynamic + "/" + year + "/options?L=" + league_id + "&O=178&PID=" + e + "'>Watchlist</a>";
					jQuery(s).find("h3 a").each(function() {
						return jQuery(this).text().indexOf("Remove") > -1 ? (m = "<a href='" + baseURLDynamic + "/" + year + "/options?L=" + league_id + "&O=178&PID=" + e + "&ACTION=delete'>Watchlist Remove</a>", !1) : jQuery(this).text().indexOf("Add") > -1 ? (m = "<a href='" + baseURLDynamic + "/" + year + "/options?L=" + league_id + "&O=178&PID=" + e + "&ACTION=add'>Watchlist Add</a>", !1) : void 0
					}),
					u += "<td style='text-align:center; text-indent:0;'>" + m + "</td>"
				}
				u += "<td style='text-align:center; text-indent:0;'><a href='" + baseURLDynamic + "/" + year + "/player_history?L=" + league_id + "&PLAYERS=" + e + "'>Trans. History</a></td>",
				u += "</tr></tbody></table>",
				jQuery("#MFLPlayerPopupLinks").html(u)
			}
			var f = new Array;
			if (jQuery(s).find(".biography.report tr").each(function() {
				var s = jQuery(this).find("th:eq(0)").html(),
					l = jQuery(this).find("td:eq(0)").html();
				switch (s) {
				case "Height/Weight:":
					n.ht = l.substring(0, l.indexOf("/") - 1),
					n.wt = l.substring(l.indexOf("/") + 2, l.length);
					break;
				case "DOB/Age:":
					n.dob = l.substring(0, l.indexOf("/") - 1),
					n.age = l.substring(l.indexOf("/") + 2, l.length);
					break;
				case "Jersey Num:":
					n.jersey = parseInt(l);
					break;
				case "College:":
					n.college = l;
					break;
				case "Drafted:":
					"Undrafted" === l ? (n.draftYear = "?", n.draftTeam = "FA", n.round = "n/a", n.pick = "n/a") : (n.draftYear = l.substring(0, l.indexOf("/") - 1), n.draftTeam = l.substring(l.indexOf("/") + 2, l.indexOf("Round") - 3), n.round = parseInt(l.substring(l.indexOf("Round") + 6, l.length)), n.pick = parseInt(l.substring(l.indexOf("Pick") + 5, l.length)));
					break;
				case "Experience:":
					isNaN(parseInt(l)) ? (n.experience = "(Exp.: Rookie)", n.experienceInt = 1) : (n.experience = "(Exp.: " + parseInt(l) + " years)", n.experienceInt = parseInt(l));
					break;
				case "Acquired:":
					n.acquired = l;
					break;
				case "Salary:":
					try {
						f[f.length] = MFLPopupCustomRule("salary", MFLPlayerPopupExtraTitles.salary, l, e, a, t, r, i, o, n)
					} catch (e) {
						f[f.length] = {
							title: MFLPlayerPopupExtraTitles.salary,
							info: l
						}
					}
					break;
				case "Contract Year:":
					try {
						f[f.length] = MFLPopupCustomRule("contract_year", MFLPlayerPopupExtraTitles.contractyear, l, e, a, t, r, i, o, n)
					} catch (e) {
						f[f.length] = {
							title: MFLPlayerPopupExtraTitles.contractyear,
							info: l
						}
					}
					break;
				case "Contract Status:":
					try {
						f[f.length] = MFLPopupCustomRule("contract_status", MFLPlayerPopupExtraTitles.contractstatus, l, e, a, t, r, i, o, n)
					} catch (e) {
						f[f.length] = {
							title: MFLPlayerPopupExtraTitles.contractstatus,
							info: l
						}
					}
					break;
				case "Contract Info:":
					try {
						f[f.length] = MFLPopupCustomRule("contract_info", MFLPlayerPopupExtraTitles.contractinfo, l, e, a, t, r, i, o, n)
					} catch (e) {
						f[f.length] = {
							title: MFLPlayerPopupExtraTitles.contractinfo,
							info: l
						}
					}
				}
			}), f.length > 0)
				var h = 6;
			else
				h = 4;
			if (MFLPopupOmitStatus && 1 === f.length && (h = 4), l && MFLPlayerPopupIncludeNFLLogo)
				var y = "<img src='//www.nitrografixx.com/MFL-Popups/svg-nfl-logos/" + t + ".svg' class='MFLPlayerPopupNFLTeamLogo' />";
			else
				y = "";
			if ("--" === n.jersey)
				var g = "";
			else
				g = "<span class='MFLPlayerPopupJersey'><span>" + n.jersey + "</span></span>";
			var b = "<table class='popreport'><tbody>";
			if (b += "<tr class='oddtablerow rows-" + h + "'><td class='pop-photo' rowspan='" + h + "'>" + n.photo + y + g + "</td><td><span class='MFLPlayerPopupHeaderTitle' style='font-weight:bold'>Ht:</span> " + n.ht + "</td><td><span class='MFLPlayerPopupHeaderTitle' style='font-weight:bold'>Wt:</span> " + n.wt + "</td></tr>", b += "<tr class='eventablerow rows-" + h + "'><td><span class='MFLPlayerPopupHeaderTitle' style='font-weight:bold'>Born:</span> " + n.dob + " <span class='screen-hide'>(" + n.age + ")</span></td><td><span class='MFLPlayerPopupHeaderTitle' style='font-weight:bold'>College:</span> " + n.college + "</td></tr>", "FA" === n.draftTeam)
				var x = year - n.experienceInt + 1 + " Undrafted " + n.experience;
			else if ("" === n.round)
				x = n.draftYear + " " + n.experience;
			else
				x = n.draftYear + " #" + n.round + "." + n.pick + " " + n.draftTeam + " <span class='screen-hide'>" + n.experience + "</span>";
			if (b += "<tr class='oddtablerow rows-" + h + "'><td colspan='2'><span class='MFLPlayerPopupHeaderTitle' style='font-weight:bold'>Draft:</span> " + x + "</td></tr>", MFLPopupOmitStatus)
				var P = "even",
					_ = "odd";
			else {
				b += "<tr class='eventablerow rows-" + h + "'><td><span class='MFLPlayerPopupHeaderTitle' style='font-weight:bold'>Status:</span> " + o + "</td><td><span class='MFLPlayerPopupHeaderTitle' style='font-weight:bold'>Acquired:</span> " + n.acquired + "</td></tr>";
				P = "odd",
				_ = "even"
			}
			switch (f.length) {
			case 1:
				b += "<tr class='" + P + "tablerow rows-" + h + "'><td colspan='2'><span class='MFLPlayerPopupHeaderTitle' style='font-weight:bold' id='extras-0-title'>" + f[0].title + ":</span> " + f[0].info + "</td></tr>",
				MFLPopupOmitStatus || (b += "<tr class='" + _ + "tablerow rows-" + h + "'><td colspan='2'> </td></tr>");
				break;
			case 2:
				b += "<tr class='" + P + "tablerow rows-" + h + "'><td colspan='2'><span class='MFLPlayerPopupHeaderTitle extras-0-title'style='font-weight:bold'>" + f[0].title + ":</span> " + f[0].info + "</td></tr>",
				b += "<tr class='" + _ + "tablerow rows-" + h + "'><td colspan='2'><span class='MFLPlayerPopupHeaderTitle extras-1-title' style='font-weight:bold'>" + f[1].title + ":</span> " + f[1].info + "</td></tr>";
				break;
			case 3:
				b += "<tr class='" + P + "tablerow rows-" + h + "'><td><span class='MFLPlayerPopupHeaderTitle extras-0-title' style='font-weight:bold'>" + f[0].title + ":</span> " + f[0].info + "</td><td><span class='MFLPlayerPopupHeaderTitle extras-1-title' style='font-weight:bold'>" + f[1].title + ":</span> " + f[1].info + "</td></tr>",
				b += "<tr class='" + _ + "tablerow rows-" + h + "'><td colspan='2'><span class='MFLPlayerPopupHeaderTitle extras-2-title' style='font-weight:bold'>" + f[2].title + ":</span> " + f[2].info + "</td></tr>";
				break;
			case 4:
				b += "<tr class='" + P + "tablerow rows-" + h + "'><td><span class='MFLPlayerPopupHeaderTitle extras-0-title' style='font-weight:bold'>" + f[0].title + ":</span> " + f[0].info + "</td><td><span class='MFLPlayerPopupHeaderTitle extras-1-title' style='font-weight:bold'>" + f[1].title + ":</span> " + f[1].info + "</td></tr>",
				b += "<tr class='" + _ + "tablerow rows-" + h + "'><td><span class='MFLPlayerPopupHeaderTitle extras-2-title' style='font-weight:bold'>" + f[2].title + ":</span> " + f[2].info + "</td><td><span class='MFLPlayerPopupHeaderTitle extras-3-title' style='font-weight:bold'>" + f[3].title + ":</span> " + f[3].info + "</td></tr>"
			}
			b += "</tbody></table>",
			jQuery("#MFLPlayerPopupHeader").html(b),
			jQuery("#MFLPlayerPopupBio").html(b);
			var L = 0,
				B = "<table class='popreport'><tbody>";
			jQuery(s).find(".biohistory.report tr").each(function() {
				jQuery(this).find("form").length > 0 || (jQuery(this).find("th").length > 0 ? B += "<tr>" + jQuery(this).html() + "</tr>" : jQuery(this).find("td").length > 0 && (jQuery(this).find("td a").contents().unwrap(), jQuery(this).find("td a").remove(), B += L % 2 ? "<tr class='eventablerow'>" + jQuery(this).html() + "</tr>" : "<tr class='oddtablerow'>" + jQuery(this).html() + "</tr>", L++))
			}),
			B += "</tbody></table>",
			jQuery("#MFLPlayerPopupStatsHistory").html(B);
			L = 0;
			var F = !1,
				v = "<table class='popreport'><tbody>";
			jQuery(s).find("#player_stats_table tr").each(function() {
				if (jQuery(this).find("form").length > 0)
					;
				else if (jQuery(this).find("th").length > 0)
					6 === parseInt(jQuery(this).find("th:eq(0)").attr("colspan")) ? (jQuery(this).find("th:eq(0)").attr("colspan", 4), F = !0) : F && (jQuery(this).find("th:eq(3)").remove(), jQuery(this).find("th:eq(3)").remove()),
					v += "<tr>" + jQuery(this).html() + "</tr>";
				else if (jQuery(this).find("td").length > 1) {
					jQuery(this).find("td a").contents().unwrap(),
					jQuery(this).find("td a").remove();
					var e = jQuery(this).find("td:eq(5)").html().substring(0, jQuery(this).find("td:eq(5)").html().indexOf(" - "));
					MFLPlayerPopupTeamNames.hasOwnProperty(e) && "" !== MFLPlayerPopupTeamNames[e].abbrev && jQuery(this).find("td:eq(5)").html(jQuery(this).find("td:eq(5)").html().replace(e, "<span title='" + e + "'>" + MFLPlayerPopupTeamNames[e].abbrev) + "</span>"),
					F && (jQuery(this).find("td:eq(3)").remove(), jQuery(this).find("td:eq(3)").remove()),
					v += L % 2 ? "<tr class='eventablerow'>" + jQuery(this).html() + "</tr>" : "<tr class='oddtablerow'>" + jQuery(this).html() + "</tr>",
					L++
				}
			}),
			v += "</tbody></table>",
			jQuery("#MFLPlayerPopupStats").html(v),
			MFLPlayerPopupIncludeProjections && jQuery("#MFLPlayerPopupProjections").html("<div id='MFLPlayerPopupLoading'><center>Loading Content . . .<br><br><div class='MFLPlayerPopupLoader'></div></center></div>"),
			MFLPlayerPopupTracker[0] = 1,
			MFLPlayerPopupInitiate(0)
		})
	});
	i = baseURLDynamic + "/" + year + "/news_articles?PLAYERS=" + e + "&DAYS=30";
	var s = baseURLDynamic + "/" + year + "/news_articles?TEAM=" + t + "&SOURCE=RotoWire&DAYS=30";
	jQuery.ajax({
		type: "GET",
		url: i,
		async: !1
	}).done(function(a) {
		jQuery.ajax({
			type: "GET",
			url: s,
			async: !1
		}).done(function(r) {
			var o = "";
			jQuery(a).find(".report tr").length < 2 && (a = r, o = "<h3 class='warning'>No News for Player - Showing Recent News for " + t + "</h3>");
			var i = "<table class='popreport'>" + o + "<tbody>",
				s = 0;
			jQuery(a).find(".report tr").each(function() {
				if (s > 0) {
					var a = jQuery(this).find("td:eq(1) a").attr("href"),
						t = e + "_" + s;
					jQuery(this).find("td a").contents().unwrap();
					var r = jQuery(this).find("td:eq(2)").html();
					r = (r = r.replace("Analysis:", "<br><br><b>Analysis:</b>")).replace("(More)", "(<span class='MFLPlayerPopupMoreNews warning' onclick='MFLPlayerPopupMoreNews(\"" + a + '","' + t + "\")'>More</span>)"),
					i += "<tr class='oddtablerow headline'><th>" + jQuery(this).find("td:eq(1)").html() + "<span>" + jQuery(this).find("td:eq(3)").html() + " ago</span></th></tr>",
					i += "<tr class='eventablerow article'><td id='" + t + "' style='position:relative'>" + r + "</td></tr>"
				}
				s++
			}),
			i += "</tbody></table>",
			jQuery("#MFLPlayerPopupNews").html(i)
		}),
		MFLPlayerPopupTracker[1] = 1,
		MFLPlayerPopupInitiate(0)
	})
}
function MFLPlayerPopupArticlePopulate(e, a, t) {
	jQuery("#MFLPlayerPopupLoading").show(),
	jQuery("#MFLPlayerPopupLoaded").hide(),
	jQuery("#MFLPlayerPopupArticleLoaded").hide();
	var r = baseURLDynamic + "/" + year + "/view_news_article?ID=" + t;
	jQuery.ajax({
		type: "GET",
		url: r,
		async: !1
	}).done(function(a) {
		var t = 0,
			r = "";
		jQuery(a).find(".report tr").each(function() {
			1 === t && (jQuery(this).find("td a").contents().unwrap(), (r = jQuery(this).find("td:eq(0)").html()).indexOf("Article Link") > 0 && (r = r.substring(0, r.indexOf("Article Link") - 2)), r.indexOf("Roto Pass from") > 0 && (r = r.substring(0, r.indexOf("Roto Pass from") - 3))),
			t++
		}),
		jQuery("#MFLPlayerPopupArticleLoaded").html("<table class='popreport'><tbody><tr class='oddtablerow headline'><th>" + e + "</th></tr><tr class='eventablerow article'><td>" + r + "</td></tr></tbody></table>"),
		MFLPlayerPopupInitiate(1)
	})
}
function MFLPlayerPopupPopulateOnload(e) {
	e ? (MFLPlayerPopupNotificationPreSetup(), setTimeout("MFLPlayerPopupPopulateNotification(true)", 200)) : MFLPlayerPopupPopulateNotification(!1),
	jQuery(".toggle_module_search").hide(),
	jQuery(".skinSelectorContainer").hide()
}
function MFLPlayerPopupPopulateNotification(e) {
	if (MFLPlayerPopupTracker = new Array, MFLPlayerPopupOnloadContent[0] = "", MFLPlayerPopupOnloadContent[1] = "", MFLPlayerPopupOnloadContent[2] = "", MFLPlayerPopupOnloadContent[3] = "", MFLPlayerPopupOnloadContent[4] = "", jQuery("#MFLPlayerPopupLoading").show(), jQuery("#MFLPlayerPopupLoaded").hide(), jQuery("#MFLPlayerPopupArticleLoaded").hide(), MFLPopupEnableTrade) {
		var a = baseURLDynamic + "/" + year + "/home/" + league_id + "?MODULE=TRADES";
		jQuery.ajax({
			type: "GET",
			url: a,
			async: !1
		}).done(function(a) {
			jQuery(a).find("#trades td").each(function() {
				-1 !== jQuery(this).text().indexOf("proposed by me") && parseInt(jQuery(this).text()) > 0 && (MFLPlayerPopupOnloadContent[0] = jQuery(a).find("#trades").parent().html()),
				-1 !== jQuery(this).text().indexOf("proposed by others") && parseInt(jQuery(this).text()) > 0 && (MFLPlayerPopupOnloadContent[0] = jQuery(a).find("#trades").parent().html()),
				-1 !== jQuery(this).text().indexOf("awaiting your review") && parseInt(jQuery(this).text()) > 0 && (MFLPlayerPopupOnloadContent[0] = jQuery(a).find("#trades").parent().html())
			}),
			MFLPlayerPopupTracker[0] = 1,
			MFLPlayerPopupNotificationSetup(e)
		})
	} else
		MFLPlayerPopupTracker[0] = 1,
		MFLPlayerPopupNotificationSetup(e);
	if (MFLPopupEnableTradePoll) {
		a = baseURLDynamic + "/" + year + "/options?L=" + league_id + "&O=69";
		jQuery.ajax({
			type: "GET",
			url: a,
			async: !1
		}).done(function(a) {
			jQuery(a).find('table.report[id^="poll_"]').each(function() {
				-1 !== jQuery(this).find("th:eq(0)").text().indexOf("gave up") && (0, MFLPlayerPopupOnloadContent[1] += jQuery(this).parent().parent().html())
			}),
			MFLPlayerPopupTracker[1] = 1,
			MFLPlayerPopupNotificationSetup(e)
		})
	} else
		MFLPlayerPopupTracker[1] = 1,
		MFLPlayerPopupNotificationSetup(e);
	if (MFLPopupEnableReminders || MFLPopupEnableMessages) {
		a = baseURLDynamic + "/" + year + "/home/" + league_id;
		jQuery.ajax({
			type: "GET",
			url: a,
			async: !1
		}).done(function(a) {
			MFLPopupEnableReminders && jQuery(a).find("#league_reminders").each(function() {
				MFLPlayerPopupOnloadContent[2] = "<table align='center' cellspacing='1' class='homepagemodule report'>" + jQuery(this).html() + "</table>"
			}),
			MFLPlayerPopupTracker[2] = 1,
			MFLPopupEnableMessages && jQuery(a).find(".homepagemessage:not(#league_reminders)").each(function() {
				MFLPlayerPopupOnloadContent[3] += "<table align='center' cellspacing='1' class='homepagemodule report'>" + jQuery(this).html() + "</table>"
			}),
			MFLPlayerPopupTracker[3] = 1,
			MFLPlayerPopupNotificationSetup(e)
		})
	} else
		MFLPlayerPopupTracker[2] = 1,
		MFLPlayerPopupTracker[3] = 1,
		MFLPlayerPopupNotificationSetup(e);
	MFLPopupEnableCommishMessage && "" !== MFLPopupCommishMessage ? (MFLPlayerPopupOnloadContent[4] = "<table align='center' cellspacing='1' class='homepagemodule report'><tr><th>From the Commissioner's Desk</th></tr><tr class='oddtablerow'><td>" + MFLPopupCommishMessage + "</td></tr></table>", MFLPlayerPopupTracker[4] = 1, MFLPlayerPopupNotificationSetup(e)) : (MFLPlayerPopupTracker[4] = 1, MFLPlayerPopupNotificationSetup(e))
}
function MFLPlayerPopupNewsIcon(e) {
	var a = "body";
	void 0 !== e && (a = "#" + e);
	var t = new Array,
		r = new Array,
		o = 0;
	if (MFLPopupEnableQuickIcon)
		jQuery(a).find('.ls_nonstarters td a[href^="player"],.ls_starters td a[href^="player"],th a[class^="position_"],td a[class^="position_"]:not(td a[class="position_tm"])').each(function() {
			if (!includes(MFLPlayerPopupIdIgnore, jQuery(this).closest("table").attr("id"))) {
				var e = jQuery(this).attr("href").substring(jQuery(this).attr("href").indexOf("P=") + 2, jQuery(this).attr("href").length),
					a = jQuery(this).html().replace(/[\\"']/g, "\\").replace(/\u0000/g, "\\0");
				MFLPopupUseNewsFontAwesome ? jQuery(this).parent().hasClass("player") ? jQuery(this).parent().append('<span title="Player News" class="MFLPopupNewsWrapper" onclick="MFLPlayerPopupSetup(\'' + e + "','" + a + "')\">" + MFLPopupOldNewsFontAwesome + "</span>") : jQuery(this).append('<span title="Player News" class="MFLPopupNewsWrapper" onclick="MFLPlayerPopupSetup(\'' + e + "','" + a + "')\">" + MFLPopupOldNewsFontAwesome + "</span>") : jQuery(this).parent().hasClass("player") ? jQuery(this).parent().append('<img src="' + MFLPlayerPopupNewsOld + '" alt="Player News" title="Player News" style="cursor:pointer" onclick="MFLPlayerPopupSetup(\'' + e + "','" + a + '\')" class="playerPopupIcon" />') : jQuery(this).append('<img src="' + MFLPlayerPopupNewsOld + '" alt="Player News" title="Player News" style="cursor:pointer" onclick="MFLPlayerPopupSetup(\'' + e + "','" + a + '\')" class="playerPopupIcon" />'),
				MFLPlayerPopupLinkPopup && jQuery(this).off().on("click", function() {
					return MFLPlayerPopupSetup(e, jQuery(this).html()), !1
				})
			}
		});
	else {
		r[o] = "",
		jQuery(a).find('.ls_nonstarters td a[href^="player"],.ls_starters td a[href^="player"],a[class^="position_"]').each(function() {
			var e = jQuery(this).attr("href").substring(jQuery(this).attr("href").indexOf("P=") + 2, jQuery(this).attr("href").length);
			void 0 === t["pid_" + e] && (r[o].length > 2500 && (r[++o] = ""), t["pid_" + e] = {
				image: MFLPlayerPopupNewsNone,
				fa: MFLPopupNoNewsFontAwesome,
				title: "news"
			}, r[o] += e + ",")
		});
		for (var i = 0; i < r.length; i++)
			if ("" !== r[i]) {
				var s = baseURLDynamic + "/" + year + "/export?TYPE=playerProfile&P=" + r[i] + "&JSON=1";
				jQuery.ajax({
					type: "GET",
					url: s,
					async: !1
				}).done(function(e) {
					for (var a = 0; a < e.playerProfiles.playerProfile.length; a++)
						try {
							var r = e.playerProfiles.playerProfile[a].id;
							try {
								var o = e.playerProfiles.playerProfile[a].news.article[0].published
							} catch (t) {
								o = e.playerProfiles.playerProfile[a].news.article.published
							}
							o.indexOf("minute") > 0 || o.indexOf("hour") > 0 ? t["pid_" + r] = {
								image: MFLPlayerPopupNewsNew,
								fa: MFLPopupNewNewsFontAwesome,
								title: "news update"
							} : (o.indexOf("1 day") > -1 || o.indexOf("2 days") > -1 || o.indexOf("3 days") > -1 || o.indexOf("4 days") > -1 || o.indexOf("5 days") > -1 || o.indexOf("6 days") > -1 || o.indexOf("7 days") > -1) && (t["pid_" + r] = {
								image: MFLPlayerPopupNewsOld,
								fa: MFLPopupOldNewsFontAwesome,
								title: "recent news"
							})
						} catch (e) {}
				})
			}
		jQuery(a).find('.ls_nonstarters td a[href^="player"],.ls_starters td a[href^="player"],th a[class^="position_"],td a[class^="position_"]:not(td a[class="position_tm"])').each(function() {
			if (!includes(MFLPlayerPopupIdIgnore, jQuery(this).closest("table").attr("id"))) {
				jQuery(this).next().hasClass("playerPopupIcon") && jQuery(this).next().remove(),
				jQuery(this).next().hasClass("warning") && jQuery(this).next().next().hasClass("playerPopupIcon") && jQuery(this).next().next().remove();
				var e = jQuery(this).attr("href").substring(jQuery(this).attr("href").indexOf("P=") + 2, jQuery(this).attr("href").length),
					a = jQuery(this).html().replace(/[\\"']/g, "\\").replace(/\u0000/g, "\\0");
				MFLPopupUseNewsFontAwesome ? jQuery(this).parent("b").length || jQuery(this).parent().hasClass("reallysmall") ? jQuery(this).parent().append('<span title="' + t["pid_" + e].title + '" class="MFLPopupNewsWrapper" onclick="MFLPlayerPopupSetup(\'' + e + "','" + a + "')\">" + t["pid_" + e].fa + "</span>") : jQuery(this).parent().hasClass("player") || jQuery(this).parent().hasClass("MFLPlayerName") ? jQuery(this).parent().append('<span title="' + t["pid_" + e].title + '" class="MFLPopupNewsWrapper" onclick="MFLPlayerPopupSetup(\'' + e + "','" + a + "')\">" + t["pid_" + e].fa + "</span>") : jQuery(this).append('<span title="' + t["pid_" + e].title + '" class="MFLPopupNewsWrapper" onclick="MFLPlayerPopupSetup(\'' + e + "','" + a + "')\">" + t["pid_" + e].fa + "</span>") : jQuery(this).parent("b").length || jQuery(this).parent().hasClass("reallysmall") ? jQuery(this).parent().append('<img src="' + t["pid_" + e].image + '" alt="' + t["pid_" + e].title + '" title="' + t["pid_" + e].title + '" style="cursor:pointer" onclick="MFLPlayerPopupSetup(\'' + e + "','" + a + '\')" class="playerPopupIcon" />') : jQuery(this).parent().hasClass("player") || jQuery(this).parent().hasClass("MFLPlayerName") ? jQuery(this).parent().append('<img src="' + t["pid_" + e].image + '" alt="' + t["pid_" + e].title + '" title="' + t["pid_" + e].title + '" style="cursor:pointer" onclick="MFLPlayerPopupSetup(\'' + e + "','" + a + '\')" class="playerPopupIcon" />') : jQuery(this).append('<img src="' + t["pid_" + e].image + '" alt="' + t["pid_" + e].title + '" title="' + t["pid_" + e].title + '" style="cursor:pointer" onclick="MFLPlayerPopupSetup(\'' + e + "','" + a + '\')" class="playerPopupIcon" />'),
				MFLPlayerPopupLinkPopup && jQuery(this).off().on("click", function() {
					return MFLPlayerPopupSetup(e, jQuery(this).html()), !1
				})
			}
		})
	}
}
function MFLPlayerPopupArticleIcon(e) {
	var a = "body";
	void 0 !== e && (a = "#" + e),
	jQuery(a).find("td.headline a").each(function() {
		var e = jQuery(this).html().replace(/[\\"']/g, "\\jQuery&").replace(/\u0000/g, "\\0"),
			a = jQuery(this).closest("tr").find("td.timestamp").html(),
			t = jQuery(this).attr("href").substring(jQuery(this).attr("href").indexOf("ID=") + 3, jQuery(this).attr("href").length);
		jQuery(this).next().hasClass("playerPopupIcon") && jQuery(this).next().remove(),
		MFLPopupUseNewsFontAwesome ? jQuery(this).after('<span class="MFLPopupArticleWrapper" onclick="MFLPlayerPopupArticleSetup(\'' + e + "','" + a + "','" + t + "')\">" + MFLPopupArticleFontAwesome + "</span>") : jQuery(this).after('<img src="' + MFLPlayerPopupNewsOld + '" style="cursor:pointer" onclick="MFLPlayerPopupArticleSetup(\'' + e + "','" + a + "','" + t + '\')" class="playerPopupIcon" />'),
		MFLPlayerPopupLinkPopup && jQuery(this).off().on("click", function() {
			return MFLPlayerPopupArticleSetup(jQuery(this).html(), a, t), !1
		})
	})
}
function MFLPlayerPopupInitiate(e) {
	0 === e && 1 === MFLPlayerPopupTracker[0] && 1 === MFLPlayerPopupTracker[1] && (document.getElementById("MFLPlayerPopupTabLinksNews").click(), jQuery("#MFLPlayerPopupLoading").hide(), jQuery("#MFLPlayerPopupArticleLoaded").hide(), jQuery("#MFLPlayerPopupLoaded").show(), jQuery("#MFLPlayerPopupNews").scrollTop(0), jQuery("#MFLPlayerPopupBio").scrollTop(0), jQuery("#MFLPlayerPopupStats").scrollTop(0), jQuery("#MFLPlayerPopupProjections").scrollTop(0), jQuery("#MFLPlayerPopupStatsHistory").scrollTop(0)),
	1 === e && (jQuery("#MFLPlayerPopupLoading").hide(), jQuery("#MFLPlayerPopupLoaded").hide(), jQuery("#MFLPlayerPopupArticleLoaded").show()),
	2 === e && (!MFLPopupEnableTrade || "" === MFLPlayerPopupOnloadContent[0] && "" === MFLPlayerPopupOnloadContent[1] ? MFLPopupEnableCommishMessage && "" !== MFLPlayerPopupOnloadContent[4] ? document.getElementById("MFLPlayerPopupTabLinksCommishMessage").click() : MFLPopupEnableReminders && "" !== MFLPlayerPopupOnloadContent[2] ? document.getElementById("MFLPlayerPopupTabLinksReminders").click() : MFLPopupEnableMessages && "" !== MFLPlayerPopupOnloadContent[3] ? document.getElementById("MFLPlayerPopupTabLinksMessages").click() : jQuery("#MFLPlayerPopupHeader").html("<table class='popreport'><tbody><tr><th>You Have No Notifications!</th></tr><tr class='oddtablerow'><td>There are currently no active notifications.</td></tr></tbody></table>").parent().addClass("noHide") : document.getElementById("MFLPlayerPopupTabLinksTrades").click(), jQuery("#MFLPlayerPopupLoaded.noHide #MFLPlayerPopupMessages").show(), jQuery("#MFLPlayerPopupLoaded.noHide #MFLPlayerPopupTabLinksMessages").addClass("active"), jQuery("#MFLPlayerPopupLoading").hide(), jQuery("#MFLPlayerPopupLoaded").show(), jQuery("#MFLPlayerPopupArticleLoaded").hide(), setCookie("MFLPlayerPopup_" + year + "_" + league_id + "_" + franchise_id))
}
if (setTimeout(function() {
	MFLPopupEnablePlayerNews && MFLPlayerPopupNewsIcon(),
	MFLPopupEnableArticle && MFLPlayerPopupArticleIcon("body_home")
}, 100), jQuery(document).ready(function() {
	MFLPopupEnablePlayerNews && MFLPlayerPopupNewsIcon(),
	MFLPopupEnableArticle && MFLPlayerPopupArticleIcon("body_home")
}), MFLPopupOmitStatus && jQuery("head").append("<style>#MFLPlayerPopupStats th:nth-child(4), #MFLPlayerPopupStats td:nth-child(4) {display:none}</style>"), ShowMFLsearch) {
	function toggleSearch() {
		jQuery(".skinSelectorContainer").fadeOut(700),
		"none" === jQuery(".toggle_module_search").css("display") ? jQuery(".toggle_module_search").show(700) : jQuery(".toggle_module_search").hide(700)
	}
	jQuery("head").append("<style>.toggle_search_content td{text-align:center;font-size:90%}.toggle_search_content input[type='submit']{margin:0 5px;margin:0 0.313rem;border-radius:3px;border-radius:0.188rem;padding:3px;padding:0.188rem}.toggle_search_content input{position:relative;display:inline}.toggle_module_search{position:absolute;z-index:999999;width:300px;width:18.750rem;margin-top:5px;margin-top:0.313rem;margin-left:-95px;}.toggle_search_content td,.toggle_search_content form,.toggle_search_content input{vertical-align:middle;}</style>"),
	0 === jQuery("#icon-wrapper").length && jQuery(".myfantasyleague_menu ul li:eq(0)").parent().append("<div id='icon-wrapper' style='float:left'></div>");
	var searchLink = MFLPopupSearchFontAwesome;
	jQuery("#icon-wrapper").append("<li onclick='toggleSearch()' class='notification-icon-search' title='Player Search' style='display:inline-block'>" + searchLink + "</li><div class='toggle_module_search' style='display:none'><table class='toggle_search_content report' style='white-space:initial'><tbody><tr><th>Find A Player</th></tr><tr class='oddtablerow'><td><form method='get' action='" + baseURLDynamic + "/" + year + "/player_search'><input name='L' value='" + league_id + "' type='hidden'><input name='NAME' size='15' type='text'><input value='Search' type='submit'></form></td></tr></tbody></table></div>")
}
SearchMobileCSS && jQuery(window).width() < 768 && (jQuery.fn.toggle_center = function() {
	return this.css("position", "absolute"), this.css("left", Math.max(0, (jQuery(window).width() - jQuery(this).outerWidth()) / 2 + jQuery(window).scrollLeft()) + "px"), this
}, jQuery(".toggle_module_search").toggle_center(), jQuery("head").append("<style>.toggle_module_search{margin-left:-110px;margin-left:-6.875rempx;margin-top:14px;margin-top:0.875rem}#skinSelectorContainer{margin-top:14px;margin-top:0.875rem}</style>")),
doMFL_rosters(!1, "Player Popup"),
doMFL_injuries(!1, "Player Popup"),
MFLPopupEnableReminders && jQuery(".homepagemessage").css("display", "none"),
MFLPopupEnableMessages && jQuery("#league_reminders").css("display", "none"),
MFLPlayerPopupSetupTeamNames(),
0 === jQuery("#MFLPlayerPopupContainer").length && MFLPlayerPopupCreateContainer(),
"undefined" != typeof franchise_id && (MFLPopupEnableTrade || MFLPopupEnableTradePoll || MFLPopupEnableReminders || MFLPopupEnableMessages || MFLPopupEnableCommishMessage && "" !== MFLPopupCommishMessage) && (0 === jQuery("#icon-wrapper").length && jQuery(".myfantasyleague_menu ul li:eq(0)").parent().append("<div id='icon-wrapper' style='float:left'></div>"), 0 === jQuery("#icon-wrapper-mobile").length && jQuery(".myfantasyleague_menuMobile").append("<div id='icon-wrapper-mobile' style='float:left'></div>"), jQuery("#icon-wrapper").append("<li class='notification-icon-popup' title='Notifications' style='display:inline-block'><span onclick='MFLPlayerPopupPopulateOnload(true)'>" + MFLPopupNotifyFontAwesome + "</span></li>"), jQuery("#icon-wrapper-mobile").append("<li class='notification-icon-popup' title='Notifications' style='display:inline-block'><span onclick='MFLPlayerPopupPopulateOnload(true)'>" + MFLPopupNotifyFontAwesome + "</span></li>"), MFLPopupEnableAutoNotification && !getCookie("MFLPlayerPopup_" + year + "_" + league_id + "_" + franchise_id) && MFLPlayerPopupPopulateOnload(!1));
var url = baseURLDynamic + "/" + year + "/home/" + league_id + "?MODULE=ROSTER";
if (jQuery.ajax({
	type: "GET",
	url: url,
	async: !0
}).done(function(e) {
	for (var a in MFLPlayerPopupExtraTitles)
		MFLPlayerPopupExtraTitles.hasOwnProperty(a) && jQuery(e).find('th[class="' + a + '"]').length > 0 && (MFLPlayerPopupExtraTitles[a] = jQuery(e).find('th[class="' + a + '"]').text())
}), jQuery("head").append('<style>#MFLPlayerPopupOverlay[style*="display: block"] + #MFLPlayerPopupContainer{display:block!important}.playerPopupIcon + .playerPopupIcon{display:none}.MFLPlayerPopupNFLTeamLogo{right:6px;left:auto;top:1px;max-width:22px;max-height:22px}#MFLPlayerPopupHeader .popreport td,#MFLPlayerPopupBio .popreport td.pop-photo{padding-right:5px}@media only screen and (max-width: 420px){.pt-hide{display:none}}</style>'), void 0 === mflBoxHomePageOnly)
	var mflBoxHomePageOnly = !0;
if (void 0 === mflBoxUseIcon)
	var mflBoxUseIcon = !1;
if (void 0 === mflBoxUseLogo)
	var mflBoxUseLogo = !1;
if (void 0 === mflBoxUseAbbrev)
	var mflBoxUseAbbrev = !1;
if (void 0 === mflBoxIconBase)
	var mflBoxIconBase = "";
if (void 0 === mflBoxIconExt)
	var mflBoxIconExt = "";
if (void 0 === mflBoxNFLLogoPath)
	var mflBoxNFLLogoPath = "//www.nitrografixx.com/MFL-Popups/svg-nfl-logos/";
if (void 0 === mflBoxNFLLogoExt)
	var mflBoxNFLLogoExt = "svg";
if (void 0 === mflBoxDetails)
	var mflBoxDetails = !0;
if (void 0 === mflBoxDeclareLiveWinner)
	var mflBoxDeclareLiveWinner = !0;
if (void 0 === mflBoxIncludeLiveStats)
	var mflBoxIncludeLiveStats = !0;
if (void 0 === mflBoxPositionSort)
	var mflBoxPositionSort = new Array("Coach", "Off", "QB", "TMQB", "RB", "TMRB", "WR", "TMWR", "TE", "TMTE", "PK", "TMPK", "PN", "TMPN", "DT", "DE", "TMDL", "LB", "TMLB", "CB", "S", "TMDB", "Def", "ST");
if (void 0 === mflBoxIncludeTiebreaker)
	var mflBoxIncludeTiebreaker = !1;
"undefined" == typeof playerDatabase && jQuery("head").append('<script type="text/javascript" src="' + baseURLDynamic + "/fflnet" + year + '/mfl_player_database.js"><\/script>');
var mflBoxJSON_league,
	mflBoxJSON_standings,
	mflBoxJSON_matchups,
	mflBoxJSON_nflSchedule,
	mflBoxJSON_projectedScores,
	doMFLBox = !1;
mflBoxHomePageOnly ? (window.location.href.indexOf("/home/") > -1 && (doMFLBox = !0), window.location.href.toUpperCase().indexOf("MODULE=") > -1 && (doMFLBox = !1)) : doMFLBox = !0,
doMFLBox && (document.write('<div id="MFLBoxWrapper" style="margin:10px 0px"><div id="MFLBoxContainer"></div><div id="MFLBoxPlayerDetails" style="display:none"></div><div id="MFLBoxOverlay" onclick="mflBoxPlayerDetailsClose()" style="display:none"></div></div>'), jQuery("head").append('<link rel="stylesheet" type="text/css" href="//www.nitrografixx.com/MFL-Scoreboard/skin/Scoreboard_baseV2.css">'), jQuery("head").append("<style>.MFLExtrasPMR,.MFLExtrasCP,.MFLExtrasYTP{text-align:center;font-size:smaller;display:none}.MFLBoxDetailsArrow{position:absolute;bottom:6px;right:2px;cursor:pointer}</style>"), jQuery("head").append("<style>#MFLBoxOverlay{display: none;height:100%;left:0;opacity:.7;position:fixed;top:0;width:100%;z-index:99999;background-color:#000;}.MFLBoxPlayerDetailsClose{position:absolute;z-index:1;cursor:pointer;top:6px;top:.375rem;right:7px;right:.438rem;border-radius:3px;border-radius:.188rem;line-height:26px;line-height:1.625rem;width:26px;width:1.625rem;text-align:center;color:#fff;background:#263e68;border:2px solid #fff;border:.125rem solid #fff;font-weight:700;padding:0px}.MFLBoxPlayerDetailsNone{text-align:center;font-style:italic}#MFLBoxPlayerDetails{font-size:x-small;position:fixed;z-index:100000;box-shadow:0px 0px 1px 1px rgba(0,0,0,.1);width:100%;max-width:320px;max-width:20.0rem;margin-left:-160px;margin-left:-10.0rem;left:50%;top:50%;max-height:500px;overflow:hidden;overflow-y:auto;-webkit-overflow-scrolling:touch;}#MFLBoxPlayerDetails .MFLPaceScore{font-size:xx-small;font-style:italic;}#MFLBoxPlayerDetails .MFLPaceScorePositive{color:green;}#MFLBoxPlayerDetails .MFLPaceScoreNegative{color:red;}.MFLBoxPlayerDetailsClose{background-color:red}.MFLBoxPlayerDetailsClose:hover{background-color:orangered}#MFLBoxPlayerDetails .MFLBoxPlayerDetailsHeader th{font-size:small}#MFLBoxPlayerDetails .MFLBoxPlayerDetailsSubHeader th{font-size:x-small}.MFLBoxPlayerDetailsTR:hover{cursor:pointer}#MFLBoxPlayerDetailsTable{padding:4px;}</style>"), jQuery("head").append("<style>@media only screen and (max-width: 47em){#MFLBoxPlayerDetails {max-height: 398px;}}@media only screen and (max-width: 35.5em){#MFLBoxPlayerDetails { max-height: 310px;}}@media only screen and (max-height: 35.5em) and (orientation: landscape){#MFLBoxPlayerDetails{max-height: 247px;}}</style>"), jQuery("head").append("<style>.MFLBoxLiveStatsScore {cursor:pointer}#MFLBoxMatchups .matchupLolite{margin-bottom:3px}.MFLBoxLiveStatsWrapper {position:relative}.MFLBoxLiveStatsContent {position:absolute;right:-2px;top:-52px;background-color:#fff;color:#003399;cursor:default;padding:10px 14px 10px 8px;border-radius:5px;white-space:nowrap;font-weight:bold;border:8px solid #003399}.MFLBoxLiveStatsArrow {position:absolute;right:10px;top:-10px;width:0;height:0;border-left:10px solid transparent;border-top: 10px solid #fff;cursor:default}.MFLBoxLiveStatsClose {position:absolute; right:3px;top:1px;cursor:pointer;color:red; font-weight:bold}.MFLBoxLiveStatsClose:hover {color:red}</style>"), jQuery("#MFLBoxContainer").append('<div class="MFLBoxNav MFLBoxArrowLeft MFLBoxArrowFaded" onclick="mflBoxNewWeek(-1)" style="left:0px;"></div>'), jQuery("#MFLBoxContainer").append('<div class="MFLBoxNav MFLBoxMFLNFL" style="left:18px;"><table class="MFLGameLinks"><tbody><tr><td id="MFLBoxMFLCell" class="mflBoxCell"><span class="form_buttons"><input id="mflBoxButtonMFL" class="mflBoxButton" onclick="mflBoxMFLSchedule=true;jQuery(\'#mflBoxButtonMFL\').attr(\'style\',\'cursor:default\');jQuery(\'#mflBoxButtonNFL\').attr(\'style\',\'cursor:pointer\');jQuery(\'#mflBoxButtonMFL\').removeClass(\'mflBoxButtonFaded\');jQuery(\'#mflBoxButtonNFL\').addClass(\'mflBoxButtonFaded\');mflBoxNewWeek(0);" style="cursor:default" type="button" value="MFL"></span></td></tr><tr><td id="MFLBoxWeekCell"></td></tr><tr><td id="MFLBoxNFLCell" class="mflBoxCell mflBoxCellInactive"><span class="form_buttons"><input id="mflBoxButtonNFL" class="mflBoxButton mflBoxButtonFaded" onclick="mflBoxMFLSchedule=false;jQuery(\'#mflBoxButtonNFL\').attr(\'style\',\'cursor:default\');jQuery(\'#mflBoxButtonMFL\').attr(\'style\',\'cursor:pointer\');jQuery(\'#mflBoxButtonMFL\').addClass(\'mflBoxButtonFaded\');jQuery(\'#mflBoxButtonNFL\').removeClass(\'mflBoxButtonFaded\');mflBoxNewWeek(0);" type="button" value="NFL"></span></td></tr></tbody></table></div>'), jQuery("#MFLBoxContainer").append('<div id="MFLBoxMatchups" class="report MFLNFLBoxContainer"><div class="warning" style="padding:15px;font-weight:bold;vertical-align:middle;text-align:center;font-style:italic;font-size:18px">Retrieving Scoreboard . . . </div></div>'), jQuery("#MFLBoxContainer").append('<div class="MFLBoxNav MFLBoxArrowRight" onclick="mflBoxNewWeek(1)"></div>')),
jQuery(".mobile-wrap #MFLBoxWrapper").unwrap();
var mflBoxStartWeek,
	mflBoxLastRegularSeasonWeek,
	mflBoxEndWeek,
	mflBoxPrecision,
	mflBoxTimer,
	mflBox_league = new Array,
	mflBox_matchups = new Array,
	mflBox_nflSchedule = new Array,
	mflBox_nflOpponents = new Array,
	mflBox_players = new Array,
	mflBoxMFLSchedule = !0,
	mflBoxStarters = leagueAttributes.MaxStarters,
	mflBoxStartersString = new Array,
	mflBoxCurrentWeekKickoff = 0,
	mflBoxActiveWeekKickoff = 0,
	mflBoxCurrentWeek = completedWeek,
	mflBoxCurrentLiveScoring = !1,
	mflBoxActiveWeek = -1,
	mflBoxHasNextFantasyWeek = !1,
	mflBoxHasNextNFLWeek = !1,
	mflBoxIsAllPlay = !1,
	mflBoxAllPlayId = "0001",
	mflBoxDetailsTracker = new Array,
	mflBoxFirstKickoff = new Array,
	mflBoxNFLKickoff = new Array,
	mflBoxFranchise = new Array,
	mflBoxPlayerDetailsFid = {
		fid: "",
		boxid: 0
	},
	mflBoxPlayerProjected = new Array,
	mflBoxLiveStatsPlayer = [],
	mflBoxLiveStatsTeam = [],
	mflBoxTiebreaker = new Array;
"undefined" != typeof franchise_id && "0000" !== franchise_id && (mflBoxAllPlayId = franchise_id);
var mflBoxWeekDay = new Array("Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"),
	mflBoxMonth = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
function doMFLBoxLeague(e) {
	var a = baseURLDynamic + "/" + year + "/export?TYPE=league&L=" + league_id + "&JSON=1";
	jQuery.ajax({
		url: a,
		success: function(e) {
			mflBoxJSON_league = e,
			mflBoxStartWeek = parseInt(mflBoxJSON_league.league.startWeek),
			mflBoxLastRegularSeasonWeek = parseInt(mflBoxJSON_league.league.lastRegularSeasonWeek),
			mflBoxEndWeek = parseInt(mflBoxJSON_league.league.endWeek),
			mflBoxPrecision = parseInt(mflBoxJSON_league.league.precision),
			-1 === mflBoxActiveWeek && (completedWeek === liveScoringWeek ? (mflBoxCurrentWeek = completedWeek, mflBoxCurrentLiveScoring = !1) : (mflBoxCurrentWeek = liveScoringWeek, mflBoxCurrentLiveScoring = !0), mflBoxCurrentWeek > mflBoxEndWeek && (mflBoxCurrentWeek = mflBoxEndWeek, mflBoxCurrentLiveScoring = !1), mflBoxCurrentWeek < 1 && (mflBoxCurrentWeek = 1), mflBoxActiveWeek = mflBoxCurrentWeek)
		},
		async: e
	})
}
function doMFLBoxStandings(e) {
	var a = baseURLDynamic + "/" + year + "/export?TYPE=standings&L=" + league_id + "&JSON=1";
	jQuery.ajax({
		url: a,
		success: function(e) {
			mflBoxJSON_standings = e
		},
		async: e
	})
}
function doMFLBoxFantasyWeek(e) {
	if (mflBoxActiveWeek === mflBoxCurrentWeek)
		if (mflBoxCurrentLiveScoring) {
			var a = baseURLDynamic + "/" + year + "/export?TYPE=liveScoring&L=" + league_id + "&W=" + mflBoxActiveWeek + "&DETAILS=1&JSON=1";
			if (jQuery.ajax({
				url: a,
				success: function(e) {
					mflBoxJSON_matchups = e.liveScoring
				},
				async: e
			}), mflBoxIncludeTiebreaker) {
				a = baseURLDynamic + "/" + year + "/export?TYPE=weeklyResults&L=" + league_id + "&W=" + mflBoxActiveWeek + "&DETAILS=1&JSON=1";
				jQuery.ajax({
					url: a,
					success: function(e) {
						mflBoxPopulateTiebreaker(e.weeklyResults)
					},
					async: e
				})
			}
		} else {
			a = baseURLDynamic + "/" + year + "/export?TYPE=weeklyResults&L=" + league_id + "&W=" + mflBoxActiveWeek + "&DETAILS=1&JSON=1";
			jQuery.ajax({
				url: a,
				success: function(e) {
					mflBoxJSON_matchups = e.weeklyResults
				},
				async: e
			})
		}
	else {
		a = baseURLDynamic + "/" + year + "/export?TYPE=weeklyResults&L=" + league_id + "&W=" + mflBoxActiveWeek + "&DETAILS=1&JSON=1";
		jQuery.ajax({
			url: a,
			success: function(e) {
				mflBoxJSON_matchups = e.weeklyResults
			},
			async: e
		})
	}
}
function doMFLBoxNFLWeek(e) {
	var a = baseURLDynamic + "/" + year + "/export?TYPE=nflSchedule&W=" + mflBoxActiveWeek + "&JSON=1";
	jQuery.ajax({
		url: a,
		success: function(e) {
			if (mflBoxJSON_nflSchedule = e.nflSchedule, mflBoxActiveWeek === completedWeek + 1)
				try {
					for (var a = 0; a < mflBoxJSON_nflSchedule.matchup.length; a++)
						mflBoxNFLKickoff[mflBoxJSON_nflSchedule.matchup[a].team[0].id] = parseInt(mflBoxJSON_nflSchedule.matchup[a].kickoff),
						mflBoxNFLKickoff[mflBoxJSON_nflSchedule.matchup[a].team[1].id] = parseInt(mflBoxJSON_nflSchedule.matchup[a].kickoff)
				} catch (e) {
					try {
						mflBoxNFLKickoff[mflBoxJSON_nflSchedule.matchup.team[0].id] = parseInt(mflBoxJSON_nflSchedule.matchup.kickoff),
						mflBoxNFLKickoff[mflBoxJSON_nflSchedule.matchup.team[1].id] = parseInt(mflBoxJSON_nflSchedule.matchup.kickoff)
					} catch (e) {}
				}
		},
		async: e
	})
}
function updateMFLBoxStartersString(e) {
	0 === mflBoxStartersString.length && (mflBoxStartersString[0] = ""),
	mflBoxStartersString[mflBoxStartersString.length - 1].length > 2500 && (mflBoxStartersString[mflBoxStartersString.length] = ""),
	mflBoxStartersString[mflBoxStartersString.length - 1] += e + ","
}
function doMFLBoxProjectedScores(e) {
	for (var a = 0; a < mflBoxStartersString.length; a++) {
		var t = baseURLDynamic + "/" + year + "/export?TYPE=projectedScores&L=" + league_id + "&PLAYERS=" + mflBoxStartersString[a] + "&WEEK=" + mflBoxActiveWeek + "&JSON=1";
		jQuery.ajax({
			url: t,
			success: function(e) {
				if (0 === a)
					mflBoxJSON_projectedScores = e;
				else
					for (var t = 0; t < e.projectedScores.playerScore.length; t++)
						mflBoxJSON_projectedScores.projectedScores.playerScore.push(e.projectedScores.playerScore[t])
			},
			async: e
		})
	}
}
function doMFLBoxArrays() {
	mflBox_players = new Array,
	mflBox_player_fid_tracker = new Array,
	mflBox_matchups = new Array,
	mflBox_nflSchedule = new Array,
	mflBox_nflOpponents = new Array,
	mflBoxIsAllPlay = !1,
	mflBoxFranchise = new Array,
	mflBoxPlayerProjected = new Array;
	for (var e = 0; e < mflBoxJSON_standings.standings.franchise.length; e++) {
		var a = mflBoxJSON_standings.standings.franchise[e].id;
		try {
			var t = mflBoxJSON_standings.standings.franchise[e].h2hw.$t
		} catch (e) {
			t = "0"
		}
		try {
			var r = "-" + mflBoxJSON_standings.standings.franchise[e].h2hl.$t
		} catch (e) {
			r = "-0"
		}
		try {
			var o = "-" + mflBoxJSON_standings.standings.franchise[e].h2ht.$t
		} catch (e) {
			o = "-0"
		}
		franchiseDatabase["fid_" + a].record = "(" + t + r + o + ")"
	}
	try {
		for (e = 0; e < mflBoxJSON_matchups.matchup.length; e++) {
			var i = mflBoxJSON_matchups.matchup[e].franchise[0],
				s = mflBoxJSON_matchups.matchup[e].franchise[1];
			mflBox_matchups[e] = {
				roadId: i.id,
				homeId: s.id,
				roadScore: i.score,
				homeScore: s.score,
				roadProjected: 0,
				homeProjected: 0,
				roadYetToPlay: 0,
				homeYetToPlay: 0,
				roadCurrentlyPlaying: 0,
				homeCurrentlyPlaying: 0,
				roadPlayerMinutesRemaining: 0,
				homePlayerMinutesRemaining: 0
			},
			mflBox_matchups[e].roadSpread = "",
			mflBox_matchups[e].homeSpread = "",
			void 0 !== i.spread && parseFloat(i.spread) < 0 && (mflBox_matchups[e].roadSpread = parseFloat(i.spread).toFixed(1)),
			void 0 !== s.spread && parseFloat(s.spread) < 0 && (mflBox_matchups[e].homeSpread = parseFloat(s.spread).toFixed(1)),
			mflBox_matchups[e].roadResult = "",
			mflBox_matchups[e].homeResult = "",
			void 0 !== i.result && (mflBox_matchups[e].roadResult = i.result),
			void 0 !== s.result && (mflBox_matchups[e].homeResult = s.result);
			try {
				mflBox_matchups[e].roadYetToPlay = parseInt(mflBoxJSON_matchups.matchup[e].franchise[0].playersYetToPlay),
				mflBox_matchups[e].homeYetToPlay = parseInt(mflBoxJSON_matchups.matchup[e].franchise[1].playersYetToPlay),
				mflBox_matchups[e].roadCurrentlyPlaying = parseInt(mflBoxJSON_matchups.matchup[e].franchise[0].playersCurrentlyPlaying),
				mflBox_matchups[e].homeCurrentlyPlaying = parseInt(mflBoxJSON_matchups.matchup[e].franchise[1].playersCurrentlyPlaying),
				mflBox_matchups[e].roadPlayerMinutesRemaining = parseInt(parseInt(mflBoxJSON_matchups.matchup[e].franchise[0].gameSecondsRemaining) / 60 + .99),
				mflBox_matchups[e].homePlayerMinutesRemaining = parseInt(parseInt(mflBoxJSON_matchups.matchup[e].franchise[1].gameSecondsRemaining) / 60 + .99);
				for (var n = 0; n < mflBoxJSON_matchups.matchup[e].franchise[0].players.player.length; n++) {
					if ("starter" === (d = mflBoxJSON_matchups.matchup[e].franchise[0].players.player[n]).status)
						var l = "1";
					else
						l = "0";
					if (void 0 === mflBox_players["pid_" + d.id] ? (updateMFLBoxStartersString(d.id), mflBox_players["pid_" + d.id] = {
						id: d.id,
						fid: i.id,
						score: d.score,
						gameSecondsRemaining: parseInt(d.gameSecondsRemaining),
						isStarter: l
					}, mflBox_player_fid_tracker[d.id + "_" + i.id] = 1) : void 0 === mflBox_player_fid_tracker[d.id + "_" + i.id] && (mflBox_players["pid_" + d.id].fid += "," + i.id, mflBox_players["pid_" + d.id].isStarter += "," + l, mflBox_player_fid_tracker[d.id + "_" + i.id] = 1), "1" === l)
						try {
							void 0 === mflBoxFirstKickoff[mflBoxJSON_matchups.matchup[e].franchise[0].id] ? mflBoxNFLKickoff[playerDatabase["pid_" + d.id].team] > 0 && (mflBoxFirstKickoff[mflBoxJSON_matchups.matchup[e].franchise[0].id] = mflBoxNFLKickoff[playerDatabase["pid_" + d.id].team]) : mflBoxNFLKickoff[playerDatabase["pid_" + d.id].team] > 0 && mflBoxNFLKickoff[playerDatabase["pid_" + d.id].team] < mflBoxFirstKickoff[mflBoxJSON_matchups.matchup[e].franchise[0].id] && (mflBoxFirstKickoff[mflBoxJSON_matchups.matchup[e].franchise[0].id] = mflBoxNFLKickoff[playerDatabase["pid_" + d.id].team])
						} catch (e) {
							console.log("error road")
						}
					void 0 === mflBoxFranchise["fid_" + i.id] && (mflBoxFranchise["fid_" + i.id] = {
						starter: new Array,
						bench: new Array,
						tiebreaker: new Array
					}),
					"starter" === d.status && (mflBoxFranchise["fid_" + i.id].starter[d.id] = {
						score: d.score,
						gsr: d.gameSecondsRemaining
					}),
					"nonstarter" === d.status && (mflBoxFranchise["fid_" + i.id].bench[d.id] = {
						score: d.score,
						gsr: d.gameSecondsRemaining
					})
				}
				for (n = 0; n < mflBoxJSON_matchups.matchup[e].franchise[1].players.player.length; n++) {
					if ("starter" === (d = mflBoxJSON_matchups.matchup[e].franchise[1].players.player[n]).status)
						l = "1";
					else
						l = "0";
					if (void 0 === mflBox_players["pid_" + d.id] ? (updateMFLBoxStartersString(d.id), mflBox_players["pid_" + d.id] = {
						id: d.id,
						fid: s.id,
						score: d.score,
						gameSecondsRemaining: parseInt(d.gameSecondsRemaining),
						isStarter: l
					}, mflBox_player_fid_tracker[d.id + "_" + s.id] = 1) : void 0 === mflBox_player_fid_tracker[d.id + "_" + s.id] && (mflBox_players["pid_" + d.id].fid += "," + s.id, mflBox_players["pid_" + d.id].isStarter += "," + l, mflBox_player_fid_tracker[d.id + "_" + s.id] = 1), "1" === l)
						try {
							void 0 === mflBoxFirstKickoff[mflBoxJSON_matchups.matchup[e].franchise[1].id] ? mflBoxNFLKickoff[playerDatabase["pid_" + d.id].team] > 0 && (mflBoxFirstKickoff[mflBoxJSON_matchups.matchup[e].franchise[1].id] = mflBoxNFLKickoff[playerDatabase["pid_" + d.id].team]) : mflBoxNFLKickoff[playerDatabase["pid_" + d.id].team] > 0 && mflBoxNFLKickoff[playerDatabase["pid_" + d.id].team] < mflBoxFirstKickoff[mflBoxJSON_matchups.matchup[e].franchise[1].id] && (mflBoxFirstKickoff[mflBoxJSON_matchups.matchup[e].franchise[1].id] = mflBoxNFLKickoff[playerDatabase["pid_" + d.id].team])
						} catch (e) {
							console.log("error home")
						}
					void 0 === mflBoxFranchise["fid_" + s.id] && (mflBoxFranchise["fid_" + s.id] = {
						starter: new Array,
						bench: new Array,
						tiebreaker: new Array
					}),
					"starter" === d.status && (mflBoxFranchise["fid_" + s.id].starter[d.id] = {
						score: d.score,
						gsr: d.gameSecondsRemaining
					}),
					"nonstarter" === d.status && (mflBoxFranchise["fid_" + s.id].bench[d.id] = {
						score: d.score,
						gsr: d.gameSecondsRemaining
					})
				}
			} catch (a) {
				try {
					if (mflBoxActiveWeek <= completedWeek) {
						i = mflBoxJSON_matchups.matchup[e].franchise[0],
						s = mflBoxJSON_matchups.matchup[e].franchise[1];
						for (var p = 0; p < mflBoxJSON_matchups.matchup[e].franchise[0].player.length; p++) {
							updateMFLBoxStartersString((d = mflBoxJSON_matchups.matchup[e].franchise[0].player[p]).id),
							void 0 === mflBoxFranchise["fid_" + i.id] && (mflBoxFranchise["fid_" + i.id] = {
								starter: new Array,
								bench: new Array,
								tiebreaker: new Array
							}),
							"starter" === d.status && (mflBoxFranchise["fid_" + i.id].starter[d.id] = {
								score: d.score,
								gsr: 0
							}),
							"nonstarter" === d.status && (mflBoxFranchise["fid_" + i.id].bench[d.id] = {
								score: d.score,
								gsr: 0
							})
						}
						for (p = 0; p < mflBoxJSON_matchups.matchup[e].franchise[1].player.length; p++) {
							updateMFLBoxStartersString((d = mflBoxJSON_matchups.matchup[e].franchise[1].player[p]).id),
							void 0 === mflBoxFranchise["fid_" + s.id] && (mflBoxFranchise["fid_" + s.id] = {
								starter: new Array,
								bench: new Array,
								tiebreaker: new Array
							}),
							"starter" === d.status && (mflBoxFranchise["fid_" + s.id].starter[d.id] = {
								score: d.score,
								gsr: 0
							}),
							"nonstarter" === d.status && (mflBoxFranchise["fid_" + s.id].bench[d.id] = {
								score: d.score,
								gsr: 0
							})
						}
					}
				} catch (e) {}
			}
		}
	} catch (a) {
		try {
			i = mflBoxJSON_matchups.matchup.franchise[0],
			s = mflBoxJSON_matchups.matchup.franchise[1];
			mflBox_matchups[0] = {
				roadId: i.id,
				homeId: s.id,
				roadScore: i.score,
				homeScore: s.score,
				roadProjected: 0,
				homeProjected: 0,
				roadYetToPlay: 0,
				homeYetToPlay: 0,
				roadCurrentlyPlaying: 0,
				homeCurrentlyPlaying: 0,
				roadPlayerMinutesRemaining: 0,
				homePlayerMinutesRemaining: 0
			},
			mflBox_matchups[0].roadSpread = "",
			mflBox_matchups[0].homeSpread = "",
			void 0 !== i.spread && parseFloat(i.spread) < 0 && (mflBox_matchups[0].roadSpread = parseFloat(i.spread).toFixed(1)),
			void 0 !== s.spread && parseFloat(s.spread) < 0 && (mflBox_matchups[0].homeSpread = parseFloat(s.spread).toFixed(1)),
			mflBox_matchups[0].roadResult = "",
			mflBox_matchups[0].homeResult = "",
			void 0 !== i.result && (mflBox_matchups[0].roadResult = i.result),
			void 0 !== s.result && (mflBox_matchups[0].homeResult = s.result);
			try {
				mflBox_matchups[0].roadYetToPlay = parseInt(mflBoxJSON_matchups.matchup.franchise[0].playersYetToPlay),
				mflBox_matchups[0].homeYetToPlay = parseInt(mflBoxJSON_matchups.matchup.franchise[1].playersYetToPlay),
				mflBox_matchups[0].roadCurrentlyPlaying = parseInt(mflBoxJSON_matchups.matchup.franchise[0].playersCurrentlyPlaying),
				mflBox_matchups[0].homeCurrentlyPlaying = parseInt(mflBoxJSON_matchups.matchup.franchise[1].playersCurrentlyPlaying),
				mflBox_matchups[0].roadPlayerMinutesRemaining = parseInt(parseInt(mflBoxJSON_matchups.matchup.franchise[0].gameSecondsRemaining) / 60 + .99),
				mflBox_matchups[0].homePlayerMinutesRemaining = parseInt(parseInt(mflBoxJSON_matchups.matchup.franchise[1].gameSecondsRemaining) / 60 + .99);
				for (n = 0; n < mflBoxJSON_matchups.matchup.franchise[0].players.player.length; n++) {
					if ("starter" === (d = mflBoxJSON_matchups.matchup.franchise[0].players.player[n]).status)
						l = "1";
					else
						l = "0";
					if (void 0 === mflBox_players["pid_" + d.id] ? (updateMFLBoxStartersString(d.id), mflBox_players["pid_" + d.id] = {
						id: d.id,
						fid: i.id,
						score: d.score,
						gameSecondsRemaining: parseInt(d.gameSecondsRemaining),
						isStarter: l
					}, mflBox_player_fid_tracker[d.id + "_" + i.id] = 1) : void 0 === mflBox_player_fid_tracker[d.id + "_" + i.id] && (mflBox_players["pid_" + d.id].fid += "," + i.id, mflBox_players["pid_" + d.id].isStarter += "," + l, mflBox_player_fid_tracker[d.id + "_" + i.id] = 1), "1" === l)
						try {
							void 0 === mflBoxFirstKickoff[mflBoxJSON_matchups.matchup.franchise[0].id] ? mflBoxNFLKickoff[playerDatabase["pid_" + d.id].team] > 0 && (mflBoxFirstKickoff[mflBoxJSON_matchups.matchup.franchise[0].id] = mflBoxNFLKickoff[playerDatabase["pid_" + d.id].team]) : mflBoxNFLKickoff[playerDatabase["pid_" + d.id].team] > 0 && mflBoxNFLKickoff[playerDatabase["pid_" + d.id].team] < mflBoxFirstKickoff[mflBoxJSON_matchups.matchup.franchise[0].id] && (mflBoxFirstKickoff[mflBoxJSON_matchups.matchup.franchise[0].id] = mflBoxNFLKickoff[playerDatabase["pid_" + d.id].team])
						} catch (e) {}
					void 0 === mflBoxFranchise["fid_" + i.id] && (mflBoxFranchise["fid_" + i.id] = {
						starter: new Array,
						bench: new Array,
						tiebreaker: new Array
					}),
					"starter" === d.status && (mflBoxFranchise["fid_" + i.id].starter[d.id] = {
						score: d.score,
						gsr: d.gameSecondsRemaining
					}),
					"nonstarter" === d.status && (mflBoxFranchise["fid_" + i.id].bench[d.id] = {
						score: d.score,
						gsr: d.gameSecondsRemaining
					})
				}
				for (n = 0; n < mflBoxJSON_matchups.matchup.franchise[1].players.player.length; n++) {
					if ("starter" === (d = mflBoxJSON_matchups.matchup.franchise[1].players.player[n]).status)
						l = "1";
					else
						l = "0";
					if (void 0 === mflBox_players["pid_" + d.id] ? (updateMFLBoxStartersString(d.id), mflBox_players["pid_" + d.id] = {
						id: d.id,
						fid: s.id,
						score: d.score,
						gameSecondsRemaining: parseInt(d.gameSecondsRemaining),
						isStarter: l
					}, mflBox_player_fid_tracker[d.id + "_" + s.id] = 1) : void 0 === mflBox_player_fid_tracker[d.id + "_" + s.id] && (mflBox_players["pid_" + d.id].fid += "," + s.id, mflBox_players["pid_" + d.id].isStarter += "," + l, mflBox_player_fid_tracker[d.id + "_" + s.id] = 1), "1" === l)
						try {
							void 0 === mflBoxFirstKickoff[mflBoxJSON_matchups.matchup.franchise[1].id] ? mflBoxNFLKickoff[playerDatabase["pid_" + d.id].team] > 0 && (mflBoxFirstKickoff[mflBoxJSON_matchups.matchup.franchise[1].id] = mflBoxNFLKickoff[playerDatabase["pid_" + d.id].team]) : mflBoxNFLKickoff[playerDatabase["pid_" + d.id].team] > 0 && mflBoxNFLKickoff[playerDatabase["pid_" + d.id].team] < mflBoxFirstKickoff[mflBoxJSON_matchups.matchup.franchise[1].id] && (mflBoxFirstKickoff[mflBoxJSON_matchups.matchup.franchise[1].id] = mflBoxNFLKickoff[playerDatabase["pid_" + d.id].team])
						} catch (e) {}
					void 0 === mflBoxFranchise["fid_" + s.id] && (mflBoxFranchise["fid_" + s.id] = {
						starter: new Array,
						bench: new Array,
						tiebreaker: new Array
					}),
					"starter" === d.status && (mflBoxFranchise["fid_" + s.id].starter[d.id] = {
						score: d.score,
						gsr: d.gameSecondsRemaining
					}),
					"nonstarter" === d.status && (mflBoxFranchise["fid_" + s.id].bench[d.id] = {
						score: d.score,
						gsr: d.gameSecondsRemaining
					})
				}
			} catch (e) {
				try {
					if (mflBoxActiveWeek <= completedWeek) {
						for (i = mflBoxJSON_matchups.matchup.franchise[0], s = mflBoxJSON_matchups.matchup.franchise[1], p = 0; p < mflBoxJSON_matchups.matchup.franchise[0].player.length; p++) {
							updateMFLBoxStartersString((d = mflBoxJSON_matchups.matchup.franchise[0].player[p]).id),
							void 0 === mflBoxFranchise["fid_" + i.id] && (mflBoxFranchise["fid_" + i.id] = {
								starter: new Array,
								bench: new Array,
								tiebreaker: new Array
							}),
							"starter" === d.status && (mflBoxFranchise["fid_" + i.id].starter[d.id] = {
								score: d.score,
								gsr: 0
							}),
							"nonstarter" === d.status && (mflBoxFranchise["fid_" + i.id].bench[d.id] = {
								score: d.score,
								gsr: 0
							})
						}
						for (p = 0; p < mflBoxJSON_matchups.matchup.franchise[1].player.length; p++) {
							updateMFLBoxStartersString((d = mflBoxJSON_matchups.matchup.franchise[1].player[p]).id),
							void 0 === mflBoxFranchise["fid_" + s.id] && (mflBoxFranchise["fid_" + s.id] = {
								starter: new Array,
								bench: new Array,
								tiebreaker: new Array
							}),
							"starter" === d.status && (mflBoxFranchise["fid_" + s.id].starter[d.id] = {
								score: d.score,
								gsr: 0
							}),
							"nonstarter" === d.status && (mflBoxFranchise["fid_" + s.id].bench[d.id] = {
								score: d.score,
								gsr: 0
							})
						}
					}
				} catch (e) {}
			}
		} catch (a) {
			mflBoxIsAllPlay = !0;
			for (e = 0; e < mflBoxJSON_matchups.franchise.length; e++)
				if (mflBoxAllPlayId === mflBoxJSON_matchups.franchise[e].id)
					s = mflBoxJSON_matchups.franchise[e];
			var u = 0;
			for (e = 0; e < mflBoxJSON_matchups.franchise.length; e++) {
				if (mflBoxAllPlayId !== mflBoxJSON_matchups.franchise[e].id) {
					i = mflBoxJSON_matchups.franchise[e];
					mflBox_matchups[u] = {
						roadId: i.id,
						homeId: s.id,
						roadScore: i.score,
						homeScore: s.score,
						roadProjected: 0,
						homeProjected: 0,
						roadYetToPlay: 0,
						homeYetToPlay: 0,
						roadCurrentlyPlaying: 0,
						homeCurrentlyPlaying: 0,
						roadPlayerMinutesRemaining: 0,
						homePlayerMinutesRemaining: 0
					},
					mflBox_matchups[u].roadSpread = "",
					mflBox_matchups[u].homeSpread = "",
					mflBox_matchups[u].roadResult = "",
					mflBox_matchups[u].homeResult = "",
					mflBoxActiveWeek <= completedWeek && (parseFloat(i.score) > parseFloat(s.score) && (mflBox_matchups[u].roadResult = "W"), parseFloat(s.score) > parseFloat(i.score) && (mflBox_matchups[u].homeResult = "W")),
					mflBox_matchups[u].roadYetToPlay = parseInt(i.playersYetToPlay),
					mflBox_matchups[u].homeYetToPlay = parseInt(s.playersYetToPlay),
					mflBox_matchups[u].roadCurrentlyPlaying = parseInt(i.playersCurrentlyPlaying),
					mflBox_matchups[u].homeCurrentlyPlaying = parseInt(s.playersCurrentlyPlaying),
					mflBox_matchups[u].roadPlayerMinutesRemaining = parseInt(parseInt(i.gameSecondsRemaining) / 60 + .99),
					mflBox_matchups[u].homePlayerMinutesRemaining = parseInt(parseInt(s.gameSecondsRemaining) / 60 + .99),
					u++
				}
				try {
					for (n = 0; n < mflBoxJSON_matchups.franchise[e].players.player.length; n++) {
						if ("starter" === (d = mflBoxJSON_matchups.franchise[e].players.player[n]).status)
							l = "1";
						else
							l = "0";
						if (void 0 === mflBox_players["pid_" + d.id] ? (updateMFLBoxStartersString(d.id), mflBox_players["pid_" + d.id] = {
							id: d.id,
							fid: i.id,
							score: d.score,
							gameSecondsRemaining: parseInt(d.gameSecondsRemaining),
							isStarter: l
						}, mflBox_player_fid_tracker[d.id + "_" + i.id] = 1) : void 0 === mflBox_player_fid_tracker[d.id + "_" + i.id] && (mflBox_players["pid_" + d.id].fid += "," + i.id, mflBox_players["pid_" + d.id].isStarter += "," + l, mflBox_player_fid_tracker[d.id + "_" + i.id] = 1), "1" === l)
							try {
								void 0 === mflBoxFirstKickoff[mflBoxJSON_matchups.franchise[e].id] ? mflBoxNFLKickoff[playerDatabase["pid_" + d.id].team] > 0 && (mflBoxFirstKickoff[mflBoxJSON_matchups.franchise[e].id] = mflBoxNFLKickoff[playerDatabase["pid_" + d.id].team]) : mflBoxNFLKickoff[playerDatabase["pid_" + d.id].team] > 0 && mflBoxNFLKickoff[playerDatabase["pid_" + d.id].team] < mflBoxFirstKickoff[mflBoxJSON_matchups.franchise[e].id] && (mflBoxFirstKickoff[mflBoxJSON_matchups.franchise[e].id] = mflBoxNFLKickoff[playerDatabase["pid_" + d.id].team])
							} catch (e) {}
						void 0 === mflBoxFranchise["fid_" + i.id] && (mflBoxFranchise["fid_" + i.id] = {
							starter: new Array,
							bench: new Array,
							tiebreaker: new Array
						}),
						"starter" === d.status && (mflBoxFranchise["fid_" + i.id].starter[d.id] = {
							score: d.score,
							gsr: d.gameSecondsRemaining
						}),
						"nonstarter" === d.status && (mflBoxFranchise["fid_" + i.id].bench[d.id] = {
							score: d.score,
							gsr: d.gameSecondsRemaining
						})
					}
				} catch (a) {
					try {
						if (mflBoxActiveWeek <= completedWeek)
							for (i = mflBoxJSON_matchups.franchise[e], p = 0; p < mflBoxJSON_matchups.franchise[e].player.length; p++) {
								var d;
								updateMFLBoxStartersString((d = mflBoxJSON_matchups.franchise[e].player[p]).id),
								void 0 === mflBoxFranchise["fid_" + i.id] && (mflBoxFranchise["fid_" + i.id] = {
									starter: new Array,
									bench: new Array,
									tiebreaker: new Array
								}),
								"starter" === d.status && (mflBoxFranchise["fid_" + i.id].starter[d.id] = {
									score: d.score,
									gsr: 0
								}),
								"nonstarter" === d.status && (mflBoxFranchise["fid_" + i.id].bench[d.id] = {
									score: d.score,
									gsr: 0
								})
							}
					} catch (e) {}
				}
			}
			mflBox_matchups.sort(function(e, a) {
				return parseFloat(e.roadScore) < parseFloat(a.roadScore) ? 1 : parseFloat(e.roadScore) > parseFloat(a.roadScore) ? -1 : 0
			})
		}
	}
	if (void 0 !== mflBoxJSON_nflSchedule.matchup.length)
		for (e = 0; e < mflBoxJSON_nflSchedule.matchup.length; e++) {
			i = mflBoxJSON_nflSchedule.matchup[e].team[0],
			s = mflBoxJSON_nflSchedule.matchup[e].team[1];
			mflBox_nflSchedule[e] = {
				roadId: i.id,
				homeId: s.id,
				roadScore: i.score,
				homeScore: s.score,
				kickoff: mflBoxJSON_nflSchedule.matchup[e].kickoff,
				gameSecondsRemaining: mflBoxJSON_nflSchedule.matchup[e].gameSecondsRemaining
			},
			mflBox_nflSchedule[e].roadSpread = "",
			mflBox_nflSchedule[e].homeSpread = "",
			parseFloat(i.spread) < 0 && (mflBox_nflSchedule[e].roadSpread = parseFloat(i.spread).toFixed(1)),
			parseFloat(s.spread) < 0 && (mflBox_nflSchedule[e].homeSpread = parseFloat(s.spread).toFixed(1)),
			mflBox_nflSchedule[e].roadResult = "",
			mflBox_nflSchedule[e].homeResult = "",
			mflBoxActiveWeek <= completedWeek && (parseFloat(i.score) > parseFloat(s.score) && (mflBox_nflSchedule[e].roadResult = "W"), parseFloat(s.score) > parseFloat(i.score) && (mflBox_nflSchedule[e].homeResult = "W"));
			var c = "T",
				m = "T";
			parseFloat(i.score) > parseFloat(s.score) && (c = "W", m = "L"),
			parseFloat(s.score) > parseFloat(i.score) && (c = "L", m = "W"),
			0 === mflBoxCurrentWeekKickoff && (mflBoxCurrentWeekKickoff = parseInt(mflBoxJSON_nflSchedule.matchup[e].kickoff)),
			0 === e && (mflBoxActiveWeekKickoff = parseInt(mflBoxJSON_nflSchedule.matchup[e].kickoff)),
			mflBox_nflOpponents[i.id] = {
				opponent: s.id,
				isHome: !1,
				score: i.score,
				result: c
			},
			mflBox_nflOpponents[s.id] = {
				opponent: i.id,
				isHome: !0,
				score: s.score,
				result: m
			}
		}
	else {
		i = mflBoxJSON_nflSchedule.matchup.team[0],
		s = mflBoxJSON_nflSchedule.matchup.team[1];
		mflBox_nflSchedule[0] = {
			roadId: i.id,
			homeId: s.id,
			roadScore: i.score,
			homeScore: s.score,
			spread: parseFloat(s.spread).toFixed(1),
			kickoff: mflBoxJSON_nflSchedule.matchup.kickoff,
			gameSecondsRemaining: mflBoxJSON_nflSchedule.matchup.gameSecondsRemaining
		},
		mflBox_nflSchedule[0].roadSpread = "",
		mflBox_nflSchedule[0].homeSpread = "",
		parseFloat(i.spread) < 0 && (mflBox_nflSchedule[0].roadSpread = parseFloat(i.spread).toFixed(1)),
		parseFloat(s.spread) < 0 && (mflBox_nflSchedule[0].homeSpread = parseFloat(s.spread).toFixed(1)),
		mflBox_nflSchedule[0].roadResult = "",
		mflBox_nflSchedule[0].homeResult = "",
		mflBoxActiveWeek <= completedWeek && (parseFloat(i.score) > parseFloat(s.score) && (mflBox_nflSchedule[0].roadResult = "W"), parseFloat(s.score) > parseFloat(i.score) && (mflBox_nflSchedule[0].homeResult = "W"));
		c = "T",
		m = "T";
		parseFloat(i.score) > parseFloat(s.score) && (c = "W", m = "L"),
		parseFloat(s.score) > parseFloat(i.score) && (c = "L", m = "W"),
		0 === mflBoxCurrentWeekKickoff && (mflBoxCurrentWeekKickoff = parseInt(mflBoxJSON_nflSchedule.matchup.kickoff)),
		0 === e && (mflBoxActiveWeekKickoff = parseInt(mflBoxJSON_nflSchedule.matchup.kickoff)),
		mflBox_nflOpponents[i.id] = {
			opponent: s.id,
			isHome: !1,
			score: i.score,
			result: c
		},
		mflBox_nflOpponents[s.id] = {
			opponent: i.id,
			isHome: !0,
			score: s.score,
			result: m
		}
	}
}
function doMFLBoxArrows() {
	if (mflBoxMFLSchedule && mflBoxActiveWeek > mflBoxEndWeek && (mflBoxActiveWeek = mflBoxEndWeek), jQuery("#MFLBoxWeekCell").html("Wk " + mflBoxActiveWeek), mflBoxMFLSchedule ? mflBoxActiveWeek > mflBoxStartWeek ? jQuery(".MFLBoxArrowLeft").removeClass("MFLBoxArrowFaded") : jQuery(".MFLBoxArrowLeft").addClass("MFLBoxArrowFaded") : mflBoxActiveWeek > 1 ? jQuery(".MFLBoxArrowLeft").removeClass("MFLBoxArrowFaded") : jQuery(".MFLBoxArrowLeft").addClass("MFLBoxArrowFaded"), mflBoxMFLSchedule) {
		var e = !1,
			a = baseURLDynamic + "/" + year + "/export?TYPE=liveScoring&L=" + league_id + "&W=" + (mflBoxActiveWeek + 1) + "&JSON=1";
		jQuery.ajax({
			url: a,
			success: function(a) {
				if (parseInt(a.liveScoring.week) === mflBoxActiveWeek + 1) {
					try {
						a.liveScoring.matchup.length > 0 && (e = !0)
					} catch (e) {}
					try {
						a.liveScoring.matchup.franchise.length > 0 && (e = !0)
					} catch (e) {}
					try {
						a.liveScoring.franchise.length > 0 && (e = !0)
					} catch (e) {}
				}
				e ? jQuery(".MFLBoxArrowRight").removeClass("MFLBoxArrowFaded") : jQuery(".MFLBoxArrowRight").addClass("MFLBoxArrowFaded")
			},
			async: !1
		})
	} else {
		e = !1,
		a = baseURLDynamic + "/" + year + "/export?TYPE=nflSchedule&W=" + (mflBoxActiveWeek + 1) + "&JSON=1";
		jQuery.ajax({
			url: a,
			success: function(a) {
				if (parseInt(a.nflSchedule.week) === mflBoxActiveWeek + 1) {
					try {
						a.nflSchedule.matchup.length > 0 && (e = !0)
					} catch (e) {}
					try {
						a.nflSchedule.matchup.team.length > 0 && (e = !0)
					} catch (e) {}
				}
				e ? jQuery(".MFLBoxArrowRight").removeClass("MFLBoxArrowFaded") : jQuery(".MFLBoxArrowRight").addClass("MFLBoxArrowFaded")
			},
			async: !1
		})
	}
}
function mflBoxExpand(e, a) {
	a ? (jQuery(".MFLExtras_" + e).show(), jQuery("#mflBoxCollapse_" + e).show(), jQuery("#mflBoxExpand_" + e).hide(), mflBoxDetailsTracker[e] = a) : (jQuery(".MFLExtras_" + e).hide(), jQuery("#mflBoxCollapse_" + e).hide(), jQuery("#mflBoxExpand_" + e).show(), mflBoxDetailsTracker[e] = a)
}
function mflBoxProjectedScoresHistorical() {
	for (var e = 0; e < mflBoxJSON_projectedScores.projectedScores.playerScore.length; e++) {
		var a = mflBoxJSON_projectedScores.projectedScores.playerScore[e],
			t = a.id;
		mflBoxPlayerProjected[t] = parseFloat(a.score),
		isNaN(mflBoxPlayerProjected[t]) && (mflBoxPlayerProjected[t] = 0)
	}
}
function mflBoxApplyLiveSettings() {
	if (mflBoxMFLSchedule) {
		var e = new Array,
			a = new Array;
		try {
			for (var t = 0; t < mflBoxJSON_projectedScores.projectedScores.playerScore.length; t++) {
				var r = mflBoxJSON_projectedScores.projectedScores.playerScore[t],
					o = r.id;
				mflBoxPlayerProjected[o] = parseFloat(r.score),
				isNaN(mflBoxPlayerProjected[o]) && (mflBoxPlayerProjected[o] = 0);
				try {
					var i = parseFloat(mflBox_players["pid_" + o].score),
						s = mflBox_players["pid_" + o].fid.split(","),
						n = mflBox_players["pid_" + o].isStarter.split(",");
					if ("" === r.score)
						var l = 0;
					else
						l = parseFloat(r.score);
					for (var p = mflBox_players["pid_" + o].gameSecondsRemaining, u = i + p / 3600 * l, d = 0; d < s.length; d++) {
						var c = s[d],
							m = n[d];
						void 0 === e[c] && (e[c] = {
							pace: 0,
							players: 0,
							gameSecondsRemaining: 0
						}),
						"1" === m && void 0 === a[o + "_" + c] && (e[c].pace += u, e[c].players++, e[c].gameSecondsRemaining += p, a[o + "_" + c] = 1)
					}
				} catch (e) {}
			}
		} catch (e) {}
		for (var f in e)
			e.hasOwnProperty(f) && e[f].gameSecondsRemaining > 0 && jQuery('[id^="mflBoxPace_' + f + '_"]').html('<span class="warning" title="Scoring Pace">' + e[f].pace.toFixed(mflBoxPrecision) + "</span>");
		for (t = 0; t < mflBox_matchups.length; t++) {
			try {
				var h = e[mflBox_matchups[t].roadId].players + e[mflBox_matchups[t].homeId].players,
					y = e[mflBox_matchups[t].roadId].gameSecondsRemaining + e[mflBox_matchups[t].homeId].gameSecondsRemaining,
					g = 3600 * h
			} catch (e) {
				y = 1,
				g = 1
			}
			if (y === g)
				try {
					void 0 === mflBoxFirstKickoff[mflBox_matchups[t].roadId] || void 0 === mflBoxFirstKickoff[mflBox_matchups[t].homeId] ? jQuery('[id^="mflBoxClock_' + mflBox_matchups[t].roadId + "_" + mflBox_matchups[t].homeId + '"]').html(mflBoxGameClock(mflBoxActiveWeekKickoff, 2)) : mflBoxFirstKickoff[mflBox_matchups[t].roadId] < mflBoxFirstKickoff[mflBox_matchups[t].homeId] ? jQuery('[id^="mflBoxClock_' + mflBox_matchups[t].roadId + "_" + mflBox_matchups[t].homeId + '"]').html(mflBoxGameClock(mflBoxFirstKickoff[mflBox_matchups[t].roadId], 2)) : jQuery('[id^="mflBoxClock_' + mflBox_matchups[t].roadId + "_" + mflBox_matchups[t].homeId + '"]').html(mflBoxGameClock(mflBoxFirstKickoff[mflBox_matchups[t].homeId], 2))
				} catch (e) {
					jQuery('[id^="mflBoxClock_' + mflBox_matchups[t].roadId + "_" + mflBox_matchups[t].homeId + '"]').html(mflBoxGameClock(mflBoxActiveWeekKickoff, 2))
				}
			else
				y > 0 ? (jQuery('[id^="mflBoxClock_' + mflBox_matchups[t].roadId + "_" + mflBox_matchups[t].homeId + '"]').html(mflBoxGameClock(y / g * 100, 0) + '<span class="MFLBoxDetailsArrow" id="mflBoxExpand_' + mflBox_matchups[t].roadId + "_" + mflBox_matchups[t].homeId + '" onclick="mflBoxExpand(\'' + mflBox_matchups[t].roadId + "_" + mflBox_matchups[t].homeId + '\',true)"><i class="fa fa-caret-square-o-right" aria-hidden="true"></i></span><span class="MFLBoxDetailsArrow" id="mflBoxCollapse_' + mflBox_matchups[t].roadId + "_" + mflBox_matchups[t].homeId + '" onclick="mflBoxExpand(\'' + mflBox_matchups[t].roadId + "_" + mflBox_matchups[t].homeId + '\',false)" style="display:none"><i class="fa fa-caret-square-o-left" aria-hidden="true"></i></span>'), mflBoxDetailsTracker[mflBox_matchups[t].roadId + "_" + mflBox_matchups[t].homeId] && mflBoxExpand(mflBox_matchups[t].roadId + "_" + mflBox_matchups[t].homeId, !0)) : (jQuery('[id^="mflBoxClock_' + mflBox_matchups[t].roadId + "_" + mflBox_matchups[t].homeId + '"]').html(mflBoxGameClock(y / g * 100, 0)), mflBoxDeclareLiveWinner && (parseFloat(mflBox_matchups[t].roadScore) > parseFloat(mflBox_matchups[t].homeScore) && jQuery('[id="mflBoxWin_' + mflBox_matchups[t].roadId + "_" + t + '"]').html('<i class="fa fa-caret-left" aria-hidden="true"></i>'), parseFloat(mflBox_matchups[t].homeScore) > parseFloat(mflBox_matchups[t].roadScore) && jQuery('[id="mflBoxWin_' + mflBox_matchups[t].homeId + "_" + t + '"]').html('<i class="fa fa-caret-left" aria-hidden="true"></i>')));
			jQuery('[id="mflBoxScore_' + mflBox_matchups[t].roadId + "_" + t + '"]').html(parseFloat(mflBox_matchups[t].roadScore).toFixed(mflBoxPrecision)),
			jQuery('[id="mflBoxScore_' + mflBox_matchups[t].homeId + "_" + t + '"]').html(parseFloat(mflBox_matchups[t].homeScore).toFixed(mflBoxPrecision)),
			jQuery('[id="mflBoxPMR_' + mflBox_matchups[t].roadId + "_" + t + '"]').html(parseFloat(mflBox_matchups[t].roadPlayerMinutesRemaining)),
			jQuery('[id="mflBoxPMR_' + mflBox_matchups[t].homeId + "_" + t + '"]').html(parseFloat(mflBox_matchups[t].homePlayerMinutesRemaining)),
			jQuery('[id="mflBoxYTP_' + mflBox_matchups[t].roadId + "_" + t + '"]').html(parseFloat(mflBox_matchups[t].roadYetToPlay)),
			jQuery('[id="mflBoxYTP_' + mflBox_matchups[t].homeId + "_" + t + '"]').html(parseFloat(mflBox_matchups[t].homeYetToPlay)),
			jQuery('[id="mflBoxCP_' + mflBox_matchups[t].roadId + "_" + t + '"]').html(parseFloat(mflBox_matchups[t].roadCurrentlyPlaying)),
			jQuery('[id="mflBoxCP_' + mflBox_matchups[t].homeId + "_" + t + '"]').html(parseFloat(mflBox_matchups[t].homeCurrentlyPlaying))
		}
	} else
		for (t = 0; t < mflBox_nflSchedule.length; t++)
			mflBoxNFLBox(mflBox_nflSchedule[t], t)
}
function mflBoxPopulateTiebreaker(e) {
	for (var a in mflBoxTiebreaker = new Array, franchiseDatabase)
		franchiseDatabase.hasOwnProperty(a) && parseInt(franchiseDatabase[a].id) > 0 && (mflBoxTiebreaker[a] = new Array);
	try {
		for (var t = 0; t < e.matchup.length; t++) {
			var r = e.matchup[t].franchise[0],
				o = e.matchup[t].franchise[1];
			if (void 0 !== r.tiebreaker && 0 !== r.tiebreaker.length)
				for (var i = r.tiebreaker.split(","), s = 0; s < i.length; s++)
					parseInt(i[s]) > 0 && (mflBoxTiebreaker["fid_" + r.id]["pid_" + i[s]] = 1);
			if (void 0 !== o.tiebreaker && 0 !== o.tiebreaker.length)
				for (i = o.tiebreaker.split(","), s = 0; s < i.length; s++)
					parseInt(i[s]) > 0 && (mflBoxTiebreaker["fid_" + o.id]["pid_" + i[s]] = 1)
		}
	} catch (a) {
		try {
			r = e.matchup.franchise[0],
			o = e.matchup.franchise[1];
			if (void 0 !== r.tiebreaker && 0 !== r.tiebreaker.length)
				for (i = r.tiebreaker.split(","), s = 0; s < i.length; s++)
					parseInt(i[s]) > 0 && (mflBoxTiebreaker["fid_" + r.id]["pid_" + i[s]] = 1);
			if (void 0 !== o.tiebreaker && 0 !== o.tiebreaker.length)
				for (i = o.tiebreaker.split(","), s = 0; s < i.length; s++)
					parseInt(i[s]) > 0 && (mflBoxTiebreaker["fid_" + o.id]["pid_" + i[s]] = 1)
		} catch (a) {
			for (t = 0; t < e.franchise.length; t++) {
				if (mflBoxAllPlayId !== e.franchise[t].id)
					if (void 0 !== (r = e.franchise[t]).tiebreaker && 0 !== r.tiebreaker.length)
						for (i = r.tiebreaker.split(","), s = 0; s < i.length; s++)
							parseInt(i[s]) > 0 && (mflBoxTiebreaker["fid_" + r.id]["pid_" + i[s]] = 1)
			}
		}
	}
}
function mflBoxApplyUncompletedSettings() {
	if (mflBoxMFLSchedule)
		for (var e = 0; e < mflBox_matchups.length; e++) {
			jQuery('[id^="mflBoxClock_' + mflBox_matchups[e].roadId + "_" + mflBox_matchups[e].homeId + '"]').html(mflBoxGameClock(mflBoxActiveWeekKickoff, 1)),
			jQuery('[id="mflBoxSpread_' + mflBox_matchups[e].roadId + "_" + e + '"]').html('<span class="warning">' + mflBox_matchups[e].roadSpread + "</span>"),
			jQuery('[id="mflBoxSpread_' + mflBox_matchups[e].homeId + "_" + e + '"]').html('<span class="warning">' + mflBox_matchups[e].homeSpread + "</span>");
			try {
				jQuery('[id="mflBoxScore_' + mflBox_matchups[e].roadId + "_" + e + '"]').html(franchiseDatabase["fid_" + mflBox_matchups[e].roadId].record)
			} catch (e) {}
			try {
				jQuery('[id="mflBoxScore_' + mflBox_matchups[e].homeId + "_" + e + '"]').html(franchiseDatabase["fid_" + mflBox_matchups[e].homeId].record)
			} catch (e) {}
		}
	else
		for (e = 0; e < mflBox_nflSchedule.length; e++)
			mflBoxNFLBox(mflBox_nflSchedule[e], e)
}
function mflBoxApplyCompletedSettings() {
	if (mflBoxMFLSchedule)
		for (var e = 0; e < mflBox_matchups.length; e++)
			jQuery('[id^="mflBoxClock_' + mflBox_matchups[e].roadId + "_" + mflBox_matchups[e].homeId + '"]').html("Final"),
			jQuery('[id="mflBoxScore_' + mflBox_matchups[e].roadId + "_" + e + '"]').html(parseFloat(mflBox_matchups[e].roadScore).toFixed(mflBoxPrecision)),
			jQuery('[id="mflBoxScore_' + mflBox_matchups[e].homeId + "_" + e + '"]').html(parseFloat(mflBox_matchups[e].homeScore).toFixed(mflBoxPrecision)),
			"W" === mflBox_matchups[e].roadResult && jQuery('[id="mflBoxWin_' + mflBox_matchups[e].roadId + "_" + e + '"]').html('<i class="fa fa-caret-left" aria-hidden="true"></i>'),
			"W" === mflBox_matchups[e].homeResult && jQuery('[id="mflBoxWin_' + mflBox_matchups[e].homeId + "_" + e + '"]').html('<i class="fa fa-caret-left" aria-hidden="true"></i>');
	else
		for (e = 0; e < mflBox_nflSchedule.length; e++)
			mflBoxNFLBox(mflBox_nflSchedule[e], e)
}
function mflBoxNFLBox(e, a) {
	0 === parseInt(e.gameSecondsRemaining) ? (jQuery('[id^="mflBoxClock_' + e.roadId + "_" + e.homeId + '"]').html("Final"), jQuery('[id="mflBoxScore_' + e.roadId + "_" + a + '"]').html(e.roadScore), jQuery('[id="mflBoxScore_' + e.homeId + "_" + a + '"]').html(e.homeScore), "W" === e.roadResult && jQuery('[id="mflBoxWin_' + e.roadId + "_" + a + '"]').html('<i class="fa fa-caret-left" aria-hidden="true"></i>'), "W" === e.homeResult && jQuery('[id="mflBoxWin_' + e.homeId + "_" + a + '"]').html('<i class="fa fa-caret-left" aria-hidden="true"></i>')) : 3600 === parseInt(e.gameSecondsRemaining) ? (jQuery('[id^="mflBoxClock_' + e.roadId + "_" + e.homeId + '"]').html(mflBoxGameClock(e.kickoff, 2)), jQuery('[id="mflBoxSpread_' + e.roadId + "_" + a + '"]').html('<span class="warning">' + e.roadSpread + "</span>"), jQuery('[id="mflBoxSpread_' + e.homeId + "_" + a + '"]').html('<span class="warning">' + e.homeSpread + "</span>")) : (jQuery('[id^="mflBoxClock_' + e.roadId + "_" + e.homeId + '"]').html(mflBoxGameClock(parseInt(e.gameSecondsRemaining) / 3600 * 100, 3)), jQuery('[id="mflBoxScore_' + e.roadId + "_" + a + '"]').html(e.roadScore), jQuery('[id="mflBoxScore_' + e.homeId + "_" + a + '"]').html(e.homeScore))
}
function mflBoxCheckLive() {
	return !(!mflBoxCurrentLiveScoring || mflBoxActiveWeek !== mflBoxCurrentWeek)
}
function mflBoxCheckCompletedWeek() {
	return mflBoxActiveWeek <= completedWeek
}
function mflBoxNewWeek(e) {
	if ($("#MFLBoxPlayerDetails").hide(), mflBoxPlayerDetailsFid.fid = "", e > 0) {
		if (jQuery(".MFLBoxArrowRight").hasClass("MFLBoxArrowFaded"))
			return !1
	} else if (e < 0 && jQuery(".MFLBoxArrowLeft").hasClass("MFLBoxArrowFaded"))
		return !1;
	try {
		clearTimeout(mflBoxTimer)
	} catch (e) {}
	mflBoxActiveWeek += e,
	doMFLBoxArrows(),
	doMFLBoxUpdate(!1, !0)
}
function mflBoxGameClockMinutes(e) {
	var a = parseInt(60 * e / 100),
		t = 60 * e / 100 - parseInt(60 * e / 100),
		r = parseInt(60 * t);
	return r < 10 && (r = "0" + r), a + ":" + r
}
function mflBoxGameClock(e, a) {
	if (0 === a || 3 === a) {
		if (3 === a || mflBoxDeclareLiveWinner) {
			if (0 === e)
				return "Final";
			if (0 === e)
				return "4th - 0:00"
		}
		return e < 25 ? "4th - " + mflBoxGameClockMinutes(e) : 25 === e ? "4th - 15:00" : e < 50 ? "3rd - " + mflBoxGameClockMinutes(e - 25) : 50 === e ? "Halftime" : e < 75 ? "2nd - " + mflBoxGameClockMinutes(e - 50) : 75 === e ? "2nd - 15:00" : e < 100 ? "1st - " + mflBoxGameClockMinutes(e - 75) : "1st - 15:00"
	}
	if (1 === a) {
		var t = new Date(1e3 * e);
		return mflBoxWeekDay[t.getDay()] + " " + mflBoxMonth[t.getMonth()] + " " + t.getDate()
	}
	if (2 === a) {
		if ((t = new Date(1e3 * e)).getHours() > 11)
			var r = "pm";
		else
			r = "am";
		if (t.getHours() > 12)
			var o = t.getHours() - 12;
		else
			o = t.getHours();
		return 0 === o && (o = 12), mm = t.getMinutes() < 10 ? "0" + t.getMinutes() : t.getMinutes(), mflBoxWeekDay[t.getDay()] + " " + o + ":" + mm + r
	}
}
function doMFLBoxLiveStatsClose() {
	$(".MFLBoxLiveStatsWrapper").attr("style", "display:none")
}
function doMFLBoxLiveStatsPopup(e, a) {
	$(".MFLBoxLiveStatsWrapper").attr("style", "display:none"),
	$("#MFLBoxLiveStatsWrapper_" + e + "_" + a).removeAttr("style");
	var t = mflBoxGetStatsStr(a);
	"" === t && (t = "no stats"),
	$("#MFLBoxLiveStatsContent_" + e + "_" + a).html(t + '<span class="MFLBoxLiveStatsClose" onclick="doMFLBoxLiveStatsClose()">X</span>')
}
function mflBoxGetStatsStr(e) {
	var a = [];
	if (null == mflBoxLiveStatsPlayer[e])
		return "";
	if (mflBoxLiveStatsPlayer[e].PA > 0) {
		var t = [];
		void 0 === mflBoxLiveStatsPlayer[e].PC && (mflBoxLiveStatsPlayer[e].PC = 0),
		void 0 === mflBoxLiveStatsPlayer[e].PY && (mflBoxLiveStatsPlayer[e].PY = 0),
		t.push("Pass: " + mflBoxLiveStatsPlayer[e].PC + "-" + mflBoxLiveStatsPlayer[e].PA + "-" + mflBoxLiveStatsPlayer[e].PY),
		mflBoxLiveStatsPlayer[e]["#P"] > 0 && t.push(mflBoxLiveStatsPlayer[e]["#P"] + " PaTD (" + mflBoxLiveStatsPlayer[e].PS + ")"),
		mflBoxLiveStatsPlayer[e].IN > 0 && t.push(mflBoxLiveStatsPlayer[e].IN + " Int"),
		mflBoxLiveStatsPlayer[e].P2 > 0 && t.push(mflBoxLiveStatsPlayer[e].P2 + " Pa2P"),
		a.push(t.join(", "))
	}
	if (mflBoxLiveStatsPlayer[e].RA > 0) {
		t = [];
		void 0 === mflBoxLiveStatsPlayer[e].RY && (mflBoxLiveStatsPlayer[e].RY = 0),
		t.push("Rush: " + mflBoxLiveStatsPlayer[e].RA + "-" + mflBoxLiveStatsPlayer[e].RY),
		mflBoxLiveStatsPlayer[e]["#R"] > 0 && t.push(mflBoxLiveStatsPlayer[e]["#R"] + " RuTD (" + mflBoxLiveStatsPlayer[e].RS + ")"),
		mflBoxLiveStatsPlayer[e].R2 > 0 && t.push(mflBoxLiveStatsPlayer[e].R2 + " Ru2P"),
		a.push(t.join(", "))
	}
	if (mflBoxLiveStatsPlayer[e].CC > 0) {
		t = [];
		void 0 === mflBoxLiveStatsPlayer[e].CY && (mflBoxLiveStatsPlayer[e].CY = 0),
		t.push("Rec: " + mflBoxLiveStatsPlayer[e].CC + "-" + mflBoxLiveStatsPlayer[e].CY),
		mflBoxLiveStatsPlayer[e]["#C"] > 0 && t.push(mflBoxLiveStatsPlayer[e]["#C"] + " ReTD (" + mflBoxLiveStatsPlayer[e].RC + ")"),
		mflBoxLiveStatsPlayer[e].C2 > 0 && t.push(mflBoxLiveStatsPlayer[e].C2 + " Re2P"),
		a.push(t.join(", "))
	}
	if (mflBoxLiveStatsPlayer[e].FL > 0 && a.push(mflBoxLiveStatsPlayer[e].FL + " Fum Lost"), mflBoxLiveStatsPlayer[e].TK > 0 || mflBoxLiveStatsPlayer[e].AS > 0 || mflBoxLiveStatsPlayer[e].PD > 0) {
		t = [];
		if (mflBoxLiveStatsPlayer[e].TK > 0 && t.push(mflBoxLiveStatsPlayer[e].TK + " T"), mflBoxLiveStatsPlayer[e].TFL > 0 && t.push(mflBoxLiveStatsPlayer[e].TKL + " TFL"), mflBoxLiveStatsPlayer[e].AS > 0 && t.push(mflBoxLiveStatsPlayer[e].AS + " A"), mflBoxLiveStatsPlayer[e].SK > 0 && t.push(mflBoxLiveStatsPlayer[e].SK + " SK"), mflBoxLiveStatsPlayer[e].PD > 0 && t.push(mflBoxLiveStatsPlayer[e].PD + " PD"), mflBoxLiveStatsPlayer[e].IC > 0) {
			var r = mflBoxLiveStatsPlayer[e].IC + " INT";
			mflBoxLiveStatsPlayer[e]["#IR"] > 0 && (r = r + " " + mflBoxLiveStatsPlayer[e]["#IR"] + " IntTD (" + mflBoxLiveStatsPlayer[e].IR + ")"),
			t.push(r)
		}
		if (mflBoxLiveStatsPlayer[e].FF > 0 && t.push(mflBoxLiveStatsPlayer[e].FF + " FF"), mflBoxLiveStatsPlayer[e].FC > 0) {
			r = mflBoxLiveStatsPlayer[e].FC + " FR";
			mflBoxLiveStatsPlayer[e]["#DR"] > 0 && (r = r + " " + mflBoxLiveStatsPlayer[e]["#DR"] + " FRTD (" + mflBoxLiveStatsPlayer[e].DR + ")"),
			t.push(r)
		}
		a.push(t.join(", "))
	}
	if (mflBoxLiveStatsPlayer[e]["#A"] > 0 || mflBoxLiveStatsPlayer[e].EA > 0) {
		t = [],
		r = "Kick: ";
		if (mflBoxLiveStatsPlayer[e]["#A"] > 0) {
			var o = "";
			void 0 === mflBoxLiveStatsPlayer[e]["#F"] && (mflBoxLiveStatsPlayer[e]["#F"] = 0),
			void 0 !== mflBoxLiveStatsPlayer[e].FG && (o = "(" + mflBoxLiveStatsPlayer[e].FG + ")"),
			t.push(r + mflBoxLiveStatsPlayer[e]["#F"] + "-" + mflBoxLiveStatsPlayer[e]["#A"] + " FG " + o),
			r = ""
		}
		mflBoxLiveStatsPlayer[e].EA > 0 && (void 0 === mflBoxLiveStatsPlayer[e].EP && (mflBoxLiveStatsPlayer[e].EP = 0), t.push(r + mflBoxLiveStatsPlayer[e].EP + "-" + mflBoxLiveStatsPlayer[e].EA + " XP"), r = ""),
		a.push(t.join(", "))
	}
	return a.join("; ")
}
function mflBoxGetTeamStatsStr(e) {
	for (var a = [], t = 0; t < show_tstats.length; t++) {
		var r = show_tstats[t];
		void 0 !== mflBoxLiveStatsTeam[e][r] && 0 !== mflBoxLiveStatsTeam[e][r] && a.push(mflBoxLiveStatsTeam[e][r] + " " + r)
	}
	return mflBoxLiveStatsTeam[e].FC > 0 && (a.push(mflBoxLiveStatsTeam[e].FC + " FR"), mflBoxLiveStatsTeam[e]["#DR"] > 0 && a.push(mflBoxLiveStatsTeam[e]["#DR"] + " FR TD (" + mflBoxLiveStatsTeam[e].DR + ")")), mflBoxLiveStatsTeam[e].IC > 0 && (a.push(mflBoxLiveStatsTeam[e].IC + " Int"), mflBoxLiveStatsTeam[e]["#IR"] > 0 && a.push(mflBoxLiveStatsTeam[e]["#IR"] + " Int TD (" + mflBoxLiveStatsTeam[e].IR + ")")), mflBoxLiveStatsTeam[e]["#KT"] > 0 && a.push(mflBoxLiveStatsTeam[e]["#KT"] + " KTD (" + mflBoxLiveStatsTeam[e].KO + ")"), mflBoxLiveStatsTeam[e]["#UT"] > 0 && a.push(mflBoxLiveStatsTeam[e]["#UT"] + " PTD (" + mflBoxLiveStatsTeam[e].PR + ")"), mflBoxLiveStatsTeam[e].BLF > 0 && (a.push(mflBoxLiveStatsTeam[e].BLF + " BLF"), mflBoxLiveStatsTeam[e]["#BF"] > 0 && a.push(mflBoxLiveStatsTeam[e]["#BF"] + " BF (" + mflBoxLiveStatsTeam[e].BF + ")")), mflBoxLiveStatsTeam[e].BLP > 0 && (a.push(mflBoxLiveStatsTeam[e].BLP + " BLP"), mflBoxLiveStatsTeam[e]["#BP"] > 0 && a.push(mflBoxLiveStatsTeam[e]["#BP"] + " BP (" + mflBoxLiveStatsTeam[e].BP + ")")), mflBoxLiveStatsTeam[e].BLE > 0 && a.push(mflBoxLiveStatsTeam[e].BLE + " BLE"), a.join(", ")
}
function mflBoxParseLiveStats(e, a) {
	mflBoxLiveStatsPlayer = [],
	mflBoxLiveStatsTeam = [];
	var t = e.split("\n");
	for (var r in t)
		if (t.hasOwnProperty(r)) {
			var o = t[r].split("|");
			if ("DATE" === o[0] || "REFRESH" === o[0])
				;
			else if (isNaN(o[0]))
				for (void 0 === mflBoxLiveStatsTeam[o[0]] && (mflBoxLiveStatsTeam[o[0]] = {}), j = 1; j < o.length; j++) {
					i = o[j].split(" ");
					mflBoxLiveStatsTeam[o[0]][i[0]] = i[1]
				}
			else
				for (void 0 === mflBoxLiveStatsPlayer[o[0]] && (mflBoxLiveStatsPlayer[o[0]] = {}), j = 1; j < o.length; j++) {
					var i = o[j].split(" ");
					mflBoxLiveStatsPlayer[o[0]][i[0]] = i[1]
				}
		}
}
function doMFLBoxLiveStats() {
	if (!mflBoxIncludeLiveStats || liveScoringWeek < 1)
		return !1;
	var e;
	e = Date.now ? Date.now() : (new Date).getTime();
	var a = mflBoxActiveWeek < 10 ? "0" + mflBoxActiveWeek : mflBoxActiveWeek,
		t = new XMLHttpRequest,
		r = xmlBaseURL + "live_stats_";
	r = (r += "idp_") + a + ".txt?RANDOM=" + e,
	t.onreadystatechange = function() {
		4 === this.readyState && 200 === this.status && mflBoxParseLiveStats(this.responseText, e)
	},
	t.open("GET", r, !0),
	t.send()
}
function doMFLBoxUpdate(e, a) {
	mflBoxStartersString = new Array,
	jQuery.when(doMFLBoxFantasyWeek(e), doMFLBoxNFLWeek(e)).done(function(e, t) {
		jQuery.when(doMFLBoxArrays(), doMFLBoxProjectedScores(!1), doMFLBoxLiveStats()).done(function(e, t) {
			doMFLBoxHTML(a)
		})
	}),
	console.log("refreshing box score . . .")
}
function getMFLBoxNameIcon(e) {
	return "BYE" === e ? '<span class="mflBoxBye">BYE</span>' : "AVG" === e ? '<span class="mflBoxAvg">AVG</span>' : mflBoxUseAbbrev && "" !== franchiseDatabase["fid_" + e].abbrev && "" !== mflBoxIconBase && "" !== mflBoxIconExt ? '<img src="' + mflBoxIconBase + e + "." + mflBoxIconExt + '" title="' + franchiseDatabase["fid_" + e].name + '" style="vertical-align:middle" /> <span style="vertical-align:middle">' + franchiseDatabase["fid_" + e].abbrev + "</span>" : mflBoxUseAbbrev && "" !== franchiseDatabase["fid_" + e].abbrev && mflBoxUseIcon && "" !== franchiseDatabase["fid_" + e].icon ? '<img src="' + franchiseDatabase["fid_" + e].icon + '" title="' + franchiseDatabase["fid_" + e].name + '" style="vertical-align:middle" /> <span style="vertical-align:middle">' + franchiseDatabase["fid_" + e].abbrev + "</span>" : mflBoxUseAbbrev && "" !== franchiseDatabase["fid_" + e].abbrev && mflBoxUseLogo && "" !== franchiseDatabase["fid_" + e].logo ? '<img src="' + franchiseDatabase["fid_" + e].logo + '" title="' + franchiseDatabase["fid_" + e].name + '" style="vertical-align:middle" /> <span style="vertical-align:middle">' + franchiseDatabase["fid_" + e].abbrev + "</span>" : "" !== mflBoxIconBase && "" !== mflBoxIconExt ? '<img src="' + mflBoxIconBase + e + "." + mflBoxIconExt + '" title="' + franchiseDatabase["fid_" + e].name + '" />' : mflBoxUseIcon && "" !== franchiseDatabase["fid_" + e].icon ? '<img src="' + franchiseDatabase["fid_" + e].icon + '" title="' + franchiseDatabase["fid_" + e].name + '" />' : mflBoxUseLogo && "" !== franchiseDatabase["fid_" + e].logo ? '<img src="' + franchiseDatabase["fid_" + e].logo + '" title="' + franchiseDatabase["fid_" + e].name + '" />' : mflBoxUseAbbrev && "" !== franchiseDatabase["fid_" + e].abbrev ? '<span title="' + franchiseDatabase["fid_" + e].name + '">' + franchiseDatabase["fid_" + e].abbrev + "</span>" : franchiseDatabase["fid_" + e].name
}
function getMFLBoxNFLIcon(e) {
	return "" !== mflBoxNFLLogoPath && "" !== mflBoxNFLLogoExt ? '<img src="' + mflBoxNFLLogoPath + e + "." + mflBoxNFLLogoExt + '" title="' + e + '" style="vertical-align:middle;max-height:16px;max-width:20px" />' : e
}
function mflBoxPlayerDetailsClose() {
	$("#MFLBoxOverlay").hide(),
	$("#MFLBoxPlayerDetails").hide(),
	mflBoxPlayerDetailsFid.fid = ""
}
function doMFLBoxPlayerDetails(e, a) {
	mflBoxPlayerDetailsFid.fid = e,
	mflBoxPlayerDetailsFid.boxid = a;
	var t = "";
	t += '<table align="center" cellspacing="1" class="report" id="MFLBoxPlayerDetailsTable"><caption><span>' + franchiseDatabase["fid_" + e].name + '</span><span class="MFLBoxPlayerDetailsClose" onclick="mflBoxPlayerDetailsClose()">X</span></caption>';
	for (var r = 0; r < 3; r++) {
		var o = "";
		0 === r && (t += '<tr class="MFLBoxPlayerDetailsHeader"><th colspan="5">Currently Playing</th></tr>'),
		1 === r && (t += '<tr class="MFLBoxPlayerDetailsHeader"><th colspan="5">Yet to Play</th></tr>'),
		2 === r && (t += '<tr class="MFLBoxPlayerDetailsHeader"><th colspan="5">Final</th></tr>');
		for (var i = 0, s = 0; s < mflBoxPositionSort.length; s++)
			for (var n in mflBoxFranchise["fid_" + e].starter)
				if (mflBoxFranchise["fid_" + e].starter.hasOwnProperty(n) && playerDatabase["pid_" + n].position === mflBoxPositionSort[s]) {
					var l = !1;
					if (0 === r && parseInt(mflBoxFranchise["fid_" + e].starter[n].gsr) > 0 && parseInt(mflBoxFranchise["fid_" + e].starter[n].gsr) < 3600) {
						var p = mflBoxGameClock(parseInt(mflBoxFranchise["fid_" + e].starter[n].gsr) / 3600 * 100, 3);
						if (mflBoxIncludeLiveStats)
							var u = '<span class="MFLBoxLiveStatsScore" onmouseout="doMFLBoxLiveStatsClose()" onmouseover="doMFLBoxLiveStatsPopup(\'' + e + "','" + n + "')\">" + mflBoxFranchise["fid_" + e].starter[n].score + '</span><span id="MFLBoxLiveStatsWrapper_' + e + "_" + n + '" class="MFLBoxLiveStatsWrapper" style="display:none"><span  id="MFLBoxLiveStatsContent_' + e + "_" + n + '" class="MFLBoxLiveStatsContent"></span><span class="MFLBoxLiveStatsArrow"></span></span>';
						else
							u = mflBoxFranchise["fid_" + e].starter[n].score;
						try {
							if ((c = mflBoxPlayerProjected[n] * (parseInt(mflBoxFranchise["fid_" + e].starter[n].gsr) / 3600) + parseFloat(mflBoxFranchise["fid_" + e].starter[n].score)) > mflBoxPlayerProjected[n])
								var d = '<span title="On Pace Points" class="MFLPaceScore MFLPaceScorePositive">' + c.toFixed(mflBoxPrecision) + "</span>";
							else
								d = '<span title="On Pace Points" class="MFLPaceScore MFLPaceScoreNegative">' + c.toFixed(mflBoxPrecision) + "</span>"
						} catch (e) {
							d = (0).toFixed(mflBoxPrecision)
						}
						l = !0
					}
					if (1 === r && 3600 === parseInt(mflBoxFranchise["fid_" + e].starter[n].gsr)) {
						p = mflBoxGameClock(mflBoxNFLKickoff[playerDatabase["pid_" + n].team], 2),
						u = mflBoxFranchise["fid_" + e].starter[n].score;
						try {
							d = '<span title="Projected Points" class="MFLPaceScore">' + (c = mflBoxPlayerProjected[n].toFixed(mflBoxPrecision)) + "</span>"
						} catch (e) {
							d = (0).toFixed(mflBoxPrecision)
						}
						l = !0
					}
					if (2 === r && 0 === parseInt(mflBoxFranchise["fid_" + e].starter[n].gsr)) {
						try {
							p = mflBox_nflOpponents[playerDatabase["pid_" + n].team].result
						} catch (e) {
							p = ""
						}
						if (mflBoxIncludeLiveStats)
							u = '<span class="MFLBoxLiveStatsScore" onmouseout="doMFLBoxLiveStatsClose()" onmouseover="doMFLBoxLiveStatsPopup(\'' + e + "','" + n + "')\">" + mflBoxFranchise["fid_" + e].starter[n].score + '</span><span id="MFLBoxLiveStatsWrapper_' + e + "_" + n + '" class="MFLBoxLiveStatsWrapper" style="display:none"><span  id="MFLBoxLiveStatsContent_' + e + "_" + n + '" class="MFLBoxLiveStatsContent"></span><span class="MFLBoxLiveStatsArrow"></span></span>';
						else
							u = mflBoxFranchise["fid_" + e].starter[n].score;
						try {
							var c;
							d = '<span title="Original Projection" class="MFLPaceScore">' + (c = mflBoxPlayerProjected[n]).toFixed(mflBoxPrecision) + "</span>";
							if (parseFloat(mflBoxFranchise["fid_" + e].starter[n].score) > mflBoxPlayerProjected[n])
								u = '<span class="MFLPaceScorePositive">' + u + "</span>";
							else
								u = '<span class="MFLPaceScoreNegative">' + u + "</span>"
						} catch (e) {
							d = (0).toFixed(mflBoxPrecision)
						}
						l = !0
					}
					if (l) {
						try {
							if (mflBox_nflOpponents[playerDatabase["pid_" + n].team].isHome)
								var m = "v" + mflBox_nflOpponents[playerDatabase["pid_" + n].team].opponent;
							else
								m = "@" + mflBox_nflOpponents[playerDatabase["pid_" + n].team].opponent
						} catch (e) {}
						try {
							var f = ' (<span style="color:red" title="' + mfl_injuries.player["pid_" + n].details + '">' + mfl_injuries.player["pid_" + n].code + "</span>)"
						} catch (e) {
							f = ""
						}
						if (i % 2)
							var h = "eventablerow";
						else
							h = "oddtablerow";
						o += 1 === r ? '<tr class="' + h + '"><td>' + playerDatabase["pid_" + n].name + " " + playerDatabase["pid_" + n].team + " " + playerDatabase["pid_" + n].position + f + '</td><td style="text-align:center">' + m + '</td><td colspan="2" style="text-align:center">' + p + '</td><td style="text-align:right">' + d + " </td></tr>" : '<tr class="' + h + '"><td>' + playerDatabase["pid_" + n].name + " " + playerDatabase["pid_" + n].team + " " + playerDatabase["pid_" + n].position + f + '</td><td style="text-align:center">' + m + '</td><td style="text-align:center">' + p + '</td><td style="text-align:right">' + d + ' </td><td style="text-align:right">' + u + " </td></tr>",
						i++
					}
				}
		"" === o ? t += '<tr class="oddtablerow"><td colspan="5" class="MFLBoxPlayerDetailsNone">none</td></tr>' : (0 === r && (t += '<tr class="MFLBoxPlayerDetailsSubHeader"><th>Player</th><th>Opp</th><th>Clock</th><th>Pace</th><th>Actual</th></tr>'), 1 === r && (t += '<tr class="MFLBoxPlayerDetailsSubHeader"><th>Player</th><th>Opp</th><th colspan="2">Game Time</th><th>Proj.</th></tr>'), 2 === r && (t += '<tr class="MFLBoxPlayerDetailsSubHeader"><th>Player</th><th>Opp</th><th>Result</th><th>Proj.</th><th>Actual</th></tr>'), t += o)
	}
	if (mflBoxIncludeTiebreaker) {
		t += '<tr class="MFLBoxPlayerDetailsHeader"><th colspan="5">Tiebreaker(s)</th></tr>';
		i = 0;
		for (var y in mflBoxTiebreaker["fid_" + e])
			if (mflBoxTiebreaker["fid_" + e].hasOwnProperty(y)) {
				if (i % 2)
					h = "eventablerow";
				else
					h = "oddtablerow";
				t += '<tr class="' + h + '"><td colspan="5">' + playerDatabase[y].name + " " + playerDatabase[y].team + " " + playerDatabase[y].position + "</td></tr>",
				i++
			}
	}
	t += "</tbody></table>",
	$("#MFLBoxOverlay").show(),
	$("#MFLBoxPlayerDetails").html(t).show(),
	$("#MFLBoxPlayerDetails").attr("style", "margin-top:-" + parseInt($("#MFLBoxPlayerDetails").height() / 2) + "px;margin-top:-" + $("#MFLBoxPlayerDetails").height() / 32 + "rem;)")
}
function doMFLBoxHTML(e) {
	var a = "";
	if (mflBoxMFLSchedule) {
		a += '<table class="MFLGameLinks"><tbody><tr>';
		for (var t = 0; t < mflBox_matchups.length; t++)
			a += '<td class="matchupLolite">',
			a += mflBoxIsAllPlay ? ' <table class="MFLGameTable matchupLolite matchupAllPlay" id="mflBoxMatchup_' + t + '" title="Swap All Play Team" onclick="mflBoxAllPlayId=\'' + mflBox_matchups[t].roadId + "';mflBoxNewWeek(0)\">" : ' <table class="MFLGameTable matchupLolite" id="mflBoxMatchup_' + t + '">',
			a += "  <tbody>",
			mflBoxActiveWeek <= completedWeek || mflBoxActiveWeek === liveScoringWeek ? a += '   <tr class="MFLBoxPlayerDetailsTR" onclick="doMFLBoxPlayerDetails(\'' + mflBox_matchups[t].roadId + "'," + t + ')">' : a += "   <tr>",
			a += '    <td class="MFLLiveTeam">' + getMFLBoxNameIcon(mflBox_matchups[t].roadId) + "</td>",
			a += '    <td class="MFLPaceSpread" id="mflBoxSpread_' + mflBox_matchups[t].roadId + "_" + t + '"></td>',
			a += '    <td class="MFLPaceScore" id="mflBoxPace_' + mflBox_matchups[t].roadId + "_" + t + '"></td>',
			a += '    <td class="MFLLiveScore" id="mflBoxScore_' + mflBox_matchups[t].roadId + "_" + t + '" style="text-align:right"></td>',
			a += '    <td class="MFLWinMarker" id="mflBoxWin_' + mflBox_matchups[t].roadId + "_" + t + '"></td>',
			mflBoxCheckLive() && mflBoxDetails && (a += '    <td class="MFLExtras MFLExtrasPMR MFLExtras_' + mflBox_matchups[t].roadId + "_" + mflBox_matchups[t].homeId + '" id="mflBoxPMR_' + mflBox_matchups[t].roadId + "_" + t + '"></td>', a += '    <td class="MFLExtras MFLExtrasYTP MFLExtras_' + mflBox_matchups[t].roadId + "_" + mflBox_matchups[t].homeId + '" id="mflBoxYTP_' + mflBox_matchups[t].roadId + "_" + t + '"></td>', a += '    <td class="MFLExtras MFLExtrasCP MFLExtras_' + mflBox_matchups[t].roadId + "_" + mflBox_matchups[t].homeId + '" id="mflBoxCP_' + mflBox_matchups[t].roadId + "_" + t + '"></td>'),
			a += "   </tr>",
			mflBoxActiveWeek <= completedWeek || mflBoxActiveWeek === liveScoringWeek ? a += '   <tr class="MFLBoxPlayerDetailsTR" onclick="doMFLBoxPlayerDetails(\'' + mflBox_matchups[t].homeId + "'," + t + ')">' : a += "   <tr>",
			a += '    <td class="MFLLiveTeam">' + getMFLBoxNameIcon(mflBox_matchups[t].homeId) + "</td>",
			a += '    <td class="MFLPaceSpread" id="mflBoxSpread_' + mflBox_matchups[t].homeId + "_" + t + '"></td>',
			a += '    <td class="MFLPaceScore" id="mflBoxPace_' + mflBox_matchups[t].homeId + "_" + t + '"></td>',
			a += '    <td class="MFLLiveScore" id="mflBoxScore_' + mflBox_matchups[t].homeId + "_" + t + '" style="text-align:right"></td>',
			a += '    <td class="MFLWinMarker" id="mflBoxWin_' + mflBox_matchups[t].homeId + "_" + t + '"></td>',
			mflBoxCheckLive() && mflBoxDetails && (a += '    <td class="MFLExtras MFLExtrasPMR MFLExtras_' + mflBox_matchups[t].roadId + "_" + mflBox_matchups[t].homeId + '" id="mflBoxPMR_' + mflBox_matchups[t].homeId + "_" + t + '"></td>', a += '    <td class="MFLExtras MFLExtrasYTP MFLExtras_' + mflBox_matchups[t].roadId + "_" + mflBox_matchups[t].homeId + '" id="mflBoxYTP_' + mflBox_matchups[t].homeId + "_" + t + '"></td>', a += '    <td class="MFLExtras MFLExtrasCP MFLExtras_' + mflBox_matchups[t].roadId + "_" + mflBox_matchups[t].homeId + '" id="mflBoxCP_' + mflBox_matchups[t].homeId + "_" + t + '"></td>'),
			a += "   </tr>",
			a += "   <tr>",
			a += '    <td colspan="5" class="MFLLiveClock" style="position:relative" id="mflBoxClock_' + mflBox_matchups[t].roadId + "_" + mflBox_matchups[t].homeId + '"></td>',
			mflBoxCheckLive() && mflBoxDetails && (a += '    <td class="MFLExtras MFLExtrasPMR MFLExtras_' + mflBox_matchups[t].roadId + "_" + mflBox_matchups[t].homeId + '" title="Player Minutes Remaining">PMR</td>', a += '    <td class="MFLExtras MFLExtrasYTP MFLExtras_' + mflBox_matchups[t].roadId + "_" + mflBox_matchups[t].homeId + '" title="Players Yet To Play">YTP</td>', a += '    <td class="MFLExtras MFLExtrasCP MFLExtras_' + mflBox_matchups[t].roadId + "_" + mflBox_matchups[t].homeId + '" title="Players Currently Playing">CP</td>'),
			a += "   </tr>",
			a += "  </tbody>",
			a += " </table>",
			a += "</td>";
		a += "</tr></tbody></table>"
	} else {
		if (a += '<table class="MFLGameLinks"><tbody><tr>', void 0 !== mflBoxJSON_nflSchedule.matchup.length)
			for (var r = 0; r < 3; r++)
				for (t = 0; t < mflBoxJSON_nflSchedule.matchup.length; t++) {
					var o = parseInt(mflBoxJSON_nflSchedule.matchup[t].gameSecondsRemaining);
					(0 === r && o > 0 && o < 3600 || 1 === r && 3600 === o || 2 === r && 0 === o) && (a += '<td class="matchupLolite">', a += ' <table class="MFLGameTable matchupLolite" id="mflBoxMatchup_' + t + '">', a += "  <tbody>", a += "   <tr>", a += '    <td class="MFLLiveTeam">' + getMFLBoxNFLIcon(mflBoxJSON_nflSchedule.matchup[t].team[0].id) + ' <span class="MFLLiveAbbrev" style="vertical-align:middle">' + mflBoxJSON_nflSchedule.matchup[t].team[0].id + "</span></td>", a += '    <td class="MFLPaceSpread" id="mflBoxSpread_' + mflBoxJSON_nflSchedule.matchup[t].team[0].id + "_" + t + '"></td>', a += '    <td class="MFLPaceScore" id="mflBoxPace_' + mflBoxJSON_nflSchedule.matchup[t].team[0].id + "_" + t + '"></td>', a += '    <td class="MFLLiveScore" id="mflBoxScore_' + mflBoxJSON_nflSchedule.matchup[t].team[0].id + "_" + t + '" style="text-align:right"></td>', a += '    <td class="MFLWinMarker" id="mflBoxWin_' + mflBoxJSON_nflSchedule.matchup[t].team[0].id + "_" + t + '"></td>', a += "   </tr>", a += "   <tr>", a += '    <td class="MFLLiveTeam">' + getMFLBoxNFLIcon(mflBoxJSON_nflSchedule.matchup[t].team[1].id) + ' <span class="MFLLiveAbbrev" style="vertical-align:middle">' + mflBoxJSON_nflSchedule.matchup[t].team[1].id + "</span></td>", a += '    <td class="MFLPaceSpread" id="mflBoxSpread_' + mflBoxJSON_nflSchedule.matchup[t].team[1].id + "_" + t + '"></td>', a += '    <td class="MFLPaceScore" id="mflBoxPace_' + mflBoxJSON_nflSchedule.matchup[t].team[1].id + "_" + t + '"></td>', a += '    <td class="MFLLiveScore" id="mflBoxScore_' + mflBoxJSON_nflSchedule.matchup[t].team[1].id + "_" + t + '" style="text-align:right"></td>', a += '    <td class="MFLWinMarker" id="mflBoxWin_' + mflBoxJSON_nflSchedule.matchup[t].team[1].id + "_" + t + '"></td>', a += "   </tr>", a += "   <tr>", a += '    <td colspan="5" class="MFLLiveClock" id="mflBoxClock_' + mflBoxJSON_nflSchedule.matchup[t].team[0].id + "_" + mflBoxJSON_nflSchedule.matchup[t].team[1].id + '"></td>', a += "   </tr>", a += "  </tbody>", a += " </table>", a += "</td>")
				}
		a += "</tr></tbody></table>"
	}
	jQuery("#MFLBoxMatchups").html(a),
	mflBoxMFLSchedule && "" !== mflBoxPlayerDetailsFid.fid && doMFLBoxPlayerDetails(mflBoxPlayerDetailsFid.fid, mflBoxPlayerDetailsFid.boxid),
	e && jQuery("#MFLBoxMatchups").scrollLeft(0),
	mflBoxCheckLive() ? (mflBoxApplyLiveSettings(), mflBoxTimer = setTimeout("doMFLBoxUpdate(true,false)", 9e4)) : mflBoxCheckCompletedWeek() ? (mflBoxApplyCompletedSettings(), mflBoxProjectedScoresHistorical()) : mflBoxApplyUncompletedSettings()
}
if (doMFLBox && jQuery.when(doMFLBoxLeague(!1), doMFLBoxStandings(!1), doMFLBoxFantasyWeek(!1), doMFLBoxNFLWeek(!1)).done(function(e, a) {
	jQuery.when(doMFLBoxArrays(), doMFLBoxProjectedScores(!1), doMFLBoxLiveStats()).done(function(e, a) {
		doMFLBoxArrows(),
		doMFLBoxHTML(!0)
	})
}), void 0 === lu_mobileFlipOnAddRemove)
	var lu_mobileFlipOnAddRemove = !1;
if (void 0 === lu_includeValidation)
	var lu_includeValidation = !0;
if (void 0 === lu_validTiebreakers)
	var lu_validTiebreakers = "";
if (void 0 === lu_addOptionalStarters)
	var lu_addOptionalStarters = !0;
if (void 0 === lu_useDefaultAsPrimary)
	var lu_useDefaultAsPrimary = !1;
var lu_startWeek,
	lu_endWeek,
	lu_tiebreakerOptions,
	starters = [[0, 0, 0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
	positions = ["", "coach", "qb", "tmqb", "tmrb", "rb", "fb", "wr", "tmwr", "te", "tmte", "wr_te", "rb_wr_te", "kr", "pk", "tmpk", "pn", "tmpn", "off", "dt_de", "dt", "de", "tmdl", "lb", "tmlb", "cb_s", "cb", "s", "tmdb", "def", "st"],
	lu_startersKey = {
		Coach: 1,
		QB: 2,
		TMQB: 3,
		TMRB: 4,
		RB: 5,
		FB: 6,
		WR: 7,
		TMWR: 8,
		TE: 9,
		TMTE: 10,
		"WR+TE": 11,
		"RB+WR+TE": 12,
		KR: 13,
		PK: 14,
		TMPK: 15,
		PN: 16,
		TMPN: 17,
		Off: 18,
		"DT+DE": 19,
		DT: 20,
		DE: 21,
		TMDL: 22,
		LB: 23,
		TMLB: 24,
		"CB+S": 25,
		CB: 26,
		S: 27,
		TMDB: 28,
		Def: 29,
		ST: 30
	},
	lu_useTeamLogo = {
		Coach: !0,
		QB: !1,
		TMQB: !0,
		TMRB: !0,
		RB: !1,
		FB: !1,
		WR: !1,
		TMWR: !0,
		TE: !1,
		TMTE: !0,
		KR: !1,
		PK: !1,
		TMPK: !0,
		PN: !1,
		TMPN: !0,
		Off: !0,
		DT: !1,
		DE: !1,
		TMDL: !0,
		LB: !1,
		TMLB: !0,
		CB: !1,
		S: !1,
		TMDB: !0,
		Def: !0,
		ST: !0
	},
	lu_logoPath = "//www.nitrografixx.com/MFL-Popups/NFL-custom-logos-tall/",
	lu_partialLineupsAllowed = !1,
	lu_validFormations = new Array,
	lu_disablePosChange = !1,
	lu_mobileStarters = !0,
	lu_tiebreakerCount = 0,
	lu_isTiebreakerNonstarter = !1,
	lu_setupComplete = !1;
function luhtml() {
	for (jQuery("#body_lineup:has(span.reportnavigation:contains(SUBMITTED))").addClass("custom_submission"), jQuery("#lineup-form .mobile-wrap").removeAttr("style").removeClass("mobile-wrap"), i = 1; i < positions.length; i++)
		jQuery("#lineup #lineup-form .report tr").has(".position_" + positions[i]).addClass(positions[i] + "_row playerrow").removeClass("newposition"),
		starters[11][1] > 0 && (jQuery("#lineup #lineup-form .report tr").removeClass("wr_row wr_bench te_row te_bench"), jQuery("#lineup #lineup-form .report tr").has(".position_wr, .position_te").addClass("wr_te_row")),
		starters[12][1] > 0 && (jQuery("#lineup #lineup-form .report tr").removeClass("rb_row rb_bench wr_row wr_bench te_row te_bench"), jQuery("#lineup #lineup-form .report tr").has(".position_rb, .position_wr, .position_te").addClass("rb_wr_te_row")),
		starters[19][1] > 0 && (jQuery("#lineup #lineup-form .report tr").removeClass("dt_row dt_bench de_row de_bench"), jQuery("#lineup #lineup-form .report tr").has(".position_dt, .position_de").addClass("dt_de_row")),
		starters[25][1] > 0 && (jQuery("#lineup #lineup-form .report tr").removeClass("cb_row cb_bench s_row s_bench"), jQuery("#lineup #lineup-form .report tr").has(".position_cb, .position_s").addClass("cb_s_row"));
	var e = "";
	e += '<div id="caption-fixed-wrapper">',
	e += '<table align="center" cellspacing="1" id="starter-caption-fixed" class="report"></table>',
	e += '<table align="center" cellspacing="1" id="bench-caption-fixed" class="report"></table>',
	e += "</div>";
	var a = '<tr class="theader"><td class="player" colspan="2" style="text-indent:5px;">Player Name / Opponent</td><td class="rank" ><span class="opp-rank">Opp Rank</span><span class="rush-rank">Pass</span><span class="pass-rank">Rush</span></td><td class="ytd-pts" >YTD Pts</td><td class="avg-pts">Avg Pts</td></tr>';
	for (e += '<table align="center" cellspacing="1" class="report mobile-table-show" id="startertable">', e += '<caption><span>Starters</span><span id="show-bench" style="display:none;padding-right:10px" class="mobile-caption-link" onclick="doMobileView(false)">bench<i style="padding-left:3px;" class="fa fa-caret-right" aria-hidden="true" style="padding-left:2px"></i></span><span id="clear-starters" onclick="clearAllStarters()" title="Clear Starting Lineup"><i style="padding-left:3px;padding-right:10px" class="fa fa-eraser" aria-hidden="true"></i><span style="visibility:hidden;padding:0;text-indent:0">.</span></span><span style="padding:0;text-indent:0" id="reset-starters" onclick="resetAllStarters()" title="Reset Starting Lineup"><i class="fa fa-refresh" aria-hidden="true"></i><span style="visibility:hidden;padding:0;text-indent:0">.</span></span></caption>', e += '<tr class="sheader"><th colspan="8">Select ' + starters[0][1] + ' Starters <span class="offstartern"></span> </th></tr>', e += "" + a, i = 1; i < 19; i++)
		starters[i][1] > 0 && (e += '<tr class="' + positions[i] + '_header"><td style="text-align:center" class="posheader" colspan="8">Select ' + starters[i][0] + '<span class="max"> -  ' + starters[i][1] + '</span><span class="postitle"> ' + positions[i] + ' </span><span class="selected"></span> <span class="warning"></span></td></tr>');
	for (i = 19; i < positions.length; i++)
		starters[i][1] > 0 && (e += '<tr class="' + positions[i] + '_header"><td style="text-align:center" class="posheader" colspan="8">Select ' + starters[i][0] + '<span class="max"> -  ' + starters[i][1] + '</span><span class="postitle"> ' + positions[i] + ' </span><span class="selected"></span> <span class="warning"></span></td></tr>');
	for (e += "</table>", e += '<table align="center" cellspacing="1" class="report mobile-table-hide" id="benchtable">', e += '<caption><span>Bench</span><span id="show-starter" style="display:none;padding-right:5px" class="mobile-caption-link" onclick="doMobileView(true)">starters<i class="fa fa-caret-right" aria-hidden="true" style="padding-left:2px"></i></span></caption>', e += '<tr class="sheader"><th colspan="8">Select ' + starters[0][1] + ' Starters <span class="offstartern"></span> </th></tr>', e += "" + a, i = 1; i < 19; i++)
		starters[i][1] > 0 && (e += '<tr class="' + positions[i] + '_header"><td style="text-align:center" class="posheader" colspan="8">Select ' + starters[i][0] + '<span class="max"> -  ' + starters[i][1] + '</span><span class="postitle"> ' + positions[i] + ' </span><span class="selected"></span> <span class="warning"></span></td></tr>');
	for (i = 19; i < positions.length; i++)
		starters[i][1] > 0 && (e += '<tr class="' + positions[i] + '_header"><td style="text-align:center" class="posheader" colspan="8">Select ' + starters[i][0] + '<span class="max"> -  ' + starters[i][1] + '</span><span class="postitle"> ' + positions[i] + ' </span><span class="selected"></span> <span class="warning"></span></td></tr>');
	return e += "</table>"
}
function switchfixedcaption() {
	jQuery("#benchtable").is(".mobile-table-show") && $("#starter-caption-fixed").is(":visible") && ($("#starter-caption-fixed").hide(), $("#bench-caption-fixed").show()),
	jQuery("#startertable").is(".mobile-table-show") && $("#bench-caption-fixed").is(":visible") && ($("#bench-caption-fixed").hide(), $("#starter-caption-fixed").show())
}
function trtitles() {
	jQuery("#lineup #startertable tr.playerrow").prop("title", "Move To Bench"),
	jQuery("#lineup #benchtable tr.playerrow").prop("title", "Move To Starting Lineup"),
	jQuery("#lineup #startertable tr.playerrow a,#lineup #benchtable tr.playerrow a").prop("title", "Open Player News"),
	jQuery("#lineup #startertable .row_empty ").prop("title", "Add Starter"),
	jQuery("#lineup #startertable tr.playerrow.disabled-row,#lineup #benchtable tr.playerrow.disabled-row").prop("title", "Player Locked"),
	jQuery("#lineup #startertable tr.playerrow.commish-notice,#lineup #benchtable tr.playerrow.commish-notice").prop("title", "CAUTION! Game has started - owners original setting")
}
function checkDisabled() {
	jQuery("#lineup #lineup-form .report tr").each(function() {
		jQuery(this).find("input[type=checkbox]").is(":disabled") && jQuery(this).addClass("disabled-row").unbind("click")
	})
}
function removeWeather() {
	jQuery("#lineup #lineup-form a[href*='weather']").remove(),
	jQuery("#lineup #lineup-form td:contains('()')").each(function() {
		jQuery(this).html(jQuery(this).html().split("()").join(""))
	}),
	jQuery("#lineup #lineup-form td:contains('(Dome)')").each(function() {
		jQuery(this).html(jQuery(this).html().split("(Dome)").join(""))
	})
}
function removeUnwantedLinks() {
	jQuery("#lineup #lineup-form td.points.rush-rank").each(function() {
		jQuery(this).html(jQuery(this).find("a").text())
	}),
	jQuery("#lineup #lineup-form td.points.pass-rank").each(function() {
		jQuery(this).html(jQuery(this).find("a").text())
	}),
	jQuery("#lineup #lineup-form td.points.ytd-pts").each(function() {
		jQuery(this).html(jQuery(this).find("a").text())
	})
}
function setOriginalStarters() {
	jQuery("#lineup #lineup-form .report tr").each(function() {
		void 0 !== jQuery(this).find("input[type=checkbox]").attr("checked") && jQuery(this).addClass("original-starter")
	})
}
function doMobileView(e) {
	lu_mobileStarters = e,
	e ? (jQuery("#startertable").addClass("mobile-table-show").removeClass("mobile-table-hide"), jQuery("#benchtable").addClass("mobile-table-hide").removeClass("mobile-table-show")) : (jQuery("#startertable").addClass("mobile-table-hide").removeClass("mobile-table-show"), jQuery("#benchtable").addClass("mobile-table-show").removeClass("mobile-table-hide"), switchfixedcaption())
}
function setupLu() {
	for (jQuery("#lineup #lineup-form .report").before(luhtml()), jQuery("#startertable, #benchtable").show(), jQuery("#lineup #lineup-form .report input").hide(), i = 1; i < positions.length; i++)
		jQuery("." + positions[i] + "_row input").on("change", posChange);
	for (i = 1; i < positions.length; i++)
		starters[i][0] === starters[i][1] && jQuery("." + positions[i] + "_header .max").remove(),
		jQuery("." + positions[i] + "_row").on("click", function() {
			$(this).find(":checkbox").is(":checked") ? $(this).find(":checkbox").prop("checked", !1) : $(this).find(":checkbox").prop("checked", !0),
			posChange()
		});
	starters[11][1] > 0 && jQuery("#lineup #lineup-form .report .wr_te_header .postitle").html(" wr te "),
	starters[12][1] > 0 && jQuery("#lineup #lineup-form .report .rb_wr_te_header .postitle").html(" rb wr te "),
	starters[19][1] > 0 && jQuery("#lineup #lineup-form .report .dt_de_header .postitle").html(" dt de "),
	starters[25][1] > 0 && jQuery("#lineup #lineup-form .report .cb_s_header .postitle").html(" cb s "),
	checkDisabled(),
	removeWeather(),
	removeUnwantedLinks(),
	setOriginalStarters(),
	posChange(),
	lu_setupComplete = !0
}
function posChange() {
	if (lu_disablePosChange)
		return !1;
	for (i = 1; i < positions.length; i++) {
		jQuery("#startertable ." + positions[i] + "_required").remove(),
		jQuery("#lineup #lineup-form .report tr").removeClass(positions[i] + "_starter " + positions[i] + "_bench"),
		jQuery("." + positions[i] + "_row").has("input:checked").addClass(positions[i] + "_starter"),
		jQuery("." + positions[i] + "_row").has("input:not(:checked)").not("." + positions[i] + "_starter").addClass(positions[i] + "_bench").removeClass("offstarter defstarter idpstarter"),
		jQuery("." + positions[i] + "_starter").insertAfter("#startertable ." + positions[i] + "_header"),
		jQuery("." + positions[i] + "_bench").insertAfter("#benchtable ." + positions[i] + "_header");
		var e = jQuery("#lineup #lineup-form #startertable ." + positions[i] + "_row").length,
			a = starters[i][0],
			t = a - e;
		if (t > 0) {
			if (0 === e)
				var r = jQuery("#startertable ." + positions[i] + "_header");
			else
				r = jQuery("#startertable ." + positions[i] + "_row:eq(" + (e - 1) + ")");
			for (var o = "", s = 0; s < t; s++)
				o += '<tr class="' + positions[i] + '_required row_empty"><td class="warning mobile-link" style="text-align:center" onclick="doMobileView(false)" colspan="8">Required Minimum</td></tr>';
			r.after(o)
		}
		if (lu_addOptionalStarters) {
			jQuery("." + positions[i] + "_optional").remove();
			var n = starters[i][1];
			if (e >= a && e < n) {
				if (0 === e)
					r = jQuery("#startertable ." + positions[i] + "_header");
				else
					r = jQuery("#startertable ." + positions[i] + "_row:eq(" + (e - 1) + ")");
				o = '<tr class="' + positions[i] + '_optional row_empty"><td class="warning mobile-link" style="text-align:center" onclick="doMobileView(false)" colspan="8">Optional</td></tr>';
				r.after(o)
			}
		}
		jQuery("#lineup #lineup-form .report tr").removeClass("oddtablerow"),
		jQuery("#lineup #lineup-form .report tr").removeClass("eventablerow"),
		jQuery("#lineup #lineup-form .report tr.playerrow:nth-child(odd)").addClass("oddtablerow"),
		jQuery("#lineup #lineup-form .report tr.playerrow:nth-child(even)").addClass("eventablerow"),
		jQuery("#lineup #lineup-form .report .sheader th").show(),
		i < 19 ? jQuery("." + positions[i] + "_row").has("input:checked").addClass("offstarter") : (jQuery("." + positions[i] + "_row").has("input:checked").addClass("defstarter"), i < 29 && jQuery("." + positions[i] + "_row").has("input:checked").addClass("idpstarter"));
		var l = jQuery("#lineup #lineup-form #startertable ." + positions[i] + "_row").length,
			p = jQuery(".offstarter,.defstarter").length;
		jQuery("#lineup #lineup-form ." + positions[i] + "_header .selected").html("(" + l + " Selected)"),
		jQuery("#lineup #lineup-form .offstartern").html(p + "/" + starters[0][1]),
		0 === l ? 0 === jQuery("#lineup #lineup-form #startertable ." + positions[i] + "_required").length && (jQuery("#startertable ." + positions[i] + "_empty").remove(), jQuery("#startertable ." + positions[i] + "_header").after('<tr class="' + positions[i] + '_empty row_empty"><td class="warning mobile-link" style="text-align:center" onclick="doMobileView(false)" colspan="8">This Position Not Required</td></tr>')) : jQuery("." + positions[i] + "_empty").hide(),
		l > starters[i][1] ? (jQuery("#lineup #lineup-form .report ." + positions[i] + "_header .warning").html("Player Limit Exceeded!"), jQuery("#lineup #lineup-form .report ." + positions[i] + "_header").removeClass("toomany notenough rightamount"), jQuery("#lineup #lineup-form .report ." + positions[i] + "_header").addClass("toomany")) : l < starters[i][0] ? (jQuery("#lineup #lineup-form .report ." + positions[i] + "_header .warning").html("!"), jQuery("#lineup #lineup-form .report ." + positions[i] + "_header").removeClass("toomany notenough rightamount"), jQuery("#lineup #lineup-form .report ." + positions[i] + "_header").addClass("notenough")) : (jQuery("#lineup #lineup-form .report ." + positions[i] + "_header .warning").html(""), jQuery("#lineup #lineup-form .report ." + positions[i] + "_header").removeClass("toomany notenough rightamount"), jQuery("#lineup #lineup-form .report ." + positions[i] + "_header").addClass("rightamount"))
	}
	lu_setupComplete && lu_mobileFlipOnAddRemove && doMobileView(!lu_mobileStarters),
	lu_includeValidation && lineupValidation(!0),
	switchfixedcaption(),
	trtitles()
}
function lineupValidation(e) {
	var a = "",
		t = "";
	if (lu_tiebreakerCount > 0 && (lu_isTiebreakerNonstarter || lu_validTiebreakers.length > 0)) {
		if (e) {
			var r = "";
			jQuery("#lineup #lineup-form #startertable tr.playerrow").each(function() {
				r += jQuery(this).find("input").attr("value") + ","
			}),
			jQuery("#optional-message-table select").html(lu_tiebreakerOptions.html()),
			jQuery("#optional-message-table option").each(function() {
				-1 !== r.indexOf(jQuery(this).val()) && jQuery(this).remove(),
				lu_validTiebreakers.length > 0 && -1 === lu_validTiebreakers.indexOf(jQuery(this).text().split(" ")[jQuery(this).text().split(" ").length - 1]) && jQuery(this).remove()
			})
		}
		if (lu_tiebreakerCount > 1) {
			var o = jQuery("#select-tiebreakers :selected").length;
			jQuery("#tiebreakers-selected").html(o),
			o > lu_tiebreakerCount && (a += lu_tiebreakerCount + " Max Tiebreakers Allowed (" + o + " selected); "),
			o < lu_tiebreakerCount && (t += lu_tiebreakerCount + " Max Tiebreakers Allowed (" + o + " selected); ")
		}
	}
	lu_partialLineupsAllowed ? (jQuery(".offstarter,.defstarter").length > starters[0][1] && (a += starters[0][1] + " Max Starters Required (" + jQuery(".offstarter,.defstarter").length + " selected); "), jQuery(".offstarter,.defstarter").length < starters[0][1] && (t += starters[0][1] + " Max Starters Allowed (" + jQuery(".offstarter,.defstarter").length + " selected); "), jQuery(".offstarter,.defstarter").length < starters[0][0] && (a += starters[0][0] + " Min Starters Required (" + jQuery(".offstarter,.defstarter").length + " selected); "), 0 !== starters[0][3] && (jQuery(".idpstarter").length > starters[0][3] && (a += starters[0][3] + " Max IDP Starters Required (" + jQuery(".idpstarter").length + " selected); "), jQuery(".idpstarter").length < starters[0][3] && (t += starters[0][3] + " Max IDP Starters Allowed (" + jQuery(".idpstarter").length + " selected); "), jQuery(".idpstarter").length < starters[0][2] && (a += starters[0][2] + " Min IDP Starters Required (" + jQuery(".idpstarter").length + " selected); "))) : (jQuery(".offstarter,.defstarter").length !== starters[0][1] && (a += starters[0][1] + " Starters Required (" + jQuery(".offstarter,.defstarter").length + " selected); "), jQuery(".idpstarter").length !== starters[0][3] && 0 !== starters[0][3] && (a += starters[0][3] + " IDP Starters Required (" + jQuery(".idpstarter").length + " selected); "));
	for (var i = 1; i < positions.length; i++) {
		var s = jQuery("#lineup #lineup-form #startertable ." + positions[i] + "_row").length;
		lu_partialLineupsAllowed ? (s > starters[i][1] && (a += starters[i][1] + " Max " + positions[i].toUpperCase().replace(/_/g, "+") + " Required (" + s + " selected); "), s < starters[i][0] && (t += starters[i][0] + " Min " + positions[i].toUpperCase().replace(/_/g, "+") + " Required (" + s + " selected); ")) : s >= starters[i][0] && s <= starters[i][1] || (starters[i][0] === starters[i][1] ? a += starters[i][1] + " " + positions[i].toUpperCase().replace(/_/g, "+") + " Required (" + s + " selected); " : a += starters[i][0] + "-" + starters[i][1] + " " + positions[i].toUpperCase().replace(/_/g, "+") + " Required (" + s + " selected); ")
	}
	if ("" === a && "" === t && lu_validFormations.length > 0) {
		var n = !1,
			l = jQuery("#lineup #lineup-form #startertable .position_rb").length,
			p = jQuery("#lineup #lineup-form #startertable .position_wr").length,
			u = jQuery("#lineup #lineup-form #startertable .position_te").length;
		for (i = 0; i < lu_validFormations.length; i++)
			if (lu_validFormations[i].RB === l && lu_validFormations[i].WR === p && lu_validFormations[i].TE === u) {
				n = !0;
				break
			}
		n || (a = "(" + l + "RB - " + p + "WR - " + u + "TE) Formation is Invalid!")
	}
	0 === jQuery(".offstarter,.defstarter").length ? (jQuery("#submit-lineup-form").prop("disabled", !1).removeAttr("title").removeClass("buttonDisabled").attr("value", "Unsubmit Lineup"), jQuery("#submit-lineup-form").parent().removeClass("buttonDisabledContainer")) : "" === a && "" !== t ? (jQuery("#submit-lineup-form").prop("disabled", !1).attr("title", t).removeClass("buttonDisabled").attr("value", "Submit Partial Lineup"), jQuery("#submit-lineup-form").parent().removeClass("buttonDisabledContainer")) : "" === a ? (jQuery("#submit-lineup-form").prop("disabled", !1).removeAttr("title").removeClass("buttonDisabled").attr("value", "Submit Lineup"), jQuery("#submit-lineup-form").parent().removeClass("buttonDisabledContainer")) : (jQuery("#submit-lineup-form").attr("disabled", "disabled").attr("title", a).addClass("buttonDisabled").attr("value", "Submit Lineup"), jQuery("#submit-lineup-form").parent().addClass("buttonDisabledContainer"))
}
function doLineupLeagueAPI() {
	var e = baseURLDynamic + "/" + year + "/export?TYPE=league&L=" + league_id + "&JSON=1";
	jQuery.ajax({
		url: e,
		success: function(e) {
			try {
				var a = e.league.starters
			} catch (t) {
				a = e.league.rosterLimits
			}
			lu_startWeek = parseInt(e.league.startWeek),
			lu_endWeek = parseInt(e.league.endWeek),
			"any" !== e.league.tiebreaker && "nonstarter" !== e.league.tiebreaker || ("nonstarter" === e.league.tiebreaker && (lu_isTiebreakerNonstarter = !0), lu_tiebreakerCount = parseInt(e.league.tiebreakerCount), lu_tiebreakerOptions = jQuery("#optional-message-table select").clone());
			var t = parseInt(a.count),
				r = parseInt(a.count.split("-")[a.count.split("-").length - 1]),
				o = parseInt(a.idp_starters),
				i = parseInt(a.idp_starters.split("-")[a.idp_starters.split("-").length - 1]);
			isNaN(t) && (t = 0),
			isNaN(r) && (r = 0),
			isNaN(o) && (o = 0),
			isNaN(i) && (i = 0),
			starters[0][0] = t,
			starters[0][1] = r,
			starters[0][2] = o,
			starters[0][3] = i;
			for (var s = 0; s < a.position.length; s++) {
				var n = a.position[s].name,
					l = a.position[s].limit.split("-"),
					p = lu_startersKey[n];
				1 === l.length ? (starters[p][0] = parseInt(l[0]), starters[p][1] = parseInt(l[0])) : (starters[p][0] = parseInt(l[0]), starters[p][1] = parseInt(l[1]))
			}
		},
		async: !1
	})
}
function doRulesScrape() {
	var e = baseURLDynamic + "/" + year + "/options?L=" + league_id + "&O=26";
	jQuery.ajax({
		url: e,
		success: function(e) {
			if (lu_partialLineupsAllowed = "NO" !== jQuery(e).find("td.inputlabel:contains(Partial Lineups)").next().text(), jQuery(e).find("th:contains(Formations Setup)").length > 0) {
				var a = jQuery(e).find("th:contains(Formations Setup)").closest("table");
				jQuery(a).find("tr").each(function() {
					var e = parseInt(jQuery(this).html().substring(jQuery(this).html().indexOf("RB:") + 3, jQuery(this).html().length)),
						a = parseInt(jQuery(this).html().substring(jQuery(this).html().indexOf("WR:") + 3, jQuery(this).html().length)),
						t = parseInt(jQuery(this).html().substring(jQuery(this).html().indexOf("TE:") + 3, jQuery(this).html().length));
					isNaN(e) && (e = 0),
					isNaN(a) && (a = 0),
					isNaN(t) && (t = 0),
					e + a + t > 0 && lu_validFormations.push({
						RB: e,
						WR: a,
						TE: t
					})
				})
			}
		},
		async: !1
	})
}
function redirectSubmissionPage(e, a, t) {
	var r = window.location.href;
	lu_useDefaultAsPrimary ? localStorage.setItem("lu_useDefault_" + league_id + "_" + franchise_id, e) : localStorage.setItem("lu_useDefault_" + league_id + "_" + franchise_id, !e),
	void 0 !== a && (-1 === r.indexOf("&W=") ? r += "&W=" + a : r = r.replace("&W=" + t, "&W=" + a)),
	window.location.href = r
}
function clearAllStarters() {
	lu_disablePosChange = !0,
	jQuery('#startertable td.player input:not([type=hidden], [disabled="disabled"])').prop("checked", !1),
	lu_disablePosChange = !1,
	posChange(),
	lu_setupComplete && lu_mobileFlipOnAddRemove && doMobileView(!lu_mobileStarters),
	switchfixedcaption(),
	jQuery("tr.playerrow:has(td.player:contains('*'))").addClass("disabled-row commish-notice")
}
function resetAllStarters() {
	clearAllStarters(),
	lu_disablePosChange = !0,
	jQuery("#benchtable tr.original-starter td.player input[type=checkbox]").prop("checked", !0),
	lu_disablePosChange = !1,
	posChange(),
	lu_setupComplete && lu_mobileFlipOnAddRemove && doMobileView(!lu_mobileStarters),
	switchfixedcaption(),
	jQuery("tr.playerrow:has(td.player:contains('*'))").addClass("disabled-row commish-notice")
}
function addDropNav() {
	var e = "";
	jQuery(".reportnavigation").each(function() {
		if (jQuery(this).find("span.currentweek").length > 0) {
			var a = parseInt(jQuery(this).find("span.currentweek").text());
			e = "<div id='lineup_dropdown' style='text-align:center'>",
			e += "<span class='reportnavigationheader'>Submit Lineup For Week: </span>",
			lu_useDefaultAsPrimary && "false" === localStorage.getItem("lu_useDefault_" + league_id + "_" + franchise_id) || !lu_useDefaultAsPrimary && "true" === localStorage.getItem("lu_useDefault_" + league_id + "_" + franchise_id) ? e += "<select id='lineup_dropdown_select' onchange='redirectSubmissionPage(false,jQuery(this).val()," + a + ")'>" : e += "<select id='lineup_dropdown_select' onchange='redirectSubmissionPage(true,jQuery(this).val()," + a + ")'>";
			for (var t = lu_startWeek; t <= lu_endWeek; t++) {
				if (t === a)
					var r = " selected='selected'";
				else
					r = "";
				e += "<option value='" + t + "'" + r + ">" + t + "</option>"
			}
			e += "</select>",
			e += "</div>"
		}
	}),
	jQuery(".reportnavigation:eq(0)").after(e)
}
function addTdClasses() {
	var e = new Array;
	if (0 === completedWeek)
		var a = 1;
	else
		a = 2;
	jQuery("#lineup #lineup-form .report tr:eq(" + (a - 1) + ") th").each(function() {
		var a = jQuery(this).text().toLowerCase().replace(/ /g, "-");
		"rush" !== a && "pass" !== a || (a += "-rank"),
		-1 !== a.indexOf("select-a") && (a = "select-total-starters"),
		-1 !== a.indexOf("week-") && (a = "weekly-opp"),
		jQuery(this).addClass(a),
		e.push(a),
		jQuery("#body_lineup .report td:empty,#body_lineup .report td a:empty").append("0")
	});
	var t = 0;
	jQuery("#lineup #lineup-form .report tr").each(function() {
		if ((2 === a && 0 !== t && 1 !== t || 1 === a && 0 !== t) && t !== jQuery("#lineup #lineup-form .report tr").length - 1) {
			var r = 0;
			jQuery(this).find("td").each(function() {
				jQuery(this).addClass(e[r + 1]),
				r++
			})
		}
		t++
	})
}
function hs_caption_mobile() {
	jQuery("#show-starter").on("click", function() {
		$("#bench-caption-fixed").hide(),
		$("#starter-caption-fixed").show()
	}),
	jQuery("#show-bench").on("click", function() {
		$("#bench-caption-fixed").show(),
		$("#starter-caption-fixed").hide()
	})
}
jQuery("head").append('<style>#lineup input[name="SELECT"] + p{display:none}#body_lineup .mobile-wrap{visibility:hidden}</style>'),
document.getElementById("lineup") && (void 0 === localStorage.getItem("lu_useDefault_" + league_id + "_" + franchise_id) && localStorage.setItem("lu_useDefault_" + league_id + "_" + franchise_id, "true"), (lu_useDefaultAsPrimary && "false" === localStorage.getItem("lu_useDefault_" + league_id + "_" + franchise_id) || !lu_useDefaultAsPrimary && "true" === localStorage.getItem("lu_useDefault_" + league_id + "_" + franchise_id)) && jQuery("head").append('<style>#body_lineup.custom_submission th{text-align:left}#lineup #lineup-form .buttonDisabled{opacity:0.50;cursor:default!important}#lineup #lineup-form .buttonDisabled{opacity:0.50;cursor:default!important}#lineup #lineup-form .buttonDisabledContainer:before{content:"\\f00d"!important;}#lineup form{display:none}#benchtable + .report tr, #benchtable + .report tr + tr {display:none}#benchtable + .report tr[class=""] {display:table-row}#benchtable + .report textarea,#benchtable + .report select {width:100%}#benchtable + .report select {max-width:200px}#caption-fixed-wrapper{display:none}#show-starter,#show-bench,#clear-starters,#reset-starters{float:right;cursor:pointer;text-indent:0;padding:0;background:none}#starter-caption-fixed,#bench-caption-fixed{border-spacing:0;position:fixed;top:0;left:0;display:none;z-index:100;border:0;padding:0px}#starter-caption-fixed caption,#bench-caption-fixed caption{margin:0}#starter-caption-fixed th,#bench-caption-fixed th{height:22px;line-height:22px;font-weight:400;font-size:12px;border:0}#lineup_dropdown{display:none}@media screen and (max-width: 44.000em){.reportnavigation{display:none}#lineup_dropdown{display:block;margin-bottom:12px}#caption-fixed-wrapper {display:block}.mobile-caption-link{display:inline!important}}</style>')),
jQuery(document).ready(function() {
	document.getElementById("lineup") && (jQuery("form").each(function() {
		$(this).attr("action") === "/" + year + "/lineup" && $(this).attr("id", "lineup-form"),
		$(this).attr("action") === baseURLDynamic + "/" + year + "/lineup" && $(this).attr("id", "lineup-form")
	}), jQuery("#lineup table.report th:contains('Optional Message:')").each(function() {
		jQuery(this).closest("table").attr("id", "optional-message-table")
	}), jQuery("input[value='Submit Lineup']").attr("id", "submit-lineup-form"), jQuery("#submit-lineup-form").css("padding-left", "26px"), jQuery("head").append("<style>#benchtable + #optional-message-table td,#benchtable + #optional-message-table th{border:0px}#benchtable + #optional-message-table{padding-top:10px!important}#benchtable + #optional-message-table caption{display:none}#benchtable + #optional-message-table.report tr + tr + tr{display:table;width:100%;}</style>"), addTdClasses(), lu_useDefaultAsPrimary && "false" === localStorage.getItem("lu_useDefault_" + league_id + "_" + franchise_id) || !lu_useDefaultAsPrimary && "true" === localStorage.getItem("lu_useDefault_" + league_id + "_" + franchise_id) ? jQuery.when(doLineupLeagueAPI(), doRulesScrape(), addDropNav()).done(function(e, a) {
		jQuery("#lineup-form").append('<p class="form_buttons default-btn"><input type="button" value="Use Default Submission Form" onclick="redirectSubmissionPage(true)"></p>'),
		setupLu(),
		jQuery("form").css("display", "inline-block"),
		jQuery("form").css("width", "100%");
		var t = jQuery("#startertable").offset().top,
			r = jQuery("#startertable > caption").clone(),
			o = jQuery("#benchtable > caption").clone(),
			i = jQuery("#startertable > tbody > tr:eq(0)").clone();
		$fixedStarterTable = jQuery("#starter-caption-fixed").append(r).append("<tbody><tr class='sheader'>" + i.html() + "</tr></tbody>"),
		$fixedBenchTable = jQuery("#bench-caption-fixed").append(o).append("<tbody><tr class='sheader'>" + i.html() + "</tr></tbody>"),
		jQuery(window).on("scroll", function() {
			var e = jQuery(this).scrollTop();
			e >= t && $fixedBenchTable.is(":hidden") ? ($fixedBenchTable.show(), hs_caption_mobile()) : e < t && ($fixedBenchTable.hide(), hs_caption_mobile()),
			e >= t && $fixedStarterTable.is(":hidden") ? ($fixedStarterTable.show(), hs_caption_mobile()) : e < t && ($fixedStarterTable.hide(), hs_caption_mobile()),
			lu_mobileStarters ? $fixedBenchTable.hide() : ($fixedStarterTable.hide(), hs_caption_mobile())
		}),
		lu_tiebreakerCount > 1 && (jQuery("#optional-message-table select").attr("id", "select-tiebreakers").attr("onchange", "jQuery('#tiebreakers-selected').html(jQuery('#select-tiebreakers :selected').length);if(lu_includeValidation) lineupValidation(false);"), jQuery("#select-tiebreakers").closest("tr").find("th:eq(0)").append("<span id='tiebreakers-selected-container'> (<span id='tiebreakers-selected'>0</span> Selected)</span>"))
	}) : (jQuery("#lineup-form").append('<p class="form_buttons default-btn"><input type="button" value="Use Custom Submission Form" onclick="redirectSubmissionPage(false)"></p>'), jQuery("#lineup .report").css("display", "table")))
}),
jQuery(document).ready(function(e) {
	jQuery("#body_submit_lineups #submit_lineups h4.warning").after('<p id="go-back" class="form_buttons"><input value="Go Back" type="button"></p>'),
	jQuery("#go-back").on("click", function() {
		e.preventDefault(),
		window.history.back()
	})
}),
document.getElementById("lineup") && (lu_useDefaultAsPrimary && "false" === localStorage.getItem("lu_useDefault_" + league_id + "_" + franchise_id) || !lu_useDefaultAsPrimary && "true" === localStorage.getItem("lu_useDefault_" + league_id + "_" + franchise_id)) && function() {
	var e,
		a,
		t;
	e = function(e) {
		var a,
			t,
			r,
			o;
		if (-1 !== e.indexOf("launch_player_modal"))
			return (t = e.split(","))[1].replace(/'/g, "").replace(");", "");
		for (r = 0, o = (t = e.split("?")[1].split("&")).length; r < o; r++)
			if ("P" === (a = t[r].split("="))[0])
				return a[1]
	},
	a = function(e) {
		var a;
		return (a = e.split(" "))[a.length - 1]
	},
	t = function(e) {
		var a;
		return (a = e.split(" "))[a.length - 2]
	},
	jQuery(function() {
		var r;
		if ((r = jQuery("#lineup table.report")).length)
			return jQuery('a[class^="position"]').each(function(r, o) {
				var i,
					s,
					n,
					l,
					p;
				return i = jQuery(o), n = e(i.attr("href")), l = a(i.text()), p = t(i.text()), s = lu_useTeamLogo[l] ? lu_logoPath + p + ".png" : "//www.myfantasyleague.com/player_photos_2014/" + n + "_thumb.jpg", i.parentsUntil("tr", "td").before('<td class="pphoto"><img class="headshot" data-player-img-url="' + s + '" /></td>').find("img")
			}), r.find("img").each(function(e, a) {
				var t;
				return (t = jQuery(this)).one("error", function() {
					return t.one("error", function() {
						return jQuery(this).attr("src", "//nitrografixx.com/MFL-Popups/silhouette.png")
					}), $el1 = jQuery(this), $el1.attr("src", $el1.attr("src").replace("2014", String(year)))
				}), t.attr("src", t.data("player-img-url"))
			})
	})
}.call(this),
hs_caption_mobile(),
setTimeout(function() {
	$("head").append("<style>#body_lineup .mobile-wrap{visibility:visible}</style>"),
	$("#body_lineup.custom_submission td.pphoto").remove()
}, 1e3),
jQuery(document).ready(function() {
	$("#lineup #reset-starters").trigger("click"),
	$("#lineup tr.playerrow td.player a").click(function(e) {
		e.stopPropagation()
	}),
	$("#body_lineup.custom_submission td.pphoto").remove(),
	$('#lineup td[class*="%-start"]').remove(),
	trtitles(),
	$("head").append("<style>#body_lineup .mobile-wrap{visibility:visible}</style>"),
	$("#lineup td.points.ytd-pts")[0] ? $("#lineup td.rank.pos-rank").remove() : ($("#lineup .theader td.rank").html('<span class="pos-rank">Pos Rank</span>'), $("#lineup .theader td.ytd-pts").remove(), $("#lineup .theader td.avg-pts").remove(), $("head").append("<style>#benchtable+#optional-message-table+div+.reportnavigation{display:none}#lineup #benchtable td.rank.pos-rank,#lineup #startertable td.rank.pos-rank{position:absolute;right:40px;border:0;box-shadow:none;width:60px;text-align:center;top:50%;transform:translateY(-50%)}</style>"))
});

