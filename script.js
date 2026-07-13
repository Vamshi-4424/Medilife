function scrollToAppointment() {
    document
    .getElementById("appointment")
    .scrollIntoView({
        behavior: "smooth"
    });
}

document
.getElementById("appointmentForm")
.addEventListener("submit", function(e){

e.preventDefault();

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let phone=document.getElementById("phone").value;

if(name==""||email==""||phone==""){
alert("Please fill all fields");
return;
}

alert("✅ Appointment Booked Successfully!");

this.reset();

});