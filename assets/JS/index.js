
//Set constantly updating time at the top on the page
setInterval (function() {
    var todaysDate = moment().format('MMMM Do YYYY, HH:mm:ss');
    $("#currentDay").text(todaysDate);
})

$(document).ready(function () {
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        // Get nearby values of the description in JQuery
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save text typed into local storage
        localStorage.setItem(time, text);
    })
   
    function timeSetter() {
        //get current number of hours.
        var currentTime = moment().hour();
        

        // loop over time blocks to remove the hour from id
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("-")[1]);
            console.log([1]);

            // To check the time and add the classes for background indicators
            if (blockTime < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    // Get the items from local storage if any are saved
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));

    timeSetter();
})