// $(document).ready(function(){ $("h1").addClass("animated bounce"); });
$(document).ready(function(){ 
	$("button").click(
		function() {
			var navbarButton = $("#navbar-collapse-1");
			if (navbarButton.attr("aria-expanded") == "true") {
				navbarButton.removeClass("in");
				navbarButton.attr("aria-expanded", "false");
				
			}
			else {
				navbarButton.addClass("in");
				navbarButton.attr("aria-expanded", "true");
			}
		}
	);
	$('a.btn').hover(
		function(){
        	$(this).css("background-color", "#EEE");
        }, 
        function(){
        $(this).css("background-color", "#DDD");
    	}
    );
	$('.navbar-brand').hover(
		function(){
        	$(this).css("background-color", "#EEE");
        }, 
        function(){
        $(this).css("background-color", "#DDD");
    	}
    );
	$('a[href$="#home"]').hover(
		function(){
            
        	$(this).css("background-color", "#EEE");
        }, 
        function(){
        $(this).css("background-color", "#DDD");
    	}
    );
    $('a[href$="#about"]').hover(
		function(){
        	$(this).css("background-color", "#EEE");
        }, 
        function(){
        $(this).css("background-color", "#DDD");
    	}
    );
    $('a[href$="#portfolio"]').hover(
		function(){
        	$(this).css("background-color", "#EEE");
        }, 
        function(){
        $(this).css("background-color", "#DDD");
    	}
    );
    $('a[href$="#contact"]').hover(
		function(){
        	$(this).css("background-color", "#EEE");
        }, 
        function(){
        $(this).css("background-color", "#DDD");
    	}
    );

});

var aboutMe = document.querySelector('.about-me');
var index = 0;

function changeText() {
    switch(index) {
        case 0:
            aboutMe.innerHTML = 'Welcome!';
            index++;
            break;
        case 1: 
            aboutMe.innerHTML = "Thanks for visiting!";
            index++;
            break;
        default:
            aboutMe.innerHTML = "Hello!"
    }

}

aboutMe.onclick = function() {
    changeText();
}

var current = $(window).scrollTop();
var total = $(window).height() - current;
var ele = $(".train");
var currPosition = ele.position().left + 480;
var trackLength = 400;

$(window).scroll(function (event) {
    current = $(window).scrollTop();
    console.log({total:total,current:current});
    console.log(current/total * 100);
    var newPosition = trackLength * (current/total)
    ele.css({left:currPosition+newPosition+'px'});
});

// $(function () {
//     $(window).scroll(function () {
//         var currentScrollTop = $(window).scrollTop();
//         $('#blackOverlay').css('opacity',currentScrollTop/$('#blackOverlay').height());

//     });
// });
