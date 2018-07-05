<template>
<label>
      {{ label }}
      <input
        v-bind="$attrs"
        v-on="$listeners"
      />
    </label>
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
  border: 2px solid lightblue;
}
</style>
