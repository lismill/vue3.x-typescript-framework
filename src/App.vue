<template>
  <div id="nav">
    <aside class="aside-menu">
      aside
    </aside>
    <section class="container">
      <header class="header-menu">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </header>
      <router-view />
    </section>
  </div>
</template>
<style lang="scss" scoped>
#nav {
  display: flex;
}
.container {
  flex: 1;
}
.header-menu {
  height: 50px;
  line-height: 50px;
  color: #fff;
  background-color: $color-dark;
  a {
    color: #fff;
  }
}
.aside-menu {
  height: 100vh;
  width: 200px;
  color: #fff;
  background-color: $color-dark;
}
</style>
