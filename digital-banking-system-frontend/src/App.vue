<template>
  <div class="bg-gray-100 min-h-screen">
    <!-- Header -->
    <header class="bg-blue-800 text-white p-4 flex items-center justify-between">
      <div class="flex items-center">
        <img src="/assets/bank-logo.png" alt="Bank Logo" class="w-12 h-12 mr-3" />
        <h1 class="text-xl font-bold">Your Trusted Bank</h1>
      </div>
      <button
        class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
        @click="handleLogin">Login</button>
    </header>

    <!-- Hero Section -->
    <section class="bg-blue-200 py-16 text-center">
      <h2 class="text-3xl font-bold mb-4 text-blue-900">Welcome to Your Trusted Bank</h2>
      <p class="text-lg text-blue-700">
        Secure. Reliable. Always here for you.
      </p>
      <button
        class="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
        @click="handleGetStarted">Get Started</button>
    </section>

    <!-- Features Section -->
    <section class="py-12">
      <div class="container mx-auto px-6">
        <h3 class="text-2xl font-bold text-center mb-8">Our Features</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Feature 1 -->
          <div class="bg-white shadow-lg rounded-lg p-6 text-center transition transform hover:scale-105 duration-300">
            <img src="/assets/account-management-icon.png" alt="Account Management" class="w-16 h-16 mx-auto mb-4" />
            <h4 class="text-xl font-semibold mb-2">Account Management</h4>
            <p class="text-gray-600">
              Easily manage your accounts from anywhere.
            </p>
            <button
              class="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg transition duration-300">
              Learn More
            </button>
          </div>
          <!-- Feature 2 -->
          <div class="bg-white shadow-lg rounded-lg p-6 text-center transition transform hover:scale-105 duration-300">
            <img src="/assets/transactions-icon.png" alt="Transactions" class="w-16 h-16 mx-auto mb-4" />
            <h4 class="text-xl font-semibold mb-2">Transactions</h4>
            <p class="text-gray-600">
              Track and execute transactions securely.
            </p>
            <button
              class="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg transition duration-300">
              Learn More
            </button>
          </div>
          <!-- Feature 3 -->
          <div class="bg-white shadow-lg rounded-lg p-6 text-center transition transform hover:scale-105 duration-300">
            <img src="/assets/security-icon.png" alt="Security" class="w-16 h-16 mx-auto mb-4" />
            <h4 class="text-xl font-semibold mb-2">Security</h4>
            <p class="text-gray-600">
              Enjoy the highest level of data and transaction security.
            </p>
            <button
              class="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-blue-800 text-white text-center py-4">
      <p>&copy; 2025 Your Trusted Bank. All Rights Reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    handleLogin() {
      alert("Login functionality to be implemented.");
    },
    handleGetStarted() {
      alert("Get Started functionality to be implemented.");
    },
  },
};
</script>

<style scoped>
/* Optional: Custom TailwindCSS overrides if needed */
</style>

