$(document).ready(function(){
    $('#mobile_btn').on('click', function(){
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-bars fa-xmark');
    });

    ScrollReveal().reveal('#cta',{
        origin: 'left',
        durarion: 2000,
        distance: '20%'
    })

    ScrollReveal().reveal('.dish',{
        origin: 'left',
        durarion: 2000,
        distance: '20%'
    })

    ScrollReveal().reveal('.feedback',{
        origin: 'letf',
        durarion: 1000,
        distance: '20%'
    })

    ScrollReveal().reveal('#testimonials_chef',{
        origin: 'left',
        durarion: 1000,
        distance: '10%'
    })
});

