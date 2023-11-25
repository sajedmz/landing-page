const popuplist = [
  {
    id: "popup-1",
    title: "Web Development",
    description: `Web Development as a Service (WDaaS) offers a comprehensive
        solution for website creation and maintenance. This approach
        has several benefits:<br />
        1_Scalability: WDaaS allows your website to scale effortlessly,
        accommodating growth and changes in user traffic. This ensures
        a seamless user experience as your site expands.<br />
        2_Efficiency: With WDaaS, you can leverage the expertise of
        professional developers who handle the technical aspects,
        allowing you to focus on your business. This enhances the
        efficiency of your web development processes.<br />
        3_Cost-effectiveness: Outsourcing web development can lead to
        cost savings, as you pay for the specific services you need.
        This eliminates the need for in-house development teams and
        associated overhead costs.`,
    image:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB1UlEQVR4nO2ZsU7DMBRFrwRiZoKKkYHPgIGJ4lfE0C9gg34HhRl+hYUBvqBSB9TC3nZBYqGovmUIslQJqQRiO3aTllzpTXmO78lznh0FqFRSJWhuEOqaUCNCknKHGhLqynj+AWIuFG9QXKOdBrIElZD5yoxSQIo25Rf4VyAomViBlEysKuKgMeq1CdSFbb7JNWNKVZEx6jVC+mbMBNLKhpDWbI6+CwxjgrxDtjXU02yDev5AYyd7zOnW9xh5sRkTFcQHIg8MY4DkgfCFYWiQEBA+MAwJEhLCFYahQGJAuMAwBIiZiJCeT9v0aeOE9MycFQj/XFp+/d9GNsuWYV/28DC27x7Dt99wMC4NhHE2xPwwrl2Q8Y4o/jA+rZxxD43uML77EWOCrMwxfqU+rBYlViAlE/99RbgEAZuyLSmIGhZtiu4xSKtIuwTGErdQl7/8ejMwS1GZgYFI/fVWaU62TxWLVoKTTQ3p2BpzBcnK05CO8ZATorlGyF1IY3756j7Bwbo3CCG3cYy55xPqxhfizKWT5HhY1nNMoc6dbj5FY19DsWwgGvI5gTq0uvEEx7sa8uoywSJDQ940jvYyQTSkW7RZZsN0bUr9WLRRZoZ6sFpelVCcvgCCIfWvVLKM0QAAAABJRU5ErkJggg==",
  },
  {
    id: "popup-2",
    title: "Database management",
    description: "Sajed",
    image:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEu0lEQVR4nO1ZWYgcZRD+XNcNCoJB4oHB2wcTr3gL6j4pw3ZVbwKOGNTg05o38caLXZIX8XgSfVHzotEHXzwwnhAFNaIRsgZP0MSo4HpslN3ZqZpVWsq/2+6ZTbb/cXunO5iCH2b6/7uqvr/qr7+qGlgARRg5rIXgYkWwTsEbBfS8gLYp6EsFfyfgSQHPxmPSntmcrbG1CtqgoBuNh/FCL0nB5wj4XgW9KeBpBUdFjJjXGwK+RzF89qIoHyE8sgVaL6CPi1LcA9hHJtNkFwBgsL8FHlHQT70CoHMA0a8CvjtCfeA/gRAEZwh4Z1kAdK6FdjbBp3cFooXwSgH/Vrbyug/rmG5eIJpYfZqAfi9bad0/mL1N8CkeLkXPla2s5rvZsz5A9h4AQCb/T0B4c/WB0DO5QJoITq3+YR8+GT7UQnCFhboKutQvLdDlXiCmwMdmwvB4hUDsMJ2yOs5LCvpWEK5IUxRar6CJ8kDQhMu5BvudfrxSQbs8gLhMVEC3RagfmiaNPCKgD3t4FraZzCRpNCACukPADZv3ApJhNq4I6xFG+zLzKwV8l4JeE9BUgYobry0CujPxCAdgtE/B1wro0+z6roBkxlcmoIHghOxa53rhhYrgegWPWegW8AcK/tzM7worarlhhRXtsjlbE4f5MXvXeCSuk1ADteVuw/jrfemEPMrZtb8E/I6A7muBL+0UvhCKz+NlArpfQO+arPl0yWXYTdUn4KaAtwvoKQHfrgivs/BoJUCE2rIIwdIIOMQN+11bZnO2RsFrnc/T044HN7txw1wgCnqlvAjFvpHsJd+a3Ht3ej0ENKMIzvLyV0EYFtlYKA4E27XAXiDMn51lhs6zy7Fs5TUd3yiCc7M65rnWCxHqh7sX6gOC8JYyU3tx98tYqlNtiVdhFZtwuyJclVpp9dECurWXuZeAxk2myU51o/MF/InNewGJwcwq6LEZ0Int8+EqAT+g4LeTdKEg/28o6C27R8ytszJnMHSSgB8X0J/Jem8gmZ2xW3lzE3xVknullqoPtBBe4lqmtMHqff+b3XoD1jIN1hmPzr5VhMH+JujqmOdsp15dA2kfNCHgJy2t6ExXiqAGassVfIPJEPDP8+mSy6xLd/lewa8r6BHXUg1D211r17ibPFia8E3+25ylN26tlQj8qPV8Y16RrxvmArGstqwIpf7j1VwgLQQXCEgroGy0H2tINqLmWCWsVzFNEdCMILjGC0RqGbpIQXvKVl7/HbTH6hZvAALelITCCHSEtfQF/EeJrjStoAc7St4nPNzqHxO+Jxg6M3k2hTXHGCB3P/TMAp9ZhWiy000OVwjofZv3AhKDsQP/0DSGjmt3OftmaCUqby3yHLn0nLcKaNTcOivTdFDww9kg5A0kY1qxCtCadtkmhDNzbYmVpwq+qf1jKH+h4N1zb3bebXPpx1DeaO8aD+OFNt6jffF3mk0uUrXr1TWQjvGD5TzW1ei0VBE0jTXHu46JyaAf59Mll1mXBZXt8BYze9z3YnM9S/LcTT58VMLXftszm7M1bi3dbO/Gl7DxKrJm55fLilDqHwhe9AFysGbXKtXsCVW5Zu+aqlizL4iqUrMXSmXU7ItOi1mzHyQc4PQ3+qHlAleXHmwAAAAASUVORK5CYII=",
  },
  {
    id: "popup-3",
    title: "Mobile app development",
    description: "Amirhosein",
    image:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADBElEQVR4nO1aS2tTQRT+6gPxVRWtIFSwWsGFgoKIrtSFcjHnJO0i7lwJCu7UH9Cubbso1pULHwt1oytRfFUEFVRwoQuhFQUFgyCIj/TOXAsjJ5lrglJIcmdumtgDQ28C/b75cu6cOd/cC8xFG4RBfn4EOq7AzxVoSoNNkqFAkQa91eCRH+hfm5KIzCoFepR08jMP+hwhs8uziIF5Gnzfnwj+I8ZrZjToiH8RHIsZ9ibE7y31j5BJj0L4W1pCFCjyJmQm0tmK+98KGUqOS8NNFaJAV6QkJ8U1QIcCXWiSEHpgECxyhW1wbKEG3U5ViAK9MMgvc41vQEsU+GlaQiYMgi77+XARQXdS3Cnk1gsWSmKCLuHwLaQQIrNRrhWIFWhagz4Y5Fc0iin/KxiCpUAs3wmHcMFXaBzaLn8j0B4FLtoMDSbFVaCB8i3LRcGu5vIWIbhXmjpLfN4VrgadtevviwJtgc/4if51GvTeVq2bBnsXuPQ4GnTdZvmjrBtX2H8RBZ0K9NJm4pnBgaXuOfKLFeix5XhtkFvpmKBU4+/GXalPr2DQt1qD39jMPHS2V5V3Xb5sRXwKkdsAz1FE0C2VzGbmmovuQUruiF2E3zWyO5zMtCbezFYF+mrFnEsEpsCnY28Qgg4i5QiR2afAys7hVIMg3FPe8Er36iiaFBo8aoVMy5waAolAJ5qbkez+qoycbNE1ktsWrxEXnieuWpfSrFohuEe47A941UnVquwjfCf9fYTGXXoeS5BdntLO/sRm4pXznT29XotvWOx3woXW7H55LLXuN65a1X5EvERyXB6s+BHeXc3Vgg6Rf6XoEMuePa5a4rNd+IZyk5jNy7Vgp+HZ2+oUxbTNuZb2c9J4sdlnv2Mtf/ar2+w03sxW3LoJfQ34irZ59KZsZ1r7oMkQfZtkyHWdYia8CdHgo40+Yo6dZh3jjOcXBmi8voxwr0Jms31Fo1YRhfjRhUcxQacG3/K4PgoRsju9iqiIQYc0eRp0z0UBKL9UU2oUhwxoTSoi5gJ+4ze4Mo8b6R4F4AAAAABJRU5ErkJggg==",
  },
];

