$(document).ready(function(){
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

// Current Date Getter
function getDateToday() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    return today;
}



