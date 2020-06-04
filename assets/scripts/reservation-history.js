// Unset unnecessary item in local storages
localStorage.removeItem("selected-movie-id");
localStorage.removeItem("selected-movie-cinema");
localStorage.removeItem("selected-seats");
localStorage.removeItem("selected-movie-showdate");


$(document).ready(function(){

    displayReservation();
});


var reservation = JSON.parse(localStorage.getItem("movie-reservation-record"));

//Display reservation list
var existingReservations = $("#reservation-history-data");

function displayReservation() {
    existingReservations.html("");
    reservation.forEach((data, counter) => {
        $("#reservation-history-data").append(`
            <tr>
                <td>${data.title}</td>
                <td>${data.showDate}</td>
                <td>${data.cinema}</td>
                <td>${data.price}</td>
                <td>${data.seatCount}</td>
                <td>${data.totalAmt}</td>
                <td>
                    <button id="btn-${counter}"  onclick="onDelete(${counter})" cinema-number="${data.cinema}" seats="${data.seats}" show-date="${data.showDate}" type="button" class="cancel-reserve-btn btn btn-outline-danger btn-sm" data-toggle="modal" data-target="#confirm-delete-modal">Cancel</button>
                </td>
            </tr>`
        )
    })
};

$("#confirm-cancellation-btn").click(function(){
    var index = $("#confirm-cancellation-btn").attr("reservation-id");

    reservation.splice(index, 1);
    var localStorageID = `cinema${$(`#btn-${index}`).attr("cinema-number")}-reserved-seats-${$(`#btn-${index}`).attr("show-date")}`;
    var reservedSeats = localStorage.getItem(localStorageID);
    var currRecordSeats = $(`#btn-${index}`).attr("seats");

    reservedSeats = reservedSeats.replace(/[\"]+/g, "").split(",");
    currRecordSeats =  currRecordSeats.split(",");

    for(var i=0; i<reservedSeats.length; i++) {
        for(var j=0; j<currRecordSeats.length; j++) {
            if(reservedSeats[i] == currRecordSeats[j]) {
                reservedSeats.splice(i,1);
            }
        }
    }

    localStorage.setItem(localStorageID, JSON.stringify(reservedSeats.toString()));
    localStorage.setItem("movie-reservation-record", JSON.stringify(reservation));


    $.Toast.showToast({
        "title": "Processing...",
        "duration": 1000,

    });
   
    setTimeout(function () {
        $.Toast.hideToast();
        $.Toast.showToast({

            "title": "Reservation Cancelled!",
            "icon": "success",
            "duration": 1000,
        
        });
        setTimeout(function(){
            displayReservation();
            $.Toast.hideToast();
        }, 1100);

    }, 1100);

    // displayReservation();
});

//Delete reservation from record
onDelete = (index) => {
    $("#confirm-cancellation-btn").attr("reservation-id", index);
}