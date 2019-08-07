<template>
  <div id="app">
    <OperacaoSelect v-model="operacao" />

    <div>
      <div v-if="operacao === 'permutacao'">
        <input placeholder="Informe o valor de n" v-model="n">
      </div>

      <div v-if="operacao === 'arranjo'">
        <input placeholder="Informe o valor de n" v-model="n">

        <input placeholder="Informe o valor de p" v-model="p">
      </div>

      <div v-if="operacao === 'combinatoria'">
        <input placeholder="Informe o valor de n1" v-model="n">
        <input placeholder="Informe o valor de p1" v-model="p">
      </div>

    </div>

    <div class="button-resultado">
      <button
        type="button"
        @click="result">
        Calcular
      </button>
      {{ resultado }}
    </div>
  </div>
</template>


<script>
import OperacaoSelect from "./components/OperacaoSelect"
import { calculaPermutacao, calculaArranjo, calculaCombinatoria } from "./utils/calc"

export default {
  name: 'app',
  components: { OperacaoSelect },
  data () {
    return {
      operacao: "",
      n: null,
      p: null,
      resultado: null,
    }

  },
  methods: {
    result (){
      if (this.operacao === 'permutacao') {
        this.resultado = calculaPermutacao(this.n)
      }
      else if (this.operacao === 'arranjo') {
        this.resultado = calculaArranjo(this.n, this.p)
      }
      else if ( this.operacao === 'combinatoria') {
        this.resultado = calculaCombinatoria(this.n, this.p)
      }
    }
  }
}
</script>

<style lang='scss' scoped>
  input {
    border: none;
    border-bottom: solid 1px rgb(147, 147, 236);
    margin: 0.5em;
    padding: 1em;
    width: 135px;
    text-align: center
  }

  button {
    display: inline-block;
    margin: 0.5em;
    padding: 1em;
    background-color: rgb(147, 147, 236);
    color: white;
    border: none;
    width: 135px;
    cursor: pointer;
  }

</style>
