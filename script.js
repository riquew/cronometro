// Mude a cor da tela para azul e depois para vermelho a cada 2s.

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).

const resetBtn = document.querySelector("[data-reset]");
const actionBtn = document.querySelector("[data-action]");
const visorCronometro = document.querySelector("h1.numero");
let valorMiliSeg = 0;

resetBtn.addEventListener("click", resetaTimer);
actionBtn.addEventListener("click", verificaTimer);

function resetaTimer() {
  valorMiliSeg = 0;
  valorInicial = "0:00:00:00";
  visorCronometro.textContent = valorInicial;
}

function verificaTimer() {
  let miliSeg = visorCronometro.textContent.split(":")[3];
  let seg = visorCronometro.textContent.split(":")[2];
  let min = visorCronometro.textContent.split(":")[1];
  let hora = visorCronometro.textContent.split(":")[0];

  if (this.dataset.action === "off") {
    this.dataset.action = "on";
    const funcionaTimer = setInterval(() => {
      valorMiliSeg++;
      valorMiliSeg < 10
        ? (miliSeg = "0" + valorMiliSeg)
        : (miliSeg = valorMiliSeg);
      if (valorMiliSeg > 99) {
        valorMiliSeg = 0;
        seg++;
        if (seg < 10) seg = "0" + seg;
      }
      if (seg > 59) {
        seg = "00";
        min++;
        if (min < 10) min = "0" + min;
      }
      if (min > 59) {
        min = "00";
        hora++;
      }
      visorCronometro.textContent = `${hora}:${min}:${seg}:${miliSeg}`;
      if (this.dataset.action === "off") clearInterval(funcionaTimer);
    }, 10);
  } else {
    this.dataset.action = "off";
  }
}
