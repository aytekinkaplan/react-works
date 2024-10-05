// Birden fazla markdown dosyasını dinamik olarak yükleyebilmek için
// URL parametrelerinden dosya adını alıyoruz.
function getMarkdownFileName() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("file") || "default.md"; // 'file' parametresi yoksa default olarak 'default.md' yükle
}

// Markdown dosyasını yüklemek ve içerik olarak sayfada göstermek için fetch kullanıyoruz
function loadMarkdownFile(filename) {
  fetch(filename)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Dosya bulunamadı: ${filename}`);
      }
      return response.text();
    })
    .then((text) => {
      document.getElementById("content").innerHTML = marked.parse(text);
    })
    .catch((error) => {
      console.error("Markdown yükleme hatası:", error);
      document.getElementById("content").innerHTML =
        "<p>Markdown dosyası yüklenemedi.</p>";
    });
}

// Sayfa yüklendiğinde Markdown dosyasını dinamik olarak getiriyoruz
document.addEventListener("DOMContentLoaded", () => {
  const markdownFile = getMarkdownFileName(); // Dosya adını URL parametresinden alıyoruz
  loadMarkdownFile(markdownFile);
});
