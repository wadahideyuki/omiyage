$(function(){

	//リンク画像のホバー用
	$("img.hover").hover(
		function(){$(this).fadeTo(100,0.7);},
		function(){$(this).fadeTo(100,1);}
);
	
	$(".btnMenu").click(function(){
		$(".hdBtm").slideToggle();
		$("#modalArea").fadeOut("fast");
		return false;
	});


	var winW = $(window).width();
	
	$(".fukidashi").click(function(){
		if(winW < 992){
			var ulClone = $("ul",this).clone();
			$("#modalArea").fadeIn("fast");
			$("#modalInnerContent").empty();
			$("#modalInnerContent").append(ulClone);
			$('body,html').animate({scrollTop:100});
			if(winW < 768){
				$(".hdBtm").hide();
			}
			return false;
		}
	});

//地図のポップアップ
$(".btnClose").click(function(){
	$("#modalArea").fadeOut("fast");
});


//商品ページみんなの口コミを見るのタブ
$(".tabBox1 .tab li a").click(function(){
	var thisBox = $(this).parents(".tabBox1");
	var showNo = $(this).parent().attr("class").replace("tabNo", "");
	thisBox.children(".tab").find("li a").removeClass("show");
	$(this).addClass("show");

	thisBox.children(".cont").children("li").hide();
	if(showNo == "All"){
		thisBox.children(".cont").children("li").show();
	}else{
		thisBox.children(".cont").children("li.tabCont" + showNo).show();
	}
	return false;
});


//ランキングをSPの時にアコーディオン
	$(".ranking1 .ttl").click(function(){
		if(winW < 768){
			$(this).next(".list").slideToggle();
		}
		return false;
	});//.ranking1 .ttl ClkEnd


/*----- 読込処理 -----*/
$(function(){
	if(winW > 991){
	}
	if(winW < 768){
		$(".ranking1 .list").hide();
	}else{
	}
});//WinRszFncEnd
/*----- /読込処理 -----*/

/*----- リサイズ処理 -----*/
$(window).resize(function(){
	var winWRsz = $(window).width();
	if(winW != winWRsz){
		winW = winWRsz;
		if(winW > 991){
			$("#modalArea").fadeOut("fast");
		}
		if(winW < 768){
			$(".hdBtm").hide();
			$(".ranking1 .list").hide();
		}else{
			$(".hdBtm").show();
		}
	}
});//WinRszFncEnd
/*----- /リサイズ処理 -----*/


});	


/*
var _ua = (function(u){
  return {
    Tablet:(u.indexOf("windows") != -1 && u.indexOf("touch") != -1 && u.indexOf("tablet pc") == -1) 
      || u.indexOf("ipad") != -1
      || (u.indexOf("android") != -1 && u.indexOf("mobile") == -1)
      || (u.indexOf("firefox") != -1 && u.indexOf("tablet") != -1)
      || u.indexOf("kindle") != -1
      || u.indexOf("silk") != -1
      || u.indexOf("playbook") != -1,
    Mobile:(u.indexOf("windows") != -1 && u.indexOf("phone") != -1)
      || u.indexOf("iphone") != -1
      || u.indexOf("ipod") != -1
      || (u.indexOf("android") != -1 && u.indexOf("mobile") != -1)
      || (u.indexOf("firefox") != -1 && u.indexOf("mobile") != -1)
      || u.indexOf("blackberry") != -1
  }
})(window.navigator.userAgent.toLowerCase());


if(_ua.Mobile || _ua.Tablet){
//SP&TABLET
}else{

$(function() {

    !function() {

        var frame = $('.content-wrap')
        var navi = $('#hall-sidenav-fixed');
        var margin = $('.hall-sidenav__image').outerHeight(true);
        var naviHeight = navi.outerHeight(true);

        if (!navi.length) {
            return;
        }

        $(window).on('scroll', function () {

            var ws = $(window).scrollTop();
            var sub_top  = frame.offset().top + margin;
            var sub_bottom  = frame.offset().top + frame.outerHeight(true) - naviHeight;

            if (ws > sub_bottom) {
                navi.css({position:'fixed', top: sub_bottom - ws + 'px'});
            } else if (ws > sub_top) {
                navi.css({position:'fixed', top: '0px'});
            } else {
                navi.css({position:'relative', top: '0px'});
            }
        }).scroll();
    }();
});

}
*/
