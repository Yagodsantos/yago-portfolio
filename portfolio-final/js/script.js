const form = document.querySelector("#contact-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nome = document.querySelector("#nome").value.trim();
  const email = document.querySelector("#email").value.trim();
  const mensagem = document.querySelector("#mensagem").value.trim();

  const formData = {
    name: nome,
    email: email,
    message: mensagem,
  };

  try {
    const response = await fetch("https://formspree.io/f/movlalkp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Mensagem enviada com sucesso!");
      form.reset();
    } else {
      const errorData = await response.json();
      console.error("Erro:", errorData);
      alert("Erro ao enviar. Tente novamente.");
    }
  } catch (error) {
    console.error("Erro de rede:", error);
    alert("Erro de rede. Verifique sua conexão.");
  }
});
