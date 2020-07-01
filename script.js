function validate() {
    var name = document.getElementById("fname");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var pass = document.getElementById("pass");
    var actmail = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;

    if (name.value == "" || email.value == "" || phone.value == "" || pass.value == "") {
        alert("No fields can be blank");
        if (name.value == "") {
            document.getElementById("errName").innerHTML = "Full Name can't be empty";
        } else if (email.value == "") {
            document.getElementById("errEmail").innerHTML = "Email ID can't be empty";
        } else if (phone.value == "") {
            document.getElementById("errPhone").innerHTML = "Phone Number can't be empty";
        } else if (email.value == "") {
            document.getElementById("errPass").innerHTML = "Password can't be empty";
        }
        return false;
    }  else {
        var atpos = email.value.indexOf("@");
        var dotpos = email.value.lastIndexOf(".");
        if ((atpos < 1 || dotpos < atpos+3 || dotpos+3 >= email.length) || (phone.value.length != 10)) {
            if (atpos < 1 || dotpos < atpos+3 || dotpos+3 >= email.length) {
                document.getElementById("errEmail").innerHTML = "Not a valid email ID";
            }
            if (phone.value.length != 10) {
                var len = phone.value.length;
                document.getElementById("errPhone").innerHTML = "Number should be 10 digits" + len;
            } 
            return false;
        }  else {
            alert("Thanks for registering..." + name.value);
            return true;
        }
        
    }
}