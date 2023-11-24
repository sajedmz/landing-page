function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "sajedmht1379@gmail.com",
    Password: "FA6C3ADDD36001147437DBD331B432B629E3",
    To: "sajedmht1379@gmail.com",
    From: document.getElementById("email").value,
    Subject: "New contact form",
    Body: "Name: " + document.getElementById("name").value
          + "<br> Email: " + document.getElementById("email").value
          + "<br> phone no: " + document.getElementById("phone").value
          + "<br> message: " + document.getElementById("message").value
  }).then((message) => alert("message sent succesfully :)"));
}
// FA6C3ADDD36001147437DBD331B432B629E3
// smtp.elasticemail.com