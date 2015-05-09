$(document).ready(function(){

	$("#banner").css({"height":$(window).height() + "px"});
	var flag = false;
	var scroll;
	// esta funcion que cada ves que aga scroll se ejecutara esta funcion
	$(window).scroll(function(){
		scroll = $(window).scrollTop();
		if (scroll > 200) {
			if(!flag){
				$("#logo").css({"margin-top": "-5px", "width":"75px","heigt":"75px"});
				// con esto solo aplica una vves
				$("#barra").css({"background-color": "#000000"});
				flag = true;
			}
		}
		else{
			if(flag){
				$("#logo").css({"margin-top": "15px", "width":"80px","heigt":"75px"});
				$("#barra").css({"background-color": "transparent"});
				flag = false;
			}
		}

	});

});