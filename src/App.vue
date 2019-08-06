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
  </div>
</template>


<script>
import OperacaoSelect from "./components/OperacaoSelect"

export default {
  name: 'app',
  components: { OperacaoSelect },
  data () {
    return {
      operacao: "",
      n: null,
      p: null,
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
</style>
