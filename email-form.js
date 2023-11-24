function showAlert(message) {
  window.alert(message);
}

function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "sajedmht1379@gmail.com",
    Password: "FA6C3ADDD36001147437DBD331B432B629E3",
    To: "sajedmht1379@gmail.com",
    From: document.getElementById("email").value,
    Subject: "New contact form",
    Body:
      "Name: " +
      document.getElementById("name").value +
      "<br> Email: " +
      document.getElementById("email").value +
      "<br> phone no: " +
      document.getElementById("phone").value +
      "<br> message: " +
      document.getElementById("message").value,
  }).then(
    showAlert("Message sent successfully")
    // message => alert("Message sent successfully")  // Fixed typo in the alert message
  );
}
// cookie define-----------------------------------------------------------

function cookieSetup() {
  document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();

    let key = document.getElementById("key").value;
    let value = document.getElementById("value").value;

    if (key === "" || value === "") {
      alert("Please fill all the fields");
    } else {
      setCookie(key, value, 365);
    }
  });

  function setCookie(key, value, time) {
    let d = new Date();
    d.setTime(d.getTime() + time * 24 * 60 * 60 * 1000);
    let expires = d.toUTCString();

    // Set the path attribute to '/'
    document.cookie =
      key + "=" + value + ";expires=" + expires + ";path=/email-form.html";
  }
}

