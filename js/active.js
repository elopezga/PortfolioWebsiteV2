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

    let mobileMediaQuery = window.matchMedia('(max-width:479px)');
    mobileMediaQuery.addListener(function(changed){
        if( changed.matches ){
            console.log('Set mobile layout');
        }
    });
    if( mobileMediaQuery.matches ){
        console.log('Set mobile layout');
    }

    let tabletMediaQuery = window.matchMedia('(min-width:480px) and (max-width:959px)');
    tabletMediaQuery.addListener(function(changed){
        if( changed.matches ){
            console.log('Set tablet layout');
            buildTabletLayout();
        }
    });
    if( tabletMediaQuery.matches ){
        console.log('Set tablet layout');
        //$('.nav-main').html(navMainTablet());
        buildTabletLayout();

    }

    let desktopMediaQuery = window.matchMedia('(min-width:960px)');
    if( desktopMediaQuery.matches ){
        console.log('Set desktop layout');
    }

    function buildTabletLayout(){
        buildGridLayout();
        buildGridMenu();
        buildGridContent();

        $('.menu .item').tab({
            /* For dynamic page loading
            apiSettings: {
                url: '{tab}.html'
            },
            history: false*/
        });
    }

    function buildGridLayout(){
        let html = `<div class='ui grid'>
            <div class='four wide column stretched uk-height-viewport'>
            </div>
            <div class='twelve wide column'>
            </div>
        </div>`;

        $('body').html(html);
    }

    function buildGridMenu(){
        let html = `<div class="ui vertical fluid menu">
        <div class="uk-margin-small-left uk-margin-small-right uk-margin-small-top
        uk-margin-large-bottom">
            <img class="ui medium centered circular image uk-margin-small-bottom" src="images/me/dog.jpeg">
            <h4 class="uk-text-center uk-margin-remove">Edgar Lopez-Garcia</h4>
            <h6 class="uk-text-center uk-margin-remove">Web Developer</h6>
            <h6 class="uk-text-center uk-margin-remove">Game Developer</h6>
            <h6 class="uk-text-center uk-margin-remove">Software Engineer</h6>
        </div>
            <a class="item active" data-tab='home'>Home</a>
            <a class="item" data-tab='skillset'>Skill Set</a>
            <a class="item" data-tab='webdevex'>Web Development</a>
            <a class="item" data-tab='gamedevex'>Game Development</a>
            <a class="item" data-tab='softex'>Software Engineering</a>
        </div>`;
        $('.four.wide.column').html(html);
    }

    function buildGridContent(){
        let html = `<div class="ui tab active" data-tab='home'>Home content</div>
        <div class="ui tab" data-tab='skillset'>Skill Set content</div>
        <div class="ui tab" data-tab='webdevex'>Web Development content</div>
        <div class="ui tab" data-tab='gamedevex'>Game Development content</div>
        <div class="ui tab" data-tab='softex'>Software Engineering content</div>`;
        $('.twelve.wide.column').html(html);
    }

    function navMainTablet(){
        return `<div class="ui vertical fluid tabular menu">
            <!--
            <img class="ui small centered circular image" src="images/me/dog.jpeg"/>
            <h3>Edgar Lopez-Garcia</h3>
            <h5>Web Developer</h5> -->
            <div class="uk-margin-small-left uk-margin-small-right uk-margin-small-top
            uk-margin-large-bottom">
                <img class="ui medium centered circular image uk-margin-small-bottom" src="images/me/dog.jpeg">
                <h4 class="uk-text-center uk-margin-remove">Edgar Lopez-Garcia</h4>
                <h6 class="uk-text-center uk-margin-remove">Web Developer</h6>
                <h6 class="uk-text-center uk-margin-remove">Game Developer</h6>
                <h6 class="uk-text-center uk-margin-remove">Software Engineer</h6>

            </div>
            <a class="item active" data-tab='home'>Home</a>
            <a class="item" data-tab='skillset'>Skill Set</a>
            <a class="item" data-tab='webdevex'>Web Development</a>
            <a class="item" data-tab='gamedevex'>Game Development</a>
            <a class="item" data-tab='softex'>Software Engineering</a>
        </div>`;
    }
})
