function redirectToGmail() {
  // window.location.href = "https://mail.google.com/";
  window.open("https://mail.google.com/", "_blank");
}
document.addEventListener('DOMContentLoaded', function () {
    const popupButtons = document.querySelectorAll('.popup-button');
    const popupContainer = document.querySelector('.popup-container');

    popupButtons.forEach(button => {
        button.addEventListener('click', function () {
            popupContainer.style.display = 'block';
        });
    });

    const closeButton = document.querySelector('.close-button');
    closeButton.addEventListener('click', function () {
        popupContainer.style.display = 'none';
    });

    // Close the popup if clicked outside the content
    popupContainer.addEventListener('click', function (event) {
        if (event.target === popupContainer) {
            popupContainer.style.display = 'none';
        }
    });
});
