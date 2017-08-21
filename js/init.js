$(document).ready(function () {
    $('.button-collapse').sideNav({
        menuWidth: 300, // Default is 300
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true // Choose whether you can drag to open on touch screens
    }
        );
    // Initialize collapsible (uncomment the line below if you use the dropdown variation)
    //$('.collapsible').collapsible();
    
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();
    $('.carousel').carousel();
    $('#pg').jphotogrid({
	    baseCSS: {
		    width: '175px',
	        height: '117px',
		    padding: '0px'
	    },
	    selectedCSS: {
		    top: '50px',
		    left: '100px',
		    width: '500px',
		    height: '360px',
		    padding: '10px'
	    }
    });

}); // end document ready


//Função scroll-para-o-topo


$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('a[href="#top"]').fadeIn();
    } else {
        $('a[href="#top"]').fadeOut();
    }

    $('a[href="#top"]').click(function () {
        $('body').animate({scrollTop : 0}, 800);
        load.new_window;
        
    });

});




//função do slider 

$(window).load(function () {

    // Slideshow 1
    $("#slider1").responsiveSlides({
        maxwidth: 800,
        speed: 800
    });

    // Slideshow 2
    $("#slider2").responsiveSlides({
        auto: false,
        pager: true,
        speed: 300,
        maxwidth: 540
    });

    // Slideshow 3
    $("#slider3").responsiveSlides({
        manualControls: '#slider3-pager',
        maxwidth: 540
    });

    // Slideshow 4
    $("#slider4").responsiveSlides({
        auto: true,
        pager: true,
        nav: true,
        speed: 500,
        namespace: "callbacks",
        before: function () {
            $('.events').append("<li>before event fired.</li>");
        },
        after: function () {
            $('.events').append("<li>after event fired.</li>");
        }
    });

});
