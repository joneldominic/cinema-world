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



<<<<<<< HEAD
=======





// Check show date == to date today
// for(var i=0; i<movies[0].show.length; i++) {
// 	if(getDateToday() == movies[0].show[i].date) {
//         console.log(movies[0].show[i].date);
// 	}
	
// }

// // Checks movie that shows current date
// for(var i=0; i<movies.length; i++) {
// 	for(var j=0; j<movies[i].show.length; j++){
// 		if(movies[i].show[j].date==getDateToday()){
// 			console.log(movies[i].title)
// 		}
// 	}
// }

movies.forEach(function(movie, m_index) {
	movie.show.forEach(function(show, s_index){
		if(show.date == getDateToday()) {
			console.log(movie.id + "-" +movie.title + " - " + show.date + " - " + show.cinema)
        }
	})
})
// Checks movie that shows current date
>>>>>>> 038cd43764a3b670070cc304a08d0eea2c3dbd6c
