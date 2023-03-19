function login() {
	// body...
	var username=document.getElementById('uname').value;
	var password=document.getElementById('pword').value;
	if(username=="admin"&&password=="admin"){
		window.location.href="admin-page.html";
    }
	else{
		alert("Invalid Username and Password");
	}
}
