jQuery(".mobile-wrap").removeAttr("style"),
jQuery("blockquote:empty").remove(),
jQuery('#container-wrap table.report,blockquote,#body_options_05 table[align="center"]:last,#body_new_predraft form[name="new_predraft"],#body_edit_my_links #container-wrap form table,#body_options_84 form table,#body_trade_offer #container-wrap table,#container-wrap td.two_column_layout table').not("#options_45 #container-wrap table.report").wrap('<div class="mobile-wrap"></div>'),
jQuery("#container-wrap .mobile-wrap td.two_column_layout").parents("table").unwrap(),
jQuery("#container-wrap td.two_column_layout .mobile-wrap .mobile-wrap table").unwrap(),
jQuery("#body_options_166 #container-wrap").wrapInner('<div class="mobile-wrap"></div>'),
0 === $("#body_board_show #withmenus").length ? jQuery("#body_board_show #container-wrap").wrapInner('<div class="mobile-wrap"><table class="report addCaption" cellspacing="1" align="center"><tbody><tr><td></td></tr></tbody></table></div>') : jQuery("#body_board_show #withmenus").wrapInner('<div class="mobile-wrap"><table class="report addCaption" cellspacing="1" align="center"><tbody><tr><td></td></tr></tbody></table></div>'),
jQuery("#body_board_show #container-wrap .addCaption").prepend("<caption><span>Message Board Topics</span></caption>"),
jQuery("#body_board_show table span.nav").appendTo("#body_board_show #container-wrap .addCaption caption:first"),
jQuery("#body_board_show table th.messageboardbar").eq(1).remove(),
jQuery("#body_board_show table caption").eq(1).remove(),
jQuery('a img[alt="Reply to post"]').replaceWith('<input type="button" value="Reply" style="margin:0;padding:1px 3px">'),
jQuery('a img[alt="Reply to post with quote"]').replaceWith('<input type="button" value="Quote" style="margin:0;padding:1px 3px">'),
jQuery('a img[alt="Edit post"]').replaceWith('<input type="button" value="Edit" style="margin:0;padding:1px 3px">'),
jQuery("#body_board_show caption span.nav + span.nav").remove(),
jQuery('#body_board_show caption span.nav a img[title="Go to previous topic"]').replaceWith('<i class="fa fa-chevron-circle-left" aria-hidden="true" title="Go to previous topic" style="font-size:14px;vertical-align:text-top;width:14px;height:14px;cursor:pointer"></i>'),
jQuery('#body_board_show caption span.nav a img[title="Go to next topic"]').replaceWith('<i class="fa fa-chevron-circle-right" aria-hidden="true" title="Go to next topic" style="font-size:14px;vertical-align:text-top;width:14px;height:14px;cursor:pointer"></i>'),
jQuery('#body_board_show caption span.nav a img[title="Go up a level"]').replaceWith('<i class="fa fa-undo" aria-hidden="true" title="Return to Previous Page" style="font-size:14px;vertical-align:text-top;width:14px;height:14px;cursor:pointer"></i>'),
jQuery('#body_board_show td a img[title="Old/Read"]').replaceWith('<img src="//www.nitrografixx.com/MFL-Popups/newsOld.gif" title="Read Message" style="vertical-align:middle;cursor:pointer">'),
jQuery('#body_board_show td a img[title="New/Unread"]').replaceWith('<img src="//www.nitrografixx.com/MFL-Popups/newsNew.gif" title="Unread Message" style="vertical-align:middle;cursor:pointer">'),
jQuery('#body_board_show td a img[title="Old/Unread"]').replaceWith('<img src="//www.nitrografixx.com/MFL-Popups/newsNone.gif" title="Old Unread Message" style="vertical-align:middle;cursor:pointer">'),
jQuery("#body_options_80 #container-wrap ol").wrap('<div class="mobile-wrap"><table class="report addCaption" cellspacing="1" align="center"><tbody><tr><td></td></tr></tbody></table></div>'),
jQuery("#body_options_66 #container-wrap form").wrap('<div class="mobile-wrap"><table class="report addCaption" cellspacing="1" align="center"><tbody><tr><td></td></tr></tbody></table></div>'),
jQuery("#body_options_113 #container-wrap .mobile-wrap .mobile-wrap").unwrap(),
jQuery('#container-wrap .mobile-wrap .mobile-wrap table,#body_options_05 .mobile-wrap .mobile-wrap table[align="center"]:last').unwrap(),
jQuery("#container-wrap td.two_column_layout").addClass("mobile-view"),
jQuery('#body_player #container-wrap td[width="33%"],#body_player #container-wrap td[width="67%"]').addClass("mobile-view"),
jQuery("#body_options_71 #container-wrap form table").parents("form").wrap('<div class="mobile-wrap form-wrapper"></div>'),
jQuery('#body_csetup_hmpgmsg #container-wrap form,#body_add_drop #container-wrap table[width="100%"]').wrap('<div class="mobile-wrap form-wrapper"></div>'),
jQuery("#body_csetup_hmpgmsg #container-wrap form .mobile-wrap table").unwrap(),
jQuery("#csetup_hmpgmsg .mobile-wrap.form-wrapper form").closest(".mobile-wrap.form-wrapper").wrapInner('<table class="report addCaption" cellspacing="1" align="center"><tbody><tr><td></td></tr></tbody></table>'),
jQuery("#csetup_hmpgmsg .addCaption b").wrap("<caption><span></span></caption>"),
jQuery("#csetup_hmpgmsg .addCaption b").contents().unwrap(),
jQuery("#csetup_hmpgmsg .addCaption").prepend(jQuery("form caption")),
jQuery("#csetup_hmpgmsg .addCaption caption span").text("Enter Custom Home Page Message (HPM)"),
jQuery("#options_06 td.two_column_layout,#options_169 td.two_column_layout,#options_22 td.two_column_layout").closest("table").addClass("caption-remove"),
jQuery(".caption-remove > caption").remove(),
jQuery("table caption:not(:has(span))").wrapInner("<span></span>"),
jQuery("th.divpct").text("Div %"),
jQuery("th.all_play_wlt").text("All-Play"),
jQuery("th.h2hpct").text("%"),
jQuery('div.mobile-wrap .reportnavigation:contains("Hint:")').removeClass().addClass("alert alert-info-table").wrap('<div style="text-align:center"></div>'),
jQuery("td.hint").removeClass().addClass("tdalert tdalert-info-table").wrapInner("<span></span>"),
jQuery('body .reportnavigation:contains("Hint:")').removeClass().addClass("alert alert-info-body"),
jQuery('.reportnavigation:contains("Top FAQ:")').removeClass().addClass("alert alert-info-body"),
jQuery('.reportnavigation:contains("Weekly NFL Injury Status is in this color.")').hide(),
jQuery(".mobile-wrap").parents("table").addClass("no-borderspacing"),
jQuery("h3").addClass("h3-menu"),
jQuery(".mobile-wrap h3").removeClass("h3-menu"),
jQuery('.reportnavigation:contains("Power Rank As Of Week:")').removeClass().addClass("weekly-navbar week_optionsbox"),
jQuery('.reportnavigation:contains("Franchise Setup:")').removeClass().addClass("weekly-navbar fran_options"),
jQuery('.reportnavigation:contains("Standings As Of Week:")').removeClass().addClass("weekly-navbar week_optionsbox"),
jQuery('.reportnavigation:contains("Go To Week:")').removeClass().addClass("weekly-navbar week_optionsbox"),
jQuery('.reportnavigation:contains("Submit Lineup For Week:")').removeClass().addClass("weekly-navbar week_optionsbox"),
jQuery('.reportnavigation:contains("Edit Newsletter for Week:")').removeClass().addClass("weekly-navbar week_optionsbox"),
jQuery('.reportnavigation:contains("Go To Draft Round:")').removeClass().addClass("weekly-navbar week_optionsbox"),
jQuery('.reportnavigation:contains("Go To Team:")').removeClass().addClass("weekly-navbar1"),
jQuery('.reportnavigation:contains("Select A Category:")').removeClass().addClass("weekly-navbar week_optionsbox").wrap('<div style="text-align:center"></div>'),
jQuery(".weekly-navbar.week_optionsbox .reportnavigationheader").text("SELECT WEEK: "),
jQuery("#body_options_236 #container-wrap div > form").addClass("reportform"),
jQuery(".weekly-navbar.week_optionsbox").each(function() {
	var e = "";
	$(this).children().each(function() {
		$(this).hasClass("reportnavigationheader") || ($(this).hasClass("currentweek") ? e += '<option selected="selected">' + $(this).html() + "</option>" : e += '<option value="' + $(this).attr("href") + '">' + $(this).html() + "</option>")
	}),
	$(this).before('<span class="weekly-navbar-mobile">SELECT WEEK: <select onchange="location.href=this.value">' + e + "</select></span>"),
	e = null
}),
jQuery(".weekly-navbar.fran_options").each(function() {
	var e = "";
	$(this).children().each(function() {
		$(this).hasClass("reportnavigationheader") || ($(this).hasClass("currentweek") ? e += '<option selected="selected">' + $(this).html() + "</option>" : e += '<option value="' + $(this).attr("href") + '">' + $(this).html() + "</option>")
	}),
	$(this).before('<span class="weekly-navbar-mobile">FRANCHISE SETUP: <select onchange="location.href=this.value">' + e + "</select></span>"),
	e = null
}),
jQuery(".weekly-navbar1").each(function() {
	var e = "";
	$(this).children().each(function() {
		$(this).hasClass("reportnavigationheader") || ($(this).hasClass("currentweek") ? e += '<option selected="selected">' + $(this).html() + "</option>" : e += '<option value="' + $(this).attr("href") + '">' + $(this).html() + "</option>")
	}),
	$(this).before('<span class="weekly-navbar-mobile1">SELECT WEEK: <select onchange="location.href=this.value">' + e + "</select></span>"),
	e = null
}),
jQuery("#csetup_hmpgmsg #container-wrap h3:contains('Edit Message'),#message #container-wrap h3:contains('Edit Message')").each(function() {
	var e = $(this).html().split("|"),
		t = parseInt(location.href.substring(location.href.indexOf("&SEQNO=") + 7, location.href.length));
	isNaN(t) && (t = 1);
	var a = "",
		s = 1;
	$(this).find("a").each(function() {
		s !== t || 1 === s || document.getElementById("message") || (a += '<option selected="selected">' + e[t - 1].replace("Edit Message: ", "") + "</option>", s++),
		a += '<option value="' + $(this).attr("href") + '">' + $(this).text() + "</option>",
		s++
	}),
	20 === t && (a += '<option selected="selected">' + e[t - 1] + "</option>"),
	$(this).before('<span class="weekly-navbar-mobile">Edit Message: <select onchange="location.href=this.value">' + a + "</select></span>"),
	e = null,
	t = null,
	s = null,
	a = null
}),
jQuery("#container-wrap h3.h3-menu:contains('Main')").each(function() {
	for (var e = $(this).html().split("|"), t = "", a = 0; a < e.length; a++)
		-1 === e[a].indexOf("href") ? t += 0 === a ? '<option selected="selected">Main</option>' : '<option selected="selected">' + e[a] + "</option>" : t += '<option value="' + e[a].substring(e[a].indexOf("href=") + 6, e[a].indexOf(">") - 1) + '">' + e[a].substring(e[a].indexOf(">") + 1, e[a].indexOf("</a")) + "</option>";
	$(this).before('<span class="weekly-navbar-mobile">' + e[0].substring(0, e[0].indexOf(":")) + ': <select onchange="location.href=this.value">' + t + "</select></span>"),
	e = null,
	t = null
}),
jQuery("#hsubmenu #hsubmenuitems").each(function() {
	var e = "";
	$(this).find("li").each(function() {
		if (location.href.substring(location.href.indexOf(".com") + 4, location.href.length) === $(this).find("a").attr("href"))
			var t = ' selected="selected"';
		else
			t = "";
		e += '<option value="' + $(this).find("a").attr("href") + '"' + t + ">" + $(this).find("a").text() + "</option>"
	}),
	$(this).before('<span class="weekly-navbar-mobile"><select onchange="location.href=this.value"><option value="#">- Quick Links -</option>' + e + "</select></span>"),
	e = null
}),
jQuery("#container-wrap h3.h3-menu:contains('Status'):contains('In'):contains('All'):contains('My'):contains('Leagues')").each(function() {
	for (var e = $(this).html().split("|"), t = "", a = 0; a < e.length; a++)
		-1 === e[a].indexOf("href") ? t += 0 === a ? '<option selected="selected">Profile</option>' : '<option selected="selected">' + e[a] + "</option>" : t += '<option value="' + e[a].substring(e[a].indexOf("href=") + 6, e[a].indexOf(">") - 1) + '">' + e[a].substring(e[a].indexOf(">") + 1, e[a].indexOf("</a")) + "</option>";
	$(this).before('<span class="weekly-navbar-mobile">' + e[0].substring(0, e[0].indexOf(":")) + ': <select onchange="location.href=this.value">' + t + "</select></span>"),
	e = null,
	t = null
});
try {
	jQuery(".weekly-navbar").html(jQuery(".weekly-navbar").html().replace(/&nbsp;/g, "").replace(/\|/g, ""))
} catch (e) {}
jQuery("#body_options_43 td").filter(function() {
	var e = $(this).html();
	if ("" === e || " " === e)
		return !0
}).remove(),
jQuery('#body_options_52 td[colspan="3"] table > td').filter(function() {
	var e = $(this).html();
	if ("" === e || " " === e)
		return !0
}).addClass("empty"),
jQuery("#message_board_summary caption span").text("Message Board Summary"),
jQuery("#owner_activity caption span").text("Owner Activity"),
jQuery("#next_weeks_fantasy_schedule caption span").text("H2H Matchups"),
jQuery("#last_weeks_fantasy_results caption span").text("H2H Results"),
jQuery("#fantasy_recap caption span").text("Game Of The Week Recap"),
jQuery("#fantasy_preview caption span").text("Game Of The Week Preview"),
jQuery("#avg_draft_time caption span").text("Avg Draft Time"),
jQuery("#body_player #container-wrap table").eq(0).addClass("playerBio-Table");
var HideModuleMobile = "#fakedivname",
	HideModuleDesktop = "#fakedivname";
jQuery("#home " + HideModuleMobile).parent().addClass("desktop-Hide"),
jQuery("#home " + HideModuleDesktop).parent().addClass("mobile-Hide"),
jQuery(document).ready(function() {
	$("#league_chat caption span img").replaceWith('<i class="fa fa-comments" aria-hidden="true"></i>')
}),
jQuery("#playoff1 .oddtablerow:first").clone().addClass("lastrow").insertAfter("#playoff1 tr:last"),
jQuery("#playoff2 .oddtablerow:first").clone().addClass("lastrow").insertAfter("#playoff2 tr:last"),
jQuery("#playoff3 .oddtablerow:first").clone().addClass("lastrow").insertAfter("#playoff3 tr:last"),
jQuery("#playoff4 .oddtablerow:first").clone().addClass("lastrow").insertAfter("#playoff4 tr:last"),
jQuery("#playoff5 .oddtablerow:first").clone().addClass("lastrow").insertAfter("#playoff5 tr:last"),
jQuery("#playoff6 .oddtablerow:first").clone().addClass("lastrow").insertAfter("#playoff6 tr:last"),
jQuery("#playoff7 .oddtablerow:first").clone().addClass("lastrow").insertAfter("#playoff7 tr:last"),
jQuery("#playoff8 .oddtablerow:first").clone().addClass("lastrow").insertAfter("#playoff8 tr:last"),
jQuery("#playoff1 .oddtablerow.lastrow a,#playoff2 .oddtablerow.lastrow a,#playoff3 .oddtablerow.lastrow a,#playoff4 .oddtablerow.lastrow a,#playoff5 .oddtablerow.lastrow a,#playoff6 .oddtablerow.lastrow a,#playoff7 .oddtablerow.lastrow a,#playoff8 .oddtablerow.lastrow a").remove(),
jQuery('#body_add_drop caption:contains("Current Waiver Claims for")').parent("table").addClass("table1"),
jQuery('#body_add_drop caption:contains("Add/Drop For")').parent("table").addClass("table2"),
jQuery('#body_add_drop .table2 table caption:contains("Add")').parent("table").addClass("table2-sub1"),
jQuery('#body_add_drop .table2 table caption:contains("Drop")').parent("table").addClass("table2-sub2"),
jQuery('#body_add_drop b:contains("To Add:")').closest("table").addClass("table3"),
jQuery("#body_add_drop .table1").parent("div").addClass("resize"),
jQuery('#body_add_drop .table2-sub1 td:contains("Locked Player")').addClass("locked-warning").css("text-align", "left"),
jQuery("#body_add_drop .table2").find("#add_filt_nfl").closest("td").addClass("add-sorting"),
jQuery("#body_add_drop .table2-sub1 tr:first-of-type th,#body_add_drop .table2-sub2 tr:first-of-type th").replaceWith(function() {
	return $("<td />", {
		html: $(this).html()
	})
}),
jQuery("#body_add_drop .table2-sub1,#body_add_drop .table2-sub2").find('td a:contains("Name")').closest("tr").addClass("head-th"),
jQuery("#body_add_drop .table2-sub1,#body_add_drop .table2-sub2").find('td a:contains("Name")').closest("td").addClass("waiv-name"),
jQuery("#body_add_drop .table2-sub1,#body_add_drop .table2-sub2").find('td a:contains("Team")').closest("td").addClass("waiv-team"),
jQuery("#body_add_drop .table2-sub1,#body_add_drop .table2-sub2").find('td a:contains("Pos")').closest("td").addClass("waiv-pos"),
jQuery("#body_add_drop .table2-sub1,#body_add_drop .table2-sub2").find('td a:contains("Bye")').closest("td").addClass("waiv-bye"),
jQuery("#body_add_drop .table2-sub1,#body_add_drop .table2-sub2").find('td a:contains("Salary")').closest("td").addClass("waiv-salary"),
jQuery("#body_add_drop .table2-sub1,#body_add_drop .table2-sub2").find('td a:contains("Pts")').closest("td").addClass("waiv-pts"),
jQuery("#body_add_drop .table2-sub1,#body_add_drop .table2-sub2").find('td a:contains("Proj")').closest("td").addClass("waiv-proj"),
jQuery("#body_add_drop .table2-sub1,#body_add_drop .table2-sub2").find('td:contains("Inj")').closest("td").addClass("waiv-inj"),
jQuery("#body_add_drop .table2-sub1,#body_add_drop .table2-sub2").find('td a:contains("Opp")').closest("td").addClass("waiv-opp");
var Colnum = 0;
if ($(".table2-sub2 tr.head-th td").each(function() {
	$(this).attr("colspan") ? Colnum += +$(this).attr("colspan") : Colnum++
}), jQuery('tr.head-th td:last-of-type[width="20px"],#body_add_drop .table2-sub1 tr.head-th td:last-of-type,#body_add_drop .table2-sub2 tr.head-th td:last-of-type').length && $('tr.head-th td:last-of-type[width="20px"],#body_add_drop .table2-sub1 tr.head-th td:last-of-type,#body_add_drop .table2-sub2 tr.head-th td:last-of-type').addClass("scroll-spacer"), jQuery(".table2-sub2 td.waiv-proj.scroll-spacer").removeClass("scroll-spacer"), $(".table2-sub2 tr.head-th td:last-of-type").hasClass("scroll-spacer") || ($('<td width="20px" class="scroll-spacer"></td>').insertAfter(".table2-sub2 tr.head-th td:last-of-type"), $(".table2-sub2 tr.head-th+tr>td[colspan]").attr("colspan", Colnum + 1), $(".table2-sub2 div").css("cssText", "overflow-y: scroll")), jQuery("#body_add_drop .table2-sub1,#body_add_drop .table2-sub2").parent("td").addClass("mobile-view"), jQuery("#body_add_drop .table1 caption span").text("Current Waiver Claims"), jQuery("#body_add_drop .table2 caption span").text("Select Players to Add/Drop"), jQuery("#body_add_drop .table2-sub1 caption span").text("Add Player"), jQuery("#body_add_drop .table2-sub2 caption span").text("Drop Player"), jQuery("#body_add_drop .table3").parent("td").addClass("table3-td"), jQuery("#body_add_drop .table3-td + td").remove(), jQuery("#body_add_drop .table3-td").attr("colspan", 4), jQuery("#body_add_drop table.table3 tr:last-of-type td[colspan]").attr("colspan", 3).addClass("adddrop-lasttd"), jQuery("#body_add_drop .adddrop-lasttd").prev().remove(), jQuery("#body_add_drop .adddrop-lasttd").next().remove(), document.getElementById("body_add_drop")) {
	function hideAllFilters(e) {
		void 0 === e ? (jQuery("#custom-filter-name").hide(), jQuery("#custom-filter-nfl").hide(), jQuery("#custom-filter-pos").hide()) : ("#custom-filter-name" === e && (jQuery("#custom-filter-name").toggle(), jQuery("#custom-filter-nfl").hide(), jQuery("#custom-filter-pos").hide()), "#custom-filter-nfl" === e && (jQuery("#custom-filter-name").hide(), jQuery("#custom-filter-nfl").toggle(), jQuery("#custom-filter-pos").hide()), "#custom-filter-pos" === e && (jQuery("#custom-filter-name").hide(), jQuery("#custom-filter-nfl").hide(), jQuery("#custom-filter-pos").toggle()))
	}
	nameFilter = '<div id="custom-filter-name" style="display:none; overflow:visible!important;padding:3px;background:var(--accent,#B82601);border-radius: 3px; position:absolute; min-width:auto; left:-35px; top:-34px; z-index:1;width:106px!important">' + jQuery("#add_filt_name").clone().wrap("<p>").parent().html() + "</div>",
	nflFilter = '<div id="custom-filter-nfl" style="display:none; overflow:visible!important;padding:3px;background:var(--accent,#B82601);border-radius: 3px; position:absolute; min-width:auto; left:-53px; top:-34px; z-index:1;width:106px!important">' + jQuery("#add_filt_nfl").clone().wrap("<p>").parent().html() + "</div>",
	posFilter = '<div id="custom-filter-pos" style="display:none; overflow:visible!important;padding:3px;background:var(--accent,#B82601);border-radius: 3px; position:absolute; min-width:auto; left:-53px; top:-34px; z-index:1;width:106px!important">' + jQuery("#add_filt_pos").clone().wrap("<p>").parent().html() + "</div>",
	nflFilter = nflFilter.replace("picker_filter('add')", "picker_filter('add');hideAllFilters()"),
	posFilter = posFilter.replace("picker_filter('add')", "picker_filter('add');hideAllFilters()"),
	jQuery("#body_add_drop .table2-sub1 tr.head-th td.waiv-name").append('<span style="position:relative">' + nameFilter + '<span style="padding-left:6px;cursor:pointer"><i class="fa fa-search" aria-hidden="true" onclick="hideAllFilters(\'#custom-filter-name\')"></i></span></span>'),
	jQuery("#body_add_drop .table2-sub1 tr.head-th td.waiv-team").append('<span style="position:relative">' + nflFilter + '<span style="padding-left:3px;cursor:pointer"><i class="fa fa-filter" aria-hidden="true" onclick="hideAllFilters(\'#custom-filter-nfl\' )"></i></span></span>'),
	jQuery("#body_add_drop .table2-sub1 tr.head-th td.waiv-pos").append('<span style="position:relative">' + posFilter + '<span style="padding-left:3px;cursor:pointer"><i class="fa fa-filter" aria-hidden="true" onclick="hideAllFilters(\'#custom-filter-pos\' )"></i></span></span>'),
	jQuery('#body_add_drop .table2-sub1 td:contains("Filter by")').html("")
}
jQuery("#waiver_request_list").addClass("waiver-settings"),
jQuery('#waiver_request_list:has("td.points")').removeClass("waiver-settings").addClass("bbid-settings"),
jQuery('#waiver_request_list td:first-child:contains("1")').closest("table").addClass("has-rounds"),
jQuery('#waiver_request_list th:contains("Group"),#waiver_request_list th:contains("Round")').addClass("round"),
jQuery('#waiver_request_list th:contains("Add")').addClass("add-player"),
jQuery('#waiver_request_list th:contains("Drop")').addClass("drop-player"),
jQuery('#waiver_request_list th:contains("Bid Amount")').addClass("bid-amount"),
jQuery('#waiver_request_list th:contains("Action")').addClass("action"),
jQuery("#waiver_request_list td[rowspan]").parent().addClass("hasrowspan filtertr"),
jQuery("#waiver_request_list tr.oddtablerow.hasrowspan").nextUntil(".eventablerow").addClass("sub-hasrowspan filtertr"),
jQuery("#waiver_request_list tr.eventablerow.hasrowspan").nextUntil(".oddtablerow").addClass("sub-hasrowspan filtertr"),
jQuery("#waiver_request_list tr.eventablerow:not(.filtertr),#waiver_request_list tr.oddtablerow:not(.filtertr)").addClass("norowspan"),
jQuery('#waiver_request_list td:first-child:contains("1"),#waiver_request_list td:first-child:contains("2"),#waiver_request_list td:first-child:contains("3"),#waiver_request_list td:first-child:contains("4"),#waiver_request_list td:first-child:contains("5"),#waiver_request_list td:first-child:contains("6"),#waiver_request_list td:first-child:contains("7"),#waiver_request_list td:first-child:contains("8")').addClass("round"),
jQuery('#body_add_drop #waiver_request_list td a[href*="player?"]').closest("td").addClass("add-player"),
jQuery("#body_add_drop #waiver_request_list td.add-player + td.add-player").removeClass().addClass("drop-player"),
jQuery("#waiver_request_list td.points").addClass("bid-amount"),
jQuery('#waiver_request_list td:contains("Delete")').addClass("action"),
jQuery('#body_add_drop #waiver_request_list td.action a[href*="DOWN"]').attr("title", "Move Player Down"),
jQuery('#body_add_drop #waiver_request_list td.action a[href*="UP"]').attr("title", "Move Player Up"),
jQuery('#body_add_drop #waiver_request_list td.action a[href*="DELETE"]').attr("title", "Delete This Player Request"),
jQuery('#body_add_drop #waiver_request_list td.action a[href*="COPY"]').attr("title", "Copy Group To Next Round"),
jQuery('#body_add_drop #waiver_request_list td.action a[href*="&ROUND"]').attr("title", "Edit Waivers Selections");
var thCount = 0,
	timeEnteredCol = -1;
