<<<<<<< HEAD
// Landing Section Display Handler
=======
// Lading Section Display Handler
>>>>>>> 038cd43764a3b670070cc304a08d0eea2c3dbd6c
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


<<<<<<< HEAD
// Content Initialization
$(document).ready(function(){

    // Unset unnecessary item in local storages
    localStorage.removeItem("selected-movie-id");
    localStorage.removeItem("selected-movie-cinema");
    localStorage.removeItem("selected-seats");
    localStorage.removeItem("selected-movie-showdate");


    populateMovieCards();

    // Events Assignment
    $(".showing-details-modal-btn").click(function() {
        modalClickEventHandler("#gen-modal-showing", $(this).attr("card-movie-id"));
    });
    $(".comingsoon-details-modal-btn").click(function(){
        modalClickEventHandler("#gen-modal-comingsoon", $(this).attr("card-movie-id"));
    });
    $(".reserve-btn").click(function() {
        reserveBtnClickEventHandler($(this).attr("card-movie-id"))
    })
    $(".reserve-modal-btn").click(function() {
        reserveBtnClickEventHandler($(this).attr("card-movie-id"))
    })
    
=======


// Content Initialization
$(document).ready(function(){
    populateMovieCards();
>>>>>>> 038cd43764a3b670070cc304a08d0eea2c3dbd6c
}); 
// Content Initialization



<<<<<<< HEAD
function modalClickEventHandler(showingModalID, selectedMovieID){
=======

// Events Assignment
$(".showing-details-modal-btn").click(function(){

    var selectedMovieID = $(this).attr("card-movie-id");
>>>>>>> 038cd43764a3b670070cc304a08d0eea2c3dbd6c

    var movie = movies.find(function(m) {
        if(m.id == selectedMovieID) {
            return m;
        }
    });

<<<<<<< HEAD
    $(`${showingModalID} .modal-selected-movie-img`).attr("src", movie.imgUrl);
    $(`${showingModalID} .modal-selected-movie-title`).html(movie.title);
    $(`${showingModalID} .modal-selected-movie-genre`).html(movie.genre);
    $(`${showingModalID} .modal-selected-movie-synopsis`).html(movie.synopsis);
    $(`${showingModalID} .modal-selected-movie-duration`).html(movie.duration);
    $(`${showingModalID} .reserve-modal-btn`).attr("card-movie-id", movie.id);

    var showdateIndex;
    movie.show.forEach(function(show, s_index){
        if(show.date === getDateToday()) {
            showdateIndex = s_index;
        }
    });
    
    showdateIndex = typeof showdateIndex == 'undefined'? 0:showdateIndex;
    $(`${showingModalID} .modal-selected-movie-showdate`).html(movie.show[showdateIndex].date);
    $(`${showingModalID} .modal-selected-movie-cinemanum`).html(movie.show[showdateIndex].cinema);

    $(`${showingModalID} .modal-selected-movie-price`).html(movie.ticketPrice);

    // Rating
    var ratingStarCntr = $(`${showingModalID} .rating`);
    $(`${showingModalID} .rating>svg`).remove();
=======
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
>>>>>>> 038cd43764a3b670070cc304a08d0eea2c3dbd6c
    for(var i=0; i<5; i++) {
        if(i<movie.rating) {
            $(ratingStarCntr).append('<span class="fa fa-star checked"></span>');
        } else {
            $(ratingStarCntr).append('<span class="fa fa-star"></span>');
        }
    }
    $(showingModalID + " .modal-selected-movie-content-rating").attr("src", "assets/icons/ic-rating-"+movie.contentRating+".png");
<<<<<<< HEAD
}
=======


});
// Events Assignment


>>>>>>> 038cd43764a3b670070cc304a08d0eea2c3dbd6c



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

<<<<<<< HEAD
    // Populate Now Showing
=======
>>>>>>> 038cd43764a3b670070cc304a08d0eea2c3dbd6c
    setShowingMovieCard(showing[0], 1);
    setShowingMovieCard(showing[1], 2);
    setShowingMovieCard(showing[2], 3);
    setShowingMovieCard(showing[3], 4);

<<<<<<< HEAD
    // Populate Coming Soon
    comingsoon.forEach(function(c_movie, cm_index) {
        genComingSoonCard(c_movie)
    })

    // Show Data After Fetch
    $("#content-nowshowing").show();
    $("#content-comingsoon").show();

    // Removes Content Filler
    $("#content-section").css("height", "auto");
}



function setShowingMovieCard(movie, cinemaNum) {

    var cardID = `#cinema${cinemaNum}-card`; 
    
    // Seat Cinema Card Details
    $(`${cardID} .showing-movie-id`).val(movie.id);
    $(`${cardID} .showing-details-modal-btn`).attr("card-movie-id", movie.id);
    $(`${cardID} .reserve-btn`).attr("card-movie-id", movie.id);
    $(`${cardID} .showing-content-rating`).attr("src", `assets/icons/ic-rating-${movie.contentRating}.png`);
    $(`${cardID} .showing-movie-banner`).attr("src", movie.imgUrl);
    $(`${cardID} .showing-title`).html(movie.title);
}



function genComingSoonCard(movie) {

    $("#content-comingsoon .coming-soon-card-cntr").append(
        `<div class="col-12 col-md-6 col-lg-3 justify-content-center d-flex mb-4">
            <div class="card-wrapper">
                <input class="comingsoon-movie-id" type="hidden" value="${movie.id}">
                <span class="bottom-btn-padding"></span>
                <div class="top-right">
                    <img class="comingsoon-content-rating" src="assets/icons/ic-rating-${movie.contentRating}.png" height="20px" alt="content-rating">
                </div>
                <div class="lower-right">
                    <i class="fas fa-info-circle"></i> MORE DETAILS
                </div>
                <img src="${movie.imgUrl}" alt="Movie Banner" class="image showing-movie-banner">
                <div class="hover-overlay">
                        <div class="upper-left ">Cinema ${movie.show[0].cinema}</div>
                    <div class="title comingsoon-title">${movie.title}</div>
                    <div class="comingsoon-date">${movie.show[0].date}</div>
                    <div class="lower-left">
                        <a href="movie-selected.html" class="reserve-btn" card-movie-id="${movie.id}">
                            <i class="fas fa-ticket-alt"></i> RESERVE
                        </a>
                    </div>
                    <div class="lower-right">
                        <a id="modal-btn-comingsoon" class="comingsoon-details-modal-btn" card-movie-id="${movie.id}" style="color: #DD003F" href="#" role="button" data-toggle="modal" data-target="#gen-modal-comingsoon">
                            <i class="fas fa-info-circle"></i> MORE DETAILS
                        </a>
                    </div>
                </div>
            </div>
        </div>`
    );
}



function reserveBtnClickEventHandler(movieID) {
    localStorage.setItem("selected-movie-id",movieID);
}
=======
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


>>>>>>> 038cd43764a3b670070cc304a08d0eea2c3dbd6c
