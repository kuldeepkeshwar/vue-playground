<template>
    <button class="btn" v-bind="$attrs"
        v-on="$listeners"><slot></slot></button>

</template>
<script>
export default {
  inheritAttrs: false,
  name: 'Button'
};
</script>

<style scoped>
.btn {
  font-size: 1.1rem;
  width: 6rem;
  height: 2rem;
  border: none;
  outline: none;
  margin: 2px;
  background: #99d7f8;
}
</style>
