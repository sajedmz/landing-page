function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "sajedmht1379@gmail.com",
    Password: "SajedooMasi1379$",
    To: "sajedmht1379@gmail.com",
    From: document.getElementById("email").value,
    Subject: "New contact form",
    Body: "Name: " + document.getElementById("name").value
          + "<br> Email: " + document.getElementById("email").value
          + "<br> phone no: " + document.getElementById("phone").value
          + "<br> message: " + document.getElementById("message").value
  }).then((message) => alert("message sent succesfully :)"));
}
