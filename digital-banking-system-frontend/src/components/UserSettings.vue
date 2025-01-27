<template>
  <div>
    <h2>User Settings</h2>
    <div>
      <label>Email</label>
      <input v-model="user.email" />
    </div>
    <div>
      <label>Phone</label>
      <input v-model="user.phone" />
    </div>
    <div>
      <label>Enable MFA</label>
      <input type="checkbox" v-model="user.enableMFA" />
    </div>
    <button @click="updateSettings">Update Settings</button>
  </div>
</template>

<script>
import userSettingsService from '../services/userSettingsService';

export default {
  data() {
    return {
      user: {
        email: '',
        phone: '',
        enableMFA: false,
      },
    };
  },
  methods: {
    updateSettings() {
      userSettingsService.updateUserSettings(this.user).then(response => {
        alert('Settings updated successfully');
      });
    },
  },
};
</script>

<style scoped>
input {
  margin-bottom: 10px;
}
button {
  padding: 10px 20px;
}
</style>

