// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.6
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_book(p,n,b){var f=jQuery;var m=f(this);var i=f(".ws_list",b);var k=f("<div>").addClass("ws_effect ws_book").css({position:"absolute",top:0,left:0,width:"100%",height:"100%"}).appendTo(b),e=p.duration,d=p.perspective||0.4,g=p.shadow||0.35,a=p.noCanvas||false,l=p.no3d||false;var o={domPrefixes:" Webkit Moz ms O Khtml".split(" "),testDom:function(r){var q=this.domPrefixes.length;while(q--){if(typeof document.body.style[this.domPrefixes[q]+r]!=="undefined"){return true}}return false},cssTransitions:function(){return this.testDom("Transition")},cssTransforms3d:function(){var r=(typeof document.body.style.perspectiveProperty!=="undefined")||this.testDom("Perspective");if(r&&/AppleWebKit/.test(navigator.userAgent)){var t=document.createElement("div"),q=document.createElement("style"),s="Test3d"+Math.round(Math.random()*99999);q.textContent="@media (-webkit-transform-3d){#"+s+"{height:3px}}";document.getElementsByTagName("head")[0].appendChild(q);t.id=s;document.body.appendChild(t);r=t.offsetHeight===3;q.parentNode.removeChild(q);t.parentNode.removeChild(t)}return r},canvas:function(){if(typeof document.createElement("canvas").getContext!=="undefined"){return true}}};if(!l){l=o.cssTransitions()&&o.cssTransforms3d()}if(!a){a=o.canvas()}var j;this.go=function(r,q,E){if(j){return -1}var v=n.get(r),G=n.get(q);if(E==undefined){E=(q==0&&r!=q+1)||(r==q-1)}else{E=!E}var s=f("<div>").appendTo(k);var t=f(v);t={width:t.width(),height:t.height(),marginLeft:parseFloat(t.css("marginLeft")),marginTop:parseFloat(t.css("marginTop"))};if(l){var y={background:"#000",position:"absolute",left:0,top:0,width:"100%",height:"100%",transformStyle:"preserve-3d",zIndex:3,outline:"1px solid transparent"};perspect=b.width()*(3-d*2);s.css(y).css({perspective:perspect,transform:"translate3d(0,0,0)"});var z=90;var D=f("<div>").css(y).css({position:"relative","float":"left",width:"50%",overflow:"hidden"}).append(f("<img>").attr("src",(E?v:G).src).css(t)).appendTo(s);var C=f("<div>").css(y).css({position:"relative","float":"left",width:"50%",overflow:"hidden"}).append(f("<img>").attr("src",(E?G:v).src).css(t).css({marginLeft:-t.width/2})).appendTo(s);var I=f("<div>").css(y).css({display:E?"block":"none",width:"50%",transform:"rotateY("+(E?0.1:z)+"deg)",transition:(E?"ease-in ":"ease-out ")+e/2000+"s",transformOrigin:"right",overflow:"hidden"}).append(f("<img>").attr("src",(E?G:v).src).css(t)).appendTo(s);var F=f("<div>").css(y).css({display:E?"none":"block",left:"50%",width:"50%",transform:"rotateY(-"+(E?z:0.1)+"deg)",transition:(E?"ease-out ":"ease-in ")+e/2000+"s",transformOrigin:"left",overflow:"hidden"}).append(f("<img>").attr("src",(E?v:G).src).css(t).css({marginLeft:-t.width/2})).appendTo(s)}else{if(a){var x=f("<div>").css({position:"absolute",top:0,left:E?0:"50%",width:"50%",height:"100%",overflow:"hidden",zIndex:6}).append(f(n.get(r)).clone().css({position:"absolute",height:"100%",right:E?"auto":0,left:E?0:"auto"})).appendTo(s).hide();var B=f("<div>").css({position:"absolute",width:"100%",height:"100%",left:0,top:0,zIndex:8}).appendTo(s).hide();var H=f("<canvas>").css({position:"absolute",zIndex:2,left:0,top:-B.height()*d/2}).attr({width:B.width(),height:B.height()*(d+1)}).appendTo(B);var A=H.clone().css({top:0,zIndex:1}).attr({width:B.width(),height:B.height()}).appendTo(B);var w=H.get(0).getContext("2d");var u=A.get(0).getContext("2d")}else{i.stop(true).animate({left:(r?-r+"00%":(/Safari/.test(navigator.userAgent)?"0%":0))},e,"easeInOutExpo")}}if(!l&&a){var D=w;var C=u;var I=G;var F=v}j=new h(E,z,D,C,I,F,B,H,A,x,t,function(){m.trigger("effectEnd");s.remove();j=0})};function c(G,s,A,v,u,E,D,C,B,t,r){numSlices=u/2,widthScale=u/B,heightScale=(1-E)/numSlices;G.clearRect(0,0,r.width(),r.height());for(var q=0;q<numSlices+widthScale;q++){var z=(D?q*p.width/u+p.width/2:(numSlices-q)*p.width/u);var H=A+(D?2:-2)*q,F=v+t*heightScale*q/2;if(z<0){z=0}if(H<0){H=0}if(F<0){F=0}G.drawImage(s,z,0,2.5,p.height,H,F,2,t*(1-(heightScale*q)))}G.save();G.beginPath();G.moveTo(A,v);G.lineTo(A+(D?2:-2)*(numSlices+widthScale),v+t*heightScale*(numSlices+widthScale)/2);G.lineTo(A+(D?2:-2)*(numSlices+widthScale),t*(1-heightScale*(numSlices+widthScale))+v+t*heightScale*(numSlices+widthScale)/2);G.lineTo(A,v+t);G.closePath();G.clip();G.fillStyle="rgba(0,0,0,"+Math.round(C*100)/100+")";G.fillRect(0,0,r.width(),r.height());G.restore()}function h(A,r,C,B,y,x,v,w,u,z,t,E){if(l){if(!A){r*=-1;var D=B;B=C;C=D;D=x;x=y;y=D}setTimeout(function(){C.children("img").css("opacity",g).animate({opacity:1},e/2);y.css("transform","rotateY("+r+"deg)").children("img").css("opacity",1).animate({opacity:g},e/2,function(){y.hide();x.show().css("transform","rotateX(0deg) rotateY(0deg)").children("img").css("opacity",g).animate({opacity:1},e/2);B.children("img").css("opacity",1).animate({opacity:g},e/2)})},0);setTimeout(E,e)}else{if(a){v.show();var q=new Date;var s=true;wowAnimate(function(F){var I=jQuery.easing.easeInOutQuint(1,F,0,1,1),H=jQuery.easing.easeInOutCubic(1,F,0,1,1),L=!A;if(F<0.5){I*=2;H*=2;var G=y}else{L=A;I=(1-I)*2;H=(1-H)*2;var G=x}var J=v.height()*d/2,N=(1-I)*v.width()/2,M=1+H*d,K=v.width()/2;c(C,G,K,J,N,M,L,H*g,K,v.height(),w);if(s){z.show();s=false}B.clearRect(0,0,u.width(),u.height());B.fillStyle="rgba(0,0,0,"+(g-H*g)+")";B.fillRect(L?K:0,0,u.width()/2,u.height())},0,1,e,E)}}}}jQuery.extend(jQuery.easing,{easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a}});// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.6
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_slices(k,h,i){var b=jQuery;var f=b(this);function g(q,p,o,m,l,n){if(k.support.transform){if(p.top){p.translate=[0,p.top||0,0]}if(o.top){o.translate=[0,o.top||0,0]}delete p.top;delete o.top}wowAnimate(q,p,o,m,l,"swing",n)}var e=function(r,x){var q=b.extend({},{effect:"random",slices:15,animSpeed:500,pauseTime:3000,startSlide:0,container:null,onEffectEnd:0},x);var t={currentSlide:0,currentImage:"",totalSlides:0,randAnim:"",stop:false};var o=b(r);o.data("wow:vars",t);if(!/absolute|relative/.test(o.css("position"))){o.css("position","relative")}var m=x.container||o;var p=o.children();t.totalSlides=p.length;if(q.startSlide>0){if(q.startSlide>=t.totalSlides){q.startSlide=t.totalSlides-1}t.currentSlide=q.startSlide}if(b(p[t.currentSlide]).is("img")){t.currentImage=b(p[t.currentSlide])}else{t.currentImage=b(p[t.currentSlide]).find("img:first")}if(b(p[t.currentSlide]).is("a")){b(p[t.currentSlide]).css("display","block")}for(var s=0;s<q.slices;s++){var w=Math.round(m.width()/q.slices);var v=b('<div class="wow-slice"></div>').css({left:w*s+"px",overflow:"hidden",width:((s==q.slices-1)?(m.width()-(w*s)):w)+"px",position:"absolute"}).appendTo(m);b("<img>").css({position:"absolute",left:0,top:0,transform:"translate3d(0,0,0)"}).appendTo(v)}var n=0;this.sliderRun=function(y,z){if(t.busy){return false}q.effect=z||q.effect;t.currentSlide=y-1;u(o,p,q,false);return true};var l=function(){if(q.onEffectEnd){q.onEffectEnd(t.currentSlide)}m.hide();b(".wow-slice",m).css({transition:"",transform:""});t.busy=0};var u=function(y,z,C,E){var F=y.data("wow:vars");if((!F||F.stop)&&!E){return false}F.busy=1;F.currentSlide++;if(F.currentSlide==F.totalSlides){F.currentSlide=0}if(F.currentSlide<0){F.currentSlide=(F.totalSlides-1)}F.currentImage=b(z[F.currentSlide]);if(!F.currentImage.is("img")){F.currentImage=F.currentImage.find("img:first")}var A=b(h[F.currentSlide]);A={width:A.width(),heiht:A.height(),marginTop:A.css("marginTop"),marginLeft:A.css("marginLeft")};b(".wow-slice",m).each(function(J){var L=b(this),I=b("img",L);var K=Math.round(m.width()/C.slices);I.width(m.width());I.attr("src",F.currentImage.attr("src"));I.css({left:-K*J+"px"}).css(A);L.css({height:"100%",opacity:0,left:K*J,width:((J==C.slices-1)?(m.width()-(K*J)):K)})});m.show();if(C.effect=="random"){var G=new Array("sliceDownRight","sliceDownLeft","sliceUpRight","sliceUpLeft","sliceUpDownRight","sliceUpDownLeft","fold","fade");F.randAnim=G[Math.floor(Math.random()*(G.length+1))];if(F.randAnim==undefined){F.randAnim="fade"}}if(C.effect.indexOf(",")!=-1){var G=C.effect.split(",");F.randAnim=b.trim(G[Math.floor(Math.random()*G.length)])}if(C.effect=="sliceDown"||C.effect=="sliceDownRight"||F.randAnim=="sliceDownRight"||C.effect=="sliceDownLeft"||F.randAnim=="sliceDownLeft"){var B=0;var H=b(".wow-slice",m);if(C.effect=="sliceDownLeft"||F.randAnim=="sliceDownLeft"){H=H._reverse()}H.each(function(I){g(b(this),{top:"-100%",opacity:0},{top:"0%",opacity:1},C.animSpeed,100+B,(I==C.slices-1)?l:0);B+=50})}else{if(C.effect=="sliceUp"||C.effect=="sliceUpRight"||F.randAnim=="sliceUpRight"||C.effect=="sliceUpLeft"||F.randAnim=="sliceUpLeft"){var B=0;var H=b(".wow-slice",m);if(C.effect=="sliceUpLeft"||F.randAnim=="sliceUpLeft"){H=H._reverse()}H.each(function(I){g(b(this),{top:"100%",opacity:0},{top:"0%",opacity:1},C.animSpeed,100+B,(I==C.slices-1)?l:0);B+=50})}else{if(C.effect=="sliceUpDown"||C.effect=="sliceUpDownRight"||F.randAnim=="sliceUpDownRight"||C.effect=="sliceUpDownLeft"||F.randAnim=="sliceUpDownLeft"){var B=0;var H=b(".wow-slice",m);if(C.effect=="sliceUpDownLeft"||F.randAnim=="sliceUpDownLeft"){H=H._reverse()}H.each(function(I){g(b(this),{top:((I%2)?"-":"")+"100%",opacity:0},{top:"0%",opacity:1},C.animSpeed,100+B,(I==C.slices-1)?l:0);B+=50})}else{if(C.effect=="fold"||F.randAnim=="fold"){var B=0;var H=b(".wow-slice",m);var D=H.width();H.each(function(I){g(b(this),{width:0,opacity:0},{width:D,opacity:1},C.animSpeed,100+B,(I==C.slices-1)?l:0);B+=50})}else{if(C.effect=="fade"||F.randAnim=="fade"){var H=b(".wow-slice",m);b(".wow-slice",m).each(function(I){b(this).css("height","100%");b(this).animate({opacity:"1.0"},(C.animSpeed*2),(I==C.slices-1)?l:0)})}}}}}}};b.fn._reverse=[].reverse;var a=b("li",i);var c=b("ul",i);var d=b("<div>").addClass("ws_effect ws_slices").css({left:0,top:0,"z-index":8,overflow:"hidden",width:"100%",height:"100%",position:"absolute"}).appendTo(i);var j=new e(c,{keyboardNav:false,caption:0,effect:"sliceDownRight,sliceDownLeft,sliceUpRight,sliceUpLeft,sliceUpDownRight,sliceUpDownLeft,sliceUpDownRight,sliceUpDownLeft,fold,fold,fold",animSpeed:k.duration,startSlide:k.startSlide,container:d,onEffectEnd:function(l){f.trigger("effectEnd")}});this.go=function(m,l){var n=j.sliderRun(m);if(k.fadeOut){c.fadeOut(k.duration)}}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.6
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_blinds(m,l,a){var g=jQuery;var k=g(this);var c=m.parts||3;var j=g(".ws_list",a);var h=g("<div>").addClass("ws_effect ws_blinds").css({position:"absolute",width:"100%",height:"100%",left:0,top:0,"z-index":8}).hide().appendTo(a);var d=g("<div>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"}).appendTo(h);var e=[];var b=document.addEventListener;for(var f=0;f<c;f++){e[f]=g("<div>").css({position:b?"relative":"absolute",display:b?"inline-block":"block",height:"100%",width:(100/c+0.001).toFixed(3)+"%",border:"none",margin:0,overflow:"hidden",top:0,left:b?0:((100*f/c).toFixed(3)+"%")}).appendTo(h)}this.go=function(r,p,o){if(o==undefined){o=p>r?1:0}h.find("img").stop(true,true);h.show();var s=g(l[p]);var t={width:s.width()||m.width,height:s.height()||m.height};var u=s.clone().css(t).appendTo(d);u.from={left:0};u.to={left:(!o?1:-1)*u.width()*0.5};if(m.support.transform){u.from={translate:[u.from.left,0,0]};u.to={translate:[u.to.left,0,0]}}j.hide();wowAnimate(u,u.from,u.to,m.duration,m.duration*0.1,"swing");for(var q=0;q<e.length;q++){var n=e[q];var v=g(l[r]).clone().css({position:"absolute",top:0}).css(t).appendTo(n);v.from={left:(!o?-1:1)*v.width()-n.position().left};v.to={left:-n.position().left};if(m.support.transform){v.from={translate:[v.from.left,0,0]};v.to={translate:[v.to.left,0,0]}}wowAnimate(v,v.from,v.to,(m.duration/(e.length+1))*(o?(e.length-q+1):(q+2)),"swing",((!o&&q==e.length-1||o&&!q)?function(){k.trigger("effectEnd");h.hide().find("img").remove();u.remove()}:false))}}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.6
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_fade(c,a,b){var e=jQuery,g=e(this),d=e(".ws_list",b),h={position:"absolute",left:0,top:0,width:"100%",height:"100%",maxHeight:"none",maxWidth:"none",transform:"translate3d(0,0,0)"},f=e("<div>").addClass("ws_effect ws_fade").css(h).css("overflow","hidden").appendTo(b);this.go=function(i,j){var k=e(a.get(i)),m={width:k.width(),height:k.height()};k=k.clone().css(h).css(m).appendTo(f);if(!c.noCross){var l=e(a.get(j)).clone().css(h).css(m).appendTo(f);wowAnimate(l,{opacity:1},{opacity:0},c.duration,function(){l.remove()})}wowAnimate(k,{opacity:0},{opacity:1},c.duration,function(){g.trigger("effectEnd");k.remove()})}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.6
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery("#wowslider-container1").wowSlider({effect:"fade",prev:"",next:"",duration:25*100,delay:25*100,width:612,height:385,autoPlay:true,autoPlayVideo:false,playPause:true,stopOnHover:true,loop:false,bullets:1,caption:true,captionEffect:"parallax",controls:true,controlsThumb:false,responsive:1,fullScreen:false,gestures:2,onBeforeStep:0,images:0});