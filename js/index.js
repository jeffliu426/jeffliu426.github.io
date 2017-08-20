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
            aboutMe.innerHTML = "Now that I've got your attention...";
            index++;
            break;
        case 2: 
            aboutMe.innerHTML = "If you're a recruiter...";
            index++;
            break;
        case 3: 
            aboutMe.innerHTML = "Reach out to me!";
            index++;
            break;
        case 4: 
            aboutMe.innerHTML = "I'd love to hear about your company!";
            index++;
            break;
        case 5: 
            aboutMe.innerHTML = "I'm always open to exploring new opportunities'";
            index++;
            break;
        case 6: 
            aboutMe.innerHTML = "If you're a friend...";
            index++;
            break;
        case 7: 
            aboutMe.innerHTML = "Thanks for being my friend.";
            index++;
            break;
        case 8: 
            aboutMe.innerHTML = "I wouldn't be where I'm at today without the support of my friends and family.";
            index++;
            break;
        case 9: 
            aboutMe.innerHTML = "You inspire me to be a better person every single day.";
            index++;
            break;
        case 10: 
            aboutMe.innerHTML = ":)";
            index++;
            break;
        default:
            aboutMe.innerHTML = "Click me!";
            index = 0;
            break;
    }

    // if (index == 0) {
    //     aboutMe.innerHTML = 'Coder';
    //     index += 1;
    // }
    // else if (index == 1) {
    //     aboutMe.innerHTML = 'Hacker';
    //     index += 1;
    // }
    // else {
    //     aboutMe.innerHTML = "Student";
    //     index = 0;
    // }

}

aboutMe.onclick = function() {
    changeText();
}


