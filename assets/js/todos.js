$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
})


$("ul").on("click","span",function(event){

	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
		event.stopPropagation();

})


$("input[type='text']").keypress(function(event){
	if(event.which===13)//13=enter
	{
		var todotext=$(this).val();
		if(todotext!=""){
		$("ul").append("<li><span>Delete</span> "+todotext+"</li?")
		$(this).val("");}
		else
		{
			alert("enter the value")
		}
	}
})