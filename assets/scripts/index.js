$(window).resize(function() {
    if ($(window).width() < 992) {
        $("#landing-section  .carousel img").each(function() {
            if(!$(this).attr("src").includes("-2")) {
                $(this).attr(
                    "src",
                    $(this).attr("src").replace(".","-2.")
                );
            }
        });

        $("#landing-section .landing-content .carousel-inner .carousel-movie-detail").hide();
    } else {
        $("#landing-section  .carousel img").each(function() {
            if($(this).attr("src").includes("-2")) {
                $(this).attr(
                    "src",
                    $(this).attr("src").replace("-2.",".")
                );
            }
        });

        $("#landing-section .landing-content .carousel-inner .carousel-movie-detail").show();
    }
});