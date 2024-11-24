<template>
  <div class="landing-page">
    <!-- Hero Section -->
    <Hero>
      <Logo />
      <h1>Welcome to Your Trusted Bank</h1>
      <p>Secure. Reliable. Always here for you.</p>
    </Hero>

    <!-- Features Section -->
    <section class="features">
      <h2>Our Features</h2>
      <div class="feature-grid">
        <FeatureIcon
          v-for="feature in features"
          :key="feature.id"
          :icon="feature.icon"
          :name="feature.name"
          :description="feature.description"
        />
      </div>
    </section>
  </div>
</template>

<script>
import Hero from "./Hero.vue";
import Logo from "./Logo.vue";
import FeatureIcon from "./FeatureIcon.vue";

export default {
  name: "LandingPage",
  components: { Hero, Logo, FeatureIcon },
  data() {
    return {
      features: [
        {
          id: 1,
          name: "Account Management",
          icon: "account.png", // Icon for account management
          description: "Easily manage your accounts from anywhere.",
        },
        {
          id: 2,
          name: "Transactions",
          icon: "transaction.png", // Icon for transactions
          description: "Track and execute transactions securely.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.features {
  padding: 50px 20px;
  text-align: center;
}

.feature-grid {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}
</style>

