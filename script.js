$(function(){


  $('.effect-move').css("opacity","0");　//アニメーションの対象となる.effect divと .effect iの表示を消します。
  $(window).scroll(function (){                 //スクロールした際に.effectごとに、これ以下に記述する内容が実行されます。
    $(".effect").each(function(){
      var imgPos = $(this).offset().top;      //変数を指定します。imgPosは、.effectの位置、scrollはスクロールした量、windowHeightはウインドウの高さです。
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/5){ //アニメーションする条件になります。.effectが画面の下から1/5のところまでスクロールする、というのが条件になります。
        $(".effect-move",this).css({
          "opacity":"1",
          "margin-top": "0px"
        });
      } else {
        $(".effect-move",this).css({
          "opacity":"0",
          "margin-top":"100px"
        });
      }
    });
  });


});
