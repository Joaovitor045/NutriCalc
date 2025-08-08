function calcular() {
  let alimentos = [
    { id: 'arrozBrancoCozido', cal: 1.28, proteina: 0.025, carbo: 0.281, lipidio: 0.002, fibras: 0.016, calcio: 0.04, zinco: 0.0005, tiamina: 0 },
    { id: 'BoloProntoChocolate', cal: 4.10, proteina: 0.062, carbo: 0.547, lipidio: 0.185, fibras: 0.014, calcio: 0.075, zinco: 0.0007, tiamina: 0.0013 },
    { id: 'paoFrances', cal: 3.00, proteina: 0.08, carbo: 0.086, lipidio: 0.031, fibras: 0.023, calcio: 1.6, zinco: 0.0008, tiamina: 0.0039 },
    { id: 'paoForma', cal: 2.53, proteina: 0.12, carbo: 0.441, lipidio: 0.027, fibras: 0.025, calcio: 1.56, zinco: 0.0013, tiamina: 0.0004 },
    { id: 'alfaceAmericana', cal: 0.09, proteina: 0.006, carbo: 0.000, lipidio: 0.001, fibras: 0.01, calcio: 1.4, zinco: 0.0002, tiamina: 0.0003 },
    { id: 'beterrabaCozida', cal: 0.32, proteina: 0.013, carbo: 0.072, lipidio: 0.001, fibras: 0.019, calcio: 0.15, zinco: 0.0004, tiamina: 0.0009 },
    { id: 'folhaMostarda', cal: 0.18, proteina: 0.021, carbo: 0.000, lipidio: 0.002, fibras: 0.019, calcio: 0.68, zinco: 0.0003, tiamina: 0.0005 },
    { id: 'tomateCru', cal: 0.15, proteina: 0.011, carbo: 0.031, lipidio: 0.002, fibras: 0.012, calcio: 0.07, zinco: 0.0001, tiamina: 0.0012 },
    { id: 'bananaPrata', cal: 0.98, proteina: 0.013, carbo: 0.26, lipidio: 0.001, fibras: 0.02, calcio: 0.08, zinco: 0.0001, tiamina: 0.0005 },
    { id: 'macaFuji', cal: 0.56, proteina: 0.003, carbo: 0.152, lipidio: 0.000, fibras: 0.013, calcio: 0.02, zinco: 0.000, tiamina: 0.000 },
    { id: 'uvaItalia', cal: 0.53, proteina: 0.007, carbo: 0.136, lipidio: 0.002, fibras: 0.009, calcio: 0.07, zinco: 0.000, tiamina: 0.000 },
    { id: 'azeite', cal: 8.84, proteina: 0.000, carbo: 1.00, lipidio: 0.000, fibras: 0.000, calcio: 0.00, zinco: 0.000, tiamina: 0.0000 },
    { id: 'acemCozido', cal: 2.12, proteina: 0.267, carbo: 0.0, lipidio: 0.109, fibras: 0.000, calcio: 0.04, zinco: 0.0081, tiamina: 0.000 },
    { id: 'lagartoCozido', cal: 2.22, proteina: 0.329, carbo: 0.0, lipidio: 0.091, fibras: 0.000, calcio: 0.04, zinco: 0.007, tiamina: 0.000 },
    { id: 'FrangoSemPeleCozido', cal: 1.63, proteina: 0.315, carbo: 0.0, lipidio: 0.032, fibras: 0.000, calcio: 0.06, zinco: 0.0009, tiamina: 0.0010 },
    { id: 'queijoMussarela', cal: 3.30, proteina: 0.226, carbo: 0.03, lipidio: 0.252, fibras: 0.000, calcio: 8.75, zinco: 0.0035, tiamina: 0.000 },
    { id: 'cuscuzMilho', cal: 1.13, proteina: 0.022, carbo: 0.253, lipidio: 0.007, fibras: 0.021, calcio: 0.02, zinco: 0.0002, tiamina: 0.000 },
    { id: 'feijaoCariocaCozido', cal: 0.76, proteina: 0.048, carbo: 0.136, lipidio: 0.005, fibras: 0.085, calcio: 0.27, zinco: 0.0007, tiamina: 0.0004 },
    { id: 'melao', cal: 0.29, proteina: 0.007, carbo: 0.075, lipidio: 0.000, fibras: 0.003, calcio: 0.03, zinco: 0.0001, tiamina: 0.000 }
  ];

  let totalCalorias = 0;
  let totalProteina = 0;
  let totalCarbo = 0;
  let totalLipidio = 0;
  let totalFibras = 0;
  let totalCalcio = 0;
  let totalZinco = 0;
  let totalTiamina = 0;

  alimentos.forEach(alimento => {
    let qtd = parseFloat(document.getElementById(alimento.id).value) || 0;
    totalCalorias += qtd * alimento.cal;
    totalProteina += qtd * alimento.proteina;
    totalCarbo += qtd * alimento.carbo;
    totalLipidio += qtd * alimento.lipidio;
    totalFibras += qtd * alimento.fibras;
    totalCalcio += qtd * alimento.calcio;
    totalZinco += qtd * alimento.zinco;
    totalTiamina += qtd * alimento.tiamina;
  });

  document.getElementById('resultado').innerText =
    'Total de Calorias: ' + totalCalorias.toFixed(2) + ' kcal';
  
  document.getElementById('resultado1').innerText =
    'Total de Proteína: ' + totalProteina.toFixed(3) + ' g';
  
  document.getElementById('resultado2').innerText =
    'Total de Carboidratos: ' + totalCarbo.toFixed(3) + ' g';
  
  document.getElementById('resultado3').innerText =
    'Total de Lipídios: ' + totalLipidio.toFixed(3) + ' g';

  document.getElementById('resultado4').innerText =
    'Total de Fibras: ' + totalFibras.toFixed(3) + ' g';

  document.getElementById('resultado5').innerText =
    'Total de Cálcio: ' + totalCalcio.toFixed(5) + ' mg';

  document.getElementById('resultado6').innerText =
    'Total de Zinco: ' + totalZinco.toFixed(5) + ' mg';

  document.getElementById('resultado7').innerText =
    'Total de Tiamina: ' + totalTiamina.toFixed(5) + ' mg';
}