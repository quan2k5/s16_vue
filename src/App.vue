<template>
  <div>
    <!-- <h1>Router view</h1>
    <router-link to="/">Click home</router-link>
    <router-link to="/about">Click about</router-link>
    <router-link to="/contact">Click contact</router-link>
    <router-view> </router-view>
    <button @click="redirectPage">redirect</button> -->
    <router-link to="/" >Home</router-link>
    <router-link to='/Contact'>Contact</router-link>
     <router-link to="/homeHeader" exact-active-class="active">Home</router-link>
    <router-link to="/productHeader" active-class="active">Product</router-link>
    <router-link to="/detailHeader" active-class="active">Detail</router-link>
    <router-view></router-view>
  </div>
</template>
<script setup>
 import { useRouter } from "vue-router";

// const router = useRouter();
// const redirectPage = () => {
//   router.push("/contact");
// };
</script>
<style>
.active {
  color: blue;
  font-weight: bold;
}
</style>