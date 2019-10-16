var selectedSeatCount = 0;
var selectedSeats = Array();

$(document).ready(function(){

    // Unset Seats
    localStorage.removeItem("selected-seats")

    disableReservedSeats();

    validateSelectedMovie(function(movieDetail) {
        setMovieDetail(movieDetail);
    });

    // Events
    $("#seats-cntr .seat").click(function() {
        seatEventHandler($(this));
    });

    $("#btn-proceed").click(function(){
        btnProceedEventHandler();
    });

}); 



// Checks if data present
function validateSelectedMovie(validCallback) {

    var movieDetail = {
        id: localStorage.getItem("selected-movie-id"),
        cinema: localStorage.getItem("selected-movie-cinema"),
        date: localStorage.getItem("selected-movie-showdate")
    }

    if(movieDetail.id !== null && movieDetail.cinema !== null && movieDetail.date !== null) {
        validCallback(movieDetail);
    } else {
        // alert("Invalid Schedule");
        $(location).attr('href',"movie-selected.html");
    }
}

function setMovieDetail(movieDetail) {

    var movie = movies.find(function(m) {
        if(m.id == movieDetail.id) {
            return m;
        }
    });

    $(".card-seatplan .movie-title").html(movie.title);
    $(".card-seatplan .cinema-num").html(`Cinema ${movieDetail.cinema}`);
    $(".card-seatplan .show-date").html(movieDetail.date);
}

function seatEventHandler(seatObject) {

    if(!seatObject.hasClass("taken")) {
        if(seatObject.hasClass("selected")) {
            $("#selected-seat-badge").text(--selectedSeatCount);
            seatObject.attr("src", "assets/images/seats/available.png");
            
            var index = selectedSeats.indexOf(seatObject.attr("title"));
            // console.log(index);
            if (index != -1) {
                selectedSeats.splice(index, 1);
            }
            
        } else {
            $("#selected-seat-badge").text(++selectedSeatCount);
            seatObject.attr("src", "assets/images/seats/selected.png");
            selectedSeats.push(seatObject.attr("title"));
        }
        seatObject.toggleClass("selected");
    }
}

function btnProceedEventHandler() {
    if(selectedSeats.length!=0) {
        localStorage.setItem("selected-seats", JSON.stringify(selectedSeats));
        $(location).attr('href',"confirmation.html");
    } else {
        // $(".no-schedule-alert").css({
        //     display: "block"
        // });
        alert("No Seats Selected");
    }
}

function disableReservedSeats() {
    
    // `cinema${data.cinema}-reserved-seats-${showDate}`;


    var localStorageID = `cinema${localStorage.getItem("selected-movie-cinema")}-reserved-seats-${localStorage.getItem("selected-movie-showdate")}`;

    var takenSeats = JSON.parse(localStorage.getItem(localStorageID));

    if(takenSeats != null) {

    if(typeof takenSeats != 'object') {
        takenSeats = takenSeats.split(",");
    }

    takenSeats.forEach(function(seat) {

        $(`img[title="${seat}"]`).attr("src", "assets/images/seats/taken.png");
        $(`img[title="${seat}"]`).addClass("taken");
        $(`img[title="${seat}"]`).removeClass("available");

    });

    }
}