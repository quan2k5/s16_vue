
<template>
  <nav>
    <router-link to="/navbar" active-class="active">Dashboard</router-link>
    <router-link to="/navbar/account" active-class="active">Account</router-link>
    <router-link to="/navbar/product" active-class="active">Product</router-link>
  </nav>
</template>

<script>
</script>

<style scoped>
nav {
  display: flex;
  gap: 10px;
}

.active {
  background-color: blue;
  color: #fff;
  font-weight: 700;
}
</style>
