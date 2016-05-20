//= require jquery
var ready;
ready = function() {
	var home = document.getElementById("home");
	var projects = document.getElementById("projects");
	var contact = document.getElementById("contact");
	var underline = document.getElementById("underline");

	home.addEventListener('click', function(){
		underline.style.left = "0.5em";
		underline.style.width = "4em";

	});

	projects.addEventListener('click', function(){
		underline.style.left = "6em";
		underline.style.width = "5em";

	});

	contact.addEventListener('click', function(){
		underline.style.left = "12.5em";
		underline.style.width = "5em";

	});
}

ready();