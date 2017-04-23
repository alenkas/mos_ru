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
			if($(this).val().length == 0){
				$(this).prev().removeClass("label-small-size");
				$(this).parent().removeClass("form-group-active");	
			}
		});
	}
	inputOnActive();

	function hidePassword(){
		var passInput = document.getElementById("user_password");
		var icon = document.getElementsByClassName("icon-closed-eye")[0];

		icon.onclick = function(){
			if(passInput.getAttribute("type") == "password"){
				passInput.setAttribute("type", "text");
			} else {
				passInput.setAttribute("type", "password");
			}
		};
	}
	hidePassword();

	function validateForm(){
		var form = document.getElementsByTagName("form")[0];
		var submitButton = document.getElementById("button");
		var inputsNeedToCheck = document.getElementsByClassName("required");

		form.onsubmit = function(e){
			var isFormValid = true;

			for(var i = 0; i < inputsNeedToCheck.length; i++){
				if(inputsNeedToCheck[i].value.length == 0){
					inputsNeedToCheck[i].previousElementSibling.classList.add("label-highlight");
					isFormValid = false;
				}
			}

			return isFormValid;
		};
	}
	validateForm();
})();