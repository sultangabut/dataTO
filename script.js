$(document).ready(function () {
  $("#googleForm").submit(function (event) {
    event.preventDefault();
    const nama = $("#nama").val();
    const telepon = $("#telepon").val();
    sendDataToGoogleSheets(nama, telepon);
  });
});

function sendDataToGoogleSheets(nama, telepon) {
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
}

function handleClientLoad() {
  gapi.load('client:auth2', initClient);
}

function initClient() {
  gapi.client.init({
    apiKey: 'd49a7652f839837375939aa02aa59d04473e1913',
    clientId: '102717811208183766534',
    discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
    scope: "https://www.googleapis.com/auth/spreadsheets",
  }).then(function () {
    gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
    updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
  });
}

function updateSigninStatus(isSignedIn) {
  if (isSignedIn) {
    sendDataToGoogleSheets(nama, telepon);
  } else {
    $("#googleForm").append('<button id="authorize-button" onclick="handleAuthClick()">Authorize</button>');
  }
}

function handleAuthClick() {
  gapi.auth2.getAuthInstance().signIn();
}