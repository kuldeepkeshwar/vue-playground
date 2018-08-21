<template>
  <div class="root">
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
import Placeholder from './Placeholder';
import { extractComponent, extractComponentMeta } from './../utils';

export default {
  name: 'ExampleContainer',
  components: {
    Placeholder,
  },
  data() {
    return {
      component: {
        definition: null,
        usage: null,
      },
    };
  },
  computed: {
    title() {
      return this.$route.params.example ? this.$route.params.example : null;
    },
  },
  methods: {
    extractComponentMeta(name) {
      Promise.all([extractComponent(name), extractComponentMeta(name)]).then(
        (results) => {
          const [definition, usage] = results;
          this.component = {
            definition,
            usage,
          };
        },
      );
    },
  },
  created() {
    this.extractComponentMeta(this.$route.params.example);
  },
};
</script>

<style scoped>
.root {
  padding: 0px 4rem;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  margin: 30px auto 0;
  border: 2px solid green;
}
</style>
