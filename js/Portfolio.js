// window.onload=function(){
	// var a1=document.getElementById("a1"),
		// a2=document.getElementById("a2"),
		// a3=document.getElementById("a3");
		
	// a1.onclick=function(){
		// a1.className="";
		// a2.className="";
		// a3.className="";
		// this.className="active";
	// }
	// a2.onclick=function(){
		// a1.className="";
		// a2.className="";
		// a3.className="";
		// this.className="active";
	// }
	// a3.onclick=function(){
		// a1.className="";
		// a2.className="";
		// a3.className="";
		// this.className="active";
	// }
// }
$(document).ready(function(){
	$(window).scroll(function(){
		var top=$(document).scrollTop();
		var header=$("#header");
		var items=$('#wrap').find(".item");
		var currentId="";
		items.each(function(){
			var m=$(this);
			var itemTop=m.offset().top;
			if(top>itemTop-100){
				currentId="#"+m.attr("id");
			}else{
				return false;
			}
			var currentLink=header.find('.current');
			if(currentId && currentLink.attr('href')!=currentId){
				currentLink.removeClass("current");
				header.find("[href="+currentId+"]").addClass("current");
			}
		});
	});
});
