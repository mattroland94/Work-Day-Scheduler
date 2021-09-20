var currentday = document.querySelector("#currentDay");

var currentdate = moment();

currentday.textContent = currentdate.format("dddd, MMMM Do");

$(".saveBtn").on("click", function() {

    // grabs values from user
    var des = $(this).siblings(".descirption").val();
    var time = $(this).parent().attr("id");

    // saves the information in the localStorage
    localStorage.setItem(time, des);
});

// will help load any of the data that is located in localStorage

$("#9am .description").val(localStorage.getItem("9am"));
$("#10am .description").val(localStorage.getItem("10am"));
$("#11am .description").val(localStorage.getItem("11am"));
$("#12pm .description").val(localStorage.getItem("12pm"));
$("#1pm .description").val(localStorage.getItem("1pm"));
$("#2pm .description").val(localStorage.getItem("2pm"));
$("#3pm .description").val(localStorage.getItem("3pm"));
$("#4pm .description").val(localStorage.getItem("4pm"));
$("#5pm .description").val(localStorage.getItem("5pm"));


// creating if else statments for css styling to properly show depending on the time of day
var currentTime = moment().format('H');

// 9am
if (currentTime < 9) {
    $("#9").addClass("future");
}

else if (currentTime < 9) {
    $("#9").addClass("past");
}

else if (currentTime = 9) {
    $("#9").addClass("present");
}

// 10am

if (currentTime < 10) {
    $("#10").addClass("future");
}

else if (currentTime < 10) {
    $("#10").addClass("past");
}

else if (currentTime = 10) {
    $("#10").addClass("present");
}

// 11am

if (currentTime < 11) {
    $("#11").addClass("future");
}

else if (currentTime < 11) {
    $("#11").addClass("past");
}

else if (currentTime = 11) {
    $("#11").addClass("present");
}

// 12pm

if (currentTime < 12) {
    $("#12").addClass("future");
}

else if (currentTime < 12) {
    $("#12").addClass("past");
}

else if (currentTime = 12) {
    $("#12").addClass("present");
}

// 1pm

if (currentTime < 13) {
    $("#1").addClass("future");
}

else if (currentTime < 13) {
    $("#1").addClass("past");
}

else if (currentTime = 13) {
    $("#1").addClass("present");
}

// 2pm

if (currentTime < 14) {
    $("#2").addClass("future");
}

else if (currentTime < 14) {
    $("#2").addClass("past");
}

else if (currentTime = 14) {
    $("#2").addClass("present");
}

// 3pm

if (currentTime < 15) {
    $("#3").addClass("future");
}

else if (currentTime < 15) {
    $("#3").addClass("past");
}

else if (currentTime = 15) {
    $("#3").addClass("present");
}

// 4pm

if (currentTime < 16) {
    $("#4").addClass("future");
}

else if (currentTime < 16) {
    $("#4").addClass("past");
}

else if (currentTime = 16) {
    $("#4").addClass("present");
}

// 5p

if (currentTime < 17) {
    $("#5").addClass("future");
}

else if (currentTime < 17) {
    $("#5").addClass("past");
}

else if (currentTime = 17) {
    $("#5").addClass("present");
}