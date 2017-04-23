$(document).ready(function(){

	function showCitiesList(){
		var city_container = $(".city");
		var list = $(".cities-list");
		var cities = $(".cities-list li");
		var userCity = $("#user_city");

		city_container.on("click", function(){
			if(list.hasClass("list-open")){
				list.removeClass("list-open");
				list.hide();
			} else {
				list.addClass("list-open");
				list.show();
			}
		});

		cities.on("click", function(){
			var that = $(this);
			userCity.val(function(){
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

			return isFormValid;
		};
	}
	validateForm();
});