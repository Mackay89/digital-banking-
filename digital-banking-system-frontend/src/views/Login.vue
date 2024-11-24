<template>
  <div class="login">
    <h2>Login to Your Account</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit" class="btn-login">Login</button>
      <router-link to="/forgot-password" class="forgot-password">Forgot password?</router-link>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    submitForm() {
      // Handle login logic
    }
  }
}
</script>

<style scoped>
.login {
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.form-group {
  margin-bottom: 15px;
}

input {
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  border-radius: 5px;
}

.btn-login {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  width: 100%;
  border: none;
  border-radius: 5px;
}

.forgot-password {
  display: block;
  margin-top: 10px;
}
</style>

