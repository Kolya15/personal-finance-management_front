<template>
  <div class="auth-layout">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "AuthLayout"
}
</script>

<style scoped>

.auth-layout {
  background-color: #f4f5f7;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>