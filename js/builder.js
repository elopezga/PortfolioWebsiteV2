$(document).ready(function(){
    let mobileMediaQuery = window.matchMedia('(max-width:479px)');
    mobileMediaQuery.addListener(function(changed){
        if( changed.matches ){
            console.log('Set mobile layout');
            mobileLayout.build();
        }
    });


    let tabletMediaQuery = window.matchMedia('(min-width:480px) and (max-width:959px)');
    tabletMediaQuery.addListener(function(changed){
        if( changed.matches ){
            console.log('Set tablet layout');
            //buildTabletLayout();
            tabletLayout.build();
        }
    });


    let desktopMediaQuery = window.matchMedia('(min-width:960px)');



    var mobileLayout = {
        build: function(){
            this.buildLayout();
            this.buildNavBar();
            this.buildContent();
            //this.runJS();
        },

        buildLayout: function(){
            let html = `<div class="ui top attached menu"></div>
            <div class="ui bottom attached content"></div>`;
            $('body').html(html);
        },

        buildNavBar: function(){
            let html = `<div class="ui dropdown icon item">
                <i class="sidebar icon"></i>

                <div class="menu uk-height-viewport">
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
                </div>
            </div>`;
            $('.menu').html(html);

            $('.ui.dropdown').dropdown();

            //console.log($('.ui.dropdown').dropdown());
        },

        buildContent: function(){
            let html = `<div class="ui tab active" data-tab='home'>Home content</div>
            <div class="ui tab" data-tab='skillset'>Skill Set content</div>
            <div class="ui tab" data-tab='webdevex'>Web Development content</div>
            <div class="ui tab" data-tab='gamedevex'>Game Development content</div>
            <div class="ui tab" data-tab='softex'>Software Engineering content</div>`;
            $('.ui.bottom.attached.content').html(html);

            $('.menu .item').tab();
        },

        runJS: function(){
            $('.menu .item').tab({
                /* For dynamic page loading
                apiSettings: {
                    url: '{tab}.html'
                },
                history: false*/
            });

            $('.sidebar a').click((e) => {
                $('.menu a.active').removeClass('active');
                $(e.target).addClass('active');
            });

            $('.dropdown').dropdown();
        }
    };


    var tabletLayout = {
        build: function(){
            this.buildLayout();
            this.buildSideMenu();
            this.buildContent();
        },

        buildLayout: function(){
            let html = `<div class='ui grid'>
                <div class='four wide column stretched uk-height-viewport'>
                </div>
                <div class='twelve wide column'>
                </div>
            </div>`;

            $('body').html(html);
        },

        buildSideMenu: function(){
            let html = `<div class="ui vertical fluid tabular menu">
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


        },

        buildContent: function(){
            let html = `<div class="ui tab active" data-tab='home'>Home content</div>
            <div class="ui tab" data-tab='skillset'>Skill Set content</div>
            <div class="ui tab" data-tab='webdevex'>Web Development content</div>
            <div class="ui tab" data-tab='gamedevex'>Game Development content</div>
            <div class="ui tab" data-tab='softex'>Software Engineering content</div>`;
            $('.twelve.wide.column').html(html);

            $('.menu .item').tab();
        }
    };

    if( mobileMediaQuery.matches ){
        // For initial window load
        console.log('Set mobile layout');
        mobileLayout.build();
    }

    if( tabletMediaQuery.matches ){
        console.log('Set tablet layout');
        //$('.nav-main').html(navMainTablet());
        //buildTabletLayout();
        tabletLayout.build();
    }

    if( desktopMediaQuery.matches ){
        console.log('Set desktop layout');
    }
});


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