jQuery("#body_add_drop #waiver_request_list tr th").each(function() {
	"Time Entered" === $(this).text() && (timeEnteredCol = thCount),
	thCount++
}),
jQuery("#body_add_drop #waiver_request_list tr th:eq(" + (timeEnteredCol + 1) + ")").remove(),
jQuery("#body_add_drop #waiver_request_list tr th:eq(" + timeEnteredCol + ")").remove();
var addDropRowCount = 0;
jQuery("#body_add_drop #waiver_request_list tr").each(function() {
	if ($(this).find("td").length > timeEnteredCol) {
		var e = $(this).find("td:eq(0)").attr("rowspan"),
			t = $(this).find("td:eq(" + timeEnteredCol + ")").text(),
			a = $(this).find("td:eq(" + (timeEnteredCol + 1) + ")").text();
		if ($(this).hasClass("eventablerow"))
			var s = "eventablerow";
		else
			s = "oddtablerow";
		$(this).find("td:eq(" + (timeEnteredCol + 1) + ")").remove(),
		$(this).find("td:eq(" + timeEnteredCol + ")").remove(),
		void 0 === e ? ($(this).find("td:eq(0)").attr("rowspan", "3"), jQuery("#body_add_drop #waiver_request_list tr:eq(" + addDropRowCount + ")").after('<tr class="' + s + '"><td colspan="' + timeEnteredCol + '" class="time-cell"><span class="warning">Time Entered: </span>' + t + '</td></tr><tr class="' + s + '"><td colspan="' + timeEnteredCol + '" class="comments-cell"><span class="warning">Comments: </span><span class="comment-span">' + a + "</span></td></tr>)")) : ($(this).find("td:eq(0)").attr("rowspan", parseInt(e) + 2), jQuery("#body_add_drop #waiver_request_list tr:eq(" + (addDropRowCount - 1 + parseInt(e)) + ")").after('<tr class="' + s + '"><td colspan="' + timeEnteredCol + '" class="time-cell"><span class="warning">Time Entered: </span>' + t + '</td></tr><tr class="' + s + '"><td colspan="' + timeEnteredCol + '" class="comments-cell"><span class="warning">Comments: </span><span class="comment-span">' + a + "</span></td></tr>)")),
		addDropRowCount++,
		addDropRowCount++
	}
	addDropRowCount++
}),
jQuery("#waiver_request_list .comment-span:empty").parent().remove(),
jQuery("#waiver_request_list tr").removeClass("sub-hasrowspan filtertr hasrowspan norowspan"),
jQuery("#body_options_52 .mobile-wrap,#body_new_predraft .mobile-wrap").find('span:contains("Pre-Draft Selections For"),span:contains("Your Turn To Draft")').parents(".mobile-wrap").addClass("custom-draft"),
jQuery('#body_options_52 span.reportnavigation,#body_options_52 h3:contains("Waiting For:"),#body_options_52 h3:contains("On Deck:"),#body_options_52 h3:contains("To Greatly Speed"),#body_options_52 caption:contains("is on the clock"),#body_options_52 div.warning:contains("To Greatly Speed"),#body_options_52 .custom-draft br').remove(),
jQuery(".custom-draft form table:first").hide(),
jQuery(".mobile-wrap.custom-draft form:first").append('<table class="make-pick-table"><caption class="make-pick-title" style="text-align:center"></caption><tbody><tr><td class="mobile-view leftS"></td><td class="draft-blankTD" style="padding:5px;float:left;width:100%"></td><td class="mobile-view rightS"></td></tr></tbody></table><table><tbody><tr class="blockquotes"><td></td></tr></tbody></table>'),
jQuery(".mobile-wrap.custom-draft").find('span:contains("Pre-Draft Selections For"),span:contains("Your Turn To Draft")').appendTo(".make-pick-table caption"),
jQuery(".mobile-wrap.custom-draft").find('span:contains("Your Turn To Draft")').text("Your Turn To Draft. Select Below"),
jQuery('.mobile-wrap.custom-draft table caption span:contains("Player")').closest("table").appendTo(".mobile-view.leftS"),
jQuery(".mobile-view.leftS table table").wrap('<div class="draft-overflow" style="max-height:262px;overflow-x:auto"></div>'),
jQuery(".mobile-view.leftS div > div.draft-overflow").unwrap(),
jQuery(".custom-draft .mobile-view > table").width(""),
jQuery('.mobile-view.leftS caption span:contains("Pre-Draft")').closest("table").addClass("has-buttons-left"),
jQuery('.mobile-view.leftS caption span:contains("Draft")').closest("table").addClass("has-buttons-left"),
jQuery(".has-buttons-left tbody").append('<tr><td class="adjust_col" align="center"><input name="add_to_list" value="Add Player To Que" onclick="addToList(\'destination_list\',\'sel_pid\', \'sel_name\');" type="button"></td></tr>'),
jQuery('.custom-draft:contains("Your Turn To Draft. Select Below")').find("td.adjust_col").remove(),
jQuery(".has-buttons-left tr:first-of-type th").replaceWith(function() {
	return $("<td />", {
		html: $(this).html()
	})
}),
jQuery("#body_new_predraft .mobile-wrap caption").find('span:contains("Saved Round")').closest(".mobile-wrap").addClass("custom-draft-rounds"),
jQuery(".mobile-view.leftS").find('td a:contains("Name")').closest("tr").addClass("head-th"),
jQuery(".mobile-view.leftS tr.head-th").find('td a:contains("ADP")').text("ADP"),
jQuery(".mobile-view.leftS tr.head-th").find('td a:contains("My Rank")').text("#"),
jQuery(".mobile-view.leftS tr.head-th").find('td:contains("Projections")').text("Proj"),
jQuery(".mobile-view.leftS tr.head-th td:last-of-type").addClass("scroll-spacer"),
jQuery(".make-pick-table").find('td a:contains("Name")').closest("tr").addClass("head-th"),
jQuery(".make-pick-table tr.head-th").find('td a:contains("#")').closest("td").addClass("my_ranks"),
jQuery(".make-pick-table tr.head-th").find('td a:contains("Name")').closest("td").addClass("waiv-name"),
jQuery(".make-pick-table tr.head-th").find('td a:contains("Team")').closest("td").addClass("waiv-team"),
jQuery(".make-pick-table tr.head-th").find('td a:contains("Pos")').closest("td").addClass("waiv-pos"),
jQuery(".make-pick-table tr.head-th").find('td a:contains("Bye")').closest("td").addClass("waiv-bye"),
jQuery(".make-pick-table tr.head-th").find('td a:contains("Salary")').closest("td").addClass("waiv-salary"),
jQuery(".make-pick-table tr.head-th").find('td a:contains("Pts")').closest("td").addClass("waiv-pts"),
jQuery(".make-pick-table tr.head-th").find('td a:contains("Proj")').closest("td").addClass("waiv-proj"),
jQuery(".make-pick-table tr.head-th").find('td:contains("Inj")').closest("td").addClass("waiv-inj"),
jQuery(".make-pick-table tr.head-th").find('td:contains("Rank")').closest("td").addClass("waiv-rank"),
jQuery(".make-pick-table tr.head-th").find('td:contains("ADP")').closest("td").addClass("waiv-adp"),
jQuery(".has-buttons-left .my_ranks").closest("table").addClass("has_my_ranks"),
jQuery(".make-pick-table .my_ranks").remove(),
jQuery(document).ready(function() {
	jQuery(".has_my_ranks .pickerbox td:first-of-type").remove(),
	jQuery(".has_my_ranks .draft-overflow").closest("td").attr("colspan", colCount),
	jQuery(".has_my_ranks .head-th td span select").on("change", function() {
		$(".has_my_ranks .pickerbox td:first-of-type").remove()
	}),
	jQuery(".has_my_ranks #picker_filt_name").on("input", function() {
		$(".has_my_ranks .pickerbox td:first-of-type").remove()
	})
}),
jQuery(".has_my_ranks .head-th a").click(function() {
	$(".has_my_ranks .pickerbox td:first-of-type").remove()
});
var colCount = 0;
if (jQuery(".has-buttons-left tr.head-th td").each(function() {
	$(this).attr("colspan") ? colCount += +$(this).attr("colspan") : colCount++
}), jQuery("td.adjust_col").attr("colspan", colCount), document.querySelectorAll("body_options_52, body_new_predraft")) {
	function hideAllFilters(e) {
		void 0 === e || ("#custom-filter-name" === e && (jQuery("#custom-filter-name").toggle(), jQuery("#custom-filter-nfl").hide(), jQuery("#custom-filter-pos").hide()), "#custom-filter-nfl" === e && (jQuery("#custom-filter-name").hide(), jQuery("#custom-filter-nfl").toggle(), jQuery("#custom-filter-pos").hide()), "#custom-filter-pos" === e && (jQuery("#custom-filter-name").hide(), jQuery("#custom-filter-nfl").hide(), jQuery("#custom-filter-pos").toggle()))
	}
	nameFilter = '<div id="custom-filter-name" style="display:none; overflow:visible!important;padding:3px;background:var(--accent,#B82601);border-radius: 3px; position:absolute; min-width:auto; left:-35px; top:-34px; z-index:1;width:106px!important">' + jQuery("#picker_filt_name").clone().wrap("<p>").parent().html() + "</div>",
	nflFilter = '<div id="custom-filter-nfl" style="display:none; overflow:visible!important;padding:3px;background:var(--accent,#B82601);border-radius: 3px; position:absolute; min-width:auto; left:-53px; top:-34px; z-index:1;width:106px!important">' + jQuery("#picker_filt_nfl").clone().wrap("<p>").parent().html() + "</div>",
	posFilter = '<div id="custom-filter-pos" style="display:none; overflow:visible!important;padding:3px;background:var(--accent,#B82601);border-radius: 3px; position:absolute; min-width:auto; left:-53px; top:-34px; z-index:1;width:106px!important">' + jQuery("#picker_filt_pos").clone().wrap("<p>").parent().html() + "</div>",
	nflFilter = nflFilter.replace("picker_filter('picker')", "picker_filter('picker');hideAllFilters()"),
	posFilter = posFilter.replace("picker_filter('picker')", "picker_filter('picker');hideAllFilters()"),
	jQuery(".make-pick-table tr.head-th td.waiv-name").append('<span style="position:relative">' + nameFilter + '<span style="padding-left:6px;cursor:pointer"><i class="fa fa-search" aria-hidden="true" onclick="hideAllFilters(\'#custom-filter-name\')"></i></span></span>'),
	jQuery(".make-pick-table tr.head-th td.waiv-team").append('<span style="position:relative">' + nflFilter + '<span style="padding-left:3px;cursor:pointer"><i class="fa fa-filter" aria-hidden="true" onclick="hideAllFilters(\'#custom-filter-nfl\' )"></i></span></span>'),
	jQuery(".make-pick-table tr.head-th td.waiv-pos").append('<span style="position:relative">' + posFilter + '<span style="padding-left:3px;cursor:pointer"><i class="fa fa-filter" aria-hidden="true" onclick="hideAllFilters(\'#custom-filter-pos\' )"></i></span></span>'),
	jQuery('#body_options_52 .table2-sub1 td:contains("Filter by"),#body_new_predraft .table2-sub1 td:contains("Filter by")').html("")
}
jQuery(document).mouseup(function(e) {
	var t = $("#custom-filter-nfl,#custom-filter-pos,#custom-filter-name");
	t.is(e.target) || 0 !== t.has(e.target).length || t.hide()
}),
jQuery("head").append("<style>#custom-filter-nfl select,#custom-filter-pos select,#custom-filter-name input{border-radius:3px;width:100px!important;display:block;margin:0 auto;padding:1px;font-style:normal;text-decoration:none;outline:none}</style>"),
jQuery(".mobile-view.leftS").find('tr:contains("Filter by:")').remove(),
$('#body_options_52 form input[name="add_to_list"]').first().remove(),
$('#body_options_52 form input[name="remove_from_list"]').first().remove(),
$('#body_options_52 form input[name="move_up"]').first().remove(),
$('#body_options_52 form input[name="move_down"]').first().remove(),
jQuery('.mobile-wrap.custom-draft table span:contains("Players Queued")').closest("table").appendTo(".mobile-view.rightS"),
jQuery('.mobile-wrap.custom-draft p:contains("Player to draft:")').closest("td").addClass("create-table"),
jQuery(".create-table").appendTo(".mobile-view.rightS").wrap('<table class="player-to-draft"><tbody><tr />'),
jQuery("<caption><span></span></caption>").insertBefore(".player-to-draft tbody"),
jQuery(".player-to-draft p:first").appendTo(".player-to-draft caption span"),
jQuery(".player-to-draft caption span p span").unwrap(),
jQuery(".player-to-draft #sel_name").text("No Player Selected"),
jQuery('.mobile-view.rightS span:contains("Players Queued For Selection")').closest("table").addClass("has-buttons-right"),
jQuery(".has-buttons-right tbody").append('<tr><td align="center"><input name="remove_from_list" value="Remove From Que" onclick="removeListItem();" type="button"><input name="move_up" value="&#9650;" onclick="moveItem(true);" type="button"><input name="move_down" value="&#9660;" onclick="moveItem(false);" type="button"></td></tr>'),
jQuery(".has-buttons-right tbody").prepend('<tr><th style="padding: 2px 0">Sortable Draft Que List</th></tr>'),
jQuery('<table><tbody><tr><td align="center"><input style="margin-bottom:0" name="continue" value="Save These Picks And Continue" onclick="selectAllItems();" type="submit"></td></tr></tbody></table>').insertAfter($(".has-buttons-right").parents(".make-pick-table")),
jQuery(".mobile-wrap.custom-draft").find('td[colspan="3"] b:contains("Not sure what to do")').closest("td").wrapInner('<span class="alert alert-info-table"></span>'),
jQuery('.alert b:contains("Not sure what to do")').parent().addClass("toggle-hint"),
jQuery('.alert b:contains("Not sure what to do")').html('<span class="reportnavigationheader">Help:</span>Not sure what to do? Click for instructions').addClass("toggle-hint"),
jQuery(".toggle-hint ol").hide(),
jQuery(".toggle-hint b").on("click", function() {
	$(".toggle-hint ol").slideToggle()
}),
jQuery(".mobile-wrap.custom-draft").find("span.alert-info-table").appendTo("tr.blockquotes td"),
jQuery('.custom-draft .reportform:contains("Or, you may go immediately to:")').insertAfter(".custom-draft"),
jQuery(".mobile-view.leftS .head-th").find("a:first").trigger("click"),
jQuery("#body_options_27 .mobile-wrap").find('span:contains("Select Players To Add")').parents(".mobile-wrap").addClass("custom-loadplayer"),
jQuery("#body_options_27 #container-wrap form:first").append('<div class="mobile-wrap"><table class="custom-loadplayer-table"><caption class="custom-loadplayer-title"></caption><tbody><tr><td class="mobile-view leftSL"></td><td class="draft-blankTD" style="padding:5px;float:left;width:100%"></td><td class="mobile-view rightSL"></td></tr></tbody></table><table><tbody><tr class="blockquotes"><td></td></tr><tr class="enter-player"><td style="text-align:center;padding:10px"></td></tr></tbody></table></div>'),
jQuery(".custom-loadplayer > table > caption > span").appendTo(".custom-loadplayer-table caption"),
jQuery('.custom-loadplayer table span:contains("Select Players To")').closest("table").appendTo(".mobile-view.leftSL"),
jQuery(".mobile-view.leftSL table table").wrap('<div class="draft-overflow" style="max-height:262px;overflow-x:auto"></div>'),
jQuery(".mobile-view.leftSL div > div.draft-overflow").unwrap(),
jQuery('.mobile-view.leftSL span:contains("Select Players To Add")').closest("table").addClass("has-buttons-leftL"),
jQuery(".has-buttons-leftL").width(""),
jQuery(".has-buttons-leftL tbody").append('<tr><td colspan="7" align="center"><input name="add_to_list" value="Add Player" onclick="addToList(\'destination_list\',\'sel_pid\', \'sel_name\');" type="button"></td></tr>'),
jQuery(".mobile-view.leftSL").find('td a:contains("Name")').closest("tr").addClass("head-th"),
jQuery(".mobile-view.leftSL").find('td:contains("Projections")').text("Proj"),
jQuery(".mobile-view.leftSL tr.head-th td:last-of-type").addClass("scroll-spacer"),
jQuery(".mobile-view.leftSL").find('tr:contains("Filter by:")').remove(),
jQuery('.custom-loadplayer table span:contains("Current Roster")').closest("table").appendTo(".mobile-view.rightSL"),
jQuery('.mobile-view.rightSL span:contains("Current Roster")').closest("table").addClass("has-buttons-rightL"),
jQuery(".has-buttons-rightL tbody").append('<tr><td align="center"><input name="remove_from_list" value="Remove Player" onclick="removeListItem();" type="button"></td></tr>'),
jQuery(".has-buttons-rightL tbody").prepend('<tr><th style="padding: 2px 0">Team Roster</th></tr>'),
jQuery('<table><tbody><tr><td align="center"><input value="Load/Unload Roster" onclick="selectAllItems();" type="submit"></td></tr></tbody></table>').insertAfter($(".has-buttons-rightL").parents(".custom-loadplayer-table")),
jQuery(".custom-loadplayer").find("span.alert-info-table").appendTo("tr.blockquotes td"),
jQuery('#body_options_27 td:has("textarea")').contents().appendTo("tr.enter-player td"),
jQuery(".mobile-view.leftSL .head-th").find("a:first").trigger("click"),
jQuery("#body_options_05 .mobile-wrap").find('span:contains("Pending Trades")').parents(".mobile-wrap").addClass("tradesTable"),
jQuery(".tradesTable").find('a:contains("Compare Players")').remove(),
jQuery(".tradesTable tr.newposition").removeClass("newposition"),
jQuery(".tradesTable").find('tr:contains("Offered To Others")').addClass("offered-by-me"),
jQuery(".tradesTable").find('tr:contains("Offered To You")').addClass("offered-to-me"),
jQuery(".tradesTable").find('tr:contains("Offering Franchise")').addClass("column-heads"),
jQuery(".tradesTable tr").has("ul").addClass("trade-offer"),
jQuery(".tradesTable tr.oddtablerow").removeClass("oddtablerow"),
jQuery(".tradesTable tr.eventablerow").removeClass("eventablerow"),
jQuery(".tradesTable tr").has(".warning").addClass("warningTR no-trades"),
jQuery(".tradesTable .no-trades").prevUntil(".trade-offer").addClass("no-trades"),
jQuery(".tradesTable .trade-offer td:nth-child(1),.tradesTable .column-heads th:nth-child(1)").addClass("franchise-offered-by"),
jQuery(".tradesTable .trade-offer td:nth-child(2),.tradesTable .column-heads th:nth-child(2)").addClass("players-offered-by"),
jQuery(".tradesTable .trade-offer td:nth-child(3),.tradesTable .column-heads th:nth-child(3)").addClass("franchise-offered-to"),
jQuery(".tradesTable .trade-offer td:nth-child(4),.tradesTable .column-heads th:nth-child(4)").addClass("players-offered-to"),
jQuery(".tradesTable .trade-offer td:nth-child(5),.tradesTable .column-heads th:nth-child(5)").addClass("expires-by"),
jQuery(".tradesTable .trade-offer td:nth-child(6),.tradesTable .column-heads th:nth-child(6)").addClass("comments-to"),
jQuery(".tradesTable .trade-offer td:nth-child(7),.tradesTable .column-heads th:nth-child(7)").addClass("actions-by"),
jQuery(".tradesTable .offered-by-me").each(function() {
	$(this).nextUntil(".offered-to-me").addBack().wrapAll("<table class='offeredbymeTable'><tbody>")
}),
jQuery(".tradesTable .offered-to-me").each(function() {
	$(this).nextUntil(".tradesTable tbody").addBack().wrapAll("<table class='offeredtomeTable'><tbody>")
}),
jQuery(".trade-offer .franchise-offered-by").each(function() {
	$(this).nextUntil(".franchise-offered-to").addBack().wrapAll("<div class='offerer' />")
}),
jQuery(".trade-offer .franchise-offered-to").each(function() {
	$(this).nextUntil(".expires-by").addBack().wrapAll("<div class='offeree' />")
}),
jQuery(".trade-offer + tr").after('<tr class="divide-trades"><td colspan="20" style="padding:0;margin:0;border:0"></td></tr>'),
jQuery(".offeredbymeTable td.comments-to").each(function() {
	$(this).text().length > 1 ? $(this).wrapInner('<span class="comments-disabled" />') : $(this).wrapInner('<span class="comments-disabled">No Comments</span>')
});
var tradeOffer = 0;
jQuery(".offeredtomeTable td.comments-to").each(function() {
	$(this).text().length > 2 ? ($(this).contents().eq(0).wrap('<span class="comments-disabled" />'), $(this).find(".comments-disabled").after('<span class="comments-to-textarea">Leave Comment :</span>')) : $(this).prepend('<span class="comments-disabled">No Comments</span><span class="comments-to-textarea">Leave Comment :</span>'),
	$(this).find("textarea").addClass("comments-textarea").attr("onchange", "$('#comments-response-" + tradeOffer + "').val(this.value)"),
	tradeOffer++
}),
jQuery(".offeredtomeTable .trade-offer").each(function() {
	$(this).find(".actions-by").append('<div class="actions-expired"><b>Expires On:</b> ' + $(this).find(".expires-by").html().replace(year, "").replace(":00 ", " ") + "</div>")
}),
jQuery(".offeredbymeTable .trade-offer").each(function() {
	$(this).find(".actions-by").append('<span class="actions-expired" style="display:block"><b>Expires On:</b> ' + $(this).find(".expires-by").html().replace(year, "").replace(":00 ", " ") + "</span>")
});
var pendingTrades = new Array;
jQuery(".offeredtomeTable input[name=PENDING]").each(function() {
	pendingTrades.push($(this).val())
});
var pendingFranchises = new Array;
jQuery(".offeredtomeTable input[name=FRANCHISE_ID]").each(function() {
	pendingFranchises.push($(this).val())
});
tradeOffer = 0;
function expandPlayer(e, t, a) {
	a ? (jQuery("#expandTotal_" + e + "_" + t).hide(), jQuery("#expandAvg_" + e + "_" + t).hide(), jQuery("#collapseTotal_" + e + "_" + t).show(), jQuery("#collapseAvg_" + e + "_" + t).show(), jQuery(".nflStatsWeekRow_" + e + "_" + t).show()) : (jQuery("#expandTotal_" + e + "_" + t).show(), jQuery("#expandAvg_" + e + "_" + t).show(), jQuery("#collapseTotal_" + e + "_" + t).hide(), jQuery("#collapseAvg_" + e + "_" + t).hide(), jQuery(".nflStatsWeekRow_" + e + "_" + t).hide())
}
function doNFLTotal(e) {
	e ? (jQuery("#nflTotalInactive").hide(), jQuery("#nflAvgInactive").show(), jQuery("#nflTotalActive").show(), jQuery("#nflAvgActive").hide(), jQuery(".nflStatsTotalRow").show(), jQuery(".nflStatsAvgRow").hide()) : (jQuery("#nflTotalInactive").show(), jQuery("#nflAvgInactive").hide(), jQuery("#nflTotalActive").hide(), jQuery("#nflAvgActive").show(), jQuery(".nflStatsTotalRow").hide(), jQuery(".nflStatsAvgRow").show())
}
function applyStat(e, t) {
	return "-" === e ? e : isNaN(parseFloat(e)) ? t ? "0.0" : 0 : e
}
function shortenHeader(e) {
	if ("Targets" === e)
		return "<span title='" + e + "'>Tgt</span>";
	if ("Pass Interceptions Thrown" === e)
		return "<span title='" + e + "'>Int</span>";
	if ("Receptions" === e)
		return "<span title='" + e + "'>Rcpt</span>";
	var t = !1,
		a = !1;
	e.indexOf("Rush") > -1 && (t = !0),
	e.indexOf("Receiving") > -1 && (a = !0);
	for (var s = (l = (l = (l = (l = (l = e.toUpperCase()).replace("EXTRA", "X")).replace("NUMBER OF", "#")).replace("(", "( ")).replace(")", " )")).split(" "), l = "", o = 0; o < s.length; o++)
		l += s[o].substring(0, 1);
	return t && (l = l.replace("R", "Run")), a && (l = l.replace("R", "Rec")), "<span title='" + e + "'>" + l + "</span>"
}
function getNFLScheduleReformat(e) {
	for (var t = new Array, a = 1; a < 22; a++) {
		var s = baseURLDynamic + "/" + year + "/export?TYPE=nflSchedule&W=" + a + "&JSON=1";
		jQuery.ajax({
			type: "GET",
			url: s,
			async: !1
		}).done(function(s) {
			var l = !1;
			try {
				for (var o = 0; o < s.nflSchedule.matchup.length; o++) {
					if (s.nflSchedule.matchup[o].team[0].id === e) {
						t[a] = e + " " + s.nflSchedule.matchup[o].team[0].score + " at " + s.nflSchedule.matchup[o].team[1].score + " " + s.nflSchedule.matchup[o].team[1].id,
						l = !0;
						break
					}
					if (s.nflSchedule.matchup[o].team[1].id === e) {
						t[a] = e + " " + s.nflSchedule.matchup[o].team[1].score + " vs " + s.nflSchedule.matchup[o].team[0].score + " " + s.nflSchedule.matchup[o].team[0].id,
						l = !0;
						break
					}
				}
			} catch (e) {}
			l || (t[a] = "bye")
		})
	}
	return t
}
function doNFLStatsTable(e, t) {
	try {
		var a = e.find("caption").html(),
			s = e.find("caption span").html(),
			l = new Array,
			o = new Array;
		e.find("tr:eq(0) th").each(function() {
			o[o.length] = jQuery(this).html()
		});
		var r = 0,
			i = 0,
			n = 0;
		e.find("tr").each(function() {
			if (n > 0)
				if (jQuery(this).find("th").length > 0)
					r = l.length,
					jQuery(this).find("th").html().indexOf("<img") > 0 ? l[r] = {
						name: jQuery(this).find("th").html().substring(0, jQuery(this).find("th").html().indexOf("<img")),
						hasInjury: !1,
						playerRows: new Array
					} : l[r] = {
						name: jQuery(this).find("th").html(),
						hasInjury: !1,
						playerRows: new Array
					};
				else {
					"Injury Status" === jQuery(this).find("td:eq(0)").html() && (l[r].hasInjury = !0),
					i = l[r].playerRows.length,
					l[r].playerRows[i] = new Array;
					var e = 0;
					jQuery(this).find("td").each(function() {
						l[r].playerRows[i][e] = jQuery(this).html(),
						e++
					})
				}
			n++
		});
		var d = "";
		if (document.getElementById("body_nfl_team_stats"))
			if (l[0].hasInjury)
				var c = l[0].playerRows.length - 1;
			else
				c = l[0].playerRows.length;
		else if (l[0].hasInjury)
			c = l[0].playerRows.length - 2;
		else
			c = l[0].playerRows.length - 1;
		d += "<caption>" + a + "</caption><tbody>",
		d += "<tr><th>Player</th><th>Week</th>",
		l[0].hasInjury && (d += "<th>Injury</th>");
		for (var p = 0; p < c; p++)
			d += "<th style='text-align:center'>" + shortenHeader(l[0].playerRows[p][0]) + "</th>";
		d += "</tr>";
		for (var _ = 0; _ < l.length; _++) {
			d += '<tr class="oddtablerow nflStatsTotalRow"><td><span id="expandTotal_' + s + "_" + _ + '" onclick="expandPlayer(\'' + s + "','" + _ + '\',true)"></span><span id="collapseTotal_' + s + "_" + _ + '" style="display:none" onclick="expandPlayer(\'' + s + "','" + _ + '\',false)"></span><span class="plus-toggle-stats"><span class="toggle-btn"></span></span>' + l[_].name + '</td><td style="text-align:center">Total</td>',
			l[_].hasInjury && (d += "<td style='text-align:center'></td>");
			for (p = 0; p < c; p++)
				l[0].hasInjury && p === l[0].playerRows.length - 1 || (d += "<td class='points' style='text-align:center'>" + applyStat(l[_].playerRows[p][l[_].playerRows[p].length - 2], !1) + "</td>");
			d += "</tr>",
			d += '<tr class="oddtablerow nflStatsAvgRow"><td><span id="expandAvg_' + s + "_" + _ + '" onclick="expandPlayer(\'' + s + "','" + _ + '\',true)"></span><span id="collapseAvg_' + s + "_" + _ + '" style="display:none" onclick="expandPlayer(\'' + s + "','" + _ + '\',false)"></span><span class="plus-toggle-stats"><span class="toggle-btn"></span></span>' + l[_].name + '</td><td style="text-align:center">Avg</td>',
			l[_].hasInjury && (d += "<td style='text-align:center'></td>");
			for (p = 0; p < c; p++)
				l[0].hasInjury && p === l[0].playerRows.length - 1 || (d += "<td class='points' style='text-align:center'>" + applyStat(l[_].playerRows[p][l[_].playerRows[p].length - 1], !0) + "</td>");
			for (d += "</tr>", w = 1; w < l[_].playerRows[0].length - 2; w++) {
				document.getElementById("body_nfl_team_stats") ? d += "<tr class='eventablerow nflStatsWeekRow nflStatsWeekRow_" + s + "_" + _ + "' style='display:none'><td style='text-align:right'>" + t[w] + "</td><td style='text-align:center'>" + w + "</td>" : d += "<tr class='eventablerow nflStatsWeekRow nflStatsWeekRow_" + s + "_" + _ + "' style='display:none'><td style='text-align:right'>" + l[_].playerRows[l[_].playerRows.length - 1][w] + "</td><td style='text-align:center'>" + w + "</td>";
				for (p = 0; p < c; p++)
					l[_].hasInjury && 0 === p && (document.getElementById("body_nfl_team_stats") ? d += "<td style='text-align:center'>" + l[_].playerRows[l[_].playerRows.length - 1][w] + "</td>" : d += "<td style='text-align:center'>" + l[_].playerRows[l[_].playerRows.length - 2][w] + "</td>"),
					l[0].hasInjury && p === l[0].playerRows.length - 1 || (d += "<td class='points' style='text-align:center'>" + applyStat(l[_].playerRows[p][w], !1) + "</td>");
				d += "</tr>"
			}
		}
		d += "</tbody>",
		e.html(d),
		reformattedStatsFound || e.closest("div").before("<div class='display_links' style='text-align:center;margin:10px 0'><h3 style='display:inline;margin:0;padding:0;vertical-align:middle;font-weight:300'>Display: </h3><span id='nflTotalInactive' style='display:none'><a href='#total' onclick='doNFLTotal(true)'>Total</a></span><span id='nflTotalActive'><a>Total</a></span> | <span id='nflAvgInactive'><a href='#avg' onclick='doNFLTotal(false)'>Avg</a></span><span id='nflAvgActive' style='display:none'><a>Avg</a></span></div>"),
		reformattedStatsFound = !0,
		jQuery(".nflStatsAvgRow").hide()
	} catch (e) {}
}
function doMFL_reformatStatsPage() {
	var e = getNFLScheduleReformat(jQuery("select[name='TEAM'] option:selected").text());
	jQuery("body").find("table.report").each(function() {
		doNFLStatsTable(jQuery(this), e)
	}),
	e = null
}
if (jQuery(".offeredtomeTable .trade-offer .actions-by").each(function() {
	$(this).html('<form class="cus-trades-form" action="trade_response" method="post"><input type="hidden" name="LEAGUE_ID" value="' + league_id + '"/><input type="hidden" name="FRANCHISE_ID" value="' + pendingFranchises[tradeOffer] + '"/><input type="hidden" name="PENDING" value="' + pendingTrades[tradeOffer] + '"/><input type="hidden" name="COMMENTS" id="comments-response-' + tradeOffer + '" value=""/>' + $(this).html() + "</form>"),
	tradeOffer++
}), jQuery('.offeredtomeTable tr:has(input[type="submit"])').each(function() {
	$(this).prev().find(".cus-trades-form").append(this)
}), jQuery('.offeredtomeTable .cus-trades-form input[type="submit"]').unwrap(), jQuery(".offeredtomeTable .cus-trades-form td").remove(), jQuery('.offeredtomeTable .cus-trades-form input[type="submit"]').unwrap(), jQuery("#body_options_05 .no-borderspacing").prepend('<tr class="trade-toggle-mobile" style="text-align:center"><td><input id="tradeShowOther" value="Display Other Team" type="button"><input id="tradeShowMyTeam" value="Display My Team" type="button"></td></tr>'), jQuery('#body_options_05 td[valign="top"] table.report').addClass("trade-twocolumn-table"), jQuery(".trade-twocolumn-table").parents("td").addClass("div-wrap-trade-table"), jQuery(".div-wrap-trade-table:first").addClass("firstTable"), jQuery(".div-wrap-trade-table:last").addClass("lastTable"), jQuery(".trade-twocolumn-table th,.trade-twocolumn-table td").addClass("trade-class"), jQuery(".trade-twocolumn-table").find('th:contains("Trade?")').removeClass().addClass("trade-box"), jQuery(".trade-twocolumn-table td").has('input[type="checkbox"]').removeClass().addClass("trade-box"), jQuery(".trade-twocolumn-table th.trade-box").html('<i class="fa fa-check" aria-hidden="true"></i>'), jQuery(".trade-twocolumn-table").find('th:contains("Player")').removeClass().addClass("trade-player"), jQuery(".trade-twocolumn-table td").has('a[class*="position"]').removeClass().addClass("trade-player"), jQuery(".trade-twocolumn-table th.trade-player").text("Player Name"), jQuery(".trade-twocolumn-table").find('th:contains("Salary")').removeClass().addClass("salary"), jQuery(".trade-twocolumn-table td.salary").removeClass().addClass("salary"), jQuery(".trade-twocolumn-table").find('th:contains("Bye")').removeClass().addClass("week"), jQuery(".trade-twocolumn-table td.week").removeClass().addClass("week"), jQuery(".trade-twocolumn-table").find('th:contains("YTD Pts")').removeClass().addClass("points"), jQuery(".trade-twocolumn-table td.points").removeClass().addClass("points"), jQuery(".trade-twocolumn-table th.points").text("YTD Pts"), jQuery('.trade-twocolumn-table .trade-box + td:contains("Draft Pick")').removeClass().addClass("draftpickTD"), jQuery(".trade-twocolumn-table .draftpickTD").attr("colspan", "7"), jQuery(".trade-twocolumn-table").find('td:contains("Blind Bidding Dollars")').removeClass().addClass("trade-bbid-text"), jQuery(".trade-twocolumn-table td").has('input[type="text"]').removeClass().addClass("trade-bbid-amt"), jQuery(".trade-bbid-amt").wrapInner("<span />"), contentsLeft = jQuery(".firstTable .trade-bbid-text").contents(), jQuery(".firstTable .trade-bbid-amt").append(contentsLeft), contentsRight = jQuery(".lastTable .trade-bbid-text").contents(), jQuery(".lastTable .trade-bbid-amt").append(contentsRight), jQuery(".trade-twocolumn-table td.trade-bbid-text").remove(), jQuery(".trade-twocolumn-table .trade-bbid-amt").attr("colspan", "7"), jQuery(".trade-twocolumn-table").has("td.contractyear") && (jQuery(".firstTable th.trade-class").eq(0).removeClass().addClass("contractyear"), jQuery(".lastTable th.trade-class").eq(0).removeClass().addClass("contractyear"), jQuery(".trade-twocolumn-table td.contractyear").removeClass("trade-class")), jQuery(".trade-twocolumn-table").has("td.contractstatus") && (jQuery(".firstTable th.trade-class").eq(0).removeClass().addClass("contractstatus"), jQuery(".lastTable th.trade-class").eq(0).removeClass().addClass("contractstatus"), jQuery(".trade-twocolumn-table td.contractstatus").removeClass("trade-class")), jQuery("#tradeShowOther").on("click", function() {
	$(".div-wrap-trade-table.firstTable").hide(),
	$("#tradeShowOther").hide(),
	$(".div-wrap-trade-table.lastTable").show(),
	$("#tradeShowMyTeam").show()
}), jQuery("#tradeShowMyTeam").on("click", function() {
	$(".div-wrap-trade-table.lastTable").hide(),
	$("#tradeShowMyTeam").hide(),
	$(".div-wrap-trade-table.firstTable").show(),
	$("#tradeShowOther").show()
}), (document.getElementById("body_nfl_team_stats") || document.getElementById("body_options_138")) && -1 === location.href.indexOf("#DEFAULT")) {
	var reformattedStatsFound = !1;
	doMFL_reformatStatsPage()
}
jQuery('#body_trade_offer b:contains("Gave Up")').parents("table").addClass("offer-table"),
jQuery(".offer-table").unwrap(),
jQuery("#body_trade_offer table.offer-table").after('<table class="two_column_layout no-borderspacing offer-table-moved"></caption><tbody><tr><td class="two_column_layout mobile-view" valign="top"><div class="mobile-wrap"><table class="leftS" align="center"><caption style="text-align:center"><span></span></caption><tbody><tr><th>Gave Up</th></tr><tr><td class="gave-player oddtablerow" style="text-align:center"></td></tr><tr><th style="text-align:left">New Roster</th></tr><tr><td class="new-roster oddtablerow"></td></tr></tbody></table></div></td><td class="two_column_layout mobile-view" valign="top"><div class="mobile-wrap"><table class="rightS" align="center"><caption style="text-align:center"><span></span></caption><tbody><tr><th>Gave Up</th></tr><tr><td class="gave-player oddtablerow" style="text-align:center"></td></tr><tr><th style="text-align:left">New Roster</th></tr><tr><td class="new-roster oddtablerow"></td></tr></tbody></table></div></td></tr></tbody></table>'),
jQuery("#body_trade_offer .offer-table h3 a:eq(0)").appendTo(".offer-table-moved .leftS caption span"),
jQuery("#body_trade_offer .offer-table h3 a:eq(0)").appendTo(".offer-table-moved .rightS caption span"),
jQuery("#body_trade_offer .offer-table tr:nth-child(1) > td:nth-child(1)").contents().appendTo(".offer-table-moved .leftS td.gave-player"),
jQuery("#body_trade_offer .offer-table tr:nth-child(1) > td:nth-child(2)").contents().appendTo(".offer-table-moved .rightS td.gave-player"),
jQuery(".offer-table-moved .gave-player h3,.offer-table-moved .leftS .gave-player br:first,.offer-table-moved .rightS .gave-player br:first").remove(),
jQuery("#body_trade_offer .offer-table tr:nth-child(2) > td:nth-child(1)").contents().appendTo(".offer-table-moved .leftS td.new-roster"),
jQuery("#body_trade_offer .offer-table tr:nth-child(2) > td:nth-child(2)").contents().appendTo(".offer-table-moved .rightS td.new-roster"),
jQuery("#body_trade_offer .offer-table").remove(),
jQuery('#body_trade_offer b:contains("Gave Up")').remove(),
jQuery("#body_trade_offer .new-roster h3").remove(),
jQuery('#body_trade_response .h3-menu:contains("Trade Rejected")').parent("#container-wrap").addClass("rejected-page trade-form-page"),
jQuery('#body_trade_response .h3-menu:contains("Trade Accepted")').parent("#container-wrap").addClass("accepted-page trade-form-page"),
jQuery('#body_trade_response .h3-menu:contains("Trade Revoked")').parent("#container-wrap").addClass("revoked-page trade-form-page"),
jQuery('#body_trade_response .h3-menu:contains("The commissioner has been notified")').parent("#container-wrap").addClass("notify-commish trade-form-page"),
jQuery('#body_trade_response .h3-menu:contains("allowing owners to approve or reject this trade")').parent("#container-wrap").addClass("notify-poll trade-form-page"),
jQuery("#body_trade_response .trade-form-page .h3-menu:first").remove(),
jQuery("#body_trade_response .trade-form-page .h3-menu + br").remove(),
jQuery("#body_trade_response .trade-form-page .h3-menu").after('<div class="mobile-wrap"><table class="tradesubmit-table"><caption><span>You Have Rejected This Trade</span></caption><tbody><tr><th style="text-align:left">Trade Proposed By</th><th style="text-align:left">Trade Proposed To</th></tr><tr><td class="team-proposedby" style="vertical-align:top;width:50%"></td><td class="team-proposedto" style="vertical-align:top;width:50%"></td></tr></tbody></table></div>'),
jQuery("#body_trade_response .accepted-page .tradesubmit-table caption span").text("You Have Accepted This Trade"),
jQuery("#body_trade_response .revoked-page .tradesubmit-table caption span").text("You Have Revoked This Trade"),
jQuery("#body_trade_response .notify-commish .tradesubmit-table caption span").text("You Have Accepted This Trade"),
jQuery("#body_trade_response .notify-poll .tradesubmit-table caption span").text("You Have Accepted This Trade");
try {
	jQuery("#body_trade_response .trade-form-page ul li:eq(0)").contents().appendTo("td.team-proposedby")
} catch (e) {}
try {
	jQuery("#body_trade_response .trade-form-page ul li:eq(1)").contents().appendTo("td.team-proposedto")
} catch (e) {}
jQuery("#body_trade_response .trade-form-page td.team-proposedto b,#body_trade_response .trade-form-page td.team-proposedby b,#body_trade_response .trade-form-page .tradesubmit-table br").remove(),
jQuery("#body_trade_response .trade-form-page .tradesubmit-table td a").css("display", "block"),
jQuery("#body_trade_response .trade-form-page .tradesubmit-table td a").css("padding", "3px 0"),
jQuery("#body_trade_response .trade-form-page .mobile-wrap").nextUntil("div").remove(),
jQuery("#body_trade_response .notify-poll .h3-menu").after('<h3 class="h3-menu">A new poll has been created allowing owners to approve or reject this trade.</h3>'),
jQuery("#body_trade_response .notify-commish .h3-menu").after('<h3 class="h3-menu">This trades requires commissioner approval.</h3>');
try {
	jQuery("td.team-proposedto").html(jQuery("td.team-proposedto").html().replace(/To/gi, "")),
	jQuery(".trade-form-page").html(jQuery(".trade-form-page").html().replace(/[\n]/g, "")),
	jQuery(".trade-form-page").html(jQuery(".trade-form-page").html().replace("proposed a trade with:", "")),
	jQuery("td.team-proposedto").html(jQuery("td.team-proposedto").html().replace(/for/gi, "")),
	jQuery("td.team-proposedby").html(jQuery("td.team-proposedby").html().replace(/will give/gi, ""))
} catch (e) {}
jQuery('#body_trade_offer .h3-menu:contains("Trade Proposal to")').parent("#container-wrap").addClass("trade-proposal-form"),
jQuery("#body_trade_offer div.mobile-wrap table.report").addClass("remove-table"),
jQuery("#body_trade_offer .trade-proposal-form .h3-menu:first,#body_trade_offer .trade-proposal-form .h3-menu:last,#body_trade_offer .trade-proposal-form br").remove(),
jQuery("#body_trade_offer .trade-proposal-form .h3-menu:last a").css("display", "block"),
jQuery("#body_trade_offer .trade-proposal-form .h3-menu:first").after('<div class="mobile-wrap"><table class="tradesubmit-table"><caption><span>You Have Offered This Trade</span></caption><tbody><tr><th style="text-align:left">Trade Proposed By</th><th style="text-align:left">Trade Proposed To</th></tr><tr><td class="team-proposedby" style="vertical-align:top;width:50%"></td><td class="team-proposedto" style="vertical-align:top;width:50%"></td></tr><tr><td colspan="2" style="border:0;box-shadow:none;padding:10px"></td></tr><tr><td colspan="2" class="trade-expires-by" style="text-align:center"></td></tr></tbody></table></div>'),
jQuery("#body_trade_offer .trade-proposal-form ul li:eq(0)").contents().appendTo("td.team-proposedby"),
jQuery("#body_trade_offer .trade-proposal-form ul li:eq(1)").contents().appendTo("td.team-proposedto"),
jQuery("#body_trade_offer .trade-proposal-form .tradesubmit-table td a").css("display", "block"),
jQuery("#body_trade_offer .trade-proposal-form .tradesubmit-table td a").css("padding", "3px 0"),
jQuery("#body_trade_offer .remove-table caption,#body_trade_offer .remove-table a,#body_trade_offer .remove-table ul").remove(),
jQuery("#body_trade_offer .remove-table td").contents().appendTo("td.trade-expires-by");
try {
	jQuery("#body_trade_offer .trade-proposal-form td.team-proposedto").html(jQuery("#body_trade_offer .trade-proposal-form td.team-proposedto").html().replace(/for/gi, "")),
	jQuery("#body_trade_offer .trade-proposal-form td.team-proposedby").html(jQuery("#body_trade_offer .trade-proposal-form td.team-proposedby").html().replace(/will give/gi, "")),
	jQuery("#body_trade_offer .trade-proposal-form td.team-proposedto").html(jQuery("#body_trade_offer .trade-proposal-form td.team-proposedto").html().replace(/To/gi, "")),
	jQuery("#body_trade_offer td.trade-expires-by").html($("#body_trade_offer td.trade-expires-by").html().replace("proposed a trade with", "")),
	jQuery("#body_trade_offer td.trade-expires-by").html($("#body_trade_offer td.trade-expires-by").html().replace(":", ""))
} catch (e) {}
jQuery("#body_trade_offer .remove-table").parents(".mobile-wrap").remove(),
jQuery('<table class="two_column_layout no-borderspacing" align="center"><tbody><tr><td class="two_column_layout mobile-view leftV" valign="top"><div class="mobile-wrap"><table class="report" cellspacing="1" align="center"><caption><span>Available Modules</span></caption><tbody><tr><th>Make A Selection</th></tr><tr><td class="selectbox"></td></tr><tr><td><input name="add_to_list" value="Add To List" onclick="add();" type="button"></td></tr><tr><td class="preview-modules"></td></tr></tbody></table></div></td><td class="two_column_layout mobile-view rightV" valign="top"><div class="mobile-wrap"><table class="report" cellspacing="1" align="center"><caption><span>Currently Used Modules</span></caption><tbody><tr><th>Make A Selection</th></tr><tr><td class="selectbox"></td></tr><tr><td><input name="remove_from_list" value="Remove From List" onclick="removeListItem();" type="button"><input name="move_up" value="&#9650;" onclick="moveItem(true);" type="button"><input name="move_down" value="&#9660;" onclick="moveItem(false);" type="button"></td></tr></tbody></table></div></td></tr></tbody></table>').insertBefore("#options_71 form table"),
jQuery("#options_71 form table #source_list").appendTo("#options_71 .leftV td.selectbox"),
jQuery("#options_71 form table #destination_list").appendTo("#options_71 .rightV td.selectbox"),
jQuery('#options_71 form table a[href*="javascript:void(0);"]').appendTo("#options_71 td.preview-modules"),
jQuery("#options_71 form table + table").remove(),
jQuery('#options_129 form[name="my_draft_list"]:has("select")').addClass("preselections"),
jQuery('<div class="reportform"><span class="sorting-players">Sort By:<span></span></span><span class="position-players">Show Only:<span></span></span></div><table class="two_column_layout no-borderspacing" align="center"><tbody><tr><td class="two_column_layout mobile-view leftV" valign="top"><div class="mobile-wrap"><table class="report" cellspacing="1" align="center"><caption><span>Available Players</span></caption><tbody><tr><th>Make A Selection</th></tr><tr><td class="selectbox"><div class="style-input" style="max-height:300px;overflow:auto"></div></td></tr><tr><td><input name="add_to_list" value="Add Player" onclick="addToList(\'destination_list\',\'sel_pid\', \'sel_name\');" type="button"></td></tr></tbody></table></div></td><td class="two_column_layout mobile-view rightV" valign="top"><div class="mobile-wrap"><table class="report" cellspacing="1" align="center"><caption><span>Current Draft List</span></caption><tbody><tr><th>Make A Selection</th></tr><tr><td class="selectbox"></td></tr><tr><td><input name="remove_from_list" value="Remove From List" onclick="removeListItem();" type="button"><input name="move_up" value="&#9650;" onclick="moveItem(true);" type="button"><input name="move_down" value="&#9660;" onclick="moveItem(false);" type="button"></td></tr></tbody></table></div></td></tr><tr><td colspan="2"><p class="form_buttons"><input name="save" type="submit" value="Save My Draft List" onclick="selectAllItems();"></p></td></tr></tbody></table>').insertBefore("#options_129 form.preselections .mobile-wrap"),
jQuery("#options_129 form.preselections table #picker").appendTo("#options_129 .leftV td.selectbox div"),
jQuery("#options_129 form.preselections table #destination_list").appendTo("#options_129 .rightV td.selectbox"),
jQuery("#options_129 form.preselections table #picker_filt_nfl").appendTo("#options_129 .sorting-players span"),
jQuery("#options_129 form.preselections table #picker_filt_pos").appendTo("#options_129 .position-players span"),
jQuery("#options_129 form.preselections table + div.mobile-wrap").hide(),
jQuery("#options_129 div.mobile-wrap .report").find('th:contains("Player")').addClass("th-playername"),
jQuery('#options_129 div.mobile-wrap .report tr td:has("a")').addClass("td-playername"),
jQuery('#options_129 form.preselections table #picker td[width="175px"]').css("text-align", "left"),
jQuery('<table class="two_column_layout no-borderspacing" align="center"><tbody><tr><td class="two_column_layout mobile-view leftV" valign="top"><div class="mobile-wrap"><table class="report" cellspacing="1" align="center"><caption><span>Available Franchises</span></caption><tbody><tr><th>Make A Selection</th></tr><tr><td class="selectbox"></td></tr><tr><td style="text-align:center"><input name="add_to_list" value="Add To List" onclick="addListItem();" type="button"></td></tr></tbody></table></div></td><td class="two_column_layout mobile-view rightV" valign="top"><div class="mobile-wrap"><table class="report" cellspacing="1" align="center"><caption><span>Current Round Draft Order</span></caption><tbody><tr><th>Make A Selection</th></tr><tr><td class="selectbox"></td></tr><tr><td style="text-align:center"><input name="remove_from_list" value="Remove From List" onclick="removeListItem();" type="button"><input name="move_up" value="&#9650;" onclick="moveItem(true);" type="button"><input name="move_down" value="&#9660;" onclick="moveItem(false);" type="button"></td></tr></tbody></table></div></td></tr></tbody></table>').insertBefore("#options_91 form table"),
jQuery("#options_91 form table #source_list").css("width", "100%").appendTo("#options_91 .leftV td.selectbox"),
jQuery("#options_91 form table #destination_list").css("width", "100%").appendTo("#options_91 .rightV td.selectbox"),
jQuery("#options_91 form table + table").remove(),
jQuery("#body_csetup_loadrost #container-wrap form").addClass("load-rosters"),
jQuery('<table class="two_column_layout no-borderspacing" align="center"><caption class="loadteamowner">Team: </caption><tbody><tr><td class="two_column_layout mobile-view leftV" valign="top"><div class="mobile-wrap"><table class="report" cellspacing="1" align="center"><caption><span>Select Players to Add</span></caption><tbody><tr><th>Make A Selection</th></tr><tr><td class="selectbox"><div class="style-input" style="max-height:300px;overflow:auto"></div></td></div></tr><tr><td class="AddtoBtn"></td></tr><tr><td class="addsearch">Player Search</td></tr></tbody></table></div></td><td class="two_column_layout mobile-view rightV" valign="top"><div class="mobile-wrap"><table class="report" cellspacing="1" align="center"><caption><span>Current Roster</span></caption><tbody><tr><th>Make A Selection</th></tr><tr><td class="selectbox"></td></tr><tr><td><input type="button" name="remove_from_list" value="Remove From Roster" onclick="removeListItem();"><input name="move_up" value="&#9650;" onclick="moveItem(true);" type="button"><input name="move_down" value="&#9660;" onclick="moveItem(false);" type="button"></td></tr></tbody></table></div></td></tr><tr><td colspan="2" class="tdalert tdalert-info-table"><span style="width:100%;margin:0;margin-bottom:10px"><b>Hint:</b> Cant find a player on this list?  You can <a href="player_search?L=' + league_id + '" target="_blank">search our player database</a> to try to find him.</span></td></tr></tbody></table><table class="report" cellspacing="1" align="center"><tbody><tr><td class="loadtextarea"><div class="mobile-wrap">Or, you may copy and paste player names here, one player name per line</div><p class="form_buttons"><input type="submit" value="Load/Unload Roster" onclick="selectAllItems();"></p></td></tr></tbody></table>').insertBefore("#body_csetup_loadrost form.load-rosters .mobile-wrap"),
jQuery("#body_csetup_loadrost form table.report caption span").eq(2).appendTo("#body_csetup_loadrost caption.loadteamowner"),
jQuery('#body_csetup_loadrost form input[name="add_to_list"]').val("Add to Roster"),
jQuery("#body_csetup_loadrost form.load-rosters textarea").appendTo("#body_csetup_loadrost td.loadtextarea div"),
jQuery("#body_csetup_loadrost form.load-rosters #picker_filt_name").appendTo("#body_csetup_loadrost td.addsearch"),
jQuery("#body_csetup_loadrost form.load-rosters table #picker").appendTo("#body_csetup_loadrost .leftV td.selectbox div"),
jQuery("#body_csetup_loadrost form.load-rosters table #destination_list").appendTo("#body_csetup_loadrost .rightV td.selectbox"),
jQuery('#body_csetup_loadrost form.load-rosters input[name="add_to_list"]').appendTo("#body_csetup_loadrost .leftV td.AddtoBtn"),
jQuery("#body_csetup_loadrost form.load-rosters table + div.mobile-wrap").hide(),
jQuery("head").append('<style>.style-input{border:1px solid #eee;border-radius:3px;padding:2px;background:#fff}.weekly-navbar-mobile1{text-align:center;display:block}.weekly-navbar1{display:none}#body_csetup_loadrost div.mobile-wrap .report td, #body_csetup_loadrost form.load-rosters td{text-align:center}#body_csetup_loadrost form.load-rosters td[width="175px"]{text-align:left}#body_csetup_loadrost #container-wrap .report td select{max-height:300px;vertical-align:middle}#body_csetup_loadrost .two_column_layout .mobile-wrap select{width:100%}#body_csetup_loadrost td.loadtextarea textarea{width:90%;margin:2px auto;margin-top:5px}#body_options_233 #container-wrap div.mobile-wrap .report textarea{width:100%}</style>');
try {
	jQuery("#body_csetup_cantcut #container-wrap form").addClass("cant-cutlists"),
	jQuery('<br><table class="two_column_layout no-borderspacing" align="center"><tbody><tr><td class="two_column_layout mobile-view leftV" valign="top"><div class="mobile-wrap"><table class="report" cellspacing="1" align="center"><caption><span>Add Players To Can&apos;t Cut List</span></caption><tbody><tr><th>Make A Selection</th></tr><tr><td class="selectbox"><div class="style-input" style="max-height:300px;overflow:auto"></div></td></div></tr><tr><td class="AddtoBtn"></td></tr><tr><td class="addsearch">Player Search</td></tr></tbody></table></div></td><td class="two_column_layout mobile-view rightV" valign="top"><div class="mobile-wrap"><table class="report" cellspacing="1" align="center"><caption><span>Current Can&apos;t Cut List</span></caption><tbody><tr><th>Make A Selection</th></tr><tr><td class="selectbox"></td></tr><tr><td><input type="button" name="remove_from_list" value="Remove From List" onclick="removeListItem();"></td></tr></tbody></table></div><tr><td colspan="2"><p class="form_buttons"><input name="SUBMIT" type="submit" value="Save Can&apos;t Cut List" onclick="selectAllItems();"></p></td></tr></tbody></table>').insertBefore("#body_csetup_cantcut form.cant-cutlists .mobile-wrap"),
	jQuery('#body_csetup_cantcut form input[name="add_to_list"]').val("Add to List"),
	jQuery("#body_csetup_cantcut form.cant-cutlists #picker_filt_name").appendTo("#body_csetup_cantcut td.addsearch"),
	jQuery("#body_csetup_cantcut form.cant-cutlists table #picker").appendTo("#body_csetup_cantcut .leftV td.selectbox div"),
	jQuery("#body_csetup_cantcut form.cant-cutlists table #destination_list").appendTo("#body_csetup_cantcut .rightV td.selectbox"),
	jQuery('#body_csetup_cantcut form.cant-cutlists input[name="add_to_list"]').appendTo("#body_csetup_cantcut .leftV td.AddtoBtn"),
	jQuery("#body_csetup_cantcut form.cant-cutlists table + div.mobile-wrap").hide(),
	jQuery("head").append('<style>#body_csetup_cantcut div.mobile-wrap .report td, #body_csetup_cantcut form.cant-cutlists td{text-align:center}#body_csetup_cantcut form.cant-cutlists td[width="175px"]{text-align:left}#body_csetup_cantcut #container-wrap .report td select{max-height:300px;vertical-align:middle}#body_csetup_cantcut .two_column_layout .mobile-wrap select{width:100%}</style>')
} catch (e) {}
try {
	jQuery("#body_csetup_cantadd #container-wrap form").addClass("cant-addlists"),
	jQuery('<br><table class="two_column_layout no-borderspacing" align="center"><tbody><tr><td class="two_column_layout mobile-view leftV" valign="top"><div class="mobile-wrap"><table class="report" cellspacing="1" align="center"><caption><span>Add Players To Can&apos;t Add List</span></caption><tbody><tr><th>Make A Selection</th></tr><tr><td class="selectbox"><div class="style-input" style="max-height:300px;overflow:auto"></div></td></div></tr><tr><td class="AddtoBtn"></td></tr><tr><td class="addsearch">Player Search</td></tr></tbody></table></div></td><td class="two_column_layout mobile-view rightV" valign="top"><div class="mobile-wrap"><table class="report" cellspacing="1" align="center"><caption><span>Current Can&apos;t Add List</span></caption><tbody><tr><th>Make A Selection</th></tr><tr><td class="selectbox"></td></tr><tr><td><input type="button" name="remove_from_list" value="Remove From List" onclick="removeListItem();"></td></tr></tbody></table></div><tr><td colspan="2"><p class="form_buttons"><input name="SUBMIT" type="submit" value="Save Can&apos;t Add List" onclick="selectAllItems();"></p></td></tr></tbody></table>').insertBefore("#body_csetup_cantadd form.cant-addlists .mobile-wrap"),
	jQuery('#body_csetup_cantadd form input[name="add_to_list"]').val("Add to List"),
	jQuery("#body_csetup_cantadd form.cant-addlists #picker_filt_name").appendTo("#body_csetup_cantadd td.addsearch"),
	jQuery("#body_csetup_cantadd form.cant-addlists table #picker").appendTo("#body_csetup_cantadd .leftV td.selectbox div"),
	jQuery("#body_csetup_cantadd form.cant-addlists table #destination_list").appendTo("#body_csetup_cantadd .rightV td.selectbox"),
	jQuery('#body_csetup_cantadd form.cant-addlists input[name="add_to_list"]').appendTo("#body_csetup_cantadd .leftV td.AddtoBtn"),
	jQuery("#body_csetup_cantadd form.cant-addlists table + div.mobile-wrap").hide(),
	jQuery("head").append('<style>#body_csetup_cantadd div.mobile-wrap .report td, #body_csetup_cantadd form.cant-addlists td{text-align:center}#body_csetup_cantadd form.cant-addlists td[width="175px"]{text-align:left}#body_csetup_cantadd #container-wrap .report td select{max-height:300px;vertical-align:middle}#body_csetup_cantadd .two_column_layout .mobile-wrap select{width:100%}</style>')
} catch (e) {}
try {
	jQuery('#options_178 form[action="options"]').addClass("preselections"),
	jQuery('<div class="reportform"><span class="sorting-players">Sort By:<span></span></span><span class="position-players">Show Only:<span></span></span></div><table class="two_column_layout no-borderspacing" align="center"><tbody><tr><td class="two_column_layout mobile-view leftV" valign="top"><div class="mobile-wrap"><table class="report" cellspacing="1" align="center"><caption><span>Add To Watch List</span></caption><tbody><tr><th>Make A Selection</th></tr><tr><td class="selectbox"><div class="style-input" style="max-height:300px;overflow:auto"></div></td></tr></tbody></table></div></td><td class="two_column_layout mobile-view rightV" valign="top"><div class="mobile-wrap"><table class="report" cellspacing="1" align="center"><caption><span>Import Watch List</span></caption><tbody><tr><th>Copy From Another League</th></tr><tr><td vaign="top">Year of League To Copy From:<select size="1" name="COPY_YEAR" id="COPY_YEAR"><option value="2017">2017</option><option value="2018" selected="selected">2018</option></select><br>League ID To Copy From:<input name="COPY_LEAGUE" id="COPY_LEAGUE" size="6" maxlength="5" type="text"><br><span class="alert alert-info-table"><span class="reportnavigationheader">Hint:</span> When copying players from another league, these players will be added to the current players on this leagues list.</span></td></tr></tbody></table></div></td></tr><tr><td colspan="2"><p class="form_buttons"><input name="submit" value="Add To My Watch List" type="submit"></p></td></tr></tbody></table>').appendTo("#options_178 form.preselections"),
	jQuery("#options_178 form.preselections table #picker").appendTo("#options_178 .leftV td.selectbox div"),
	jQuery("#options_178 form.preselections table #picker_filt_nfl").appendTo("#options_178 .sorting-players span"),
	jQuery("#options_178 form.preselections table #picker_filt_pos").appendTo("#options_178 .position-players span"),
	jQuery('#options_178 form.preselections table #picker td[width="175px"]').css("text-align", "left"),
	jQuery('#options_178 form span:contains("Or You May Copy")').closest("table").remove(),
	jQuery('#options_178 table span:contains("My Watch List")').closest("table").addClass("watch-table"),
	jQuery("#options_178 .watch-table tr td:nth-child(1),#options_178 .watch-table tr th:nth-child(1)").css("text-align", "left"),
	jQuery("#options_178 .watch-table tr td:nth-child(2),#options_178 .watch-table tr th:nth-child(2)").css("text-align", "left"),
	jQuery("#options_178 .watch-table tr td:nth-child(3),#options_178 .watch-table tr th:nth-child(3)").css("text-align", "center"),
	jQuery("#options_178 .watch-table tr td:nth-child(4),#options_178 .watch-table tr th:nth-child(4)").css("text-align", "center"),
	jQuery("#options_178 form > table:first").hide(),
	jQuery('#options_178 .watch-table tr td:contains("Delete")').addClass("action"),
	jQuery('#options_178 .watch-table tr td.action a[href*="move"]').attr("title", "Move Player Up"),
	jQuery('#options_178 .watch-table tr td.action a[href*="delete"]').attr("title", "Remove From Watch List"),
	jQuery("head").append('<style>#options_178 .watch-table tr td.action a,#options_178 .watch-table tr td.action{font-size:0;text-decoration:none}#options_178 .watch-table tr td.action a:before{font-family:"FontAwesome";font-size:14px;padding:0 3px;font-size: 14px}#options_178 .watch-table tr td.action a[href*="move"]:before{content:"\\f077"}#options_178 .watch-table tr td.action a[href*="delete"]:before{content: "\\f014"}</style>')
} catch (e) {}
try {
	jQuery("#body_options_257 #container-wrap form").addClass("dropplayer-list"),
	jQuery("#body_options_257 #container-wrap form caption:first").addClass("clonecap"),
	jQuery('<br><table class="two_column_layout no-borderspacing" align="center"><caption class="dropcap"></caption><tbody><tr><td class="two_column_layout mobile-view leftV" valign="top"><div class="mobile-wrap"><table class="report" cellspacing="1" align="center"><caption><span>Current Roster</span></caption><tbody><tr><th>Make A Selection</th></tr><tr><td class="selectbox"><div class="style-input" style="max-height:300px;overflow:auto"></div></td></div></tr><tr><td class="AddtoBtn"></td></tr><tr></tr></tbody></table></div></td><td class="two_column_layout mobile-view rightV" valign="top"><div class="mobile-wrap"><table class="report" cellspacing="1" align="center"><caption><span>Players To Drop</span></caption><tbody><tr><th>Make A Selection</th></tr><tr><td class="selectbox"></td></tr><tr><td><input type="button" name="remove_from_list" value="Remove From List" onclick="removeListItem();"></td></tr></tbody></table></div><tr><td colspan="2"><p class="form_buttons"><input name="SUBMIT" value="Drop Players" onclick="selectAllItems();" type="submit"></p></td></tr></tbody></table>').insertBefore("#body_options_257 form.dropplayer-list .mobile-wrap"),
	jQuery('#body_options_257 form input[name="add_to_list"]').val("Add to List"),
	jQuery("#body_options_257 .clonecap span").appendTo("#body_options_257 .dropcap"),
	jQuery("#body_options_257 form.dropplayer-list #picker_filt_name").appendTo("#body_options_257 td.addsearch"),
	jQuery("#body_options_257 form.dropplayer-list table #picker").appendTo("#body_options_257 .leftV td.selectbox div"),
	jQuery("#body_options_257 form.dropplayer-list table #destination_list").appendTo("#body_options_257 .rightV td.selectbox"),
	jQuery('#body_options_257 form.dropplayer-list input[name="add_to_list"]').appendTo("#body_options_257 .leftV td.AddtoBtn"),
	jQuery("#body_options_257 form.dropplayer-list table + div.mobile-wrap").hide(),
	jQuery("head").append('<style>#body_options_257 div.mobile-wrap .report td, #body_options_257 form.dropplayer-list td{text-align:center}#body_options_257 form.dropplayer-list td[width="175px"]{text-align:left}#body_options_257 #container-wrap .report td select{max-height:270px;vertical-align:middle}#body_options_257 .two_column_layout .mobile-wrap select{width:100%}</style>')
} catch (e) {}
function doTableScrollShadow() {
	var e = jQuery(".hz-table-wrap").width();
	jQuery(".hz-main-table").width(),
	jQuery(".fixed-side").width();
	jQuery(".hz-main-table").parent().on("scroll", function(t) {
		var a = $(".hz-main-table").position(),
			s = $(".hz-table-wrap").scrollLeft(),
			l = $(".hz-clone").width();
		a.left > 8 ? $(".fixed-side").addClass("hz-hide-shadow") : $(".fixed-side").removeClass("hz-hide-shadow"),
		s + e >= l - 2 ? $(".shadow-right").addClass("hz-hide-shadow") : $(".shadow-right").removeClass("hz-hide-shadow")
	})
}
function doTableScroll(e, t) {
	if (!document.getElementById(t))
		return !1;
	switch (jQuery("#" + t + " div.mobile-wrap table:first").addClass("hz-main-table").wrap('<div class="hz-table-wrap">'), e) {
	case 0:
	case 3:
		jQuery("#" + t + " div.mobile-wrap .hz-table-wrap").closest("div.mobile-wrap").addClass("hz-table-scroll"),
		jQuery("#" + t + " div.mobile-wrap table tr:first").wrap("<thead></thead>"),
		jQuery("#" + t + " div.mobile-wrap table tr:first th:first").addClass("fixed-side hz-hide-shadow"),
		jQuery("#" + t + " div.mobile-wrap table thead").nextUntil("table").wrapAll("<tbody>"),
		jQuery("#" + t + " div.mobile-wrap table thead").unwrap(),
		jQuery("#" + t + " .hz-table-scroll tbody td:first-of-type").wrapInner('<th class="fixed-side hz-hide-shadow"></th>'),
		jQuery("#" + t + " tbody .fixed-side").unwrap(),
		jQuery("#" + t + " div.mobile-wrap table tbody th.lh_overall_franchise").addClass("fixed-side hz-hide-shadow");
		break;
	case 1:
		jQuery("#" + t + " div.mobile-wrap table tr.weeklypointtotals").remove(),
		jQuery("#" + t + " div.mobile-wrap .hz-table-wrap").closest("div.mobile-wrap").addClass("hz-table-scroll fx-dbl-tbl"),
		jQuery("#" + t + " div.mobile-wrap table tr:first").wrap("<thead></thead>"),
		jQuery("#" + t + " div.mobile-wrap table tr:first th:first").addClass("fixed-side fx-dbl hz-hide-shadow"),
		jQuery("#" + t + " div.mobile-wrap table thead").nextUntil("table").wrapAll("<tbody>"),
		jQuery("#" + t + " div.mobile-wrap table thead").unwrap(),
		jQuery("#" + t + " .hz-table-scroll tbody td:first-of-type").wrapInner('<th class="fixed-side fx-dbl hz-hide-shadow"></th>'),
		jQuery("#" + t + " tbody .fixed-side").unwrap(),
		jQuery("#" + t + " div.mobile-wrap table .player").each(function() {
			$(this).prev("th").append(this)
		}),
		jQuery(".fixed-side").find(".player").contents().unwrap();
		break;
	case 2:
		jQuery("#" + t + " div.mobile-wrap .hz-table-wrap").closest("div.mobile-wrap").addClass("hz-table-scroll fx-dbl-tbl"),
		jQuery("#" + t + " div.mobile-wrap table tr:first").wrap("<thead></thead>"),
		jQuery("#" + t + " div.mobile-wrap table tbody tr th:first-of-type").addClass("fixed-side fx-dbl hz-hide-shadow"),
		jQuery("#" + t + " div.mobile-wrap table thead").nextUntil("table").wrapAll("<tbody>"),
		jQuery("#" + t + " div.mobile-wrap table thead").unwrap()
	}
	jQuery("#" + t + " .hz-main-table").clone(!0).appendTo("#" + t + " .hz-table-scroll").addClass("hz-clone"),
	jQuery(".hz-clone").each(function() {
		$(this).clone(!0).appendTo($(this).parent()).addClass("hz_table_remove")
	}),
	jQuery(".hz-clone td+td:last-of-type,.hz-clone th+th:last-of-type").addClass("shadow-right hz-hide-shadow"),
	jQuery(".hz_table_remove tbody,.hz_table_remove thead").html(""),
	jQuery(document).ready(function() {
		doTableScrollShadow()
	})
}
if (jQuery('#body_top .report td.status:contains("Free Agent"),#options_236 .report td:contains("Free Agent"),#options_08 .report td.status:contains("Free Agent")').addClass("is-freeagent"), function(e, t, a, s) {
	/Trident\/[567]\b/.test(navigator.userAgent) && e.addEventListener("DOMContentLoaded", function() {
		[].forEach.call(e.querySelectorAll("use"), function(t) {
			var s = t.parentNode,
				l = t.getAttribute("xlink:href").split("#"),
				o = l[0],
				r = l[1],
				i = a[o] = a[o] || new XMLHttpRequest;
			i.s || (i.s = [], i.open("GET", o), i.onload = function() {
				var t = e.createElement("x"),
					a = i.s;
				t.innerHTML = i.responseText,
				i.onload = function() {
					a.splice(0).map(function(e) {
						var a = t.querySelector("#" + e[2]);
						a && e[0].replaceChild(a.cloneNode(!0), e[1])
					})
				},
				i.onload()
			}, i.send()),
			i.s.push([s, t, r]),
			i.responseText && i.onload()
		})
	})
}(document, navigator, {}), jQuery("head").append('<style>#body_add_drop table.table3 input[name="BBID_AMT"]{width:40px;min-width:auto}#body_add_drop table td table.table3 td{width:50%}.cal-event-desc li:before{content:"\\f005";font-family:FontAwesome;display:inline-block;width:16px}.cal-wrap{display:none}#calendar{width:100%;display:grid;grid-template-columns:repeat(7,1fr)}#calendar tr,#calendar tbody{grid-column:1 / -1;display:grid;grid-template-columns:repeat(7,1fr);width:100%}#calendar caption{grid-column:1 / -1;margin-bottom:60px}#calendar td,#calendar th{box-sizing:border-box}#calendar .weekdays th{text-align:center;text-transform:uppercase}#calendar td{display:flex;flex-direction:column}#calendar .day{position:relative}#calendar .month_header{position:relative;font-size:20pt}#calendar .month_header th{position:absolute;left:0;right:0;font-size:24pt;top:-52px;line-height:40px}#calendar .month_header th a{position:absolute;text-decoration:none;font-size:0;color:transparent}#calendar .month_header th a[title="Previous Month"]{left:20px}#calendar .month_header th a[title="Next Month"]{right:20px}#calendar .month_header th a[title="Next Month"]:before,#calendar .month_header th a[title="Previous Month"]:before{font-family:FontAwesome;position:absolute;top:0;font-size:30px;cursor:pointer}#calendar .month_header th a[title="Next Month"]:before{content:"\\f054";right:-10px}#calendar .month_header th a[title="Previous Month"]:before{content:"\\f053";left:-10px}#calendar .date{text-align:center;margin-bottom:5px;width:30px;height:30px;line-height:30px;border-radius:50%;flex:0 0 auto;align-self:flex-end;font-weight:700}#calendar .date a{position:absolute;left:2px;top:2px}.cal-event{flex:0 0 auto;font-size:13px;text-decoration:none;margin:2px 0}.cal-event-desc{padding:2px}#calendar td{border-style:solid;border-left-width:1px;border-bottom-width:1px;border-top:0;border-right-width:0}@media(max-width: 768px){.cal-wrap{display:block}.scoll-div{height:350px}#calendar .weekdays,#calendar .other-month{display:none}#calendar,#calendar tr,#calendar tbody{grid-template-columns:1fr}#calendar tr{grid-column:1 / 2}#calendar .date{align-self:flex-start}#calendar .date a{right:2px;left:auto}#calendar td.first-td{border-style:solid;border-top-width:1px}#calendar td{border-right-width:1px}}</style>'), jQuery("#monthly_calendar").attr("id", "calendar"), jQuery("#calendar").parent("div").addClass("scoll-div"), jQuery("#calendar .day_of_week_header").attr("class", "weekdays"), jQuery("#calendar .weekdays th").attr("scope", "col"), jQuery("#calendar tr.oddtablerow,#calendar tr.eventablerow").removeClass("eventablerow").addClass("dayrows oddtablerow"), $("#calendar .dayrows td").hasClass("today") ? $("#calendar .dayrows td").addClass("other-month") : $("#calendar .dayrows td").attr("class", "other-month"), jQuery('#calendar .dayrows td.other-month:has("div.calendarday")').removeClass("other-month").addClass("day"), jQuery("#calendar td.day:first").addClass("first-td"), jQuery("#calendar td.day").removeAttr("valign"), jQuery("#calendar div.calendarday").addClass("date"), jQuery("#calendar .day ul li").wrap('<div class="cal-event"><div class="cal-event-desc"></div></div>'), jQuery("#calendar .day .cal-event").unwrap(), jQuery("#calendar .day .cal-event-desc li").css("list-style", "none"), jQuery("#calendar .date").html(function(e, t) {
	return t.replace(/&nbsp;/g, "")
}), jQuery("#calendar .month_header th:last-of-type").remove(), jQuery("#calendar .month_header th").html(function(e, t) {
	return t.replace("Jan", "JANUARY").replace("Feb", "FEBRUARY").replace("Mar", "MARCH").replace("Apr", "APRIL").replace("May", "MAY").replace("Jun", "JUNE").replace("Jul", "JULY").replace("Aug", "AUGUST").replace("Sep", "SEPTEMBER").replace("Oct", "OCTOBER").replace("Nov", "NOVEMBER").replace("Dec", "DECEMBER")
}), jQuery("#calendar .day:not(:has(div.cal-event))").each(function(e) {
	$(this).append('<div class="cal-event"><div class="cal-event-desc" style="font-style:italic"><li style="list-style:none">No Events Today</li></div></div>')
}), jQuery(".calendarday.date a").html('<i class="fa fa-plus-square" aria-hidden="true"></i>'), jQuery("#body_options_123 h3.h3-menu").remove(), jQuery.get(baseURLDynamic + "/" + year + "/options?L=" + league_id + "&O=123", function(e) {
	jQuery("#monthly_events ul li").wrap('<div class="cal-event"><div class="cal-event-desc"></div></div>'),
	jQuery('<div class="mobile-wrap cal-wrap"><table class="report" id="monthly_events" align="center" cellspacing="1"><caption><span>Todays Calendar Events</span></caption><tbody><tr class="oddtablerow"><td class="cal_append"></td></tr></tbody></table></div>').insertBefore(jQuery("#calendar").closest("div.mobile-wrap")),
	jQuery(e).find("#monthly_calendar td.today ul").appendTo("#monthly_events td.cal_append"),
	jQuery("#monthly_events ul li").wrap('<div class="cal-event"><div class="cal-event-desc"></div></div>'),
	jQuery("#monthly_events .cal-event").unwrap(),
	jQuery("#monthly_events .cal-event-desc li").css("list-style", "none"),
	jQuery("#monthly_events .cal_append:empty").append('<div class="cal-event"><div class="cal-event-desc" style="font-style:italic"><li style="list-style:none">No Events Today</li></div></div>'),
	jQuery("#calendar,#monthly_calendar").css("visibility", "visible"),
	jQuery('.cal-event li a[title|="Delete This Calendar Event"]').parent("li").addClass("remove_char"),
	jQuery(".remove_char").each(function(e, t) {
		var a = $(this),
			s = a.html().replace(/\(|\)/g, "");
		a.html(s)
	}),
	jQuery(".cal-event-desc .remove_char a").html('<i style="color:#da3636" class="fa fa-times-circle" aria-hidden="true"></i>')
}), jQuery("#body_options_236 .nocaption,#body_top .nocaption,#body_options_08 .nocaption").prepend("<caption><span>Top Players</span></caption>").removeClass("nocaption"), jQuery("#body_depth_chart #depth_chart").has('caption span:contains("NFL Depth Chart")').attr("id", "depth_chart_grid"), $(window).width() < 890 && (doTableScroll(1, "body_options_08"), doTableScroll(1, "body_options_236"), doTableScroll(1, "body_top"), doTableScroll(0, "body_options_31")), doTableScroll(0, "body_options_170"), doTableScroll(0, "body_options_93"), doTableScroll(2, "depth_chart_grid"), doTableScroll(0, "body_options_171"), jQuery("th.fixed-side").has("img.lh_franchise_img , img.franchiseicon").addClass("has-ficon"), jQuery("#body_options_170 .report.hz-main-table.hz-clone td").html("<select><option>None</option></select>"), jQuery("#body_options_93 .report.hz-main-table.hz-clone td").html('<input type="checkbox">'), jQuery("head").append('<style>.hz-table-scroll{position:relative;overflow:hidden;white-space:nowrap}.hz-table-wrap{width:100%;overflow:auto}.hz-table-scroll table{padding-bottom:10px;width:100%;margin:auto;border-collapse:separate;border-spacing:0}.hz-main-table caption,.hz-main-table .fixed-side,.hz-clone th,.hz-clone td{visibility:hidden}.hz_table_remove{padding:0;margin:0;background:none;box-shadow:none;border:0;background-image:none}.hz-clone.hz_table_remove caption,.hz-clone .fixed-side{visibility:visible;pointer-events:auto}.fixed-side{width:100px;padding:3px 5px}.fixed-side img.franchiseicon{max-width:100px;min-width:auto!important}.hz-clone{position:absolute;top:10px;left:10px;pointer-events:none}.fixed-side .franchiseicon,.fixed-side a{max-width:none;height:auto}.fixed-side.fx-dbl{text-align:left;width:1px}.fixed-side a{display:inline}.hz-table-scroll thead th.fixed-side{text-align:center!important}.fixed-side+td,.fixed-side+th{padding-left:6px}#body_options_93 .hz-main-table tbody tr:first-of-type th{font-size:11px}#body_options_93 .hz-main-table thead th{white-space:normal;min-width:100px}#depth_chart_grid thead th,#depth_chart_grid tbody tr:first-of-type th{text-align:left!important}#depth_chart_grid .report.hz-main-table td:nth-child(2){text-align:left}.mobile-wrap.hz-table-scroll{overflow:hidden}.fixed-side{position:sticky}.hz-hide-shadow:after{background-image:none!important}#options_236 th.fixed-side a,#options_08 th.fixed-side a,#body_top th.fixed-side a{padding-left:3px}#options_236 thead .fixed-side,#options_08 thead .fixed-side,#body_top thead .fixed-side{text-align:left!important}.hz-main-table tbody th.fixed-side{text-align:left}.hz-main-table tbody tr.average th.fixed-side{text-align:center}#body_options_93 .hz-main-table tbody tr:first-of-type th.fixed-side{text-align:center}.shadow-right{position:sticky;right:0;visibility:visible}.shadow-right:after{content:"";position:absolute;top:0;width:20px;height:100%;visibility:visible;background:none;right:0;background-image:linear-gradient(to right,rgba(0,0,0,0),rgba(0,0,0,.3))}.hz_table_remove_shadow .shadow-right.hz-hide-shadow:after{display:none}.fixed-side:after{content:"";position:absolute;top:0;width:20px;height:100%}.hz-clone .fixed-side:after{background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0));right:-20px}.hz-main-table tbody th.fixed-side.has-ficon{text-align:center}</style>'), jQuery("#depth_chart").has('th:contains("Status")').addClass("depth_chart_page"), jQuery('.depth_chart_page th:contains("Depth")').addClass("depth"), jQuery('.depth_chart_page th:contains("Status")').addClass("status"), jQuery("#body_options_166 #container-wrap .homepagemessage,#body_options_166 #container-wrap").css("display", "block"), jQuery("#body_options_84 #container-wrap select").css("width", "50%"), jQuery("#body_options_84 #container-wrap div.mobile-wrap td,#body_options_145 div.mobile-wrap td,#body_options_83 div.mobile-wrap td,#body_options_168 div.mobile-wrap td").css({
	width: "50%",
	"text-align": "center"
}), jQuery("#MFLBoxWrapper table.MFLGameTable").removeAttr("onclick title"), jQuery("#body_options_05 div.mobile-wrap:first table").has("tr.newposition").parent().addClass("filter-div-show"), jQuery("#body_options_05 div.mobile-wrap:first").not(".filter-div-show").html("<h3>You have no trade offers to or from</h3>"), jQuery("#body_options_05 div.mobile-wrap.filter-div-show table").has("tr.newposition").addClass("filter-table-show"), jQuery("#body_options_05 div.mobile-wrap.filter-div-show table:first").not(".filter-table-show").html("<table><caption><span>TRADES OFFERED BY YOU (NONE)</span></caption></table>"), jQuery("#body_options_05 div.mobile-wrap.filter-div-show table:last").not(".filter-table-show").html("<table><caption><span>TRADES OFFERED TO YOU (NONE)</span></caption></table>"), jQuery("#body_options_67 div.mobile-wrap:first table").has("tr.oddtablerow").parent().addClass("filter-div-show"), jQuery("#body_options_67 div.mobile-wrap:first").not(".filter-div-show").html("<h3>There are no transactions to delete</h3>"), jQuery("#body_options_03 div.mobile-wrap:first table").has("tr.oddtablerow").parent().addClass("filter-div-show"), jQuery("#body_options_03 div.mobile-wrap:first").not(".filter-div-show").html("<h3>There are no transactions</h3>"), /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	var style = document.createElement("style");
	document.head.appendChild(style),
	style.sheet.insertRule(".hz-table-scroll table{padding-bottom:0!important}")
}
if (jQuery("#MFLBoxWrapper,#tabmenu-wrap,#container-wrap").css("display", "block"), void 0 === MFLEnableMedia)
	var MFLEnableMedia = !0;
