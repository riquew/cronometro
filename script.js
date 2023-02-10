// Mude a cor da tela para azul e depois para vermelho a cada 2s.

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).

const resetBtn = document.querySelector("[data-reset]");
const actionBtn = document.querySelector("[data-action]");
const visorCronometro = document.querySelector("h1.numero");
let valorVisor = 0;

resetBtn.addEventListener("click", resetaTimer);
actionBtn.addEventListener("click", verificaTimer);

function resetaTimer() {
  valorVisor = 0;
  visorCronometro.textContent = valorVisor;
}

function verificaTimer() {
  if (this.dataset.action === "off") {
    this.dataset.action = "on";
    const funcionaTimer = setInterval(() => {
      valorVisor++;
      visorCronometro.textContent = valorVisor;
      if (this.dataset.action === "off") clearInterval(funcionaTimer);
    }, 1000);
  } else {
    this.dataset.action = "off";
  }
}
