// Função para mudar de página
function proximaPagina() {
    window.location.href = "pagina2.html";
}

// Função para salvar o texto
function salvarTexto() {
    const texto = document.querySelector('.texto').value;
    if (texto.trim() !== "") {
        alert("Texto salvo com sucesso! 💜");
    } else {
        alert("Por favor, escreva algo!");
    }
}

// Função para tocar música
function playMusic() {
    const audio = document.getElementById('music');
    audio.play();
}
