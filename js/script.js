$(document).ready(function(){

	function showCitiesList(){
		var cities_container = $(".city");
		var cities_list = $(".cities-list");
		var cities = $(".cities-list li");
		var userCityChoice = $("#user_city");

		cities_container.on("click", function(){
			if(cities_list.hasClass("list-open")){
				cities_list.removeClass("list-open");
				cities_list.hide();
			} else {
				cities_list.addClass("list-open");
				cities_list.show();
			}
		});

		cities.on("click", function(){
			var that = $(this);
			userCityChoice.val(function(){
				return that.find("a").text();	
			});
		});
	}
	showCitiesList();

	function inputOnActive(){
		var input = $(".input");
		
		input.on("focus", function(){
			$(this).prev().addClass("label-small-size");
			$(this).parent().addClass("form-group-active");
		});

		input.on("blur", function(){
			if($(this).val().length === 0){
				$(this).prev().removeClass("label-small-size");
				$(this).parent().removeClass("form-group-active");	
			}
		});
	}
	inputOnActive();

	function hidePassword(){
		var passInput = document.getElementById("user_password");
		var icon = document.getElementsByClassName("icon-closed-eye")[0];
		var showPasswordIcon = document.getElementById("show_password");

		icon.onclick = function(){
			if(passInput.getAttribute("type") === "password"){
				passInput.setAttribute("type", "text");
				showPasswordIcon.classList.remove("icon-closed-eye");
				showPasswordIcon.classList.add("icon-opened-eye");
			} else {
				passInput.setAttribute("type", "password");
				showPasswordIcon.classList.remove("icon-opened-eye");
				showPasswordIcon.classList.add("icon-closed-eye");
			}
		};
	}
	hidePassword();

	function formatTelephone(){
		var phoneInput = document.getElementById("user_phone");

		phoneInput.onfocus = function(){
			if(this.value.length === 0){
				this.value = "+7(";	
			}
		};
		phoneInput.onkeydown = function(e){
            // Add second semicolon if user does not press
            // delete button
            if(this.value.length === 6 && e.keyCode !== 8){
                this.value += ")";
            }
            // Add hyphen if user does not press
            // delete button
            if(this.value.length === 10 && e.keyCode !== 8){
                this.value += "-";
            }
            // Add second hyphen if user does not press
            // delete button
            if(this.value.length === 13 && e.keyCode !== 8){
                this.value += "-";
            }
		};
        phoneInput.onkeyup = function(e){
            // If user presses delete button do not allow to delete prefix
            if(e.keyCode === 8 && this.value.length < 4){
                this.value = "+7(";
            }
        };
	}
	formatTelephone();

	function validateForm(){
		var form = document.getElementsByTagName("form")[0];
		var fieldsToCheck = document.getElementsByClassName("required");
		var phoneField = document.getElementById("user_phone");

		form.onsubmit = function(){
			var isFormValid = true;

			for(var i = 0; i < fieldsToCheck.length; i++){
				if(fieldsToCheck[i].value.length === 0){
                    fieldsToCheck[i].previousElementSibling.classList.add("label-highlight");
					isFormValid = false;
				}
			}

			function validatePhone(){

				var phone = phoneField.value;

				function removeCharacters(string){
					var char = ["+", "(", ")", "-"];
					var array = [];
					var phone = "";
					for(var i = 0; i <= char.length; i++){

						array = string.split(char[i]);
						string = array[1];
						phone += array[0];
                        array.shift();
					}
					return phone;
				}
                var phoneNumber = parseInt(removeCharacters(phone));

				if(typeof phoneNumber == "number"){
					return true;
				} else {
					return false;
				}
			}
			if(!validatePhone()){
				isFormValid = false;
			}
			return isFormValid;
		};
	}
	validateForm();
});