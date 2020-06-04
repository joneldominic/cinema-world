$(document).ready(function(){

    validateSelectedMovie(function(movieDetail) {
        setReservationSummary(movieDetail)
    });

    // Events
    $("#reservation-confirm-btn").click(function(){
        saveData();
    });
    
}); 

// Checks if selected movie id is present
function validateSelectedMovie(validCallback) {

    var movieDetail = {
        id: localStorage.getItem("selected-movie-id"),
        cinema: localStorage.getItem("selected-movie-cinema"),
        date: localStorage.getItem("selected-movie-showdate"),
        seats: JSON.parse(localStorage.getItem("selected-seats"))
    }

    if(movieDetail.id!==null && movieDetail.cinema!==null && movieDetail.date!==null && movieDetail.seats!==null) {
        validCallback(movieDetail);
    } else {
        $(location).attr('href',"seatplan.html");
    }
}

function setReservationSummary(movieDetail) {

    var movie = movies.find(function(m) {
        if(m.id == movieDetail.id) {
            return m;
        }
    });

    $("#movie-image").attr("src", movie.imgUrl);
    $("#movie-title").html(movie.title);
    $("#show-date").html(movieDetail.date);
    $("#cinema-num").html(movieDetail.cinema);
    $("#ticket-price").html(movie.ticketPrice);
    $("#reserved-seats").html(movieDetail.seats.toString());
    $("#seat-count").html(movieDetail.seats.length);
    $("#total-amount").html(movieDetail.seats.length*movie.ticketPrice);

}


function saveData() {
    var movie = movies.find(function(m) {
        if(m.id == localStorage.getItem("selected-movie-id")) {
            return m;
        }
    });

    var price_ = movie.ticketPrice * JSON.parse(localStorage.getItem("selected-seats")).length
    var data = {
        title: movie.title,
        showDate: localStorage.getItem("selected-movie-showdate"),
        cinema: localStorage.getItem("selected-movie-cinema"),
        price: movie.ticketPrice,
        seatCount: JSON.parse(localStorage.getItem("selected-seats")).length,
        seats: JSON.parse(localStorage.getItem("selected-seats")).toString(),
        totalAmt: price_
    }

    if(localStorage.getItem("movie-reservation-record") == null) {
        var tempRecord = Array();
        tempRecord.push(data);
        localStorage.setItem("movie-reservation-record", JSON.stringify(tempRecord));
    } else {
        var tempRecord = JSON.parse(localStorage.getItem("movie-reservation-record"));
        tempRecord.push(data);
        localStorage.setItem("movie-reservation-record", JSON.stringify(tempRecord));
    }

    var localStorageID = `cinema${data.cinema}-reserved-seats-${localStorage.getItem("selected-movie-showdate")}`;

    if(localStorage.getItem(localStorageID) == null) {
        localStorage.setItem(localStorageID, JSON.stringify(data.seats));
    } else {
        var tempArray = JSON.parse(localStorage.getItem(localStorageID));
        var temp = tempArray.toString().concat(","+data.seats);

        localStorage.setItem(localStorageID, JSON.stringify(temp));
    }

    $.Toast.showToast({
        "title": "Saving...",
        "duration": 1000,

    });
    setTimeout(function () {
        $.Toast.showToast({

            "title": "Reservation Saved!",
            "icon": "success",
            "duration": 1000,
        
        });
        setTimeout(function(){
            $(location).attr('href',"index.html");
        }, 1100);
    }, 1100);

} 