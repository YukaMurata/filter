$(function(){

$('input[name=num]').on('click',function() {

	//$(".content_list_item").velocity("fadeOut",{duration:150});
$(this).each(function(){

	if($(this).prop("checked")){
	//	var n = $("#check_btn :checkbox:checked").length;
		$("#content_list li").velocity("fadeOut",
	 {duration:350
	    });
    var val = $(this).val();
    
    console.log(val);

	 $("#content_list .content_list_item." + val ).velocity("fadeIn",
	 {duration:350
	    });
	} else{
		$("#content_list li").velocity("fadeIn",
	 {duration:350
	    });
	}

 });

});

/*$('input[name="age"]:checked').each(function(){
	var check_val= $(this).val;
  console.log(check_val);
});*/

    /*    if ($(this).prop('checked')) {
            $('.content_list_item').velocity("fadeIn",
	    		{duration:350
	    });
        } else {
            $('.content_list_item').velocity("fadeOut",
	    		{duration:350
	    });
        }
    });*/


});
