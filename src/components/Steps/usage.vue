<template>
<div>
  <h2>Steps</h2>
  <div>
    <span>Click to active step: </span>
    <Button @click="activeStep=0">1</Button>
    <Button style="background: #d9534f;" @click="activeStep=1">2</Button>
  </div>
  <Steps :active="activeStep">
    <Step>
      <div class="container">Hello John</div>
    </Step>
    <Step><div class="container">Completing task</div></Step>
  </Steps>
</div>
</template>
<script>
import Steps from './Steps';
import Step from './Step';
import Button from './../Button';

export default {
  components: { Steps, Step, Button },
  data() {
    return {
      activeStep: 0,
    };
  },
};
</script>
<style scoped>
.container {
  margin: 20px;
}
</style>
