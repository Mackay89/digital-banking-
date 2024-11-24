<template>
  <div class="tax-report">
    <h2>Tax Report</h2>
    <div class="report-info">
      <p>Total Income: {{ totalIncome }}</p>
      <p>Total Tax Paid: {{ totalTaxPaid }}</p>
    </div>
    <button @click="generateReport" class="btn-generate">Generate Report</button>
  </div>
</template>

<script>
export default {
  name: 'TaxReport',
  data() {
    return {
      totalIncome: 100000,
      totalTaxPaid: 20000
    };
  },
  methods: {
    generateReport() {
      // Logic to generate tax report
    }
  }
}
</script>

<style scoped>
.tax-report {
  padding: 20px;
}

.report-info {
  margin-top: 20px;
}

.btn-generate {
  background-color: #ffc107;
  color: white;
  padding: 10px 20px;
  width: 100%;
  border: none;
  border-radius: 5px;
}
</style>

