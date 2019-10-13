// Lading Section Display Handler
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




// Content Initialization
$(document).ready(function(){
    populateMovieCards();
}); 
// Content Initialization




// Events Assignment
$(".showing-details-modal-btn").click(function(){

    var selectedMovieID = $(this).attr("card-movie-id");

    var movie = movies.find(function(m) {
        if(m.id == selectedMovieID) {
            return m;
        }
    });

    console.log(movie);

    // Populating Modal
    var showingModalID = "#gen-modal-showing";
    $(showingModalID + " .modal-selected-movie-img").attr("src", movie.imgUrl);
    $(showingModalID + " .modal-selected-movie-title").html(movie.title);
    $(showingModalID + " .modal-selected-movie-genre").html(movie.genre);
    $(showingModalID + " .modal-selected-movie-synopsis").html(movie.synopsis);
    // Duration
    // Show Date
    // Cinema Number
    // Ticket Price
    // Rating
    var ratingStarCntr = $("#gen-modal-showing .rating");
    $("#gen-modal-showing .rating>svg").remove();
    for(var i=0; i<5; i++) {
        if(i<movie.rating) {
            $(ratingStarCntr).append('<span class="fa fa-star checked"></span>');
        } else {
            $(ratingStarCntr).append('<span class="fa fa-star"></span>');
        }
    }
    $(showingModalID + " .modal-selected-movie-content-rating").attr("src", "assets/icons/ic-rating-"+movie.contentRating+".png");


});
// Events Assignment





function populateMovieCards() {
    var showing = Array(4);
    var comingsoon = Array();

    var isShowing = false;
    movies.forEach(function(movie, m_index) {
        isShowing = false;
        movie.show.forEach(function(show, s_index){
            if(show.date === getDateToday()) {
                switch(show.cinema) {
                    case 1:
                        if(typeof showing[0] === 'undefined') {
                            showing[0] = movie;
                        } 
                        break;
                    case 2:
                        if(typeof showing[1] === 'undefined') {
                            showing[1] = movie;
                        } 
                        break;
                    case 3:
                        if(typeof showing[2] === 'undefined') {
                            showing[2] = movie;
                        } 
                        break;
                    case 4:
                        if(typeof showing[3] === 'undefined') {
                            showing[3] = movie;
                        } 
                        break;
                    default: //...
                }
                
                isShowing = true;
            }
        })

        if(!isShowing) {
            comingsoon.push(movie);
        }
    })

    setShowingMovieCard(showing[0], 1);
    setShowingMovieCard(showing[1], 2);
    setShowingMovieCard(showing[2], 3);
    setShowingMovieCard(showing[3], 4);

    // Show Data After Fetch
    $("#content-nowshowing").show();
    // Removes Content Filler
    $("#content-section").css("height", "auto");



    // Temp
    $("#content-comingsoon").show();
    // Try implementing coming soon in another method
    console.log(comingsoon);

}


function setShowingMovieCard(movie, cinemaNum) {

    var cardID = "#cinema"+cinemaNum+"-card"; 
    
    // Seat Cinema Card Details
    $(cardID + " .showing-movie-id").val(movie.id);
    $(cardID + " .showing-details-modal-btn").attr("card-movie-id", movie.id);
    $(cardID + " .showing-content-rating").attr("src", "assets/icons/ic-rating-"+movie.contentRating+".png");
    $(cardID + " .showing-movie-banner").attr("src", movie.imgUrl);
    $(cardID + " .showing-title").html(movie.title);
}


