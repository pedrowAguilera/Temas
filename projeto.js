// Localiza o botão no HTML
const trocarTema = document.getElementById('trocar-tema');
// Localiza o body no HTML
const header = document.header;


trocarTema.addEventListener('click', () => {
    header.classList.toggle('tema-escuro');
})