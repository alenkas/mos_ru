(function(){

	function showCitiesList(){
		var city_container = document.getElementsByClassName("city")[0];
		var list = document.getElementsByClassName("cities-list")[0];

		city_container.onclick = function(){
			if(list.className == "cities-list list-open"){
				list.style.display = "none";
				list.className = "cities-list";
			} else {
				list.style.display = "block";
				list.className = "cities-list list-open";
			}
		};
	}
	showCitiesList();

	function inputOnActive(){
		var input = $(".input");
		
		input.on("focus", function(){
			$(this).prev().addClass("label-small-size");
			$(this).parent().addClass("form-group-active");
		});

		input.on("blur", function(){
			$(this).prev().removeClass("label-small-size");
			$(this).parent().removeClass("form-group-active");
		});
	}
	inputOnActive();
})();