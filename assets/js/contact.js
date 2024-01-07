window.onload = function () {
    document.querySelector('.contact100-form').addEventListener('submit', handleFormSubmit);
    const select1 = document.getElementById('dropDownSelect1');
    const select2 = document.getElementById('dropDownSelect2');
    const labelAccept = document.getElementById('label_accept');
    const checkBox = document.getElementById("check-box");

    select1.addEventListener('change', function () {
        // Clear existing options in select2
        select2.innerHTML = '';

        // Add default disabled option
        var defaultOption = document.createElement('option');
        defaultOption.value = "";
        defaultOption.textContent = "Seleccione una opción";
        defaultOption.disabled = true;
        defaultOption.selected = true;
        select2.appendChild(defaultOption);

        // Define options for select2 and update label_accept text based on select1's value
        var options = [];
        if (this.value === 'construcción') {
            options = ['Casa Habitación', 'Departamentos', 'Comercial', 'Cabin', 'Proyectos de Inversión'];
            labelAccept.innerHTML = "Me interesa contratar los servicios de construcción *";
            checkBox.disabled = false;
        } else if (this.value === 'remodelación') {
            options = ['Habitacional', 'Comercial'];
            labelAccept.innerHTML = "Me interesa contratar los servicios de remodelación *";
            checkBox.disabled = false;
        } else checkBox.disabled = true;

        // Populate select2 with new options
        options.forEach(function (option) {
            var newOption = document.createElement('option');
            newOption.value = option;
            newOption.textContent = option;
            select2.appendChild(newOption);
        });
    });
}

function handleFormSubmit() {

    var serviceCategory = document.getElementById('dropDownSelect1').value;
    var serviceName = document.getElementById('dropDownSelect2').value;
    var name = document.getElementById('first-name').value + ' ' + document.getElementById('last-name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;
    var isProveedor = document.getElementById('proveedor').checked;

    var whatsappMessage = `Hola, me interesan tus servivios de ${serviceCategory} - ${serviceName}. `;
    whatsappMessage += `Mi nombre es ${name}. `;
    whatsappMessage += `Contacto: ${email}, ${phone}. `;
    whatsappMessage += `¿Soy Proveedor?: ${isProveedor?"Sí":"No"}. `;
    whatsappMessage += `Mensaje: ${message}`;

    var encodedMessage = encodeURIComponent(whatsappMessage);
    var whatsappUrl = `https://wa.me/+5215544914411?text=${encodedMessage}`;

    // Open WhatsApp URL in a new tab
    window.open(whatsappUrl, '_blank');
}

function openContactPage(){
    location.href = "Contact.html";
}

