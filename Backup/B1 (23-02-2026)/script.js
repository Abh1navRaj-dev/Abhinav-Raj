let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let service = document.getElementById("service").value;

if(name == "") {
    alert("Please enter your name");
    return false;
}
if(email == "") {
    alert("Please enter your email")
    return false;
}
if(service == "") {
    alert("Please select a service")
    return false;
}