// Regex pattern to validate the email field
var regexPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
// var regexPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


// Grab elements from the newsletter section
var subscribeBtn = document.getElementById("subscribe-btn");
var emailId = document.getElementById("email-id");
var displayError = document.getElementById("display-error");

// Subscribe button
subscribeBtn.addEventListener('click', function(event){
    event.preventDefault();

    if(!regexPattern.test(emailId.value) || emailId.value === "" ){
        displayError.innerHTML = "Please fill in a valid email";
    } else {
        emailId.value = "";
        displayError.innerHTML = "Your email has been received";
    }

    setInterval(function(){
        displayError.innerHTML = "";
    }, 3000);

})


// Grab the get a quote form elements
var quoteButton = document.getElementById("quote-button");
var nameQuote = document.getElementById("name-quote");
var emailQuote = document.getElementById("email-quote");
var messageQuote = document.getElementById("message-quote");
var quoteError = document.getElementById("quote-error");


// Get a quote button
quoteButton.addEventListener('click', function(event){
    event.preventDefault();

    if(!regexPattern.test(emailQuote.value) || emailQuote.value === "" || nameQuote.value === "" || messageQuote.value === ""){
        quoteError.innerHTML = "Input field must be filled correctly";
    } else {
        nameQuote.value = "";
        emailQuote.value = "";
        messageQuote.value = "";
        quoteError.innerHTML = "Your quote has been received";
    }
})




