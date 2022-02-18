
var okButton = document.getElementById("ok")
var cancel = document.getElementById("cancel")

function loginValidation (){


    const usr=localStorage.getItem("data")

    const regUser =JSON.parse(usr);


    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username== regUser.username && password==regUser.password ) 
{
    window.location="quiz.html"   
}

else if (username==regUser.username&& password!=regUser.password)
{
    document.getElementById("passMessage").innerHTML="wrong password"
}


else if (username=="" || password=="")
{
    alert(" data can't be empty");
}

else if (username!=regUser.username)
{
    document.getElementById("passMessage").innerHTML="user not found"
}

return  username;
}

function reset()
{
    document.forms[0].reset();
    document.getElementById("passMessage").innerHTML=""
}

okButton.addEventListener("click", loginValidation)
cancel.addEventListener("click", reset);



