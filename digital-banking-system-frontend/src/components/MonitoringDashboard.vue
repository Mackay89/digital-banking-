<template>
  <div class="monitoring-dashboard">
    <h1>Transaction Monitoring</h1>
    <div>
      <p>Transaction Rate: {{ metrics.transactionRate }} TPS</p>
      <p>Error Rate: {{ metrics.errorRate }} %</p>
      <p>Active Users: {{ metrics.activeUsers }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      metrics: {
        transactionRate: 150,
        errorRate: 0.2,
        activeUsers: 1200
      }
    };
  }
};
</script>

<style scoped>
.monitoring-dashboard {
  padding: 20px;
}
.monitoring-dashboard p {
  font-size: 1.1em;
}
</style>

