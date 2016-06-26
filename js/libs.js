$(document).ready(function(){

	$('#mainSection').fullpage({
		navigation: true,
		menu:'#responsive-menu',
		anchors:['firstSection','secondSection','3rdSection','4rdSection','5rdSection'],
		afterLoad:function(link, index) { 

			if(link == "secondSection"){
					//вторая секция, левый блок теста.
					$('#section2 p,.textSection2 h3').show(function(){
						$(this).css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0})
					});
					$('#section2 p,.textSection2 h3').addClass('fadeInLeft');

					//
					$('.weCanSection2 h3,.weCanSection2 ul').show(function(){
						$(this).css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0})
					});
					$('.weCanSection2 h3,.weCanSection2 ul').addClass('fadeInRight');
					
					
			} 
			 
			if(link == "3rdSection") {


			} 
		}

	});

	
});