//$("#main").append("Laurynas G.");

var awesomeThoughts = "My name is Laurynas and I am AWESOME!";
var funThoughts = awesomeThoughts.replace("AWESOME", "FUN")
//$("#main").append(funThoughts);


var email = "laurynas@ginkus.lt";
var newEmail = "laurynas.ginkus@gmail.com";

var name = "Laurynas";
var role = "Analyst";
var formattedRole = HTMLheaderRole.replace("%data%", role);
var formattedName = HTMLheaderName.replace("%data%", name);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var skills = ["awesones", "coolness", "JS"];

$("#header").append(skills);