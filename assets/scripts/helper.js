$(document).ready(function(){
    $(function () {
        $(document).scroll(function () {
            var $mainNav = $(".main-nav");
            $mainNav.toggleClass('fixed-top', $(this).scrollTop() > $mainNav.height())

            if($(this).scrollTop() > $mainNav.height()) {
                $("#nav-section .navbar-brand img").attr("style", "height:40px;")
            } else {
                $("#nav-section .navbar-brand img").attr("style", "height:60px;")
            }
        });
    });
}); 