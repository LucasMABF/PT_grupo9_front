document.addEventListener("DOMContentLoaded", () => {

    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const loginButton = document.querySelector("button[type='submit']");
  
   
    function handleLogin(event) {

      event.preventDefault();
  

      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
  


      
      if (!email || !password) {
        alert("Por favor, preencha todos os campos.");
      } else {
        alert(`Email: ${email}\nSenha: ${password}`);
      }
    }

    loginButton.addEventListener("click", handleLogin);
  });