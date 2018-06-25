<template>
<div>
    <button  v-bind="$attrs"
        v-on="$listeners"><slot></slot></button>

</div>
</template>
<script>
export default {
  inheritAttrs: false
  // props: ["label"]
};
</script>
