var path = "/views/resume.html";

$(document).ready(function(){
    $(".prime").load(path + " .prime p");
    $(".macalester").load(path + " .macalester p");
    $(".hola").load(path + " .hola p");
    $(".teach").load(path + " .teach p");
    $(".research").load(path + " .research p");
    $(".if").load(path + " .if p");

    $('.span1').click(function(){
        $('.cat').parent().addClass('hidden');
        $('.school').removeClass('hidden');
    });

    $('.span2').click(function(){
        $('.cat').parent().addClass('hidden');
        $('.work').removeClass('hidden');
    });

    $('.span3').click(function(){
        $('.cat').parent().addClass('hidden');
        $('.other').removeClass('hidden');
    });


});


