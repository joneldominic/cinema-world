$(document).ready(function(){
<<<<<<< HEAD

    // Unset unnecessary item in local storages
    localStorage.removeItem("selected-movie-cinema");
    localStorage.removeItem("selected-movie-showdate");

    validateSelectedMovie(function(movieID) {

        var movie = movies.find(function(m) {
            if(m.id == movieID) {
                return m;
            }
        });

        if(typeof movie != 'undefined') {
            genMovieContent(movie)
        } else {
            $(location).attr('href',"reservation.html");
        }
    });


    // Events
    $("#btn-proceed").click(function(){
        btnProceedEventHandler();
        
    });

}); 


// Checks if selected movie id is present
function validateSelectedMovie(validCallback) {
    if(localStorage.getItem("selected-movie-id") !== null) {
        validCallback(localStorage.getItem("selected-movie-id"));
    } else {
        $(location).attr('href',"reservation.html");
    }
}


function genMovieContent(movie) {

    $("#movie-detail-container .movie-title").html(movie.title);
    $("#movie-detail-container .content-rating").attr("src", `assets/icons/ic-rating-${movie.contentRating}.png`);
    $("#movie-detail-container .movie-image-banner").attr("src", movie.imgUrl);
    $("#movie-detail-container .movie-genre").html(movie.genre);
    $("#movie-detail-container .movie-synopsis").html(movie.synopsis);
    $("#movie-detail-container .movie-duration").html(movie.duration);
    $("#movie-detail-container .ticket-price").html(movie.ticketPrice);
    
    // Rating
    var ratingStarCntr = $("#movie-detail-container .rating");
    $("#movie-detail-container .rating>svg").remove();
    for(var i=0; i<5; i++) {
        if(i<movie.rating) {
            $(ratingStarCntr).append('<span class="fa fa-star checked"></span>');
        } else {
            $(ratingStarCntr).append('<span class="fa fa-star"></span>');
        }
    }

    var showDates = movie.show
    showDates.forEach(function(show, s_index){
        $("#input-schedule-dropdown").append(
            `<option value="${show.cinema}-${show.date}">Cinema ${show.cinema} - ${show.date}</option>`
        )
    });

}


function btnProceedEventHandler() {
    if($("#input-schedule-dropdown").val()!=0) {

        var schedule = $("#input-schedule-dropdown").val().split("-")
        
        localStorage.setItem("selected-movie-cinema",schedule[0]);
        localStorage.setItem("selected-movie-showdate",schedule[1]);

        $(location).attr('href',"seatplan.html");
    } else {
        $(".no-schedule-alert").css({
            display: "block"
        });
    }
}
=======
    $("#schedule-date-picker").val(getDateToday());
    $('#schedule-date-cntr').datepicker({
        format: 'mm/dd/yyyy', 
        autoclose: true, 
        startDate: '10/2/2019', 
        endDate: '10/22/2019'
    });
    
    // $('#schedule-date-cntr').datepicker().startDate('10/2/2019');
    // $('#schedule-date-cntr').datepicker().datesDisable('104/2019');


}); 
>>>>>>> 038cd43764a3b670070cc304a08d0eea2c3dbd6c
