<template>
  <div class="home">
    <h1>Welcome to the Digital Banking System</h1>
    <p>Your gateway to a decentralized, secure, and globally connected financial system.</p>
    <router-link to="/login" class="btn-login">Login</router-link>
    <router-link to="/signup" class="btn-signup">Sign Up</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.home {
  text-align: center;
  padding: 50px;
}

h1 {
  font-size: 2em;
  margin-bottom: 20px;
}

p {
  font-size: 1.2em;
  margin-bottom: 40px;
}

.btn-login, .btn-signup {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  margin: 10px;
}

.btn-login:hover, .btn-signup:hover {
  background-color: #0056b3;
}
</style>

