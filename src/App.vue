<template>
  <div id="app">
    <div class="header">
      <h2>Vue examples</h2>
      <img class="logo" alt="Vue logo" src="./assets/logo.png">

    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
};
</script>

<style>
.logo{
      max-height: 40px;
    /* display: block; */
    margin: 1rem 1rem;
}
.header{
  display: flex;
  justify-content: center;
}
.link {
  color: #24aee6;
  text-decoration: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
}
</style>