if (void 0 === MFLRememberModuleStates)
	var MFLRememberModuleStates = !0;
function doCustomCollapseAll(e) {
	var t = 0;
	jQuery("body #myfantasyleague_tabs").each(function() {
		e ? (jQuery(this).find(".toggle_tabs:eq(0)").attr("style", "display:none"), jQuery(this).find("tbody:eq(0)").attr("style", "display:none"), MFLRememberModuleStates && localStorage.setItem("moduleCollapse_" + t + "_" + league_id, "true")) : (jQuery(this).find(".toggle_tabs:eq(0)").removeAttr("style"), jQuery(this).find("tbody:eq(0)").removeAttr("style"), MFLRememberModuleStates && localStorage.removeItem("moduleCollapse_" + t + "_" + league_id)),
		t++
	}),
	jQuery(".mobile-wrap table.homepagemodule.report").each(function() {
		void 0 === jQuery(this).parent().attr("id") && "homepagetabcontent" !== jQuery(this).parent().parent().attr("class") && (e ? (jQuery(this).find("tbody:eq(0)").attr("style", "display:none"), MFLRememberModuleStates && localStorage.setItem("moduleCollapse_" + t + "_" + league_id, "true")) : (jQuery(this).find("tbody:eq(0)").removeAttr("style"), MFLRememberModuleStates && localStorage.removeItem("moduleCollapse_" + t + "_" + league_id)), t++)
	}),
	e ? (jQuery(".custom_expand").each(function() {
		jQuery(this).removeAttr("style")
	}), jQuery(".custom_collapse").each(function() {
		jQuery(this).attr("style", "display:none")
	})) : (jQuery(".custom_expand").each(function() {
		jQuery(this).attr("style", "display:none")
	}), jQuery(".custom_collapse").each(function() {
		jQuery(this).removeAttr("style")
	}))
}
function doAppendIcon() {
	MFLEnableMedia && jQuery("head").append("<style>@media only screen and (max-width:48.000em) {.plus-toggle-main{right:52px;top:22.5px;}#expandLink,#collapseLink{ right:40px!important;height:45px!important}} label[for='sub100'] + #homepagetabs{padding-right:40px;padding-right:2.500rem} @media only screen and (max-width:48.000em) { label[for='sub100'] + #homepagetabs{padding-right:0}}</style>");
	var e = "display:inline",
		t = "display:none";
	MFLRememberModuleStates && "true" === localStorage.getItem("moduleExpandAll_" + league_id) && (e = "display:none", t = "display:inline"),
	jQuery("#tab1").parent().append("<span class='all-module-expand-collapse'><a title='Collapse Tabs' id='collapseLink' class='collapseLink' style='cursor:pointer;position:absolute;top:0;right: 0;width:50px;width:3.125rem;height:100%;text-align:center;" + e + ';\'  onclick=\'doCustomCollapseAll(true);jQuery("#expandLink").attr("style","cursor: pointer;position: absolute;top:0;right:0;width:50px;width:3.125rem;height: 100%;text-align: center;display:inline");jQuery(".collapseLink").attr("style","cursor: pointer;position: absolute;top:0;right: 0;width:50px;width:3.125rem;height: 100%;text-align: center;display:none");localStorage.setItem("moduleExpandAll_' + league_id + "\",\"true\");'></a><a title='Expand Tabs' id='expandLink' class='expandLink' style='cursor:pointer;position: absolute;top:0;right:0;width:50px;width:3.125rem;height:100%;text-align:center;" + t + ';\' onclick=\'doCustomCollapseAll(false);jQuery("#expandLink").attr("style","cursor: pointer;position: absolute;top:0;right:0;width:50px;width:3.125rem;height:100%;text-align:center;display:none");jQuery(".collapseLink").attr("style","cursor: pointer;position:absolute;top:0;right:0;width:50px;width:3.125rem;height:100%;text-align:center;display:inline");localStorage.removeItem("moduleExpandAll_' + league_id + "\");'></a><span class='plus-toggle-main'><span class='toggle-btn-main'></span></span></span>")
}
function doCustomCollapseHPM(e) {
	var t = 0;
	if (e)
		var a = "display:none",
			s = "";
	else
		a = "",
		s = "display:none";
	jQuery("body #myfantasyleague_tabs").each(function() {
		e && (jQuery(this).find(".toggle_tabs:eq(0)").attr("style", "display:none"), jQuery(this).find("tbody:eq(0)").attr("style", "display:none")),
		jQuery(this).find("caption").prepend('<span title="Expand Report" style="' + s + '" class="module_expand custom_expand"   id="myExpand_' + t + '"   onclick="jQuery(\'#myExpand_' + t + "').parents('#myfantasyleague_tabs').find('.toggle_tabs:eq(0)').removeAttr('style');jQuery('#myExpand_" + t + "').parents('table.homepagemodule').find('tbody:eq(0)').removeAttr('style');jQuery('#myExpand_" + t + "').attr('style','display:none'); jQuery('#myCollapse_" + t + "').removeAttr('style');localStorage.removeItem('moduleCollapse_" + t + "_" + league_id + '\');"></span><span title="Collapse Report" style="' + a + '" class="module_expand custom_collapse" id="myCollapse_' + t + '" onclick="jQuery(\'#myCollapse_' + t + "').parents('#myfantasyleague_tabs').find('.toggle_tabs:eq(0)').attr('style','display:none');jQuery('#myCollapse_" + t + "').parents('table.homepagemodule').find('tbody:eq(0)').attr('style','display:none');jQuery('#myExpand_" + t + "').removeAttr('style');jQuery('#myCollapse_" + t + "').attr('style','display:none');localStorage.setItem('moduleCollapse_" + t + "_" + league_id + '\',\'true\');"></span><span class="plus-toggle"><span class="toggle-btn"></span></span>'),
		t++
	}),
	jQuery(".mobile-wrap table.homepagemodule.report").each(function() {
		void 0 === jQuery(this).parent().attr("id") && "homepagetabcontent" !== jQuery(this).parent().parent().attr("class") && (e && jQuery(this).find("tbody:eq(0)").attr("style", "display:none"), jQuery(this).find("caption").prepend('<span title="Expand Report" style="' + s + '" class="module_expand custom_expand"   id="myExpand_' + t + '"   onclick="jQuery(\'#myExpand_' + t + "').parents('table.homepagemodule').find('tbody:eq(0)').removeAttr('style');jQuery('#myExpand_" + t + "').attr('style','display:none'); jQuery('#myCollapse_" + t + "').removeAttr('style');localStorage.removeItem('moduleCollapse_" + t + "_" + league_id + '\');"></span><span title="Collapse Report" style="' + a + '" class="module_expand custom_collapse" id="myCollapse_' + t + '" onclick="jQuery(\'#myCollapse_' + t + "').parents('table.homepagemodule').find('tbody:eq(0)').attr('style','display:none');jQuery('#myExpand_" + t + "').removeAttr('style');jQuery('#myCollapse_" + t + "').attr('style','display:none'); localStorage.setItem('moduleCollapse_" + t + "_" + league_id + '\',\'true\');"></span><span class="plus-toggle"><span class="toggle-btn"></span></span>'), t++)
	}),
	MFLRememberModuleStates && doCollapseModuleStates(),
	doAppendIcon()
}
function doCollapseModuleStates() {
	var e = 0;
	jQuery("body #myfantasyleague_tabs").each(function() {
		"true" === localStorage.getItem("moduleCollapse_" + e + "_" + league_id) && (jQuery(this).find(".toggle_tabs:eq(0)").attr("style", "display:none"), jQuery(this).find("tbody:eq(0)").attr("style", "display:none"), jQuery("#myExpand_" + e).removeAttr("style"), jQuery("#myCollapse_" + e).attr("style", "display:none")),
		e++
	}),
	jQuery(".mobile-wrap table.homepagemodule.report").each(function() {
		void 0 === jQuery(this).parent().attr("id") && "homepagetabcontent" !== jQuery(this).parent().parent().attr("class") && ("true" === localStorage.getItem("moduleCollapse_" + e + "_" + league_id) && (jQuery(this).find("tbody:eq(0)").attr("style", "display:none"), jQuery("#myExpand_" + e).removeAttr("style"), jQuery("#myCollapse_" + e).attr("style", "display:none")), e++)
	})
}
if (document.getElementById("body_home") && -1 === location.href.indexOf("MODULE=MESSAGE") && -1 === location.href.indexOf("/message") && -1 === location.href.indexOf("SEQNO=") && jQuery("head").append('<style>#home caption span a{position:relative}span.custom_collapse:before,span.custom_expand:before{content:"";position:absolute;width:100%;height:30px;left:0;visibility:visible}span.custom_collapse:before,span.custom_expand:before{z-index:1}span.plus-toggle{right:8px;margin:0;position:absolute;margin-top:10px;width:22px}.plus-toggle span::before,.plus-toggle span::after{content:"";display:block;position:absolute;width:.2rem;border-radius:1.4rem;height:1rem;top:0;bottom:0;left:0;right:0;margin:auto;-webkit-transition:all .3s ease;transition:all .3s ease;z-index:0}.plus-toggle span::after{width:1rem;height:.2rem}.custom_expand[style="display:none"] + span + .plus-toggle span::after{-webkit-transform:rotate(180deg);transform:rotate(180deg);opacity:0}.custom_expand[style="display:none"] + span + .plus-toggle span::before{-webkit-transform:rotate(90deg);transform:rotate(90deg);width:.25rem}#collapseLink.collapseLink,#expandLink.expandLink{z-index:1}.plus-toggle-main{right:5px;position:absolute;width:26px;height:26px;top:50%;-ms-transform:translateY(-50%);transform:translateY(-50%);background:#fff;border-radius:50%}.toggle-btn-main::before,.toggle-btn-main::after{content:"";display:block;position:absolute;width:.2rem;border-radius:1.4rem;height:1rem;top:0;bottom:0;left:0;right:0;margin:auto;-webkit-transition:all .3s ease;transition:all .3s ease;z-index:0}.toggle-btn-main::after{width:1rem;height:.2rem}#expandLink[style*="display:none"] + .plus-toggle-main span::after{-webkit-transform:rotate(180deg);transform:rotate(180deg);opacity:0}#expandLink[style*="display:none"] + .plus-toggle-main span::before{-webkit-transform:rotate(90deg);transform:rotate(90deg);width:.25rem}</style>'), jQuery(".toggle-btn").text(""), setTimeout(function() {
	jQuery(".toggle-btn").text("")
}, 1e3), jQuery("#waiver_request_list").addClass("homepagemodule"), jQuery(".playoffbracket.homepagemodule").addClass("report"), jQuery("#waiver_request_list caption span").html("Current Waiver Claims"), void 0 === moduleExpand)
	var moduleExpand = "No";
