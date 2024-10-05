// Birden fazla markdown dosyasını dinamik olarak yükleyebilmek için
// URL parametrelerinden dosya adını alıyoruz.
function getMarkdownFileName() {
  const urlParams = new URLSearchParams(window.location.search);
  // Eğer file parametresi yoksa, 'using_array.md' dosyasını default olarak al
  return urlParams.get("file") || "using_array.md";
}

// Markdown dosyasını yüklemek ve içerik olarak sayfada göstermek için fetch kullanıyoruz
function loadMarkdownFile(filename) {
  const filePath = `mds/${filename}`; // mds klasöründeki dosyayı alıyoruz

  fetch(filePath)
    .then((response) => {
      if (!response.ok) {
        // Hata mesajı ve detaylar
        console.error(`Error: ${response.status} - ${response.statusText}`);
        throw new Error(`File not found: ${filename}`);
      }
      return response.text();
    })
    .then((text) => {
      // Markdown içeriği gösteriliyor
      document.getElementById("content").innerHTML = marked.parse(text);
    })
    .catch((error) => {
      // Hata durumu için kullanıcıya mesaj
      console.error("Error loading markdown:", error);
      document.getElementById("content").innerHTML =
        "<p>Markdown file could not be loaded.</p>";
    });
}

// Sayfa yüklendiğinde Markdown dosyasını dinamik olarak getiriyoruz
document.addEventListener("DOMContentLoaded", () => {
  const markdownFile = getMarkdownFileName(); // Dosya adını URL parametresinden alıyoruz
  console.log(`Loading markdown file: ${markdownFile}`); // Yüklenecek dosya hakkında bilgi
  loadMarkdownFile(markdownFile);
});
