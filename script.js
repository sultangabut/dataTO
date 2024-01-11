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
  };

  $.ajax({
    url: 'https://script.google.com/macros/s/AKfycbx9vxDGlMm8OKgR3axV9AiPYzr-kaZdSmpFhPccz_Ygw2J-iyJj37cJDCoUz2kdFMP_/exec', // Ganti dengan URL Layanan Web Apps yang Anda salin
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(data),
    success: function (response) {
      showSuccessAlert();
    },
    error: function (error) {
      showErrorAlert();
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

function showErrorAlert() {
  Swal.fire({
    icon: 'error',
    title: 'Error!',
    text: 'Terjadi kesalahan. Silakan coba lagi.',
  });
}