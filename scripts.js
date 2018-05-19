////Autoscroll


	
startScroll();

function startScroll(){
setInterval(function(){ 
      $("body").scrollTop($("body").scrollTop() + 1);                
    }, 100);
}






//pages

	
	$(".open.1").click(function(){
		
			
			//hide all others
        $(".p2, .p3, .p4, .p5, .p6, .p7, .p8, .p9").hide(0);
		
			//show selected after delay
		setTimeout(function () {
       $(".p1").show(0);
    }, 0);
		
		
    });	

$(".open.2").click(function(){
		
			
			//hide all others
        $(".p1, .p3, .p4, .p5, .p6, .p7, .p8, .p9").hide(0);
		
			//show selected after delay
		setTimeout(function () {
       $(".p2").show(0);
    }, 0);
		
		
    });	

$(".open.3").click(function(){
		
			
			//hide all others
        $(".p2, .p1, .p4, .p5, .p6, .p7, .p8, .p9").hide(0);
		
			//show selected after delay
		setTimeout(function () {
       $(".p3").show(0);
    }, 0);
		
		
    });	

$(".open.4").click(function(){
		
			
			//hide all others
        $(".p2, .p3, .p1, .p5, .p6, .p7, .p8, .p9").hide(0);
		
			//show selected after delay
		setTimeout(function () {
       $(".p4").show(0);
    }, 0);
		
		
    });	

$(".open.5").click(function(){
		
			
			//hide all others
        $(".p2, .p3, .p4, .p1, .p6, .p7, .p8, .p9").hide(0);
		
			//show selected after delay
		setTimeout(function () {
       $(".p5").show(0);
    }, 0);
		
		
    });	

$(".open.6").click(function(){
		
			
			//hide all others
        $(".p2, .p3, .p4, .p5, .p1, .p7, .p8, .p9").hide(0);
		
			//show selected after delay
		setTimeout(function () {
       $(".p6").show(0);
    }, 0);
		
		
    });	

$(".open.7").click(function(){
		
			
			//hide all others
        $(".p2, .p3, .p4, .p5, .p6, .p1, .p8, .p9").hide(0);
		
			//show selected after delay
		setTimeout(function () {
       $(".p7").show(0);
    }, 0);
		
		
    });	

$(".open.8").click(function(){
		
			
			//hide all others
        $(".p2, .p3, .p4, .p5, .p6, .p7, .p1, .p9").hide(0);
		
			//show selected after delay
		setTimeout(function () {
       $(".p8").show(0);
    }, 0);
		
		
    });	

$(".open.9").click(function(){
		
			
			//hide all others
        $(".p2, .p3, .p4, .p5, .p6, .p7, .p8, .p1").hide(0);
		
			//show selected after delay
		setTimeout(function () {
       $(".p9").show(0);
    }, 0);
		
		
    });	
	