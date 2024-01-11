// /script.js

const spreadsheetId = '1n_kZQZaXrYx2exjILoLZCJPoUxdInlbO3dm8mHM3a60';
const range = 'TRENGGALEK'; // SESUAIKAN
const apiKey = '3ddcca91c448871e1eab4b78fbdaf306c32773f2';

const sheetsEndpoint = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;

function submitForm() {
  const formData = {
    nama: $('#nama').val(),
    telepon: $('#telepon').val(),
    rt_rw: $('#rt_rw').val(),
    dusun: $('#dusun').val(),
    desa: $('#desa').val(),
    kecamatan: $('#kecamatan').val()
  };

  fetch(sheetsEndpoint, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(response => response.json())
  .then(data => {
    console.log('Data dari Google Sheets:', data);
    
    // Tampilkan respons menggunakan Bootstrap dan jQuery
    if (data.success) {
      $('#response-message').html(`<div class="alert alert-success" role="alert">${data.message}</div>`);
    } else {
      $('#response-message').html(`<div class="alert alert-danger" role="alert">${data.error}</div>`);
    }
  })
  .catch(error => {
    console.error('Gagal membaca data dari Google Sheets:', error);
    
    // Tampilkan pesan kesalahan menggunakan Bootstrap dan jQuery
    $('#response-message').html('<div class="alert alert-danger" role="alert">Maaf, terjadi kesalahan. Silakan coba lagi nanti.</div>');
  });
}