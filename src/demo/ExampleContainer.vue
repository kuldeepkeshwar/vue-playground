<template>
  <div>
    <div class="header">
      <router-link class="link" to="/">Go Back</router-link>
      <h3>{{title}}</h3>
    </div>
    <div class="container">
      <Placeholder :component="component"></Placeholder>
    </div>
  </div>
</template>
<script>
import Placeholder from "./Placeholder";
import { extractComponent, extractComponentMeta } from "./../utils";

export default {
  name: "ExampleContainer",
  components: {
    Placeholder
  },
  data: function() {
    return {
      component: {
        definition: null,
        meta: null
      }
    };
  },
  computed: {
    title: function() {
      return this.$route.params.example ? this.$route.params.example : null;
    }
  },
  methods: {
    extractComponentMeta: function(name) {
      Promise.all([extractComponent(name), extractComponentMeta(name)]).then(
        results => {
          const [definition, meta] = results;
          this.component = {
            definition,
            meta
          };
        }
      );
    }
  },
  created: function() {
    this.extractComponentMeta(this.$route.params.example);
  }
};
</script>

<style scoped>
.header {
  display: flex;
  padding: 0px 556px;
  justify-content: space-between;
  align-items: center;
}
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  position: relative;
  min-height: 200px;
  width: 250px;
  margin: 30px auto 0;
  border: 2px solid green;
}
</style>
