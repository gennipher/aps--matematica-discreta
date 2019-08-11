import {calculaPermutacao, calculaArranjo, calculaCombinatoria} from "@/utils/calc.js"

describe('Calcula permutacao', () => {


  it('deve fatorar o numero', () => {
    let resultado = 1
    let n = 4
    for (let x = n; x > 1; x--) {
      resultado = resultado * x
    }
    expect(resultado).toBe(24)
  });

  it('deve fatorar o numero', () => {
    let resultado = 1
    let n = 1
    for (let x = n; x > 1; x--) {
      resultado = resultado * x
    }
    expect(resultado).toBe(1)
  });

  it('deve fatorar o numero', () => {
    let resultado = 1
    let n = 0
    for (let x = n; x > 1; x--) {
      resultado = resultado * x
    }
    expect(resultado).toBe(1)
  });

  it('deve fatorar o numero', () => {
    let resultado = 1
    let n = 5
    for (let x = n; x > 1; x--) {
      resultado = resultado * x
    }
    expect(resultado).toBe(120)
  });

  it('deve fatorar o numero', () => {
    let resultado = 1
    let n = undefined
    for (let x = n; x > 1; x--) {
      resultado = resultado * x
    }
    expect(resultado).toBeUndefined
  });

  it('deve fatorar o numero', () => {
    let resultado = 1
    let n = null
    for (let x = n; x > 1; x--) {
      resultado = resultado * x
    }
    expect(resultado).toBeNull
  });

  it('deve fatorar o numero', () => {
    let resultado = 1
    let n = NaN
    for (let x = n; x > 1; x--) {
      resultado = resultado * x
    }
    expect(resultado).toBeNaN
  });

})

