if (null == globalsSet) {
	var standingsFile = baseURLDynamic + "/" + year + "/export?L=" + league_id + "&TYPE=standings&rand=" + Math.random(),
		leagueFile = baseURLDynamic + "/" + year + "/export?L=" + league_id + "&TYPE=league&rand=" + Math.random(),
		weeklyResultsFile = baseURLDynamic + "/" + year + "/export?L=" + league_id + "&TYPE=weeklyResults&rand=" + Math.random() + "&W=",
		sync_http_request = !1,
		headToHeadArraySet = !1,
		franchiseArray = new Array,
		divisionArray = new Array,
		conferenceArray = new Array,
		standingsArray = new Array,
		playoffArray = new Array,
		leagueName = "",
		lastRegularSeasonWeek = 0,
		activeWeek = 0,
		numTeams = 0,
		numDivisions = 0,
		numConferences = 0,
		seedCount = 0,
		leagueAverage = !1,
		didShowScores = !1,
		habmanModCount = 0,
		separateHTHByDivision = !1,
		separateHTHByConference = !1,
		headToHeadTeamDisplay = "",
		leagueAttemptXML = 0,
		standingsAttemptXML = 0,
		hthAttemptXML = 0,
		tieBreakerTitles = ["by default", "Overall Win %", "Div. Win %", "Div. PF", "Overall PF", "Victory Points", "Power Rank", "Play-All Win %", "Head-to-Head", "Coin Flip", "Non-Div. Win %", "Non-Div. PF", "Reverse PA", "Conf. Win %", "Conf. PF", "Non-Conf. Win%", "Non-Conf. PF", "Common Games Win%", "Head-to-Head", "Strength of Schedule", "Strength of Victory"],
		standingsTitles = ["", "", "", "W", "L", "T", "Record", "Win %", "PF", "PA", "Div-W", "Div-L", "Div-T", "Div-Record", "Div-Win %", "Div-PF", "Power", "VP", "PlayAll-W", "PlayAll-L", "PlayAll-T", "PlayAll-Record", "PlayAll-Win %", "NonDiv-W", "NonDiv-L", "NonDiv-T", "NonDiv-Record", "NonDiv-Win %", "NonDiv-PF", "Conf-W", "Conf-L", "Conf-T", "Conf-Record", "Conf-Win %", "Conf-PF", "NonConf-W", "NonConf-L", "NonConf-T", "NonConf-Record", "NonConf-Win %", "NonConf-PF", "Head-to-Head Win %", "SOS-Record", "SOS-Win %", "SOV-Record", "SOV-Win %", "PP", "OP", "DP", custom1Title, custom2Title, custom3Title],
		standingsDecimals = [-2, -2, -2, 0, 0, 0, -2, 3, -1, -1, 0, 0, 0, -2, 3, -1, 2, 0, 0, 0, 0, -2, 3, 0, 0, 0, -2, 3, -1, 0, 0, 0, -2, 3, -1, 0, 0, 0, -2, 3, -1, 3, -2, 3, -2, 3, -1, -1, -1, -1, -1, -1],
		app3_tipwidth = "450px",
		app3_tipbgcolor = "lightyellow",
		app3_disappeardelay = 250,
		app3_vertical_offset = "0px",
		app3_horizontal_offset = "-3px",
		app3_ie4 = document.all,
		app3_ns6 = document.getElementById && !document.all;
	function app3_getposOffset(e, r) {
		for (var a = "left" == r ? e.offsetLeft : e.offsetTop, t = e.offsetParent; null != t;)
			a = "left" == r ? a + t.offsetLeft : a + t.offsetTop,
			t = t.offsetParent;
		return a
	}
	function app3_showhide(e, r, a, t, n) {
		(app3_ie4 || app3_ns6) && (dropmenuobj.style.left = dropmenuobj.style.top = -500),
		"" != n && (dropmenuobj.widthobj = dropmenuobj.style, dropmenuobj.widthobj.width = n),
		"click" == r.type && e.visibility == t || "mouseover" == r.type ? e.visibility = a : "click" == r.type && (e.visibility = t)
	}
	function app3_iecompattest() {
		return document.compatMode && "BackCompat" != document.compatMode ? document.documentElement : document.body
	}
	function app3_clearbrowseredge(e, r) {
		var a = "rightedge" == r ? -1 * parseInt(app3_horizontal_offset) : -1 * parseInt(app3_vertical_offset);
		if ("rightedge" == r) {
			var t = app3_ie4 && !window.opera ? app3_iecompattest().scrollLeft + app3_iecompattest().clientWidth - 15 : window.pageXOffset + window.innerWidth - 15;
			dropmenuobj.contentmeasure = dropmenuobj.offsetWidth,
			t - dropmenuobj.x < dropmenuobj.contentmeasure && (a = dropmenuobj.contentmeasure - e.offsetWidth)
		} else {
			t = app3_ie4 && !window.opera ? app3_iecompattest().scrollTop + app3_iecompattest().clientHeight - 15 : window.pageYOffset + window.innerHeight - 18;
			dropmenuobj.contentmeasure = dropmenuobj.offsetHeight,
			t - dropmenuobj.y < dropmenuobj.contentmeasure && (a = dropmenuobj.contentmeasure + e.offsetHeight)
		}
		return a
	}
	function app3_fixedtooltip(e, r, a, t) {
		menucontents = e.replace(/'/g, "&#8217;"),
		window.event ? event.cancelBubble = !0 : a.stopPropagation && a.stopPropagation(),
		app3_clearhidetip(),
		dropmenuobj = document.getElementById ? document.getElementById("app3_fixedtipdiv") : app3_fixedtipdiv,
		dropmenuobj.innerHTML = menucontents,
		(app3_ie4 || app3_ns6) && (app3_showhide(dropmenuobj.style, a, "visible", "hidden", t), dropmenuobj.x = app3_getposOffset(r, "left"), dropmenuobj.y = app3_getposOffset(r, "top"), dropmenuobj.style.left = dropmenuobj.x - app3_clearbrowseredge(r, "rightedge") + "px", dropmenuobj.style.top = dropmenuobj.y - app3_clearbrowseredge(r, "bottomedge") + r.offsetHeight + "px")
	}
	function app3_hidetip(e) {
		"undefined" != typeof dropmenuobj && (app3_ie4 || app3_ns6) && (dropmenuobj.style.visibility = "hidden")
	}
	function app3_delayhidetip() {
		(app3_ie4 || app3_ns6) && (app3_delayhide = setTimeout("app3_hidetip()", app3_disappeardelay))
	}
	function app3_clearhidetip() {
		"undefined" != typeof app3_delayhide && clearTimeout(app3_delayhide)
	}
	var globalsSet = !0
}
habmanModCount++;
var headToHeadWinPctTeams = 0,
	hthPointsScoredTeams = 0,
	leagueAverageCreated = !1,
	headToHeadBrokeTie = !1,
	headToHeadSweep = !1,
	headToHeadSwept = !1,
	commonGameBrokeTie = !1,
	hthPointsScoredBrokeTie = !1,
	numDivisionTeams = 1,
	numWildCardTeams = 0,
	numDivisionTeamsTwo = 1,
	hideDivision = !1,
	hideDivisionTwo = !1,
	hideWildCard = !1,
	hidePlayoff = !1,
	hideNonPlayoff = !1,
	useSweepRule = !1,
	useStartOverRule = !1,
	useDivisionBestRule = !1,
	useDivisionIcon = !1,
	useToolTip1 = !1,
	useToolTip2 = !0,
	useWinPctRule = 1,
	currentWinPctGrouping = "",
	currentCommonGameGrouping = "",
	disableHilite = !1,
	doingDivision = !1,
	teamsCurrentlyTied = 0,
	stepsCount = 0,
	stepsText = "",
	stepsTitle = "",
	genericTable = !1,
	showScores = !1,
	showSteps = !1,
	setFixedToolTip = !1,
	bypassSameDivisionRule = !1,
	bypassConferenceRule = !1,
	iconURL = "",
	truncName = 0,
	specialSeed = new Array,
	divisionTieBreakerTwo = new Array,
	outOfPlayoffsTiebreaker = new Array,
	outOfPlayoffsReverseSort = !1,
	teamNickNames = new Array,
	custom1 = new Array,
	custom2 = new Array,
	custom3 = new Array,
	custom1Title = "",
	custom2Title = "",
	custom3Title = "",
	conferenceLikeDivision = !1,
	titleHeader = "<h4>If the playoffs were to start today</h4>",
	hideTitleHeader = !1,
	titleDivisionWinner = "Division Winners",
	titleDivisionWinnerTwo = "Division Winners 2",
	titleWildCardWinner = "Wild Card Winners",
	titleNonPlayoffTeam = "Out of the Playoffs",
	titlePlayoffTeam = "Playoff Teams",
	reverseTheOrder = !1,
	numDivisionWinners = -1,
	numDivisionWinnersTwo = -1,
	outerPlayoffStyle = "border: 0px; margin: 0px;",
	divisionTieBreaker = [1, 4, 9, 0],
	wildCardTieBreaker = [1, 4, 9, 0],
	displayColumns = [6, 8],
	iconColors = ["FF0000", "0000FF", "008000", "FFFF00", "FF00FF", "00FF00", "00FFFF", "C0C0C0"],
	commonGameMinGP = 4,
	scoringDecimals = 2,
	enableCodeWriter = !1,
	habColBg = new Array;
function habmanBubbleSort(e, r, a, t) {
	for (var n = 0; n < r - 1; n++)
		for (var s = n + 1; s < r; s++)
			if (t) {
				if (e[s][a] < e[n][a]) {
					i = e[n];
					e[n] = e[s],
					e[s] = i
				}
			} else if (e[s][a] > e[n][a]) {
				var i = e[n];
				e[n] = e[s],
				e[s] = i
			}
	return e
}
function moveRow(e, r, a) {
	if (r < a) {
		for (var t = e[r], n = r; n < a; n++)
			e[n] = e[n + 1];
		e[a] = t
	} else {
		for (t = e[r], n = r; n > a; n--)
			e[n] = e[n - 1];
		e[a] = t
	}
	return e
}
function synchronousXMLRequest(url, callback_function, fieldTag, setReturn) {
	var alreadySet = !1;
	if ("league" == fieldTag && franchiseArray.length > 0 && (alreadySet = !0), "standings" == fieldTag && standingsArray.length > 0 && (alreadySet = !0), !alreadySet) {
		var returnArray = new Array;
		if (sync_http_request = !1, window.XMLHttpRequest)
			sync_http_request = new XMLHttpRequest,
			sync_http_request.overrideMimeType && sync_http_request.overrideMimeType("text/xml");
		else if (window.ActiveXObject)
			try {
				sync_http_request = new ActiveXObject("Msxml2.XMLHTTP")
			} catch (e) {
				try {
					sync_http_request = new ActiveXObject("Microsoft.XMLHTTP")
				} catch (e) {}
			}
		if (!sync_http_request)
			return !1;
		if (sync_http_request.open("GET", url, !1), sync_http_request.send(null), 200 == sync_http_request.status) {
			var xmldoc = sync_http_request.responseXML;
			setReturn ? returnArray = eval(callback_function + "(sync_http_request.responseXML)") : eval(callback_function + "(sync_http_request.responseXML)")
		}
		if (setReturn)
			return returnArray
	}
}
function getLeagueData(e) {
	var r = e.getElementsByTagName("league");
	try {
		leagueName = r[0].getAttribute("name")
	} catch (e) {
		return ++leagueAttemptXML < 2 && synchronousXMLRequest(leagueFile, "getLeagueData", "league"), !1
	}
	lastRegularSeasonWeek = parseInt(r[0].getAttribute("lastRegularSeasonWeek"), 10);
	var a = e.getElementsByTagName("franchises");
	numTeams = a[0].getAttribute("count");
	var t = e.getElementsByTagName("franchise");
	for (n = 0; n < numTeams; n++) {
		var s = t[n].getAttribute("name");
		s = (s = (s = s.replace(/'/g, "&#8217;")).replace(/"/g, "")).replace(/<\S[^><]*>/g, ""),
		franchiseArray[n] = [t[n].getAttribute("id"), s, t[n].getAttribute("division")]
	}
	var i = new Array;
	i = e.getElementsByTagName("conferences"),
	numConferences = 0 == i.length || bypassConferenceRule ? 0 : i[0].getAttribute("count");
	var o = e.getElementsByTagName("conference");
	for (n = 0; n < numConferences; n++)
		conferenceArray[n] = [o[n].getAttribute("id"), o[n].getAttribute("name")];
	var l = new Array;
	l = e.getElementsByTagName("divisions"),
	numDivisions = 0 == l.length ? 0 : l[0].getAttribute("count");
	var d = e.getElementsByTagName("division");
	for (n = 0; n < numDivisions; n++)
		divisionArray[n] = 0 == numConferences ? [d[n].getAttribute("id"), d[n].getAttribute("name")] : [d[n].getAttribute("id"), d[n].getAttribute("name"), d[n].getAttribute("conference")]
}
function doStandingsArray(e) {
	var r = e.getElementsByTagName("standings");
	try {
		var a = r[0].getElementsByTagName("franchise")
	} catch (e) {
		return ++standingsAttemptXML < 2 && synchronousXMLRequest(standingsFile, "doStandingsArray", "standings"), !1
	}
	for (var t = 0; t < numTeams; t++) {
		var n = a[t].getAttribute("id"),
			s = parseInt(n, 10);
		try {
			var i = parseInt(a[t].getElementsByTagName("h2hw")[0].firstChild.nodeValue)
		} catch (e) {
			i = 0
		}
		try {
			var o = parseInt(a[t].getElementsByTagName("h2hl")[0].firstChild.nodeValue)
		} catch (e) {
			o = 0
		}
		try {
			var l = parseInt(a[t].getElementsByTagName("h2ht")[0].firstChild.nodeValue)
		} catch (e) {
			l = 0
		}
		try {
			var d = parseFloat(a[t].getElementsByTagName("pf")[0].firstChild.nodeValue)
		} catch (e) {
			d = 0
		}
		try {
			var c = parseFloat(a[t].getElementsByTagName("pa")[0].firstChild.nodeValue)
		} catch (e) {
			c = 0
		}
		try {
			var y = parseFloat(a[t].getElementsByTagName("pp")[0].firstChild.nodeValue)
		} catch (e) {
			y = 0
		}
		try {
			var m = parseFloat(a[t].getElementsByTagName("op")[0].firstChild.nodeValue)
		} catch (e) {
			m = 0
		}
		try {
			var f = parseFloat(a[t].getElementsByTagName("dp")[0].firstChild.nodeValue)
		} catch (e) {
			f = 0
		}
		if (numDivisions > 0) {
			try {
				var h = parseInt(a[t].getElementsByTagName("divw")[0].firstChild.nodeValue)
			} catch (e) {
				h = 0
			}
			try {
				var p = parseInt(a[t].getElementsByTagName("divl")[0].firstChild.nodeValue)
			} catch (e) {
				p = 0
			}
			try {
				var g = parseInt(a[t].getElementsByTagName("divt")[0].firstChild.nodeValue)
			} catch (e) {
				g = 0
			}
			try {
				var u = parseFloat(a[t].getElementsByTagName("divpf")[0].firstChild.nodeValue)
			} catch (e) {
				u = 0
			}
			var A = i - h,
				T = o - p,
				b = l - g,
				v = d - u
		}
		try {
			var w = parseInt(a[t].getElementsByTagName("confw")[0].firstChild.nodeValue)
		} catch (e) {
			w = 0
		}
		try {
			var k = parseInt(a[t].getElementsByTagName("confl")[0].firstChild.nodeValue)
		} catch (e) {
			k = 0
		}
		try {
			var C = parseInt(a[t].getElementsByTagName("conft")[0].firstChild.nodeValue)
		} catch (e) {
			C = 0
		}
		try {
			var H = parseFloat(a[t].getElementsByTagName("confpf")[0].firstChild.nodeValue)
		} catch (e) {
			H = 0
		}
		var S = i - w,
			x = o - k,
			W = l - C,
			P = d - H;
		try {
			var B = parseFloat(a[t].getElementsByTagName("power_rank")[0].firstChild.nodeValue)
		} catch (e) {
			B = 0
		}
		try {
			var N = parseInt(a[t].getElementsByTagName("vp")[0].firstChild.nodeValue)
		} catch (e) {
			N = 0
		}
		try {
			var _ = parseInt(a[t].getElementsByTagName("all_play_w")[0].firstChild.nodeValue)
		} catch (e) {
			_ = 0
		}
		try {
			var D = parseInt(a[t].getElementsByTagName("all_play_l")[0].firstChild.nodeValue)
		} catch (e) {
			D = 0
		}
		try {
			var I = parseInt(a[t].getElementsByTagName("all_play_t")[0].firstChild.nodeValue)
		} catch (e) {
			I = 0
		}
		if (i + o + l != 0)
			var R = parseInt(1e3 * (i + .5 * l) / (i + o + l)) / 1e3;
		else
			R = 0;
		var L = i + "-" + o + "-" + l;
		if (h + p + g != 0)
			var F = parseInt(1e3 * (h + .5 * g) / (h + p + g)) / 1e3;
		else
			F = 0;
		var M = h + "-" + p + "-" + g;
		if (A + T + b != 0)
			var O = parseInt(1e3 * (A + .5 * b) / (A + T + b)) / 1e3;
		else
			O = 0;
		var E = A + "-" + T + "-" + b;
		if (w + k + C != 0)
			var j = parseInt(1e3 * (w + .5 * C) / (w + k + C)) / 1e3;
		else
			j = 0;
		var G = w + "-" + k + "-" + C;
		if (S + x + W != 0)
			var q = parseInt(1e3 * (S + .5 * W) / (S + x + W)) / 1e3;
		else
			q = 0;
		var V = S + "-" + x + "-" + W;
		if (_ + D + I != 0)
			var X = parseInt(1e3 * (_ + .5 * I) / (_ + D + I)) / 1e3;
		else
			X = 0;
		var U = _ + "-" + D + "-" + I;
		standingsArray[t] = [s, n, franchiseDatabase["fid_" + n].name, i, o, l, L, R, d, c, h, p, g, M, F, u, B, N, _, D, I, U, X, A, T, b, E, O, v, w, k, C, G, j, H, S, x, W, V, q, P, 0, 0, 0, 0, 0, y, m, f, custom1[t], custom2[t], custom3[t]]
	}
}
function setColColor(e, r, a) {
	var t,
		n = navigator.appName;
	if ("Netscape" == n)
		var s = e.target;
	else if ("Microsoft Internet Explorer" == n)
		s = e.srcElement;
	if ("TD" == s.nodeName) {
		for (var i = 0; i < 4; i++)
			if ("TBODY" == r.childNodes[i].nodeName) {
				t = i;
				break
			}
		for (i = 0; i < r.childNodes[t].childNodes.length; i++)
			for (var o = s.cellIndex; o < r.childNodes[t].childNodes[i].childNodes.length; o++)
				if (r.childNodes[t].childNodes[i].childNodes[o].cellIndex == s.cellIndex) {
					r.childNodes[t].childNodes[i].childNodes[o].style.backgroundColor = a,
					"" != a ? (habColBg[i] = r.childNodes[t].childNodes[i].childNodes[o].style.backgroundImage, r.childNodes[t].childNodes[i].childNodes[o].style.backgroundImage = "none") : r.childNodes[t].childNodes[i].childNodes[o].style.backgroundImage = habColBg[i];
					break
				}
	}
}
function doAlert(e, r, a) {
	var t;
	t = (t = (t = (t = (t = r + "~Seed #" + e + "~" + a).replace(/~ Sweep/g, " Sweep")).replace(/~ Winning/g, " Winning")).replace(/~ Points/g, " Points")).replace(/~ broke/g, " broke"),
	useToolTip1 ? (t = t.replace(/~/g, "<br />"), t += '<br /><br />[<a href="javascript:hideH2HTip();">close</a>]', h2hTip(t, "#FFFFE1", "450", !0)) : (t = t.replace(/~/g, "\n"), alert(t))
}
function addTeamsStillTied(e, r, a) {
	for (var t = "    Still tied (", n = 0; n < a; n++)
		t += franchiseArray[r[n][0]][1] + ", ";
	return t = t.substr(0, t.length - 2), t = e + (t += ")~")
}
function arrayAlert(e) {
	if ("Commissioner" == franchiseDatabase["fid_" + franchise_id].name) {
		for (var r = "", a = 0; a < e.length; a++) {
			r += " " + (a + 1) + " " + franchiseArray[e[a][0]][1] + "\n"
		}
		alert(r)
	}
}
function alertThis(e) {
	for (var r = "", a = 0; a < e.length; a++) {
		r += " " + (a + 1) + " " + franchiseArray[e[a][0]][1] + "\n"
	}
	alert(r)
}
function variableAlert(e) {
	"Commissioner" == franchiseDatabase["fid_" + franchise_id].name && alert(e)
}
function decimalFormat(e, r) {
	if ("NaN" == e.toString() && (e = 0), -1e-4 == e)
		e = "-.---";
	else {
		(e = parseInt(e * Math.pow(10, r)) / Math.pow(10, r)) == parseInt(e) && r > 0 && (e += ".");
		for (var a = 0; a < r; a++)
			parseFloat(e) * Math.pow(10, a) == parseInt(e * Math.pow(10, a)) && (e += "0")
	}
	return e
}
function decimalCheck(e, r) {
	return 7 != r && 14 != r && 22 != r && 27 != r && 33 != r && 39 != r && 43 != r && 45 != r || (e = decimalFormat(e, 3)), 16 == r && (e = decimalFormat(e, 2)), 8 != r && 9 != r && 15 != r && 28 != r && 34 != r && 40 != r || (e = decimalFormat(e, scoringDecimals)), e
}
function setupGlobal() {
	if (tieBreakerTitles[17] = "Common Games Win% (" + commonGameMinGP + " game minimum requirement)", standingsArray = habmanBubbleSort(standingsArray, numTeams, 0, 1), custom1.length > 0) {
		for (var e = 0; e < numTeams; e++)
			standingsArray[e][46] = custom1[e];
		standingsTitles[46] = custom1Title
	}
	if (custom2.length > 0) {
		for (e = 0; e < numTeams; e++)
			standingsArray[e][47] = custom2[e];
		standingsTitles[47] = custom2Title
	}
	if (custom3.length > 0) {
		for (e = 0; e < numTeams; e++)
			standingsArray[e][48] = custom3[e];
		standingsTitles[48] = custom3Title
	}
	1 == useSweepRule && (useStartOverRule = !0),
	2 != useWinPctRule && 3 != useWinPctRule || (useStartOverRule = !0)
}
function setupOther(e, r) {
	setupGlobal(),
	"draft" == e && (reverseTheOrder = !0, numWildCardTeams = numTeams, hideNonPlayoff = !0),
	"toilet" == e && (reverseTheOrder = !0, numDivisionWinners = -1, numWildCardTeams = null == r ? 2 : r, hideNonPlayoff = !0),
	"generic" == e && (numDivisionWinners = 0, genericTable = !0)
}
function setupNormal() {
	setupGlobal(),
	reverseTheOrder = !1,
	numDivisionWinners = -1
}
function createAllPlayTable(e, r, a) {
	for (var t = "", n = "", s = "", i = new Array, o = 0; o < numTeams; o++)
		i[o] = new Array(o, franchiseArray[o][0], r[franchiseArray[o][0]].winpct);
	i = habmanBubbleSort(i, numTeams, 2, 0),
	disableHilite || (t = " onmouseover=\"this.className='hilitetablerow'\" onmouseout=\"this.className='oddtablerow'\"", n = " onmouseover=\"this.className='hilitetablerow'\" onmouseout=\"this.className='eventablerow'\"", s = " onmouseover='setColColor(event,this,\"tan\")' onmouseout='setColColor(event,this,\"\")'");
	var l = "",
		d = 1,
		c = "";
	"byDivision" == a && (d = numDivisions),
	"byConference" == a && (d = numConferences);
	for (o = 0; o < d; o++) {
		"byDivision" == a && (c = "<br />" + divisionArray[o][1]),
		"byConference" == a && (c = "<br />" + conferenceArray[o][1]),
		l += "<table border='0' cellspacing='1' align='center' class='homepagemodule report' id='allplaytable'" + s + ">\n<caption><span>All Play Results" + c + "</span></caption>\n<tbody>\n",
		l += " <tr class='eventablerow'>\n  <th style='border-bottom: 1px solid black; border-right: 1px solid black;'>&#32;</th>\n";
		for (var y = 0; y < numTeams; y++) {
			if (!0) {
				var m = "  <th align='center' style='border-bottom: 1px solid black;' title='" + franchiseArray[i[y][0]][1] + "'>" + (i[y][0] + 1) + "</th>\n";
				truncName > 0 && (m = "  <th align='center' style='border-bottom: 1px solid black;' title='" + franchiseArray[i[y][0]][1] + "'>" + franchiseArray[i[y][0]][1].substr(0, truncName) + "</th>\n"),
				teamNickNames.length > 0 && (m = "  <th align='center' style='border-bottom: 1px solid black;' title='" + franchiseArray[i[y][0]][1] + "'>" + teamNickNames[parseInt(franchiseArray[i[y][0]][0], 10) - 1] + "</th>\n"),
				"" != iconURL && (m = "  <th align='center' style='border-bottom: 1px solid black;'><img src='" + iconURL + i[y][0] + ".gif' alt='" + franchiseArray[i[y][0]][1] + "' /></th>\n"),
				l += m
			}
		}
		l += "  <th align='center' style='border-bottom: 1px solid black; border-left: 1px solid black;'>Overall</th><th align='center' style='border-bottom: 1px solid black; border-left: 1px solid black;'>Win %</th>\n </tr>\n";
		for (y = 0; y < numTeams; y++) {
			if (!0) {
				l += y % 2 == 0 ? "" == iconURL ? " <tr class='oddtablerow'" + t + ">\n  <td align='center' style='border-right: 1px solid black;'>" + franchiseArray[i[y][0]][1] + "</td>\n" : " <tr class='oddtablerow'" + t + ">\n  <td align='center' style='border-right: 1px solid black;'><img src='" + iconURL + i[y][0] + ".gif' alt='" + franchiseArray[i[y][0]][1] + "' /></td>\n" : "" == iconURL ? " <tr class='eventablerow'" + n + ">\n  <td align='center' style='border-right: 1px solid black;'>" + franchiseArray[i[y][0]][1] + "</td>\n" : " <tr class='eventablerow'" + n + ">\n  <td align='center' style='border-right: 1px solid black;'><img src='" + iconURL + i[y][0] + ".gif' alt='" + franchiseArray[i[y][0]][1] + "' /></td>\n";
				for (var f = 0; f < numTeams; f++) {
					if (!0)
						if (i[y][0] == i[f][0])
							l += "  <td align='center'>�</td>\n";
						else {
							var h = franchiseArray[i[y][0]][0],
								p = franchiseArray[i[f][0]][0];
							l += "  <td align='center' style='white-space: nowrap;'>(" + r[h][p][0] + "-" + r[h][p][1] + "-" + r[h][p][2] + ")</td>\n"
						}
				}
				l += "  <td align='center' style='border-left: 1px solid black; white-space: nowrap;'>(" + r[h].total[0] + "-" + r[h].total[1] + "-" + r[h].total[2] + ")</td> <td align='center' style='border-left: 1px solid black; white-space: nowrap;'>" + r[h].winpct.toFixed(3) + "</td>\n </tr>\n"
			}
		}
		l += "</tbody>\n</table>\n"
	}
	enableCodeWriter ? (l = '<script language="JavaScript" type="text/javascript" src="//nitrografixx.com/habman_js/habman_apps_ver3.js"><\/script>\n\n' + l, document.write("<br /><br /><br />Copy and paste the following HTML code to a home page message to create a play-all results table<br />"), document.write('<textarea cols="130" rows="25" style="font-size: 12px;">' + l + "</textarea>")) : document.getElementById(e).innerHTML = l
}
function weeklyAllPlayTable(e) {
	for (var r = new Array, a = (t = e.getElementsByTagName("weeklyResults"))[0].getAttribute("week"), t = e.getElementsByTagName("franchise"), n = new Array, s = 0; s < t.length; s++) {
		n[i = t[s].getAttribute("id")] = parseFloat(t[s].getAttribute("score"), 10);
		try {
			null != scoreAdjustments[a][i] && (n[i] = n[i] + scoreAdjustments[a][i])
		} catch (e) {}
	}
	for (s = 0; s < t.length; s++) {
		var i;
		r[i = franchiseArray[s][0]] = new Array;
		for (var o = 0; o < t.length; o++) {
			var l = franchiseArray[o][0];
			n[i] > n[l] ? r[i][l] = [1, 0, 0] : n[i] < n[l] ? r[i][l] = [0, 1, 0] : r[i][l] = [0, 0, 1]
		}
	}
	return r
}
function doAllPlayTable(e) {
	for (var r = new Array, a = 0; a < numTeams; a++) {
		r[o = franchiseArray[a][0]] = new Array,
		r[o].total = [0, 0, 0],
		r[o].winpct = 0;
		for (var t = 0; t < numTeams; t++) {
			var n = franchiseArray[t][0];
			r[o][n] = [0, 0, 0]
		}
	}
	for (a = 1; a <= completedWeek; a++) {
		var s = baseURLDynamic + "/" + year + "/export?L=" + league_id + "&TYPE=weeklyResults&rand=" + Math.random() + "&W=" + a,
			i = new Array;
		i = synchronousXMLRequest(s, "weeklyAllPlayTable", "weeklyResults", !0);
		for (t = 0; t < numTeams; t++) {
			for (var o = franchiseArray[t][0], l = 0; l < numTeams; l++) {
				n = franchiseArray[l][0];
				r[o][n][0] += i[o][n][0],
				r[o][n][1] += i[o][n][1],
				r[o][n][2] += i[o][n][2],
				t != l && (r[o].total[0] += i[o][n][0], r[o].total[1] += i[o][n][1], r[o].total[2] += i[o][n][2])
			}
			r[o].total[0] + r[o].total[1] + r[o].total[2] > 0 ? r[o].winpct = (r[o].total[0] + .5 * r[o].total[2]) / (r[o].total[0] + r[o].total[1] + r[o].total[2]) : r[o].winpct = 0
		}
	}
	createAllPlayTable(e, r)
}
function createScoringSummaryTable(e, r, a, t) {
	for (var n = new Array, s = "* Weeks are not included in final points totals<br /><b>Note:</b> Overtime points have been removed from all team scores for this table.<br />\n", i = new Array, o = 0; o < numTeams; o++)
		n[o] = new Array(o, franchiseArray[o][0], r[franchiseArray[o][0]].total);
	for (o = 1; o <= t; o++)
		i[o] = "";
	n = habmanBubbleSort(n, numTeams, 2, 0);
	var l = "";
	l += "<table border='0' cellspacing='1' align='center' class='homepagemodule report' id='summarytable'>\n<caption><span>Weekly Scoring Summary</span></caption>\n<tbody>\n",
	l += " <tr class='eventablerow'>\n  <th style='border-bottom: 1px solid black; border-right: 1px solid black;'>&#32;</th>\n";
	for (var d = 1; d <= t; d++) {
		if (d > a)
			var c = "*";
		else
			c = "";
		l += "  <th align='center' style='border-bottom: 1px solid black;'>" + d + c + "</th>\n"
	}
	l += "  <th align='center' style='border-bottom: 1px solid black; border-left: 1px solid black;'>Total</th><th align='center' style='border-bottom: 1px solid black; border-left: 1px solid black;'>Avg.</th>\n </tr>\n";
	for (d = 0; d <= numTeams; d++) {
		try {
			var y = franchiseArray[n[d][0]][0]
		} catch (e) {
			y = "0000"
		}
		l += d % 2 == 0 ? d == numTeams ? " <tr class='oddtablerow'>\n  <th align='center' style='border-right: 1px solid black; border-top: 1px solid black;'>Avg.</th>\n" : "" == iconURL ? " <tr class='oddtablerow'>\n  <td align='center' style='border-right: 1px solid black;'>" + franchiseArray[n[d][0]][1] + "</td>\n" : " <tr class='oddtablerow'>\n  <td align='center' style='border-right: 1px solid black;'><img src='" + iconURL + n[d][0] + ".gif' alt='" + franchiseArray[n[d][0]][1] + "' /></td>\n" : d == numTeams ? " <tr class='eventablerow'>\n  <th align='center' style='border-right: 1px solid black; border-top: 1px solid black;'>Avg.</th>\n" : "" == iconURL ? " <tr class='eventablerow'>\n  <td align='center' style='border-right: 1px solid black;'>" + franchiseArray[n[d][0]][1] + "</td>\n" : " <tr class='eventablerow'>\n  <td align='center' style='border-right: 1px solid black;'><img src='" + iconURL + n[d][0] + ".gif' alt='" + franchiseArray[n[d][0]][1] + "' /></td>\n";
		for (var m = 1; m <= t; m++) {
			m > completedWeek ? l += d == numTeams ? "  <th align='center' style='border-top: 1px solid black;'>-</th>\n" : "  <td align='center'>-</td>\n" : l += d == numTeams ? "  <th align='center' style='white-space: nowrap; border-top: 1px solid black;'>" + r["0000"][m].toFixed(1) + "</th>\n" : "  <td align='center' style='white-space: nowrap;'>" + r[y][m] + "</td>\n";
			try {
				null != scoreAdjustments[m][y] && (i[m] += " " + franchiseArray[n[d][0]][1] + " (" + scoreAdjustments[m][y] + ")&#32;&#32;&#32;")
			} catch (e) {}
		}
		if (d == numTeams)
			l += "  <th align='center' style='border-left: 1px solid black; border-top: 1px solid black; white-space: nowrap;'>" + r["0000"].total.toFixed(1) + "</th> <th align='center' style='border-left: 1px solid black; border-top: 1px solid black; white-space: nowrap;'>" + r["0000"].avg.toFixed(1) + "</th>\n </tr>\n";
		else {
			var f = r[y].total / completedWeek;
			l += "  <td align='center' style='border-left: 1px solid black; white-space: nowrap;'>" + r[y].total + "</td> <td align='center' style='border-left: 1px solid black; white-space: nowrap;'>" + f.toFixed(1) + "</td>\n </tr>\n"
		}
	}
	for (m = 1; m <= t; m++)
		"" != i[m] && (s += "&#32;<b>Week " + m + ":</b> &#32;&#32;" + i[m] + "<br />");
	l += " <tr class='oddtablerow'>\n  <td align='left' colspan='" + (t + 3) + "' style='border-top: 1px solid black;'>" + s + "</td>\n </tr>\n",
	l += "</tbody>\n</table>\n",
	enableCodeWriter ? (l = '<script language="JavaScript" type="text/javascript" src="//nitrografixx.com/habman_js/habman_apps_ver3.js"><\/script>\n\n' + l, document.write("<br /><br /><br />Copy and paste the following HTML code to a home page message to create a play-all results table<br />"), document.write('<textarea cols="130" rows="25" style="font-size: 12px;">' + l + "</textarea>")) : document.getElementById(e).innerHTML = l
}
function weeklyScores(e) {
	for (var r = (a = e.getElementsByTagName("weeklyResults"))[0].getAttribute("week"), a = e.getElementsByTagName("franchise"), t = new Array, n = 0; n < a.length; n++) {
		var s = a[n].getAttribute("id");
		t[s] = parseFloat(a[n].getAttribute("score"), 10);
		try {
			null != scoreAdjustments[r][s] && (t[s] = t[s] + scoreAdjustments[r][s])
		} catch (e) {}
	}
	return t
}
function doScoringSummaryTable(e, r, a) {
	for (var t = new Array, n = 0; n < numTeams; n++) {
		t[l = franchiseArray[n][0]] = new Array,
		t[l].total = 0
	}
	t["0000"] = new Array,
	t["0000"].total = 0;
	for (n = 1; n <= a; n++) {
		var s = baseURLDynamic + "/" + year + "/export?L=" + league_id + "&TYPE=weeklyResults&rand=" + Math.random() + "&W=" + n,
			i = new Array;
		t["0000"][n] = 0,
		i = synchronousXMLRequest(s, "weeklyScores", "weeklyResults", !0);
		for (var o = 0; o < numTeams; o++) {
			var l;
			t[l = franchiseArray[o][0]][n] = i[l],
			n <= r && (t[l].total += i[l]),
			t["0000"][n] += i[l],
			n <= r && (t["0000"].total += i[l])
		}
		t["0000"][n] = t["0000"][n] / numTeams
	}
	if (r >= completedWeek)
		var d = completedWeek;
	else
		d = r;
	t["0000"].total = t["0000"].total / numTeams,
	t["0000"].avg = t["0000"].total / d,
	createScoringSummaryTable(e, t, r, a)
}
function createBriefPowerTable(e, r, a, t, n) {
	for (var s = 0; s < r; s++) {
		var i = s + 1,
			o = baseURLDynamic + "/" + year + "/options?L=" + league_id + "&F=" + e[s][1] + "&O=01";
		a += s % 2 == 0 ? " <tr class='oddtablerow'><td class='rank' align='right'>" + i + "</td><td class='fname' style='text-align: left;'>&#32;<a href='" + o + "'>" + e[s][2] + "</a></td><td class='" + n + "' align='center'>" + e[s][t] + "</td></tr>\n" : " <tr class='eventablerow'><td class='rank' align='right'>" + i + "</td><td class='fname' style='text-align: left;'>&#32;<a href='" + o + "'>" + e[s][2] + "</a></td><td class='" + n + "' align='center'>" + e[s][t] + "</td></tr>\n"
	}
	return a += "</table>\n"
}
function doBriefPowerTables(e) {
	var r = "",
		a = "",
		t = "";
	r += "<table border='0' cellspacing='1' align='center' class='homepagemodule report' id='brief_powerrank'>\n",
	r += " <tr class='header_power'><th class='rank'>#</th><th class='fname'>Franchise</th><th class='pwscore'>Power Rank</th></tr>\n",
	a += "<table border='0' cellspacing='1' align='center' class='homepagemodule report' id='brief_victorypoint'>\n",
	a += " <tr class='header_vp'><th class='rank'>#</th><th class='fname'>Franchise</th><th class='vpscore'>Victory Pts</th></tr>\n",
	t += "<table border='0' cellspacing='1' align='center' class='homepagemodule report' id='brief_allplay'>\n",
	t += " <tr class='header_ap'><th class='rank'>#</th><th class='fname'>Franchise</th><th class='apscore'>All-Play Wins</th></tr>\n",
	r = createBriefPowerTable(standingsArray = habmanBubbleSort(standingsArray, numTeams, 16, 0), 5, r, 16, "pwscore"),
	a = createBriefPowerTable(standingsArray = habmanBubbleSort(standingsArray, numTeams, 17, 0), 5, a, 17, "vpscore"),
	t = createBriefPowerTable(standingsArray = habmanBubbleSort(standingsArray, numTeams, 18, 0), 5, t, 18, "apscore"),
	window.document.getElementById("xml_powerrank").innerHTML = r,
	window.document.getElementById("xml_victorypoint").innerHTML = a,
	window.document.getElementById("xml_allplay").innerHTML = t
}
function doHeadToHeadArray() {
	if (0 == headToHeadArraySet || showScores != didShowScores) {
		didShowScores = showScores,
		headToHeadArray = new Array,
		sosArray = new Array,
		sovArray = new Array;
		for (var e = 0; e <= numTeams; e++) {
			headToHeadArray[e] = new Array,
			sosArray[e] = new Array,
			sovArray[e] = new Array;
			for (var r = 0; r <= numTeams; r++)
				headToHeadArray[e][r] = ["*", 0, 0, "", 0, 0, 0, 0, 0, ""],
				sosArray[e] = [0, 0, 0, 0, 0, 0],
				sovArray[e] = [0, 0, 0, 0, 0, 0]
		}
		synchronousXMLRequest(weeklyResultsFile, "createHeadToHeadArray", "weeklyResults", !1),
		headToHeadArraySet = !0
	}
}
function createHeadToHeadArray(e) {
	var r = e.getElementsByTagName("weeklyResults");
	try {
		var a = r[0].getAttribute("week")
	} catch (e) {
		return ++hthAttemptXML < 2 && synchronousXMLRequest(weeklyResultsFile, "createHeadToHeadArray", "weeklyResults", !1), !1
	}
	a > lastRegularSeasonWeek && (a = lastRegularSeasonWeek);
	for (var t = 1; t <= a; t++) {
		activeWeek = t,
		synchronousXMLRequest(weeklyResultsFile + t, "fillHeadToHeadArray", "weeklyResults", !1)
	}
	for (var n = 0; n < numTeams; n++)
		sosArray[n][0] + sosArray[n][1] + sosArray[n][2] != 0 && (sosArray[n][5] = parseInt(1e3 * (sosArray[n][0] + .5 * sosArray[n][2]) / (sosArray[n][0] + sosArray[n][1] + sosArray[n][2])) / 1e3),
		sosArray[n][4] = sosArray[n][0] + "-" + sosArray[n][1] + "-" + sosArray[n][2],
		standingsArray[n][42] = sosArray[n][4],
		standingsArray[n][43] = sosArray[n][5],
		sovArray[n][0] + sovArray[n][1] + sovArray[n][2] != 0 && (sovArray[n][5] = parseInt(1e3 * (sovArray[n][0] + .5 * sovArray[n][2]) / (sovArray[n][0] + sovArray[n][1] + sovArray[n][2])) / 1e3),
		sovArray[n][4] = sovArray[n][0] + "-" + sovArray[n][1] + "-" + sovArray[n][2],
		standingsArray[n][44] = sovArray[n][4],
		standingsArray[n][45] = sovArray[n][5]
}
function fillHeadToHeadArray(e) {
	for (var r = !1, a = e.getElementsByTagName("franchise"), t = e.getElementsByTagName("matchup").length, n = 0; n < t; n++) {
		var s = 2 * n,
			i = 2 * n + 1,
			o = a[s].getAttribute("id"),
			l = a[i].getAttribute("id"),
			d = parseInt(o, 10) - 1,
			c = parseInt(l, 10) - 1;
		if ("AVG" == o && (d = numTeams, leagueAverage = !0), "AVG" == l && (c = numTeams, leagueAverage = !0), leagueAverage && !leagueAverageCreated && (franchiseArray[numTeams] = new Array, franchiseArray[numTeams] = [parseInt(numTeams, 10) + 1, "Average", 0], standingsArray[numTeams] = new Array, standingsArray[numTeams] = [0, 0, 0, 0, 0, 0, "n/a"], leagueAverageCreated = !0), "BYE" != o && "BYE" != l || (r = !0), !r) {
			var y = parseFloat(a[s].getAttribute("score")),
				m = parseFloat(a[i].getAttribute("score"));
			if (y > m) {
				if (showScores)
					var f = '<font color="green">' + y + "</font>";
				else
					f = '<font color="green">W</font>';
				if (showScores)
					var h = '<font color="red">' + m + "</font>";
				else
					h = '<font color="red">L</font>';
				var p = 1,
					g = -1,
					u = "Week #" + activeWeek + ": " + franchiseArray[d][1] + " " + y + " defeated " + franchiseArray[c][1] + " " + m,
					A = "Week #" + activeWeek + ": " + franchiseArray[c][1] + " " + m + " lost to " + franchiseArray[d][1] + " " + y,
					T = 1,
					b = 0,
					v = 0,
					w = 1,
					k = 0,
					C = 0;
				sovArray[d][0] += standingsArray[c][3],
				sovArray[d][1] += standingsArray[c][4],
				sovArray[d][2] += standingsArray[c][5],
				sovArray[d][3] += standingsArray[c][8]
			}
			if (y < m) {
				if (showScores)
					f = '<font color="red">' + y + "</font>";
				else
					f = '<font color="red">L</font>';
				if (showScores)
					h = '<font color="green">' + m + "</font>";
				else
					h = '<font color="green">W</font>';
				p = -1,
				g = 1,
				u = "Week #" + activeWeek + ": " + franchiseArray[d][1] + " " + y + " lost to " + franchiseArray[c][1] + " " + m,
				A = "Week #" + activeWeek + ": " + franchiseArray[c][1] + " " + m + " defeated " + franchiseArray[d][1] + " " + y,
				T = 0,
				b = 1,
				v = 1,
				w = 0,
				k = 0,
				C = 0;
				sovArray[c][0] += standingsArray[d][3],
				sovArray[c][1] += standingsArray[d][4],
				sovArray[c][2] += standingsArray[d][5],
				sovArray[c][3] += standingsArray[d][8]
			}
			if (y == m) {
				if (showScores)
					f = y;
				else
					f = "T";
				if (showScores)
					h = m;
				else
					h = "T";
				p = 0,
				g = 0,
				u = "Week #" + activeWeek + ": " + franchiseArray[d][1] + " " + y + " tied " + franchiseArray[c][1] + " " + m,
				A = "Week #" + activeWeek + ": " + franchiseArray[c][1] + " " + m + " tied " + franchiseArray[d][1] + " " + y,
				T = 0,
				b = 0,
				v = 0,
				w = 0,
				k = 1,
				C = 1
			}
			sosArray[d][0] += standingsArray[c][3],
			sosArray[c][0] += standingsArray[d][3],
			sosArray[d][1] += standingsArray[c][4],
			sosArray[c][1] += standingsArray[d][4],
			sosArray[d][2] += standingsArray[c][5],
			sosArray[c][2] += standingsArray[d][5],
			sosArray[d][3] += standingsArray[c][8],
			sosArray[c][3] += standingsArray[d][8],
			"*" == headToHeadArray[c][d][0] ? (headToHeadArray[c][d][0] = h, headToHeadArray[c][d][1] = g, headToHeadArray[c][d][2] = 1, headToHeadArray[c][d][3] = A, headToHeadArray[c][d][4] = b, headToHeadArray[c][d][5] = w, headToHeadArray[c][d][6] = C, headToHeadArray[c][d][7] = m, headToHeadArray[c][d][8] = A, headToHeadArray[d][c][0] = f, headToHeadArray[d][c][1] = p, headToHeadArray[d][c][2] = 1, headToHeadArray[d][c][3] = u, headToHeadArray[d][c][4] = T, headToHeadArray[d][c][5] = v, headToHeadArray[d][c][6] = k, headToHeadArray[d][c][7] = y, headToHeadArray[d][c][8] = u) : (headToHeadArray[c][d][0] += "," + h, headToHeadArray[c][d][1] += g, headToHeadArray[c][d][2] += 1, headToHeadArray[c][d][3] += "\n" + A, headToHeadArray[c][d][4] += b, headToHeadArray[c][d][5] += w, headToHeadArray[c][d][6] += C, headToHeadArray[c][d][7] += m, headToHeadArray[c][d][8] += "<br />" + A, headToHeadArray[d][c][0] += "," + f, headToHeadArray[d][c][1] += p, headToHeadArray[d][c][2] += 1, headToHeadArray[d][c][3] += "\n" + u, headToHeadArray[d][c][4] += T, headToHeadArray[d][c][5] += v, headToHeadArray[d][c][6] += k, headToHeadArray[d][c][7] += y, headToHeadArray[d][c][8] += "<br />" + u)
		}
		r = !1
	}
}
function doHeadToHeadTable(e, r) {
	if (null == r)
		var a = "all";
	else
		a = r;
	var t = "",
		n = "",
		s = "",
		i = standingsArray;
	if (i = habmanBubbleSort(i, numTeams, 7, 0), disableHilite || (t = " onmouseover=\"this.className='hilitetablerow'\" onmouseout=\"this.className='oddtablerow'\"", n = " onmouseover=\"this.className='hilitetablerow'\" onmouseout=\"this.className='eventablerow'\"", s = " onmouseover='setColColor(event,this,\"tan\")' onmouseout='setColColor(event,this,\"\")'"), leagueAverage)
		var o = parseInt(numTeams, 10) + 1;
	else
		o = numTeams;
	var l = "",
		d = 1,
		c = "";
	"byDivision" == a && (d = numDivisions),
	"byConference" == a && (d = numConferences);
	for (var y = 0; y < d; y++) {
		"byDivision" == a && (c = "<br />" + divisionArray[y][1]),
		"byConference" == a && (c = "<br />" + conferenceArray[y][1]),
		l += "<table border='0' cellspacing='1' align='center' class='homepagemodule report' id='headtoheadresults'" + s + ">\n<caption><span>Head-To-Head Results" + c + "</span></caption>\n<tbody>\n",
		l += " <tr class='eventablerow'>\n  <td style='border-bottom: 1px solid black; border-right: 1px solid black;'>&#32;</td>\n";
		for (var m = 0; m < o; m++) {
			var f = !1;
			if ("all" == a && (f = !0), -1 != a.indexOf(franchiseArray[parseInt(i[m][0] - 1)][0]))
				f = !0;
			if ("byDivision" == a && franchiseArray[parseInt(i[m][0] - 1)][2] == y)
				f = !0;
			if ("byConference" == a && parseInt(divisionArray[parseInt(franchiseArray[parseInt(i[m][0] - 1)][2], 10)][2], 10) == y)
				f = !0;
			if (f) {
				var h = "  <td align='center' style='border-bottom: 1px solid black;' title='" + franchiseArray[parseInt(i[m][0] - 1)][1] + "'>" + (parseInt(i[m][0] - 1) + 1) + "</td>\n";
				truncName > 0 && (h = "  <td align='center' style='border-bottom: 1px solid black;' title='" + franchiseArray[parseInt(i[m][0] - 1)][1] + "'>" + franchiseArray[parseInt(i[m][0] - 1)][1].substr(0, truncName) + "</td>\n"),
				teamNickNames.length > 0 && (h = "  <td align='center' style='border-bottom: 1px solid black;' title='" + franchiseArray[parseInt(i[m][0] - 1)][1] + "'>" + teamNickNames[parseInt(franchiseArray[parseInt(i[m][0] - 1)][0], 10) - 1] + "</td>\n"),
				"" != iconURL && (h = "  <td align='center' style='border-bottom: 1px solid black;'><img src='" + iconURL + parseInt(i[m][0] - 1) + ".gif' alt='" + franchiseArray[parseInt(i[m][0] - 1)][1] + "' /></td>\n"),
				l += h
			}
		}
		l += "  <td align='center' style='border-bottom: 1px solid black; border-left: 1px solid black;'>Overall</td>\n </tr>\n";
		for (m = 0; m < o; m++) {
			f = !1;
			if ("all" == a && (f = !0), -1 != a.indexOf(franchiseArray[parseInt(i[m][0] - 1)][0]))
				f = !0;
			if ("byDivision" == a && franchiseArray[parseInt(i[m][0] - 1)][2] == y)
				f = !0;
			if ("byConference" == a && parseInt(divisionArray[parseInt(franchiseArray[parseInt(i[m][0] - 1)][2], 10)][2], 10) == y)
				f = !0;
			if (f) {
				l += m % 2 == 0 ? "" == iconURL ? " <tr class='oddtablerow'" + t + ">\n  <td align='center' style='border-right: 1px solid black;'>" + franchiseArray[parseInt(i[m][0] - 1)][1] + "</td>\n" : " <tr class='oddtablerow'" + t + ">\n  <td align='center' style='border-right: 1px solid black;'><img src='" + iconURL + parseInt(i[m][0] - 1) + ".gif' alt='" + franchiseArray[parseInt(i[m][0] - 1)][1] + "' /></td>\n" : "" == iconURL ? " <tr class='eventablerow'" + n + ">\n  <td align='center' style='border-right: 1px solid black;'>" + franchiseArray[parseInt(i[m][0] - 1)][1] + "</td>\n" : " <tr class='eventablerow'" + n + ">\n  <td align='center' style='border-right: 1px solid black;'><img src='" + iconURL + parseInt(i[m][0] - 1) + ".gif' alt='" + franchiseArray[parseInt(i[m][0] - 1)][1] + "' /></td>\n";
				for (var p = 0; p < o; p++) {
					f = !1;
					if ("all" == a && (f = !0), -1 != a.indexOf(franchiseArray[parseInt(i[p][0] - 1)][0]))
						f = !0;
					if ("byDivision" == a && franchiseArray[parseInt(i[p][0] - 1)][2] == y)
						f = !0;
					if ("byConference" == a && parseInt(divisionArray[parseInt(franchiseArray[parseInt(i[p][0] - 1)][2], 10)][2], 10) == y)
						f = !0;
					f && (m == p ? l += "  <td align='center'>�</td>\n" : "*" != headToHeadArray[parseInt(i[m][0], 10) - 1][parseInt(i[p][0], 10) - 1][0] ? l += useToolTip2 ? "  <td align='center' onmouseover=\"app3_fixedtooltip('" + headToHeadArray[parseInt(i[m][0], 10) - 1][parseInt(i[p][0], 10) - 1][8] + "',this,event,'325px');\" onmouseout=\"app3_delayhidetip();\"><b>" + headToHeadArray[parseInt(i[m][0], 10) - 1][parseInt(i[p][0], 10) - 1][0] + "</b></td>\n" : "  <td align='center' title='" + headToHeadArray[parseInt(i[m][0], 10) - 1][parseInt(i[p][0], 10) - 1][3] + "'><b>" + headToHeadArray[parseInt(i[m][0], 10) - 1][parseInt(i[p][0], 10) - 1][0] + "</b></td>\n" : l += "  <td align='center'>-</td>\n")
				}
				l += "  <td align='center' style='border-left: 1px solid black;'>" + standingsArray[m][6] + "</td>\n </tr>\n"
			}
		}
		l += "</tbody>\n</table>\n"
	}
	enableCodeWriter ? (l = '<script language="JavaScript" type="text/javascript" src="//nitrografixx.com/habman_js/habman_apps_ver3.js"><\/script>\n\n' + l, document.write("<br /><br /><br />Copy and paste the following HTML code to a home page message to create a head to head results table<br />"), document.write('<textarea cols="130" rows="25" style="font-size: 12px;">' + l + "</textarea>")) : document.getElementById(e).innerHTML = l
}
function sortHeadToHeadSweep(e, r) {
	var a = !1,
		t = !1,
		n = -1;
	stepsText += " Sweep~",
	headToHeadSweep = !1,
	headToHeadSwept = !1;
	for (var s = 0; s < r; s++) {
		a = !0,
		t = !0;
		for (var i = 0; i < r; i++)
			headToHeadArray[e[s][0]][e[i][0]][2] > 0 ? 0 == headToHeadArray[e[s][0]][e[i][0]][1] ? (a = !1, t = !1) : (headToHeadArray[e[s][0]][e[i][0]][2] != Math.abs(headToHeadArray[e[s][0]][e[i][0]][1]) && (a = !1, t = !1), headToHeadArray[e[s][0]][e[i][0]][2] == headToHeadArray[e[s][0]][e[i][0]][1] && (t = !1), headToHeadArray[e[s][0]][e[i][0]][2] == -1 * headToHeadArray[e[s][0]][e[i][0]][1] && (a = !1)) : s != i && (a = !1, t = !1);
		(a || t) && (n = s, s = r)
	}
	if (reverseTheOrder) {
		var o = a;
		a = t,
		t = o
	}
	return a && (headToHeadSweep = !0, teamsCurrentlyTied = 1, e = moveRow(e, n, 0), headToHeadBrokeTie = !0), t && (headToHeadSwept = !0, e = moveRow(e, n, teamsCurrentlyTied -= 1), 1 == teamsCurrentlyTied && (headToHeadBrokeTie = !0)), e
}
function sortHeadToHeadWinPctStartOverRule(e, r) {
	for (var a, t, n, s = !0, i = !0, o = !0, l = 0; l < e.length; l++)
		e[l][8] = reverseTheOrder ? 2 : -1;
	stepsText += " Winning Percentage~";
	for (l = 0; l < r; l++) {
		a = 0,
		t = 0,
		0,
		n = 0;
		for (var d = 0; d < r; d++)
			headToHeadArray[e[l][0]][e[d][0]][2] > 0 ? (a += headToHeadArray[e[l][0]][e[d][0]][2], t += headToHeadArray[e[l][0]][e[d][0]][4], headToHeadArray[e[l][0]][e[d][0]][5], n += headToHeadArray[e[l][0]][e[d][0]][6]) : l != d && (s = !1);
		e[l][8] = parseInt(1e3 * (t + .5 * n) / a) / 1e3,
		"NaN" == e[l][8].toString() && (e[l][8] = -1e-4, i = !1)
	}
	2 != useWinPctRule || i || (o = !1, stepsText += " . . . . not applicable since all the teams did not play at least one game~"),
	3 != useWinPctRule || s || (o = !1, stepsText += " . . . . not applicable since the teams did not play at least one game against each other~"),
	e = habmanBubbleSort(e, r, 8, reverseTheOrder ? 1 : 0);
	for (var c = "    Current grouping (", y = 0; y < r; y++)
		c += franchiseArray[e[y][0]][1] + " " + decimalFormat(e[y][8], 3) + ", ";
	if (c = c.substr(0, c.length - 2), currentWinPctGrouping = c += ")~", o)
		if (e[0][8] != e[1][8])
			headToHeadBrokeTie = !0;
		else {
			for (var m = 1, f = 0; f < e.length - 1; f++)
				e[f][8] == e[f + 1][8] ? m++ : f = e.length - 1;
			teamsCurrentlyTied > m && (teamsCurrentlyTied = m)
		}
	return stepsText += currentWinPctGrouping, e
}
function sortHeadToHeadWinPctMFLRule(e, r, a) {
	var t,
		n,
		s;
	if (stepsText += " Winning Percentage~", headToHeadWinPctTeams < 1) {
		headToHeadWinPctTeams = r;
		for (var i = 0; i < e.length; i++)
			e[i][8] = reverseTheOrder ? 2 : -1;
		for (i = 0; i < r; i++) {
			t = 0,
			n = 0,
			0,
			s = 0;
			for (var o = 0; o < r; o++)
				headToHeadArray[e[i][0]][e[o][0]][2] > 0 && (t += headToHeadArray[e[i][0]][e[o][0]][2], n += headToHeadArray[e[i][0]][e[o][0]][4], headToHeadArray[e[i][0]][e[o][0]][5], s += headToHeadArray[e[i][0]][e[o][0]][6]);
			e[i][8] = parseInt(1e3 * (n + .5 * s) / t) / 1e3,
			"NaN" == e[i][8].toString() && (e[i][8] = -1e-4)
		}
		(e = habmanBubbleSort(e, r, 8, reverseTheOrder ? 1 : 0))[0][8] != e[1][8] && (headToHeadBrokeTie = !0);
		for (var l = "    Current grouping (", d = 0; d < r; d++)
			l += franchiseArray[e[d][0]][1] + " " + decimalFormat(e[d][8], 3) + ", ";
		l = l.substr(0, l.length - 2),
		currentWinPctGrouping = l += ")~"
	}
	return stepsText += currentWinPctGrouping, e
}
function sortHthPointsScoredStartOverRule(e, r) {
	for (var a, t = 0; t < e.length; t++)
		e[t][18] = reverseTheOrder ? 1e4 : -1e4;
	stepsText += " Points Scored~";
	for (t = 0; t < r; t++) {
		a = 0;
		for (var n = 0; n < r; n++)
			headToHeadArray[e[t][0]][e[n][0]][2] > 0 && (a += headToHeadArray[e[t][0]][e[n][0]][7]);
		e[t][18] = a,
		"NaN" == e[t][18].toString() && (e[t][18] = 0)
	}
	e = habmanBubbleSort(e, r, 18, reverseTheOrder ? 1 : 0);
	for (var s = "    Current grouping (", i = 0; i < r; i++)
		s += franchiseArray[e[i][0]][1] + " " + decimalFormat(e[i][18], scoringDecimals) + ", ";
	if (s = s.substr(0, s.length - 2), s += ")~", currentPointsScoredGrouping = s, e[0][18] != e[1][18])
		hthPointsScoredBrokeTie = !0;
	else {
		for (var o = 1, l = 0; l < e.length - 1; l++)
			e[l][18] == e[l + 1][18] ? o++ : l = e.length - 1;
		teamsCurrentlyTied > o && (teamsCurrentlyTied = o)
	}
	return stepsText += currentPointsScoredGrouping, e
}
function sortHthPointsScoredMFLRule(e, r, a) {
	var t;
	if (stepsText += " Points Scored~", hthPointsScoredTeams < 1) {
		hthPointsScoredTeams = r;
		for (var n = 0; n < e.length; n++)
			e[n][18] = reverseTheOrder ? 1e4 : -1e4;
		for (n = 0; n < r; n++) {
			t = 0;
			for (var s = 0; s < r; s++)
				headToHeadArray[e[n][0]][e[s][0]][2] > 0 && (t += headToHeadArray[e[n][0]][e[s][0]][7]);
			e[n][18] = t,
			"NaN" == e[n][18].toString() && (e[n][18] = 0)
		}
		(e = habmanBubbleSort(e, r, 18, reverseTheOrder ? 1 : 0))[0][18] != e[1][18] && (hthPointsScoredBrokeTie = !0);
		for (var i = "    Current grouping (", o = 0; o < r; o++)
			i += franchiseArray[e[o][0]][1] + " " + decimalFormat(e[o][18], scoringDecimals) + ", ";
		i = i.substr(0, i.length - 2),
		i += ")~",
		currentPointsScoredGrouping = i
	}
	return stepsText += currentPointsScoredGrouping, e
}
function sortHeadToHeadWinPct(e, r, a) {
	return e = useStartOverRule ? sortHeadToHeadWinPctStartOverRule(e, r) : sortHeadToHeadWinPctMFLRule(e, r, a)
}
function sortHthPointsScored(e, r, a) {
	return e = useStartOverRule ? sortHthPointsScoredStartOverRule(e, r) : sortHthPointsScoredMFLRule(e, r, a)
}
function sortHeadToHead(e, r, a, t) {
	var n = !1;
	headToHeadBrokeTie = !1;
	var s = !1;
	if (useSweepRule && !doingDivision && teamsCurrentlyTied > 2 && (e = sortHeadToHeadSweep(e, r), n = !0), !n) {
		switch (useWinPctRule) {
		case 0:
			teamsCurrentlyTied > 2 ? stepsText += " . . . . not applicable since more than two teams are tied~" : s = !0;
			break;
		case 1:
		case 2:
		case 3:
			s = !0
		}
		s && (e = sortHeadToHeadWinPct(e, r, a))
	}
	return e
}
function sortCommonGame(e, r, a) {
	commonGameBrokeTie = !1;
	for (var t, n, s, i = new Array, o = new Array, l = 0, d = 0; d < numTeams; d++) {
		i[d] = 0;
		for (var c = 0; c < r; c++)
			headToHeadArray[e[c][0]][d][2] > 0 && i[d]++
	}
	for (d = 0; d < numTeams; d++)
		i[d] == r && (o[l] = d, l++);
	if (o.length >= commonGameMinGP) {
		for (d = 0; d < r; d++) {
			t = 0,
			n = 0,
			0,
			s = 0;
			for (c = 0; c < o.length; c++)
				t += headToHeadArray[e[d][0]][o[c]][2],
				n += headToHeadArray[e[d][0]][o[c]][4],
				headToHeadArray[e[d][0]][o[c]][5],
				s += headToHeadArray[e[d][0]][o[c]][6];
			e[d][17] = parseInt(1e3 * (n + .5 * s) / t) / 1e3,
			"NaN" == e[d][17].toString() && (e[d][17] = 0)
		}
		e = habmanBubbleSort(e, r, 17, reverseTheOrder ? 1 : 0);
		for (var y = "    Common game opponents (", m = 0; m < o.length; m++)
			y += franchiseArray[o[m]][1] + ", ";
		y = y.substr(0, y.length - 2),
		y += ")~",
		y += "    Win % in common games (";
		for (m = 0; m < r; m++)
			y += franchiseArray[e[m][0]][1] + " " + decimalFormat(e[m][17], 3) + ", ";
		if (y = y.substr(0, y.length - 2), currentCommonGameGrouping = y += ")~", e[0][17] != e[1][17])
			commonGameBrokeTie = !0;
		else {
			for (var f = 1, h = 0; h < e.length - 1; h++)
				e[h][17] == e[h + 1][17] ? f++ : h = e.length - 1;
			teamsCurrentlyTied > f && (teamsCurrentlyTied = f)
		}
		stepsText += currentCommonGameGrouping
	} else {
		y = "    Minimum games not met.  Common games include (";
		if (o.length > 0)
			for (m = 0; m < o.length; m++)
				y += franchiseArray[o[m]][1] + ", ";
		else
			y += "none  ";
		y = y.substr(0, y.length - 2),
		stepsText += y += ")~"
	}
	return e
}
function eliminateBottomTeams(e, r, a) {
	for (var t = 1, n = 0; n < e.length - 1; n++)
		e[n][r[a]] == e[n + 1][r[a]] ? t++ : n = e.length - 1;
	return t
}
function divisionCheck(e, r) {
	for (var a = !0, t = 0; t < r - 1; t++)
		franchiseArray[e[t][0]][2] != franchiseArray[e[t + 1][0]][2] && (a = !1);
	return !a && bypassSameDivisionRule && (a = !0, stepsText += " . . . . using division winning % even though teams are not from the same division~"), a
}
function rankThisTeam(e, r, a, t, n) {
	if (n) {
		var s = "";
		a > 0 && (s += " broke the tie~"),
		t ? (playoffArray[e[0][0]][4] = 1, playoffArray[e[0][0]][5] = r[a], playoffArray[e[0][0]][7] = s, 1 == e.length ? playoffArray[e[0][0]][8] += stepsTitle + "1. By Default~" : playoffArray[e[0][0]][8] += stepsText + s) : (playoffArray[e[0][0]][2] = 1, playoffArray[e[0][0]][3] = r[a], playoffArray[e[0][0]][6] = s, 1 == e.length ? playoffArray[e[0][0]][8] += stepsTitle + "1. By Default~" : playoffArray[e[0][0]][8] += stepsText + s)
	}
	return e[0]
}
function updateSortArray(e) {
	for (var r = new Array, a = 1; a < e.length; a++)
		r[a - 1] = e[a];
	return e = r
}
function sortTheseTeams(e, r, a, t, n) {
	for (var s, i, o, l, d = 0, c = 0, y = new Array, m = new Array, f = (new Array, !1), h = !1, p = !1, g = !1, u = !1, A = !1, T = 0; T < e.length; T++)
		y[T] = e[T];
	for (T = 0; T < r; T++) {
		stepsText = stepsTitle,
		stepsCount = 0,
		teamsCurrentlyTied = y.length,
		f = !1,
		h = !1,
		p = !1,
		g = !1,
		u = !1,
		A = !1,
		headToHeadBrokeTie = !1,
		commonGameBrokeTie = !1,
		hthPointsScoredBrokeTie = !1,
		headToHeadSweep = !1,
		headToHeadWinPctTeams -= 1,
		hthPointsScoredTeams -= 1;
		for (var b = 0; b < a.length; b++)
			if (d = b, stepsText += ++stepsCount + ". " + tieBreakerTitles[a[b]] + "~", reverseTheOrder && (c = 1), 1 != y.length) {
				if (useStartOverRule) {
					if (l = !0, 2 != a[b] || doingDivision || (l = divisionCheck(y, teamsCurrentlyTied)) || (stepsText += " . . . . tied teams are not from the same division so going to next tiebreaker~"), 8 == a[b] && (g = !0, s = b, y = sortHeadToHead(y, teamsCurrentlyTied, a[b - 1], t)), 17 == a[b] && (u = !0, i = b, y = sortCommonGame(y, teamsCurrentlyTied, a[b - 1])), 18 == a[b] && (A = !0, o = b, y = sortHthPointsScored(y, teamsCurrentlyTied, a[b - 1])), l && 8 != a[b] && 17 != a[b] && 18 != a[b] && (y = habmanBubbleSort(y, teamsCurrentlyTied, a[b], c)), 8 == a[b] && headToHeadBrokeTie && (b = a.length), 17 == a[b] && commonGameBrokeTie && (b = a.length), 18 == a[b] && hthPointsScoredBrokeTie && (b = a.length), l && 8 != a[b] && 17 != a[b] && 18 != a[b] && y[0][a[b]] != y[1][a[b]] && (b = a.length), l && 8 != a[b] && 17 != a[b] && 18 != a[b] && b != a.length) {
						var v = teamsCurrentlyTied;
						(teamsCurrentlyTied = eliminateBottomTeams(y, a, b)) < v && (g && (f = !0), u && (h = !0), A && (p = !0)),
						teamsCurrentlyTied > v && (teamsCurrentlyTied = v)
					}
				} else if (l = !0, 2 != a[b] || doingDivision || (l = divisionCheck(y, teamsCurrentlyTied)) || (stepsText += " . . . . tied teams are not from the same division so going to next tiebreaker~"), 8 == a[b] && (y = sortHeadToHead(y, teamsCurrentlyTied, a[b - 1], t)), 17 == a[b] && (y = sortCommonGame(y, teamsCurrentlyTied, a[b - 1])), 18 == a[b] && (y = sortHthPointsScored(y, teamsCurrentlyTied, a[b - 1])), y = habmanBubbleSort(y, teamsCurrentlyTied, a[b], c), l && y[0][a[b]] != y[1][a[b]] && (b = a.length), l && b != a.length) {
					v = teamsCurrentlyTied;
					(teamsCurrentlyTied = eliminateBottomTeams(y, a, b)) > v && (teamsCurrentlyTied = v)
				}
				b != a.length && teamsCurrentlyTied > 0 && (stepsText = addTeamsStillTied(stepsText, y, teamsCurrentlyTied)),
				headToHeadSwept && !headToHeadBrokeTie && (f = !0, headToHeadSwept = !1),
				f && useStartOverRule && b != a.length && (stepsText += " . . . . re-testing head to head~", y = sortHeadToHead(y, teamsCurrentlyTied, a[b - 1], t), headToHeadBrokeTie && (d = s, b = a.length), f = !1),
				h && useStartOverRule && b != a.length && (stepsText += " . . . . re-testing common games~", y = sortCommonGame(y, teamsCurrentlyTied, a[b - 1]), commonGameBrokeTie && (d = i, b = a.length), h = !1),
				p && useStartOverRule && b != a.length && (stepsText += " . . . . re-testing head to head points scored~", y = sortHthPointsScored(y, teamsCurrentlyTied, a[b - 1]), hthPointsScoredBrokeTie && (d = o, b = a.length), p = !1),
				(headToHeadBrokeTie || commonGameBrokeTie || hthPointsScoredBrokeTie) && !useStartOverRule && (b = a.length)
			}
		m[T] = rankThisTeam(y, a, d, t, n),
		y = updateSortArray(y)
	}
	return m
}
function setDivisionWinners(e, r, a, t) {
	var n,
		s,
		i = new Array;
	doingDivision = !0,
	standingsArray = habmanBubbleSort(standingsArray, numTeams, 0, 1),
	s = 0;
	for (var o = 0; o < numDivisions; o++) {
		var l = new Array;
		n = 0;
		for (var d = 0; d < numTeams; d++)
			playoffArray[d][1] == o && 0 == playoffArray[d][2] && 0 == playoffArray[d][4] && (numConferences > 0 ? parseInt(divisionArray[parseInt(franchiseArray[d][2], 10)][2], 10) == e && (l[n] = [d, standingsArray[d][7], standingsArray[d][14], standingsArray[d][15], standingsArray[d][8], standingsArray[d][17], standingsArray[d][16], standingsArray[d][22], 0, Math.random(), standingsArray[d][27], standingsArray[d][28], standingsArray[d][9], standingsArray[d][33], standingsArray[d][34], standingsArray[d][39], standingsArray[d][40], 0, 0, standingsArray[d][43], standingsArray[d][45]], n++) : (l[n] = [d, standingsArray[d][7], standingsArray[d][14], standingsArray[d][15], standingsArray[d][8], standingsArray[d][17], standingsArray[d][16], standingsArray[d][22], 0, Math.random(), standingsArray[d][27], standingsArray[d][28], standingsArray[d][9], standingsArray[d][33], standingsArray[d][34], standingsArray[d][39], standingsArray[d][40], 0, 0, standingsArray[d][43], standingsArray[d][45]], n++));
		if (stepsTitle = "~Division Tiebreaker: ~", stepsCount = 0, l.length > 0) {
			currentDivisionLeader = sortTheseTeams(l, a, t, !1, r);
			for (var c = 0; c < a; c++)
				i[s] = currentDivisionLeader[c],
				s++
		}
	}
	if (doingDivision = !1, r && (stepsTitle = "~Wild-Card Tiebreaker used to sort Division Winners: ~", stepsCount = 0, i = sortTheseTeams(i, i.length, wildCardTieBreaker, !0, r), -1 != numDivisionWinners)) {
		var y = new Array;
		for (d = 0; d < i.length; d++)
			d < numDivisionWinners ? y[d] = i[d] : (playoffArray[i[d][0]][2] = 0, playoffArray[i[d][0]][3] = 0, playoffArray[i[d][0]][6] = "", playoffArray[i[d][0]][8] = "");
		i = y
	}
	return i
}
function setWildCardWinners(e, r, a) {
	var t,
		n = new Array;
	if (standingsArray = habmanBubbleSort(standingsArray, numTeams, 0, 1), stepsTitle = "~Wild-Card Tiebreaker: ~", reverseTheOrder && (stepsTitle += " - seeding has been run in reverse order (i.e. worst to best)~"), stepsCount = 0, useDivisionBestRule) {
		n = setDivisionWinners(e, !1, a, divisionTieBreaker),
		headToHeadWinPctTeams = 0,
		hthPointsScoredTeams = 0;
		var s = addTeamsStillTied("", n, n.length);
		s = s.replace(/    Still tied/, ""),
		stepsTitle = "~Wild-Card Tiebreaker: ~ . . . applying Division Best rule we get these teams " + s
	} else {
		t = 0;
		for (var i = 0; i < numTeams; i++)
			0 == playoffArray[i][2] && (numConferences > 0 ? parseInt(divisionArray[parseInt(franchiseArray[i][2], 10)][2], 10) == e && (n[t] = [i, standingsArray[i][7], standingsArray[i][14], standingsArray[i][15], standingsArray[i][8], standingsArray[i][17], standingsArray[i][16], standingsArray[i][22], 0, Math.random(), standingsArray[i][27], standingsArray[i][28], standingsArray[i][9], standingsArray[i][33], standingsArray[i][34], standingsArray[i][39], standingsArray[i][40], 0, 0, standingsArray[i][43], standingsArray[i][45]], t++) : (n[t] = [i, standingsArray[i][7], standingsArray[i][14], standingsArray[i][15], standingsArray[i][8], standingsArray[i][17], standingsArray[i][16], standingsArray[i][22], 0, Math.random(), standingsArray[i][27], standingsArray[i][28], standingsArray[i][9], standingsArray[i][33], standingsArray[i][34], standingsArray[i][39], standingsArray[i][40], 0, 0, standingsArray[i][43], standingsArray[i][45]], t++))
	}
	return n = sortTheseTeams(n, a, wildCardTieBreaker, !1, r)
}
function setSpecialSeed(e, r) {
	var a,
		t = new Array;
	standingsArray = habmanBubbleSort(standingsArray, numTeams, 0, 1),
	stepsTitle = "~Special Seed Assignment: ~",
	a = 0;
	for (var n = 0; n < numTeams; n++)
		0 == playoffArray[n][2] && (numConferences > 0 ? parseInt(divisionArray[parseInt(franchiseArray[n][2], 10)][2], 10) == r && (t[a] = [n, standingsArray[n][7], standingsArray[n][14], standingsArray[n][15], standingsArray[n][8], standingsArray[n][17], standingsArray[n][16], standingsArray[n][22], 0, Math.random(), standingsArray[n][27], standingsArray[n][28], standingsArray[n][9], standingsArray[n][33], standingsArray[n][34], standingsArray[n][39], standingsArray[n][40], 0, 0, standingsArray[n][43], standingsArray[n][45]], a++) : (t[a] = [n, standingsArray[n][7], standingsArray[n][14], standingsArray[n][15], standingsArray[n][8], standingsArray[n][17], standingsArray[n][16], standingsArray[n][22], 0, Math.random(), standingsArray[n][27], standingsArray[n][28], standingsArray[n][9], standingsArray[n][33], standingsArray[n][34], standingsArray[n][39], standingsArray[n][40], 0, 0, standingsArray[n][43], standingsArray[n][45]], a++));
	return t = sortTheseTeams(t, 1, specialSeed, !1, !0), e[e.length] = t[0], e
}
function setNonPlayoffTeams(e) {
	var r,
		a = new Array;
	standingsArray = habmanBubbleSort(standingsArray, numTeams, 0, 1),
	stepsTitle = "~Wild-Card Tiebreaker: ~",
	r = 0;
	for (var t = 0; t < numTeams; t++)
		0 == playoffArray[t][2] && (numConferences > 0 ? parseInt(divisionArray[parseInt(franchiseArray[t][2], 10)][2], 10) == e && (a[r] = [t, standingsArray[t][7], standingsArray[t][14], standingsArray[t][15], standingsArray[t][8], standingsArray[t][17], standingsArray[t][16], standingsArray[t][22], 0, Math.random(), standingsArray[t][27], standingsArray[t][28], standingsArray[t][9], standingsArray[t][33], standingsArray[t][34], standingsArray[t][39], standingsArray[t][40], 0, 0, standingsArray[t][43], standingsArray[t][45]], r++) : (a[r] = [t, standingsArray[t][7], standingsArray[t][14], standingsArray[t][15], standingsArray[t][8], standingsArray[t][17], standingsArray[t][16], standingsArray[t][22], 0, Math.random(), standingsArray[t][27], standingsArray[t][28], standingsArray[t][9], standingsArray[t][33], standingsArray[t][34], standingsArray[t][39], standingsArray[t][40], 0, 0, standingsArray[t][43], standingsArray[t][45]], r++));
	return outOfPlayoffsTiebreaker.length > 0 && (wildCardTieBreaker = outOfPlayoffsTiebreaker, outOfPlayoffsReverseSort && (reverseTheOrder = !0)), a = sortTheseTeams(a, a.length, wildCardTieBreaker, !1, !0)
}
function createTable(e, r, a, t, n) {
	if (e.length > 0 && 0 == n) {
		var s = a + r + "-" + habmanModCount,
			i = " <tr>\n  <td>\n";
		i += "   <div class=mobile-wrap><table border='0' cellspacing='1' width='100%' align='center' class='homepagemodule report' id='" + s + "'>\n   <caption title='Table ID: " + s + "'><span>" + t + "</span></caption>\n",
		i += !genericTable || showSteps ? "     <tr>\n      <th class='playoffrank' style='width: 5%; text-align: center;'>Seed</th>\n      <th style='width: 50%; text-align: center;'>Franchise</th>\n" : "     <tr>\n      <th style='width: 50%; text-align: center;'>Franchise</th>";
		for (var o = 0; o < displayColumns.length; o++)
			i += "      <th style='text-align: center;'>" + standingsTitles[displayColumns[o]] + "</th>\n";
		i += "     </tr>\n";
		for (var l = 0; l < e.length; l++) {
			var d = l + seedCount,
				c = baseURLDynamic + "/" + year + "/options?L=" + league_id + "&F=" + franchiseArray[e[l][0]][0] + "&O=01";
			if (useDivisionIcon)
				var y = "<img src='//nitrografixx.com/habman_js/divblank.gif' style='background-color: #" + iconColors[parseInt(parseInt(franchiseArray[e[l][0]][2], 10), 10)] + ";' alt='" + divisionArray[parseInt(franchiseArray[e[l][0]][2], 10)][1] + "' />";
			else
				y = "";
			i += !genericTable || showSteps ? l % 2 == 0 ? useToolTip1 || !useToolTip1 ? "     <tr class='oddtablerow'>\n      <td class='playoffrank' align='center'>" + d + "</td>\n      <td class='fname' style='text-align: left;'>&#32;<i class='fa fa-plus-square' aria-hidden='true' style='cursor:pointer' title='show steps taken to seed this team' onclick=\"javascript:doAlert(" + d + ",'" + franchiseArray[e[l][0]][1] + "','" + playoffArray[e[l][0]][8] + "');\" </i>&#32;" + y + "&#32;<a href='" + c + "'>" + franchiseArray[e[l][0]][1] + "</a></td>\n" : "     <tr class='oddtablerow'>\n      <td class='playoffrank' align='center'>" + d + "</td>\n      <td class='fname' style='text-align: left;'>&#32;<a href=\"javascript:doAlert(" + d + ",'" + franchiseArray[e[l][0]][1] + "','" + playoffArray[e[l][0]][8] + "');\"><i class='fa fa-plus-square' aria-hidden='true' style='cursor:pointer' title='show steps taken to seed this team'</i></a>&#32;" + y + "&#32;<a href='" + c + "'>" + franchiseArray[e[l][0]][1] + "</a></td>\n" : useToolTip1 || !useToolTip1 ? "     <tr class='eventablerow'>\n      <td class='playoffrank' align='center'>" + d + "</td>\n      <td class='fname' style='text-align: left;'>&#32;<i class='fa fa-plus-square' aria-hidden='true' style='cursor:pointer' title='show steps taken to seed this team' onclick=\"javascript:doAlert(" + d + ",'" + franchiseArray[e[l][0]][1] + "','" + playoffArray[e[l][0]][8] + "');\" </i></a>&#32;" + y + "&#32;<a href='" + c + "'>" + franchiseArray[e[l][0]][1] + "</a></td>\n" : "     <tr class='eventablerow'>\n      <td class='playoffrank' align='center'>" + d + "</td>\n      <td class='fname' style='text-align: left;'>&#32;<a href=\"javascript:doAlert(" + d + ",'" + franchiseArray[e[l][0]][1] + "','" + playoffArray[e[l][0]][8] + "');\"><i class='fa fa-plus-square' aria-hidden='true' style='cursor:pointer' title='show steps taken to seed this team'</i></a>&#32;" + y + "&#32;<a href='" + c + "'>" + franchiseArray[e[l][0]][1] + "</a></td>\n" : l % 2 == 0 ? "     <tr class='oddtablerow'>\n      <td class='fname' style='text-align: left;'>&#32;" + y + "&#32;<a href='" + c + "'>" + franchiseArray[e[l][0]][1] + "</a></td>\n" : "     <tr class='eventablerow'>\n      <td class='fname' style='text-align: left;'>&#32;" + y + "&#32;<a href='" + c + "'>" + franchiseArray[e[l][0]][1] + "</a></td>\n";
			for (o = 0; o < displayColumns.length; o++)
				i += "      <td align='center'>" + decimalCheck(standingsArray[e[l][0]][displayColumns[o]], displayColumns[o]) + "</td>\n";
			i += "     </tr>\n"
		}
		i += "    </table></div>\n",
		i += "  </td>\n </tr>\n",
		seedCount = d + 1
	} else
		i = "";
	return i
}
function formatPlayoffTitles() {
	titleHeader = (titleHeader = titleHeader.replace(/'/g, "&#8217;")).replace(/"/g, "&#8221;"),
	titleDivisionWinner = (titleDivisionWinner = titleDivisionWinner.replace(/'/g, "&#8217;")).replace(/"/g, "&#8221;"),
	titleDivisionWinnerTwo = (titleDivisionWinnerTwo = titleDivisionWinnerTwo.replace(/'/g, "&#8217;")).replace(/"/g, "&#8221;"),
	titleWildCardWinner = (titleWildCardWinner = titleWildCardWinner.replace(/'/g, "&#8217;")).replace(/"/g, "&#8221;"),
	titleNonPlayoffTeam = (titleNonPlayoffTeam = titleNonPlayoffTeam.replace(/'/g, "&#8217;")).replace(/"/g, "&#8221;"),
	titlePlayoffTeam = (titlePlayoffTeam = titlePlayoffTeam.replace(/'/g, "&#8217;")).replace(/"/g, "&#8221;")
}
function doPlayoffTable(e, r, a) {
	formatPlayoffTitles(),
	null == r ? setupNormal() : setupOther(r, a);
	for (var t = 0; t < numTeams; t++)
		playoffArray[t] = [franchiseArray[t][0], parseInt(franchiseArray[t][2], 10), 0, 0, 0, 0, "", "", ""];
	if (conferenceLikeDivision) {
		for (var n = 0; n < numDivisions; n++)
			divisionArray[n][2] = new Array,
			divisionArray[n][2] = n,
			conferenceArray[n] = new Array,
			conferenceArray[n][0] = n,
			conferenceArray[n][1] = new Array,
			conferenceArray[n][1] = divisionArray[n][1];
		numConferences = numDivisions
	}
	if (0 == numConferences)
		var s = 1;
	else
		s = numConferences;
	if (!conferenceLikeDivision)
		var i = new Array;
	for (var o = new Array, l = new Array, d = new Array, c = 0; c < s; c++) {
		if (conferenceLikeDivision || (i[c] = setDivisionWinners(c, !0, numDivisionTeams, divisionTieBreaker)), !conferenceLikeDivision && divisionTieBreakerTwo.length > 1 && (o[c] = setDivisionWinners(c, !0, numDivisionTeamsTwo, divisionTieBreakerTwo)), useDivisionBestRule) {
			var y = new Array;
			l[c] = new Array;
			for (var m = 0; m < numWildCardTeams; m++)
				y = setWildCardWinners(c, !0, 1),
				l[c][m] = y[0]
		} else
			l[c] = setWildCardWinners(c, !0, numWildCardTeams);
		if (specialSeed.length > 0 && (l[c] = setSpecialSeed(l[c], c)), useDivisionBestRule) {
			y = new Array;
			var f = 0;
			for (m = 0; m < playoffArray.length; m++)
				0 == playoffArray[m][2] && (0 == numConferences ? f++ : divisionArray[parseInt(franchiseArray[parseInt(playoffArray[m][0], 10) - 1][2], 10)][2] == c && f++);
			d[c] = new Array;
			for (m = 0; m < f; m++)
				y = setWildCardWinners(c, !0, 1),
				d[c][m] = y[0]
		} else
			d[c] = setNonPlayoffTeams(c)
	}
	var h = "";
	hideTitleHeader || (h += titleHeader + "\n");
	for (c = 0; c < s; c++) {
		seedCount = 1,
		numConferences > 0 && (h += "<caption title='Table ID: " + ("outerplayoff_table" + c + "-" + habmanModCount) + "'><span>" + conferenceArray[c][1] + "</span></caption>\n"),
		numDivisions > 0 && 0 == conferenceLikeDivision ? (h += createTable(i[c], c, "divisionwinner_table", titleDivisionWinner, hideDivision), divisionTieBreakerTwo.length > 1 && (h += createTable(o[c], c, "divisionwinnertwo_table", titleDivisionWinnerTwo, hideDivisionTwo)), h += createTable(l[c], c, "wildcardwinner_table", titleWildCardWinner, hideWildCard)) : h += createTable(l[c], c, "playoffwinner_table", titlePlayoffTeam, hidePlayoff),
		h += createTable(d[c], c, "nonplayoffteam_table", titleNonPlayoffTeam, hideNonPlayoff)
	}
	enableCodeWriter ? (h = '<script language="JavaScript" type="text/javascript" src="//nitrografixx.com/habman_js/habman_apps_ver3.js"><\/script>\n\n' + h, document.write("<br /><br /><br />Copy and paste the following HTML code to a home page message to create the requested table<br />"), document.write('<textarea cols="130" rows="25" style="font-size: 12px;">' + h + "</textarea>")) : document.getElementById(e).innerHTML = h
}
jQuery(document).ready(function() {
	$("#playoffTable a").removeAttr("href")
});

