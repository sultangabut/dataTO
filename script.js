$(document).ready(function () {
  $("#googleForm").submit(function (event) {
    event.preventDefault();
    const nama = $("#nama").val();
    const telepon = $("#telepon").val();

    // Panggil fungsi untuk mengirim data ke Google Sheets API
    sendDataToGoogleSheets(nama, telepon);
  });
});

function sendDataToGoogleSheets(nama, telepon) {
  // Implementasikan logika untuk mengirim data ke Google Sheets API di sini
  // Gunakan kredensial API dan endpoint yang diberikan oleh Google Sheets API
}

// Load the API client library
gapi.load('client', initClient);

function initClient() {
  // Initialize the API client library and set up sign-in state listeners
  gapi.client.init({
    apiKey: 'd49a7652f839837375939aa02aa59d04473e1913',
    clientId: '102717811208183766534',
    discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
    scope: "https://www.googleapis.com/auth/spreadsheets",
  }).then(function () {
    // Call the Sheets API
    gapi.client.sheets.spreadsheets.values.append({
      spreadsheetId: '1n_kZQZaXrYx2exjILoLZCJPoUxdInlbO3dm8mHM3a60',
      range: 'Sheet1', // Change this to your sheet name
      valueInputOption: 'USER_ENTERED',
      resource: {
        values: [[nama, telepon]],
      },
    }).then(function(response) {
      console.log(response);
      // Handle the response as needed
    }, function(error) {
      console.error('Error appending data: ' + error.result.error.message);
    });
  });
}