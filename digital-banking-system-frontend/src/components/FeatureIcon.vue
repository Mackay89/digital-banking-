<template>
  <div class="feature">
    <img :src="require(`@/assets/images/icons/${icon}`)" :alt="name" class="feature-icon" />
    <h3>{{ name }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "FeatureIcon",
  props: {
    icon: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.feature {
  max-width: 300px;
  text-align: center;
}

.feature-icon {
  max-width: 100px;
  margin-bottom: 10px;
}
</style>

