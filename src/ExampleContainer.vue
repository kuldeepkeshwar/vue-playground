<template>
  <div>
    <router-link to="/">Back</router-link>
    <h3>{{title}}</h3>
    <div class="container">
      <Placeholder :meta="meta"></Placeholder>
    </div>
  </div>
</template>
<script>
import Placeholder from './Placeholder';
import { extractComponent, extractComponentMeta } from './utils';

export default {
  name: 'ExampleContainer',
  components: {
    Placeholder
  },
  data: function() {
    return {
      meta: {
        component: null,
        dataObj: null
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
          const [component, dataObj] = results;
          this.meta = {
            component,
            dataObj
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
