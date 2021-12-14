
// Show and Hide the Password
function ShowHidePassword1() {
    var pass1 = document.getElementById('Password');
    if (pass1.type === "password") {
        pass1.type = "text";
      document.getElementById('hide1').style.display = "inline-block";
      document.getElementById('show1').style.display = "none";
    } 
    else {
        pass1.type = "password";
        document.getElementById('hide1').style.display = "none";
        document.getElementById('show1').style.display = "inline-block";
    }
}
function ShowHidePassword2() {
    var pass2 = document.getElementById('ConfirmationPassword');
    if (pass2.type == "password") {
        pass2.type = "text";
      document.getElementById('hide2').style.display = "inline-block";
      document.getElementById('show2').style.display = "none";
    } 
    else {
        pass2.type = "password";
        document.getElementById('hide2').style.display = "none";
        document.getElementById('show2').style.display = "inline-block";
    }
}

// compare the password with confirmation password
function ComparePassword(){
    var pass1 = document.getElementById('Password');
    var pass2 = document.getElementById('ConfirmationPassword');
    if(pass1.value!=pass2.value && pass2.value!="")
    {
        alert('mot de passe incorrect');
    }
}

//S'INSCRIRE button
function F3(){
    var checkbox=document.getElementById("checkbox1");
    var pass1 = document.getElementById('Password');
    var pass2 = document.getElementById('ConfirmationPassword');
    var FullName = document.getElementById('FullName');
    var AdresseMail = document.getElementById('AdresseMail');

    // check all inputs if they are filled
    if(pass1.value=="" || pass2.value==""|| FullName.value=="" || AdresseMail.value=="")
    {
        alert('remplire tout les champs !!');
    }
    else
    {
        //check if the condition are accepted
        if(checkbox.checked==false)
        {
            alert('vous devez accepter les condition!!');
        }
        else
        {
            //registration succeed
        }
    }

}

//check if number of password caracters is between 4 and 6
function CheckPassword(){
    var pass1 = document.getElementById('Password');
    if(pass1.value.length<4 || pass1.value.length>6)
    {
        document.getElementById('label').innerText="Le mot de passe doit comporter entre 4 et 6 caracteres"
    }
    else
    {
        document.getElementById('label').innerText=""; 
    }
}