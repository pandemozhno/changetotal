<template>
  <Layout>
    <template #nav>
      <router-link to="/" class="link-primary me-3 ms-3">List</router-link>
      <router-link to="/convert" class="link-primary">Calculator</router-link>
      <User class="ms-auto"/>
    </template>
    <RouterView />
  </Layout>
</template>

<script setup lang="ts">
import Layout from "./layout/default.vue"

import User from "./components/User.vue"
</script>


<style>
</style>