"No" === moduleExpand && document.getElementById("body_home") && -1 === location.href.indexOf("MODULE=MESSAGE") && -1 === location.href.indexOf("/message") && -1 === location.href.indexOf("SEQNO=") && doCustomCollapseHPM(!1),
setTimeout(function() {
	if (void 0 === e)
		var e = "No";
	"No" === e && document.getElementById("body_home") && -1 === location.href.indexOf("MODULE=MESSAGE") && -1 === location.href.indexOf("/message") && -1 === location.href.indexOf("SEQNO=") && doCustomCollapseHPM(!1)
}, 10),
jQuery("head").append('<style>#body_ajax_ls .ls_starters td.reallysmall + td + td + td.ls_player_stats{display:none!important}#body_ajax_ls h3.warning,#body_ajax_ls h3.h3-menu,#body_ajax_ls h3.warning+h3{visibility:visible}#body_ajax_ls #other_games td.ls_og_cell{font-size:13px}#body_ajax_ls #nfl_games td.ls_box_possession:after{content:"";background-size:12px 12px;height:12px;width:12px;position:absolute;margin-left:5px;top:50%;transform:translateY(-50%)}#body_ajax_ls #nfl_games td.ls_box_possession.ls_has_ball+td,#body_ajax_ls #nfl_games td.ls_box_possession.ls_in_redzone+td{width:90px}#body_ajax_ls #nfl_games td.ls_box_possession.ls_has_ball,#body_ajax_ls #nfl_games td.ls_box_possession.ls_in_redzone{width:42px}#body_ajax_ls #nfl_games td.ls_box_possession.ls_in_redzone:after{background-image:url(//www.nitrografixx.com/MFL-Popups/goal-post.svg)}#body_ajax_ls #nfl_games td.ls_box_possession.ls_has_ball:after{background-image:url(//www.nitrografixx.com/MFL-Popups/football.svg)}#body_ajax_ls #nfl_games div.ls_other_game td{padding:1px 2px}#nfl_games td[style="border:none;"]:last-of-type{padding:0!important}div.ls_team_name{font-size:20px!important;line-height:50px}.ls-modal{display:none;position:fixed;z-index:99999;padding-top:30px;left:0;top:0;width:100%;height:100%;overflow:auto}.ls-modal-content{position:relative;margin:auto;padding:0;width:96%;-webkit-animation-name:animatetop;-webkit-animation-duration:.4s;animation-name:animatetop;animation-duration:.4s;margin-bottom:30px;max-width:400px;border-radius:3px}#ls-modal-content{max-height:500px;overflow-x:auto}@-webkit-keyframes animatetop{from{top:-300px;opacity:0}to{top:0;opacity:1}}@keyframes animatetop{from{top:-300px;opacity:0}to{top:0;opacity:1}}.ls-modal-header{padding:3px;background:none}.ls-modal-header h2{text-align:left;margin:0;padding:0;padding-left:5px;text-transform:uppercase}.ls-modal-header .close{font-size:20px;font-weight:700;position:absolute;right:5px;top:5px;text-align:center;border-radius:3px;padding:0;height:22px;width:22px;line-height:22px}.ls-modal-header .close:hover,.ls-modal-header .close:focus{text-decoration:none;cursor:pointer}.ls-modal-body{padding:0 2px;font-size:13px;padding-bottom:1px}#ls-modal-content li,#ls-modal-content ul{margin:0;padding:0;list-style:none}#ls-modal-content .ls-popup-position-li{font-weight:700;font-size:14px;padding-left:5px}#ls-modal-content .ls-popup-player-li{position:relative;padding-left:8px}#ls-modal-content .ls-popup-player-li:last-child{border:0}#ls-modal-content .ls-popup-stats{font-style:italic;display:block;font-size:11px;line-height:11px;font-weight:400;padding:2px 0;padding-left:3px;max-width:350px}#ls-modal-content span.ls-popup-points{text-indent:0;display:inline;position:absolute;top:50%;-ms-transform:translateY(-50%);transform:translateY(-50%);right:5px;font-weight:700;font-size:13px;border:0}.ls-explain-points-total::before{content:"Total Points :";padding-right:5px}.ls-explain-points-li::before{content:"\\f005";font-family:FontAwesome;padding-right:3px;margin-left:-1.5em}tr[onclick^="ls_nfl_stats_popup"]{cursor:pointer}div.mobile-wrap.ls-boxscore{padding:0 10px;padding-bottom:5px}.ls_scroller{padding:10px 0;padding-bottom:5px;overflow-x:auto;-webkit-overflow-scrolling:touch}#ls-modal-content span.ls-popup-text{font-style:italic;font-weight:700}.ls-popup-text::before,.ls-popup-icon-wrapper::before{content:"-";padding:0 2px}#ls-modal-content img.ls-popup-icon{max-height:16px;max-width:80px}#body_ajax_ls table#roster_away,#body_ajax_ls table#roster_home{table-layout:fixed}#body_ajax_ls .ls-matchup td.ls_projections,#body_ajax_ls th.ls_projections{width:100px}#body_ajax_ls td.ls_marquee_value{padding-left:0;padding-right:0}#body_ajax_ls .ls-matchup th:last-of-type,#body_ajax_ls .ls-matchup td:last-of-type{width:50px}.ls_other_game .ls_projections{cursor:pointer}.ls_pace_box .ls_projected{display:none}.ls-has-bye #LS_TopTableHolder div.mobile-wrap,.ls-has-bye .mobile-wrap.ls-matchup{margin:10px auto;margin-top:0}#body_ajax_ls .ls-has-bye .ls_players_table td.mobile-view:last-of-type{display:table-cell!important}#body_ajax_ls .ls-has-bye .ls-bye-hide,#body_ajax_ls .ls-has-bye .ls_players_table td.mobile-view:first-of-type{display:none!important}#body_ajax_ls .ls-has-bye #LS_TopTableHolder div.mobile-wrap,#body_ajax_ls .ls-has-bye .ls_players_table div.mobile-wrap.ls-matchup{max-width:650px}.ls-has-bye #LS_HomeTeamName div{opacity:1!important}.ls_other_game_bye_hidden{display:none!important}@media only screen and (max-width: 48em){.ls_players_table td.mobile-view:last-of-type{display:none}#LS_HomeTeamName div{opacity:.3}}@media only screen and (min-width: 48em){#body_ajax_ls .ls_players_table td.mobile-view:last-of-type,#body_ajax_ls .ls_players_table td.mobile-view:first-of-type{display:table-cell!important}#LS_HomeTeamName div,#LS_AwayTeamName div{opacity:1!important}}@media only screen and (max-width:430px){#ls-modal-content .ls-popup-stats{max-width:280px}}@media only screen and (max-width:360px){#ls-modal-content .ls-popup-stats{max-width:200px}}@media only screen and (max-width:320px){#ls-modal-content .ls-popup-stats{max-width:180px}}@media only screen and (max-height:600px) and (orientation:landscape){#ls-modal-content{max-height:460px}}@media only screen and (max-height:500px) and (orientation:landscape){#ls-modal-content{max-height:360px}}@media only screen and (max-height:450px) and (orientation:landscape){#ls-modal-content{max-height:310px}}@media only screen and (max-height:400px) and (orientation:landscape){#ls-modal-content{max-height:260px}}@media only screen and (max-height:350px) and (orientation:landscape){#ls-modal-content{max-height:210px}}@media only screen and (max-height:300px) and (orientation:landscape){#ls-modal-content{max-height:160px}}@media only screen and (max-height:250px) and (orientation:landscape){#ls-modal-content{max-height:110px}}@media only screen and (max-height:200px) and (orientation:landscape){#ls-modal-content{max-height:150px}}@media only screen and (max-width:70em){#body_ajax_ls .ls-matchup td.ls_projections,#body_ajax_ls th.ls_projections{width:80px}}@media only screen and (max-width:60em){#body_ajax_ls .ls-matchup td.ls_projections,#body_ajax_ls th.ls_projections{width:60px}}@media only screen and (max-width:55em){#body_ajax_ls .ls-matchup td.ls_projections,#body_ajax_ls th.ls_projections{width:40px}}@media only screen and (max-width: 54.25em){#body_ajax_ls .ls-has-bye #LS_TopTableHolder .LS_ScoreboardTitle,#body_ajax_ls .ls-has-bye #LS_TopTableHolder .prmin{display:table-cell}}@media only screen and (max-width:48em){#body_ajax_ls .ls-matchup td.ls_projections,#body_ajax_ls th.ls_projections{width:140px}}@media only screen and (max-width:33em){#body_ajax_ls .ls-matchup td.ls_projections,#body_ajax_ls th.ls_projections{width:80px}}@media only screen and (max-width:30em){#body_ajax_ls .ls-matchup td.ls_projections,#body_ajax_ls th.ls_projections{width:40px}}@media only screen and (max-width: 30em){.ls_pace_legend_title{display:block}#body_ajax_ls .ls-has-bye #LS_TopTableHolder .LS_ScoreboardTitle,#body_ajax_ls .ls-has-bye #LS_TopTableHolder .prmin{font-size:10px}}@media only screen and (max-width: 25em){.ls_projected{display:block}}.hide-overlay{background:none!important}</style>'),
jQuery('div[id*="usmg_ad"],#ajax_ls div[style="margin-bottom:5px;"]').remove(),
jQuery('[src="/ads/ad-live_scoring_js.html"]').remove(),
googletag = null;
var ls_away_id,
	ls_home_id,
	ls_ticker_speed = 200,
	ls_pace_tracker = new Array;
