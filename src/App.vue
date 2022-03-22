<template>
    <div id="nav">
      <router-link to="/user">user</router-link> |
      <router-link to="/setting">setting</router-link>
    </div>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
}
</script>
<style>
#app{
  margin: 0 auto;
  width: 700px;
}
#nav{
  margin-bottom: 20px;
  text-align: center;
}
</style>
