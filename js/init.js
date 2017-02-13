/*
$(document).ready(function(){
    $('.menu .item').tab({history:false});
});
*/

$(document).ready(function(){
    $('.menu .item').tab({
        context: 'parent',
        auto: true,
        path: '/'
    });
});