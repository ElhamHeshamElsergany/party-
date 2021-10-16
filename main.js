$(document).ready(function () {
	let aboutOffset =$("#first-section").offset().top;
$(window).scroll(function (){

    let wScroll=$(window).scrollTop();
    if(wScroll > aboutOffset){
     $(".word-span , .word-h3").css("color","black");
    }
    else{
        $(".word-span,.word-h3").css("color","white");
    }
})

	$("a").click(function(){
		var sectionId= $(this).attr("href");
		var positionOfSection = $(sectionId).offset().top;
		$("html , body").animate({scrollTop:positionOfSection},2000);
	})
	
	
	$(".word-span , .word-h3").click(function () {
		$(".navbar-index").show()
	});

	$("#close").click(function () {
		$(".navbar-index").hide()
	});
	//   Second section 
	$("#singerH2one").click(function () {
		$("#singerpone").slideToggle(500)
	});
	$("#singerH2two").click(function () {
		$("#singerptwo").slideToggle(500)
	});
	$("#singerH2three").click(function () {
		$("#singerpthree").slideToggle(500)
	});
	$("#singerH2four").click(function () {
		$("#singerpfour").slideToggle(500)
	});

	//  third part

	function countdown() {
		var now = new Date();
		var eventDate = new Date(2018, 12, 17);
		var currentTiime = now.getTime();
		var eventTime = eventDate.getTime();
		var remTime = eventTime - currentTiime;
		var second = Math.floor(remTime / 1000);
		var min = Math.floor(second / 60);
		var hours = Math.floor(min / 60);
		var days = Math.floor(hours / 24) - 30;

		hours %= 24;
		min %= 60;
		second %= 60;

		hours = (hours < 10) ? "0" + hours : hours;
		min = (min < 10) ? "0" + min : min;
		second = (second < 10) ? "0" + second : second;

		document.getElementById("days").innerHTML = "<h3>" + days + "D" + "</h3>";
		document.getElementById("days").innerHTML = "<h3>" + days + "D" + "</h3>";
		document.getElementById("hours").innerHTML = "<h3>" + hours + "h" + "</h3>";
		document.getElementById("minutes").innerHTML = "<h3>" + min + "m" + "</h3>";
		document.getElementById("seconds").innerHTML = "<h3>" + second + "s" + "</h3>";

		setTimeout(countdown, 1000);
	}
	countdown();
	// end of second part 
	// last section
	$(function () {
		var max = 100;
		$("textarea").keyup(function () {
			var length = $(this).val().length;
			var character = max - length;
			console.log(character)
			if (character <= 0) { $("#character").text("your available character finished"); }
			else { $("#character").text(character); }
		});
	});
})
