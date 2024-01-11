// script.js

$(document).ready(function () {
  $('#submitBtn').click(function () {
    submitForm();
  });
});

function submitForm() {
  const data = {
    nama: $('#nama').val(),
    telepon: $('#telepon').val(),
    rt_rw: $('#rt_rw').val(),
    dusun: $('#dusun').val(),
    desa: $('#desa').val(),
    kecamatan: $('#kecamatan').val(),
    email: $('#email').val(),
    alamat: $('#alamat').val()
  };

  // Memeriksa apakah semua bidang formulir telah diisi
  if (!validateForm(data)) {
    showErrorAlert('Silakan isi semua bidang formulir.');
    return;
  }

  $.ajax({
    url: 'https://script.google.com/macros/s/AKfycbx9vxDGlMm8OKgR3axV9AiPYzr-kaZdSmpFhPccz_Ygw2J-iyJj37cJDCoUz2kdFMP_/exec', // Ganti dengan URL Layanan Web Apps yang Anda salin
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(data),
    success: function (response) {
      showSuccessAlert();
      // Reset formulir setelah pengiriman berhasil
      $('#dataForm')[0].reset();
    },
    error: function (error) {
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
  // Memeriksa apakah semua bidang wajib diisi
  return Object.values(data).every(value => value.trim() !== '');
}