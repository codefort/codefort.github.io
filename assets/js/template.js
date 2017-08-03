jQuery(document).ready(function($) {
	$('#illustration').hover( function(){
		$(this).addClass('expand');
	}, function(){
		$(this).removeClass('expand');
	} );
    
    $('a[href^="#"]').click(function(){
    //Сохраняем значение атрибута href в переменной:
    var target = $(this).attr('href');
    $('html, body').animate({scrollTop: $(target).offset().top}, 800);
    return false;
    });
    
    var offset = 500,
        offset_menu = 600,
        offset_opacity = 500,
        scroll_top_duration = 900,
        $back_to_top = $('#top');

    //hide or show the "back to top" link
    $(window).scroll(function () {
        ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('visible') : $back_to_top.removeClass('visible fade-out');
        if ($(this).scrollTop() > offset_opacity) {
            $back_to_top.addClass('fade-out');
        }
    });
    //smooth scroll to top
    $back_to_top.on('click', function (event) {
        event.preventDefault();
        $('body,html').animate({
                scrollTop: 0,
            }, scroll_top_duration
        );
    });
    
    
    
});