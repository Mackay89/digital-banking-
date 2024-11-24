<template>
  <div class="account-dashboard">
    <h1>Welcome, {{ user.name }}</h1>
    <div class="balance-summary">
      <p>Stable Token Balance: {{ balances.stableToken }}</p>
      <p>Utility Token Balance: {{ balances.utilityToken }}</p>
    </div>
    <div class="recent-transactions">
      <h2>Recent Transactions</h2>
      <ul>
        <li v-for="transaction in transactions" :key="transaction.id">
          {{ transaction.type }}: {{ transaction.amount }} {{ transaction.token }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "John Doe"
      },
      balances: {
        stableToken: 1000,
        utilityToken: 500
      },
      transactions: [
        { id: 1, type: "Deposit", amount: 100, token: "USDC" },
        { id: 2, type: "Withdrawal", amount: 50, token: "DAI" }
      ]
    };
  }
};
</script>

<style scoped>
.account-dashboard {
  padding: 20px;
}
.balance-summary p {
  font-size: 1.2em;
}
</style>

