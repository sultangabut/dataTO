// FormulirDataScript.js

$(document).ready(function () {
  $('#submitBtn').click(function () {
    submitForm();
  });
});

function submitForm() {
  const data = {
    nama: $('#nama').val().trim(),
    telepon: $('#telepon').val().trim(),
    rt_rw: $('#rt_rw').val().trim(),
    dusun: $('#dusun').val().trim(),
    desa: $('#desa').val().trim(),
    kecamatan: $('#kecamatan').val().trim()
  };

  if (validateForm(data)) {
    sendDataToGoogleAppsScript(data);
  } else {
    showErrorAlert('Silakan isi semua bidang formulir.');
  }
}

function sendDataToGoogleAppsScript(data) {
  $.ajax({
    url: 'YOUR_WEB_APP_URL', // Ganti dengan URL Layanan Web Apps yang Anda salin
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(data),
    success: function () {
      showSuccessAlert();
      resetForm();
    },
    error: function () {
      showErrorAlert('Terjadi kesalahan. Silakan coba lagi.');
    }
  });
}

function showSuccessAlert() {
  Swal.fire({
    icon: 'success',
    title: 'Data Terkirim!',
    text: 'Terima kasih atas partisipasi Anda.',
  });
}

function showErrorAlert(message) {
  Swal.fire({
    icon: 'error',
    title: 'Error!',
    text: message,
  });
}

function validateForm(data) {
  // Membuat array bidang yang harus diisi
  const requiredFields = ['nama', 'telepon', 'rt_rw', 'dusun', 'desa', 'kecamatan'];

  // Memeriksa apakah semua bidang wajib diisi
  const isValid = requiredFields.every(field => data[field] !== '');

  if (!isValid) {
    showErrorAlert('Silakan isi semua bidang formulir.');
  }

  return isValid;
}

function resetForm() {
  // Mereset formulir setelah pengiriman berhasil
  $('#dataForm')[0].reset();
}