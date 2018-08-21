<template>
  <div>
    <input v-bind="$attrs" v-on="$listeners" />
    <label class="label"> {{ label }}</label>
  </div>
</template>
<script>
export default {
  inheritAttrs: false,
  name: 'Textbox',
  props: ['label']
};
</script>
<style scoped>
input {
  border: solid 1px #e6ebf3;
  border-radius: 2px;
  outline: none;
  min-height: 56px;
}
</style>
