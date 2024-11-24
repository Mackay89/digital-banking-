<template>
  <section class="hero" :style="{ backgroundImage: `url(${require('@/assets/images/hero-bg.jpg')})` }">
    <div class="hero-content">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style scoped>
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 100px 20px;
  background-size: cover;
  background-position: center;
  color: white;
}

.hero-content {
  background-color: rgba(0, 0, 0, 0.6);
  padding: 20px;
  border-radius: 10px;
}
</style>

