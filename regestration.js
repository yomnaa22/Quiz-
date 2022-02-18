

// var data=[];

function validateForm() {
    var regUser={};
    const username = document.getElementById("username").value;
    const password = document.getElementById("userpass").value;
    const confirmpass = document.getElementById("userpass2").value;
    const email = document.getElementById("email").value;
    const gender1=document.getElementById("male").checked;
    const gender2=document.getElementById("female").checked;


    if (username == "" ||  /^([a-zA-z]{5,})$/.test(username)==false) {
        document.getElementsByTagName("p")[0].innerText="Username must be string at least 5 characters"
      return false;
    }
    else{
    document.getElementsByTagName("p")[0].innerText=""
  
    }

    if (password == "" || /^([a-zA-z1-9]{8,})$/.test(password)==false) {
        document.getElementsByTagName("p")[1].innerText="password must be string at least 8 characters"
      return false;
    }
    else{
    document.getElementsByTagName("p")[1].innerText="" 

    }

    if(confirmpass==""){
        document.getElementsByTagName("p")[2].innerText="please enter matching password"
        return false;
    }
    else if (confirmpass != password ) {
        document.getElementsByTagName("p")[2].innerText="not match password"
      return false;
    }
    else{
    document.getElementsByTagName("p")[2].innerText=""
    }


    if (email == "" || /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(email)==false) {
      document.getElementsByTagName("p")[3].innerText="please enter correct Email address"
    return false;
  }
  else{

    document.getElementsByTagName("p")[3].innerText=""
  }  
      
    regUser.username=username;
    regUser.emaill=email;
    regUser.password=password;

    if (gender1 == false && gender2 == false) {
        document.getElementsByTagName("p")[4].innerText="please your gender"
      return false;
    }
    else if(gender1 == true){
      regUser.gender="male";
      document.getElementsByTagName("p")[4].innerText=""
      }       
    else if(gender2 == true){
        regUser.gender="female";
        document.getElementsByTagName("p")[4].innerText=""
        }   
    

    const data =JSON.stringify(regUser);
    localStorage.setItem("data",data)

  }
  
