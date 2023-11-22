document.getElementById('numberForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const phoneNumber = document.getElementById('phoneNumber').value;
  var myHeaders = new Headers();
  myHeaders.append("apikey", "SWhWDDjyyZEspPfpFXB2NWtHZ3Eoao22");

  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
  };

  const apiUrl = `https://api.apilayer.com/number_verification/validate?number=${phoneNumber}`;

  fetch(apiUrl, requestOptions)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      return response.json();
    })
    .then(data => {
      const isValid = data.valid;
      const resultContainer = document.getElementById('result');
      resultContainer.classList.remove('valid', 'invalid');
      resultContainer.classList.add(isValid ? 'valid' : 'invalid');
      resultContainer.innerHTML = `
          <p>Number: ${data.number}</p>
          <p>Valid: ${data.valid ? 'Yes' : 'No'}</p>
          <p>Country Code: ${data.countryCode}</p>
        `;
    })
    .catch(error => {
      console.log(error);
      const resultContainer = document.getElementById('result');
      resultContainer.innerHTML = `<p>Error: ${error.message}</p>`;
    });
});
