 $("#login-button").click(function(event){
		 event.preventDefault();
	 
	 $('form').fadeOut(300);
	 $('.wrapper').addClass('form-success');
//window.location.assign("http://www.w3schools.com");
setTimeout("redireccionarPagina()", 4000);
});
function redireccionarPagina() {
var user1=document.getElementById("user").value;
var pass1=document.getElementById("pass").value;
  window.location = "llvalidate.php?user="+user1+"&pass="+pass1;
}