if (void 0 === ls_scoreboardName)
	var ls_scoreboardName = "Live Scoring";
if (void 0 === showTeamName)
	var showTeamName = !0;
if (void 0 === showTeamIcon)
	var showTeamIcon = !0;
if (void 0 === ls_includeProjections)
	var ls_includeProjections = !0;
if (void 0 === ls_includeInjuryStatus)
	var ls_includeInjuryStatus = !0;
if (void 0 === ls_excludeIR)
	var ls_excludeIR = !1;
if (void 0 === ls_excludeTaxi)
	var ls_excludeTaxi = !1;
if (void 0 === ls_orig_proj_when_final)
	var ls_orig_proj_when_final = !1;
if (void 0 === ls_box_abbrev_name_icon)
	var ls_box_abbrev_name_icon = 2;
if (void 0 === ls_popup_abbrev_name_icon)
	var ls_popup_abbrev_name_icon = 0;
if (void 0 === ls_popup_status)
	var ls_popup_status = !1;
if (void 0 === ls_hide_bye_teams)
	var ls_hide_bye_teams = !1;
function ls_scoring_run() {
	jQuery('td div[class^="pfpts"]').prop("title", "Click to View Details"),
	jQuery('td div[class^="game_"]').prop("title", "View NFL Game Boxscore"),
	jQuery('td a[href^="pro_matchup"]').prop("title", "View NFL Game Boxscore"),
	jQuery('td a[href^="player"]').prop("title", "View Player News").parent().addClass("td-first-type"),
	jQuery("#other_games div.ls_other_game").prop("title", "View Match Up"),
	jQuery("td.ls_player_stats").each(function() {
		$(this).closest("tr").find("td.td-first-type").append($(this))
	}),
	jQuery(".ls_player_stats div:empty").html('<span class="ls-no-stats">-</span>'),
	jQuery('#roster_away td:contains("Total"):contains("Points")').parent().addClass("td-totals-row"),
	jQuery('#roster_home td:contains("Total"):contains("Points")').parent().addClass("td-totals-row"),
	jQuery('#roster_away td:contains("Homefield"):contains("Advantage")').parent().addClass("td-totals-row"),
	jQuery('#roster_home td:contains("Homefield"):contains("Advantage")').parent().addClass("td-totals-row"),
	jQuery(".td-totals-row td:first-child").addClass("td-totals"),
	$('input[name="hide_stats"]').is(":checked") && $("#roster_away td, #roster_home td").addClass("td-pad")
}
function ls_hide_projections(e) {
	e.checked ? (jQuery(".ls_projections").attr("style", "display:none"), localStorage.setItem("ls_includeProjections_" + league_id, "1")) : (jQuery(".ls_projections").removeAttr("style"), localStorage.removeItem("ls_includeProjections_" + league_id))
}
function ls_hide_nfl_boxscore(e) {
	e.checked ? (jQuery(".ls-nfl-boxscore").slideToggle("500"), localStorage.setItem("ls_includeNFLBox_" + league_id, "1")) : (jQuery(".ls-nfl-boxscore").slideToggle("500"), localStorage.removeItem("ls_includeNFLBox_" + league_id))
}
function ls_get_player_projection(e) {
	try {
		return 0 === ls_nfl_games[ls_player[e].nfl_team].secs_left ? void 0 === ls_player[e] || isNaN(ls_player[e].points) ? void 0 === ls_projections["pid_" + e] ? {
			pace: 0,
			points: 0,
			projected: 0,
			formatted: format_points(0),
			game_sec_remaining: ls_nfl_games[ls_player[e].nfl_team].secs_left
		} : {
			pace: 0,
			points: 0,
			projected: parseFloat(ls_projections["pid_" + e]),
			formatted: format_points(0),
			game_sec_remaining: ls_nfl_games[ls_player[e].nfl_team].secs_left
		} : void 0 === ls_projections["pid_" + e] ? {
			pace: ls_player[e].points,
			points: ls_player[e].points,
			projected: 0,
			formatted: format_points(ls_player[e].points),
			game_sec_remaining: ls_nfl_games[ls_player[e].nfl_team].secs_left
		} : {
			pace: ls_player[e].points,
			points: ls_player[e].points,
			projected: parseFloat(ls_projections["pid_" + e]),
			formatted: format_points(ls_player[e].points),
			game_sec_remaining: ls_nfl_games[ls_player[e].nfl_team].secs_left
		} : 3600 === ls_nfl_games[ls_player[e].nfl_team].secs_left ? void 0 === ls_projections["pid_" + e] ? {
			pace: 0,
			points: 0,
			projected: 0,
			formatted: "",
			game_sec_remaining: ls_nfl_games[ls_player[e].nfl_team].secs_left
		} : {
			pace: parseFloat(ls_projections["pid_" + e]),
			points: 0,
			projected: parseFloat(ls_projections["pid_" + e]),
			formatted: ls_projections["pid_" + e],
			game_sec_remaining: ls_nfl_games[ls_player[e].nfl_team].secs_left
		} : void 0 === ls_projections["pid_" + e] ? {
			pace: ls_player[e].points,
			points: ls_player[e].points - 0,
			projected: ls_player[e].points,
			formatted: format_points(ls_player[e].points),
			game_sec_remaining: ls_nfl_games[ls_player[e].nfl_team].secs_left
		} : {
			pace: ls_player[e].points + parseFloat(ls_projections["pid_" + e]) * (ls_nfl_games[ls_player[e].nfl_team].secs_left / 3600),
			points: ls_player[e].points,
			projected: parseFloat(ls_projections["pid_" + e]),
			formatted: format_points(ls_player[e].points + parseFloat(ls_projections["pid_" + e]) * (ls_nfl_games[ls_player[e].nfl_team].secs_left / 3600)),
			game_sec_remaining: ls_nfl_games[ls_player[e].nfl_team].secs_left
		}
	} catch (e) {
		return {
			pace: 0,
			points: 0,
			projected: 0,
			formatted: "",
			game_sec_remaining: 0
		}
	}
}
function ls_update_injuries() {
	jQuery("#roster_away td:first-child a,#roster_home td:first-child a").each(function() {
		var e = $(this).attr("href").substr(17, 5);
		void 0 !== ls_injuries["pid_" + e] && $(this).parent().append(' (<span class="warning injurystatus" title="' + ls_injuries["pid_" + e].status + '">' + ls_injuries["pid_" + e].code + "</span>)")
	})
}
function ls_update_projections() {
	for (var e in ls_rosters)
		if (ls_rosters.hasOwnProperty(e)) {
			var t = 0,
				a = 0,
				s = 0;
			if (ls_rosters[e].hasOwnProperty("S"))
				for (var l = 0; l < ls_rosters[e].S.length; l++) {
					t += (o = ls_get_player_projection(ls_rosters[e].S[l])).pace,
					a += o.projected,
					o.points,
					s += o.game_sec_remaining,
					ls_orig_proj_when_final && 0 === o.game_sec_remaining ? (jQuery("#ls_pace_pts_" + ls_rosters[e].S[l]).html('<span class="ls_projected" title="Original Projection">' + format_points(parseFloat(o.projected)) + "</span>"), o.pace - o.projected < 0 ? jQuery(".pfpts_" + ls_rosters[e].S[l]).addClass("ls_below_projected") : o.pace - o.projected > 0 && jQuery(".pfpts_" + ls_rosters[e].S[l]).addClass("ls_above_projected")) : o.pace - o.projected < 0 ? jQuery("#ls_pace_pts_" + ls_rosters[e].S[l]).html('<span class="ls_below_projected" title="Original Projection: ' + format_points(parseFloat(o.projected)) + '">' + o.formatted + "</span>") : o.pace - o.projected > 0 ? jQuery("#ls_pace_pts_" + ls_rosters[e].S[l]).html('<span class="ls_above_projected" title="Original Projection: ' + format_points(parseFloat(o.projected)) + '">' + o.formatted + "</span>") : jQuery("#ls_pace_pts_" + ls_rosters[e].S[l]).html('<span class="ls_at_projected" title="Original Projection: ' + format_points(parseFloat(o.projected)) + '">' + o.formatted + "</span>")
				}
			ls_orig_proj_when_final && 0 === s ? (jQuery("#ls_pace_fspts_" + e).html('<span class="ls_projected" title="Original Projection">' + format_points(a) + "</span>"), ls_pace_tracker["fid_" + e] = '<span class="ls_projected" title="Original Projection">' + format_points(a) + "</span>", t - a < 0 ? jQuery(".ogffpts_" + e + ", #ogffpts_" + e + ", #fspts_" + e).addClass("ls_below_projected") : t - a > 0 && jQuery(".ogffpts_" + e + ", #ogffpts_" + e + ", #fspts_" + e).addClass("ls_above_projected")) : t - a < 0 ? (jQuery("#ls_pace_fspts_" + e).html('<span class="ls_below_projected" title="Original Projection: ' + format_points(a) + '">' + format_points(t) + "</span>"), ls_pace_tracker["fid_" + e] = '<span class="ls_below_projected" title="Original Projection: ' + format_points(a) + '">' + format_points(t) + "</span>") : t - a > 0 ? (jQuery("#ls_pace_fspts_" + e).html('<span class="ls_above_projected" title="Original Projection: ' + format_points(a) + '">' + format_points(t) + "</span>"), ls_pace_tracker["fid_" + e] = '<span class="ls_above_projected" title="Original Projection: ' + format_points(a) + '">' + format_points(t) + "</span>") : (jQuery("#ls_pace_fspts_" + e).html('<span class="ls_at_projected" title="Original Projection: ' + format_points(a) + '">' + format_points(t) + "</span>"), ls_pace_tracker["fid_" + e] = '<span class="ls_at_projected" title="Original Projection: ' + format_points(a) + '">' + format_points(t) + "</span>"),
			jQuery("#ls_pace_box_" + e).html(ls_pace_tracker["fid_" + e]);
			t = 0,
			a = 0,
			s = 0;
			if (ls_rosters[e].hasOwnProperty("NS"))
				for (l = 0; l < ls_rosters[e].NS.length; l++) {
					t += (o = ls_get_player_projection(ls_rosters[e].NS[l])).pace,
					a += o.projected,
					o.points,
					s += o.game_sec_remaining,
					ls_orig_proj_when_final && 0 === o.game_sec_remaining ? (jQuery("#ls_pace_pts_" + ls_rosters[e].NS[l]).html('<span class="ls_projected" title="Original Projection">' + format_points(parseFloat(o.projected)) + "</span>"), o.pace - o.projected < 0 ? jQuery(".pfpts_" + ls_rosters[e].NS[l]).addClass("ls_below_projected") : o.pace - o.projected > 0 && jQuery(".pfpts_" + ls_rosters[e].NS[l]).addClass("ls_above_projected")) : o.pace - o.projected < 0 ? jQuery("#ls_pace_pts_" + ls_rosters[e].NS[l]).html('<span class="ls_below_projected" title="Original Projection: ' + format_points(parseFloat(o.projected)) + '">' + o.formatted + "</span>") : o.pace - o.projected > 0 ? jQuery("#ls_pace_pts_" + ls_rosters[e].NS[l]).html('<span class="ls_above_projected" title="Original Projection: ' + format_points(parseFloat(o.projected)) + '">' + o.formatted + "</span>") : jQuery("#ls_pace_pts_" + ls_rosters[e].NS[l]).html('<span class="ls_at_projected" title="Original Projection: ' + format_points(parseFloat(o.projected)) + '">' + o.formatted + "</span>")
				}
			ls_orig_proj_when_final && 0 === s ? (jQuery("#ls_pace_frpts_" + e).html('<span class="ls_projected" title="Original Projection">' + format_points(a) + "</span>"), t - a < 0 ? jQuery("#frpts_" + e).addClass("ls_below_projected") : t - a > 0 && jQuery("#frpts_" + e).addClass("ls_above_projected")) : t - a < 0 ? jQuery("#ls_pace_frpts_" + e).html('<span class="ls_below_projected" title="Original Projection: ' + format_points(a) + '">' + format_points(t) + "</span>") : t - a > 0 ? jQuery("#ls_pace_frpts_" + e).html('<span class="ls_above_projected" title="Original Projection: ' + format_points(a) + '">' + format_points(t) + "</span>") : jQuery("#ls_pace_frpts_" + e).html('<span class="ls_at_projected" title="Original Projection: ' + format_points(a) + '">' + format_points(t) + "</span>");
			t = 0,
			a = 0,
			s = 0;
			if (ls_rosters[e].hasOwnProperty("IR"))
				for (l = 0; l < ls_rosters[e].IR.length; l++) {
					t += (o = ls_get_player_projection(ls_rosters[e].IR[l])).pace,
					a += o.projected,
					o.points,
					s += o.game_sec_remaining,
					ls_orig_proj_when_final && 0 === o.game_sec_remaining ? (jQuery("#ls_pace_pts_" + ls_rosters[e].IR[l]).html('<span class="ls_projected" title="Original Projection">' + format_points(parseFloat(o.projected)) + "</span>"), o.pace - o.projected < 0 ? jQuery(".pfpts_" + ls_rosters[e].IR[l]).addClass("ls_below_projected") : o.pace - o.projected > 0 && jQuery(".pfpts_" + ls_rosters[e].IR[l]).addClass("ls_above_projected")) : o.pace - o.projected < 0 ? jQuery("#ls_pace_pts_" + ls_rosters[e].IR[l]).html('<span class="ls_below_projected" title="Original Projection: ' + format_points(parseFloat(o.projected)) + '">' + o.formatted + "</span>") : o.pace - o.projected > 0 ? jQuery("#ls_pace_pts_" + ls_rosters[e].IR[l]).html('<span class="ls_above_projected" title="Original Projection: ' + format_points(parseFloat(o.projected)) + '">' + o.formatted + "</span>") : jQuery("#ls_pace_pts_" + ls_rosters[e].IR[l]).html('<span class="ls_at_projected" title="Original Projection: ' + format_points(parseFloat(o.projected)) + '">' + o.formatted + "</span>")
				}
			t = 0,
			a = 0,
			s = 0;
			if (ls_rosters[e].hasOwnProperty("TS"))
				for (l = 0; l < ls_rosters[e].TS.length; l++) {
					var o;
					t += (o = ls_get_player_projection(ls_rosters[e].TS[l])).pace,
					a += o.projected,
					o.points,
					s += o.game_sec_remaining,
					ls_orig_proj_when_final && 0 === o.game_sec_remaining ? (jQuery("#ls_pace_pts_" + ls_rosters[e].TS[l]).html('<span class="ls_projected" title="Original Projection">' + format_points(parseFloat(o.projected)) + "</span>"), o.pace - o.projected < 0 ? jQuery(".pfpts_" + ls_rosters[e].TS[l]).addClass("ls_below_projected") : o.pace - o.projected > 0 && jQuery(".pfpts_" + ls_rosters[e].TS[l]).addClass("ls_above_projected")) : o.pace - o.projected < 0 ? jQuery("#ls_pace_pts_" + ls_rosters[e].TS[l]).html('<span class="ls_below_projected" title="Original Projection: ' + format_points(parseFloat(o.projected)) + '">' + o.formatted + "</span>") : o.pace - o.projected > 0 ? jQuery("#ls_pace_pts_" + ls_rosters[e].TS[l]).html('<span class="ls_above_projected" title="Original Projection: ' + format_points(parseFloat(o.projected)) + '">' + o.formatted + "</span>") : jQuery("#ls_pace_pts_" + ls_rosters[e].TS[l]).html('<span class="ls_at_projected" title="Original Projection: ' + format_points(parseFloat(o.projected)) + '">' + o.formatted + "</span>")
				}
		}
}
function ls_projections_html() {
	if (jQuery("#hide_projections_cb").is(":checked"))
		var e = ' style="display:none"';
	else
		e = "";
	var t = "";
	$('input[name="hide_stats"]').is(":checked") && (t = " td-pad"),
	jQuery("#roster_away tr:first-child th").hasClass("ls_projections") || jQuery("#roster_home tr:first-child th").hasClass("ls_projections") || jQuery("#roster_away tr, #roster_home tr").each(function() {
		if ($(this).find("th").length > 0)
			$(this).find("th.ls_game_info").after('<th class="ls_projections"' + e + ' title="Pace/Projected Points">PP</th>');
		else
			try {
				var a = $(this).find("td:first-child a").attr("href").substr(17, 5);
				$(this).find("td.ls_game_info").after('<td class="ls_projections' + t + '"' + e + ' id="ls_pace_pts_' + a + '"></td>')
			} catch (a) {
				var s = $(this).find("td:last-child div").attr("id");
				void 0 === s ? $(this).find("td.ls_game_info").after('<td class="ls_projections' + t + '"' + e + "></td>") : $(this).find("td.ls_game_info").after('<td class="ls_projections ffpts_pace_total' + t + '"' + e + ' id="ls_pace_' + s + '"></td>')
			}
	}),
	$('.ls_projections.ls_pace_box:contains("NaN")').html('<i class="fa fa-spinner fa-spin" style="font-size:14px" title="Wait..As MFL Prepares Games Starting"></i>'),
	$('.ls_game_info:contains("undefined")').html('<i class="fa fa-spinner fa-spin" style="font-size:22px" title="Wait..As MFL Prepares Games Starting"></i>'),
	$('.ls_projections span.ls_at_projected:contains("NaN")').html('<i class="fa fa-spinner fa-spin" style="font-size:22px" title="Wait..As MFL Prepares Games Starting"></i>')
}
function ls_add_icons(e) {
	if (void 0 === e)
		try {
			var t = jQuery("#ficon_home img").attr("id").substr(-4);
			ls_home_id = jQuery("#ficon_home img").attr("id").substr(-4),
			ls_away_id = jQuery("#ficon_away img").attr("id").substr(-4),
			ls_check_if_bye()
		} catch (e) {
			for (var a in franchiseDatabase)
				franchiseDatabase.hasOwnProperty(a) && "fid_0000" !== a && (franchiseDatabase[a].name === jQuery("#fname_home").text() && (ls_home_id = franchiseDatabase[a].id), franchiseDatabase[a].name === jQuery("#fname_away").text() && (ls_away_id = franchiseDatabase[a].id), ls_check_if_bye());
			t = ls_home_id
		}
	else
		t = e;
	jQuery("[id^=og_]").each(function() {
		var e = $(this).attr("onclick").substr(13, 4);
		if (-1 !== $(this).attr("onclick").indexOf("BYE")) {
			var a = "BYE";
			$(this).addClass("ls_other_game_bye"),
			ls_check_if_bye_final()
		} else
			a = $(this).attr("onclick").substr(20, 4);
		if (e === t ? $(this).addClass("current_matchup") : $(this).removeClass("current_matchup"), "BYE" !== a)
			switch (ls_box_abbrev_name_icon) {
			case 0:
				$(this).find("table tr:eq(0) td:eq(0)").html('<span class="ls_og_abbrev">' + franchiseDatabase["fid_" + a].abbrev + "</span>");
				break;
			case 1:
				$(this).find("table tr:eq(0) td:eq(0)").html('<span class="ls_og_full_name" style="display:inline-block;max-width:80px;overflow:hidden">' + franchiseDatabase["fid_" + a].name + "</span>");
				break;
			case 2:
				"" !== franchiseDatabase["fid_" + a].icon ? $(this).find("table tr:eq(0) td:eq(0)").html('<img class="ls_og_icon" src="' + franchiseDatabase["fid_" + a].icon + '" alt="' + $(this).find("table tr:eq(0) td:eq(0)").text() + '" title="' + franchiseDatabase["fid_" + a].name + '" />') : "" !== franchiseDatabase["fid_" + a].logo ? $(this).find("table tr:eq(0) td:eq(0)").html('<img class="ls_og_icon" src="' + franchiseDatabase["fid_" + a].logo + '" alt="' + $(this).find("table tr:eq(0) td:eq(0)").text() + '" title="' + franchiseDatabase["fid_" + a].name + '" />') : $(this).find("table tr:eq(0) td:eq(0)").html('<span class="ls_og_abbrev">' + franchiseDatabase["fid_" + a].abbrev + "</span>");
				break;
			case 3:
				"" !== franchiseDatabase["fid_" + a].icon ? $(this).find("table tr:eq(0) td:eq(0)").html('<img class="ls_og_icon" src="' + franchiseDatabase["fid_" + a].icon + '" alt="' + $(this).find("table tr:eq(0) td:eq(0)").text() + '" title="' + franchiseDatabase["fid_" + a].name + '" /><span class="ls_og_icon_abbrev" style="vertical-align:middle;padding-left:4px">' + franchiseDatabase["fid_" + a].abbrev + "</span>") : "" !== franchiseDatabase["fid_" + a].logo ? $(this).find("table tr:eq(0) td:eq(0)").html('<img class="ls_og_icon" src="' + franchiseDatabase["fid_" + a].logo + '" alt="' + $(this).find("table tr:eq(0) td:eq(0)").text() + '" title="' + franchiseDatabase["fid_" + a].name + '" /><span class="ls_og_icon_abbrev" style="vertical-align:middle;padding-left:4px">' + franchiseDatabase["fid_" + a].abbrev + "</span>") : $(this).find("table tr:eq(0) td:eq(0)").html('<span class="ls_og_abbrev">' + franchiseDatabase["fid_" + a].abbrev + "</span>");
				break;
			case 4:
				"" !== franchiseDatabase["fid_" + a].icon ? $(this).find("table tr:eq(0) td:eq(0)").html('<img class="ls_og_icon" src="' + franchiseDatabase["fid_" + a].icon + '" alt="' + $(this).find("table tr:eq(0) td:eq(0)").text() + '" title="' + franchiseDatabase["fid_" + a].name + '" /><span class="ls_og_icon_full_name" style="display:inline-block;max-width:50px;overflow:hidden;vertical-align:middle;padding-left:4px">' + franchiseDatabase["fid_" + a].name + "</span>") : "" !== franchiseDatabase["fid_" + a].logo ? $(this).find("table tr:eq(0) td:eq(0)").html('<img class="ls_og_icon" src="' + franchiseDatabase["fid_" + a].logo + '" alt="' + $(this).find("table tr:eq(0) td:eq(0)").text() + '" title="' + franchiseDatabase["fid_" + a].name + '" /><span class="ls_og_icon_full_name" style="display:inline-block;max-width:50px;overflow:hidden;vertical-align:middle;padding-left:4px">' + franchiseDatabase["fid_" + a].name + "</span>") : $(this).find("table tr:eq(0) td:eq(0)").html('<span class="ls_og_full_name" style="display:inline-block;max-width:80px;overflow:hidden">' + franchiseDatabase["fid_" + a].name + "</span>");
				break;
			default:
				$(this).find("table tr:eq(0) td:eq(0)").html('<span class="ls_og_abbrev">' + franchiseDatabase["fid_" + a].abbrev + "</span>")
			}
		else
			ls_hide_bye_teams && $(this).addClass("ls_other_game_bye_hidden");
		switch (ls_box_abbrev_name_icon) {
		case 0:
			$(this).find("table tr:eq(1) td:eq(0)").html('<span class="ls_og_abbrev">' + franchiseDatabase["fid_" + e].abbrev + "</span>");
			break;
		case 1:
			$(this).find("table tr:eq(1) td:eq(0)").html('<span class="ls_og_full_name" style="display:inline-block;max-width:80px;overflow:hidden">' + franchiseDatabase["fid_" + e].name + "</span>");
			break;
		case 2:
			"" !== franchiseDatabase["fid_" + e].icon ? $(this).find("table tr:eq(1) td:eq(0)").html('<img class="ls_og_icon" src="' + franchiseDatabase["fid_" + e].icon + '" alt="' + $(this).find("table tr:eq(1) td:eq(0)").text() + '" title="' + franchiseDatabase["fid_" + e].name + '" />') : "" !== franchiseDatabase["fid_" + e].logo ? $(this).find("table tr:eq(1) td:eq(0)").html('<img class="ls_og_icon" src="' + franchiseDatabase["fid_" + e].logo + '" alt="' + $(this).find("table tr:eq(1) td:eq(0)").text() + '" title="' + franchiseDatabase["fid_" + e].name + '" />') : $(this).find("table tr:eq(1) td:eq(0)").html('<span class="ls_og_abbrev">' + franchiseDatabase["fid_" + e].abbrev + "</span>");
			break;
		case 3:
			"" !== franchiseDatabase["fid_" + e].icon ? $(this).find("table tr:eq(1) td:eq(0)").html('<img class="ls_og_icon" src="' + franchiseDatabase["fid_" + e].icon + '" alt="' + $(this).find("table tr:eq(1) td:eq(0)").text() + '" title="' + franchiseDatabase["fid_" + e].name + '" /><span class="ls_og_icon_abbrev" style="vertical-align:middle;padding-left:4px">' + franchiseDatabase["fid_" + e].abbrev + "</span>") : "" !== franchiseDatabase["fid_" + e].logo ? $(this).find("table tr:eq(1) td:eq(0)").html('<img class="ls_og_icon" src="' + franchiseDatabase["fid_" + e].logo + '" alt="' + $(this).find("table tr:eq(1) td:eq(0)").text() + '" title="' + franchiseDatabase["fid_" + e].name + '" /><span class="ls_og_icon_abbrev" style="vertical-align:middle;padding-left:4px">' + franchiseDatabase["fid_" + e].abbrev + "</span>") : $(this).find("table tr:eq(1) td:eq(0)").html(franchiseDatabase["fid_" + e].abbrev);
			break;
		case 4:
			"" !== franchiseDatabase["fid_" + e].icon ? $(this).find("table tr:eq(1) td:eq(0)").html('<img class="ls_og_icon" src="' + franchiseDatabase["fid_" + e].icon + '" alt="' + $(this).find("table tr:eq(1) td:eq(0)").text() + '" title="' + franchiseDatabase["fid_" + e].name + '" /><span class="ls_og_icon_full_name" style="display:inline-block;max-width:50px;overflow:hidden;vertical-align:middle;padding-left:4px">' + franchiseDatabase["fid_" + e].name + "</span>") : "" !== franchiseDatabase["fid_" + e].logo ? $(this).find("table tr:eq(1) td:eq(0)").html('<img class="ls_og_icon" src="' + franchiseDatabase["fid_" + e].logo + '" alt="' + $(this).find("table tr:eq(1) td:eq(0)").text() + '" title="' + franchiseDatabase["fid_" + e].name + '" /><span class="ls_og_icon_full_name" style="display:inline-block;max-width:50px;overflow:hidden;vertical-align:middle;padding-left:4px">' + franchiseDatabase["fid_" + e].name + "</span>") : $(this).find("table tr:eq(1) td:eq(0)").html('<span class="ls_og_full_name" style="display:inline-block;max-width:80px;overflow:hidden">' + franchiseDatabase["fid_" + e].name + "</span>");
			break;
		default:
			$(this).find("table tr:eq(1) td:eq(0)").html('<span class="ls_og_abbrev">' + franchiseDatabase["fid_" + e].abbrev + "</span>")
		}
		if (ls_includeProjections) {
			if (jQuery("#hide_projections_cb").is(":checked"))
				var s = ' style="display:none"';
			else
				s = "";
			"BYE" === a ? $(this).find("table tr:eq(0) td:eq(0)").after('<td class="ls_projections ls_pace_box"' + s + ">&nbsp;</td>") : $(this).find("table tr:eq(0) td:eq(0)").after('<td id="ls_pace_box_' + a + '" class="ls_projections ls_pace_box"' + s + ">" + ls_pace_tracker["fid_" + a] + "</td>"),
			$(this).find("table tr:eq(1) td:eq(0)").after('<td id="ls_pace_box_' + e + '" class="ls_projections ls_pace_box"' + s + ">" + ls_pace_tracker["fid_" + e] + "</td>")
		}
	}),
	jQuery(".ls_other_game.current_matchup td.ls_og_cell:first").filter(function() {
		"BYE" === $.trim($(this).text()) && (jQuery("#ajax_ls").addClass("ls-has-bye"), jQuery("#body_ajax_ls .ls-has-bye .ls_players_table td.mobile-view:last-of-type").attr("colspan", 2), jQuery("#body_ajax_ls .ls-has-bye #LS_HomeTeamRecord").attr("colspan", 7), jQuery("#body_ajax_ls .ls-has-bye #LS_HomeTeamName").attr("colspan", 7), jQuery("#body_ajax_ls .ls-has-bye #LS_HomeScore").attr("colspan", 4))
	})
}
function ls_add_caption() {
	jQuery("<caption><span></span></caption>").insertBefore("#roster_away tbody"),
	jQuery("<caption><span></span></caption>").insertBefore("#roster_home tbody");
	var e = $("#fname_away").html(),
		t = $("#fname_home").html();
	jQuery("#roster_away caption").html(e),
	jQuery("#roster_home caption").html(t)
}
function ls_parse_standings() {
	for (var e in ls_records = new Array, franchiseDatabase)
		franchiseDatabase.hasOwnProperty(e) && "fid_0000" !== e && (ls_records[franchiseDatabase[e].id] = "0-0-0");
	var t = baseURLDynamic + "/" + year + "/export?TYPE=standings&L=" + league_id + "&JSON=1&rand=" + Math.random();
	$.ajax({
		type: "GET",
		url: t
	}).done(function(e) {
		try {
			for (var t = 0; t < e.standings.franchise.length; t++)
				try {
					ls_records[e.standings.franchise[t].id] = e.standings.franchise[t].h2hw.$t + "-" + e.standings.franchise[t].h2hl.$t + "-" + e.standings.franchise[t].h2ht.$t
				} catch (a) {
					try {
						ls_records[e.standings.franchise[t].id] = e.standings.franchise[t].h2hw.$t + "-" + e.standings.franchise[t].h2hl.$t
					} catch (a) {
						ls_records[e.standings.franchise[t].id] = "0-0-0"
					}
				}
		} catch (e) {}
	})
}
function ls_add_records(e, t) {
	if (void 0 === e)
		try {
			var a = jQuery("#ficon_home img").attr("id").substr(-4)
		} catch (e) {
			for (var s in franchiseDatabase)
				if (franchiseDatabase.hasOwnProperty(s) && "fid_0000" !== s && franchiseDatabase[s].name === jQuery("#fname_home").text())
					a = franchiseDatabase[s].id
		}
	else
		a = e;
	if (void 0 === t)
		try {
			var l = jQuery("#ficon_away img").attr("id").substr(-4)
		} catch (e) {
			for (var s in franchiseDatabase)
				if (franchiseDatabase.hasOwnProperty(s) && "fid_0000" !== s && franchiseDatabase[s].name === jQuery("#fname_away").text())
					l = franchiseDatabase[s].id
		}
	else
		l = t;
	jQuery("#LS_AwayTeamRecord").html(ls_records[l]),
	jQuery("#LS_HomeTeamRecord").html(ls_records[a])
}
function ls_parse_projections() {
	if (ls_projections = new Array, liveScoringWeek < 1)
		var e = 1;
	else
		e = liveScoringWeek;
	$.ajax({
		type: "GET",
		url: baseURLDynamic + "/" + year + "/export?TYPE=projectedScores&L=" + league_id + "&W=" + e + "&JSON=1",
		async: !1
	}).done(function(e) {
		for (var t = 0; t < e.projectedScores.playerScore.length; t++)
			0 === e.projectedScores.playerScore[t].score.length ? ls_projections["pid_" + e.projectedScores.playerScore[t].id] = 0 : ls_projections["pid_" + e.projectedScores.playerScore[t].id] = e.projectedScores.playerScore[t].score;
		e = null
	})
}
function ls_parse_injuries() {
	ls_injuries = new Array,
	$.ajax({
		type: "GET",
		url: baseURLDynamic + "/" + year + "/export?TYPE=injuries&JSON=1",
		async: !1
	}).done(function(e) {
		for (var t = 0; t < e.injuries.injury.length; t++)
			ls_injuries["pid_" + e.injuries.injury[t].id] = {
				code: e.injuries.injury[t].status.substr(0, 1),
				status: e.injuries.injury[t].status,
				details: e.injuries.injury[t].details
			};
		e = null
	})
}
function ls_check_if_bye() {
	"BYE" === ls_away_id ? (jQuery("#ajax_ls").addClass("ls-has-bye"), jQuery("#body_ajax_ls .ls-has-bye .ls_players_table td.mobile-view:last-of-type").attr("colspan", 2), jQuery("#body_ajax_ls .ls-has-bye #LS_HomeTeamRecord").attr("colspan", 7), jQuery("#body_ajax_ls .ls-has-bye #LS_HomeTeamName").attr("colspan", 7), jQuery("#body_ajax_ls .ls-has-bye #LS_HomeScore").attr("colspan", 4)) : (jQuery("#ajax_ls").removeClass("ls-has-bye"), jQuery("#body_ajax_ls .ls_players_table td.mobile-view:last-of-type").removeAttr("colspan"), jQuery("#body_ajax_ls #LS_HomeTeamRecord").removeAttr("colspan"), jQuery("#body_ajax_ls #LS_HomeTeamName").removeAttr("colspan"), jQuery("#body_ajax_ls #LS_HomeScore").removeAttr("colspan"))
}
function ls_check_if_bye_final() {
	jQuery('#other_games .ls_other_game_bye div[class^="oggstat"]:contains("F")').closest(".ls_other_game").addClass("ls_box_gameover"),
	jQuery('#other_games .ls_other_game_bye.ls_box_gameover div[class^="oggstat"]').parent().addClass("winner_mark"),
	jQuery('#other_games .ls_other_game_bye.ls_box_gameover div[class^="oggstat"]').html('<i class="fa fa-caret-left" aria-hidden="true"></i>')
}
function ls_check_if_final() {
	jQuery("#other_games .ls_other_game").filter(function() {
		return $(this).find("tr").length === $(this).find('div[class^="oggstat"]:contains("F")').length
	}).addClass("ls_box_gameover"),
	jQuery("#other_games .ls_other_game").each(function() {
		0 === parseInt($(this).find('tr td div[class^="ogffpts"]').text()) && $(this).removeClass("ls_box_gameover")
	}),
	jQuery('#other_games .ls_other_game_bye div[class^="oggstat"]:contains("F")').closest(".ls_other_game").addClass("ls_box_gameover"),
	jQuery("#other_games .ls_box_gameover").each(function() {
		var e = Math.max.apply(Math, $('div[class^="ogffpts"]', this).map(function() {
			return +$(this).text()
		}).toArray());
		$("div", this).each(function() {
			$(this).text() == e && $(this).parent().next().addClass("winner_mark")
		})
	}),
	jQuery('#other_games .ls_box_gameover div[class^="oggstat"]').html('<i class="fa fa-caret-left" aria-hidden="true"></i>')
}
function ls_format_score() {
	for (var e = jQuery("#ffpts_away").text(), t = jQuery("#ffpts_home").text(), a = e, s = 8; s > a.length; s--)
		e = "x" + e;
	for (a = t, s = 8; s > a.length; s--)
		t = "x" + t;
	var l = "";
	for (s = 0; s < e.length; s++)
		"x" === e.substr(s, 1) ? l += '<span class="blank ls_num_' + (s + 1) + '"><a></a></span>' : l += '<span class="ls_num_' + (s + 1) + '"><a>' + e.substr(s, 1) + "</a></span>";
	jQuery("#ffpts_away").html(l),
	l = "";
	for (s = 0; s < t.length; s++)
		"x" === t.substr(s, 1) ? l += '<span class="blank ls_num_' + (s + 1) + '"><a></a></span>' : l += '<span class="ls_num_' + (s + 1) + '"><a>' + t.substr(s, 1) + "</a></span>";
	jQuery("#ffpts_home").html(l)
}
function ls_removeIR() {
	var e = !1,
		t = !1;
	for (var a in jQuery("#roster_away tr.ls_nonstarters").each(function() {
		"Injured Reserve" === $(this).find("th:first-child").text() && (e = !0),
		"Taxi Squad" === $(this).find("th:first-child").text() && (t = !0),
		e && !t && $(this).remove()
	}), e = !1, t = !1, jQuery("#roster_home tr.ls_nonstarters").each(function() {
		"Injured Reserve" === $(this).find("th:first-child").text() && (e = !0),
		"Taxi Squad" === $(this).find("th:first-child").text() && (t = !0),
		e && !t && $(this).remove()
	}), ls_rosters)
		ls_rosters.hasOwnProperty(a) && (ls_rosters[a].IR = new Array)
}
function ls_removeTaxi() {
	var e = !1;
	for (var t in jQuery("#roster_away tr.ls_nonstarters").each(function() {
		"Taxi Squad" === $(this).find("th:first-child").text() && (e = !0),
		e && $(this).remove()
	}), e = !1, jQuery("#roster_home tr.ls_nonstarters").each(function() {
		"Taxi Squad" === $(this).find("th:first-child").text() && (e = !0),
		e && $(this).remove()
	}), ls_rosters)
		ls_rosters.hasOwnProperty(t) && (ls_rosters[t].TS = new Array)
}
function ls_validate_matchup(e, t) {
	if (ls_hide_bye_teams && "BYE" === t)
		for (var a = 0; a < ls_games.length; a++) {
			var s = ls_games[a].split(",");
			if ("BYE" !== s[0]) {
				ls_home_id = s[1],
				ls_away_id = s[0];
				break
			}
		}
}
function switch_game(e, t) {
	ls_update_all = 1,
	ls_validate_matchup(ls_home_id = e, ls_away_id = t),
	ls_check_if_bye(),
	show_game(ls_home_id, ls_away_id),
	update_scores(),
	ls_includeInjuryStatus && ls_update_injuries(),
	ls_add_icons(ls_home_id);
	try {
		MFLPlayerPopupNewsIcon()
	} catch (e) {}
	ls_add_caption(),
	ls_add_records(ls_home_id, ls_away_id),
	$("#LS_AwayTeamName,#LS_AwayTeamRecord,#LS_AwayScore").trigger("click"),
	$('.ls_projections.ls_pace_box:contains("NaN")').html('<i class="fa fa-spinner fa-spin" style="font-size:14px" title="Wait..As MFL Prepares Games Starting"></i>'),
	$('.ls_game_info:contains("undefined")').html('<i class="fa fa-spinner fa-spin" style="font-size:22px" title="Wait..As MFL Prepares Games Starting"></i>'),
	$('.ls_projections span.ls_at_projected:contains("NaN")').html('<i class="fa fa-spinner fa-spin" style="font-size:22px" title="Wait..As MFL Prepares Games Starting"></i>')
}
function ls_after_update_scores() {
	ls_includeProjections && ls_projections_html(),
	ls_format_score(),
	ls_includeProjections && ls_update_projections(),
	ls_check_if_final(),
	ls_check_if_bye_final(),
	ls_scoring_run(),
	ls_update_nfl_box(),
	$('.ls_projections.ls_pace_box:contains("NaN")').html('<i class="fa fa-spinner fa-spin" style="font-size:14px" title="Wait..As MFL Prepares Games Starting"></i>'),
	$('.ls_game_info:contains("undefined")').html('<i class="fa fa-spinner fa-spin" style="font-size:22px" title="Wait..As MFL Prepares Games Starting"></i>'),
	$('.ls_projections span.ls_at_projected:contains("NaN")').html('<i class="fa fa-spinner fa-spin" style="font-size:22px" title="Wait..As MFL Prepares Games Starting"></i>')
}
function ls_navbar() {
	var e = "";
	if (e += '<div id="myNavigationHolder" style="margin-top:10px"><span class="weekly-navbar"><span class="reportnavigationheader">Select Week: </span>', -1 === location.href.indexOf("W="))
		if (liveScoringWeek < 1)
			var t = 1;
		else
			t = liveScoringWeek;
	else
		t = parseInt(location.href.substr(location.href.indexOf("W=") + 2, 2));
	for (var a = 1; a <= 17; a++)
		a < liveScoringWeek ? e += '<a href="#week' + a + '" onclick="location.href=\'' + baseURLDynamic + "/" + year + "/ajax_ls?L=" + league_id + "&W=" + t + "&W2=" + a + "';\"> " + a + " </a>" : a === liveScoringWeek ? e += '<span class="currentweek"> ' + a + " </span>" : e += a <= t ? '<a href="#week' + a + '" onclick="location.href=\'' + baseURLDynamic + "/" + year + "/ajax_ls?L=" + league_id + "&W=" + t + "&W2=" + a + "';\"> " + a + " </a>" : '<a href="#week' + a + '" class="inactive" style="cursor:default"> ' + a + " </a>";
	e += "</span>",
	e += '<span class="weekly-navbar-mobile">Select Week: ',
	e += '<select size="1" id="ls_scoreboardWeek" onchange="location.href=\'' + baseURLDynamic + "/" + year + "/ajax_ls?L=" + league_id + "&W=" + t + "&W2='+document.getElementById('ls_scoreboardWeek').value;\">";
	for (a = 1; a <= 17; a++)
		a < liveScoringWeek ? e += '<option value="' + a + '">' + a + "</option>" : a === liveScoringWeek ? e += '<option value="' + a + '" selected="selected">' + a + "</option>" : a <= t && (e += '<option value="' + a + '">' + a + "</option>");
	e += "</select>",
	e += "</span>",
	e += "</div>",
	jQuery("#ls_setting_drop").before(e)
}
var ls_nfl_records = new Array;
function ls_update_nfl_records() {
	for (var e = 1; e < liveScoringWeek; e++) {
		var t = baseURLDynamic + "/" + year + "/export?TYPE=nflSchedule&W=" + e + "&JSON=1&rand=" + Math.random();
		$.ajax({
			type: "GET",
			url: t,
			async: !1
		}).done(function(e) {
			for (var t = 0; t < e.nflSchedule.matchup.length; t++)
				void 0 === ls_nfl_records[e.nflSchedule.matchup[t].team[0].id] && (ls_nfl_records[e.nflSchedule.matchup[t].team[0].id] = {
					w: 0,
					l: 0,
					t: 0
				}),
				void 0 === ls_nfl_records[e.nflSchedule.matchup[t].team[1].id] && (ls_nfl_records[e.nflSchedule.matchup[t].team[1].id] = {
					w: 0,
					l: 0,
					t: 0
				}),
				parseInt(e.nflSchedule.matchup[t].team[0].score) > parseInt(e.nflSchedule.matchup[t].team[1].score) ? (ls_nfl_records[e.nflSchedule.matchup[t].team[0].id].w += 1, ls_nfl_records[e.nflSchedule.matchup[t].team[1].id].l += 1) : parseInt(e.nflSchedule.matchup[t].team[0].score) < parseInt(e.nflSchedule.matchup[t].team[1].score) ? (ls_nfl_records[e.nflSchedule.matchup[t].team[0].id].l += 1, ls_nfl_records[e.nflSchedule.matchup[t].team[1].id].w += 1) : (ls_nfl_records[e.nflSchedule.matchup[t].team[0].id].t += 1, ls_nfl_records[e.nflSchedule.matchup[t].team[1].id].t += 1)
		})
	}
}
function ls_update_week() {
	if (liveScoringWeek < 1)
		var e = 1;
	else
		e = liveScoringWeek;
	ls_nfl_games = [];
	var t = baseURLDynamic + "/" + year + "/export?TYPE=nflByeWeeks&W=" + e + "&JSON=1&rand=" + Math.random();
	$.ajax({
		type: "GET",
		url: t,
		async: !1
	}).done(function(e) {
		try {
			for (var t = 0; t < e.nflByeWeeks.team.length; t++)
				ls_nfl_games[e.nflByeWeeks.team[t].id] = [],
				ls_nfl_games[e.nflByeWeeks.team[t].id].time = 0,
				ls_nfl_games[e.nflByeWeeks.team[t].id].opp = "BYE"
		} catch (e) {}
	});
	t = baseURLDynamic + "/" + year + "/export?TYPE=nflSchedule&W=" + e + "&JSON=1&rand=" + Math.random();
	$.ajax({
		type: "GET",
		url: t,
		async: !1
	}).done(function(e) {
		for (var t = 0; t < e.nflSchedule.matchup.length; t++)
			ls_nfl_games[e.nflSchedule.matchup[t].team[0].id] = [],
			ls_nfl_games[e.nflSchedule.matchup[t].team[1].id] = [],
			ls_nfl_games[e.nflSchedule.matchup[t].team[0].id].time = parseInt(e.nflSchedule.matchup[t].kickoff),
			ls_nfl_games[e.nflSchedule.matchup[t].team[0].id].pretty_time = "",
			ls_nfl_games[e.nflSchedule.matchup[t].team[0].id].opp = e.nflSchedule.matchup[t].team[1].id,
			ls_nfl_games[e.nflSchedule.matchup[t].team[0].id].where = "away",
			ls_nfl_games[e.nflSchedule.matchup[t].team[1].id].time = parseInt(e.nflSchedule.matchup[t].kickoff),
			ls_nfl_games[e.nflSchedule.matchup[t].team[1].id].pretty_time = "",
			ls_nfl_games[e.nflSchedule.matchup[t].team[1].id].opp = e.nflSchedule.matchup[t].team[0].id,
			ls_nfl_games[e.nflSchedule.matchup[t].team[1].id].where = "home"
	}),
	ls_games = [],
	ls_rosters = [];
	var a = "",
		s = "",
		l = "";
	t = baseURLDynamic + "/" + year + "/export?TYPE=weeklyResults&L=" + league_id + "&W=" + e + "&DETAILS=1&JSON=1&rand=" + Math.random();
	if ($.ajax({
		type: "GET",
		url: t,
		async: !1
	}).done(function(e) {
		try {
			for (var t = 0; t < e.weeklyResults.matchup.length; t++) {
				ls_games.push(e.weeklyResults.matchup[t].franchise[0].id + "," + e.weeklyResults.matchup[t].franchise[1].id),
				"" === a && (a = e.weeklyResults.matchup[t].franchise[0].id),
				"" === s && (s = e.weeklyResults.matchup[t].franchise[1].id),
				"undefined" != typeof franchise_id && (franchise_id !== e.weeklyResults.matchup[t].franchise[0].id && franchise_id !== e.weeklyResults.matchup[t].franchise[1].id || (a = e.weeklyResults.matchup[t].franchise[0].id, s = e.weeklyResults.matchup[t].franchise[1].id)),
				ls_rosters[e.weeklyResults.matchup[t].franchise[0].id] = {},
				ls_rosters[e.weeklyResults.matchup[t].franchise[0].id].TS = [],
				ls_rosters[e.weeklyResults.matchup[t].franchise[0].id].IR = [],
				0 === ls_best_lineup ? (ls_rosters[e.weeklyResults.matchup[t].franchise[0].id].S = [], ls_rosters[e.weeklyResults.matchup[t].franchise[0].id].NS = []) : ls_rosters[e.weeklyResults.matchup[t].franchise[0].id].R = [];
				try {
					for (var o = 0; o < e.weeklyResults.matchup[t].franchise[0].player.length; o++) {
						switch (e.weeklyResults.matchup[t].franchise[0].player[o].status) {
						case "starter":
							0 === ls_best_lineup ? ls_rosters[e.weeklyResults.matchup[t].franchise[0].id].S.push(e.weeklyResults.matchup[t].franchise[0].player[o].id) : ls_rosters[e.weeklyResults.matchup[t].franchise[0].id].R.push(e.weeklyResults.matchup[t].franchise[0].player[o].id);
							break;
						case "nonstarter":
							0 === ls_best_lineup ? ls_rosters[e.weeklyResults.matchup[t].franchise[0].id].NS.push(e.weeklyResults.matchup[t].franchise[0].player[o].id) : ls_rosters[e.weeklyResults.matchup[t].franchise[0].id].R.push(e.weeklyResults.matchup[t].franchise[0].player[o].id);
							break;
						case "taxisquad":
							ls_rosters[e.weeklyResults.matchup[t].franchise[0].id].TS.push(e.weeklyResults.matchup[t].franchise[0].player[o].id);
							break;
						case "injuredreserve":
							ls_rosters[e.weeklyResults.matchup[t].franchise[0].id].IR.push(e.weeklyResults.matchup[t].franchise[0].player[o].id)
						}
						void 0 === ls_player[e.weeklyResults.matchup[t].franchise[0].player[o].id] && (l += e.weeklyResults.matchup[t].franchise[0].player[o].id + ",")
					}
				} catch (e) {}
				ls_rosters[e.weeklyResults.matchup[t].franchise[1].id] = {},
				ls_rosters[e.weeklyResults.matchup[t].franchise[1].id].TS = [],
				ls_rosters[e.weeklyResults.matchup[t].franchise[1].id].IR = [],
				0 === ls_best_lineup ? (ls_rosters[e.weeklyResults.matchup[t].franchise[1].id].S = [], ls_rosters[e.weeklyResults.matchup[t].franchise[1].id].NS = []) : ls_rosters[e.weeklyResults.matchup[t].franchise[1].id].R = [];
				try {
					for (o = 0; o < e.weeklyResults.matchup[t].franchise[1].player.length; o++) {
						switch (e.weeklyResults.matchup[t].franchise[1].player[o].status) {
						case "starter":
							0 === ls_best_lineup ? ls_rosters[e.weeklyResults.matchup[t].franchise[1].id].S.push(e.weeklyResults.matchup[t].franchise[1].player[o].id) : ls_rosters[e.weeklyResults.matchup[t].franchise[1].id].R.push(e.weeklyResults.matchup[t].franchise[1].player[o].id);
							break;
						case "nonstarter":
							0 === ls_best_lineup ? ls_rosters[e.weeklyResults.matchup[t].franchise[1].id].NS.push(e.weeklyResults.matchup[t].franchise[1].player[o].id) : ls_rosters[e.weeklyResults.matchup[t].franchise[1].id].R.push(e.weeklyResults.matchup[t].franchise[1].player[o].id);
							break;
						case "taxisquad":
							ls_rosters[e.weeklyResults.matchup[t].franchise[1].id].TS.push(e.weeklyResults.matchup[t].franchise[1].player[o].id);
							break;
						case "injuredreserve":
							ls_rosters[e.weeklyResults.matchup[t].franchise[1].id].IR.push(e.weeklyResults.matchup[t].franchise[1].player[o].id)
						}
						void 0 === ls_player[e.weeklyResults.matchup[t].franchise[1].player[o].id] && (l += e.weeklyResults.matchup[t].franchise[1].player[o].id + ",")
					}
				} catch (e) {}
			}
		} catch (e) {}
		try {
			if (void 0 !== e.weeklyResults.matchup.franchise[0]) {
				ls_games.push(e.weeklyResults.matchup.franchise[0].id + "," + e.weeklyResults.matchup.franchise[1].id),
				"" === a && (a = e.weeklyResults.matchup.franchise[0].id),
				"" === s && (s = e.weeklyResults.matchup.franchise[1].id),
				"undefined" != typeof franchise_id && (franchise_id !== e.weeklyResults.matchup.franchise[0].id && franchise_id !== e.weeklyResults.matchup.franchise[1].id || (a = e.weeklyResults.matchup.franchise[0].id, s = e.weeklyResults.matchup.franchise[1].id)),
				ls_rosters[e.weeklyResults.matchup.franchise[0].id] = {},
				ls_rosters[e.weeklyResults.matchup.franchise[0].id].TS = [],
				ls_rosters[e.weeklyResults.matchup.franchise[0].id].IR = [],
				0 === ls_best_lineup ? (ls_rosters[e.weeklyResults.matchup.franchise[0].id].S = [], ls_rosters[e.weeklyResults.matchup.franchise[0].id].NS = []) : ls_rosters[e.weeklyResults.matchup.franchise[0].id].R = [];
				try {
					for (o = 0; o < e.weeklyResults.matchup.franchise[0].player.length; o++) {
						switch (e.weeklyResults.matchup.franchise[0].player[o].status) {
						case "starter":
							0 === ls_best_lineup ? ls_rosters[e.weeklyResults.matchup.franchise[0].id].S.push(e.weeklyResults.matchup.franchise[0].player[o].id) : ls_rosters[e.weeklyResults.matchup.franchise[0].id].R.push(e.weeklyResults.matchup.franchise[0].player[o].id);
							break;
						case "nonstarter":
							0 === ls_best_lineup ? ls_rosters[e.weeklyResults.matchup.franchise[0].id].NS.push(e.weeklyResults.matchup.franchise[0].player[o].id) : ls_rosters[e.weeklyResults.matchup.franchise[0].id].R.push(e.weeklyResults.matchup.franchise[0].player[o].id);
							break;
						case "taxisquad":
							ls_rosters[e.weeklyResults.matchup.franchise[0].id].TS.push(e.weeklyResults.matchup.franchise[0].player[o].id);
							break;
						case "injuredreserve":
							ls_rosters[e.weeklyResults.matchup.franchise[0].id].IR.push(e.weeklyResults.matchup.franchise[0].player[o].id)
						}
						void 0 === ls_player[e.weeklyResults.matchup.franchise[0].player[o].id] && (l += e.weeklyResults.matchup.franchise[0].player[o].id + ",")
					}
				} catch (e) {}
				ls_rosters[e.weeklyResults.matchup.franchise[1].id] = {},
				ls_rosters[e.weeklyResults.matchup.franchise[1].id].TS = [],
				ls_rosters[e.weeklyResults.matchup.franchise[1].id].IR = [],
				0 === ls_best_lineup ? (ls_rosters[e.weeklyResults.matchup.franchise[1].id].S = [], ls_rosters[e.weeklyResults.matchup.franchise[1].id].NS = []) : ls_rosters[e.weeklyResults.matchup.franchise[1].id].R = [];
				try {
					for (o = 0; o < e.weeklyResults.matchup.franchise[1].player.length; o++) {
						switch (e.weeklyResults.matchup.franchise[1].player[o].status) {
						case "starter":
							0 === ls_best_lineup ? ls_rosters[e.weeklyResults.matchup.franchise[1].id].S.push(e.weeklyResults.matchup.franchise[1].player[o].id) : ls_rosters[e.weeklyResults.matchup.franchise[1].id].R.push(e.weeklyResults.matchup.franchise[1].player[o].id);
							break;
						case "nonstarter":
							0 === ls_best_lineup ? ls_rosters[e.weeklyResults.matchup.franchise[1].id].NS.push(e.weeklyResults.matchup.franchise[1].player[o].id) : ls_rosters[e.weeklyResults.matchup.franchise[1].id].R.push(e.weeklyResults.matchup.franchise[1].player[o].id);
							break;
						case "taxisquad":
							ls_rosters[e.weeklyResults.matchup.franchise[1].id].TS.push(e.weeklyResults.matchup.franchise[1].player[o].id);
							break;
						case "injuredreserve":
							ls_rosters[e.weeklyResults.matchup.franchise[1].id].IR.push(e.weeklyResults.matchup.franchise[1].player[o].id)
						}
						void 0 === ls_player[e.weeklyResults.matchup.franchise[1].player[o].id] && (l += e.weeklyResults.matchup.franchise[1].player[o].id + ",")
					}
				} catch (e) {}
			}
		} catch (e) {}
		try {
			for (t = 0; t < e.weeklyResults.franchise.length; t++) {
				ls_games.push("BYE," + e.weeklyResults.franchise[t].id),
				"" === a && (a = "BYE"),
				"" === s && (s = e.weeklyResults.franchise[t].id),
				"undefined" != typeof franchise_id && franchise_id === e.weeklyResults.franchise[t].id && (a = "BYE", s = e.weeklyResults.franchise[t].id),
				ls_rosters[e.weeklyResults.franchise[t].id] = {},
				ls_rosters[e.weeklyResults.franchise[t].id].TS = [],
				ls_rosters[e.weeklyResults.franchise[t].id].IR = [],
				0 === ls_best_lineup ? (ls_rosters[e.weeklyResults.franchise[t].id].S = [], ls_rosters[e.weeklyResults.franchise[t].id].NS = []) : ls_rosters[e.weeklyResults.franchise[t].id].R = [];
				try {
					for (o = 0; o < e.weeklyResults.franchise[t].player.length; o++) {
						switch (e.weeklyResults.franchise[t].player[o].status) {
						case "starter":
							0 === ls_best_lineup ? ls_rosters[e.weeklyResults.franchise[t].id].S.push(e.weeklyResults.franchise[t].player[o].id) : ls_rosters[e.weeklyResults.franchise[t].id].R.push(e.weeklyResults.franchise[t].player[o].id);
							break;
						case "nonstarter":
							0 === ls_best_lineup ? ls_rosters[e.weeklyResults.franchise[t].id].NS.push(e.weeklyResults.franchise[t].player[o].id) : ls_rosters[e.weeklyResults.franchise[t].id].R.push(e.weeklyResults.franchise[t].player[o].id);
							break;
						case "taxisquad":
							ls_rosters[e.weeklyResults.franchise[t].id].TS.push(e.weeklyResults.franchise[t].player[o].id);
							break;
						case "injuredreserve":
							ls_rosters[e.weeklyResults.franchise[t].id].IR.push(e.weeklyResults.franchise[t].player[o].id)
						}
						void 0 === ls_player[e.weeklyResults.franchise[t].player[o].id] && (l += e.weeklyResults.franchise[t].player[o].id + ",")
					}
				} catch (e) {}
			}
		} catch (e) {}
		try {
			if (void 0 !== e.weeklyResults.franchise.id) {
				ls_games.push("BYE," + e.weeklyResults.franchise.id),
				"" === a && (a = "BYE"),
				"" === s && (s = e.weeklyResults.franchise.id),
				"undefined" != typeof franchise_id && franchise_id === e.weeklyResults.franchise.id && (a = "BYE", s = e.weeklyResults.franchise.id),
				ls_rosters[e.weeklyResults.franchise.id] = {},
				ls_rosters[e.weeklyResults.franchise.id].TS = [],
				ls_rosters[e.weeklyResults.franchise.id].IR = [],
				0 === ls_best_lineup ? (ls_rosters[e.weeklyResults.franchise.id].S = [], ls_rosters[e.weeklyResults.franchise.id].NS = []) : ls_rosters[e.weeklyResults.franchise.id].R = [];
				try {
					for (o = 0; o < e.weeklyResults.franchise.player.length; o++) {
						switch (e.weeklyResults.franchise.player[o].status) {
						case "starter":
							0 === ls_best_lineup ? ls_rosters[e.weeklyResults.franchise.id].S.push(e.weeklyResults.franchise.player[o].id) : ls_rosters[e.weeklyResults.franchise.id].R.push(e.weeklyResults.franchise.player[o].id);
							break;
						case "nonstarter":
							0 === ls_best_lineup ? ls_rosters[e.weeklyResults.franchise.id].NS.push(e.weeklyResults.franchise.player[o].id) : ls_rosters[e.weeklyResults.franchise.id].R.push(e.weeklyResults.franchise.player[o].id);
							break;
						case "taxisquad":
							ls_rosters[e.weeklyResults.franchise.id].TS.push(e.weeklyResults.franchise.player[o].id);
							break;
						case "injuredreserve":
							ls_rosters[e.weeklyResults.franchise.id].IR.push(e.weeklyResults.franchise.player[o].id)
						}
						void 0 === ls_player[e.weeklyResults.franchise.player[o].id] && (l += e.weeklyResults.franchise.player[o].id + ",")
					}
				} catch (e) {}
			}
		} catch (e) {}
	}), "" !== l) {
		t = baseURLDynamic + "/" + year + "/export?TYPE=players&L=" + league_id + "&PLAYERS=" + l + "&DETAILS=&SINCE&JSON=1&rand=" + Math.random();
		$.ajax({
			type: "GET",
			url: t,
			async: !1
		}).done(function(e) {
			try {
				for (var t = 0; t < e.players.player.length; t++)
					ls_player[e.players.player[t].id] = new LSPlayer(e.players.player[t].id, e.players.player[t].name, e.players.player[t].position, e.players.player[t].team, e.players.player[t].position)
			} catch (t) {
				ls_player[e.players.player.id] = new LSPlayer(e.players.player.id, e.players.player.name, e.players.player.position, e.players.player.team, e.players.player.position)
			}
		})
	}
	ls_create_players_roster(),
	switch_game(s, a),
	jQuery('#body_ajax_ls #container-wrap,#body_ajax_ls table[style="margin-top:4px"],#body_ajax_ls table#ls_ticker_tab_id,#body_ajax_ls table#ls_ticker_tab_id + p,#body_ajax_ls table#ls_ticker_tab_id + p + p,#body_ajax_ls p:last-of-type,#body_ajax_ls #ls_setting_drop,#body_ajax_ls #myNavigationHolder,#body_ajax_ls table.report + div.mobile-wrap').css("visibility", "visible")
}
var ls_players_nfl = new Array,
	ls_players_roster = new Array;
