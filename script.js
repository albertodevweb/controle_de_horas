document.getElementById("calcular").addEventListener("click", () => {
  const nome = document.getElementById("nome").value;
  const horas = parseFloat(document.getElementById("horas").value);
  const valorHora = parseFloat(document.getElementById("valor-hora").value);

  if (!nome || isNaN(horas) || isNaN(valorHora)) {
    alert("Por favor, preencha todos os campos corretamente.");
    return;
  }

  let salario = 0;

  if (horas > 40) {
    const horasExtras = horas - 40;
    const valorHoraExtra = valorHora * 1.5;
    salario = (40 * valorHora) + (horasExtras * valorHoraExtra);
  } else {
    salario = horas * valorHora;
  }

  document.getElementById("resultado").innerHTML = `
      O funcionário <strong>${nome}</strong> trabalhou <strong>${horas}</strong> horas e receberá <strong>R$ ${salario.toFixed(2)}</strong>.
  `;
});
