
document.querySelector("#form").addEventListener("submit", signupFunction);

        var signup = JSON.parse(localStorage.getItem("signupData")) || []
        
        function signupFunction(){
            event.preventDefault();

            var data = {
                fullName : form.name.value,
                email : form.email.value,
                mobileNo : form.mobile.value,
                password : form.password.value,
            }
            
            signup.push(data)
            console.log(signup);
            localStorage.setItem("signupData", JSON.stringify(signup));
            //window.location.href = "signin.html";

            form.name.value = "";
            form.email.value = "";
            form.mobile.value = "";
            form.password.value = "";
        }
            
            
