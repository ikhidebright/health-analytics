<template>
  <div>
    <highcharts :options="chartOptions"></highcharts>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chartOptions: {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: "pie"
        },
        title: {
          text: "<b>Consumption By Methods, August 2016</b>"
        },
        tooltip: {
          pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
        },
        accessibility: {
          point: {
            valueSuffix: "%"
          }
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: "pointer",
            dataLabels: {
              enabled: true,
              format: "<b>{point.name}</b>: {point.percentage:.1f} %",
              connectorColor: "silver"
            }
          }
        },
        series: [
          {
            name: "Share",
            data: [
              { name: "Hiv", y: 61.41 },
              { name: "Family Planing", y: 23.07 },
              { name: "Delivery", y: 15.52 }
            ]
          }
        ]
      }
    };
  }
};
</script>
