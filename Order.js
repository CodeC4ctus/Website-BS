
document.addEventListener("DOMContentLoaded", function () {

    window.onload = function() {
        var options = ["Bitte Wählen", "Trenbolon Acetate", "Testosterone Cypionate", "SARMS full Stack", "Dianabol", "Anadrol"];
    
        var artikelDropdown = document.createElement("select");
        artikelDropdown.setAttribute("id", "artikelDropdown");
    
        options.forEach(function(option) {
            var opt = document.createElement("option");
            opt.value = option;
            opt.text = option;
            artikelDropdown.appendChild(opt);
        });

        var artikelInput = document.querySelector('input[placeholder="Bitte Artikel eingeben"]');
        artikelInput.parentNode.insertBefore(artikelDropdown, artikelInput.nextSibling);

        artikelInput.parentNode.removeChild(artikelInput);
    };

    const submitButton = document.querySelector('input[type="submit"]');
    const resetButton = document.querySelector('input[type="reset"]');
    const discountButton = document.getElementById("rabatt")

    submitButton.addEventListener("click", function (event) {
        event.preventDefault();
        clearAllFields();
        sendNotification("Bestellung wurde abgeschickt!");
        var mail = document.createElement("a");
        mail.href = "mailto:Rambo-Ramon-Reiner@Ruessel.de";
        mail.click();

    });

    resetButton.addEventListener("click", function (event) {
        event.preventDefault();
        clearAllFields();
        sendNotification("Bestellung wurde abgebrochen.");
    });

    function clearAllFields() {
        const inputFields = document.querySelectorAll('input[type="text"]');
        const radioButtons = document.querySelectorAll('input[type="radio"]');
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');

        inputFields.forEach(function (field) {
            field.value = "";
        });

        radioButtons.forEach(function (radio) {
            radio.checked = false;
        });

        checkboxes.forEach(function (checkbox) {
            checkbox.checked = false;
        });
    }

    function sendNotification(message) {
        alert(message); 
    
    }
    
    if (discountButton) {
        discountButton.addEventListener("click", function(event){
            event.preventDefault();
            applyDiscount();
            sendNotification("Rabatt Angewandt!");
        });
    }
    function applyDiscount() {
            document.getElementById("rabattcode").value = "";
    }
});