describe('Calcula arranjo', () => {

  it('deve calcular o arranjo de n e p', () => {
    let resultadoDeN = 1
    let n = 3
    let p = 2
    for (let x = n; x > 1; x--) {
      resultadoDeN = resultadoDeN * x
    }
    let denominador = n - p
    let resultadoDenominador = 1
    for (let y = denominador; y >= 1; y--) {
      resultadoDenominador = resultadoDenominador * y
    }
    let resultadoFinal = resultadoDeN / resultadoDenominador
    expect(resultadoFinal).toBe(6)
  });

  it('deve calcular o arranjo de n e p', () => {
    let resultadoDeN = 1
    let n = 1
    let p = 1
    for (let x = n; x > 1; x--) {
      resultadoDeN = resultadoDeN * x
    }
    let denominador = n - p
    let resultadoDenominador = 1
    for (let y = denominador; y >= 1; y--) {
      resultadoDenominador = resultadoDenominador * y
    }
    let resultadoFinal = resultadoDeN / resultadoDenominador
    expect(resultadoFinal).toBe(1)
  });

  it('deve calcular o arranjo de n e p', () => {
    let resultadoDeN = 1
    let n = 0
    let p = 0
    for (let x = n; x > 1; x--) {
      resultadoDeN = resultadoDeN * x
    }
    let denominador = n - p
    let resultadoDenominador = 1
    for (let y = denominador; y >= 1; y--) {
      resultadoDenominador = resultadoDenominador * y
    }
    let resultadoFinal = resultadoDeN / resultadoDenominador
    expect(resultadoFinal).toBe(1)
  });

  it('deve calcular o arranjo de n e p', () => {
    let resultadoDeN = 1
    let n = 1
    let p = 0
    for (let x = n; x > 1; x--) {
      resultadoDeN = resultadoDeN * x
    }
    let denominador = n - p
    let resultadoDenominador = 1
    for (let y = denominador; y >= 1; y--) {
      resultadoDenominador = resultadoDenominador * y
    }
    let resultadoFinal = resultadoDeN / resultadoDenominador
    expect(resultadoFinal).toBe(1)
  });

  it('deve calcular o arranjo de n e p', () => {
    let resultadoDeN = 1
    let n = 0
    let p = 1
    for (let x = n; x > 1; x--) {
      resultadoDeN = resultadoDeN * x
    }
    let denominador = n - p
    let resultadoDenominador = 1
    for (let y = denominador; y >= 1; y--) {
      resultadoDenominador = resultadoDenominador * y
    }
    let resultadoFinal = resultadoDeN / resultadoDenominador
    expect(resultadoFinal).toBeUndefined
  });

  it('deve calcular o arranjo de n e p', () => {
    let resultadoDeN = 1
    let n = null
    let p = 1
    for (let x = n; x > 1; x--) {
      resultadoDeN = resultadoDeN * x
    }
    let denominador = n - p
    let resultadoDenominador = 1
    for (let y = denominador; y >= 1; y--) {
      resultadoDenominador = resultadoDenominador * y
    }
    let resultadoFinal = resultadoDeN / resultadoDenominador
    expect(resultadoFinal).toBeUndefined
  });

  it('deve calcular o arranjo de n e p', () => {
    let resultadoDeN = 1
    let n = undefined
    let p = 1
    for (let x = n; x > 1; x--) {
      resultadoDeN = resultadoDeN * x
    }
    let denominador = n - p
    let resultadoDenominador = 1
    for (let y = denominador; y >= 1; y--) {
      resultadoDenominador = resultadoDenominador * y
    }
    let resultadoFinal = resultadoDeN / resultadoDenominador
    expect(resultadoFinal).toBeUndefined
  });

  it('deve calcular o arranjo de n e p', () => {
    let resultadoDeN = 1
    let n = NaN
    let p = 1
    for (let x = n; x > 1; x--) {
      resultadoDeN = resultadoDeN * x
    }
    let denominador = n - p
    let resultadoDenominador = 1
    for (let y = denominador; y >= 1; y--) {
      resultadoDenominador = resultadoDenominador * y
    }
    let resultadoFinal = resultadoDeN / resultadoDenominador
    expect(resultadoFinal).toBeUndefined
  });

  it('deve calcular o arranjo de n e p', () => {
    let resultadoDeN = 1
    let n = 1
    let p = null
    for (let x = n; x > 1; x--) {
      resultadoDeN = resultadoDeN * x
    }
    let denominador = n - p
    let resultadoDenominador = 1
    for (let y = denominador; y >= 1; y--) {
      resultadoDenominador = resultadoDenominador * y
    }
    let resultadoFinal = resultadoDeN / resultadoDenominador
    expect(resultadoFinal).toBeUndefined
  });

  it('deve calcular o arranjo de n e p', () => {
    let resultadoDeN = 1
    let n = 0
    let p = undefined
    for (let x = n; x > 1; x--) {
      resultadoDeN = resultadoDeN * x
    }
    let denominador = n - p
    let resultadoDenominador = 1
    for (let y = denominador; y >= 1; y--) {
      resultadoDenominador = resultadoDenominador * y
    }
    let resultadoFinal = resultadoDeN / resultadoDenominador
    expect(resultadoFinal).toBeUndefined
  });

  it('deve calcular o arranjo de n e p', () => {
    let resultadoDeN = 1
    let n = null
    let p = undefined
    for (let x = n; x > 1; x--) {
      resultadoDeN = resultadoDeN * x
    }
    let denominador = n - p
    let resultadoDenominador = 1
    for (let y = denominador; y >= 1; y--) {
      resultadoDenominador = resultadoDenominador * y
    }
    let resultadoFinal = resultadoDeN / resultadoDenominador
    expect(resultadoFinal).toBeUndefined
  });

  it('deve calcular o arranjo de n e p', () => {
    let resultadoDeN = 1
    let n = null
    let p = null
    for (let x = n; x > 1; x--) {
      resultadoDeN = resultadoDeN * x
    }
    let denominador = n - p
    let resultadoDenominador = 1
    for (let y = denominador; y >= 1; y--) {
      resultadoDenominador = resultadoDenominador * y
    }
    let resultadoFinal = resultadoDeN / resultadoDenominador
    expect(resultadoFinal).toBeNull
  });

  it('deve calcular o arranjo de n e p', () => {
    let resultadoDeN = 1
    let n = undefined
    let p = undefined
    for (let x = n; x > 1; x--) {
      resultadoDeN = resultadoDeN * x
    }
    let denominador = n - p
    let resultadoDenominador = 1
    for (let y = denominador; y >= 1; y--) {
      resultadoDenominador = resultadoDenominador * y
    }
    let resultadoFinal = resultadoDeN / resultadoDenominador
    expect(resultadoFinal).toBeNull
  });

  it('deve calcular o arranjo de n e p', () => {
    let resultadoDeN = 1
    let n = null
    let p = null
    for (let x = n; x > 1; x--) {
      resultadoDeN = resultadoDeN * x
    }
    let denominador = n - p
    let resultadoDenominador = 1
    for (let y = denominador; y >= 1; y--) {
      resultadoDenominador = resultadoDenominador * y
    }
    let resultadoFinal = resultadoDeN / resultadoDenominador
    expect(resultadoFinal).toBeUndefined
  });

  it('deve calcular o arranjo de n e p', () => {
    let resultadoDeN = 1
    let n = NaN
    let p = null
    for (let x = n; x > 1; x--) {
      resultadoDeN = resultadoDeN * x
    }
    let denominador = n - p
    let resultadoDenominador = 1
    for (let y = denominador; y >= 1; y--) {
      resultadoDenominador = resultadoDenominador * y
    }
    let resultadoFinal = resultadoDeN / resultadoDenominador
    expect(resultadoFinal).toBeNull
  });

  it('deve calcular o arranjo de n e p', () => {
    let resultadoDeN = 1
    let n = NaN
    let p = NaN
    for (let x = n; x > 1; x--) {
      resultadoDeN = resultadoDeN * x
    }
    let denominador = n - p
    let resultadoDenominador = 1
    for (let y = denominador; y >= 1; y--) {
      resultadoDenominador = resultadoDenominador * y
    }
    let resultadoFinal = resultadoDeN / resultadoDenominador
    expect(resultadoFinal).toBeNull
  });

  it('deve calcular o arranjo de n e p', () => {
    let resultadoDeN = 1
    let n = NaN
    let p = NaN
    for (let x = n; x > 1; x--) {
      resultadoDeN = resultadoDeN * x
    }
    let denominador = n - p
    let resultadoDenominador = 1
    for (let y = denominador; y >= 1; y--) {
      resultadoDenominador = resultadoDenominador * y
    }
    let resultadoFinal = resultadoDeN / resultadoDenominador
    expect(resultadoFinal).toBeNaN
  });

  it('deve calcular o arranjo de n e p', () => {
    let resultadoDeN = 1
    let n = NaN
    let p = null
    for (let x = n; x > 1; x--) {
      resultadoDeN = resultadoDeN * x
    }
    let denominador = n - p
    let resultadoDenominador = 1
    for (let y = denominador; y >= 1; y--) {
      resultadoDenominador = resultadoDenominador * y
    }
    let resultadoFinal = resultadoDeN / resultadoDenominador
    expect(resultadoFinal).toBeNaN
  });

  it('deve calcular o arranjo de n e p', () => {
    let resultadoDeN = 1
    let n = null
    let p = NaN
    for (let x = n; x > 1; x--) {
      resultadoDeN = resultadoDeN * x
    }
    let denominador = n - p
    let resultadoDenominador = 1
    for (let y = denominador; y >= 1; y--) {
      resultadoDenominador = resultadoDenominador * y
    }
    let resultadoFinal = resultadoDeN / resultadoDenominador
    expect(resultadoFinal).toBeNaN
  });

  it('deve calcular o arranjo de n e p', () => {
    let resultadoDeN = 1
    let n = 1
    let p = null
    for (let x = n; x > 1; x--) {
      resultadoDeN = resultadoDeN * x
    }
    let denominador = n - p
    let resultadoDenominador = 1
    for (let y = denominador; y >= 1; y--) {
      resultadoDenominador = resultadoDenominador * y
    }
    let resultadoFinal = resultadoDeN / resultadoDenominador
    expect(resultadoFinal).toBe(1)
  });

  it('deve calcular o arranjo de n e p', () => {
    let resultadoDeN = 1
    let n = 0
    let p = null
    for (let x = n; x > 1; x--) {
      resultadoDeN = resultadoDeN * x
    }
    let denominador = n - p
    let resultadoDenominador = 1
    for (let y = denominador; y >= 1; y--) {
      resultadoDenominador = resultadoDenominador * y
    }
    let resultadoFinal = resultadoDeN / resultadoDenominador
    expect(resultadoFinal).toBe(1)
  });

  it('deve calcular o arranjo de n e p', () => {
    let resultadoDeN = 1
    let n = null
    let p = 1
    for (let x = n; x > 1; x--) {
      resultadoDeN = resultadoDeN * x
    }
    let denominador = n - p
    let resultadoDenominador = 1
    for (let y = denominador; y >= 1; y--) {
      resultadoDenominador = resultadoDenominador * y
    }
    let resultadoFinal = resultadoDeN / resultadoDenominador
    expect(resultadoFinal).toBe(1)
  });

  it('deve calcular o arranjo de n e p', () => {
    let resultadoDeN = 1
    let n = NaN
    let p = 1
    for (let x = n; x > 1; x--) {
      resultadoDeN = resultadoDeN * x
    }
    let denominador = n - p
    let resultadoDenominador = 1
    for (let y = denominador; y >= 1; y--) {
      resultadoDenominador = resultadoDenominador * y
    }
    let resultadoFinal = resultadoDeN / resultadoDenominador
    expect(resultadoFinal).toBe(1)
  });

  it('deve calcular o arranjo de n e p', () => {
    let resultadoDeN = 1
    let n = undefined
    let p = 1
    for (let x = n; x > 1; x--) {
      resultadoDeN = resultadoDeN * x
    }
    let denominador = n - p
    let resultadoDenominador = 1
    for (let y = denominador; y >= 1; y--) {
      resultadoDenominador = resultadoDenominador * y
    }
    let resultadoFinal = resultadoDeN / resultadoDenominador
    expect(resultadoFinal).toBe(1)
  });

  it('deve calcular o arranjo de n e p', () => {
    let resultadoDeN = 1
    let n = 1
    let p = undefined
    for (let x = n; x > 1; x--) {
      resultadoDeN = resultadoDeN * x
    }
    let denominador = n - p
    let resultadoDenominador = 1
    for (let y = denominador; y >= 1; y--) {
      resultadoDenominador = resultadoDenominador * y
    }
    let resultadoFinal = resultadoDeN / resultadoDenominador
    expect(resultadoFinal).toBe(1)
  });

  it('deve calcular o arranjo de n e p', () => {
    let resultadoDeN = 1
    let n = undefined
    let p = undefined
    for (let x = n; x > 1; x--) {
      resultadoDeN = resultadoDeN * x
    }
    let denominador = n - p
    let resultadoDenominador = 1
    for (let y = denominador; y >= 1; y--) {
      resultadoDenominador = resultadoDenominador * y
    }
    let resultadoFinal = resultadoDeN / resultadoDenominador
    expect(resultadoFinal).toBe(1)
  });
})

