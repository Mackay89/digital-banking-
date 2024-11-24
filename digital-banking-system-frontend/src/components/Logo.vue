<template>
  <div class="logo-container">
    <img :src="require('@/assets/images/logo.png')" alt="Bank Logo" class="logo" />
  </div>
</template>

<script>
export default {
  name: "Logo",
};
</script>

<style scoped>
.logo-container {
  text-align: center;
}

.logo {
  max-width: 150px;
}
</style>

