var getPlayerStatus = function() {
		var t = "tr.starters-row td.player";
		return donotcountI && (t += ":not(':has(.warning:contains(I))')"), donotcountS && (t += ":not(':has(.warning:contains(S))')"), donotcountO && (t += ":not(':has(.warning:contains(O))')"), donotcountBye && (t += "+td:not(:contains(Bye))"), t
	},
	RequiredStarters = 0,
	clazz = {};
jQuery.ajax({
	type: "GET",
	url: baseURLDynamic + "/" + year + "/export?TYPE=league&L=" + league_id + "&W=&JSON=1"
}).done(function(t) {
	RequiredStarters = t.league.starters.count,
	$.get(baseURLDynamic + "/" + year + "/options?L=" + league_id + "&O=06&WEEK=" + (completedWeek + 1), function(t) {
		$(t).find("td.two_column_layout .report").each(function(t, a) {
			if ($(this).find("tr:first-child").addClass("start-td"), $(this).find("tr:contains(Non-Starters)").prev("tr").addClass("stop-td"), $(this).find("tr.start-td").nextUntil("td.two_column_layout table tr.stop-td").addBack().addClass("starters-row"), $(this).find(getPlayerStatus()).length !== +RequiredStarters && "InvalidLineup" !== $(this).attr("id")) {
				var n = $("#InvalidLineup").find("tr.valid-teams");
				$(this).find("span a").each(function() {
					var t = this.className;
					clazz[t] || (clazz[t] = !0, $("<tr class='oddtablerow'><td colspan='2' style='text-align:center'>" + $(this)[0].outerHTML + "</td></tr>").insertAfter(n), $("#InvalidLineup .reportfooter").show())
				})
			}
		}),
		$("#InvalidLineup tr").length <= 3 ? ($(".valid-teams").show(), $("#InvalidLineup .reportfooter").hide()) : ($(".invalid-teams").show(), $("#InvalidLineup .reportfooter").show())
	})
});

