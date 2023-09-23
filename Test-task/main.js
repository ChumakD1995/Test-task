const phoneNumberInput = document.getElementById('phoneNumber');
const iti = window.intlTelInput(phoneNumberInput, {
    utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/utils.js',
    preferredCountries: ['ua'], 
    separateDialCode: true,
    initialCountry: 'auto',
    geoIpLookup: function (success, failure) {
        
        fetch('https://ipinfo.io', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => {
                const countryCode = data.country;
                success(countryCode);
            })
            .catch(failure);
    },
});

const form = document.getElementById('myForm');
const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', function () {

  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;

  if (!firstName || !lastName || !email) {
    alert('Por favor preencha todos os campos obrigatórios do formulário.');  
    return;
  }

  window.open('secondpage.html', '_blank');
});