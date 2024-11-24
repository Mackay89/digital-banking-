<template>
  <div class="transaction-history">
    <h1>Transaction History</h1>
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Type</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="transaction in history" :key="transaction.id">
          <td>{{ transaction.date }}</td>
          <td>{{ transaction.type }}</td>
          <td>{{ transaction.amount }}</td>
          <td>{{ transaction.status }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      history: [
        { id: 1, date: '2024-11-01', type: 'Deposit', amount: 100, status: 'Completed' },
        { id: 2, date: '2024-11-02', type: 'Withdrawal', amount: 50, status: 'Pending' }
      ]
    };
  }
};
</script>

<style scoped>
.transaction-history table {
  width: 100%;
  border-collapse: collapse;
}
.transaction-history th, .transaction-history td {
  padding: 10px;
  text-align: left;
}
</style>

