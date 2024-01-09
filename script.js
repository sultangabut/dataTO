function submitForm() {
  const formData = new FormData(document.getElementById("myForm"));
  const jsonData = {};
  formData.forEach((value, key) => {
    jsonData[key] = value;
  });

  // Kirim data ke spreadsheet menggunakan Google Sheets API atau backend lainnya
  // Implementasikan sesuai kebutuhan Anda
}