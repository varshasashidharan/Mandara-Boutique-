/* =========================================================
   MANDARA BOUTIQUE JAVASCRIPT
========================================================= */


/* =========================================================
   IMPORTANT
   Replace this with the boutique's real WhatsApp number.

   Example:
   919876543210

   Do NOT use:
   +91 9876543210
   09876543210
========================================================= */

const WHATSAPP_NUMBER = "919999999999";


/* Instagram */

const INSTAGRAM_USERNAME =
    "_mandara.boutique000._";


/* =========================================================
   MOBILE MENU
========================================================= */

const menuToggle =
    document.getElementById("menuToggle");

const mainNav =
    document.getElementById("mainNav");


if (menuToggle && mainNav) {

    menuToggle.addEventListener(
        "click",
        () => {

            mainNav.classList.toggle("active");

        }
    );


    mainNav
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    mainNav.classList.remove(
                        "active"
                    );

                }
            );

        });

}


/* =========================================================
   WHATSAPP PRODUCT ORDER BUTTONS
========================================================= */

const whatsappButtons =
    document.querySelectorAll(
        ".order-whatsapp"
    );


whatsappButtons.forEach(button => {

    const product =
        button.dataset.product ||
        "a Mandara Boutique product";


    const message =
        `Hi Mandara Boutique, I am interested in the ${product}. Please share the availability and order details.`;


    button.href =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;


    button.target = "_blank";

    button.rel = "noopener";

});


/* =========================================================
   GENERAL WHATSAPP BUTTON
========================================================= */

const generalWhatsapp =
    document.querySelector(
        ".general-whatsapp"
    );


if (generalWhatsapp) {

    const message =
        "Hi Mandara Boutique, I would like to know more about your collections and place an order.";


    generalWhatsapp.href =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;


    generalWhatsapp.target = "_blank";

    generalWhatsapp.rel = "noopener";

}


/* =========================================================
   CURRENT YEAR
========================================================= */

const yearElement =
    document.getElementById("year");


if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}