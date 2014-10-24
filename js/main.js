$(document).ready(function() {
    var screenW=$("body").width();
    
	$(".main").onepage_scroll({
        sectionContainer: ".page",
        responsiveFallback: 20,
        loop: false,
        afterMove:function(index){
           if(index==2){
            $("#page2").addClass("page2-show");
           }else{
            $("#page2").removeClass("page2-show");
           }
        }
    });
    
   
    $("#view-rule").click(function(){
        $(".main").moveDown();
    });
    $("#qr-view").hover(function(){
        $(this).find(".qr").show(300);
    },function(){
        $(this).find(".qr").hide(300);
    });
    var old_index=0;
    var time=500;
    $(".mod-steps .step").hover(function(){
        var index=$(".mod-steps .step").index($(this));
        if(index!=old_index){
           
        $(".mod-steps .step").removeClass("on");
        $(this).addClass("on");

        var imgH=$(".mod-preview img").height();
       
            if(index>old_index){
                $(".mod-preview img").eq(old_index).stop().animate({
                    top:-imgH+"px"
                },time);
                $(".mod-preview img").eq(index).stop().css({
                    top:imgH+"px"
                });
                $(".mod-preview img").eq(index).stop().animate({
                    top:"0px"
                },time)
            }else{
                $(".mod-preview img").eq(old_index).stop().animate({
                    top:imgH+"px"
                },time);
                $(".mod-preview img").eq(index).stop().css({
                    top:-imgH+"px"
                });
                $(".mod-preview img").eq(index).stop().animate({
                    top:"0px"
                },time)
            }
            
            old_index=index;
         }
    })

});
