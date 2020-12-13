var a = prompt("Enter the Passowrd");
if(a=="me"){
  document.getElementById("nice").innerHTML = "Nice Guess"
}
else{
    window.location.replace("../index.html");
}