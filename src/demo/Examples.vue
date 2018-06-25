<template>
  <div>
    <div class="component-list">
    <div class="component-list-item" v-bind:key="example.path" v-for="example in examples">
      <router-link class="link" :to="example.path">{{example.title}}</router-link>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Examples',
  data: function() {
    return {
      examples: [
        {
          title: 'Textbox',
          path: '/Textbox'
        },
        {
          title: 'Button',
          path: '/Button'
        }
      ]
    };
  }
};
</script>

<style scoped>
.component-list {
  /* list-style: none;
  padding: 0px; */
}
.component-list-item {
  margin: 1rem;
}
</style>