function ls_create_players_roster() {
	for (var e in ls_rosters)
		if (ls_rosters.hasOwnProperty(e)) {
			try {
				for (var t = 0; t < ls_rosters[e].S.length; t++)
					ls_players_roster[ls_rosters[e].S[t]] = {
						fid: e,
						status: "S",
						title: "Starter"
					}
			} catch (e) {}
			try {
				for (t = 0; t < ls_rosters[e].NS.length; t++)
					ls_players_roster[ls_rosters[e].NS[t]] = {
						fid: e,
						status: "NS",
						title: "Non-Starter"
					}
			} catch (e) {}
			try {
				for (t = 0; t < ls_rosters[e].IR.length; t++)
					ls_players_roster[ls_rosters[e].IR[t]] = {
						fid: e,
						status: "IR",
						title: "Fantasy IR"
					}
			} catch (e) {}
			try {
				for (t = 0; t < ls_rosters[e].TS.length; t++)
					ls_players_roster[ls_rosters[e].TS[t]] = {
						fid: e,
						status: "TS",
						title: "Taxi Squad"
					}
			} catch (e) {}
			try {
				for (t = 0; t < ls_rosters[e].R.length; t++)
					ls_players_roster[ls_rosters[e].R[t]] = {
						fid: e,
						status: "R",
						title: "Reserve"
					}
			} catch (e) {}
		}
}
function ls_nfl_stats_popup(e) {
	if (void 0 === ls_players_nfl[e]) {
		ls_players_nfl[e] = new Array;
		var t = baseURLDynamic + "/" + year + "/export?TYPE=players&L=" + league_id + "&PLAYERS=&DETAILS=&SINCE&JSON=1&rand=" + Math.random();
		$.ajax({
			type: "GET",
			url: t,
			async: !1
		}).done(function(t) {
			for (var a = 0; a < t.players.player.length; a++)
				t.players.player[a].team === e && void 0 !== ls_team_pos[t.players.player[a].position] && (ls_players_nfl[e][t.players.player[a].id] = {
					name: t.players.player[a].name,
					position: t.players.player[a].position,
					isTeam: ls_team_pos[t.players.player[a].position],
					isDefense: ls_def_pos[t.players.player[a].position]
				}),
				void 0 === ls_player[t.players.player[a].id] && (ls_player[t.players.player[a].id] = new LSPlayer(t.players.player[a].id, t.players.player[a].name, t.players.player[a].position, t.players.player[a].team, t.players.player[a].position))
		})
	}
	var a = "";
	for (var s in a += '<ul class="ls-popup-position-ul">', ls_team_pos) {
		a += '<li class="ls-popup-position-li">' + s + "</li>",
		a += '<ul class="ls-popup-player-ul">';
		var l = [];
		for (var o in ls_players_nfl[e])
			if (ls_players_nfl[e].hasOwnProperty(o) && s === ls_players_nfl[e][o].position) {
				try {
					if (1 === ls_team_pos[s] && 1 === ls_def_pos[s])
						var r = get_tstats_str(e);
					else if (1 === ls_team_pos[s] && 1 !== ls_def_pos[s])
						r = get_otstats_str(e);
					else
						r = get_stats_str(o)
				} catch (e) {
					r = ""
				}
				if ("" !== r) {
					var i = parseFloat(update_player_points(o)),
						n = ls_players_nfl[e][o].name.substr(ls_players_nfl[e][o].name.indexOf(",") + 2, ls_players_nfl[e][o].name.length) + " " + ls_players_nfl[e][o].name.substr(0, ls_players_nfl[e][o].name.indexOf(",")),
						d = "",
						c = "";
					if (void 0 !== ls_players_roster[o])
						switch (ls_popup_status && (n += '<span class="ls-popup-status ls-popup-status-' + ls_players_roster[o].status.toLowerCase() + '" title="' + ls_players_roster[o].title + '">' + ls_players_roster[o].status + "</span>"), ls_popup_abbrev_name_icon) {
						case 0:
							if ("" === franchiseDatabase["fid_" + ls_players_roster[o].fid].abbrev)
								c = '<span class="ls-popup-text">' + franchiseDatabase["fid_" + ls_players_roster[o].fid].name + "</span>";
							else
								c = '<span class="ls-popup-text" title="' + franchiseDatabase["fid_" + ls_players_roster[o].fid].name + '">' + franchiseDatabase["fid_" + ls_players_roster[o].fid].abbrev + "</span>";
							break;
						case 1:
							c = '<span class="ls-popup-text">' + franchiseDatabase["fid_" + ls_players_roster[o].fid].name + "</span>";
							break;
						case 2:
							if ("" === franchiseDatabase["fid_" + ls_players_roster[o].fid].icon)
								if ("" === franchiseDatabase["fid_" + ls_players_roster[o].fid].abbrev)
									c = '<span class="ls-popup-text">' + franchiseDatabase["fid_" + ls_players_roster[o].fid].name + "</span>";
								else
									c = '<span class="ls-popup-text" title="' + franchiseDatabase["fid_" + ls_players_roster[o].fid].name + '">' + franchiseDatabase["fid_" + ls_players_roster[o].fid].abbrev + "</span>";
							else
								d = '<span class="ls-popup-icon-wrapper"><img class="ls-popup-icon" src=' + franchiseDatabase["fid_" + ls_players_roster[o].fid].icon + ' title="' + franchiseDatabase["fid_" + ls_players_roster[o].fid].name + '" alt="" /></span>'
						}
					l.push({
						points: i,
						html: '<li class="ls-popup-player-li"><span class="ls-popup-points" style="cursor:pointer" title="Click to View Details" onclick="ls_explain_points(\'' + o + "')\">" + format_points(i) + "</span> " + n + d + c + ' <span class="ls-popup-stats">' + r + "</span></li>"
					})
				}
			}
		l.sort(function(e, t) {
			return t.points - e.points
		});
		for (var p = 0; p < l.length; p++)
			a += l[p].html;
		a += "</ul>"
	}
	a += "</ul>",
	jQuery("#ls-modal-header-content").html("Live Stats for " + e),
	jQuery("#ls-modal-content").html(a),
	jQuery("#ls-modal-container").attr("style", "display:block"),
	jQuery("#ls-modal-content").scrollTop(0)
}
var ls_nfl_final = 0,
	ls_nfl_sched = 0;
