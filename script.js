(function(){

	function showCitiesList(){
		var city_container = document.getElementsByClassName("city")[0];
		var list = document.getElementsByClassName("cities-list")[0];
		var userCity = document.getElementById("user_city");

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

	function formatTelephone(){
		var phoneInput = document.getElementById("user_phone");

		phoneInput.onfocus = function(){
			var that = this;
			if(this.value.length == 0){
				this.value = "+7(";	
			}
			this.onkeyup = function(e){
				console.log(that.value.length);
				// Add second semicolon if user does not press 
				// delete button
				if(this.value.length == 6 && e.keyCode != 8){
					this.value += ")";	
				}
				if(e.keyCode == 8 && this.value.length < 4){
					this.value = "+7(";
				}
			};
		};	
	}
	formatTelephone();

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

			function validateEmail(){
				var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
			}

			return isFormValid;
		};
	}
	validateForm();
})();