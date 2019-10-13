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