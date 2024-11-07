// Seleciona o elemento nav
const nav = document.querySelector("nav");

// Adiciona um evento de rolagem para o corpo da página
window.addEventListener("scroll", () => {
  // Verifica se a posição de rolagem é maior que 0
  if (window.scrollY > 0) {
    // Adiciona a classe "scrolled" ao elemento nav
    nav.classList.add("scrolled");
  } else {
    // Remove a classe "scrolled" do elemento nav
    nav.classList.remove("scrolled");
  }
});