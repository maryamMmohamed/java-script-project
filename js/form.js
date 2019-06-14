var signUp = document.querySelector('.sign-up');
var reg = document.querySelector('.reg');
var login1 = document.querySelector('.login1');

signUp.addEventListener("click", function(){
	reg.classList.toggle("regopen");
});

login1.addEventListener("click", function(){
	reg.classList.remove("regopen");
});

////////////////////////////////



//// sign up
var userName = document.getElementById('username');
var password = document.getElementById('password');
var confirmPass = document.getElementById('confirmPass');
var email = document.getElementById('email');
var errorUser = document.querySelector('.username');
var errorEmail = document.querySelector('.email');
var errorPass = document.querySelector('.password');
var errorConfirmPass = document.querySelector('.confirmPass');
var errorGender = document.querySelector('.errorGender');
var errorJob = document.querySelector('.job');
var submitBtn = document.querySelector('#submit');
var job = document.getElementById('job');
var male = document.getElementById('male');
var female = document.getElementById('female');

//////// login
var userLogin = document.getElementById('userLogin');
var passwordLogin = document.getElementById('passwordLogin');
var submitLogin = document.getElementById('submitLogin');
var errorUserLogin = document.querySelector('.userLogin');

/////// userData
var userData =  document.getElementById('userData');
var biggest = document.querySelector('.biggest');




function validateEmail(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
}


function validate(e){
	e.preventDefault();
    e.stopPropagation();

	if(userName.value === ""){
	   errorUser.style.display = 'block';
	   errorUser.innerText = 'User Name Must Not Empty';
    }
    else if(!isNaN(userName.value)){
    	errorUser.style.display = 'block';
    	errorUser.innerText = 'User Name Must Not a Number';
    }
    else if(userName.value.length < 3){
    	errorUser.style.display = 'block';
    	errorUser.innerText = 'User Name Must More Than 2 Letters';
    }
    else{
    	errorUser.style.display = 'none';
    }


    if(validateEmail(email)){
		errorEmail.style.display = 'block';  
		errorEmail.innerText = 'Please Enter Valid Email';
	}
	else if(email.value === ''){
		errorEmail.style.display = 'block';
		errorEmail.innerText = 'Email Must Not Empty';
	}
	else{
		errorEmail.style.display = 'none';
	}


    if(password.value === ""){
	   errorPass.style.display = 'block';
	   errorPass.innerText = 'Password Must Not Empty';
    }
    else if(password.value.length < 6){
    	errorPass.style.display = 'block';
    	errorPass.innerText = 'Password Length Must More Than 6 ';
    }
    else{
    	errorPass.style.display = 'none';
    }


    if (password.value != confirmPass.value) {
    	errorConfirmPass.style.display = 'block';
    }
    else{
    	errorConfirmPass.style.display = 'none';
    }


    if (job.selectedIndex == 0) {
    	errorJob.style.display = 'block';
    	errorJob.innerText = 'Please Select Job ';
    }
    else{
    	errorJob.style.display = 'none';
    }
	
    
    if (male.checked == false && female.checked == false) {
    	errorGender.style.display = 'block';
    	errorGender.innerText = 'Please Select Gender ';
    }
    else{
    	errorGender.style.display = 'none';
    }
    

    var data= {
    user : userName.value,
	emailUser : email.value,
	passwordUser : password.value
};


userData.innerHTML = "<p style='color:#e42a3f;'>UserName: "+ data.user + "</p>";    
userData.innerHTML += "<p style='color:#e42a3f;'>Email: "+ data.emailUser + "</p>"; 
userData.innerHTML += "<p style='color:#e42a3f;'>Password: "+ data.passwordUser + "</p>"; 
userData.innerHTML += '<a style="color:#fff;font-size:16px;" href="index.html" class="btn">Continue</a>';

console.log(data);

}


function openSignUp(){
	if (userName.value != "" && email.value != '' && password.value != "" && confirmPass.value != ""
    && job.selectedIndex != 0 && male.checked == true || female.checked == true) {
        biggest.style.display = 'none';
        userData.style.display = 'block';
    }
}

submitBtn.addEventListener("click", validate , true);
submitBtn.addEventListener("click", openSignUp , true);


var usersArr = [
{
	name:'mariam',
	passwordArr:'123456'
},
{
	name:'mohamed',
	passwordArr:'123456'
},
{
	name:'hamada',
	passwordArr:'123456'
}
];

var loginData = null;
var newUser = null;

function authenticationLogin(e){
	e.preventDefault();
    e.stopPropagation();

	loginData = {
	userNameLogIn : userLogin.value,
	passwordLogIn : passwordLogin.value
}

	for (var i = 0; i < usersArr.length ; i++) {
		if (usersArr[i].name == loginData.userNameLogIn && usersArr[i].passwordArr == loginData.passwordLogIn) {
			newUser = usersArr[i];
		}
	}

	if (newUser == null) {
		console.log('user name not found');
		errorUserLogin.style.display = 'block';
	 	errorUserLogin.innerText = 'UserName Not Valid';
	}
	else{
		console.log('welcome ya '+ newUser.name);
		userData.innerHTML = "<p style='color:#e42a3f;padding-top:25px;'>UserName: "+ loginData.userNameLogIn + "</p>";    
		userData.innerHTML += "<p style='color:#e42a3f;'>Password: "+ loginData.passwordLogIn + "</p>"; 
		userData.innerHTML += '<a style="color:#fff;font-size:16px;" href="index.html" class="btn">Continue</a>';
		biggest.style.display = 'none';
        userData.style.display = 'block';
	}
}
submitLogin.addEventListener("click", authenticationLogin );