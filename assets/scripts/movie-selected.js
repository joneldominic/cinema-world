$(document).ready(function(){
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



// /Get current date
function getDateToday() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    return today;
}
