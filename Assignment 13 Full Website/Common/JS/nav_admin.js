$(document).ready(function(){
    $('header>.bottom>.wrapper .menu_toggle_open').click(function(){
        $('.admin_nav .toggle_item').css("display", "flex");
        $('header>.bottom>.wrapper .menu_toggle_open').hide();
        $('header>.bottom>.wrapper .menu_toggle_close').show();
      });
    $('header>.bottom>.wrapper .menu_toggle_close').click(function(){
        $('.admin_nav .toggle_item').css("display", "none");
        $('header>.bottom>.wrapper .menu_toggle_open').show();
        $('header>.bottom>.wrapper .menu_toggle_close').hide();
      });
})