function redirectToGmail() {
  // window.location.href = "https://mail.google.com/";
  window.open("https://mail.google.com/", "_blank");
}
// document.addEventListener('DOMContentLoaded', function () {
//     const popupButtons = document.querySelectorAll('.popup-button');
//     const popupContainer = document.querySelector('.popup-container');

//     popupButtons.forEach(button => {

//         button.addEventListener('click', function () {
//             popupContainer.style.display = 'block';
//         });
//     });

//     const closeButton = document.querySelector('.close-button');
//     closeButton.addEventListener('click', function () {
//         popupContainer.style.display = 'none';
//     });

//     // Close the popup if clicked outside the content
//     popupContainer.addEventListener('click', function (event) {
//         if (event.target === popupContainer) {
//             popupContainer.style.display = 'none';
//         }
//     });
// });

function openPopup(popupId) {
    // debugger 
  let item = popuplist?.find((f) => f.id === popupId);

  if (item) {
    let popupContainer = document.getElementsByClassName("popup-container")[0];

    if (popupContainer) {
      popupContainer.querySelector(".popup-content p").innerHTML =
        item.description;
      popupContainer.getElementsByTagName("img")[0].src = item.image;
      popupContainer.style.display = "block";
    }
  }
}

function closePopup() {
  document.getElementsByClassName("popup-container")[0].style.display = "none";
}
