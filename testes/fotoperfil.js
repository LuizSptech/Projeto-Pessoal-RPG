const input = document.getElementById("inputFoto");
const preview = document.getElementById("preview");

// Carregar imagem salva
const imagemSalva = localStorage.getItem("fotoPerfil");
if (imagemSalva) {
  preview.src = imagemSalva;
}

// Quando selecionar imagem
input.addEventListener("change", () => {
  const file = input.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const base64 = e.target.result;

      // Mostrar imagem
      preview.src = base64;

      // Salvar no navegador
      localStorage.setItem("fotoPerfil", base64);
    };

    reader.readAsDataURL(file);
  }
});