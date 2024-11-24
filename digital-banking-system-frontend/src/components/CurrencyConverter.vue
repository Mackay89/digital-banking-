<template>
  <div class="currency-converter">
    <h1>Currency Converter</h1>
    <input v-model="amount" type="number" placeholder="Amount" />
    <select v-model="fromCurrency">
      <option value="USDC">USDC</option>
      <option value="DAI">DAI</option>
    </select>
    <span>to</span>
    <select v-model="toCurrency">
      <option value="USDC">USDC</option>
      <option value="DAI">DAI</option>
    </select>
    <button @click="convertCurrency">Convert</button>
    <p v-if="convertedAmount">Converted Amount: {{ convertedAmount }} {{ toCurrency }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      amount: 0,
      fromCurrency: 'USDC',
      toCurrency: 'DAI',
      convertedAmount: null
    };
  },
  methods: {
    convertCurrency() {
      // Placeholder for actual conversion logic
      console.log(`Converting ${this.amount} ${this.fromCurrency} to ${this.toCurrency}`);
      this.convertedAmount = this.amount * 1.1; // Example conversion rate
    }
  }
};
</script>

<style scoped>
.currency-converter input, .currency-converter select {
  margin: 10px;
}
</style>

