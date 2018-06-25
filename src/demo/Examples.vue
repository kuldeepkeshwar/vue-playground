<template>
  <div id="app">
    <ul>
    <li v-bind:key="example.path" v-for="example in examples">
      <router-link class="link" :to="example.path">{{example.title}}</router-link>
    </li>
  </ul>
  </div>
</template>

<script>
export default {
  name: "Examples",
  data: function() {
    return {
      examples: [
        {
          title: "Textbox",
          path: "/Textbox"
        },
        {
          title: "Button",
          path: "/Button"
        }
      ]
    };
  }
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul {
  list-style: none;
}
</style>
