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
	$('button').hover(
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
    }

}

aboutMe.onclick = function() {
    changeText();
}


