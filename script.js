(function(){

	function showCitiesList(){
		var button = document.getElementById("button");
		var list = document.getElementsByClassName("cities-list")[0];

		button.onclick = function(){
			if(list.className == "cities-list list-open"){
				list.style.display = "none";
				list.className = "cities-list";
			} else {
				list.style.display = "block";
				list.className = "cities-list list-open";
			}
			return false;
		};
	}
	showCitiesList();

	function inputOnActive(){
		var input = $(".input");
		
		input.on("focus", function(){
			$(this).prev().addClass("label-small-size");
		});

		input.on("blur", function(){
			$(this).prev().removeClass("label-small-size");
		});
	}
	inputOnActive();
})();