function ls_update_nfl_box() {
	for (var e in ls_nfl_games)
		if (ls_nfl_games.hasOwnProperty(e) && "home" === ls_nfl_games[e].where)
			try {
				var t = ls_nfl_games[e].opp,
					a = "",
					s = ls_nfl_games[e].game_status.substring(ls_nfl_games[e].game_status.indexOf("<br>") + 4, ls_nfl_games[e].game_status.length);
				-1 !== s.indexOf("<br>") && (a = '<div class="ls_down_dist" style="font-size:9px;font-style:italic">' + s.substring(s.indexOf("<br>") + 4, s.length) + "</div>", s = s.substring(0, s.indexOf("<br>")));
				var l = "",
					o = "";
				try {
					l = '<span class="ls-nfl-record" style="font-size:10px;font-style:italic">(' + ls_nfl_records[e].w + "-" + ls_nfl_records[e].l + "-" + ls_nfl_records[e].t + ")</span>"
				} catch (e) {}
				try {
					o = '<span class="ls-nfl-record" style="font-size:10px;font-style:italic">(' + ls_nfl_records[t].w + "-" + ls_nfl_records[t].l + "-" + ls_nfl_records[t].t + ")</span>"
				} catch (e) {}
				if (ls_tstats.hasOwnProperty(e) && void 0 !== ls_tstats[e].TPS && (l = ls_tstats[e].TPS), ls_tstats.hasOwnProperty(t) && void 0 !== ls_tstats[t].TPS && (o = ls_tstats[t].TPS), jQuery(".nflgffpts_" + e).html(l), jQuery(".nflgffpts_" + t).html(o), jQuery("#ls_nfl_box_status_" + e).removeClass("ls_nfl_box_over ls_nfl_box_sched ls_nfl_box_inprog"), jQuery(".ls_box_possession_" + e).removeClass("ls_nothas_ball ls_in_redzone ls_has_ball"), jQuery(".ls_box_possession_" + t).removeClass("ls_nothas_ball ls_in_redzone ls_has_ball"), 0 === ls_nfl_games[e].secs_left || "Final" === s ? (jQuery("#ls_nfl_box_status_" + e).addClass("ls_nfl_box_over"), jQuery(".ls_down_dist_" + e).html(""), jQuery(".ls_down_dist_" + t).html("")) : 3600 === ls_nfl_games[e].secs_left ? jQuery("#ls_nfl_box_status_" + e).addClass("ls_nfl_box_sched") : (jQuery("#ls_nfl_box_status_" + e).addClass("ls_nfl_box_inprog"), jQuery(".ls-update-box.game_" + e).hasClass("ls_noposs") && (jQuery(".ls_box_possession_" + e).addClass("ls_nothas_ball"), jQuery(".ls_down_dist_" + e).html("")), jQuery(".ls-update-box.game_" + e).hasClass("ls_redzone") && (jQuery(".ls_box_possession_" + e).addClass("ls_in_redzone"), jQuery(".ls_down_dist_" + e).html(a)), jQuery(".ls-update-box.game_" + e).hasClass("ls_withposs") && (jQuery(".ls_box_possession_" + e).addClass("ls_has_ball"), jQuery(".ls_down_dist_" + e).html(a)), jQuery(".ls-update-box.game_" + t).hasClass("ls_noposs") && (jQuery(".ls_box_possession_" + t).addClass("ls_nothas_ball"), jQuery(".ls_down_dist_" + t).html("")), jQuery(".ls-update-box.game_" + t).hasClass("ls_redzone") && (jQuery(".ls_box_possession_" + t).addClass("ls_in_redzone"), jQuery(".ls_down_dist_" + t).html(a)), jQuery(".ls-update-box.game_" + t).hasClass("ls_withposs") && (jQuery(".ls_box_possession_" + t).addClass("ls_has_ball"), jQuery(".ls_down_dist_" + t).html(a))), jQuery("#ls_nfl_box_status_" + e).html(s), "Final" === s)
					try {
						parseInt(ls_tstats[e].TPS) > parseInt(ls_tstats[t].TPS) ? (jQuery(".nflggstat_" + e).html('<i class="fa fa-caret-left" aria-hidden="true"></i>'), jQuery(".nflggstat_" + e).parent().addClass("winner_mark")) : parseInt(ls_tstats[t].TPS) > parseInt(ls_tstats[e].TPS) && (jQuery(".nflggstat_" + t).html('<i class="fa fa-caret-left" aria-hidden="true"></i>'), jQuery(".nflggstat_" + t).parent().addClass("winner_mark"))
					} catch (e) {}
			} catch (e) {}
	var r = "",
		i = "",
		n = "",
		d = "",
		c = 0,
		p = 0;
	if (jQuery("#nfl_games tr td div.ls_other_game").each(function() {
		var e = $(this).attr("id").substr(5, 3),
			t = '<div id="nflg_' + e + '" class="ls_other_game" style="display:inline-block;margin:0 2px;min-width:110px;cursor:default;width:auto">' + $(this).html() + "</div>";
		switch (ls_nfl_games[e].status) {
		case "INPROG":
			r += t;
			break;
		case "OVER":
			n += t,
			c++;
			break;
		case "SCHED":
			i += t,
			p++;
			break;
		default:
			d += t
		}
	}), c > ls_nfl_final || p < ls_nfl_sched) {
		var _ = "";
		_ += r,
		_ += i,
		_ += n,
		_ += d,
		jQuery("#nfl_games tr td").html(_),
		ls_nfl_final = c,
		ls_nfl_sched = p
	}
}
function ls_create_nfl_box() {
	var e = "";
	jQuery("#hide_nfl_boxscore_cb").is(":checked") ? e += '<div class="mobile-wrap ls-boxscore ls-nfl-boxscore" style="margin-top:5px;text-align:center;display:none"><div class="ls_scroller">' : e += '<div class="mobile-wrap ls-boxscore ls-nfl-boxscore" style="margin-top:5px;text-align:center"><div class="ls_scroller">',
	e += '<table id="nfl_games" style="table-layout:fixed;font-size:13px" border="0" cellpadding="0" cellspacing="2"><tbody><tr><td>';
	var t = "",
		a = "",
		s = "",
		l = "";
	for (var o in ls_nfl_games)
		if (ls_nfl_games.hasOwnProperty(o) && "home" === ls_nfl_games[o].where) {
			var r = ls_nfl_games[o].opp,
				i = "";
			switch (i += '<div id="nflg_' + o + '" class="ls_other_game" style="display:inline-block;margin:0 2px;min-width:110px;cursor:default;width:auto">', i += '<table border="0" cellspacing="0" cellpadding="0">', i += "<tbody>", i += "<tr onclick=\"ls_nfl_stats_popup('" + r + '\')" title="Live Stats for ' + r + '"><td style="position:relative;height:22px" class="ls_og_cell ls_box_possession ls_box_possession_' + r + '"><img src="//www.nitrografixx.com/MFL-Popups/svg-nfl-logos/' + r + '.svg" class="ls_nfl_box_icon" style="height:30px;max-width:20px;max-height:20px;" alt="' + r + '" title="' + r + '" /><span class="ls-update-box game_' + r + '" style="display:none"></span></td><td style="font-size:9px;font-style:italic;text-align:left" class="ls_down_dist_' + r + '"></td><td align="right" style="border:none;"><div class="nflgffpts nflgffpts_' + r + '">0</div></td><td style="border:none;"><div style="width:2px" class="nflggstat nflggstat_' + r + '">&nbsp;</div></td></tr>', i += "<tr onclick=\"ls_nfl_stats_popup('" + o + '\')" title="Live Stats for ' + o + '"><td style="position:relative;height:22px" class="ls_og_cell ls_box_possession ls_box_possession_' + o + '"><img src="//www.nitrografixx.com/MFL-Popups/svg-nfl-logos/' + o + '.svg" class="ls_nfl_box_icon" style="height:30px;max-width:20px;max-height:20px;" alt="' + o + '" title="' + o + '" /><span class="ls-update-box game_' + o + '" style="display:none"></span></td><td style="font-size:9px;font-style:italic;text-align:left" class="ls_down_dist_' + o + '"></td><td align="right" style="border:none;"><div class="nflgffpts nflgffpts_' + o + '">0</div></td><td style="border:none;"><div style="width:2px" class="nflggstat nflggstat_' + o + '">&nbsp;</div></td></tr>', i += '<tr><td class="ls_og_cell_status" colspan="4" style="height:16px"><span id="ls_nfl_box_status_' + o + '" class="ls_nfl_box_status" style="font-size:11px">Gametime</span></td></tr>', i += "</tbody>", i += "</table>", i += "</div>", ls_nfl_games[o].status) {
			case "INPROG":
				t += i;
				break;
			case "OVER":
				s += i,
				ls_nfl_final++;
				break;
			case "SCHED":
				a += i,
				ls_nfl_sched++;
				break;
			default:
				l += i
			}
		}
	e += t,
	e += a,
	e += s,
	e += l,
	e += "</td></tr></tbody></table>",
	e += "</div>",
	jQuery(".settings-mobile-wrap").after(e)
}
function ls_explain_points(e) {
	jQuery("#ls-modal-container").addClass("hide-overlay");
	var t = "",
		a = ls_player[e].pos;
	if (ls_includeProjections)
		var s = isNaN(ls_nfl_games[ls_player[e].nfl_team].secs_left) ? 0 : ls_nfl_games[ls_player[e].nfl_team].secs_left,
			l = isNaN(parseFloat(ls_projections["pid_" + e])) ? 0 : parseFloat(ls_projections["pid_" + e]);
	var o = 0;
	if (ls_explain = "", 1 === ls_team_pos[a]) {
		var r = ls_player[e].nfl_team;
		void 0 !== ls_tstats[r] && (points = score_player(r, a))
	} else
		0 === ls_team_pos[a] && void 0 !== ls_stats[e] && (points = score_player(e, a));
	if (t += '<div class="ls-explain-points-wrapper" style="padding-left:40px"><div class="ls-explain-points-name" style="font-size:14px;margin-left:-20px;padding-bottom:8px;font-weight:bold">' + ls_player[e].name + " " + ls_player[e].nfl_team + " " + ls_player[e].pos + "</div>", "" !== ls_explain) {
		t += '<ul class="ls-explain-points-ul">';
		var n = ls_explain.split("|");
		for (i = 0; i < n.length; i++)
			if ("" !== n[i]) {
				var d = n[i].split(",");
				try {
					o += parseFloat(d[2])
				} catch (e) {}
				t += '<li class="ls-explain-points-li">' + d[2] + " points for " + d[1] + " ",
				void 0 !== ls_cat_desc[d[0]] ? t += ls_cat_desc[d[0]] : t += d[0],
				t += "</li>"
			}
		t += "</ul>",
		t += '<div class="ls-explain-points-total" style="font-size:16px;margin-left:-20px;padding-top:8px;font-weight:bold">' + format_points(o) + "</div>"
	} else
		t += '<div class="ls-explain-no-stats">No stats</div>';
	if (ls_includeProjections) {
		var c = o + s / 3600 * l;
		$('input[name="hide_projections"]').is(":checked") ? t += '<div class="ls_projections" style="display:none">' : t += '<div class="ls_projections">',
		t += '<hr style="margin:10px 5px 10px -36px;border-color:#555">',
		3600 === s ? t += '<div class="ls-explain-points-orig-proj" style="font-size:12px;margin-left:-20px;padding-top:4px;font-weight:bold"><span style="display:inline-block;min-width:90px;text-align:right">Original Proj :</span><span style="display:inline-block;text-align:right;min-width:44px">' + format_points(l) + "</span></div>" : 0 === s ? (t += '<div class="ls-explain-points-orig-proj" style="font-size:12px;margin-left:-20px;padding-top:4px;font-weight:bold"><span style="display:inline-block;min-width:90px;text-align:right">Original Proj :</span><span style="display:inline-block;text-align:right;min-width:44px">' + format_points(l) + "</span></div>", t += o - l < 0 ? '<div class="ls-explain-points-diff" style="font-size:12px;margin-left:-20px;padding-top:4px;font-weight:bold"><span style="display:inline-block;min-width:90px;text-align:right">Difference :</span><span class="ls_below_projected" style="display:inline-block;text-align:right;min-width:44px">' + format_points(o - l) + "</span></div>" : '<div class="ls-explain-points-diff" style="font-size:12px;margin-left:-20px;padding-top:4px;font-weight:bold"><span style="display:inline-block;min-width:90px;text-align:right">Difference :</span><span class="ls_above_projected" style="display:inline-block;text-align:right;min-width:44px">+' + format_points(o - l) + "</span></div>") : (t += '<div class="ls-explain-points-orig-proj" style="font-size:12px;margin-left:-20px;padding-top:4px;font-weight:bold"><span style="display:inline-block;min-width:90px;text-align:right">Original Proj :</span><span style="display:inline-block;text-align:right;min-width:44px">' + format_points(l) + "</span></div>", t += '<div class="ls-explain-points-pace" style="font-size:12px;margin-left:-20px;padding-top:4px;font-weight:bold"><span style="display:inline-block;min-width:90px;text-align:right">Pace Points :</span><span style="display:inline-block;text-align:right;min-width:44px">' + format_points(c) + "</span></div>", t += c - l < 0 ? '<div class="ls-explain-points-diff" style="font-size:12px;margin-left:-20px;padding-top:4px;font-weight:bold"><span style="display:inline-block;min-width:90px;text-align:right">Difference :</span><span class="ls_below_projected" style="display:inline-block;text-align:right;min-width:44px">' + format_points(c - l) + "</span></div>" : '<div class="ls-explain-points-diff" style="font-size:12px;margin-left:-20px;padding-top:4px;font-weight:bold"><span style="display:inline-block;min-width:90px;text-align:right">Difference :</span><span class="ls_above_projected" style="display:inline-block;text-align:right;min-width:44px">+' + format_points(c - l) + "</span></div>"),
		t += "</div>"
	}
	t += "</div>",
	jQuery("#ls-modal-container-2 #ls-modal-header-content").html("Points Breakdown"),
	jQuery("#ls-modal-container-2 #ls-modal-content").html(t),
	jQuery("#ls-modal-container-2").attr("style", "display:block"),
	jQuery("#ls-modal-container-2 #ls-modal-content").scrollTop(0)
}
if (document.getElementById("body_ajax_ls")) {
	jQuery("h4:first").remove(),
	jQuery("#other_games").wrap('<div class="mobile-wrap ls-boxscore"></div>'),
	jQuery(".ls-boxscore #other_games").wrap('<div class="ls_scroller"></div>'),
	jQuery("table").has("div.ls-boxscore").addClass("ls-outer-table"),
	jQuery("td.mobile-view").wrapInner('<div class="mobile-wrap ls-matchup"></div>'),
	jQuery("td").has("div.ls-boxscore").css({
		padding: "0",
		"text-align": "center"
	}),
	jQuery("div.mobile-wrap:first table:first").unwrap(),
	jQuery("p").wrapAll('<div class="mobile-wrap ls-btm-table"></div>'),
	jQuery("div.mobile-wrap > table.ls-outer-table").unwrap(),
	jQuery('.ls_marquee_label:contains("Playing")').addClass("playing").text("P"),
	jQuery('.ls_marquee_label:contains("Yet"):contains("to"):contains("Play")').addClass("ytp").text("YTP"),
	jQuery('.ls_marquee_label:contains("Minutes"):contains("Remaining")').addClass("pmr").text("PMR"),
	"1" === localStorage["ls_includeNFLBox_" + league_id] ? jQuery("#hide_ticker_cb").parent().append(' | <input type="checkbox" name="hide_nfl_boxscore" checked="checked" id="hide_nfl_boxscore_cb" onclick="ls_hide_nfl_boxscore(this)"> Hide NFL') : jQuery("#hide_ticker_cb").parent().append(' | <input type="checkbox" name="hide_nfl_boxscore" id="hide_nfl_boxscore_cb" onclick="ls_hide_nfl_boxscore(this)"> Hide NFL'),
	ls_includeProjections && ("1" === localStorage["ls_includeProjections_" + league_id] ? jQuery("#hide_ticker_cb").parent().append(' | <input type="checkbox" name="hide_projections" checked="checked" id="hide_projections_cb" onclick="ls_hide_projections(this)"> Hide Pace') : jQuery("#hide_ticker_cb").parent().append(' | <input type="checkbox" name="hide_projections" id="hide_projections_cb" onclick="ls_hide_projections(this)"> Hide Pace')),
	jQuery('<div id="ls_setting_drop"><div class="settings-mobile-wrap"><div class="ls_setting_container"><span class="ls_toggle_settings" style="cursor:pointer;font-size:16px;padding-left:5px;width:100%;display:block;"><i class="fa fa-cogs" aria-hidden="true"></i> Settings</span><div class="ls_append_input" style="display:none;margin-left:5px"></div></div></div></div>').insertBefore(".ls-outer-table"),
	jQuery("input#hide_nonstarters_cb").wrap('<div class="hide_bench"></div>').after('<label for="hide_nonstarters_cb">Bench</label>'),
	jQuery("input#hide_game_info_cb").wrap('<div class="hide_bench"></div>').after('<label for="hide_game_info_cb">Games</label>'),
	jQuery("input#hide_stats_cb").wrap('<div class="hide_bench"></div>').after('<label for="hide_stats_cb">Stats</label>'),
	jQuery("input#hide_ticker_cb").wrap('<div class="hide_bench"></div>').after('<label for="hide_ticker_cb">Ticker</label>'),
	jQuery("input#hide_nfl_boxscore_cb").wrap('<div class="hide_bench" id="ls_nfl_boxscore_wrapper"></div>').after('<label for="hide_nfl_boxscore_cb">NFL</label>'),
	ls_includeProjections && jQuery("input#hide_projections_cb").wrap('<div class="hide_bench" id="ls_pace_wrapper"></div>').after('<label for="hide_projections_cb">Pace</label>'),
	jQuery(".hide_bench").appendTo(".ls_append_input"),
	jQuery("#ls_setting_drop .ls_toggle_settings").on("click", function() {
		$(".ls_append_input").slideToggle("500")
	}),
	jQuery('input[name="hide_stats"]').on("click", function() {
		$("#roster_away td, #roster_home td").toggleClass("td-pad")
	}),
	jQuery('<div id="ls_mfl_notes"><div class="ls_update_msg" style="display:inline;text-align:center">Data last updated on: </div> , stats will update roughly every 40 seconds while games are in progress.<br>Stats are unofficial and subject to change. Official results can be viewed on <a href="' + baseURLDynamic + "/" + year + "/options?L=" + league_id + '&O=22" target="_blank">Weekly Results</a></div>').insertAfter("#ls_ticker_tab_id"),
	ls_orig_proj_when_final && jQuery("#ls_mfl_notes").append('<br><span class="ls_projections ls_pace_legend"><span class="ls_pace_legend_title" style="padding:0 3px">Pace Legend:</span><span class="ls_above_projected" style="padding:0 3px">Above Projected</span><span class="ls_below_projected" style="padding:0 3px">Below Projected</span><span class="ls_at_projected" style="padding:0 3px">At Projected</span><span class="ls_projected" style="padding:0 3px">Original Projection</span></span>'),
	jQuery("#last_update").appendTo(".ls_update_msg"),
	jQuery("div.ls-btm-table").remove(),
	jQuery("tr").has(".ls-matchup").addClass("ls_players_table"),
	jQuery('<tr><td id="LS_TopTableHolder" colspan="2"><div class="mobile-wrap"><table class="LS_MainScoreboard" style="table-layout:fixed"><tbody><tr><td id="LS_AwayTeamName" class="ls-bye-hide"></td><td colspan="6" rowspan="2" id="LS_CenterTop" class="ls-bye-hide"><span class="hometeam ls-bye-hide">HOME</span><span class="awayteam ls-bye-hide">AWAY</span></td><td id="LS_HomeTeamName"></td></tr><tr><td id="LS_AwayTeamRecord" class="ls-bye-hide">0-0-0</td><td id="LS_HomeTeamRecord">0-0-0</td></tr><tr><td rowspan="2" id="LS_AwayScore" class="ls-bye-hide"></td><td class="LS_ScoreboardTitle ls-bye-hide" title="Players Currently Playing">P</td><td class="LS_ScoreboardTitle ls-bye-hide" title="Players Yet to Play">YTP</td><td class="LS_ScoreboardTitle ls-bye-hide" title="Player Minutes Remaining">PMR</td><td class="LS_ScoreboardTitle" title="Player Minutes Remaining">PMR</td><td class="LS_ScoreboardTitle" title="Players Yet to Play">YTP</td><td class="LS_ScoreboardTitle" title="Players Currently Playing">P</td><td rowspan="2" id="LS_HomeScore"></td></tr><tr><td id="LS_AwayPlayers" class="prmin ls-bye-hide" title="Players Currently Playing"></td><td id="LS_AwayYTP" class="prmin ls-bye-hide" title="Players Yet to Play"></td><td id="LS_AwayPMR" class="prmin ls-bye-hide" title="Player Minutes Remaining"></td><td id="LS_HomePMR" class="prmin" title="Player Minutes Remaining"></td><td id="LS_HomeYTP" class="prmin" title="Players Yet to Play"></td><td id="LS_HomePlayers" class="prmin" title="Players Currently Playing"></td></tr></tbody></table></div></td></tr>').insertBefore(".ls_players_table"),
	jQuery("#LS_TopTableHolder #LS_AwayTeamName").append($("#ficon_away")),
	jQuery("#LS_TopTableHolder #LS_HomeTeamName").append($("#ficon_home")),
	jQuery("#LS_TopTableHolder #LS_AwayTeamName").append($("#fname_away")),
	jQuery("#LS_TopTableHolder #LS_HomeTeamName").append($("#fname_home")),
	jQuery("#LS_TopTableHolder #LS_AwayScore").append($("#ffpts_away")),
	jQuery("#LS_TopTableHolder #LS_HomeScore").append($("#ffpts_home")),
	jQuery("#LS_TopTableHolder #LS_AwayPlayers").append($("#playing_away")),
	jQuery("#LS_TopTableHolder #LS_HomePlayers").append($("#playing_home")),
	jQuery("#LS_TopTableHolder #LS_AwayYTP").append($("#ytp_away")),
	jQuery("#LS_TopTableHolder #LS_HomeYTP").append($("#ytp_home")),
	jQuery("#LS_TopTableHolder #LS_AwayPMR").append($("#pmr_away")),
	jQuery("#LS_TopTableHolder #LS_HomePMR").append($("#pmr_home")),
	jQuery("#LS_AwayTeamName,#LS_AwayTeamRecord,#LS_AwayScore").on("click", function() {
		$(".ls_players_table td.mobile-view:last-of-type").css("display", "none"),
		$(".ls_players_table td.mobile-view:first-of-type").css("display", "table-cell"),
		$("#LS_AwayTeamName div").css("opacity", "1"),
		$("#LS_HomeTeamName div").css("opacity", ".3")
	}),
	jQuery("#LS_HomeTeamName,#LS_HomeTeamRecord,#LS_HomeScore").on("click", function() {
		$(".ls_players_table td.mobile-view:first-of-type").css("display", "none"),
		$(".ls_players_table td.mobile-view:last-of-type").css("display", "table-cell"),
		$("#LS_HomeTeamName div").css("opacity", "1"),
		$("#LS_AwayTeamName div").css("opacity", ".3")
	}),
	ls_scoreboardName && jQuery("#LS_CenterTop").html("<span class='hometeam ls-bye-hide'>HOME</span><span class='awayteam ls-bye-hide'>AWAY</span>" + ls_scoreboardName),
	showTeamName || jQuery("#fname_away,#fname_home").css("display", "none"),
	showTeamIcon || jQuery("#ficon_away,#ficon_home").css("display", "none"),
	ls_parse_standings(),
	ls_includeProjections && ls_parse_projections(),
	ls_includeInjuryStatus && ls_parse_injuries();
	var ls_is_live_week = !0;
	if ("undefined" != typeof ls_liveScoringWeekCheck) {
		if (ls_navbar(), -1 === location.href.indexOf("W="))
			if (liveScoringWeek < 1)
				var _liveScoringWeek = 1;
			else
				_liveScoringWeek = liveScoringWeek;
		else
			_liveScoringWeek = parseInt(location.href.substr(location.href.indexOf("W=") + 2, 2));
		liveScoringWeek !== _liveScoringWeek && (ls_is_live_week = !1)
	}
	ls_is_live_week ? (ls_update_nfl_records(), ls_create_players_roster(), setTimeout("ls_scoring_run()", 50), ls_includeProjections && (setTimeout("ls_projections_html()", 1e3), setTimeout("ls_update_projections()", 1e3)), ls_includeInjuryStatus && setTimeout("ls_update_injuries()", 1e3), ls_add_icons(), ls_add_caption(), setTimeout("ls_format_score()", 1e3), setTimeout("ls_add_records()", 1500), setTimeout("ls_check_if_final()", 2e3), ls_excludeIR && setTimeout("ls_removeIR()", 1e3), ls_excludeTaxi && setTimeout("ls_removeTaxi()", 1e3), ls_create_nfl_box(), ls_update_nfl_box()) : (ls_timeout = 0, setTimeout("ls_update_week()", 1e3), setTimeout("ls_update_all = 1", 1050), setTimeout("ls_create_nfl_box()", 1100), setTimeout("ls_update_nfl_box()", 1200)),
	update_scores = function() {
		var e = update_scores;
		return function() {
			$(".ls_team_points span,.ls_team_points a").contents().unwrap(),
			$(".ls_team_points a:empty").remove(),
			e.apply(this, arguments),
			ls_after_update_scores(),
			$('.ls_projections.ls_pace_box:contains("NaN")').html('<i class="fa fa-spinner fa-spin" style="font-size:14px" title="Wait..As MFL Prepares Games Starting"></i>'),
			$('.ls_game_info:contains("undefined")').html('<i class="fa fa-spinner fa-spin" style="font-size:22px" title="Wait..As MFL Prepares Games Starting"></i>'),
			$('.ls_projections span.ls_at_projected:contains("NaN")').html('<i class="fa fa-spinner fa-spin" style="font-size:22px" title="Wait..As MFL Prepares Games Starting"></i>')
		}
	}(),
	ls_is_live_week && setTimeout(function() {
		jQuery('#body_ajax_ls #container-wrap,#body_ajax_ls table[style="margin-top:4px"],#body_ajax_ls table#ls_ticker_tab_id,#body_ajax_ls table#ls_ticker_tab_id + p,#body_ajax_ls table#ls_ticker_tab_id + p + p,#body_ajax_ls p:last-of-type,#body_ajax_ls #ls_setting_drop,#body_ajax_ls #myNavigationHolder,#body_ajax_ls table.report + div.mobile-wrap').css("visibility", "visible")
	}, 2500),
	jQuery("document").ready(function() {
		setTimeout(function() {
			$("div.current_matchup").trigger("click")
		}, 100),
		setTimeout(function() {
			$("div.current_matchup").trigger("click")
		}, 1e3),
		setTimeout(function() {
			$("div.current_matchup").trigger("click")
		}, 2e3),
		setTimeout(function() {
			$("div.current_matchup").trigger("click")
		}, 3e3)
	}),
	jQuery("body").append('<div id="ls-modal-container" class="ls-modal"><div class="ls-modal-content"><div class="ls-modal-header"><span class="close" onclick="jQuery(\'#ls-modal-container\').removeAttr(\'style\')">X</span><h2 id="ls-modal-header-content"></h2></div><div class="ls-modal-body"><p id="ls-modal-content"></p></div></div></div><div id="ls-modal-container-2" class="ls-modal"><div class="ls-modal-content"><div class="ls-modal-header"><span class="close" onclick="jQuery(\'#ls-modal-container-2\').removeAttr(\'style\');jQuery(\'#ls-modal-container\').removeClass(\'hide-overlay\')">X</span><h2 id="ls-modal-header-content"></h2></div><div class="ls-modal-body"><p id="ls-modal-content"></p></div></div></div>'),
	jQuery("#ls-modal-container").on("click", function() {
		$("#ls-modal-container").css("display", "none")
	}),
	jQuery("#ls-modal-container-2").on("click", function() {
		$("#ls-modal-container-2").css("display", "none"),
		$("#ls-modal-container").removeClass("hide-overlay")
	}),
	jQuery(".ls-modal-content").on("click", function(e) {
		e.stopPropagation()
	}),
	setTimeout("clear_highlights()", 500)
}
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	style = document.createElement("style");
	document.head.appendChild(style),
	style.sheet.insertRule("::-webkit-scrollbar{display:none}")
}
function init_marquee(e, t) {
	var a = "fid_" + t,
		s = "";
	"BYE" == t || "AVG" == t ? ("BYE" == t ? (load_elem("fname_" + e, "BYE"), update_field("ffpts_" + e, "&nbsp;")) : (load_elem("fname_" + e, "Average"), ls_avg_field = "ffpts_" + e, ls_do_avg = 1, update_field(ls_avg_field, "&nbsp;")), load_elem("ficon_" + e, "&nbsp;"), update_field("playing_" + e, "&nbsp;"), update_field("ytp_" + e, "&nbsp;"), update_field("pmr_" + e, "&nbsp;")) : null != franchiseDatabase[a].icon && (franchiseDatabase[a].icon.length > 1 && (s = '<img src="' + franchiseDatabase[a].icon + '" ' + ls_icon_dim + ' id="franchiseicon_' + t + '" class="franchiseicon" />'), load_elem("ficon_" + e, s), load_elem("fname_" + e, franchiseDatabase[a].name), update_field("ffpts_" + e, format_points(ls_fran_totals[t].total)), update_field("playing_" + e, ls_fran_totals[t].playing), update_field("ytp_" + e, ls_fran_totals[t].ytp), update_field("pmr_" + e, format_time_rem(ls_fran_totals[t].pmr)))
}
function update_game_status(e) {
	var t = ls_nfl_games[e].opp;
	if (liveScoringWeek < 1)
		var a = 1;
	else
		a = liveScoringWeek;
	var s = '<a target="new" href="pro_matchup?L=' + league_id + "&W=" + a + "&MATCHUP=",
		l = "",
		o = "",
		r = !1;
	if (0 === ls_nfl_games[e].time)
		s = "BYE",
		ls_nfl_games[e].secs_left = 0,
		ls_nfl_games[e].status = "BYE",
		o = "ls_gameis_over";
	else if (ls_nfl_games[e].time > ls_last_update_secs)
		s = (s = "away" === ls_nfl_games[e].where ? s + e + "%2C" + t + '" title="View NFL Game Boxscore"><img src="//www.nitrografixx.com/MFL-Popups/svg-nfl-logos/' + e + '.svg" class="ls_nfl_icon">&nbsp;@&nbsp;<img src="//www.nitrografixx.com/MFL-Popups/svg-nfl-logos/' + t + '.svg" class="ls_nfl_icon">' : s + t + "%2C" + e + '" title="View NFL Game Boxscore"><img src="//www.nitrografixx.com/MFL-Popups/svg-nfl-logos/' + t + '.svg" class="ls_nfl_icon">&nbsp;v&nbsp;<img src="//www.nitrografixx.com/MFL-Popups/svg-nfl-logos/' + e + '.svg" class="ls_nfl_icon">') + "</a><br>" + ls_nfl_games[e].pretty_time,
		ls_nfl_games[e].secs_left = 3600,
		ls_nfl_games[e].status = "SCHED",
		o = "ls_gameis_scheduled";
	else {
		if (void 0 === ls_tstats[e])
			return void console.log("team stats for " + e + " is undefined");
		if (void 0 === ls_tstats[t])
			return void console.log("team stats for " + t + " is undefined");
		if (void 0 === ls_tstats[e].TPS && (ls_tstats[e].TPS = 0), void 0 === ls_tstats[t].TPS && (ls_tstats[t].TPS = 0), s = "away" === ls_nfl_games[e].where ? s + e + "%2C" + t + '" title="View NFL Game Boxscore"><img src="//www.nitrografixx.com/MFL-Popups/svg-nfl-logos/' + e + '.svg" class="ls_nfl_icon">' + ls_tstats[e].TPS + "&nbsp;@&nbsp;" + ls_tstats[t].TPS + '<img src="//www.nitrografixx.com/MFL-Popups/svg-nfl-logos/' + t + '.svg" class="ls_nfl_icon">' : s + t + "%2C" + e + '" title="View NFL Game Boxscore"><img src="//www.nitrografixx.com/MFL-Popups/svg-nfl-logos/' + t + '.svg" class="ls_nfl_icon">' + ls_tstats[t].TPS + "&nbsp;v&nbsp;" + ls_tstats[e].TPS + '<img src="//www.nitrografixx.com/MFL-Popups/svg-nfl-logos/' + e + '.svg" class="ls_nfl_icon">', s += "</a><br>", "" == ls_tstats[e].QUARTER || "F" === ls_tstats[e].QUARTER)
			ls_nfl_games[e].secs_left = 0,
			ls_nfl_games[e].status = "OVER",
			s += "Final",
			o = "ls_gameis_over";
		else {
			var i;
			o = "ls_gameinprogress",
			l = "ls_noposs",
			ls_nfl_games[e].status = "INPROG";
			var n = ls_tstats[e].REMAINING.split(":");
			ls_nfl_games[e].secs_left = 60 * n[0] + Number(n[1]),
			"O" === ls_tstats[e].QUARTER || ls_tstats[e].QUARTER > 4 ? i = "OT" : "H" === ls_tstats[e].QUARTER ? (i = "H", ls_nfl_games[e].secs_left += 1800, r = !0) : (ls_nfl_games[e].secs_left += 900 * (4 - ls_tstats[e].QUARTER), i = ls_tstats[e].QUARTER + "Q"),
			i = i + "&nbsp;" + ls_tstats[e].REMAINING;
			var d = ls_tstats[e].DOWN;
			if (void 0 !== d && 0 !== d || (d = 1), 1 === d ? d += "st" : 2 === d ? d += "nd" : 3 === d ? d += "rd" : 4 === d && (d += "th"), s += i, void 0 !== ls_tstats[e].YARDLINE && "" !== ls_tstats[e].YARDLINE) {
				var c = ls_tstats[e].YARDLINE.split(":"),
					p = c[0],
					_ = Number(c[1]);
				if ("50" == p && (p = "", _ = 50), void 0 !== ls_tstats[e].TOGO && "" !== ls_tstats[e].TOGO)
					s = s + "<br>" + (d + "&nbsp;and&nbsp;" + ls_tstats[e].TOGO + " at " + p + "&nbsp;" + _),
					ls_tstats[e].POSSESSION > 0 && (l = "ls_withposs", p !== e && _ < 20 && (l = "ls_redzone"))
			}
		}
	}
	"ls_gameis_over" === o ? jQuery(".ls_players_table div.game_" + e).closest("tr").removeClass("ls_nothas_ball ls_in_redzone ls_gameinprogress ls_has_ball").addClass("ls_gameis_over") : "ls_gameinprogress" === o ? jQuery(".ls_players_table div.game_" + e).closest("tr").removeClass("ls_gameis_scheduled ls_gameis_over").addClass("ls_gameinprogress") : "ls_gameis_scheduled" === o && jQuery(".ls_players_table div.game_" + e).closest("tr").removeClass("ls_nothas_ball ls_in_redzone ls_has_ball ls_gameinprogress ls_gameis_over").addClass("class", "ls_gameis_scheduled"),
	r && jQuery(".ls_players_table div.game_" + e).closest("tr").closest("tr").removeClass("ls_nothas_ball ls_in_redzone ls_has_ball"),
	ls_nfl_games[e].game_status = s,
	update_field_by_class("game_" + e, s, 1),
	update_class_by_class("game_" + e, l)
}
function update_class_by_class(e, t) {
	for (var a = document.getElementsByClassName(e), s = 0; s < a.length; s++)
		a[s] && ("ls_redzone" !== t && removeClass(a[s], "ls_redzone"), "ls_withposs" !== t && removeClass(a[s], "ls_withposs"), "ls_noposs" !== t && removeClass(a[s], "ls_noposs"), void 0 !== t && "" !== t && addClass(a[s], t));
	"ls_withposs" === t ? jQuery(".ls_players_table div." + e).closest("tr").removeClass("ls_nothas_ball ls_in_redzone").addClass("ls_has_ball") : "ls_noposs" === t ? jQuery(".ls_players_table div." + e).closest("tr").removeClass("ls_has_ball ls_in_redzone").addClass("ls_nothas_ball") : "ls_redzone" === t && jQuery(".ls_players_table div." + e).closest("tr").addClass("ls_in_redzone"),
	jQuery('td.ls_game_info:contains("0:00")').closest("tr").removeClass("ls_has_ball ls_withposs ls_redzone ls_nothas_ball")
}
function ss_checkbox(e) {
	let t = $(e).attr("class");
	$(e).is(":checked") ? ($(".standings-filter ." + t).show(), localStorage.removeItem(league_id + "_" + year + "_" + t)) : ($(".standings-filter ." + t).hide(), localStorage.setItem(league_id + "_" + year + "_" + t, "hidden"))
}
jQuery('#body_home h2.warning:contains("Your Draft Is Scheduled To Start Shortly")').wrap('<span class="alert alert-info-body draft_warning" style="text-align:center"></span>'),
jQuery("#body_home span.draft_warning h2").contents().unwrap(),
jQuery("#body_options_18 .report.nocaption").find('th:contains("Deactivate To IR")').text("Deactivate"),
jQuery("#body_options_18 .report.nocaption").find('th:contains("Activate From IR?")').text("Activate"),
jQuery("#body_options_18 .report.nocaption").find('th:contains("Drop From Roster?")').text("Drop"),
jQuery("#body_options_18 .report.nocaption td.inputfield").find('.warning:contains("Can not be deactivated")').text("Not-Eligible"),
jQuery("#body_options_18 .report.nocaption").find('th:contains("Starter?")').text("Starter"),
jQuery("#body_options_18 .report.nocaption td").find('span.warning:contains("Questionable")').text("Q"),
jQuery("#body_options_18 .report.nocaption td").find('span.warning:contains("Doubtful")').text("D"),
jQuery("#body_options_18 .report.nocaption td").find('span.warning:contains("Out")').text("O"),
jQuery("#body_csetup_draftpref .mobile-wrap table td:last-of-type").remove(),
function(e) {
	e.expr[":"].text = function(t, a, s, l) {
		return e(t).text() === s[3]
	}
}(jQuery),
jQuery('#standings caption span:text("League Standings")').closest("table").addClass("standings-filter"),
jQuery(".standings-filter caption span").last().append('<i class="fa fa-cogs standings-cog" aria-hidden="true" title="Setup Standings Columns"></i>').addClass("standing_cog_span"),
jQuery(".standings-filter th.ficon").text("Franchise"),
jQuery('.standings-filter td[class="#w"],.standings-filter th[class="#w"]').removeClass().addClass("waiver-moves"),
jQuery('.standings-filter td[class="#a"],.standings-filter th[class="#a"]').removeClass().addClass("add-moves"),
jQuery('<div class="standings-settings_overlay" style="display: none;"></div><div id="standings-settings" class="standings-settings-content" style="display:none;"><p style="text-align:center;font-weight:bold;text-decoration:underline;margin:0;font-size:15px">SELECT STANDINGS COLUMNS</p><div class="ss_setting_ck"><input type="checkbox" name="fname_checkbox" id="fname_checkbox" class="fname" checked="checked" onchange="ss_checkbox(this)"><label for="fname_checkbox">Franchise Name</label></div><div class="ss_setting_ck"><input type="checkbox" name="ficon_checkbox" id="ficon_checkbox" class="ficon" checked="checked" onchange="ss_checkbox(this)"><label for="ficon_checkbox">Franchise Icon</label></div><div class="ss_setting_ck"><input type="checkbox" name="ficonname_checkbox" id="ficonname_checkbox" class="ficonname" checked="checked" onchange="ss_checkbox(this)"><label for="ficonname_checkbox">Franchise Icon and Name</label></div><div class="ss_wrapper"><p class="headp-carrot" style="text-align:left;font-weight:bold;margin:0">Overall Columns</p><div class="ss_setting_ck"><input type="checkbox" name="h2hwlt_checkbox" id="h2hwlt_checkbox" class="h2hwlt" checked="checked" onchange="ss_checkbox(this)"><label for="h2hwlt_checkbox">Overall Wins, Losses and Ties</label></div><div class="ss_setting_ck"><input type="checkbox" name="h2hpct_checkbox" id="h2hpct_checkbox" class="h2hpct" checked="checked" onchange="ss_checkbox(this)"><label for="h2hpct_checkbox">Overall Winning Percentage</label></div><div class="ss_setting_ck"><input type="checkbox" name="h2hw_checkbox" id="h2hw_checkbox" class="h2hw" checked="checked" onchange="ss_checkbox(this)"><label for="h2hw_checkbox">Overall Wins</label></div><div class="ss_setting_ck"><input type="checkbox" name="h2hl_checkbox" id="h2hl_checkbox" class="h2hl" checked="checked" onchange="ss_checkbox(this)"><label for="h2hl_checkbox">Overall Losses</label></div><div class="ss_setting_ck"><input type="checkbox" name="h2ht_checkbox" id="h2ht_checkbox" class="h2ht" checked="checked" onchange="ss_checkbox(this)"><label for="h2ht_checkbox">Overall Ties</label></div><div class="ss_setting_ck"><input type="checkbox" name="gb_checkbox" id="gb_checkbox" class="gb" checked="checked" onchange="ss_checkbox(this)"><label for="gb_checkbox">Games Back</label></div><div class="ss_setting_ck"><input type="checkbox" name="strk_checkbox" id="strk_checkbox" class="strk" checked="checked" onchange="ss_checkbox(this)"><label for="strk_checkbox">Winning-Losing Streak</label></div></div><div class="ss_wrapper"><p class="headp-carrot" style="text-align:left;font-weight:bold;margin:0">Division Columns</p><div class="ss_setting_ck"><input type="checkbox" name="divw_checkbox" id="divw_checkbox" class="divw" checked="checked" onchange="ss_checkbox(this)"><label for="divw_checkbox">Divisional Wins</label></div><div class="ss_setting_ck"><input type="checkbox" name="divl_checkbox" id="divl_checkbox" class="divl" checked="checked" onchange="ss_checkbox(this)"><label for="divl_checkbox">Divisional Losses</label></div><div class="ss_setting_ck"><input type="checkbox" name="divt_checkbox" id="divt_checkbox" class="divt" checked="checked" onchange="ss_checkbox(this)"><label for="divt_checkbox">Divisional Ties</label></div><div class="ss_setting_ck"><input type="checkbox" name="divwlt_checkbox" id="divwlt_checkbox" class="divwlt" checked="checked" onchange="ss_checkbox(this)"><label for="divwlt_checkbox">Divisional Wins, Losses and Ties</label></div><div class="ss_setting_ck"><input type="checkbox" name="divpct_checkbox" id="divpct_checkbox" class="divpct" checked="checked" onchange="ss_checkbox(this)"><label for="divpct_checkbox">Divisional Winning Percentage</label></div><div class="ss_setting_ck"><input type="checkbox" name="nondivw_checkbox" id="nondivw_checkbox" class="nondivw" checked="checked" onchange="ss_checkbox(this)"><label for="nondivw_checkbox">Non-Divisional Wins</label></div><div class="ss_setting_ck"><input type="checkbox" name="nondivl_checkbox" id="nondivl_checkbox" class="nondivl" checked="checked" onchange="ss_checkbox(this)"><label for="nondivl_checkbox">Non-Divisional Losses</label></div><div class="ss_setting_ck"><input type="checkbox" name="nondivt_checkbox" id="nondivt_checkbox" class="nondivt" checked="checked" onchange="ss_checkbox(this)"><label for="nondivt_checkbox">Non-Divisional Ties</label></div><div class="ss_setting_ck"><input type="checkbox" name="nondivwlt_checkbox" id="nondivwlt_checkbox" class="nondivwlt" checked="checked" onchange="ss_checkbox(this)"><label for="nondivwlt_checkbox">Non-Divisional Wins, Losses and Ties</label></div><div class="ss_setting_ck"><input type="checkbox" name="nondivpct_checkbox" id="nondivpct_checkbox" class="nondivpct" checked="checked" onchange="ss_checkbox(this)"><label for="nondivpct_checkbox">Non-Divisional Winning Percentage</label></div></div><div class="ss_wrapper"><p class="headp-carrot" style="text-align:left;font-weight:bold;margin:0">Conference Columns</p><div class="ss_setting_ck"><input type="checkbox" name="confw_checkbox" id="confw_checkbox" class="confw" checked="checked" onchange="ss_checkbox(this)"><label for="confw_checkbox">Conference Wins</label></div><div class="ss_setting_ck"><input type="checkbox" name="confl_checkbox" id="confl_checkbox" class="confl" checked="checked" onchange="ss_checkbox(this)"><label for="confl_checkbox">Conference Losses</label></div><div class="ss_setting_ck"><input type="checkbox" name="conft_checkbox" id="conft_checkbox" class="conft" checked="checked" onchange="ss_checkbox(this)"><label for="conft_checkbox">Conference Ties</label></div><div class="ss_setting_ck"><input type="checkbox" name="confwlt_checkbox" id="confwlt_checkbox" class="confwlt" checked="checked" onchange="ss_checkbox(this)"><label for="confwlt_checkbox">Conference Wins, Losses and Ties</label></div><div class="ss_setting_ck"><input type="checkbox" name="confpct_checkbox" id="confpct_checkbox" class="confpct" checked="checked" onchange="ss_checkbox(this)"><label for="confpct_checkbox">Conference Winning Percentage</label></div><div class="ss_setting_ck"><input type="checkbox" name="nonconfw_checkbox" id="nonconfw_checkbox" class="nonconfw" checked="checked" onchange="ss_checkbox(this)"><label for="nonconfw_checkbox">Non-Conference Wins</label></div><div class="ss_setting_ck"><input type="checkbox" name="nonconfl_checkbox" id="nonconfl_checkbox" class="nonconfl" checked="checked" onchange="ss_checkbox(this)"><label for="nonconfl_checkbox">Non-Conference Losses</label></div><div class="ss_setting_ck"><input type="checkbox" name="nonconft_checkbox" id="nonconft_checkbox" class="nonconft" checked="checked" onchange="ss_checkbox(this)"><label for="nonconft_checkbox">Non-Conference Ties</label></div><div class="ss_setting_ck"><input type="checkbox" name="nonconfwlt_checkbox" id="nonconfwlt_checkbox" class="nonconfwlt" checked="checked" onchange="ss_checkbox(this)"><label for="nonconfwlt_checkbox">Non-Conference Wins, Losses and Ties</label></div><div class="ss_setting_ck"><input type="checkbox" name="nonconfpct_checkbox" id="nonconfpct_checkbox" class="nonconfpct" checked="checked" onchange="ss_checkbox(this)"><label for="nonconfpct_checkbox">Non Conference Winning Percentage</label></div></div><div class="ss_wrapper"><p class="headp-carrot" style="text-align:left;font-weight:bold;margin:0">Points Columns</p><div class="ss_setting_ck"><input type="checkbox" name="pf_checkbox" id="pf_checkbox" class="pf" checked="checked" onchange="ss_checkbox(this)"><label for="pf_checkbox">Total YTD Point Scored</label></div><div class="ss_setting_ck"><input type="checkbox" name="avgpf_checkbox" id="avgpf_checkbox" class="avgpf" checked="checked" onchange="ss_checkbox(this)"><label for="avgpf_checkbox">Weekly Average Point Scored</label></div><div class="ss_setting_ck"><input type="checkbox" name="pa_checkbox" id="pa_checkbox" class="pa" checked="checked" onchange="ss_checkbox(this)"><label for="pa_checkbox">Total YTD Opp. Points Scored</label></div><div class="ss_setting_ck"><input type="checkbox" name="avgpa_checkbox" id="avgpa_checkbox" class="avgpa" checked="checked" onchange="ss_checkbox(this)"><label for="avgpa_checkbox">Weekly Average Opp. Points Scored</label></div><div class="ss_setting_ck"><input type="checkbox" name="divpf_checkbox" id="divpf_checkbox" class="divpf" checked="checked" onchange="ss_checkbox(this)"><label for="divpf_checkbox">Total YTD Points Scored In Div. Games</label></div><div class="ss_setting_ck"><input type="checkbox" name="confpf_checkbox" id="confpf_checkbox" class="confpf" checked="checked" onchange="ss_checkbox(this)"><label for="confpf_checkbox">Total YTD Points Scored In Conference</label></div><div class="ss_setting_ck"><input type="checkbox" name="maxpf_checkbox" id="maxpf_checkbox" class="maxpf" checked="checked" onchange="ss_checkbox(this)"><label for="maxpf_checkbox">Highest Weekly Point Total</label></div><div class="ss_setting_ck"><input type="checkbox" name="minpf_checkbox" id="minpf_checkbox" class="minpf" checked="checked" onchange="ss_checkbox(this)"><label for="minpf_checkbox">Lowest Weekly Point Total</label></div><div class="ss_setting_ck"><input type="checkbox" name="maxpa_checkbox" id="maxpa_checkbox" class="maxpa" checked="checked" onchange="ss_checkbox(this)"><label for="maxpa_checkbox">Highest Weekly Points Against</label></div><div class="ss_setting_ck"><input type="checkbox" name="minpa_checkbox" id="minpa_checkbox" class="minpa" checked="checked" onchange="ss_checkbox(this)"><label for="minpa_checkbox">Lowest Weekly Points Against</label></div><div class="ss_setting_ck"><input type="checkbox" name="vp_checkbox" id="vp_checkbox" class="vp" checked="checked" onchange="ss_checkbox(this)"><label for="vp_checkbox">Victory Points</label></div><div class="ss_setting_ck"><input type="checkbox" name="pp_checkbox" id="pp_checkbox" class="pp" checked="checked" onchange="ss_checkbox(this)"><label for="pp_checkbox">Potential Points</label></div><div class="ss_setting_ck"><input type="checkbox" name="pb_checkbox" id="pb_checkbox" class="pb" checked="checked" onchange="ss_checkbox(this)"><label for="pb_checkbox">Points Back</label></div><div class="ss_setting_ck"><input type="checkbox" name="op_checkbox" id="op_checkbox" class="op" checked="checked" onchange="ss_checkbox(this)"><label for="op_checkbox">Offensive Points</label></div><div class="ss_setting_ck"><input type="checkbox" name="dp_checkbox" id="dp_checkbox" class="dp" checked="checked" onchange="ss_checkbox(this)"><label for="dp_checkbox">Defensive Points</label></div></div><div class="ss_wrapper"><p class="headp-carrot" style="text-align:left;font-weight:bold;margin:0">Accounting Columns</p><div class="ss_setting_ck"><input type="checkbox" name="bbidspent_checkbox" id="bbidspent_checkbox" class="bbidspent" checked="checked" onchange="ss_checkbox(this)"><label for="bbidspent_checkbox">Total $ Spent YTD On Blind Bidding</label></div><div class="ss_setting_ck"><input type="checkbox" name="bbidbalance_checkbox" id="bbidbalance_checkbox" class="bbidbalance" checked="checked" onchange="ss_checkbox(this)"><label for="bbidbalance_checkbox">Balance Available For Blind Bidding</label></div><div class="ss_setting_ck"><input type="checkbox" name="acct_checkbox" id="acct_checkbox" class="acct" checked="checked" onchange="ss_checkbox(this)"><label for="acct_checkbox">Accounting Balance</label></div><div class="ss_setting_ck"><input type="checkbox" name="salary_checkbox" id="salary_checkbox" class="salary" checked="checked" onchange="ss_checkbox(this)"><label for="salary_checkbox">Total Salary</label></div></div><div class="ss_wrapper"><p class="headp-carrot" style="text-align:left;font-weight:bold;margin:0">All-Play Columns</p><div class="ss_setting_ck"><input type="checkbox" name="all_play_wlt_checkbox" id="all_play_wlt_checkbox" class="all_play_wlt" checked="checked" onchange="ss_checkbox(this)"><label for="all_play_wlt_checkbox">All-Play Wins, Losses and Tie</label></div><div class="ss_setting_ck"><input type="checkbox" name="all_play_pct_checkbox" id="all_play_pct_checkbox" class="all_play_pct" checked="checked" onchange="ss_checkbox(this)"><label for="all_play_pct_checkbox">All-Play Winning Percentage</label></div><div class="ss_wrapper"><p class="headp-carrot" style="text-align:left;font-weight:bold;margin:0">Ranking Columns</p><div class="ss_setting_ck"><input type="checkbox" name="pwr_checkbox" id="pwr_checkbox" class="pwr" checked="checked" onchange="ss_checkbox(this)"><label for="pwr_checkbox">Power Rank</label></div><div class="ss_setting_ck"><input type="checkbox" name="altpwr_checkbox" id="altpwr_checkbox" class="altpwr" checked="checked" onchange="ss_checkbox(this)"><label for="altpwr_checkbox">Alternative Power Rank</label></div><div class="ss_setting_ck"><input type="checkbox" name="eff_checkbox" id="eff_checkbox" class="eff" checked="checked" onchange="ss_checkbox(this)"><label for="eff_checkbox">Efficiency Rating</label></div></div><div class="ss_wrapper"><p class="headp-carrot" style="text-align:left;font-weight:bold;margin:0">Transactions Columns</p><div class="ss_setting_ck"><input type="checkbox" name="ww_checkbox" id="ww_checkbox" class="ww" checked="checked" onchange="ss_checkbox(this)"><label for="ww_checkbox">Waiver Wire Order</label></div><div class="ss_setting_ck"><input type="checkbox" name="add-moves_checkbox" id="add-moves_checkbox" class="add-moves" checked="checked" onchange="ss_checkbox(this)"><label for="add-moves_checkbox">Year-To-Date Number Of Add Moves</label></div><div class="ss_setting_ck"><input type="checkbox" name="waiver-moves_checkbox" id="waiver-moves_checkbox" class="waiver-moves" checked="checked" onchange="ss_checkbox(this)"><label for="waiver-moves_checkbox">Year-To-Date Number Of Waiver Moves</label></div></div><div class="ss_wrapper"><p class="headp-carrot" style="text-align:left;font-weight:bold;margin:0">Miscellaneous Columns</p><div class="ss_setting_ck"><input type="checkbox" name="eliminated_checkbox" id="eliminated_checkbox" class="eliminated" checked="checked" onchange="ss_checkbox(this)"><label for="eliminated_checkbox">Guillotine Leagues, Week Eliminated</label></div><div class="ss_setting_ck"><input type="checkbox" name="custom_standings_column01_checkbox" id="custom_standings_column01_checkbox" class="custom_standings_column01" checked="checked" onchange="ss_checkbox(this)"><label for="custom_standings_column01_checkbox">Custom Standings Column 1</label></div><div class="ss_setting_ck"><input type="checkbox" name="custom_standings_column02_checkbox" id="custom_standings_column02_checkbox" class="custom_standings_column02" checked="checked" onchange="ss_checkbox(this)"><label for="custom_standings_column02_checkbox">Custom Standings Column 2</label></div></div></div>').appendTo("body"),
function() {
	let e = [],
		t = [];
	for (var a in $(".standings-filter th").each(function() {
		e.push($(this).attr("class")),
		t[$(this).attr("class")] = 1
	}), console.log(e), $("#standings-settings div input").each(function() {
		let t = $(this).attr("class");
		-1 == e.indexOf(t) && $(this).parent(".ss_setting_ck").remove()
	}), t)
		t.hasOwnProperty(a) && "hidden" === localStorage.getItem(league_id + "_" + year + "_" + a) && ($(".standings-filter ." + a).hide(), $("#" + a + "_checkbox").prop("checked", !1))
}(),
jQuery(".standings-cog").on("click", function() {
	$("#standings-settings,.standings-settings_overlay").css("display", "block")
}),
jQuery(".standings-settings_overlay").on("click", function() {
	$("#standings-settings,.standings-settings_overlay").css("display", "none")
}),
jQuery(".ss_wrapper").not(':has(".ss_setting_ck")').remove(),
jQuery('<style>.standings-cog{margin-left:10px;cursor:pointer;z-index:1;pointer-events:all;position:absolute;top:50%;transform:translateY(-50%)}.standing_cog_span{position:relative}#standings-settings{position:fixed;left:0;right:0;top:0;bottom:0;margin:auto;width:300px;z-index:999999;height:300px;overflow:auto}.standings-settings_overlay{content:"";width:100%;height:100%;position:fixed;left:0;top:0;z-index:99999}#standings-settings input{display:none}#standings-settings div{position:relative;display:block;margin:10px 0}#standings-settings input+label:before{font-family:FontAwesome;display:inline-block;content:"\\f096";position:absolute;left:0}#standings-settings input:checked+label:before{content:"\\f046";z-index:0}#standings-settings label{padding-left:20px;font-size:13px;line-height:13px;cursor:pointer;display:block}#standings-settings #fname_checkbox:checked+label,#standings-settings #fname_checkbox+label,#standings-settings #ficon_checkbox:checked+label,#standings-settings #ficon_checkbox+label,#standings-settings #ficonname_checkbox:checked+label,#standings-settings #ficonname_checkbox+label{pointer-events:none}#standings-settings #fname_checkbox:checked+label:before,#standings-settings #fname_checkbox+label:before,#standings-settings #ficon_checkbox:checked+label:before,#standings-settings #ficon_checkbox+label:before,#standings-settings #ficonname_checkbox:checked+label:before,#standings-settings #ficonname_checkbox+label:before{content:"\\f023";pointer-events:none}#standings-settings p.headp-carrot{position:relative}#standings-settings p.headp-carrot:after{font-family:FontAwesome;display:inline-block;content:"\\f0d7";position:absolute;top:50%;transform:translateY(-50%);margin-left:5px}</style>').appendTo("head");

