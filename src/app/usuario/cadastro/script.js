document.addEventListener("DOMContentLoaded", () => {

    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("senha");
    const nomeInput = document.getElementById("nome");
    const departamentoInput = document.getElementById("departamento");
    const cursoInput = document.getElementById("curso");
    const loginButton = document.querySelector("button[type='submit']");
  
   
    function handleLogin(event) {

      event.preventDefault();
  

      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
      const nome = nomeInput.value.trim();
      const departamento = departamentoInput.value.trim();
      const curso = cursoInput.value.trim();

      
      if (!email || !password || !nome || !departamento || !curso) {
        alert("Por favor, preencha todos os campos.");
      } else {
        alert(`Email: ${email}\nSenha: ${password}`);
      }
    }
    
    const payload = {
      email,
      password,
      nome,
      departamento,
      curso,
    };

    loginButton.addEventListener("click", handleLogin);
  });