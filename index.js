$("ul").on("click","li", function(){
	$(this).toggleClass("done");
});

$("ul").on("click","span", function(event){
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});



$("input[type='text']").keypress(function(event){
	if (event.which === 13){
		var todoText = $(this).val();

		$(this).val("");

		$("ul").append("<li><span><i class='fa fa-trash-o'></i> </span>" + todoText + "</li>");
	}
})
 
 $(".fa-list").click(function(){
 	$("input[type='text']").fadeToggle();
 })