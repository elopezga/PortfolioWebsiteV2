$(document).ready(() => {
    // Activate tab functionality
    $('.menu .item').tab({
        /* For dynamic page loading
        apiSettings: {
            url: '{tab}.html'
        },
        history: false*/
    });

    // Switch menu active class on click
    $('.sidebar a').click((e) => {
        $('.menu a.active').removeClass('active');
        $(e.target).addClass('active');
    });

    // Sidebar show functionality
    /*
    $('.ui.sidebar').sidebar({
        context: $('.bottom.segment'),
    }).sidebar('attach events', '.menu .item');
    */
    /*
    $('.ui.sidebar').sidebar('setting', 'transition', 'overlay')
        .sidebar('toggle');
    */

    $('.ui.dropdown').dropdown();
    //$('.accordion').accordion();

    // Screen size queries
    /*
    enquire.register("screen and (max-width:479px)", {
        match: function(){
            //$('.menu').addClass('uk-hidden');
            console.log("Set mobile phone layout");
            // Set mobile phone layout
        },
        unmatch: function(){
            //$('.menu').removeClass('uk-hidden');
            console.log('Set tablet layout');
            // Set tablet layout
        }
    });

    enquire.register("screen and (min-width:960px)", {
        match: function(){
            console.log("Set desktop layout");
        },
        unmatch: function(){
            console.log("Set tablet layout");
        }
    });*/
});
