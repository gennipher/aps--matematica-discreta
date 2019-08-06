<template>
<div>
  <label>
    Permutação
    <input value="permutacao"
      type="radio"
      name="operacao"
      v-model="model"
      @change="update(model)">
  </label>

  <label>
    Arranjo
    <input value="arranjo"
      type="radio"
      name="operacao"
      v-model="model"
      @change="update(model)">
  </label>

  <label>
    Análise Combinatória
    <input value="combinatoria"
      type="radio"
      name="operacao"
      v-model="model"
      @change="update">
  </label>
</div>
</template>


<script>
export default {
  props: ["value"],
  data () {
    return {
      model: this.value
    }
  },
  watch: {
    value (val) {
      this.model = val
    }
  },
  methods: {
    update (){
      this.$emit('input', this.model)
    }
  }
}
</script>

<style lang='scss' scoped>
  label {
    display: inline-block;
    margin: 0.5em;
    padding: 1em;
    background-color: rgb(147, 147, 236);
    color: white;
    cursor: pointer;
  }
</style>
