$(document).ready(function(){
    let vid =  $('.content video');

    $(vid).click(function(event){
        var clicked = (event.target.dataset.target);
        console.log(clicked);
        if($(this).attr('autoplay')){
            $(this).removeAttr('autoplay');
            $(this)[0].pause();
            $(clicked).addClass('show');
            $(clicked).removeClass('hide');
            
           

        }
        else{
            $(this).attr('autoplay', true);
            $(this)[0].play();
            $(clicked).addClass('hide');
        }
    });


});