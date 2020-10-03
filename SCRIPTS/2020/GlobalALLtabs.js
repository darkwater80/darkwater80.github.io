if (null == showTabsAllPages)
	var showTabsAllPages = !0;
if (null == changeMainTabName)
	var changeMainTabName = "Home";
if (null == changeAllTabName)
	var changeAllTabName = !0;
if (jQuery("head").append("<style>div.myfantasyleague_tabmenu.main_tabmenu{display:none}.myfantasyleague_tabmenu.all_page #homepagetabs li a{text-decoration:none}.myfantasyleague_tabmenu.all_page li a{display:flex;flex-grow:1;flex-shrink:1;justify-content:center;}</style>"), showTabsAllPages || 0 !== jQuery("#body_home").length && (1 !== jQuery("#body_home").length || -1 == location.href.indexOf("MODULE=MESSAGE"))) {
	var html = "";
	html += '<div class="myfantasyleague_tabmenu all_page" style="display:block"><span id="tab_title">LEAGUE TABS</span>',
	html += ' <input id="sub100" type="checkbox">',
	html += ' <label for="sub100"><span></span></label>',
	html += ' <ul id="homepagetabs" class="customhomepagetabs">',
	html += '  <li id="tab0" onclick="javascript:show_tab(\'0\');" class=""><a class="tab_link" href="' + baseURLDynamic + "/" + year + "/home/" + league_id + '#0" class="no-sub">Main<input id="sub100" type="checkbox"><label for="sub100"></label></a></li>',
	html += " </ul>",
	html += "</div>",
	document.write(html);
	html = "";
	var MFL_customTabs_DefaultTabs = new Array,
		url = baseURLDynamic + "/" + year + "/export?TYPE=appearance&L=" + league_id + "&JSON=1";
	jQuery.ajax({
		type: "GET",
		url: url,
		async: !1
	}).done(function(a) {
		for (var e = 0; e < a.appearance.tab.length; e++)
			MFL_customTabs_DefaultTabs[e] = a.appearance.tab[e].name;
		for (e = 0; e < MFL_customTabs_DefaultTabs.length; e++)
			0 == e && "" != changeMainTabName && (MFL_customTabs_DefaultTabs[0] = changeMainTabName),
			html += '<li id="tab' + e + '" onclick="javascript:show_tab(\'' + e + '\');" class=""><a class="tab_link" href="' + baseURLDynamic + "/" + year + "/home/" + league_id + "#" + e + '" class="no-sub">' + MFL_customTabs_DefaultTabs[e] + '<input id="sub100" type="checkbox"><label for="sub100"></label></a></li>';
		var t = MFL_customTabs_DefaultTabs.length;
		for (var l in MFL_customTabs_FakeTabs)
			MFL_customTabs_FakeTabs.hasOwnProperty(l) && (html += '<li id="tab' + t + '" class="disable_sort"><a href="' + MFL_customTabs_FakeTabs[l].href + "#" + t + '" target="' + MFL_customTabs_FakeTabs[l].target + '">' + l + "</a></li>", t++);
		jQuery(".customhomepagetabs").html(html),
		jQuery(".myfantasyleague_tabmenu.all_page ul#homepagetabs li label").hide(),
		jQuery("#tab" + location.hash.substr(1)).addClass("currenttab"),
		location.href.indexOf("MODULE=") > 0 || (jQuery("#body_home .myfantasyleague_tabmenu.all_page li a.tab_link").removeAttr("href"), jQuery("#body_home .myfantasyleague_tabmenu.all_page ul#homepagetabs li label").show())
	})
}
if (changeAllTabName) {
	function show_tab(a) {
		for (var e = !1, t = 0; !e;) {
			var l = document.getElementById("tabcontent" + t),
				s = document.getElementById("tab" + t);
			if (l)
				if (t == a) {
					l.style.display = "",
					s.className = "currenttab",
					document.getElementById("tab_title").innerHTML = document.getElementById("tab" + a).firstChild.text;
					var n = $(".currenttab").attr("id");
					$("#tab_title").removeClass().addClass(n)
				} else
					l.style.display = "none",
					s.className = "";
			else
				e = !0;
			t++
		}
		location.hash = a
	}
	try {
		document.getElementById("tab_title").innerHTML = document.getElementById("tab" + location.hash.substr(1)).firstChild.text
	} catch (a) {}
}
var elmId = $(".currenttab").attr("id");
function show_custom_tab(a) {
	for (var e = !1, t = parseInt(parseInt(a) / Math.pow(10, parseInt(a).toString().length - 1)) * Math.pow(10, parseInt(a).toString().length - 1); !e;) {
		var l = document.getElementById("tabcontent" + t),
			s = document.getElementById("tab" + t);
		l ? t == parseInt(a) ? (l.style.display = "", s.className = "currenttab", document.getElementById("tab_title_" + parseInt(parseInt(a) / Math.pow(10, parseInt(a).toString().length - 1)) * Math.pow(10, parseInt(a).toString().length - 1)).innerHTML = document.getElementById("tab" + a).firstChild.text) : (l.style.display = "none", s.className = "") : e = !0,
		t++
	}
}
$("#tab_title").removeClass().addClass(elmId),
jQuery(document).ready(function() {
	$("#myfantasyleague_tabs > table.report").parent().addClass("mobile-wrap"),
	$("div.mobile-wrap #myfantasyleague_tabs > table.report").parent().removeClass("mobile-wrap"),
	$("#myfantasyleague_tabs .mobile-wrap table").not("#custom_draftroom #myfantasyleague_tabs .mobile-wrap table").unwrap(),
	$("div.myfantasyleague_tabmenu.main_tabmenu").remove()
});

