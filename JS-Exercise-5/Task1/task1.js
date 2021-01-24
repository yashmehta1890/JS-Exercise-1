//Register User
function register(){    
    let form = document.forms.registrationform;
    let username = form.elements.uname.value;
    let password = form.elements.pwd.value;
    let cpassword = form.elements.cpwd.value;
    let roles = form.elements.role.value;
    
    if(!username || !password || !cpassword || !roles){
        alert("Enter all fields");
    }else if(password != cpassword){
    	alert("Password not match");
    }else{
        const userdetails = { username, password, cpassword, roles };
	    localStorage.setItem(username, JSON.stringify(userdetails));
        alert('Your account has been created');
        window.location.replace("login.html");
    }
}

//Checkuser is exists or not
function checkUser(username,passwords) {
	const userdetails=localStorage.getItem(username);
	const {password,roles}=JSON.parse(userdetails);
	
	if(username==username && passwords==password)
    {	alert("You are logged in");
    	if(roles=="admin"){
    		localStorage.setItem('currentadmin', username);
    		window.location.replace("admin.html");
    	}else{
    		window.location.replace("user.html");
    		localStorage.setItem('currentuser', username);	
    	}
    	return true;
	}else{
		alert("Error");
		return false;
	}	    
}
//Login
function login(){
    
    let form = document.forms.loginform;
    let username = form.elements.uname.value;
    let password = form.elements.pwd.value;
    
    if(!username || !password ){
        alert("Enter all fields");
    }
    checkUser(username,password);
}

//Add Course
function addCourse() {
    let form = document.forms.addcourseform;
    let coursename = form.elements.cname.value;
    const course = { coursename };
    localStorage.setItem("coursename",JSON.stringify(course));
    alert('Course Added');
    location.reload();
}
//Remove Course
function removeCourse() {
	localStorage.removeItem("cname");
	alert('Course removed');
	location.reload();
}