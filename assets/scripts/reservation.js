$(document).ready(function(){

    // Unset unnecessary item in local storages
    localStorage.removeItem("selected-movie-id");
    localStorage.removeItem("selected-movie-cinema");
    localStorage.removeItem("selected-seats");
    localStorage.removeItem("selected-movie-showdate");

    // Populate Coming Soon
    movies.forEach(function(c_movie, cm_index) {
        genMovieCard(c_movie);
    })


    // Add Events
    addCardEvents();
    $("#movie-search-btn").click(function() {
        $("#movie-search-input").val("");
        searchMovie("");
    });

    $("#movie-search-input").on('input',function(e){
        searchMovie($(this).val());
    });
}); 


function addCardEvents() {
    $(".modal-btn-reserve").click(function(){
        modalClickEventHandler("#gen-modal-reserve", $(this).attr("card-movie-id"));
    });

    $(".reserve-btn").click(function() {
        reserveBtnClickEventHandler($(this).attr("card-movie-id"))
    })

    $(".reserve-modal-btn").click(function() {
        reserveBtnClickEventHandler($(this).attr("card-movie-id"))
    })
}


function genMovieCard(movie) {

    $("#content-section-b .card-cntr").append(
        `<div class="movie-card-cntr col-12 col-md-6 col-lg-3 justify-content-center d-flex mb-4">
            <div class="card-wrapper">
                <span class="bottom-btn-padding"></span>
                <div class="top-right">
                    <img src="assets/icons/ic-rating-${movie.contentRating}.png" height="20px" alt="content-rating">
                </div>
                <div class="lower-right">
                    <i class="fas fa-info-circle"></i> MORE DETAILS
                </div>
                <img src="${movie.imgUrl}" alt="Movie Cover Image" class="image">
                <div class="hover-overlay">
                        
                    <div class="title">${movie.title}</div>
                    <div class="comingsoon-date">${movie.show[0].date}</div>
                    <div class="lower-left">
                        <a href="movie-selected.html" class="reserve-btn" card-movie-id="${movie.id}">
                            <i class="fas fa-film"></i> SELECT
                        </a>
                    </div>
                    <div class="lower-right">
                        <a class="modal-btn-reserve" card-movie-id="${movie.id}" style="color: #DD003F" href="#" role="button" data-toggle="modal" data-target="#gen-modal-reserve">
                            <i class="fas fa-info-circle"></i> MORE DETAILS
                        </a>
                    </div>
                </div>
            </div>
        </div>`
    );
}

function modalClickEventHandler(showingModalID, selectedMovieID){

    var movie = movies.find(function(m) {
        if(m.id == selectedMovieID) {
            return m;
        }
    });

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
    for(var i=0; i<5; i++) {
        if(i<movie.rating) {
            $(ratingStarCntr).append('<span class="fa fa-star checked"></span>');
        } else {
            $(ratingStarCntr).append('<span class="fa fa-star"></span>');
        }
    }
    $(showingModalID + " .modal-selected-movie-content-rating").attr("src", "assets/icons/ic-rating-"+movie.contentRating+".png");
}


function reserveBtnClickEventHandler(movieID) {
    localStorage.setItem("selected-movie-id",movieID);
}

function searchMovie(searchValue) {
    $(".card-cntr .movie-card-cntr").remove();

    if(searchValue !== "") {

        var searchResult = Array();
        movies.forEach(function(movie, index) {
            if(movie.title.toLowerCase().includes(searchValue.toLowerCase())){
                searchResult.push(movie);
            }
        });
    
        // Generate Search Result
        searchResult.forEach(function(s_movie, sm_index) {
            genMovieCard(s_movie);
        })
    } else {
        movies.forEach(function(c_movie, cm_index) {
            genMovieCard(c_movie);
        })
    }

    addCardEvents();
}