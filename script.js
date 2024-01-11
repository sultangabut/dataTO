const spreadsheetId = '1n_kZQZaXrYx2exjILoLZCJPoUxdInlbO3dm8mHM3a60';
const range = 'TRENGGALEK'; // SESUAIKAN
const apiKey = '3ddcca91c448871e1eab4b78fbdaf306c32773f2';

const sheetsEndpoint = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;

function submitForm() {
  const formData = {
    nama: document.getElementById('nama').value,
    telepon: document.getElementById('telepon').value,
    rt_rw: document.getElementById('rt_rw').value,
    dusun: document.getElementById('dusun').value,
    desa: document.getElementById('desa').value,
    kecamatan: document.getElementById('kecamatan').value
  };

  fetch(sheetsEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      console.log('Data berhasil dikirim ke Google Sheets:', data.message);
      // Tampilkan pesan sukses ke pengguna jika diperlukan
      alert('Data berhasil dikirim! Terima kasih.');
    } else {
      console.error('Gagal mengirim data ke Google Sheets:', data.error);
      // Tampilkan pesan kesalahan ke pengguna jika diperlukan
      alert('Maaf, terjadi kesalahan. Silakan coba lagi nanti.');
    }
  })
  .catch(error => {
    console.error('Gagal mengirim data ke Google Sheets:', error);
    // Tampilkan pesan kesalahan ke pengguna jika diperlukan
    alert('Maaf, terjadi kesalahan. Silakan coba lagi nanti.');
  });
}