/* JavaScript for the login page */
document.getElementById("facebook-button").addEventListener("click", function() {
    // Log in with Facebook using their API
});

document.getElementById("google-button").addEventListener("click", function() {
    // Log in with Google using their API
});

document.getElementById("twitter-button").addEventListener("click", function() {
    // Log in with Twitter using their API
});

document.getElementsByTagName("form")[0].addEventListener("submit", function(event) {
    event.preventDefault();

    // Verify the username and password using the back-end server
});