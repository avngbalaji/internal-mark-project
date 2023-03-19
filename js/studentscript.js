function submit(){
	var regno=document.getElementById('regno').value;
	var dob=document.getElementById('dob').value;
	if(regno=="20CAE202"&&dob=="28-09-2002"){
		window.location.href="admin-page.html";
    }
	else{
		alert("Invalid Username and Password");
	}
}