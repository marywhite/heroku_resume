var path = "/views/resume.html";

$(document).ready(function(){
    $(".prime").load(path + " .prime p");
    $(".macalester").load(path + " .macalester p");
    $(".hola").load(path + " .hola p");
    $(".teach").load(path + " .teach p");
    $(".research").load(path + " .research p");
    $(".if").load(path + " .if p");

    function click_cat (str1, str2) {
        $(str1).click(function(){
            $('.header').removeClass('only');
            $('.cat').parent().addClass('hidden');
            $(str2).removeClass('hidden');
        });
    }

    $('.name').click(function(){
        $('.cat').parent().addClass('hidden');
        $('.header').addClass('only');
    });

    click_cat('.span1', '.school');
    click_cat('.span2', '.work');
    click_cat('.span3', '.other');


    changeColor();
    setInterval(changeColor, 5000);

    $( window ).resize(function(){
        changeColor();
        console.log('hi');
    });


    function changeColor(){
        randomSlash('.hi');
        randomSlash('.footer');
    }

    function randomSlash(str){
        $(str).children().removeClass('select');
        var children = ($(str).children(':visible').length);
        var child = randomNumber(0, children-1);
        $(str + " div:visible").eq(child).addClass('select');

    }

    function randomNumber(min, max) {
            return Math.floor(Math.random() * (1 + max - min) + min);
    }

});


