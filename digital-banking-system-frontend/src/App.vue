<template>
  <div id="app">
    <!-- Logo -->
    <img alt="Bank Logo" src="./assets/images/logo.png" class="logo" />

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Welcome to Your Trusted Bank</h1>
        <p>Secure. Reliable. Always here for you.</p>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <h2>Our Features</h2>
      <div class="feature-grid">
        <!-- Feature Icons -->
        <div class="feature">
          <img src="./assets/images/icons/account.png" alt="Account Management" />
          <h3>Account Management</h3>
          <p>Easily manage your accounts from anywhere.</p>
        </div>
        <div class="feature">
          <img src="./assets/images/icons/transaction.png" alt="Transactions" />
          <h3>Transactions</h3>
          <p>Track and execute transactions securely.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/* Logo Styles */
.logo {
  max-width: 150px;
  margin-bottom: 20px;
}

/* Hero Section Styles */
.hero {
  background-image: url("./assets/images/hero-bg.jpg");
  background-size: cover;
  background-position: center;
  color: white;
  padding: 100px 20px;
}

.hero-content {
  background-color: rgba(0, 0, 0, 0.6);
  padding: 20px;
  border-radius: 10px;
}

/* Features Section Styles */
.features {
  padding: 50px 20px;
  text-align: center;
}

.feature-grid {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.feature {
  max-width: 300px;
  text-align: center;
}

.feature img {
  max-width: 100px;
  margin-bottom: 10px;
}
</style>

