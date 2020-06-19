// USE CASES
// When user loads the page the current day diaplays at the top using the new Date() object stored in var d

// When user loads the page the background colors of the different hours change based on the current time.

// When the user enters data in the text area and clicks save, the data is written to local memory.
// On a new page load or refresh, the saved data persists.


// VARIABLES
var d = new Date();
var scheduleTxt = ["", "", "", "", "", "", "", "", ""];
var txtIds = ["#9AM", "#10AM", "#11AM", "#12PM", "#1PM", "#2PM", "#3PM", "#4PM", "#5PM"]
var timeSlots = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]


// FUNCTIONS
// Function to identify the current day and append it to the paragraph with id= "currentDay"
// Function to read the current time and set background colors accordingly.
function setPage(){
    var d = new Date();
    $("#currentDay").text(d.toDateString());
};
setPage();

// Function to recall saved schedule data and appends it to the appropriate text areas on page load.

function loadSave(){
    var saveData = JSON.parse(localStorage.getItem("schedule")) || [];
    for (let i = 0; i < txtIds.length; i++) {
        $(txtIds[i]).text(saveData[i]);  
    }
    scheduleTxt = saveData;
};
loadSave();


// Function that allows schedule text to be written to local storage when save button is clicked.
function saveNew(){
    localStorage.setItem("schedule", JSON.stringify(scheduleTxt));
};


$("#saveBtn9").on("click", function(){ 
    scheduleTxt[0] = $("#9AM").val();
    saveNew();
});

$("#saveBtn10").on("click", function(){  
    scheduleTxt[1] = $("#10AM").val();
    saveNew();
});

$("#saveBtn11").on("click", function(){  
    scheduleTxt[2] = $("#11AM").val();
    saveNew();
});

$("#saveBtn12").on("click", function(){  
    scheduleTxt[3] = $("#12PM").val();
    saveNew();
});

$("#saveBtn1").on("click", function(){  
    scheduleTxt[4] = $("#1PM").val();
    saveNew();
});

$("#saveBtn2").on("click", function(){  
    scheduleTxt[5] = $("#2PM").val();
    saveNew();
});

$("#saveBtn3").on("click", function(){
    scheduleTxt[6] = $("#3PM").val();
    saveNew();
});

$("#saveBtn4").on("click", function(){
    scheduleTxt[7] = $("#4PM").val();
    saveNew();
});

$("#saveBtn5").on("click", function(){
    scheduleTxt[8] = $("#5PM").val();
    saveNew();
});

var hour = moment().hour();
var x = 0

for (let x = 0; x < txtIds.length; x++) {
    if (hour === timeSlots[x]) {
        $(txtIds[x]).attr("class", "present")   
    }
    else if (hour < timeSlots[x]) {
        $(txtIds[x]).attr("class", "future")
    }
    else {
        $(txtIds[x]).attr("class", "past")
    }
}


console.log(hour)
console.log(timeSlots[x])

console.log((moment().hour()))