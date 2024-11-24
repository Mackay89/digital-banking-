<template>
  <div class="dashboard">
    <h2>Your Dashboard</h2>
    <div class="dashboard-info">
      <p>Balance: {{ balance }}</p>
      <p>Recent Transactions:</p>
      <ul>
        <li v-for="transaction in transactions" :key="transaction.id">
          {{ transaction.date }} - {{ transaction.amount }} USD
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      balance: 5000,
      transactions: [
        { id: 1, date: '2024-11-01', amount: -200 },
        { id: 2, date: '2024-10-15', amount: 1000 },
        { id: 3, date: '2024-09-20', amount: -150 }
      ]
    };
  }
}
</script>

<style scoped>
.dashboard {
  padding: 20px;
}

.dashboard-info {
  margin-top: 20px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 10px 0;
}
</style>

