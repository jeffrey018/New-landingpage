$(document).ready(function(){
// alert();
// getCategory();
var category = $("#prod_cat").attr("value");
getProductsByCategory(category);


function getCategory(){
	$.ajax({
		url:"./includes/support.php",
		type:"POST",
		data: "getCategory=1",
		cache:false,
		success:function(data){
			$('.depart-hover').html(data);
			//alert(data);
		}
	});
}

function getProductsByCategory(category){
	$.ajax({
		url:"./includes/support.php",
		type:"POST",
		data: "getProductsMen="+category,
		// cache:false,
		success:function(data){
			$('.product_list').html(data);
		}
	});
}


	

});