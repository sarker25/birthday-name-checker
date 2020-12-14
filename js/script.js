var userDate  = document.getElementById("date");
var userMonth = document.getElementById("month");
var userYear  = document.getElementById("year");
var submitButton = document.getElementById("submit-date");


submitButton.addEventListener("click", function(evt) {
    var message  = document.getElementById("message");
    var getDate  = parseInt(userDate.value);
    var getMonth = (parseInt(userMonth.value) -1);
    var getYear  = parseInt(userYear.value);

    var month = ["January", "February", "March", "April", "May",     "June", "July", "August", "September", "October", "November", "December"];
    
    var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thus Day", "Friday","Saturday"];


    var dateIS  = new Date(getYear, getMonth, getDate );
    var dayIs   = day[dateIS.getDay()];
    var monthIs = month[getMonth];

    if(dayIs === undefined || monthIs === undefined){
        message.innerText = "";
        setTimeout(function(){
            message.innerText = "Please enter a valid number";
        },500)
    } 
    else 
    {
        // message.innerText = "Your BirthDay Name is" dayIs + ", " + monthIs + " " + getDate + " " + getYear ;
        message.innerText = "Your BirthDay Name is" + " : " + dayIs ;
    }
});