function validation() {
    var valid = true;
    var formLabeles = document.getElementsByTagName("label");
    var firstName = document.myForm.firstName.value;
    if (firstName == "") {
      formLabeles[0].innerHTML = "first name:[Required]";
      formLabeles[0].style.color = "red";
      valid = false;
    } else if (!isNaN(firstName)) {
      formLabeles[0].innerHTML = "first name:[Text only]";
      formLabeles[0].style.color = "red";
      valid = false;
    } else {
      formLabeles[0].innerHTML = "first name";
      formLabeles[0].style.color = "black";
      valid = true;
    }
    var lastName = document.myForm.lastName.value;
    if (lastName == "") {
      formLabeles[1].innerHTML = "last name:[Required]";
      formLabeles[1].style.color = "red";
      valid = false;
    } else if (!isNaN(lastName)) {
      formLabeles[1].innerHTML = "last name:[Text only]";
      formLabeles[1].style.color = "red";
      valid = false;
    } else {
      formLabeles[1].innerHTML = "last name";
      formLabeles[1].style.color = "black";
  
      checkvalid(valid);
    }
    
    var eMail = document.myForm.eMail.value;
    var at = eMail.indexOf("@");
    var dot = eMail.indexOf(".");
    if (eMail == "") {
      formLabeles[2].innerHTML = "Email:[Required]";
      formLabeles[2].style.color = "red";
      valid = false;
    } else if (at == -1 || dot == -1 || at > dot) {
      formLabeles[2].innerHTML = "Email:[In correct E-mail]";
      formLabeles[2].style.color = "red";
      valid = false;
    } else {
      formLabeles[2].innerHTML = "Email";
      formLabeles[2].style.color = "black";
  
      checkvalid(valid);
    }
    var tNumber = document.myForm.tNumber.value;
    if (tNumber == "") {
      formLabeles[3].innerHTML = "Phone Number:[Required]";
      formLabeles[3].style.color = "red";
      valid = false;
    } else if (tNumber.length > 11 || tNumber.length < 11) {
      formLabeles[3].innerHTML = "Phone Number:[Not valid]";
      formLabeles[3].style.color = "red";
      valid = false;
    } else if (isNaN(tNumber)) {
      formLabeles[3].innerHTML = "Phone Number:[Not valid]";
      formLabeles[3].style.color = "red";
      valid = false;
    } else {
      formLabeles[3].innerHTML = "Phone Number";
      formLabeles[3].style.color = "black";
      checkvalid(valid);
    }
    var address = document.myForm.address.value;
    if (tNumber == "") {
      formLabeles[4].innerHTML = "Address:[Required]";
      formLabeles[4].style.color = "red";
      valid = false;
    } else {
      formLabeles[4].innerHTML = "Address";
      formLabeles[4].style.color = "black";
      checkvalid(valid);
    }
    var pass = document.myForm.pass.value;
    var i;
    var regExp = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
    if (pass == "") {
      formLabeles[6].innerHTML = "password:[Required]";
      formLabeles[6].style.color = "red";
      valid = false;
    } else if (pass.length > 8 || pass.length < 8) {
      formLabeles[6].innerHTML = "password:[must be 8digit]";
      formLabeles[6].style.color = "red";
      valid = false;
    } else if (pass.search(/[A-Z]/) != 0) {
      formLabeles[6].innerHTML = "password:[first upper char]";
      formLabeles[6].style.color = "red";
      valid = false;
    } else if (pass.search(/[1-9]/) == -1) {
      formLabeles[6].innerHTML =
        "password:[include 1digit at least]";
      formLabeles[6].style.color = "red";
      valid = false;
    } else if (checkspaces(pass) == 0) {
      formLabeles[6].innerHTML = "password:[spaces not allowed]";
      formLabeles[6].style.color = "red";
      valid = false;
    } else if (!regExp.test(pass)) {
      formLabeles[6].innerHTML = "password:[include special char]";
      formLabeles[6].style.color = "red";
      valid = false;
    } else {
      formLabeles[6].innerHTML = "password";
      formLabeles[6].style.color = "black";
  
      checkvalid(valid);
    }
    return valid;
  }
  
  var input = document.getElementById("pass");
  input.onkeyup = function() {
    var upperCaseLetters = /[A-Z]/g;
    if(input.value.charAt(0).match(upperCaseLetters)) {
       document.getElementById("firstupper").style.color = "#1771F1";
    } else {
      document.getElementById("firstupper").style.color = "black";
  
    }
  
    var pass = document.myForm.pass.value;
    if(pass.length > 8 || pass.length < 8) {
     document.getElementById("ch").style.color = "black";
    }
    else{
      document.getElementById("ch").style.color = "#1771F1";
    }
  
    var numbers = /[0-9]/g;
    if(input.value.match(numbers)) {
      document.getElementById("onedigit").style.color = "#1771F1";
  
    }
    else{
      document.getElementById("onedigit").style.color = "black";
    }
      var special =  /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
    if(input.value.match(special)) {
      document.getElementById("special").style.color = "#1771F1";
  
    }
    else{
      document.getElementById("special").style.color = "black";
    }
    var space =" ";
  if(input.value.match(space)) {
    document.getElementById("space").style.color = "black";
  
  }
  else{
    document.getElementById("space").style.color = "#1771F1";
  }
  
  }
  function checkspaces(pass) {
    var i;
    for (i = 0; i < 8; i++) {
      if (pass[i] == " ") {
        return 0;
      }
    }
    return 1;
  }
  
  function checkvalid(valid) {
    if (valid == false) {
      valid = false;
    } else {
      valid = true;
    }
    return valid;
  }