// store/index.js
import Vue from 'vue';
import Vuex from 'vuex';
import alertService from '../services/alertService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notifications: [],
  },
  mutations: {
    setNotifications(state, notifications) {
      state.notifications = notifications;
    },
    removeNotification(state, index) {
      state.notifications.splice(index, 1);
    },
  },
  actions: {
    fetchNotifications({ commit }) {
      const notifications = alertService.getNotifications();
      commit('setNotifications', notifications);
    },
    removeNotification({ commit }, index) {
      commit('removeNotification', index);
    },
  },
  getters: {
    notifications: (state) => state.notifications,
  },
});

