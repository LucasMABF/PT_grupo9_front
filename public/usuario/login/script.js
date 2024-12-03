document.addEventListener("DOMContentLoaded", () => {
    // Seleciona os elementos da página
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const loginButton = document.querySelector("button[type='submit']");
  
    // Função para capturar os valores e exibir no console
    function handleLogin(event) {
      // Previne o envio do formulário (para testes)
      event.preventDefault();
  
      // Captura os valores dos campos
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
  
      // Exibe os valores no console
      console.log("Email:", email);
      console.log("Senha:", password);
  
      // Validação simples
      if (!email || !password) {
        alert("Por favor, preencha todos os campos.");
      } else {
        alert(`Email: ${email}\nSenha: ${password}`);
      }
    }
  
    // Adiciona o evento de clique no botão "Entrar"
    loginButton.addEventListener("click", handleLogin);
  });