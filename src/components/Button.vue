<template>
<div>
    <button  v-bind="$attrs"
        v-on="$listeners">{{label}}</button>

</div>
</template>
<script>
export default {
  inheritAttrs: false,
  props: ['label']
};
</script>
