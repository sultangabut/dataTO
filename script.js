// script.js

document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  const formDataObject = {};
  formData.forEach((value, key) => {
    formDataObject[key] = value;
  });

  // Replace 'YOUR_SPREADSHEET_ID' and 'YOUR_API_KEY' with your actual Google Sheets API credentials
  const spreadsheetId = 'YOUR_SPREADSHEET_ID';
  const apiKey = 'b3113293f86b53a14b9d3a6ddca4779826b2e4c8';

  fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Sheet1!A1:append?valueInputOption=USER_ENTERED&key=${apiKey}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      values: [[formDataObject.name, formDataObject.email]],
    }),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Data sent to Google Sheets:', data);
    // You can add further actions or feedback here
  })
  .catch(error => console.error('Error sending data to Google Sheets:', error));
});