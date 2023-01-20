var form = document.querySelector("#form") 

var userData = JSON.parse(localStorage.getItem("signupData"))

document.getElementById("Profile_login").addEventListener("click", myFunction);
var profilename='Profile';
form.addEventListener("submit",function(event){
    event.preventDefault()
    var loginObj={
        userId: form.tel.value,
        userPaswd: form.pswd.value
        }

        if(loginObj.userId != "" && loginObj.userPaswd !="" && userData != null){
            var flag = false;
            userData.forEach(element => {
                
                if(flag==false && (element.userEmail== loginObj.userId || element.userMob == loginObj.userId) && (element.userPassword==loginObj.userPaswd) )
                {
                    alert("Signin Successful")
                    
                    profilename = element.userName;
                    
                    window.location.href="../index.html"
                    flag = true;
                    
                }
                else{
                    alert("Invalid userid or password");
                    window.location.href="./signin.html"
                }
            });
        }else if(loginObj.userId == "" && loginObj.userPaswd ==""){
            alert("Please enter All details")
        }else if(userData == null){
            alert("Please signup first...!")
            window.location.href="./signup.html"
        }
        

})

function myFunction(){
    if(flag==true){
        var name = document.getElementsByClassName("Profile_title").value
        name = profilename 
    }
}
