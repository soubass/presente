console.log("✅ script.js carregado com sucesso!");

window.onload = function () {
  // ===============================
  // CONTADOR DE TEMPO DE VIDA
  // ===============================
  function atualizarContador() {
    const nascimento = new Date("2007-07-21T10:00:00");
    const agora = new Date();

    let anos = agora.getFullYear() - nascimento.getFullYear();
    let meses = agora.getMonth() - nascimento.getMonth();
    let dias = agora.getDate() - nascimento.getDate();
    let horas = agora.getHours() - nascimento.getHours();
    let minutos = agora.getMinutes() - nascimento.getMinutes();
    let segundos = agora.getSeconds() - nascimento.getSeconds();

    if (segundos < 0) {
      segundos += 60;
      minutos--;
    }
    if (minutos < 0) {
      minutos += 60;
      horas--;
    }
    if (horas < 0) {
      horas += 24;
      dias--;
    }
    if (dias < 0) {
      const diasMesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0).getDate();
      dias += diasMesAnterior;
      meses--;
    }
    if (meses < 0) {
      meses += 12;
      anos--;
    }

    document.getElementById("anos").textContent = anos;
    document.getElementById("meses").textContent = meses;
    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;
  }

  // ===============================
  // APLICAR TEMA AUTOMÁTICO PELO HORÁRIO
  // ===============================
  function aplicarTemaAutomatico() {
    const hora = new Date().getHours();
    if (hora >= 6 && hora < 18) {
      document.body.classList.remove("tema2");
    } else {
      document.body.classList.add("tema2");
    }
  }

  // ===============================
  // BOTÃO: MUDAR TEMA MANUALMENTE
  // ===============================
  function alternarTema() {
    document.body.classList.toggle("tema2");
  }

  const botaoTema = document.getElementById("botaoTema");
  if (botaoTema) {
    botaoTema.addEventListener("click", alternarTema);
  }

  // ===============================
  // GALERIA DE FOTOS (LIGHTBOX)
  // ===============================
  const imagens = document.querySelectorAll(".fotos img");
  const lightbox = document.getElementById("lightbox");
  const imgAmpliada = document.getElementById("imgAmpliada");
  const fechar = document.querySelector(".fechar");

  imagens.forEach((img) => {
    img.addEventListener("click", () => {
      imgAmpliada.src = img.src;
      imgAmpliada.style.animation = "none";
      imgAmpliada.offsetWidth; // força o reset da animação
      imgAmpliada.style.animation = "zoomIn 0.5s ease";
      lightbox.style.display = "block";
    });
  });

  fechar.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });

  // ===============================
  // INICIAR CONTADOR E TEMA AUTOMÁTICO
  // ===============================
  setInterval(atualizarContador, 1000);
  atualizarContador();
  aplicarTemaAutomatico();
};
