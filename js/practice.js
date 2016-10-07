$(function(){

	var $contentListItem = $("#content_list li");
	var showingClass = []; 

	$('input[name=num]').on('change',function() {
		if($(this).is(':checked')){
		var val = $(this).val();
		updateShowingClass(val);
		}else{
		var del = $(this).val();
		deletShowingClass(del);
		}
		showList();
	 });

	function updateShowingClass (val){
		showingClass.push(val);
		console.log(showingClass);
	}

	function showList (){
		var $list = $("." + showingClass.join("."));
		$contentListItem.velocity("fadeOut",{
		 			duration:350,
		 			complete:function(){
		 				if($list.length !=0){
		 				$list.velocity("fadeIn",{
		 					duration:350
		 				});
		 				}else{
		 				alert("0件です!!!!!!!");
		 			}
		 		}
		 	});
	}

	function deletShowingClass (del){
	for(i = 0; i < showingClass.length; i++){
 		if(showingClass[i] == del){
 			 showingClass.splice(i,1);
 			}
		}
		console.log(showingClass);
	}

	$('.reset').on('click',function() {
		reset();
	});

	function reset(){
		showingClass = [];
		$contentListItem.velocity("fadeIn",{
		 					duration:350
		 				});
		$('input[name=num]').prop('checked',false);
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