describe('Calcula combinatoria', () => {
  test('deve calcular o arranjo de n e p', () => {
    let resultadoDeN = 1
    let n = 1
    let p = 1

    for (let x = n; x > 1; x--) {

      resultadoDeN = resultadoDeN * x
    }

    let resultadoDeP = 1
    for (let y = p; y > 1; y--) {

      resultadoDeP = resultadoDeP * y
    }

    let parentesisDenominador = n - p
    let resultadoParentesis = 1
    for (let w = parentesisDenominador; w >= 1; w--) {
      resultadoParentesis = resultadoParentesis * w
    }

    let resultadoFinalDenominador = resultadoDeP * resultadoParentesis
    let resultadoFinal = resultadoDeN / resultadoFinalDenominador

    expect(resultadoFinal).toBe(1)
  });

  test('deve calcular o arranjo de n e p', () => {
    let resultadoDeN = 1
    let n = 0
    let p = 0

    for (let x = n; x > 1; x--) {

      resultadoDeN = resultadoDeN * x
    }

    let resultadoDeP = 1
    for (let y = p; y > 1; y--) {

      resultadoDeP = resultadoDeP * y
    }

    let parentesisDenominador = n - p
    let resultadoParentesis = 1
    for (let w = parentesisDenominador; w >= 1; w--) {
      resultadoParentesis = resultadoParentesis * w
    }

    let resultadoFinalDenominador = resultadoDeP * resultadoParentesis
    let resultadoFinal = resultadoDeN / resultadoFinalDenominador

    expect(resultadoFinal).toBe(1)
  });

  test('deve calcular o arranjo de n e p', () => {
    let resultadoDeN = 1
    let n = 1
    let p = 0

    for (let x = n; x > 1; x--) {

      resultadoDeN = resultadoDeN * x
    }

    let resultadoDeP = 1
    for (let y = p; y > 1; y--) {

      resultadoDeP = resultadoDeP * y
    }

    let parentesisDenominador = n - p
    let resultadoParentesis = 1
    for (let w = parentesisDenominador; w >= 1; w--) {
      resultadoParentesis = resultadoParentesis * w
    }

    let resultadoFinalDenominador = resultadoDeP * resultadoParentesis
    let resultadoFinal = resultadoDeN / resultadoFinalDenominador

    expect(resultadoFinal).toBe(1)
  });

  test('deve calcular o arranjo de n e p', () => {
    let resultadoDeN = 1
    let n = 0
    let p = 1

    for (let x = n; x > 1; x--) {

      resultadoDeN = resultadoDeN * x
    }

    let resultadoDeP = 1
    for (let y = p; y > 1; y--) {

      resultadoDeP = resultadoDeP * y
    }

    let parentesisDenominador = n - p
    let resultadoParentesis = 1
    for (let w = parentesisDenominador; w >= 1; w--) {
      resultadoParentesis = resultadoParentesis * w
    }

    let resultadoFinalDenominador = resultadoDeP * resultadoParentesis
    let resultadoFinal = resultadoDeN / resultadoFinalDenominador

    expect(resultadoFinal).toBeUndefined
  });

  test('deve calcular o arranjo de n e p', () => {
    let resultadoDeN = 1
    let n = undefined
    let p = 1

    for (let x = n; x > 1; x--) {

      resultadoDeN = resultadoDeN * x
    }

    let resultadoDeP = 1
    for (let y = p; y > 1; y--) {

      resultadoDeP = resultadoDeP * y
    }

    let parentesisDenominador = n - p
    let resultadoParentesis = 1
    for (let w = parentesisDenominador; w >= 1; w--) {
      resultadoParentesis = resultadoParentesis * w
    }

    let resultadoFinalDenominador = resultadoDeP * resultadoParentesis
    let resultadoFinal = resultadoDeN / resultadoFinalDenominador

    expect(resultadoFinal).toBeUndefined
  });

  test('deve calcular o arranjo de n e p', () => {
    let resultadoDeN = 1
    let n = 1
    let p = undefined

    for (let x = n; x > 1; x--) {

      resultadoDeN = resultadoDeN * x
    }

    let resultadoDeP = 1
    for (let y = p; y > 1; y--) {

      resultadoDeP = resultadoDeP * y
    }

    let parentesisDenominador = n - p
    let resultadoParentesis = 1
    for (let w = parentesisDenominador; w >= 1; w--) {
      resultadoParentesis = resultadoParentesis * w
    }

    let resultadoFinalDenominador = resultadoDeP * resultadoParentesis
    let resultadoFinal = resultadoDeN / resultadoFinalDenominador

    expect(resultadoFinal).toBeUndefined
  });

  test('deve calcular o arranjo de n e p', () => {
    let resultadoDeN = 1
    let n = undefined
    let p = null

    for (let x = n; x > 1; x--) {

      resultadoDeN = resultadoDeN * x
    }

    let resultadoDeP = 1
    for (let y = p; y > 1; y--) {

      resultadoDeP = resultadoDeP * y
    }

    let parentesisDenominador = n - p
    let resultadoParentesis = 1
    for (let w = parentesisDenominador; w >= 1; w--) {
      resultadoParentesis = resultadoParentesis * w
    }

    let resultadoFinalDenominador = resultadoDeP * resultadoParentesis
    let resultadoFinal = resultadoDeN / resultadoFinalDenominador

    expect(resultadoFinal).toBeUndefined
  });

  test('deve calcular o arranjo de n e p', () => {
    let resultadoDeN = 1
    let n = null
    let p = undefined

    for (let x = n; x > 1; x--) {

      resultadoDeN = resultadoDeN * x
    }

    let resultadoDeP = 1
    for (let y = p; y > 1; y--) {

      resultadoDeP = resultadoDeP * y
    }

    let parentesisDenominador = n - p
    let resultadoParentesis = 1
    for (let w = parentesisDenominador; w >= 1; w--) {
      resultadoParentesis = resultadoParentesis * w
    }

    let resultadoFinalDenominador = resultadoDeP * resultadoParentesis
    let resultadoFinal = resultadoDeN / resultadoFinalDenominador

    expect(resultadoFinal).toBeUndefined
  });

  test('deve calcular o arranjo de n e p', () => {
    let resultadoDeN = 1
    let n = NaN
    let p = undefined

    for (let x = n; x > 1; x--) {

      resultadoDeN = resultadoDeN * x
    }

    let resultadoDeP = 1
    for (let y = p; y > 1; y--) {

      resultadoDeP = resultadoDeP * y
    }

    let parentesisDenominador = n - p
    let resultadoParentesis = 1
    for (let w = parentesisDenominador; w >= 1; w--) {
      resultadoParentesis = resultadoParentesis * w
    }

    let resultadoFinalDenominador = resultadoDeP * resultadoParentesis
    let resultadoFinal = resultadoDeN / resultadoFinalDenominador

    expect(resultadoFinal).toBeUndefined
  });

  test('deve calcular o arranjo de n e p', () => {
    let resultadoDeN = 1
    let n = undefined
    let p = NaN

    for (let x = n; x > 1; x--) {

      resultadoDeN = resultadoDeN * x
    }

    let resultadoDeP = 1
    for (let y = p; y > 1; y--) {

      resultadoDeP = resultadoDeP * y
    }

    let parentesisDenominador = n - p
    let resultadoParentesis = 1
    for (let w = parentesisDenominador; w >= 1; w--) {
      resultadoParentesis = resultadoParentesis * w
    }

    let resultadoFinalDenominador = resultadoDeP * resultadoParentesis
    let resultadoFinal = resultadoDeN / resultadoFinalDenominador

    expect(resultadoFinal).toBeUndefined
  });

  test('deve calcular o arranjo de n e p', () => {
    let resultadoDeN = 1
    let n = null
    let p = null

    for (let x = n; x > 1; x--) {

      resultadoDeN = resultadoDeN * x
    }

    let resultadoDeP = 1
    for (let y = p; y > 1; y--) {

      resultadoDeP = resultadoDeP * y
    }

    let parentesisDenominador = n - p
    let resultadoParentesis = 1
    for (let w = parentesisDenominador; w >= 1; w--) {
      resultadoParentesis = resultadoParentesis * w
    }

    let resultadoFinalDenominador = resultadoDeP * resultadoParentesis
    let resultadoFinal = resultadoDeN / resultadoFinalDenominador

    expect(resultadoFinal).toBeUndefined
  });

  test('deve calcular o arranjo de n e p', () => {
    let resultadoDeN = 1
    let n = NaN
    let p = NaN

    for (let x = n; x > 1; x--) {

      resultadoDeN = resultadoDeN * x
    }

    let resultadoDeP = 1
    for (let y = p; y > 1; y--) {

      resultadoDeP = resultadoDeP * y
    }

    let parentesisDenominador = n - p
    let resultadoParentesis = 1
    for (let w = parentesisDenominador; w >= 1; w--) {
      resultadoParentesis = resultadoParentesis * w
    }

    let resultadoFinalDenominador = resultadoDeP * resultadoParentesis
    let resultadoFinal = resultadoDeN / resultadoFinalDenominador

    expect(resultadoFinal).toBeUndefined
  });

  test('deve calcular o arranjo de n e p', () => {
    let resultadoDeN = 1
    let n = 0
    let p = NaN

    for (let x = n; x > 1; x--) {

      resultadoDeN = resultadoDeN * x
    }

    let resultadoDeP = 1
    for (let y = p; y > 1; y--) {

      resultadoDeP = resultadoDeP * y
    }

    let parentesisDenominador = n - p
    let resultadoParentesis = 1
    for (let w = parentesisDenominador; w >= 1; w--) {
      resultadoParentesis = resultadoParentesis * w
    }

    let resultadoFinalDenominador = resultadoDeP * resultadoParentesis
    let resultadoFinal = resultadoDeN / resultadoFinalDenominador

    expect(resultadoFinal).toBeUndefined
  });

  test('deve calcular o arranjo de n e p', () => {
    let resultadoDeN = 1
    let n = 0
    let p = null

    for (let x = n; x > 1; x--) {

      resultadoDeN = resultadoDeN * x
    }

    let resultadoDeP = 1
    for (let y = p; y > 1; y--) {

      resultadoDeP = resultadoDeP * y
    }

    let parentesisDenominador = n - p
    let resultadoParentesis = 1
    for (let w = parentesisDenominador; w >= 1; w--) {
      resultadoParentesis = resultadoParentesis * w
    }

    let resultadoFinalDenominador = resultadoDeP * resultadoParentesis
    let resultadoFinal = resultadoDeN / resultadoFinalDenominador

    expect(resultadoFinal).toBeUndefined
  });
})
