//Javascript, für die Slick-Nav mobile Navigation
$(document).ready(function(){
	
	
	$(function(){
			$('#menu').slicknav
			
				({	
					label: 'Menü',
					closeOnClick:'true',
					prependTo:'#mobile_navigation_anker',
					
					
					 	
				
				});
			
			$('.slicknav_menu').prepend('<a href=""><img class="logo" src="bilder/sonstiges/logo_sb.png" alt="Sägewerk Baier, Ihr Partner in Sachen Holz." /></a>');
			
		
	});


});







//Javascript für den Slick-Slider, der die große Slidshow auf index.html regelt
$(document).ready(function(){
  $('.indexslideshow').slick({
	  
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 4000,
	  
	  dots:true,
	  arrows: false,
	  
	  speed: 1500,
	  fade: true,
	  cssEase: 'linear',
	  
	 
		  
   
  });
});

//Javascript für Slideshow Bildergalerie

$(document).ready(function(){
	  $('.bildergalerie_wrapper').slick({
		  
		  infinite: true,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  autoplay: false,
		  
		  
		  
		  dots:false,
		  arrows: true,
		  
		  speed: 300,
		  fade: false,
		  cssEase: 'linear',
		  
		 
			  
	   
	  });
	});



//Javascript für Bildergalerie bei Referenzen


$(document).ready(function(){
	  $('.bildergalerie_ref_wrapper').slick({
		  
		  infinite: true,
		  slidesToShow: 2,
		  slidesToScroll: 2,
		  autoplay: false,
		  
		  responsive: [
		               
		               {
		                 breakpoint: 480,
		                 settings: {
		                   slidesToShow: 1,
		                   slidesToScroll: 1
		                 }
		               }
		               // You can unslick at a given breakpoint now by adding:
		               // settings: "unslick"
		               // instead of a settings object
		             ]
	  
	   
	  });
	});




//Anfang Funktionen, um bei Hoveraktionen Textboxen auf Indexseite heraussliden zu lassen

		//Box #1
		$(document).ready(function()
				
				{
				
				var sliderText = $('#fbox_a_slidertext_1');
				var myFbox = $('#fbox_a_1');
				
				sliderText.hide();
				
				myFbox.hover(function()
				
						{
					
					sliderText.slideToggle('slow');
					
					});
					
					});
		
		
		//Box #2
		$(document).ready(function()
				
				{
				
				var sliderText = $('#fbox_a_slidertext_2');
				var myFbox = $('#fbox_a_2');
				
				sliderText.hide();
				
				myFbox.hover(function()
				
						{
					
					sliderText.slideToggle('slow');
					
					});
					
					});
		
		
		//Box #3
		$(document).ready(function()
				
				{
				
				var sliderText = $('#fbox_a_slidertext_3');
				var myFbox = $('#fbox_a_3');
				
				sliderText.hide();
				
				myFbox.hover(function()
				
						{
					
					sliderText.slideToggle('slow');
					
					});
					
					});
		
		
		//Box #4
		$(document).ready(function()
				
				{
				
				var sliderText = $('#fbox_a_slidertext_4');
				var myFbox = $('#fbox_a_4');
				
				sliderText.hide();
				
				myFbox.hover(function()
				
						{
					
					sliderText.slideToggle('slow');
					
					});
					
					});
		
		
		//Box #5
		$(document).ready(function()
				
				{
				
				var sliderText = $('#fbox_a_slidertext_5');
				var myFbox = $('#fbox_a_5');
				
				sliderText.hide();
				
				myFbox.hover(function()
				
						{
					
					sliderText.slideToggle('slow');
					
					});
					
					});
		
		
		//Box #6
		$(document).ready(function()
				
				{
				
				var sliderText = $('#fbox_a_slidertext_6');
				var myFbox = $('#fbox_a_6');
				
				sliderText.hide();
				
				myFbox.hover(function()
				
						{
					
					sliderText.slideToggle('slow');
					
					});
					
					});
		
		
		
		//Box #7
		$(document).ready(function()
				
				{
				
				var sliderText = $('#fbox_a_slidertext_7');
				var myFbox = $('#fbox_a_7');
				
				sliderText.hide();
				
				myFbox.hover(function()
				
						{
					
					sliderText.slideToggle('slow');
					
					});
					
					});
		
		
		
		//Box#8
		$(document).ready(function()
				
				{
				
				var sliderText = $('#fbox_a_slidertext_8');
				var myFbox = $('#fbox_a_8');
				
				sliderText.hide();
				
				myFbox.hover(function()
				
						{
					
					sliderText.slideToggle('slow');
					
					});
					
					});
		
		//Box#9
		$(document).ready(function()
				
				{
				
				var sliderText = $('#fbox_a_slidertext_9');
				var myFbox = $('#fbox_a_9');
				
				sliderText.hide();
				
				myFbox.hover(function()
				
						{
					
					sliderText.slideToggle('slow');
					
					});
					
					});
	
		
		
		