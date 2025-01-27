<template>
  <div>
    <h2>Payment Methods</h2>
    <div>
      <label>Payment Method</label>
      <select v-model="paymentMethod">
        <option value="stablecoin">Stablecoin</option>
        <option value="fiat">Fiat</option>
      </select>
    </div>
    <button @click="updatePaymentMethod">Update Payment Method</button>
  </div>
</template>

<script>
import paymentService from '../services/paymentService';

export default {
  data() {
    return {
      paymentMethod: 'stablecoin',
    };
  },
  methods: {
    updatePaymentMethod() {
      paymentService.updatePaymentMethod(this.paymentMethod).then(response => {
        alert('Payment method updated successfully');
      });
    },
  },
};
</script>

<style scoped>
button {
  padding: 10px 20px;
}
</style>

