var menuButton = document.getElementById("menuButton");
var navigation = document.getElementById("navigation");

menuButton.addEventListener("click", function () {
    navigation.classList.toggle("show");
});

var travelDate = document.getElementById("travelDate");

var today = new Date();

var year = today.getFullYear();
var month = String(today.getMonth() + 1).padStart(2, "0");
var day = String(today.getDate()).padStart(2, "0");

travelDate.min = year + "-" + month + "-" + day;

var bookingForm = document.getElementById("bookingForm");
var bookingMessage = document.getElementById("bookingMessage");

bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var destination = document.getElementById("destination").value.trim();
    var tripType = document.getElementById("tripType").value;
    var date = travelDate.value;
    var travellers = document.getElementById("travellers").value;

    if (destination === "" || tripType === "" || date === "") {
        bookingMessage.textContent = "Please fill in all the details.";
    } else {
        bookingMessage.textContent =
            "Your trip plan: " + destination +
            " | " + tripType +
            " | Date: " + date +
            " | Travellers: " + travellers +
            ". This is a sample plan, not a confirmed booking.";
    }
});

var newsletterForm = document.getElementById("newsletterForm");
var newsletterMessage = document.getElementById("newsletterMessage");

newsletterForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var email = document.getElementById("email").value;

    if (email === "") {
        newsletterMessage.textContent = "Please enter your email address.";
    } else {
        newsletterMessage.textContent =
            "Thank you for your interest in BookMyTrip!";

        newsletterForm.reset();
    }
});

document.getElementById("year").textContent = new Date().getFullYear();