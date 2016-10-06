$(function(){

	var $contentListItem = $("#content_list li");


	var showingClass = []; 

	$('input[name=num]').on('change',function() {
		var val = $(this).val();
		updateShowingClass(val);
		showList();


	//$(".content_list_item").velocity("fadeOut",{duration:150});
		// $(this).each(function(){
			

		// 	if($(this).prop("checked")){
		// //	var n = $("#check_btn :checkbox:checked").length;
		// 		$("#content_list li").velocity("fadeOut",{
		// 			duration:350,
		// 			complete:function(){
		// 				$("#content_list .content_list_item." + val ).velocity("fadeIn",{
		// 					duration:350
		// 				});
		// 			}
		// 		});
		// 		console.log(val);

				
		// 	} else{
		// 		$contentListItem.velocity("fadeIn",
		// 			{duration:350
		// 		});
		// 	}

		// });

	 });

	function updateShowingClass (val){
		showingClass.push(val);
		console.log(showingClass);
	}

	function showList (){
		var $list = $("." + showingClass.join("."));

		$("#content_list li").velocity("fadeOut",{
		 			duration:350,
		 			complete:function(){
		 				$list.velocity("fadeIn",{
		 					duration:350
		 				});
		 			}
		 		});
	}

	$('input[name=reset]').on('click',function() {
		resetShowingClass();
		$('input[name=num]').prop('checked',false);
	});

	function resetShowingClass(){
		showingClass = [];
		$("#content_list li").velocity("fadeIn",{
		 					duration:350
		 				});
		 			}


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



