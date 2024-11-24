<template>
  <div class="profile">
    <h2>Your Profile</h2>
    <form @submit.prevent="updateProfile">
      <div class="form-group">
        <label for="name">Full Name</label>
        <input type="text" id="name" v-model="name" required />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" disabled />
      </div>
      <button type="submit" class="btn-update">Update Profile</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {
      name: 'John Doe',
      email: 'john.doe@example.com'
    };
  },
  methods: {
    updateProfile() {
      // Handle profile update logic
    }
  }
}
</script>

<style scoped>
.profile {
  padding: 20px;
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

.btn-update {
  background-color: #28a745;
  color: white;
  padding: 10px 20px;
  width: 100%;
  border: none;
  border-radius: 5px;
}
</style>

