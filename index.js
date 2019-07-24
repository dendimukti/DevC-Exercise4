
$(document).ready(function(){
    $('.tubuh').hide();
    $('#tubuh_home').show();

    $('#home').click(function(){
        $('.tubuh').hide();
        $('#tubuh_home').show();
        $('#d_breadcrumb').text('Beranda');
    });

    $('#register').click(function(){
        $('.tubuh').hide();
        $('#tubuh_register').show();
        $('#d_breadcrumb').text('Registrasi');
    });

    $('#about').click(function(){
        $('.tubuh').hide();
        $('#tubuh_aboutus').show();
        $('#d_breadcrumb').text('Tentang Kami');
    });

});