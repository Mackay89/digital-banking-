<template>
  <div v-if="notifications.length" class="alert-container">
    <div
      v-for="(notification, index) in notifications"
      :key="index"
      class="alert"
      :class="notification.type"
    >
      <span>{{ notification.message }}</span>
      <button @click="dismissNotification(index)">Dismiss</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      notifications: [],
    };
  },
  created() {
    this.$store.dispatch('fetchNotifications').then((notifications) => {
      this.notifications = notifications;
    });
  },
  methods: {
    dismissNotification(index) {
      this.$store.dispatch('removeNotification', index);
      this.notifications.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.alert-container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
}

.alert {
  background-color: #f44336;
  color: white;
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 3px;
  display: flex;
  justify-content: space-between;
}

.alert.success {
  background-color: #4caf50;
}

.alert.error {
  background-color: #f44336;
}

.alert button {
  background: none;
  color: white;
  border: none;
  cursor: pointer;
}
</style>

