<template>
<div>
  <h2>Simple Tabs</h2>
  <Tabs>
    <Tab title="User">
      Users List
    </Tab>
    <Tab title="Employee">
      Employee List
    </Tab>
  </Tabs>
  <h2>Tabs with Custom header</h2>
  <div>
    <span>Click to active tab: </span>
    <Button @click="activeTab=0">1</Button>
    <Button style="background: #d9534f;" @click="activeTab=1">2</Button>
  </div>
  <Tabs :active="activeTab" @change="onTabChange">
    <Tab>
      <div slot="title">User *</div>
      <div>Hello John</div>
    </Tab>
    <Tab title="Employee">
      Completing task
    </Tab>
  </Tabs>
</div>
</template>
<script>
import Tabs from './Tabs';
import Tab from './Tab';
import Button from './../Button';

export default {
  components: { Tabs, Tab, Button },
  data() {
    return {
      activeTab: 0,
    };
  },
  methods: {
    onTabChange(i) {
      this.activeTab = i;
    },
  },
};
</script>
<style scoped>

</style>
